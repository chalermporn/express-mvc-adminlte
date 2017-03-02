/* Routes 

app.get || app.post || app.put || app.delete || app.all

More: http://expressjs.com/en/guide/routing.html

 */

var HomeController = require('../controllers/backend/home/HomeController.js');

module.exports = function(app) {  
    app.route('/').get(function (req, res) {
      HomeController.index(req, res);
    });

}