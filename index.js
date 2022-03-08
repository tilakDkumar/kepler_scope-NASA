const parse = require("csv-parse");
const fs = require("fs");
const result = [];

const habitablePlanets = []
function isHabitablePlanets(plane){
    return plane['koi_disposition'] == 'CONFIRMED' && 
    plane['koi_insol'] > 0.36 && plane['koi_insol'] < 1.11 
    && plane['koi_prad'] < 1.6
}
 fs.createReadStream("kepler_scope.csv")
 .pipe(parse.parse({
     columns: true,
     comment:'#'
 }))
  .on("data", (data) => {
    if(isHabitablePlanets(data)){
      habitablePlanets.push(data)
    }
    // result.push(data);
  })
  .on("error", (err) => {
    console.log(err);
  })
  .on("end", () => {
    // console.log(result);
    console.log(habitablePlanets);

    console.log(" done ");
  });
 