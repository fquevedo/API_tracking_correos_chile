'use strict';

var http = require('http');
var request_scraping = require("./request&scraping.js");

module.exports.getTrackingInfo = (event, context, callback) => {

  var trcking_number = event.path.id;

  request_scraping.tracking(trcking_number).then(function(r){
      callback(null, r);
    });
  


};
