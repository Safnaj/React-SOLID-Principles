import React from "react";
import { IVideo } from "./VideoList";
import "../../SRP/Style.css";

interface IThumbnailProps {
  video: IVideo;
}

/*
The Thumbnail component is quite small and simple, but it has one problem - 
it expects a full video object to be passed in as props, while effectively
 using only one of its properties.
*/

const Thumbnail = ({ video }: IThumbnailProps) => {
  return <img src={video.coverUrl} className='card' alt='img' />;
};

export default Thumbnail;
