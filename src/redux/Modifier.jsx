import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";
import { modifierCommande } from "./actions";

const ModifierCommande = ({ commandes, modifierCommande }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [client, setClient] = useState("");
  const [produits, setProduits] = useState([]);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    const commande = commandes.find((c) => c.id === parseInt(id));
    console.log(commande);
    if (commande) {
      setClient(commande.client);
      setProduits(commande.produits);
      setTotal(commande.total);
    }
  }, [id, commandes]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const statut = total > 0 ? "En cours" : "Annule";
    modifierCommande({ id: parseInt(id), client, produits, total, statut });

    navigate("/");
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>Nom Client : </label>
      <input
        type="text"
        placeholder="Nom du client"
        value={client}
        onChange={(e) => setClient(e.target.value)}
        required
      />
      <br />
      <br />
      <label>Listes Produits :</label>
      <textarea
        value={produits}
        onChange={(e) => setProduits(e.target.value.split(","))}
      />
      <br />
      <br />
      <label>total de Commandes : </label>
      <input
        type="number"
        placeholder="Total"
        value={total}
        onChange={(e) => setTotal(Number(e.target.value))}
        required
      />
      <br />
      <br />

      <button type="submit">Modifier Commande</button>
    </form>
  );
};

const mapStateToProps = (state) => ({
  commandes: state.commandes,
});

export default connect(mapStateToProps, { modifierCommande })(ModifierCommande);
