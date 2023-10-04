const {response} = require('express')


//Importación de los modelos
const Visita = require('../models/visitas')

//Método GET de la API
const visitaGet = async(req, res = response) =>{
    //const {nombre} = req.query //Desestructuración
    const {nombre_paciente} = req.query;
    //Consultar todos las compras
    try {
        let Visita;

        if ( nombre_paciente) {
            // Si se proporciona un id, realizar una búsqueda por nombre
            compra = await Compra.find({ id_compra: id_compra });
        } else {
            compra= await Compra.find();
        }

        res.json({ compra });
    } catch (error) {
        console.error('Error al buscar la compra:', error);
        res.status(500).json({ mensaje: 'Error interno del servidor' });
    }
}

const compraPost = async(req, res) => {
    let mensaje = "Inserción exitosa"
    const body = req.body
    try {
        const compra= new Compra(body)
        await compra.save() //Inserta en la colección
    }catch (error) {
        mensaje = "Se presentaron problemas en la inserción"
        console.log(error)
    }
    res.json({
        msg: mensaje
    })
}

const compraPut = async(req, res) => {

    const {id_compra, nombre_compra, fecha_compra, estado_compra, total_compra} = req.body

    let mensaje = "Modificación exitosa"

    try {
        await Compra.updateMany({id_compra: id_compra}, {$set: {
            nombre_compra: nombre_compra,
            fecha_compra: fecha_compra,
            estado_compra: estado_compra,
            total_compra: total_compra,
        }});

    }catch (error) {
        mensaje = "Se presentaron problemas en la modificación."
    }
    res.json({
        msg: mensaje
    })
}

const compraDelete = async (req, res) => {
    const {id_compra} = req.query
    let mensaje = ''

    try{
        const compra = await Compra.deleteOne({id_compra: id_compra})
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
    compraGet,
    compraPost,
    compraPut,
    compraDelete
}