//a card for each document depending on type, if image show image else show default icon for example if pdf show pdf icon
// Compare this snippet from src/Components/DocumentCard.jsx:
import React, { useEffect } from "react";
import { FaFileDownload, FaShare } from "react-icons/fa";
export default function DocumentCard({ description, document, name }) {
  const [url, setUrl] = React.useState(null);

  useEffect(() => {
    console.log(document);
    let sampleBytes = Uint8Array.from(document, (c) => c.charCodeAt(0));
    let blob = new Blob([sampleBytes], { type: "octet/stream" });
    let url = window.URL.createObjectURL(blob);
    console.log(url);
    setUrl(url);
  }, []);
  return url ? (
    <div className="p-12 mt-6">
      <div className="grid grid-cols-4 grid-rows-1 border-2 rounded-lg items-center text-center justify-stretch">
        <div className="col-span-1 justify-center text-center mx-auto">
          <a href={url} download={name}>
            <FaFileDownload size={25} title="Download File"></FaFileDownload>
          </a>
        </div>
        <div className="col-span-2 text-md text-white p-6 mx-auto">
          {description}
        </div>
        <div
          className="col-span-1 text-md text-white p-6 mx-auto"
          onClick={() => {
            // copy url to clipboard
            navigator.clipboard.writeText(url);
            alert("Copied to clipboard!");
          }}
        >
          <FaShare size={25} title="Share File"></FaShare>
        </div>
      </div>
    </div>
  ) : null;
}
