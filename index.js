const express = require('express');
const app  = express();
const PORT = 8000;
const fs = require('fs')
const requestHandler = require('./requests')

app.use(express.json());
app.use((req,res,next)=>
{
 const now = new Date().toISOString();
const requestlog = `{RM: ${req.method} | URL:${req.url} | ${now}  }\n`;
fs.appendFile('requestlog.txt',requestlog,()=>{});
next();
});


app.use('/users',requestHandler.router);
app.use('/about',requestHandler.router);

app.get('/',(req,res)=>
{
  try
  {
   res.send('Build is live !');

  }
  catch(err)
  {
    console.log("Build is not live : "+(err));
  }
});
app.listen(PORT,()=>{console.log(`Build is live at: ${PORT}`)});

