const express = require('express')
var jwt = require('jsonwebtoken');

const { verifyToken,userAdmin } = require('../queries/usuarios.js')

const server = express();

jwtClave = process.env.JWT //Clave Maestra

exports.authenticateJWT = (req, res, next) => {
    const authHeader = req.headers.authorization;
    if (authHeader) {
        const token = authHeader.split(' ')[1];
        verifyToken(token)
        .then(response => {
            if(response?.length){
                next()
            }else{
                return res.sendStatus(403)
            }
        })
    }else{
        res.sendStatus(401);
    }
};

exports.superUser = (req, res, next) => {
    const authHeader = req.headers.authorization;
    if (authHeader) {
        const token = authHeader.split(' ')[1];
        verifyToken(token)
        .then(response => {
            if(response?.length){
                userAdmin(token)
                .then(response => {
                    if (response[0].role == "admin"){
                        next()
                    }else{
                        return res.sendStatus(403)
                    }
                })
            }else{
                return res.sendStatus(403)
            }
        })
    }else{
        res.sendStatus(401);
    }   
}