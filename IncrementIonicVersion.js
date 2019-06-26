module.exports = function(context) {
  var util = require("util"),
    fs = require("fs"),
    path = require("path"),
    xml2js = require("xml2js");

  (parser = new xml2js.Parser()),
    fs.readFile("config.xml", "utf-8", function(err, data) {
      if (err) console.log(err);
     
      parser.parseString(data, function(err, result) {
        if (err) console.log(err);

        result.widget["$"]["version"] = inc(result.widget["$"]["version"]);

        rewriteConfig(result);
      });
    });

  function inc(s) {
    var a = s.split(".");

    a[2] = "" + (parseInt(a[2]) + 1);

    return a.join(".");
  }

  function rewriteConfig(result) {
    fs.writeFile("config.xml", buildXML(result), { encoding: "utf8" }, function(
      err
    ) {
      if (err) throw err;
      console.log("Saved in config DS");
    });
  }
  function buildXML(obj) {
    var builder = new xml2js.Builder();
    builder.options.renderOpts.indent = "\t";
    var x = builder.buildObject(obj);
    return x.toString();
  }
};
