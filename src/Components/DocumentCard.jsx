//a card for each document depending on type, if image show image else show default icon for example if pdf show pdf icon
// Compare this snippet from src/Components/DocumentCard.jsx:
import React from "react";
import { FaFileDownload } from "react-icons/fa";
export default function DocumentCard({ description, document, type }) {
  return (
    <div className="p-12 mt-6">
      <div className="grid grid-cols-4 grid-rows-1 border-2 rounded-lg items-center text-center justify-stretch">
        <div className="col-span-1 justify-center text-center mx-auto">
          <FaFileDownload size={50} title="Download File"></FaFileDownload>
        </div>
        <div className="col-span-2 text-md text-white p-6 mx-auto">
          {description}
        </div>
      </div>
    </div>
  );
}
