/* console.log(`${__dirname}/../public`)

const path = require('path');
console.log(path.join(__dirname, '/../public')) // removes un - necessary steps

 */

 const path = require('path');
 const express = require('express');
 const app = express();
 const port = process.env.PORT || 3000;

 const publicFolder = path.join(__dirname, '../public')
 console.log(publicFolder)



app.use(express.static(publicFolder))


app.listen(port,()=>{
    console.log(`Application started !! PORT ${port}`)
})