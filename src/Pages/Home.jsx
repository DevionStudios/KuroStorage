import React, { useState } from "react";
import Input from "../Components/Input";
import TextArea from "../Components/TextArea";
import Button from "../Components/Button";

export default function Home() {
  const [description, setDescription] = useState("");

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
                  class="block mb-2 text-xl font-medium text-white text-left"
                  for="file_input"
                >
                  Upload Document
                </label>
                <input
                  class="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
                  id="file_input"
                  type="file"
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
                style={{
                  color: "#000",
                }}
              />
            </form>
          </div>
        </div>
      </section>
    </main>
  );
}
