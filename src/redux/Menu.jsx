import React from 'react'
import {Link} from 'react-router-dom'
export default function Menu() {
  return (
    <div>
      <nav>
        <Link to={"/add"} style={{marginRight:'2%'}} >Ajouter Commande</Link>
        <Link to={"/"}>Liste des Commandes</Link>
      </nav>
    </div>
  )
}
