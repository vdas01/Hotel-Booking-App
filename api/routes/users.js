import express from 'express'
import { createUser, deleteUser, getUser, getUSers, updateUser } from '../controllers/user.js';
import { verifyToken, verifyUser,verifyAdmin } from '../utils/verifyToken.js';

const router = express.Router();



router.get("/checkauthentication",verifyToken,(req,res,next)=>{
    res.send("Hello user,you are logged in");
})

router.get("/checkuser/:id",verifyUser,(req,res)=>{
      res.send("Hello user, you are logged in and can delete you account")
})

router.get("/checkadmin/:id",verifyAdmin,(req,res)=>{
    res.send("Hello admin, you are logged in and can delete all  accounts")
})


//CREATE USER
router.post("/",verifyAdmin,createUser)
//UPDATE
router.put("/:id",verifyUser,updateUser);
//DELETE
router.delete("/:id",verifyUser,deleteUser);
//GET
router.get("/:id",verifyUser,getUser);
//GET ALL
router.get("/",verifyAdmin,getUSers);

export default router