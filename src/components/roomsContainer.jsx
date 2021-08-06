import React from "react";
import RoomsFilter from "./roomsFilter";
import RoomsList from "./roomsList";

export default function RoomsContainer() {
  return (
    <div>
      <p>welcome to rooms container</p>
      <RoomsFilter />
      <RoomsList />
    </div>
  );
}
