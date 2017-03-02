var HomeModel = require('../../../models/backend/home/HomeModel.js');

function HomeController() {

    this.index = function(req, res) {
       var promise = HomeModel.insert();  
       promise.then(function(data){
           res.render('backend/home/index.ejs', {title: 'AdminLTE 2 | Blank Page', content: 'Create by Tuan Anh Zippy <kieutuananh1995@gmail.com>', data: data});
       }).catch(function(err){
           res.status(500).send({ error: err });
       });
       
    }

    this.add = function(req, res) {
       console.log("add");
    }

    this.edit = function(req, res) {
       console.log('edit');
   }

    this.delete = function(req, res) {
       console.log('delete');
    }

}

module.exports = new HomeController;