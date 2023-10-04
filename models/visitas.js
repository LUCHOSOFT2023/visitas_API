const {Schema,model} = require ('mongoose')


const VisitaSchema = Schema({

    documento_paciente:{
       type: Number,
       unique: true,
       required: [true, 'El documento del paciente es necesario']
    },

    nombre_paciente:{
        type : String,
        required: [true, 'El nombre del paciente es necesario']
    },

    fecha_visita:{
        type: Date,
        required: [true, 'La fecha de visita es necesaria']
    },

    hora_visita:{
        type: Date,
        required: [true, 'La hora de la visita es necesaria']
    },


    nombre_medico:{
        type: String,
        required: [true, 'El nombre del médico es necesario']
     },

     diagnostico:{
        type: String,
        required: [true, 'El diagnóstico médico es necesario']
     }


})

//Exportar la funcion VisitaShema

module.exports = model ('visitasNuevas', visitaShema)