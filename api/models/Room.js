import mongoose from 'mongoose';


const RoomSchema  = new mongoose.Schema({
   title:{
    type:String,
    required:true,
   },
   price:{
    type:Number,
    required:true,
    
   },
   maxPeople:{
    type:String,
    required:true
   },
   desc:{
    type:String,
   },
   roomNumbers: [{ number: Number, unavailableDates: {type: [Date]}}],
},{timestamps:true});



// [
//     {number:102,unAvailableDates:[01.05.2022,02.05.2022]}
// ]

//model name
export default mongoose.model("Room",RoomSchema);