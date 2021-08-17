import express from 'express';
import { v4 as uuidv4 } from 'uuid';

const router = express.Router();
const users = [
    {
        firstname: "Eirkin",
        lastname: "Dahi",
        age: 20
    }
]

//routes here start with /user
router.get('/',(req,res)=>{
    res.send(users);
});

router.post('/',(req,res) => {
    const user = req.body;
    // const userWithId = {...user, id: uuidv4()};
    users.push({...user, id: uuidv4()});
    res.send(`User with the username ${user.firstname} added`);
});

export default router;