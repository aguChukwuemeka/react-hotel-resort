import React from "react";
import Room from "./room";

export default function RoomsList({ sortedRooms }) {

  if (sortedRooms.length === 0)
    return (
      <div className="empty-search">
        <h3>unfortunately no rooms matched your search parameters</h3>
      </div>
    );
  
  return (
    <section className="rooms-list">
      <div className="rooms-list-center">
        {sortedRooms.map((item) => {
          return <Room key={item.id} room={item} />;
        })}
      </div>
    </section>
  );
}
