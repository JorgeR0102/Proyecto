const express = require('express');
const Artista = require('../models/registro_artista.model')
const router = new express.Router();

router.post('/registro-artista', (req, res) => {
    let obj_artista = JSON.parse(req.body.artista)
    let nuevo_artista = new Artista({
        'nombre': obj_artista.nombre,
        'disquera': obj_artista.disquera,
        'edad': obj_artista.edad,
    })
    nuevo_artista.save((err, artista_bd) => {
        if (err) {
            res.json({
                'msj': 'Hubo un error en el proceso',
                err
            })
        } else {
            res.json({
                'msj': 'El artista se registro exitosamente',
                artista_bd
            })
        }
    })
});

router.put('/editar-artista', (req, res) => {
    let obj_artista = JSON.parse(req.body.obj_art);
    console.log(obj_artista.nombre)
    Artista.updateOne({ nombre: obj_artista.nombre_viejo }, {
        $set: {
            nombre: obj_artista.nombre,
            disquera: obj_artista.disquera,
            edad: obj_artista.edad
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