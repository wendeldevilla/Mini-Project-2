import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { useGlobalContext } from "../context/global";
import nime from "./nime.png";

import { Link } from "react-router-dom";

function Gallery() {
  const { getAnimePictures, pictures } = useGlobalContext();
  const { id } = useParams();
  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1);
  };

  const [index, setIndex] = useState(0);

  const handleImageClick = (i) => {
    setIndex(i);
  };

  useEffect(() => {
    getAnimePictures(id);
  }, [id]);

  return (
    <GalleryStyled>
      <div className="back">
        <button onClick={goBack}>
          <i className="fas fa-arrow-left" style={{ color: "#00ecc7" }}></i>{" "}
          Back
        </button>
      </div>

      <div className="weblog">
        <Link to="/">
          <img src={nime} alt="logo" height={300} width={300} />
        </Link>
      </div>
      <div className="big-image">
        <img src={pictures[index]?.jpg.image_url} alt="" />
      </div>
      <div className="small-images">
        {pictures?.map((picture, i) => (
          <div
            className="image-con"
            onClick={() => {
              handleImageClick(i);
            }}
            key={i}
          >
            <img
              src={picture?.jpg.image_url}
              style={{
                border: i === index ? "3px solid #27AE60" : "3px solid #e5e7eb",
                filter: i === index ? "grayscale(0)" : "grayscale(60%)",
                transform: i === index ? "scale(1.1)" : "scale(1)",
                transition: "all .3s ease-in-out",
              }}
              alt=""
            />
          </div>
        ))}
      </div>
    </GalleryStyled>
  );
}

const GalleryStyled = styled.div`
  background-color: #050000;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding:0;

  
  .back button {
    position: absolute;
    top: 2rem;
    left: 2rem;
    background-color: transparent;
    border: none;
    outline: none;
    cursor: pointer;
    color:  #00ecc7;
    font-weight: 600;
    font-size: 1.2rem;
    margin: 5px;

  }

  .weblog img {
    position: absolute;
    right: 0;
    top: -5rem;
  }

  .big-image {
    display: inline-block;
    padding: 2rem;
    margin: 2rem 0;
    background-color: #699497;
    border-radius: 7px;
    border: 5px solid #e5e7eb;
    position: relative;

    img {
      width: 350px;
    }
  }

  .small-images {
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
    width: 80%;
    padding: 2rem;
    border-radius: 7px;
    background-color: #699497;
    border: 5px solid #e5e7eb;

    img {
      width: 6rem;
      height: 6rem;
      object-fit: cover;
      cursor: pointer;
      border-radius: 5px;
      border: 3px solid #e5e7eb;
    }
  }
}`;

export default Gallery;
