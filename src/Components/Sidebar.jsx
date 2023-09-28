import React from "react";
import styled from "styled-components";
import { useGlobalContext } from "../context/global";
import { Link } from "react-router-dom";

function Sidebar() {
  const { popularAnime } = useGlobalContext();

  const sorted = popularAnime?.sort((a, b) => {
    return b.score - a.score;
  });

  return (
    <SidebarStyled>
      <h4>
        Top 10 Popular
        <br></br>
        <h5>Anime</h5>
      </h4>
      <div className="anime">
        {sorted?.slice(0, 10).map((anime) => (
          <Link to={`/anime/${anime.mal_id}`} key={anime.mal_id}>
            <img src={anime.images.jpg.large_image_url} alt="" />
            <h5>{anime.title}</h5>
          </Link>
        ))}
      </div>
    </SidebarStyled>
  );
}

const SidebarStyled = styled.div`
  margin-top: 2rem;
  background-color: black;
  border-top: 5px solid #e5e7eb;
  padding-right: 3rem;
  padding-left: 2rem;
  padding-top: 2rem;

  h4{
    color: #00ecc7;
    text-decoration: none;
  }

  h5{
    color: #00ecc7;
  }
  .anime {
    display: flex;
    flex-direction: column;
    width: 150px;

    img {
      width: 100%;
      border-radius: 5px;
      border: 5px solid #e5e7eb;
    }

    a {
      margin-top: 1rem;
      display: flex;
      flex-direction: column;
      gap: 0.4rem;
      color: #27ae60;

      h4 {
        font-size: 1.1rem;
      }
    }
  }
}`;

export default Sidebar;
