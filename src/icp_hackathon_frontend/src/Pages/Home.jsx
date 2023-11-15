import React, { useState } from "react";
import Input from "../Components/Input";
import TextArea from "../Components/TextArea";
import Button from "../Components/Button";
import { icp_hackathon_backend } from "../../../declarations/icp_hackathon_backend/index";
import { useConnect } from "@connect2ic/react";
import { Principal } from "@dfinity/principal";
import Dashboard from "./Dashboard";
export default function Home() {
  const [description, setDescription] = useState("");
  const [file, setFile] = useState(null);
  const [extension, setFileExtension] = useState(null);
  const [fileName, setFileName] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const { isConnected, principal } = useConnect();
  const [reload, setReload] = useState(false);
  const handleFileChange = async (e) => {
    if (e.target?.files?.length <= 0) return;
    setIsLoading(true);
    await readFileDataAsBase64(e.target.files[0]);
    setFileName(e.target.files[0].name);
    console.log(e.target.files[0].name);
    setFileExtension(e.target.files[0].name.split(".").pop());
    setIsLoading(false);
  };

  function readFileDataAsBase64(file) {
    if (!file) return;
    return new Promise((resolve, reject) => {
      const reader = new FileReader();

      reader.onload = (event) => {
        console.log(event.target.result);
        setFile(event.target.result);
        resolve(event.target.result);
      };

      reader.onerror = (err) => {
        reject(err);
      };
      reader.readAsBinaryString(file);
    });
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!isConnected) {
      alert("Please connect your wallet first!");
      return;
    }
    if (!file) {
      alert("Please upload a file!");
      return;
    }
    if (!description) {
      alert("Please enter a description!");
      return;
    }
    setIsLoading(true);
    await icp_hackathon_backend.add(
      Principal.fromText(principal),
      file,
      fileName,
      description
    );
    setIsLoading(false);
    setReload(!reload);
  };
  return (
    <main className="text-black">
      <section className="h-full w-full">
        <div className="text-center flex flex-col gap-12 items-center justify-center">
          <div className="flex flex-grow p-6">
            <h1 className="text-white text-2xl font-bold">
              Upload Your Document Using The Form Below
            </h1>
          </div>
          <div className="flex flex-grow">
            <form className="flex flex-col">
              <div className="flex flex-col mb-6">
                <label
                  className="block mb-2 text-xl font-medium text-white text-left"
                  for="file_input"
                >
                  Upload Document
                </label>
                <input
                  className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
                  id="file_input"
                  type="file"
                  onChange={handleFileChange}
                />
              </div>
              <div className="mb-6">
                <TextArea
                  title="Description"
                  onChange={(e) => setDescription(e.target.value)}
                  value={description}
                  name={description}
                  style={{
                    color: "#000000",
                  }}
                  placeholder="Enter file description"
                />
              </div>
              <Button
                title="Submit"
                className={
                  "text-center justify-center mt-6 hover:bg-blue-700 hover:text-white"
                }
                onClick={handleSubmit}
                disabled={isLoading}
                style={{
                  color: "#000",
                }}
              />
            </form>
          </div>
        </div>
      </section>
      <section className="">
        <Dashboard reload={reload} />
      </section>
    </main>
  );
}
