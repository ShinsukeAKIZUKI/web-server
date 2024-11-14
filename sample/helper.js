const fs = require("fs");

let person = {
  name : "Mike",
  age : 30
}

const write = function() {
  fs.writeFile("sample.json",JSON.stringify(person),function(){
  console.log("write");
  });
};

const read = function(){
  fs.readFile("./sample.json","utf8",function(err,data){
    const person = JSON.parse(data);
    console.log(person.name);
  });
};

module.exports = {
  read : read,
  write : write
};