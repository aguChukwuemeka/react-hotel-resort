import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import defaultImage from "../images/room-1.jpeg";

export default function Room({ room }) {
  //   console.log(room);
  const { name, images, slug, price } = room;
  // console.log(typeof images);
  return (
    <article className="room">
      <div className="img-container">
        <img src={images[0] || defaultImage} alt={slug} />
        <div className="price-top">
          <h6>${price}</h6>
          <p>per night</p>
        </div>
        <Link to={`/room/${slug}`} className="btn-custom room-link">
          features
        </Link>
      </div>
      <p className="room-info">{name}</p>
    </article>
  );
}

Room.propTypes = {
  room: PropTypes.shape({
    name: PropTypes.string.isRequired,
    images: PropTypes.arrayOf(PropTypes.string).isRequired,
    slug: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
  }),
};
