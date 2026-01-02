// import React from 'react'

// export default function TestProps(props) {
//   return (
//     <div>
//       <h1>Liste des fruits</h1>
//       <ul className="list-group">
//         {props.data.map((x, index) => (
//           <li key={index} className="list-group-item">
//             {x}
//           </li>
//         ))}
//       </ul>
//     </div>
//   )
// }


// import React, { useState } from 'react'

// export default function props() {
//   const [fruit,setFruit]=useState('');
//   const [quantité,setQuantité]=useState(0);
//   return (
//     <>
//     <form className="form">
//       <label className='form-labrl' >Fruit</label>
//       <input type="text" className='form-control' onChange={(e)=>setFruit(e.target.value)} />
//       <label className='form-label' >Quantité</label>
//       <input type="text" className='form-control' onChange={(e)=>setQuantité(e.target.value)} />
//     </form>
//     <ul>
//       <li>Fruit: {fruit}</li>
//       <li>Quantité: {quantité}</li>
//     </ul>

//     </>
//   )
// }




// import axios from 'axios'
// import React, { useEffect, useState } from 'react'
// export default function Effect() {
//   const [data, setData] = useState([])
//   const [loading, setLoading] = useState(true)
//   const [error, setError] = useState(null)

//   useEffect(() => {
//     axios.get('https://.......')
//       .then(response => {
//         setData(response.data)
//         setLoading(false)
//       })
//       .catch(err => {
//         setError("Erreur lors du chargement")
//         setLoading(false)
//       })
//   }, []) // appel API UNE SEULE FOIS
//   if (loading) return <p>Chargement...</p>
//   if (error) return <p>{error}</p>

//   return (
//     <>
//       <h2>Liste des vols</h2>
//       <ul>
//         {data.map((x, index) => (
//           <li key={index}>{x}</li>
//         ))}
//       </ul>
//     </>
//   )
// }

// import React from 'react'
// import { BrowserRouter as Router, Routes, Route, Link, useParams } from 'react-router-dom'

// export default function App() {

//   // Données simulées (liste de fruits)
//   const fruits = [
//     { id: 1, name: 'Pomme' },
//     { id: 2, name: 'Banane' },
//     { id: 3, name: 'Orange' },
//   ]

//   // Composant Home : liste avec liens
//   function Home() {
//     return (
//       <div>
//         <h1>Liste des fruits</h1>
//         <ul>
//           {fruits.map(fruit => (
//             <li key={fruit.id}>
//               {/* Link avec paramètre : /detail/:id */}
//               <Link to={`/detail/${fruit.id}`}>{fruit.name}</Link>
//             </li>
//           ))}
//         </ul>
//       </div>
//     )
//   }

//   // Composant Detail : récupère le paramètre id
//   function Detail() {
//     const { id } = useParams() // useParams permet de récupérer :id depuis l'URL
//     // Recherche du fruit correspondant
//     const fruit = fruits.find(f => f.id === parseInt(id))
//     return (
//       <div>
//         <h1>Détail du fruit</h1>
//         {fruit ? (
//           <p>Nom du fruit : {fruit.name} (ID : {fruit.id})</p>
//         ) : (
//           <p>Fruit non trouvé</p>
//         )}
//         {/* Lien pour revenir à l'accueil */}
//         <Link to="/">← Retour</Link>
//       </div>
//     )
//   }

//   return (
//     <Router>
//       {/* Routes principales */}
//       <Routes>
//         {/* Page d'accueil */}
//         <Route path="/" element={<Home />} />
//         {/* Page détail avec paramètre */}
//         <Route path="/detail/:id" element={<Detail />} />
//       </Routes>
//     </Router>
//   )
// }



import React, { useState } from 'react'
export default function Formulaire() {
const [formData, setFormData] = useState({ nom: '',
     email: '',password: ''})
  const [errors, setErrors] = useState({})
const handleChange = (e) => {const { name, value } = e.target
    setFormData({
      ...formData,[name]: value
    })}  //  Fonction de validation
  const validate = () => {
    let newErrors = {}
    if (!formData.nom.trim()) {
      newErrors.nom = "Le nom est obligatoire"
    }if (!formData.email) {
      newErrors.email = "L'email est obligatoire"
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email invalide"
    }if (!formData.password) {
      newErrors.password = "Mot de passe obligatoire"
    } else if (formData.password.length < 6) {
      newErrors.password = "Minimum 6 caractères"}
    setErrors(newErrors)
    // true si aucune erreur
    return Object.keys(newErrors).length === 0}
  //  Soumission du formulaire
  const handleSubmit = (e) => {
    e.preventDefault() // empêche le rechargement de la page
 if (validate()) {console.log("Données envoyées :", formData)
    setFormData({nom: '',email: '',password: ''})}}
  return (
    <div style={{ maxWidth: '400px', margin: 'auto' }}>
      <h2>Formulaire d'inscription</h2>
      <form onSubmit={handleSubmit}>
        {/* Nom */}
        <div><label>Nom</label><br />
          <input type="text" name="nom" value={formData.nom}
            onChange={handleChange}/>
          {errors.nom && <p style={{ color: 'red' }}>
            {errors.nom}</p>}</div>
        {/* Email */}
        <div><label>Email</label><br />
          <input type="email" name="email"value=
          {formData.email}
            onChange={handleChange}/>
          {errors.email && <p style={{ color: 'red' }}>
            {errors.email}</p>}
        </div>
        {/* Mot de passe */}
        <div>
          <label>Mot de passe</label><br />
          <input type="password" name="password" value=
          {formData.password}
            onChange={handleChange} />
          {errors.password && <p style={{ color: 'red' }}>
            {errors.password}</p>} </div>
        <button type="submit">S'inscrire</button>
      </form></div>
  )
}
