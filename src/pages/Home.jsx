import React, { useEffect } from "react";
import Header from "../components/header";
import Banner from "../components/banner";
import { Link } from "react-router-dom";
import OurServices from "../components/our-services";
import Features from "../components/features";
import { useDispatch } from "react-redux";
import { setRoom, getCurrentState } from "../stores/features/room.js";

export default function Home() {
  const dispatch = useDispatch();

    useEffect(() => {
      dispatch(setRoom(getCurrentState()));
    }, [dispatch]);

  return (
    <React.Fragment>
      <Header styles="defaultHero">
        <Banner title="luxurious rooms" subtitle="deluxe rooms starting at $29">
          <Link to="/rooms" className="btn-custom">
            Our Rooms
          </Link>
        </Banner>
      </Header>
      <OurServices />
      <Features />
    </React.Fragment>
  );
}
