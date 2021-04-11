const{body}=require("express-validator");
const express=require("express");
const control=require('../controllers/control');
const Router = express.Router();

Router.post(
    "/cliente",[
        body("correo")
        .exists()
        .withMessage("el correo es requerido ")
        .matches(/([\w|\d]+@+[\w]+[.][\w]{2,4})+$/) 
        .withMessage("EL VALOR solo son numeros")
        .trim()
        .escape(),
        body("nombre")
        .exists()
        .withMessage("EL Nombre ES REQUERIDO")
        .matches(/[a-zA-Z]+$/) 
        .withMessage("EL VALOR solo son letras")
        .trim()
        .escape(),
    ],control.cliente);


    Router.post(
        "/evento",[
            body("id")
            .exists()
            .withMessage("la id es requerido ")
            .matches(/([\w|\d|-])+$/) 
            .withMessage("EL VALOR solo son numeros")
            .trim()
            .escape(),
            body("Nombre")
            .exists()
            .withMessage("EL Nombre ES REQUERIDO")
            .matches(/[a-zA-Z]+$/) 
            .withMessage("EL VALOR solo son letras")
            .trim()
            .escape(),
            body("fecha")
            .exists()
            .withMessage("EL Nombre ES REQUERIDO")
            .matches(/[0-9]+[/]+[0-9]+[/]+[0-9a-z-A-Z]{2,10}$/) 
            .withMessage("EL formtato incorrecto")
            .trim()
            .escape(),
            body("hora")
            .exists()
            .withMessage("la hora ES REQUERIDO")
            .matches(/[0-9]+[:]+[0-9]$/) 
            .withMessage("EL VALOR solo son numerps")
            .trim()
            .escape(),
            body("tema")
            .exists()
            .withMessage("EL tema ES REQUERIDO")
            .matches(/[a-zA-Z]+$/) 
            .withMessage("EL tema solo son letras")
            .trim()
            .escape(),
            body("descripcion")
            .exists()
            .withMessage("la descripcion ES REQUERIDO")
            .matches(/[a-zA-Z]+$/) 
            .withMessage("EL VALOR solo son letras")
            .trim()
            .escape(),
        ],control.evento);

        
    Router.post(
        "/recursos",[
            body("id")
            .exists()
            .withMessage("la id es requerido ")
            .matches(/([\w|\d|-])+$/) 
            .withMessage("EL VALOR solo son numeros")
            .trim()
            .escape(),
            body("nombre")
            .exists()
            .withMessage("EL Nombre ES REQUERIDO")
            .matches(/[a-zA-Z]+$/) 
            .withMessage("EL VALOR solo son letras")
            .trim()
            .escape(),
            body("formato")
            .exists()
            .withMessage("el formato ES REQUERIDO")
            .matches(/[a-zA-Z]+$/) 
            .withMessage("ELformato solo son letras")
            .trim()
            .escape(),
            body("descripcion")
            .exists()
            .withMessage("la descripcion ES REQUERIDO")
            .matches(/[a-zA-Z]+$/) 
            .withMessage("EL VALOR solo son letras")
            .trim()
            .escape(),
        ],control.recursos);

        Router.post(
            "/admin",[
                body("correo")
                .exists()
                .withMessage("el correo es requerido ")
                .matches(/([\w|\d]+@+[\w]+[.][\w]{2,4})+$/) 
                .withMessage("EL VALOR solo son numeros")
                .trim()
                .escape(),
                body("nombre")
                .exists()
                .withMessage("EL Nombre ES REQUERIDO")
                .matches(/[a-zA-Z]+$/) 
                .withMessage("EL VALOR solo son letras")
                .trim()
                .escape(),
                body("contraseña")
                .exists()
                .withMessage("la contraseña  ES REQUERIDO")
                .matches(/[a-zA-Z0-9]+$/) 
                .withMessage("EL VALOR solo son letras y numeros")
                .trim()
                .escape(),

            ],control.admin);

            Router.post(
                "/foro",[
                    body("id")
                    .exists()
                    .withMessage("el id es requerido ")
                    .matches(/([\w|\d])+$/) 
                    .withMessage("EL VALOR solo son numeros y letras")
                    .trim()
                    .escape(),
                    body("tema")
                    .exists()
                    .withMessage("EL Nombre ES REQUERIDO")
                    .matches(/[a-zA-Z]+$/) 
                    .withMessage("EL VALOR solo son letras")
                    .trim()
                    .escape(),
                    body("descripcion")
                    .exists()
                    .withMessage("la descripcion ES REQUERIDO")
                    .matches(/[a-zA-Z0-9]+$/) 
                    .withMessage("EL VALOR solo son letras y numeros")
                    .trim()
                    .escape(),
    
                ],control.foro);    

                Router.post(
                    "/pregunta_frecuentes",[
                        body("id")
                        .exists()
                        .withMessage("el id es requerido ")
                        .matches(/([\w|\d])+$/) 
                        .withMessage("EL VALOR solo son numeros y letras")
                        .trim()
                        .escape(),
                        body("descripcion")
                        .exists()
                        .withMessage("la descripcion ES REQUERIDO")
                        .matches(/[a-zA-Z0-9]+$/) 
                        .withMessage("EL VALOR solo son letras y numeros")
                        .trim()
                        .escape(),
        
                    ],control.pregunta_frecuentes); 

                    
module.exports=Router;