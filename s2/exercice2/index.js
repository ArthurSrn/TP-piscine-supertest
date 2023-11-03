module.exports = function formaterDate(date) {
    if (!(date instanceof Date)) {
        return "Date invalide";
    }

    const jour = String(date.getDate()).padStart(2, '0');
    const mois = String(date.getMonth() + 1).padStart(2, '0');
    const annee = date.getFullYear();

    return `${jour}/${mois}/${annee}`;
}


