const express = require('express');
const Playlist = require('../models/playlist.model')
const router = new express.Router();

router.post('/registrar-playlist', (req, res) => {
    let obj_playlist = JSON.parse(req.body.obj)
    let nueva_playlist = new Playlist({
        'nombre': obj_playlist.nombre,
        'correo': obj_playlist.correo

    });
    obj_playlist.lista_canciones.forEach(cancion => {
        nueva_playlist.canciones.push(cancion._id)
    });

    nueva_playlist.save((err, obj_playlist) => {
        if (err) {
            res.json({
                'msj': 'Hubo un error en el proceso',
                err
            })
        } else {
            res.json({
                'msj': 'La playlist se registro exitosamente',
                obj_playlist
            })
        }
    })
});

router.get('/obtener-playlist', (req, res) => {
    Playlist.find().populate('canciones').exec((err, play_bd) => {
        if (err) {
            res.json({
                msj: 'No se encontro ninguna playlist',
                err
            })
        } else {
            res.json({
                play_bd
            })
        }
    });
});

router.put('/agregar-cancion-play', (req, res) => {
    let obj_playlist = JSON.parse(req.body.obj_playlist);
    console.log(obj_playlist)
    Playlist.updateOne({ _id: obj_playlist._id }, {
        $set: {
            canciones: obj_playlist.lista_canciones
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

router.put('/editar-playlist', (req, res) => {
    let obj_Playlist = JSON.parse(req.body.obj_play);
    console.log(obj_Playlist)
    Playlist.updateOne({ nombre: obj_Playlist.correo }, {
        $set: {
            nombre: obj_Playlist.nombre
        }
    }, (err, info) => {
        if (err) {
            res.json({
                msj: 'No se pudo modificar la playlist',
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