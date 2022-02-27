const parse = require("csv-parse");
const fs = require("fs");
console.log(parse)
const result = [];
 fs.createReadStream("kepler_scope.csv")
 .pipe(parse.parse({
     columns: true,
     comment:'#'
 }))
  .on("data", (data) => {
    result.push(data);
  })
  .on("error", (err) => {
    console.log(err);
  })
  .on("end", () => {
    console.log(result);
    console.log(" done ");
  });
 