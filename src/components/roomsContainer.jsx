import React from "react";
import RoomsFilter from "./roomsFilter";
import RoomsList from "./roomsList";
import { useSelector } from "react-redux";
import Loading from "./loading";

export default function RoomsContainer() {
  const roomState = useSelector((state) => state.rooms);
  let { isLoading, sortedRooms, rooms } = roomState;

  if (isLoading) {
    return <Loading />;
  } else
    return (
      <div className="rooms-list">
        <div className="rooms-list-center"></div>
        <RoomsFilter filterRooms={rooms} />
        <RoomsList sortedRooms={sortedRooms} />
      </div>
    );
}
