import express from 'express';

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
    users.push(user);
    res.send(`User with the username ${user.firstname} added`);
});

export default router;