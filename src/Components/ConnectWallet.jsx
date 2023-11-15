import { ConnectButton, useConnect } from "@connect2ic/react";

export default function ConnectWallet() {
  return (
    <>
      <ConnectButton
        style={{
          background: "transparent",
          fontSize: "0.9rem",
          color: "white",
          height: "0px",
          marginLeft: "20px",
          fontWeight: "700",
          border: "white 1px solid",
        }}
      />
    </>
  );
}
