import express from 'express'
import Hotel from '../models/Hotel.js'
import { createError } from '../utils/error.js';
import { createHotel, deleteHotel, updateHotel,getHotel,getHotels } from '../controllers/hotel.js';
const router = express.Router();

//<<<<<<<<<<<----------CREATE-------------->>>>>>>>>>>>>>>>
// router.post("/",async (req,res)=>{
//     const newHotel = new Hotel(req.body);
//   try{
//        const savedHotel = await newHotel.save();
//        res.status(200).json(savedHotel);
//   }
//   catch(error){
//     res.status(500).json(error);
//   }
// })

router.post("/",createHotel);

//<<<<<<<<------------UPDATE------------>>>>>>>>>>>>>>>>>>>
// router.put("/:id",async (req,res)=>{  
// try{
//      //returns old document
//     //  const updatedHotel = await Hotel.findByIdAndUpdate(req.params.id,{$set: req.body})

//     //returns updated document
//      const updatedHotel = await Hotel.findByIdAndUpdate(req.params.id,{$set: req.body},{new:true});
//      res.status(200).json(updatedHotel);
// }
// catch(error){
//   res.status(500).json(error);
// }
// })

router.put("/:id",updateHotel);

//<<<<<<<<<<<------------DELETE----------------->>>>>>>>>>>
// router.delete("/:id",async (req,res)=>{  
//   try{
//        await Hotel.findByIdAndDelete(req.params.id);
//        res.status(200).json("Hotel has been deletd");
//   }
//   catch(error){
//     res.status(500).json(error);
//   }
//   })

router.delete("/:id",deleteHotel);

//<<<<<<<<<--------------GET------------------>>>>>>>>>>>>>
// router.get("/:id",async (req,res)=>{  
//   try{
//       const hotel = await Hotel.findById(req.params.id);
//        res.status(200).json(hotel);
//   }
//   catch(error){
//     res.status(500).json(error);
//   }
//   })

router.get("/:id",getHotel);

//<<<<<<-------------GET ALL------------->>>>>>>>>
// router.get("/",async (req,res)=>{  
//   try{
//       const hotels = await Hotel.find();
//        res.status(200).json(hotels);
//   }
//   catch(error){
//     res.status(500).json(error);
//   }
//   })


  router.get("/",async (req,res,next)=>{  
    const failed = true;
    // const err = new Error();
    // err.status = 404;
    // err.message = "Sorry not found!";
    // if(failed) return next(err);
    //or
    // if(failed) return next(createError(401,"You are not authenticated"));
    try{
        const hotels = await Hotel.find();
         res.status(200).json(hotels);
    }
    catch(error){
      // res.status(500).json(error);
      //or
      next(error);
    }
    }) 

//testing middleware
//   router.get("/",async (req,res,next)=>{
//     console.log("I am route middleware from hotels.js");
     //returning next so that it will not execute the code below next() and
     // return control to next middleware in index.js 
//     return next(); 
//     try{
//         const hotels = await Hotel.find();
//          res.status(200).json(hotels);
//     }
//     catch(error){
//       res.status(500).json(error);
//     }
// })

router.get("/",getHotels);

export default router