'use strict';

var http = require('http');
// import request&scraping module
var request_scraping = require("./request&scraping.js");

module.exports.getTrackingInfo = (event, context, callback) => {
//Get id parameter (tracking number) through url using event object
  var trcking_number = event.path.id;
//calls tracking function of request_scraping module
  request_scraping.tracking(trcking_number).then(function(r){

      callback(null, r);
    });
  


};
