import React, { Fragment } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import StylesHeader from "../components/styleHeaderComponents";
import defaultImage from "../images/room-1.jpeg";
import Banner from "../components/banner";

export default function SingleRoom({ match }) {
  const state = useSelector((state) => state.rooms);
  const { rooms } = state;

  function getSinglePage(slug) {
    return rooms.find((room) => room.slug === slug);
  }

  const data = getSinglePage(match.params.slug);
  // console.log(data);

  if (!data) {
    return (
      <div
        className="error d-flex align-items-center justify-content-center"
        style={{ height: "74vh" }}
      >
        <div className="error">
          <h3>such room could not be found!</h3>
          <Link to="/rooms" className="btn-custom mt-3">
            back to rooms
          </Link>
        </div>
      </div>
    );
  }

  const { name, capacity, description, size, price, extras, breakfast, pet, images: image } = data;
  const [mainImage, ...restImages] = image;

  return (
    <Fragment>
      <StylesHeader images={mainImage || defaultImage}>
        <Banner title={`${name} room`}>
          <Link to="/rooms" className="btn-custom">
            back to rooms
          </Link>
        </Banner>
      </StylesHeader>
      <section className="single-room">
        <div className="single-room-images">
          {restImages.map((image, index) => {
            return (
              <img key={index} src={image} alt={image.name} className="" />
            );
          })}
        </div>
        <div className="single-room-info">
          <article className="desc">
            <h3>details</h3>
            <p>{description}</p>
          </article>
          <article className="info">
            <h3>info</h3>
            <h6>price : ${price}</h6>
            <h6>size : {size}</h6>
            <h6>max capacity : {capacity > 1 ? `${capacity} people` : `${capacity} person`}</h6>
            <h6>{pet ? "pets is allowed" : "no pet is allowed"}</h6>
            <h6>{breakfast && "free breakfast included"}</h6>
          </article>
        </div>
      </section>
      <footer className='room-extras'>
        <h6>extras</h6>
        <ul className="extras">
        {extras.map((item, index)=>{
          return <li key={index} className=''>- {item}</li>
        })}
        </ul>
      </footer>
    </Fragment>
  );
}
