// src/components/UserProfile.js

import React, { useState } from 'react';

// Pas besoin d'importer un fichier CSS local, on utilise Bootstrap !

const UserProfile = () => {
  // --- La logique React reste exactement la même ---
  const [user, setUser] = useState({
    name: 'Jean Dupont',
    email: 'jean.dupont@example.com',
    joinDate: '15 Janvier 2023',
    avatar: 'https://thumbs.dreamstime.com/z/illustration-d-un-avatar-%C3%A9tudiant-ic%C3%B4ne-de-profil-utilisateur-jeunesse-portrait-simple-l-dessin-anim%C3%A9-vectorielle-276205531.jpg',
  });

  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({ ...user });

  const handleEditClick = () => {
    setIsEditing(true);
    setFormData({ ...user });
  };

  const handleCancelClick = () => {
    setIsEditing(false);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSaveClick = (e) => {
    e.preventDefault();
    console.log('Envoi des nouvelles données au serveur :', formData);
    setTimeout(() => {
      setUser(formData);
      setIsEditing(false);
      alert('Profil mis à jour avec succès !');
    }, 1000);
  };

  // --- Le JSX est maintenant structuré avec les classes Bootstrap ---
  return (
    // `container` centre le contenu et `mt-4` ajoute une marge en haut
    <div className="container mt-4">
      {/* Un Card pour l'en-tête pour un look plus net */}
      <div className="card mb-4">
        <div className="card-body">
          <h1 className="card-title text-info">Mon Profil</h1>
        </div>
      </div>

      {/* `row` et `col-md-8/4` créent une mise en page responsive sur deux colonnes */}
      <div className="row">
        {/* Colonne de gauche : Informations principales (8/12 colonnes sur écran moyen et plus) */}
        <div className="col-md-8">
          <div className="card">
            <div className="card-body text-center">
              {/* `rounded-circle` rend l'image ronde, `d-block mx-auto` la centre */}
              <img src={user.avatar} className="rounded-circle d-block mx-auto mb-3" alt="Avatar de l'utilisateur" style={{width: '150px', height: '150px', objectFit: 'cover',border:'2px solid '}} />

              {!isEditing ? (
                // --- MODE VUE ---
                <div>
                  <h2 className="card-title">{user.name}</h2>
                  <p className="card-text"><strong className='text-secondary'>Email :</strong> {user.email}</p>
                  <p className="card-text"><strong className='text-secondary'>Membre depuis le :</strong> {user.joinDate}</p>
                  <button onClick={handleEditClick} className="btn btn-outline-info">
                    Modifier mon profil
                  </button>
                </div>
              ) : (
                // --- MODE ÉDITION ---
                <form onSubmit={handleSaveClick} className="text-start">
                  {/* `mb-3` ajoute une marge en bas pour espacer les éléments du formulaire */}
                  <div className="mb-3">
                    <label htmlFor="name" className="form-label">Nom</label>
                    <input
                      type="text"
                      className="form-control"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email</label>
                    <input
                      type="email"
                      className="form-control"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  {/* `d-flex gap-2` met les boutons côte à côte avec un espace entre eux */}
                  <div className="d-flex gap-2">
                    <button type="submit" className="btn btn-success">
                      Enregistrer
                    </button>
                    <button type="button" onClick={handleCancelClick} className="btn btn-secondary">
                      Annuler
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>

        {/* Colonne de droite : Actions (4/12 colonnes sur écran moyen et plus) */}
        <div className="col-md-4">
          <div className="card">
            <div className="card-body">
              <h3 className="card-title">Mes Actions</h3>
              {/* `list-group` et `list-group-item` créent une belle liste de liens */}
              <ul className="list-group list-group-flush">
                <li className="list-group-item"><a href="/cours" className='nav-link'> Mes cours</a></li>
                <li className="list-group-item"><a href="/cours" className='nav-link'> Changer mon mot de passe</a></li>
                <li className="list-group-item"><a href="/Profil" className='nav-link'> Paramètres du compte</a></li>
                <li className="list-group-item">
                  {/* `text-danger` colore le lien en rouge */}
                  <a href="/cours" className="btn btn-danger "> Se Déconnecter</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;