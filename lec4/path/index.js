let path=require('path')

console.log(path.join("abc","def","ghi")); //can give any number of argument

console.log(path.join("abc//","//def//","//ghi")); //it remove exta / no matter how much time give in it
