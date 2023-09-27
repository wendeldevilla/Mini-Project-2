import React from "react";
import Popular from "./Popular";
import { useGlobalContext } from "../context/global";
import styled from "styled-components";
import Upcoming from "./Upcoming";
import Airing from "./Airing";
import {
  MDBFooter,
  MDBContainer,
  MDBCol,
  MDBRow,
  MDBBtn,
  MDBInput,
  MDBIcon,
} from "mdb-react-ui-kit";

function Homepage() {
  const {
    handleSubmit,
    search,
    handleChange,
    getUpcomingAnime,
    getAiringAnime,
    isSearch,
    searchResults,
  } = useGlobalContext();

  const [rendered, setRendered] = React.useState("popular");

  const switchComponents = () => {
    switch (rendered) {
      case "popular":
        return <Popular rendered={rendered} />;
      case "airing":
        return <Airing rendered={rendered} />;
      case "upcoming":
        return <Upcoming rendered={rendered} />;
      default:
        return <Popular rendered={rendered} />;
    }
  };

  return (
    <HomepageStyled>
      <header>
        <MDBBtn
          href="/"
          className=" position-absolute top-0 start-0 fs-2"
          color="#00ecc7"
          rippleColor="light"
        >
          Anime Wiki
        </MDBBtn>
        <div className="search-container">
          <div className="filter-btn popular-filter">
            <button
              onClick={() => {
                setRendered("popular");
              }}
            >
              Popular<i className="fas fa-fire"></i>
            </button>
          </div>
          <div>
            <form action="" className="search-form" onSubmit={handleSubmit}>
              <div className="input-control">
                <input
                  type="text"
                  placeholder="Search Anime"
                  value={search}
                  onChange={handleChange}
                />
                <button type="submit">Search</button>
              </div>
            </form>
            {isSearch && searchResults.length === 0 && <p>No results found</p>}

            {isSearch && searchResults.length > 0 && (
              <ul>
                {searchResults.map((result) => (
                  <li key={result.id}>{result.name}</li>
                ))}
              </ul>
            )}
          </div>
          <div className="filter-btn airing-filter">
            <button
              onClick={() => {
                setRendered("airing");
                getAiringAnime();
              }}
            >
              Airing
            </button>
          </div>
          <div className="filter-btn upcoming-filter">
            <button
              onClick={() => {
                setRendered("upcoming");
                getUpcomingAnime();
              }}
            >
              Upcoming
            </button>
          </div>
        </div>
        <div className="logo">
          <h1>
            {rendered === "popular"
              ? "Popular Anime"
              : rendered === "airing"
              ? "Airing Anime"
              : "Upcoming Anime"}
          </h1>
        </div>
      </header>
      {switchComponents()}
      <MDBFooter bgColor="#050000" className="text-center text-lg-left">
        <MDBContainer className="p-4 pb-0">
          <section className="mb-4">
            <MDBBtn
              floating
              className="m-1"
              style={{ backgroundColor: "#3b5998" }}
              href="#!"
              role="button"
            >
              <MDBIcon fab icon="facebook-f" />
            </MDBBtn>

            <MDBBtn
              floating
              className="m-1"
              style={{
                backgroundColor: "#55acee",
              }}
              href="#!"
              role="button"
            >
              <MDBIcon fab icon="twitter" />
            </MDBBtn>

            <MDBBtn
              floating
              className="m-1"
              style={{ backgroundColor: "#dd4b39" }}
              href="#!"
              role="button"
            >
              <MDBIcon fab icon="google" />
            </MDBBtn>
            <MDBBtn
              floating
              className="m-1"
              style={{ backgroundColor: "#ac2bac" }}
              href="#!"
              role="button"
            >
              <MDBIcon fab icon="instagram" />
            </MDBBtn>

            <MDBBtn
              floating
              className="m-1"
              style={{ backgroundColor: "#0082ca" }}
              href="#!"
              role="button"
            >
              <MDBIcon fab icon="linkedin-in" />
            </MDBBtn>

            <MDBBtn
              floating
              className="m-1"
              style={{ backgroundColor: "#333333" }}
              href="#!"
              role="button"
            >
              <MDBIcon fab icon="github" />
            </MDBBtn>
          </section>
        </MDBContainer>

        <MDBContainer className="p-4 pb-0">
          <form action="">
            <MDBRow className="d-flex justify-content-center">
              <MDBCol size="auto" className="mb-4 mb-md-0">
                <p className="text-success pt-2">
                  <strong>Sign up for our newsletter</strong>
                </p>
              </MDBCol>

              <MDBCol md="5" size="12" className="mb-4 mb-md-0">
                <MDBInput type="email" id="typeEmail" />
              </MDBCol>

              <MDBCol size="auto" className="mb-4 mb-md-0">
                <MDBBtn color="success" rippleColor="light">
                  Subscribe
                </MDBBtn>
              </MDBCol>
            </MDBRow>
          </form>
        </MDBContainer>

        <div
          className="text-center text-success p-3"
          style={{ backgroundColor: "#050000" }}
        >
          &copy; {new Date().getFullYear()} Copyright{" "}
        </div>
      </MDBFooter>
    </HomepageStyled>
  );
}

const HomepageStyled = styled.div`
  background-color: #050000;
  header {
    padding-top: 2rem;
    color: #00ecc7;
    width: 60%;
    margin: 0 auto;
    transition: all 0.4s ease-in-out;
    @media screen and (max-width: 1530px) {
      width: 95%;
    }
    .logo {
      display: flex;
      align-items: center;
      justify-content: center;
      margin-top: 4rem;
      margin-bottom: 1rem;
    }
    .search-container {
      display: flex;
      font-color: #00ecc7;
      align-items: center;
      justify-content: center;
      gap: 1rem;
      button {
        color: #00ecc7;
        display: flex;
        align-items: center;
        gap: 0.5rem;
        padding: 0.7rem 1.5rem;
        outline: none;
        border-radius: 30px;
        font-size: 1.2rem;
        background-color: transparent;
        cursor: pointer;
        transition: all 0.4s ease-in-out;
        font-family: inherit;
        border: transparent;
        &:hover {
          background-color: #699497;
        }
      }
      form {
        position: relative;
        width: 50vh;
        .input-control {
          position: relative;
          transition: all 0.4s ease-in-out;
        }

        .input-control input {
          width: 100%;
          padding: 0.7rem 1rem;
          border: none;
          outline: none;
          border-radius: 30px;
          font-size: 1.2rem;
          background-color: #fff;
          border: 2px solid #e5e7eb;
          transition: all 0.4s ease-in-out;
        }
        .input-control button {
          position: absolute;
          background-color: #699497;
          right: 0;
          top: 50%;
          transform: translateY(-50%);
        }
      }
    }
  }
`;

export default Homepage;
