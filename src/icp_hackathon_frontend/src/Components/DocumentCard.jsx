//a card for each document depending on type, if image show image else show default icon for example if pdf show pdf icon
// Compare this snippet from src/Components/DocumentCard.jsx:
import React, { useEffect } from "react";
import { FaFileDownload } from "react-icons/fa";
export default function DocumentCard({ description, document, name }) {
  const [url, setUrl] = React.useState(null);

  useEffect(() => {
    let sampleBytes = new Int8Array(document);
    let blob = new Blob([sampleBytes], { type: "octet/stream" });
    let url = window.URL.createObjectURL(blob);
    console.log(url);
    setUrl(url);
  }, []);
  return url ? (
    <div className="p-12 mt-6">
      <div className="grid grid-cols-4 grid-rows-1 border-2 rounded-lg items-center text-center justify-stretch">
        <div className="col-span-1 justify-center text-center mx-auto">
          <a href={url} name={name}>
            <FaFileDownload size={50} title="Download File"></FaFileDownload>
          </a>
        </div>
        <div className="col-span-2 text-md text-white p-6 mx-auto">
          {description}
        </div>
      </div>
    </div>
  ) : null;
}
