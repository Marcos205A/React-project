import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import NewVideo from '../pages/NewVideo';

const EditVideo = () => {
  const { state } = useLocation();
  const navigate = useNavigate();

  const handleSave = (editedVideo) => {
    const storedVideos = JSON.parse(localStorage.getItem('videos')) || [];
    storedVideos[state.index] = editedVideo;
    localStorage.setItem('videos', JSON.stringify(storedVideos));
    navigate('/');
  };

  return <NewVideo onSave={handleSave} initialData={state.video} isEditing />;
};

export default EditVideo;
