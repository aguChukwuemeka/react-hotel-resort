import React from "react";
import Header from "../components/header";
import Banner from "../components/banner";
import { Link } from "react-router-dom";
import RoomsContainer from "../components/roomsContainer";

export default function Rooms() {
  return (
    <React.Fragment>
      <Header styles="roomsHero">
        <Banner title="Our Rooms" subtitle="make your room of choice here">
          <Link to="/" className="btn-custom">
            Navigate to home
          </Link>
        </Banner>
      </Header>
      <section className="container">
        <RoomsContainer />
      </section>
    </React.Fragment>
  );
}
