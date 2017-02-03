'use strict';

var http = require('http');
var request_scraping = require("./request&scraping.js");

module.exports.getTrackingInfo = (event, context, callback) => {
  //get tracking number (id) from event object
  var trcking_number = event.path.id;
  //call tracking function 
  request_scraping.tracking(trcking_number).then(function(r){
      callback(null, r);
    });
  


};
