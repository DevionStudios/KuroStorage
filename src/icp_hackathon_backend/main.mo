import Principal "mo:base/Principal";
import HashMap "mo:base/HashMap";
import Time "mo:base/Time";
import Debug "mo:base/Debug";
import Iter "mo:base/Iter";
import Prelude "mo:base/Prelude";
import Array "mo:base/Array";

actor DigiLocker {

  public type Certificate = {
    var data : Text;
    var fileType : Text;
    var description : Text;
    var lastModified : Int; // timestamp in seconds
  };

  stable var userDocuments : [(Principal, [Certificate])] = [];
  var documents = HashMap.HashMap<Principal, [Certificate]>(1, Principal.equal, Principal.hash);

  public func add(user : Principal, data : Text, fileType : Text, description : Text) {
    let lastModified = Time.now();
    let certificate = {
      var data = data;
      var lastModified = lastModified;
      var fileType = fileType;
      var description = description;
    };

    var exists = documents.get(user);
    switch (exists) {
      case (null) {
        documents.put(user, [certificate]);
      };
      case (?exists) {
        let newCertificates : [Certificate] = Array.append(exists, [certificate]);
        documents.put(user, newCertificates);
      };
    };

  };

  public query func get(forPrincipal : Principal) : async [(data : Text, lastModified : Int, fileType : Text, description : Text)] {
    let exists : ?[Certificate] = documents.get(forPrincipal);
    switch (exists) {
      case (null) { Prelude.unreachable() };
      case (?exists) {
        var certificates : [(Text, Int, Text, Text)] = Array.tabulate<(Text, Int, Text, Text)>(
          exists.size(),
          func(i : Nat) : (Text, Int, Text, Text) {
            (exists[i].data, exists[i].lastModified, exists[i].fileType, exists[i].description);
          },
        );

        return certificates;
      };
    };
  };

  public func update(forPrincipal : Principal, index : Nat, data : Text, fileType : Text, description : Text) {
    let exists : ?[Certificate] = documents.get(forPrincipal);
    switch (exists) {
      case (null) { Prelude.unreachable() };
      case (?exists) {
        var newCertificate : Certificate = {
          var data = data;
          var lastModified = Time.now();
          var fileType = fileType;
          var description = description;
        };
        var newCertificates : [Certificate] = Array.tabulate(
          exists.size(),
          func(i : Nat) : Certificate {
            if (i != index) {
              exists[i];
            } else {
              newCertificate;
            };
          },
        );

        documents.put(forPrincipal, newCertificates);
      };
    };
  };

  public func delete(forPrincipal : Principal, index : Int) {
    let exists : ?[Certificate] = documents.get(forPrincipal);
    switch (exists) {
      case (null) { Prelude.unreachable() };
      case (?exists) {
        var newCertificates : [Certificate] = [];
        var certificatesIter = Iter.range(0, exists.size() - 1);

        for (cert in certificatesIter) {
          if (cert != index) {
            newCertificates := Array.append(newCertificates, [exists[cert]]);
          };
        };

        documents.put(forPrincipal, newCertificates);
      };
    };
  };

  system func preupgrade() {
    userDocuments := Iter.toArray(documents.entries());
  };

  system func postupgrade() {
    documents := HashMap.fromIter<Principal, [Certificate]>(userDocuments.vals(), 1, Principal.equal, Principal.hash);
  };

};
