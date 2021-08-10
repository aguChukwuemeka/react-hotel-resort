import React, {useEffect} from "react";
import { useSelector, useDispatch } from "react-redux";
import Title from "./title";
import { getTypes } from "../stores/features/room";

// setting  unique values
function getUnique(items, value) {
  return [...new Set(items.map((item) => item[value]))];
}

export default function RoomsFilter({ rooms }) {
  const roomState = useSelector((state) => state.rooms);
  const dispatch = useDispatch();
  //   console.log(roomState);
  const {
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


  useEffect(()=>{
    filterRoomFunc();
  })


  // get unique types
  let types = getUnique(rooms, "type");
  types = ["all", ...types];
  types = types.map((item, index) => {
    return (
      <option key={index} value={item}>
        {item}
      </option>
    );
  });


  function handleChange(event) {
    dispatch(getTypes({ [event.target.name]: event.target.value }));
  }

  function filterRoomFunc() {
    console.log(type);
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
