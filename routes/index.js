const Recipe = require("../models/recipes");

module.exports = app => {

    app.get("/api/recipes", (req, res) => {
        Recipe.find()
            .then(data => res.json(data))
            .catch(err => res.status(422).json(err));
    })

    app.post("/api/recipes", (req, res) => {
        Recipe.create(req.body)
            .then(data => res.json(data))
            .catch(err => res.status(422).json(err));
    })

    app.delete("/api/recipes", (req, res) => {
        Recipe.findById({ _id: req.params.id })
            .then(dbModel => dbModel.remove())
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    })
}