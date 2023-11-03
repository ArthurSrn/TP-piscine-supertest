module.exports = function formaterDuree(heures, minutes) {
    if (heures < 0 || minutes < 0) {
        return "Durée invalide";
    }

    const heuresFormatees = heures < 10 ? `0${heures}` : heures;
    const minutesFormatees = minutes < 10 ? `0${minutes}` : minutes;

    return `${heuresFormatees}:${minutesFormatees}`;
}
