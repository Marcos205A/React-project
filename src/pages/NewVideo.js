import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const NewVideo = ({ onSave, initialData = {}, isEditing = false }) => {
  const [title, setTitle] = useState(initialData.title || '');
  const [category, setCategory] = useState(initialData.category || '');
  const [image, setImage] = useState(initialData.image || '');
  const [link, setLink] = useState(initialData.link || '');
  const [description, setDescription] = useState(initialData.description || '');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSave = () => {
    if (!title || !category || !image || !link || !description) {
      setError('Todos los campos son obligatorios');
      return;
    }

    const newVideo = { title, category, image, link, description };
    onSave(newVideo);
    navigate('/');
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleClear = () => {
    setTitle('');
    setCategory('');
    setImage('');
    setLink('');
    setDescription('');
    setError('');
  };

  return (
    <div className="card">
      <h2>{isEditing ? 'Editar Video' : 'Nuevo Video'}</h2>
      {error && <p className="error">{error}</p>}
      <form className="video-form">
        <div className="form-group">
          <input
            type="text"
            placeholder="Título del video"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <select value={category} onChange={(e) => setCategory(e.target.value)}>
            <option value="" disabled>Selección de categoría</option>
            <option value="comedia">Comedia</option>
            <option value="musica">Música</option>
            <option value="peliculas">Películas</option>
          </select>
        </div>
        <div className="form-group">
          <input
            type="file"
            accept="image/*"
            onChange={handleImageUpload}
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            placeholder="Link del video"
            value={link}
            onChange={(e) => setLink(e.target.value)}
          />
        </div>
        <div className="form-group">
          <textarea
            placeholder="Descripción del video"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
        <div className="form-buttons">
          <button type="button" onClick={handleSave}>Guardar</button>
          <button type="button" onClick={handleClear}>Limpiar</button>
        </div>
      </form>
    </div>
  );
};

export default NewVideo;
