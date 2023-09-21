const {response} = require('express')


//Importación de los modelos
const Usuario = require('../models/usuarios')

//Método GET de la API
const usuarioGet = async(req, res = response) =>{
    //const {nombre} = req.query //Desestructuración
    const {id_usuario} = req.query;
    //Consultar todos los usuarios
    try {
        let usuario;

        if (id_usuario) {
            // Si se proporciona un id, realizar una búsqueda por nombre
            usuario = await Usuario.find({ id_usuario: id_usuario });
        } else {
            usuario = await Usuario.find();
        }

        res.json({ usuario });
    } catch (error) {
        console.error('Error al buscar usuarios:', error);
        res.status(500).json({ mensaje: 'Error interno del servidor' });
    }
}

const usuarioPost = async(req, res) => {
    let mensaje = "Inserción exitosa"
    const body = req.body
    try {
        const usuario= new Usuario(body)
        await usuario.save() //Inserta en la colección
    }catch (error) {
        mensaje = "Se presentaron problemas en la inserción"
        console.log(error)
    }
    res.json({
        msg: mensaje
    })
}

const usuarioPut = async(req, res) => {

    const {id_usuario, imagen_usuario, nombre_usuario, telefono_usuario, direccion_usuario, estado_usuario} = req.body

    let mensaje = "Modificación exitosa"

    try {
        await Usuario.updateMany({id_usuario: id_usuario}, {$set: {
            imagen_usuario: imagen_usuario,
            nombre_usuario: nombre_usuario,
            telefono_usuario: telefono_usuario,
            direccion_usuario: direccion_usuario,
            estado_usuario: estado_usuario
        }});

    }catch (error) {
        mensaje = "Se presentaron problemas en la modificación."
    }
    res.json({
        msg: mensaje
    })
}

const usuarioDelete = async (req, res) => {
    const {id_usuario} = req.query
    let mensaje = ''

    try{
        const usuario = await Usuario.deleteOne({id_usuario: id_usuario})
        mensaje = 'La eliminación se efectuó exitosamente'
    }
    catch(error){
        mensaje = 'Se presentaron problemas en la eliminación'
    }

    res.json({
        msg: mensaje
    })
}

module.exports = {
    usuarioGet,
    usuarioPost,
    usuarioPut,
    usuarioDelete
}