const express = require('express');
const Album = require('../models/registro_album.model')
const Cancion = require('../models/registro_cancion.model')
const router = new express.Router();

router.post('/registro-album', (req, res) => {
    let obj_album = JSON.parse(req.body.album)
    let nuevo_album = new Album({
        'codigo': obj_album.codigo,
        'nombre': obj_album.nombre,
        'fecha': obj_album.fecha,
        'cantidad_canciones': obj_album.cantidad_canciones,
        'duracion': obj_album.duracion,
        'artista': obj_album.artista
    })
    nuevo_album.save((err, album_bd) => {
        if (err) {
            res.json({
                'msj': 'Hubo un error en el proceso',
                err
            })
        } else {
            res.json({
                'msj': 'El album se registro exitosamente',
                album_bd
            })
        }
    })
});

router.put('/editar-album', (req, res) => {
    let obj_album = JSON.parse(req.body.obj_alb);
    console.log(obj_album)
    console.log(req.body.lista_nombre_viejo)
    Album.updateOne({ codigo: obj_album.lista }, {
        $set: {
            codigo: obj_album.codigo,
            nombre: obj_album.nombre,
            fecha: obj_album.fecha,
        }
    }, (err, info) => {
        if (err) {
            res.json({
                msj: 'No se pudo modificar el album',
                err
            });
        } else {
            console.log('Actualizar cancion')
            Cancion.updateMany({ album: req.body.lista_nombre_viejo }, {
                $set: {
                    album: obj_album.nombre
                }
            }), (err, info) => {
                if (err) {
                    console.log('Actualizar cancion error')
                    res.json({
                        'msj': 'Hubo un error en el proceso',
                        err
                    })
                } else {
                    console.log('Actualizar cancion bien')
                    res.json({
                        'msj': 'La cancion se modifico',
                        info
                    })
                }
            }
            res.json({
                info
            });
        }
    });


});

module.exports = router;