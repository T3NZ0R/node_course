const fs = require('fs');


function swapping(route1, route2){
    fs.readFile(route1, 'utf-8',(err,data)=>{
        if(err){
            console.log(err);
        }
        fs.writeFile(route2, data, (err)=>{
            if (err){
                console.log(err);
            }
        })
    });
}



function swapFunction(route1, route2){

   swapping(route1, route2);
   swapping(route2, route1);

}

module.exports = {swapFunction};