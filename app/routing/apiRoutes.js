let friends = require("../data/friends");
module.exports = function (app) {
    app.get("/api/friends", (req, res) => {
        return res.json(friends);
    });

    app.post("/api/friends", (req, res) => {
        let personInfo = req.body;//body-parser works here!
        friends.push(personInfo);
        console.log(friends);
        res.json(friends);
    });
};