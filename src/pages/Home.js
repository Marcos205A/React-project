import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const [videos, setVideos] = useState(JSON.parse(localStorage.getItem('videos')) || []);
  const navigate = useNavigate();

  const handleDelete = (index) => {
    const updatedVideos = videos.filter((_, i) => i !== index);
    setVideos(updatedVideos);
    localStorage.setItem('videos', JSON.stringify(updatedVideos));
  };

  const handleEdit = (index) => {
    const videoToEdit = videos[index];
    navigate('/edit', { state: { video: videoToEdit, index } });
  };

  const categories = {
    comedia: 'Comedia',
    musica: 'Música',
    peliculas: 'Películas'
  };

  const categorizedVideos = videos.reduce((acc, video) => {
    if (!acc[video.category]) {
      acc[video.category] = [];
    }
    acc[video.category].push(video);
    return acc;
  }, {});

  return (
    <div>
      {/* Sección introductoria */}
      <div className="intro-section">
        <div className="intro-text">
          <h2>Challenge React</h2>
          <p>Este challenge combina lo que es react con javascript, para poder listar videos, dando click en las imagenes, editando información de los ya creados/creando nuevos.</p>
        </div>
        <div className="intro-video">
          <iframe 
            width="300" 
            height="200" 
            src="https://www.youtube.com/embed/dQw4w9WgXcQ" 
            title="YouTube video player" 
            frameBorder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
            allowFullScreen
          />
        </div>
      </div>

      {/* Categorías y videos */}
      {Object.keys(categories).map((category) => (
        <div key={category}>
          <h2 className="category-title">{categories[category]}</h2>
          <div className="video-list">
            {categorizedVideos[category] && categorizedVideos[category].map((video, index) => (
              <div key={index} className="video-card">
                <h3>{video.title}</h3>
                <img 
                  src={video.image} 
                  alt={video.title} 
                  onClick={() => window.open(video.link, '_blank')} 
                />
                <p>{video.description}</p>
                <div className="video-card-buttons">
                  <button onClick={() => handleEdit(index)}>Editar</button>
                  <button onClick={() => handleDelete(index)}>Borrar</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Home;
