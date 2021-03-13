'use strict';

const express = require('express');
const router = express.Router();
const Album = require('../models/registro_album.model');
const Cancion = require('../models/registro_cancion.model')

router.get('/obtener-album', (req, res) => {
    Album.find((err, album_bd) => {
        if (err) {
            res.json({
                msj: 'No se encontro ningun album',
                err
            })
        } else {
            res.json({

                album_bd
            })
        }
    });
});


router.post('/registro-cancion', (req, res) => {
    let obj_cancion = JSON.parse(req.body.cancion)
    let nueva_cancion = new Cancion({
        'nombre': obj_cancion.nombre,
        'duracion': obj_cancion.duracion,
        'artista': obj_cancion.artista,
        'album': obj_cancion.album,
    })
    nueva_cancion.save((err, cancion_bd) => {
        if (err) {
            res.json({
                'msj': 'Hubo un error en el proceso',
                err
            })
        } else {
            res.json({
                'msj': 'La cancion se registro exitosamente',
                cancion_bd
            })
        }
    })
});

router.get('/listar-cancion-Alb', (req, res) => {
    Cancion.find((err, cancion_alb_bd) => {
        if (err) {
            res.json({
                'msj': 'Hubo un error en el proceso',
                err
            })
        } else {
            res.json({
                'msj': 'Las canciones se han encontrado de manera exitosa',
                cancion_alb_bd
            })
        }
    })
});

router.put('/editar-cancion', (req, res) => {
    let obj_cancion = JSON.parse(req.body.obj_can);
    console.log(obj_cancion.nombre)
    Cancion.updateOne({ nombre: obj_cancion.nombre_viejo }, {
        $set: {
            nombre: obj_cancion.nombre,
            duracion: obj_cancion.duracion,
            disquera: obj_cancion.disquera,
            album: obj_cancion.album
        }
    }, (err, info) => {
        if (err) {
            res.json({
                msj: 'No se pudo modificar el artista',
                err
            });
        } else {
            res.json({
                info
            });
        }
    });

});
router.put('/editar-cancion2', (req, res) => {
    let obj_cancion = JSON.parse(req.body.obj_can);
    console.log(obj_cancion.nombre)
    Cancion.updateOne({ nombre: obj_cancion.nombre_viejo }, {
        $set: {
            album: obj_cancion.nombre,

        }
    }, (err, info) => {
        if (err) {
            res.json({
                msj: 'No se pudo modificar el artista',
                err
            });
        } else {
            res.json({
                info
            });
        }
    });

});

module.exports = router;