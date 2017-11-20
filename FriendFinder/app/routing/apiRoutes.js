
// Dependencies
const path = require("path");
var friendsArray = require("../data/friends.js");

// Routes
module.exports = function(app) {

   app.get("/api/friends", function(req, res) {
        res.json(friendsArray);
    });

     app.post("/api/friends", function(req, res) {

        var newPerson = {
            name: req.body.name,
            photo: req.body.photo,
            scores: JSON.parse(req.body.scores)
        }

         var newArray = [];

        userArray.forEach(function(item, index) {
            var difference = 0;
            for (var i = 0; i < item.scores.length; i++) {
                difference += Math.abs(item.scores[i] - newPerson.scores[i]);
            }
            newArray.push({ "difference": difference, "index": index });
        });

        newArray.sort(function(a, b) {
            return a.difference - b.difference;
        });

        friendsArray.push(newPerson);
        res.json(friendsArray[newArray[0].index]);

    });

}


