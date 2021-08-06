import React from "react";
import Title from "./title";
import Loading from "./loading";
import Rooms from "./room";
import { useSelector } from "react-redux";

export default function Features() {
  const roomState = useSelector((state) => state.rooms);
  let { isLoading, featuredRooms: rooms } = roomState;
  rooms = rooms.map((room) => {
    return <Rooms key={room.id} room={room} />;
  });

  //   console.log(roomState);
  //   console.log(rooms);

  return (
    <section className="featured-rooms">
      <Title title="featured rooms" />
      <div className="featured-rooms-center">
        {isLoading ? <Loading /> : rooms}
      </div>
    </section>
  );
}
