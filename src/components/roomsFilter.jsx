import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Title from "./title";
import { getTypes, sortedRoomsByTypes } from "../stores/features/room";

// setting  unique values
function getUnique(items, value) {
  return [...new Set(items.map((item) => item[value]))];
}

export default function RoomsFilter({ props_rooms }) {
  const roomState = useSelector((state) => state.rooms);
  const dispatch = useDispatch();
  console.log(roomState);
  const {
    rooms,
    type,
    capacity,
    price,
    maxPrice,
    minPrice,
    maxSize,
    minSize,
    breakfast,
    pets,
  } = roomState;

  useEffect(() => {
    filterRoomFunc();
  },[]);

  // get unique types. the data to check: (rooms[], value checking)
  let types = getUnique(props_rooms, "type");
  types = ["all", ...types];
  types = types.map((item, index) => {
    return (
      <option key={index} value={item}>
        {item}
      </option>
    );
  });

  function handleChange(event) {
    filterRoomFunc();
    dispatch(getTypes({ [event.target.name]: event.target.value }));
  }

  function filterRoomFunc() {
    console.log(type);
    let tempRooms = [...rooms];
    if (type !== "all") {
      let filterRooms = tempRooms.filter((room) => room.type === type);
      dispatch(sortedRoomsByTypes( filterRooms ));
    }
  }

  return (
    <section className="filter-container">
      <Title title="search rooms" />
      <form className="filter-form">
        <div className="custom-form-group">
          <label htmlFor="type">room type</label>
          <select
            className="custom-form-control"
            name="type"
            id="type"
            value={type}
            onChange={handleChange}
          >
            {types}
          </select>
        </div>
      </form>
    </section>
  );
}
