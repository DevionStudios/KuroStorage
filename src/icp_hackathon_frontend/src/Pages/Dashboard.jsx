import React, { useEffect, useState } from "react";
import DocumentCard from "../Components/DocumentCard";
import { icp_hackathon_backend } from "../../../declarations/icp_hackathon_backend/index";
import { useConnect } from "@connect2ic/react";
import { Principal } from "@dfinity/principal";
export default function Dashboard() {
  const { isConnected, principal } = useConnect();
  const [data, setData] = useState([]);
  const fetchData = async () => {
    const response = await icp_hackathon_backend.get(
      Principal.fromText(principal)
    );
    console.log(response);
    setData(response);
  };
  useEffect(() => {
    if (!isConnected) {
      alert("Please connect your wallet first!");
      return;
    }
    fetchData();
  }, [isConnected]);
  return (
    <>
      <main>
        <section
          className="text-center mx-auto p-6"
          id="board"
          style={{
            width: "80%",
          }}
        >
          <h1 className="text-2xl text-white font-bold">Dashboard</h1>
          <div className="flex flex-col">
            {data?.length > 0
              ? data.map((doc) => {
                  return (
                    <DocumentCard
                      description={doc[3]}
                      document={doc[0]}
                      name={doc[2]}
                    ></DocumentCard>
                  );
                })
              : null}
          </div>
        </section>
      </main>
    </>
  );
}
