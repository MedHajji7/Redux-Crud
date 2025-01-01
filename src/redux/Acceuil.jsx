import React, { useState } from "react";
import { connect } from "react-redux";
import { supprimerCommande } from "./actions";
import { Link } from "react-router-dom";
import Menu from "./Menu";
const Acceuil = ({ commandes, supprimerCommande }) => {
  const [statutFilter, setStatutFilter] = useState("Toute");
  
  const filteredCommandes = commandes.filter((commande) => {
    if (statutFilter === "Toute") return true;
    return commande.statut === statutFilter;
  });

  return (
    <div>
      <h1>Liste des Commandes</h1>
      <center>
        <Menu />
        <br />
      </center>
      <label>
        Filtrer par statut:
        <select
          onChange={(e) => setStatutFilter(e.target.value)}
          value={statutFilter}
        >
          <option value="Toute">Toute</option>
          <option value="En cours"> En cours</option>
          <option value="Annule"> Annule</option>
        </select>
      </label>
      {filteredCommandes.length === 0 ? (
        <p>Aucun commande </p>
      ) : (
        <ul >
          {filteredCommandes.map((commande) => (
            <li key={commande.id} style={{border:'solid',marginBottom:'2%'}}>
              <strong>Client:</strong> {commande.client} <br />
              <strong>Produits:</strong> {commande.produits.join(", ")} <br />
              <strong>Total:</strong> {commande.total}
              <br />
              <strong>Statut:</strong> {commande.statut} <br />
              <br />
              <Link to={`/edit/${commande.id}`}>Modifier</Link>
              <button onClick={() => supprimerCommande(commande.id)}>
                Supprimer
              </button>
            </li> 
            
          ))}<br />
        </ul>
      )}
    </div>
  );
};

const mapStateToProps = (state) => ({
  commandes: state.commandes,
});

export default connect(mapStateToProps, { supprimerCommande })(Acceuil);
