const error = require("../db/error");

class errorController{
    renderError(req, res){
        res.render('error', {error: error.output});
    }
}

module.exports = new errorController();