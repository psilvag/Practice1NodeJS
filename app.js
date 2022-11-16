
const express=require('express')

const app=express()

app.get('/profile',(req,res)=>{
    res.json({
        name:'Pablo',
        age:29,
        country:'Bolivia'
    })
})
app.post('/profile',(req,res)=>{
    res.json({
       companys:['TSMC','10CLOUDS','INTEL']
    })
})

app.patch('/profile',(req,res)=>{
    res.json({
       hobbies:['read','watch movies','design things']
    })
})

const port=8000
app.listen(port,()=>{
    console.log('Server conected port:8000');
})