const fs = require('fs');
const path = require('path');

function swapFunction(route1, route2){

    fs.readFile(route1, 'utf-8',(err,data)=>{
        if(err){
            console.log(err);
        }
        fs.writeFile(path.join(route2), data, (err)=>{
            if (err){
                console.log(err);
            }
        })
    });

    fs.readFile(route2, 'utf-8',(err,data)=>{
        if(err){
            console.log(err);
        }
        fs.writeFile(path.join(route1), data, (err)=>{
            if (err){
                console.log(err);
            }
        })
    });

    // fs.readFile(route2, 'utf-8',(err,data)=>{
    //     if(err){
    //         console.log(err);
    //     }
    //     console.log(data);
    // })

}

module.exports = {swapFunction};