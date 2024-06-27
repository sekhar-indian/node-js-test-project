const express=require('express');
const app=express();
const user=require('./routers/user');

const bodyparser=require('body-parser');
const cors=require('cors')

const Crating=require('./util/tabels/Crating');
const comapanyT=require('./util/tabels/comapanyT');

app.use(cors());
app.use(bodyparser.json())

app.use(user);


Crating.sync()
.then(res=>console.log('k'))
.catch(e=>console.log(e))

comapanyT.sync()
.then(res=>console.log('k'))
.catch(e=>console.log(e))
app.listen(3000,res=>{
    console.log('3000 port')
});