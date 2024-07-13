import React, { useState, useEffect } from 'react';
import { useHistory, useParams } from 'react-router-dom';

const EditVideo = ({ onSave, videos }) => {
  const { id } = useParams(); 
  const history = useHistory();
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('');
  const [image, setImage] = useState('');
  const [link, setLink] = useState('');
  const [description, setDescription] = useState('');

  useEffect(() => {
    
    const videoToEdit = videos.find(video => video.id === parseInt(id, 10));
    if (videoToEdit) {
      setTitle(videoToEdit.title);
      setCategory(videoToEdit.category);
      setImage(videoToEdit.image);
      setLink(videoToEdit.link);
      setDescription(videoToEdit.description); 
    }
  }, [id, videos]);

  const handleSave = () => {
    const editedVideo = {
      id: parseInt(id, 10),
      title,
      category,
      image,
      link,
      description,
    };

    onSave(editedVideo);
    history.push('/'); 
  };

  const handleClear = () => {
    setTitle('');
    setCategory('');
    setImage('');
    setLink('');
    setDescription('');
  };

  return (
    <div className="card">
      <h2>Editar Video</h2>
      <div className="video-form">
        <div className="form-group">
          <input
            type="text"
            placeholder="Título del Video"
            value={title}
            onChange={e => setTitle(e.target.value)}
          />
          <select
            value={category}
            onChange={e => setCategory(e.target.value)}
          >
            <option value="">Selección de categoría</option>
            <option value="comedia">Comedia</option>
            <option value="musica">Música</option>
            <option value="peliculas">Películas</option>
          </select>
        </div>
        <div className="form-group">
          <input
            type="file"
            accept="image/*"
            onChange={e => {

            }}
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            placeholder="Link del Video"
            value={link}
            onChange={e => setLink(e.target.value)}
          />
        </div>
        <div className="form-group">
          <textarea
            placeholder="Descripción del Video"
            value={description}
            onChange={e => setDescription(e.target.value)}
          />
        </div>
        <div className="form-buttons">
          <button onClick={handleSave}>Guardar Cambios</button>
          <button onClick={handleClear}>Limpiar</button>
        </div>
      </div>
    </div>
  );
};

export default EditVideo;
