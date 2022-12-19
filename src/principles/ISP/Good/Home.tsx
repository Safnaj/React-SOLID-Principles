import React from "react";
import VideoList from "./VideoList";
import Data from "../data.json";
import "../../SRP/Style.css";

const Home = () => {
  return (
    <div className='wrapper'>
      <VideoList items={Data} />
    </div>
  );
};

export default Home;
