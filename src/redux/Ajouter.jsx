import React, { useState } from "react";
import { connect } from "react-redux";
import { useNavigate } from "react-router-dom";
import { ajouterCommande } from "./actions";

const Ajouter = ({ commandes, ajouterCommande }) => {
  const [client, setClient] = useState("");
  const [produits, setProduits] = useState();
  const [total, setTotal] = useState(0);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const statut = total > 0 ? "En cours" : "Annule";
    ajouterCommande({
      id: commandes.length + 1,
      client,
      produits,
      total,
      statut,
    });

    navigate("/");
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>Nom Client : </label>
      <input
        type="text"
        placeholder=""
        value={client}
        onChange={(e) => setClient(e.target.value)}
        required
      />
      <br />
      <br />
      <label>Listes Produits :</label>

      <textarea onChange={(e) => setProduits(e.target.value.split(","))} />

      <br />
      <br />
      <label>total de Commandes : </label>
      <input
        type="number"
        placeholder="Total"
        value={total}
        onChange={(e) => setTotal(parseFloat(e.target.value))}
        required
      />
      <br />
      <br />
      <button type="submit">Ajouter Commande</button>
    </form>
  );
};
const mapStateToProps = (state) => ({
  commandes: state.commandes,
});

export default connect(mapStateToProps, { ajouterCommande })(Ajouter);
