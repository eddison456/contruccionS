const {validationResult} = require("express-validator");



exports.cliente=(req,res,next)=>{
  
    const errors = validationResult(req);
   
    if(!errors.isEmpty()){
   
        const error=new Error("validation fail");
        error.statusCode=442;
        error.data=errors.array();
        throw error;
    }
    try{
        const correo=req.body.correo;
        const nombre=req.body.nombre;
        
        res.status(201).json({messege:"cliente success." ,data :{ nombre }});
    }catch(e){
        console.log("error 2")
        const error = new Error("validation fall");
        error.statusCode=500;
        throw error;
    }
};

exports.recursos=(req,res,next)=>{
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        const error=new Error("validation fail");
        error.statusCode=442;
        error.data=errors.array();
        throw error;
    }
    try{
        const id=req.body.id;
        const nombre=req.body.nombre;
        const formato=req.body.formato;
        const descripcion=req.body.descripcion;

        res.status(201).json({message:" ingreso recursos ",data:{nombre,formato}});
    }catch(e){
        const error = new Error("validation fall");
        error.statusCode=500;
        throw error;
    }
}

exports.evento=(req,res,next)=>{
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        const error=new Error("validation fail");
        error.statusCode=442;
        error.data=errors.array();
        throw error;
    }
    try{
        const id=req.body.id;
        const nombre=req.body.nombre;
        const fecha=req.body.fecha;
        const hora=req.body.hora;
        const tema=req.body.tema;
        const descripcion=req.body.descripcion;

        res.status(201).json({message:"evento creado",data:{nombre,fecha}});
    }catch(e){
        const error = new Error("validation fall");
        error.statusCode=500;
        throw error;
    }
}

exports.admin=(req,res,next)=>{
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        const error=new Error("validation fail");
        error.statusCode=442;
        error.data=errors.array();
        throw error;
    }
    try{
        
        const nombre=req.body.nombre;
        const correo=req.body.correo;
        const contraseña=req.body.contraseña;


        res.status(201).json({message:"ingreso un admin",data:{nombre}});
    }catch(e){
        const error = new Error("validation fall");
        error.statusCode=500;
        throw error;
    }
}

exports.foro=(req,res,next)=>{
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        const error=new Error("validation fail");
        error.statusCode=442;
        error.data=errors.array();
        throw error;
    }
    try{
        const id=req.body.id;   
        const tema=req.body.tema;
        const descripcion=req.body.descripcion;

        res.status(201).json({message:"se creo un foro nuevo",data:{tema}});
    }catch(e){
        const error = new Error("validation fall");
        error.statusCode=500;
        throw error;
    }
}

exports.pregunta_frecuentes=(req,res,next)=>{
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        const error=new Error("validation fail");
        error.statusCode=442;
        error.data=errors.array();
        throw error;
    }
    try{
        const id=req.body.id;
        const descripcion=req.body.descripcion;
      
        res.status(201).json({message:"descripcion creada",data:{ id }});
    }catch(e){
        const error = new Error("validation fall");
        error.statusCode=500;
        throw error;
    }
}