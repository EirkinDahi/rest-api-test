import express from 'express';
import { v4 as uuidv4 } from 'uuid';

const router = express.Router();
let users = [
    {
        firstname: "Eirkin",
        lastname: "Dahi",
        age: 21
    },
    {
        firstname: "Jackie",
        lastname: "Tran",
        age: 22
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

//colon represents anything after the path
// req.params
router.get('/:id',(req,res) => {
    const {id} = req.params;
    const foundUser = users.find((user) => user.id === id);
    res.send(foundUser);
});

router.delete('/:id', (req, res) => {
    const {id} = req.params;

    users = users.filter((user) => user.id !== id);
    res.send(`User with the id ${id} deleted from the list`)
});

router.patch('/:id', (req,res) => {
    const {id} = req.params;
    const {firstname, lastname, age} = req.body;

    const user = users.find((user) => user.id === id);
    if(firstname) user.firstname = firstname;
    if(lastname) user.lastname = lastname;
    if(age) user.age = age;

    res.send(`User with the id ${id} updated`);
});

export default router;