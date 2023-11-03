module.exports = function calculerAge(dateNaissance) {
    const dateNaissanceDate = new Date(dateNaissance);
    const maintenant = new Date();

    const differenceAnnees = maintenant.getFullYear() - dateNaissanceDate.getFullYear();
    const moisCourant = maintenant.getMonth();
    const moisNaissance = dateNaissanceDate.getMonth();

    if (moisCourant < moisNaissance || (moisCourant === moisNaissance && maintenant.getDate() < dateNaissanceDate.getDate())) {
        return differenceAnnees - 1;
    } else {
        return differenceAnnees;
    }
}

