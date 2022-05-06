const express=require ('express');
const app=express();
const cors=require('cors');
//middleware 
app.use(cors());
app.use(express.json());

app.use('/auth',require('./Route/login_register'));
app.use('/dashboard',require('./Route/dashboard'));

app.listen(3000,()=>{
    console.log('server is running on 3000');
})