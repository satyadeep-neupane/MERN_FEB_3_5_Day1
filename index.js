const express = require('express');
const app = express();

app.use(express.urlencoded({ extended: true }));

let users = ["ram", "hari"];

app.get('/user', (req, res) => {
    res.send(users);
});

// 127.0.0.1:3000/add-user?name=shyam

app.post('/add-user', (req, res) => {
    if(req.body.name)
    {
        users.push(req.body.name)
        res.send("User Added")
    }else{
        res.send("Please provide name");
    }
})

app.get('/delete-user', (req, res) => {
    if(req.query.name)
    {
        users = users.filter((user) => {
            return user !== req.query.name;
        });
        res.send("User Deleted");
    }
    else
    {
        res.send("Please provide name");
    }
})

app.listen(3000, () => {
    console.log('Server started on port 3000');
});

