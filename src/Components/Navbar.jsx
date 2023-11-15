"use client";
import React, { useEffect } from "react";
import { Flowbite, Navbar } from "flowbite-react";
import { Dropdown } from "flowbite-react";
import ConnectWallet from "./ConnectWallet";
const CustomNavbar = () => {
  // take the current page from the url
  const [currentPage, setCurrentPage] = React.useState("");

  useEffect(() => {
    if (window) setCurrentPage(window.location.pathname.replace("/", ""));
  }, [currentPage]);

  if (
    currentPage === null ||
    currentPage === undefined ||
    currentPage?.length <= 0
  ) {
    setCurrentPage("aboutus");
  }
  return (
    <Navbar
      fluid={true}
      rounded={true}
      style={{
        background: "rgba(226, 238, 255, 0.1)",
        position: "-webkit-sticky",
        top: 0,
        boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
        backdropFilter: "blur(14.7px)",
        WebkitBackdropFilter: "blur(14.7px)",
        zIndex: 1000,
      }}
    >
      <Navbar.Brand href="aboutus">
        <img
          src={"/LOGO.jpg"}
          className="mr-3"
          alt="Devion Logo"
          height={50}
          width={50}
        />
        <span className="self-center whitespace-nowrap text-xl font-semibold text-white">
          DICLocker
        </span>
      </Navbar.Brand>
      <Navbar.Toggle />
      <Navbar.Collapse>
        <Navbar.Link
          href="/home"
          active={currentPage.includes("home")}
          style={
            currentPage.includes("home")
              ? {
                  color: "#CDD8FF",
                }
              : {
                  color: "white",
                }
          }
        >
          Home
        </Navbar.Link>
        <Navbar.Link
          href="/dashboard"
          active={currentPage.includes("dashboard")}
          style={
            currentPage.includes("dashboard")
              ? {
                  color: "#CDD8FF",
                }
              : {
                  color: "white",
                }
          }
        >
          Dashboard
        </Navbar.Link>
        <ConnectWallet />
      </Navbar.Collapse>
    </Navbar>
  );
};
export default CustomNavbar;
