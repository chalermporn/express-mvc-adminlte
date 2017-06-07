/* Routes 

app.get || app.post || app.put || app.delete || app.all

More: http://expressjs.com/en/guide/routing.html

 */

var HomeController = require('../controllers/backend/home/HomeController.js');
var GearmanController = require('../controllers/backend/home/GearmanController.js');

module.exports = function(app) {  
    app.route('/').get(function (req, res) {
      HomeController.index(req, res);
    });

    app.route('/gearman').get(function (req, res) {
      GearmanController.index(req, res);
    });

}