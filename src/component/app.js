// import React from 'react'
// import TestProps from './props'

// export default function App() {

//   const fruits = ['Pomme', 'Banane', 'Orange']

//   return (
//     <div className="container mt-4">
//       <TestProps data={fruits} />
//     </div>
//   )
// }


// Composant Detail : récupère le paramètre id
  function Detail() {
    const { id } = useParams() // useParams permet
    //  de récupérer :id depuis l'URL
    // Recherche du fruit correspondant
    const fruit = fruits.find(f => f.id === parseInt(id))
    return (
      <div><h1>Détail du fruit</h1>
        {fruit ? (
          <p>Nom du fruit : {fruit.name} (ID :
           {fruit.id})</p>
        ) : (
          <p>Fruit non trouvé</p>)}
        {/* Lien pour revenir à l'accueil */}
        <Link to="/">← Retour</Link>
      </div>
    )}
  return (
    <Router>
      {/* Routes principales */}
      <Routes>
        {/* Page d'accueil */}
        <Route path="/" element={<Home />} />
        {/* Page détail avec paramètre */}
        <Route path="/detail/:id" element={<Detail />} />
      </Routes>
    </Router>
  )
