module.exports = function dernierJourDuMois(date) {

    const dernierJour = new Date(date);

    dernierJour.setMonth(dernierJour.getMonth() + 1);
    dernierJour.setDate(0);

    return dernierJour;
}
