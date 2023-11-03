module.exports = function premierJourDuMois(date) {
    // Créer une copie de la date
    const premierJour = new Date(date);

    // Définir le jour sur 1 pour obtenir le premier jour du mois
    premierJour.setDate(1);

    return premierJour;
}