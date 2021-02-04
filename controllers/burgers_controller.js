var express = require("express");
var router = express.Router();

var burger = require("../models/burger.js");



//get method
router.get("/", function(req, res){
    burger.all(function(data){
        var hbsObject = {
            burger: data
        };
        console.log(hbsObject);
        res.render("index", hbsObject);
    });
});

//post method 
router.post("/api/burgers", function(req, res){
    burger.insertOne([
        "burger_name", "devoured"
    ],[
        req.body.burger_name, req.body.devoured
    ], function(result) {
        res.json({ id: result.insertID });
    });
});

// put method 
router.put("/api/burgers/:id", function(req, res){
    var condition = "id = " + req.params.id;

    console.log("condition", condition);

    burger.update({
        devoured: req.body.devoured
    }, condition, function(result){
        if (result.changeRows === 0){
            return res.status(404).end();
        } else {
            res.status(200).end();
        }
    });

    router.delete("/api/burgers/:id", function(req, res){
        var condition = "id = " + req.params.id;

        burger.delete(condition, function(result){
            if (result.affectedRows == 0) {
                return res.status(404).end();
            } else{
                res.status(200).end();
            }
        });
    });

});

console.log(burger)

module.exports = router;