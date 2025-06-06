const express = require('express');
//const { STATUS_CODES } = require('http');
const router = express.Router()

// router.use((req,next)=>
// {
// const baseURL = req.baseUrl;
// next();
// });
router.get('/',(req,res)=>{

const baseURL = req.baseUrl;
if(baseURL==='/users')
{
    res.send('users endpoinnt is working fine!')
}
else if(baseURL==='/about')
{
    res.send('about endpoint is working fine!')
}
else
{
    res.status(404).send("Unknown error")
}

});
module.exports = {router};