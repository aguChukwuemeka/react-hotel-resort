import React from "react";
import Header from "../components/header";
import Banner from "../components/banner";
import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <Header>
      <Banner emoji='👀' title="404" subtitle="OMG! How do i got here 🤦‍♂️">
        <Link to="/" className=" btn-custom">
          Please take me Home
        </Link>
      </Banner>
    </Header>
  );
}
