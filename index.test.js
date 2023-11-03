const request = require('supertest');
const app = require('./index');


describe('GET /', () => {
    test('Test 1', (done) => {
        request(app)
            .get('/')
            .expect(200)
            .end((err, res) => {
                if (err) return done(err);
                expect(res.body).toEqual([{ id: 1, name: 'John Doe' }]);
                done();
            });
    });
});

describe('POST /:param', () => {
    test('Test 1/2', (done) => {
        request(app)
            .post('/1')
            .expect(200)
            .end((err, res) => {
                if (err) return done(err);
                expect(res.body).toEqual([{ error: false, num: "1" }]);
                done();
            });
    });
});

////////////////////////////////////////////////////////////////////////////////////////////////
describe("POST /s1/exercice1", () => {
    test("Renvoie une erreur si n1 est null", async () => {
        const res = await request(app)
            .post("/s1/exercice1")
            .send({ n1: null, n2: 2 });
        expect(res.statusCode).toBe(200);
        expect(res.body).toEqual([{ reponse: "Veuillez entrer un nombre valide" }]);
    });

    test("Renvoie une erreur si n2 est null", async () => {
        const res = await request(app)
            .post("/s1/exercice1")
            .send({ n1: 1, n2: null });
        expect(res.statusCode).toBe(200);
        expect(res.body).toEqual([{ reponse: "Veuillez entrer un nombre valide" }]);
    });

    test("Renvoie une erreur si n1 et n2 sont null", async () => {
        const res = await request(app)
            .post("/s1/exercice1")
            .send({ n1: null, n2: null });
        expect(res.statusCode).toBe(200);
        expect(res.body).toEqual([{ reponse: "Veuillez entrer un nombre valide" }]);
    });

    test("Calcule correctement la somme de n1 et n2", async () => {
        const res = await request(app).post("/s1/exercice1").send({ n1: 1, n2: 2 });
        expect(res.statusCode).toBe(200);
        expect(res.body).toEqual([{ reponse: 3 }]);
    });
});

////////////////////////////////////////////////////////////////////////////////////////////////
describe("POST /s1/exercice2", () => {
    test("Renvoie une erreur si n1 est null", async () => {
        const res = await request(app)
            .post("/s1/exercice2")
            .send({ n1: null, n2: 2 });
        expect(res.statusCode).toBe(200);
        expect(res.body).toEqual([{ reponse: "Veuillez entrer un nombre valide" }]);
    });

    test("Renvoie une erreur si n2 est null", async () => {
        const res = await request(app)
            .post("/s1/exercice2")
            .send({ n1: 1, n2: null });
        expect(res.statusCode).toBe(200);
        expect(res.body).toEqual([{ reponse: "Veuillez entrer un nombre valide" }]);
    });

    test("Renvoie une erreur si n1 et n2 sont null", async () => {
        const res = await request(app)
            .post("/s1/exercice2")
            .send({ n1: null, n2: null });
        expect(res.statusCode).toBe(200);
        expect(res.body).toEqual([{ reponse: "Veuillez entrer un nombre valide" }]);
    });

    test("Calcule correctement la somme de n1 et n2", async () => {
        const res = await request(app).post("/s1/exercice2").send({ n1: 2, n2: 2 });
        expect(res.statusCode).toBe(200);
        expect(res.body).toEqual([{ reponse: 0 }]);
    });
});

////////////////////////////////////////////////////////////////////////////////////////////////
describe("POST /s1/exercice3", () => {
    test("Renvoie une erreur si n1 est null", async () => {
        const res = await request(app)
            .post("/s1/exercice3")
            .send({ n1: null, n2: 2 });
        expect(res.statusCode).toBe(200);
        expect(res.body).toEqual([{ reponse: "Veuillez entrer un nombre valide" }]);
    });

    test("Renvoie une erreur si n2 est null", async () => {
        const res = await request(app)
            .post("/s1/exercice3")
            .send({ n1: 1, n2: null });
        expect(res.statusCode).toBe(200);
        expect(res.body).toEqual([{ reponse: "Veuillez entrer un nombre valide" }]);
    });

    test("Renvoie une erreur si n1 et n2 sont null", async () => {
        const res = await request(app)
            .post("/s1/exercice3")
            .send({ n1: null, n2: null });
        expect(res.statusCode).toBe(200);
        expect(res.body).toEqual([{ reponse: "Veuillez entrer un nombre valide" }]);
    });

    test("Calcule correctement la somme de n1 et n2", async () => {
        const res = await request(app).post("/s1/exercice3").send({ n1: 2, n2: 2 });
        expect(res.statusCode).toBe(200);
        expect(res.body).toEqual([{ reponse: 4 }]);
    });
});

////////////////////////////////////////////////////////////////////////////////////////////////
describe("POST /s1/exercice4", () => {
    test("Renvoie une erreur si n1 est null", async () => {
        const res = await request(app)
            .post("/s1/exercice4")
            .send({ n1: null, n2: 2 });
        expect(res.statusCode).toBe(200);
        expect(res.body).toEqual([{ reponse: "Veuillez entrer un nombre valide" }]);
    });

    test("Renvoie une erreur si n2 est null", async () => {
        const res = await request(app)
            .post("/s1/exercice4")
            .send({ n1: 1, n2: null });
        expect(res.statusCode).toBe(200);
        expect(res.body).toEqual([{ reponse: "Veuillez entrer un nombre valide" }]);
    });

    test("Renvoie une erreur si n1 et n2 sont null", async () => {
        const res = await request(app)
            .post("/s1/exercice4")
            .send({ n1: null, n2: null });
        expect(res.statusCode).toBe(200);
        expect(res.body).toEqual([{ reponse: "Veuillez entrer un nombre valide" }]);
    });



    test("Calcule correctement la somme de n1 et n2", async () => {
        const res = await request(app).post("/s1/exercice4").send({ n1: 4, n2: 2 });
        expect(res.statusCode).toBe(200);
        expect(res.body).toEqual([{ reponse: 2 }]);
    });
});

////////////////////////////////////////////////////////////////////////////////////////////////
describe('POST /s1/exercice5', () => {
    test("Renvoie une erreur si n1 est null", async () => {
        const res = await request(app).post("/s1/exercice6").send({ n1: null });
        expect(res.statusCode).toBe(200);
        expect(res.body).toEqual([{ reponse: "Veuillez entrer un nombre valide" }]);
    });

    test("Factorielle de n1", async () => {
        const res = await request(app).post("/s1/exercice5").send({ n1: 5 });
        expect(res.statusCode).toBe(200);
        expect(res.body).toEqual([{ reponse: 120 }]);
    });

    test("Renvoie une erreur si n1 et n2 sont null", async () => {
        const res = await request(app)
            .post("/s1/exercice5")
            .send({ n1: null, n2: null });
        expect(res.statusCode).toBe(200);

    });

});

////////////////////////////////////////////////////////////////////////////////////////////////
describe('POST /s1/exercice6', () => {
    test("Renvoie une erreur si n1 est null", async () => {
        const res = await request(app).post("/s1/exercice6").send({ n1: null });
        expect(res.statusCode).toBe(200);
        expect(res.body).toEqual([{ reponse: "Veuillez entrer un nombre valide" }]);
    });

    test("n1 est un nombre pair", async () => {
        const res = await request(app).post("/s1/exercice6").send({ n1: 2 });
        expect(res.statusCode).toBe(200);
        expect(res.body).toEqual([{ reponse: "pair" }]);
    });

    test("n1 est un nombre impair", async () => {
        const res = await request(app).post("/s1/exercice6").send({ n1: 7 });
        expect(res.statusCode).toBe(200);
        expect(res.body).toEqual([{ reponse: "impair" }]);
    });
});

////////////////////////////////////////////////////////////////////////////////////////////////
describe('POST /s1/exercice7', () => {
    test("Renvoie une erreur si n1 est null", async () => {
        const res = await request(app).post("/s1/exercice7").send({ n1: null });
        expect(res.statusCode).toBe(200);
        expect(res.body).toEqual([{ reponse: "Veuillez entrer un nombre valide" }]);
    });

    test("Calcul formule celsius", async () => {
        const res = await request(app).post("/s1/exercice7").send({ n1: 2 });

        expect(res.statusCode).toBe(200);
        expect(res.body).toEqual([{ reponse: 35.6 }]);
    });

});

////////////////////////////////////////////////////////////////////////////////////////////////
describe('POST /s1/exercice8', () => {
    test("Renvoie une erreur si n1 est null", async () => {
        const res = await request(app).post("/s1/exercice8").send({ n1: null });
        expect(res.statusCode).toBe(200);
        expect(res.body).toEqual([{ reponse: "Veuillez entrer un nombre valide" }]);
    });

    test("formule air du cercle ", async () => {
        const res = await request(app).post("/s1/exercice8").send({ n1: 4 });
        expect(res.statusCode).toBe(200);
        expect(res.body).toEqual([{ reponse: 50.26548245743669 }]);
    });

});


////////////////////////////////////////////////////////////////////////////////////////////////
describe('POST /s1/exercice9', () => {
    test("Renvoie une erreur si n1 est null", async () => {
        const res = await request(app).post("/s1/exercice9").send({ n1: null });
        expect(res.statusCode).toBe(200);
        expect(res.body).toEqual([{ reponse: "Veuillez entrer un mot valide" }]);
    });

    test("le mot est un palindrome", async () => {
        const res = await request(app).post("/s1/exercice9").send({ n1: "radar" });
        expect(res.statusCode).toBe(200);
        expect(res.body).toEqual([{ reponse: true }]);
    });

});


////////////////////////////////////////////////////////////////////////////////////////////////
describe("POST /s1/exercice10", () => {
    test("Renvoie une erreur si n1 est null", async () => {
        const res = await request(app)
            .post("/s1/exercice10")
            .send({ n1: null, n2: 2 });
        expect(res.statusCode).toBe(200);
        expect(res.body).toEqual([{ reponse: "Veuillez entrer un nombre valide" }]);
    });

    test("Renvoie une erreur si n2 est null", async () => {
        const res = await request(app)
            .post("/s1/exercice10")
            .send({ n1: 1, n2: null });
        expect(res.statusCode).toBe(200);
        expect(res.body).toEqual([{ reponse: "Veuillez entrer un nombre valide" }]);
    });

    test("Renvoie une erreur si n1 et n2 sont null", async () => {
        const res = await request(app)
            .post("/s1/exercice10")
            .send({ n1: null, n2: null });
        expect(res.statusCode).toBe(200);
        expect(res.body).toEqual([{ reponse: "Veuillez entrer un nombre valide" }]);
    });

    test("plus grand commun diviseur de n1 et n2", async () => {
        const res = await request(app)
            .post("/s1/exercice10")
            .send({ n1: 6, n2: 3 });
        expect(res.statusCode).toBe(200);
        expect(res.body).toEqual([{ reponse: 3 }]);
    });
});


////////////////////////////////////////////////////////////////////////////////////////////////
describe("POST /s2/exercice1", () => {
    test("calcule la date d'il y a dix ans", async () => {
        const dateActuelle = new Date();
        const datePassee = new Date(dateActuelle);
        datePassee.setFullYear(dateActuelle.getFullYear() - 10);
        const datePasseeFormatee = datePassee.toISOString().split("T")[0];

        const response = await request(app)
            .post("/s2/exercice1");

        expect(response.statusCode).toBe(200);
        expect(response.body.reponse).toBe(datePasseeFormatee);
    });

    test("vérifie que l'année est correcte", async () => {
        const response = await request(app)
            .post("/s2/exercice1");

        expect(response.statusCode).toBe(200);
        const anneePassee = parseInt(response.body.reponse.split("-")[0], 10);
        const anneeAttendue = new Date().getFullYear() - 10;

        expect(anneePassee).toBe(anneeAttendue);
    });

});


////////////////////////////////////////////////////////////////////////////////////////////////
describe("POST /s2/exercice2", () => {
    test("formate une date valide", async () => {
        const date = "2023-11-03T00:00:00.000Z";
        const expectedFormat = "03/11/2023";

        const response = await request(app)
            .post("/s2/exercice2")
            .send({ date });

        expect(response.statusCode).toBe(200);
        expect(response.body.reponse).toBe(expectedFormat);
    });

    test("renvoie 'Date invalide' pour une date invalide", async () => {
        const date = "6-2023-05";

        const response = await request(app)
            .post("/s2/exercice2")
            .send({ date });

        expect(response.statusCode).toBe(200);
        expect(response.body.reponse).toBe("Date invalide");
    });

});


////////////////////////////////////////////////////////////////////////////////////////////////
describe("POST /s2/exercice3", () => {
    test("calcule de jours entre deux dates", async () => {
        const date1 = new Date("2023-01-01");
        const date2 = new Date("2023-01-10");

        const differenceDate = (date2 - date1) / (1000 * 60 * 60 * 24);

        const response = await request(app)
            .post("/s2/exercice3")
            .send({ date1: date1, date2: date2 });

        expect(response.statusCode).toBe(200);
        expect(response.body[0].reponse).toBe(differenceDate);
    });

    test("renvoie 0 jours pour la même date", async () => {
        const date1 = new Date("2023-01-15");
        const date2 = new Date("2023-01-15");

        const response = await request(app)
            .post("/s2/exercice3")
            .send({ date1: date1, date2: date2 });

        expect(response.statusCode).toBe(200);
        expect(response.body[0].reponse).toBe(0);
    });
});


////////////////////////////////////////////////////////////////////////////////////////////////
describe("POST /s2/exercice4", () => {
    test("ajoute des jours a une date", async () => {
        const date = new Date("2023-01-01");
        const jours = 5;

        const response = await request(app)
            .post("/s2/exercice4")
            .send({ date, jours });

        expect(response.statusCode).toBe(200);
        expect(response.body.reponse).toBe("2023-01-06T00:00:00.000Z");
    });

    test("vérifie si une date invalide renvoie une erreur", async () => {
        const date = "date_invalide"; // Une date invalide

        const response = await request(app)
            .post("/s2/exercice4")
            .send({ date, jours: 5 });

        expect(response.statusCode).toBe(400);
        expect(response.body.reponse).toBe("Date invalide");
    });


    test("ajoute un nombre négatif de jours à une date", async () => {
        const date = new Date("2023-01-10");
        const jours = -5;

        const response = await request(app)
            .post("/s2/exercice4")
            .send({ date, jours });

        expect(response.statusCode).toBe(200);
        expect(response.body.reponse).toBe("2023-01-05T00:00:00.000Z");
    })

});

////////////////////////////////////////////////////////////////////////////////////////////////
describe("POST /s2/exercice5", () => {
    test("vérifie si une année est bissextile", async () => {
        const anneeBissextile = 2024;

        const responseBissextile = await request(app)
            .post("/s2/exercice5")
            .send({ annee: anneeBissextile });

        expect(responseBissextile.statusCode).toBe(200);
        expect(responseBissextile.body.reponse).toBe(true);


    });

    test("vérifie si une année bissextile divisible par 4 ", async () => {
        const annee = 1600;

        const response = await request(app)
            .post("/s2/exercice5")
            .send({ annee });

        expect(response.statusCode).toBe(200);
        expect(response.body.reponse).toBe(true);
    });

    test("vérifie si une année non bissextile est détectée", async () => {
        const annee = 2023;

        const response = await request(app)
            .post("/s2/exercice5")
            .send({ annee });

        expect(response.statusCode).toBe(200);
        expect(response.body.reponse).toBe(false);
    });
});

////////////////////////////////////////////////////////////////////////////////////////////////
describe("POST /s2/exercice6", () => {
    test("obtient le premier jour du mois de janvier", async () => {
        const date = new Date("2023-01-15T00:00:00.000Z");

        const response = await request(app)
            .post("/s2/exercice6")
            .send({ date });

        expect(response.statusCode).toBe(200);
        expect(response.body.reponse).toBe("2023-01-01T00:00:00.000Z");
    });

    test("obtient le premier jour du mois de février (année bissextile)", async () => {
        const date = new Date("2024-02-15T00:00:00.000Z");

        const response = await request(app)
            .post("/s2/exercice6")
            .send({ date });

        expect(response.statusCode).toBe(200);
        expect(response.body.reponse).toBe("2024-02-01T00:00:00.000Z");
    });



});

////////////////////////////////////////////////////////////////////////////////////////////////
describe("POST /s2/exercice7", () => {
    test("obtient le dernier jour du mois d'une date donnée", async () => {
        const date = new Date("2023-11-15T00:00:00.000Z");

        const response = await request(app)
            .post("/s2/exercice7")
            .send({ date });

        expect(response.statusCode).toBe(200);
        expect(response.body.reponse).toBe("2023-11-30T00:00:00.000Z");
    });

    test("obtient le dernier jour du mois de février d'une date donnée (année bissextile)", async () => {
        const date = new Date("2020-02-15T00:00:00.000Z");

        const response = await request(app)
            .post("/s2/exercice7")
            .send({ date });

        expect(response.statusCode).toBe(200);
        expect(response.body.reponse).toBe("2020-02-29T00:00:00.000Z");
    });

    test("vérifie la réponse avec une date nulle", async () => {
        const date = null;

        const response = await request(app)
            .post("/s2/exercice7")
            .send({ date });

        expect(response.statusCode).toBe(400);
        expect(response.body.reponse).toBe("Date invalide");
    });

});


describe("POST /s2/exercice8", () => {
    test("formate une durée en heures et minutes", async () => {
        const heures = 4;
        const minutes = 30;

        const response = await request(app)
            .post("/s2/exercice8")
            .send({ heures: heures, minutes: minutes });

        expect(response.statusCode).toBe(200);
        expect(response.body.reponse).toBe("04:30");
    });

    test("gère les valeurs négatives", async () => {
        const heures = -1;
        const minutes = 30;

        const response = await request(app)
            .post("/s2/exercice8")
            .send({ heures, minutes });

        expect(response.statusCode).toBe(200);
        expect(response.body.reponse).toBe("Durée invalide");
    });
});

// //////////////////////////////////////////////////////////////////////////
describe("POST /s2/exercice9", () => {
    test("vérifie si deux plages de dates se chevauchent", async () => {

        const debutDate = new Date("2023-01-01");
        const finDate = new Date("2023-01-10");
        const debutDate2 = new Date("2023-01-05");
        const finDate2 = new Date("2023-01-15");

        const response = await request(app)
            .post("/s2/exercice9")
            .send({ debutDate, finDate, debutDate2, finDate2 });

        expect(response.statusCode).toBe(200);
        expect(response.body.reponse).toBe(true);
    });

    test("vérifie un cas de non-chevauchement", async () => {
        const debutDate = new Date("2023-01-01");
        const finDate = new Date("2023-01-10");
        const debutDate2 = new Date("2023-01-11");
        const finDate2 = new Date("2023-01-15");

        const response = await request(app)
            .post("/s2/exercice9")
            .send({ debutDate, finDate, debutDate2, finDate2 });

        expect(response.statusCode).toBe(200);
        expect(response.body.reponse).toBe(false);
    });

    test("vérifie le chevauchement partiel", async () => {
        const debutDate = new Date("2023-01-01");
        const finDate = new Date("2023-01-10");
        const debutDate2 = new Date("2023-01-05");
        const finDate2 = new Date("2023-01-15");

        const response = await request(app)
            .post("/s2/exercice9")
            .send({ debutDate, finDate, debutDate2, finDate2 });

        expect(response.statusCode).toBe(200);
        expect(response.body.reponse).toBe(true);
    });

});

////////////////////////////////////////////////////////////////////////////////
describe("POST /s2/exercice10", () => {
    test("calcule l'âge à partir de la date de naissance", async () => {
        const dateNaissance = "1990-05-15";

        const response = await request(app)
            .post("/s2/exercice10")
            .send({ dateNaissance });

        expect(response.statusCode).toBe(200);
        expect(response.body.reponse).toBe(33);
    });

    test("vérifie une date de naissance future", async () => {
        const dateNaissance = "2030-01-01";

        const response = await request(app)
            .post("/s2/exercice10")
            .send({ dateNaissance });

        expect(response.statusCode).toBe(400);
        expect(response.body.reponse).toBe("Date de naissance future");
    });

    test("vérifie une date de naissance au format incorrect", async () => {
        const dateNaissance = "15-05-1990";

        const response = await request(app)
            .post("/s2/exercice10")
            .send({ dateNaissance });

        expect(response.statusCode).toBe(400);
        expect(response.body.reponse).toBe("Format de date invalide");
    });


    test("vérifie une date de naissance manquante", async () => {
        const response = await request(app)
            .post("/s2/exercice10")
            .send({});

        expect(response.statusCode).toBe(400);
        expect(response.body.reponse).toBe("Date de naissance manquante");
    });

});

