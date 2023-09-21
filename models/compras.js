const  {Schema,model} = require('mongoose')

const CompraSchema = Schema({

 id_compra:{
    type: Number,
    unique:true,
    required: [true, 'El id de la compra es necesario']
 },

 nombre_compra:{
    type: String,
    required:[true, 'El nombre de la compra es necesario']
 },

  fecha_compra:{
    type: Date,
    required: [true,'La fecha de la compra es necesario']
  },

  estado_compra:{
    type: Boolean,
    required: [true,'El estado de la compra es requerio']
  },

  total_compra:{
    type: Number,
    required:[true,'El total de la compra es necesario']
  }

})

//Exportar la funcion CompraSchema
module.exports= model('comprasNuevas',CompraSchema)