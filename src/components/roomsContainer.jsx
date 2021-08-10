import React from "react";
import RoomsFilter from "./roomsFilter";
import RoomsList from "./roomsList";
import { useSelector } from "react-redux";
import Loading from "./loading";

export default function RoomsContainer() {
  const roomState = useSelector((state) => state.rooms);
  //   console.log(roomState);
  let { isLoading, sortedRooms, rooms } = roomState;
  if (isLoading) return <Loading />;
  return (
    <div className="rooms-list">
      <div className="rooms-list-center"></div>
      <RoomsFilter rooms={rooms} />
      <RoomsList rooms={sortedRooms} />
    </div>
  );
}

// export const withRoomsConsumer = (Component) => (props) =>
//   <RoomsConsumer>{(value) => <Component {...props} context={value} />}</RoomsConsumer>;
