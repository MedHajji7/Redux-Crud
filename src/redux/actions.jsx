export const ajouterCommande = (commande) => ({
  type: "AJOUTER",
  payload: { ...commande },
});

export const modifierCommande = (commande) => ({
  type: "MODIFIER",
  payload: commande,
});

export const supprimerCommande = (id) => ({
  type: "SUPPRIMER",
  payload: { id },
});
