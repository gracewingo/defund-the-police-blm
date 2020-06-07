var https = require("https");
var path = require("path");
var fs = require("fs");
var express = require("express");
var router = express.Router();

router.get("/", function (req, res, next) {
  var format = "csv";
  var id = "1Tu1fcZhsLl3ZasokqoOwJ8drjHeZh35eBF237DYZGdc"; 
  var sheetId = 0; 

  https.get(
    `https://docs.google.com/spreadsheets/d/${id}/export?format=${format}&id=${id}&gid=${sheetId}`,
    function (resp) {
      var body = '';

      resp
        .on('data', function(data) {
    
          body += ab2str(data);
    
        })
        .on('end', function() {
    
          var json = [];
          var rows = body.split(/\r\n/i);
    
          for (var i = 0; i < rows.length; i++) {
            json.push(rows[i].split(/,/i));
          }
    
          fs.writeFileSync(path.resolve(__dirname, './sheet.json'), JSON.stringify(json));
          console.log('Generated sheet.json');
    
        });
    }
  );

  function ab2str(buf) {
    return String.fromCharCode.apply(null, new Uint16Array(buf));
  }
  res.send('');
});

module.exports = router;
