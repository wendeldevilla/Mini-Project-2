import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { useGlobalContext } from "../context/global";

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
          <i className="fas fa-arrow-left"></i>
          Back
        </button>
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
  background-color: #ededed;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;

  .back button {
    position: absolute;
    top: 2rem;
    left: 2rem;
    background-color: transparent;
    border: none;
    outline: none;
    cursor: pointer;
    color: #eb5757;
    font-weight: 600;
    font-size: 1.2rem;

    a {
      font-weight: 600;
      text-decoration: none;
      color: #eb5757;
      display: flex;
      align-items: center;
      gap: 0.5rem;
    }
  }

  .big-image {
    display: inline-block;
    padding: 2rem;
    margin: 2rem 0;
    background-color: #fff;
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
    background-color: #fff;
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
