var cheerio = require('cheerio');
var request = require('request');


function getTrackingNumInfo(tracking_number){
  var url = 'http://seguimientoweb.correos.cl/ConEnvCorreos.aspx';
  return new Promise(function(resolve, reject){
    request.post(url, function(err, response, body){
      var general_inputs = [];
      var general_data = [];

      var $ = cheerio.load(body);
      
      $('table.datosgenerales').each(function(){

        var temp = {
          'Tracking_number' : $('td',this).eq(1).text().trim(),
          'Delivered_to' : $('td',this).eq(3).text().trim(),
          'Delivered_date' : $('td',this).eq(5).text().trim(),
          'Rut' : $('td',this).eq(7).text().trim()
        };

        general_data.push(temp);

      });

      $('table.tracking').each(function(){
        for (var i = 0 ; $('td',this).eq(i).text().trim() != ''; i=i+3){

          var input = {
            'state' : $('td',this).eq(i).text().trim(),
            'date' : $('td',this).eq(i+1).text().trim(),
            'place' : $('td',this).eq(i+2).text().trim()
          };

          if (input.state)
            general_inputs.push(input);
        }
      });

      resolve({
        'General_info' : general_data,
        'Tracking_info' : general_inputs
      });



    }).form({
            obj_key: 'Cor398-cc',
            obj_env: tracking_number
        });
  });
}

module.exports.tracking = getTrackingNumInfo;
// samples tracking numbers:  999017326710 3072708247886
/*
var trcking_number = '3072708247886';
getTrackingNumInfo(trcking_number).then(function(r){
      console.log(r);
    });

*/