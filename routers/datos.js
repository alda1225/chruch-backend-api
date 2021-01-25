const { Router } = require('express');
const router = Router();
const faker = require('faker');
const Ruta = require('../models/Datos');
module.exports = router;

router.get('/', (req, res) => {
    res.send('Listo!');
});

router.get('/api/datos', async(req, res) => {
    const rutas = await Ruta.find();
    res.json({ rutas });
});

router.get('/api/datos/create', async(req, res) => {
    for (let i = 0; i < 2; i++) {
        await Ruta.create({
            id: faker.random.number(),
            mensaje: faker.random.word(),
            versiculo: faker.internet.url(),
            url: faker.internet.url()

        });
    }
    res.json({ message: '5 rutas creadas' });
});