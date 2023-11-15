import { icp_hackathon_backend } from "../../declarations/icp_hackathon_backend";
import { Principal } from "@dfinity/principal";

const PRINCIPAL = Principal.fromText(
  `t3dfc-epwlr-v7ne7-g4owi-jlbyt-xq4k6-iwnpu-g6522-vru7r-6qbxo-2qe`
);

function getAllDocuments() {
  return icp_hackathon_backend.get(PRINCIPAL);
}

document.querySelector("form").addEventListener("submit", async (e) => {
  e.preventDefault();
  const button = e.target.querySelector("button");

  const name = document.getElementById("name").value.toString();

  button.setAttribute("disabled", true);

  await icp_hackathon_backend.add(
    PRINCIPAL,
    name,
    "text/plain",
    "Very important file"
  );

  button.removeAttribute("disabled");

  await doThis();

  return false;
});

async function doThis() {
  getAllDocuments().then((documents) => {
    console.log("Documents: ", documents);
  });
}
