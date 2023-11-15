import React from "react";
import DocumentCard from "../Components/DocumentCard";
export default function Dashboard() {
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
            <DocumentCard description="nice to meet you all" />
            <DocumentCard description="nice to meet you all" />
            <DocumentCard description="nice to meet you all" />
            <DocumentCard description="nice to meet you all" />
          </div>
        </section>
      </main>
    </>
  );
}
