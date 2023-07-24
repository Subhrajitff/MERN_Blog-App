const mongoose=require('mongoose');
const colors=require('colors');

const connectDB= async()=>{
    try{
       await mongoose.connect(process.env.MONGO_URL,{
          useNewUrlParser: true,
            useUnifiedTopology: true,
           
       });
       console.log(`connected to Mongodb Database ${mongoose.connection.host}`.bgMagenta.white);
    } catch(error){
       console.log(`MONGO connect error ${error}`.bgRed.white);
    }

};

/*
const connectDB = async () => {
    try{
        // mongodb connection string
        const con = await mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useFindAndModify: false,
            useCreateIndex: true
        })

        console.log(`MongoDB connected : ${con.connection.host}`);
    }catch(err){
        console.log(err);
        process.exit(1);
    }
}

*/
module.exports=connectDB;