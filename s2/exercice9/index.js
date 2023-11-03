module.exports = function chevauchementDates(debutDate, finDate, debutDate2, finDate2) {
    // Vérifie si fin1 est avant le début de fin2 ou si fin2 est avant le début de fin1
    if (finDate < debutDate2 || finDate2 < debutDate) {
        return false; // Pas de chevauchement
    } else {
        return true; // Chevauchement détecté
    }
}
