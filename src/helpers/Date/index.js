export const MONTHS = {
  0: "janvier",
  1: "février",
  2: "mars",
  3: "avril",
  4: "mai",
  5: "juin",
  6: "juillet",
  7: "août",
  8: "septembre",
  9: "octobre",
  10: "novembre",
  11: "décembre",
};

// Les mois doivent commencé à 0 et terminer à 11, et non de 1 à 12 pour pouvoir s'afficher correctement lors que la récuperation du mois dans un composant

export const getMonth = (date) => MONTHS[date.getMonth()];
