'use strict';

const express = require('express');
const router = express.Router();
const Artista = require('../models/registro_artista.model');

router.get('/listar-artista', (req, res) => {
    Artista.find((err, artista_bd) => {
        if (err) {
            res.json({
                msj: 'No se encontraron artistas',
                err
            })
        } else {
            res.json({

                artista_bd
            })
        }
    });
});

module.exports = router;