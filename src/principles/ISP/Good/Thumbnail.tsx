import React from "react";
import "../../SRP/Style.css";

interface IThumbnailProps {
  coverUrl: string;
}

const Thumbnail = ({ coverUrl }: IThumbnailProps) => {
  return <img src={coverUrl} className='card' alt='img' />;
};

export default Thumbnail;
