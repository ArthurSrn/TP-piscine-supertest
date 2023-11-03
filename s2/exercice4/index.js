// fonction pour ajouter un nombre de jours à une date
module.exports = function ajouterJours(date, jours) {
    const dateObj = new Date(date);

    dateObj.setDate(dateObj.getDate() + jours);

    return dateObj;
}
