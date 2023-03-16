const express = require('express');
const app = express();
const uuidv4 = require('uuid').v4;

app.use(express.urlencoded({ extended: true }));

let users = [
    {
        id: uuidv4(),
        name: "user1",
        email: "user1@gmail.com"
    },
    {
        id: uuidv4(),
        name: "user2",
        email: "user2@gmail.com"
    }
];
let categories = ["book", "movie"];

app.get('/user', (req, res) => {
    res.send(users);
});

app.post('/add-user', (req, res) => {
    if(req.body.name && req.body.email)
    {
        users.push({
            id: uuidv4(),
            name: req.body.name,
            email: req.body.email
        })
        res.send("User Added")
    }else{
        res.send("Please provide name and email");
    }
})

app.get('/delete-user', (req, res) => {
    if(req.query.id)
    {
        users = users.filter((user) => {
            return user.id !== req.query.id;
        });
        res.send("User Deleted");
    }
    else
    {
        res.send("Please provide name");
    }
})

app.get('/category', (req, res) => {
    res.send(categories);
});

app.post('/add-category', (req, res) => {
    if(req.body.name)
    {
        categories.push(req.body.name)
        res.send("category Added")
    }else{
        res.send("Please provide name");
    }
})

app.get('/delete-category', (req, res) => {
    if(req.query.name)
    {
        categories = categories.filter((category) => {
            return category !== req.query.name;
        });
        res.send("category Deleted");
    }
    else
    {
        res.send("Please provide name");
    }
})

app.listen(3000, () => {
    console.log('Server started on port 3000');
});

// user2 added a file
// user 1 added file

console.log(uuidv4());