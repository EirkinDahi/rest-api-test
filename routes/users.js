import express from 'express';

const router = express.Router();

//routes here start with /user
router.get('/',(req,res)=>{
    res.send("Hellow from users");
});

export default router;