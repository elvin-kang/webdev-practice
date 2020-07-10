const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/blog_demo_2",
    {
        useNewUrlParser: true,
        useFindAndModify: false,
        useCreateIndex: true,
        useUnifiedTopology: true
    }
);

var Post = require("./models/post");
var User = require("./models/user");

Post.create({
    title: "How to cook the best burger pt.4",
    content: "a;sk4eaewryh42o-46j2-09" 
}, (err, post) => {
    User.findOne({email: "bob@gmail.com"}, (err, foundUser) => {
        if (err) {
            console.log(err);
        } else {
            foundUser.posts.push(post);
            foundUser.save((err, data) => {
                if (err) {
                    console.log(err);
                } else {
                    console.log(data);
                }
            });
        }
    });
});

// User.create({
//     email: "bob@gmail.com",
//     name: "Bob Belcher"
// });


// Find user
// Find all posts for that user


// User.findOne({email: "bob@gmail.com"}).populate("posts").exec((err, user) => {
//     if (err) {
//         console.log(err);
//     } else {
//         console.log(user);
//     }
// });