import mongoose from 'mongoose'
const MONGO_URI="mongodb+srv://azhar:azhar123@cluster0.xeq0ryv.mongodb.net/notesdb?retryWrites=true&w=majority"
function dbConnect(){
    if(mongoose.connections[0].readyState){
        console.log("alredy connected")
        return
    }
    mongoose.connect(MONGO_URI,{
        useNewUrlParser:true,
        useUnifiedTopology:true
    })
    mongoose.connection.on('connected',()=>{
        console.log("connected to mongo")
    })
    mongoose.connection.on('error',(err)=>{
        console.log("error connecting",err)
    })
}


export default dbConnect