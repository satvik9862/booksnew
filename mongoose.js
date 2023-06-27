const mongoose=require('mongoose');

//mongodb://localhost:27017/consignmentStore
//mongodb+srv://admin-aditya:Pass123@cluster0.ysgrh.mongodb.net/consignmentStore

mongoose.connect('mongodb+srv://gaikwadsatvik555:satvik555@cluster0.gwj3knx.mongodb.net/save', {                //connection to server
    useNewUrlParser:true,
    useCreateIndex:true
}).then(()=>{
    console.log('Connection successful (mongoose).');
}).catch((error)=>{
    console.log('No connection (mongoose).');
})



