import React, { useContext } from "react";
import RadioComponent from "./Radio";
import { moviesList } from "../data";
import BsContext from "../Context/BsContext";
import "../Css/SelectAMovie.css";

const SelectAMovie = () => {
  const context = useContext(BsContext);

  // Getting movie and change movie components from the context.
  const { movie, changeMovie } = context;

  const handleChangeMovie = (value) => {
    changeMovie(value);

    //setting movie in localstorage
    window.localStorage.setItem("movie", value);
  };

  return (
    <>
      <h1 className="SM_heading">Select A Movie</h1>
      <div className="SM_main_container">
        {moviesList.map((el, index) => {
          return (
            <RadioComponent
              text={el}
              changeSelection={handleChangeMovie}
              data={movie}
              key={index}
            />
          );
        })}
      </div>
    </>
  );
};

export default SelectAMovie;
