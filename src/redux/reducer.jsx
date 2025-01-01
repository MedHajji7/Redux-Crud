const initialState = {
  commandes: [
    {
      id: 1,
      client: "Alice",
      produits: ["Produit A", "Produit B"],
      total: 50,
      statut: "En cours",
    },
  ],
};

const commandeReducer = (state = initialState, action) => {
  switch (action.type) {
    case "AJOUTER":
      return {
        ...state,
        commandes: [...state.commandes, action.payload],
      };

    case "MODIFIER":
      return {
        ...state,
        commandes: state.commandes.map((c) =>
          c.id === action.payload.id ? { ...c, ...action.payload } : c
        ),
      };

    case "SUPPRIMER":
      return {
        ...state,
        commandes: state.commandes.filter((c) => c.id !== action.payload.id),
      };

    default:
      return state;
  }
};

export default commandeReducer;
