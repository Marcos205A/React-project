import React from 'react';

const VideoList = ({ videos }) => (
  <div>
    {videos.map((video, index) => (
      <div key={index}>
        <h3>{video.title}</h3>
        <img src={video.image} alt={video.title} />
        <p>{video.description}</p>
        <a href={video.link} target="_blank" rel="noopener noreferrer">Ver Video</a>
      </div>
    ))}
  </div>
);

export default VideoList;
