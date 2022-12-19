import React from "react";
import Thumbnail from "./Thumbnail";

export interface IVideo {
  title: string;
  duration: string | number;
  coverUrl: string;
}

interface Props {
  items: Array<IVideo>;
}

const VideoList = ({ items }: Props) => {
  return (
    <ul>
      {items.map((item) => (
        <Thumbnail key={item.title} video={item} />
      ))}
    </ul>
  );
};

export default VideoList;
