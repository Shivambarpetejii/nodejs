// const express = require('express');
// const path = require('path');

// const app = express();
// const publicPath = path.join(__dirname,'public');

// app.set('view engine','ejs');



// // app.use(express.static(publicPath));

// app.get('',(_,resp)=>{
//     resp.sendFile(`${publicPath}/index.html`);
// })
// app.get('/about',(_,resp)=>{
//     resp.sendFile(`${publicPath}/about.html`);
// })
// app.get('/profile',(_,resp)=>{
//     const user = {
//         name : "shivam Barpete",
//         email : "bar@gmail.com",
//         mobile : "43344343",
//         skill : ['c++','java','react','node']
//     }
//     resp.render('profile',{user});
// })

// app.get('/login',(_,resp)=>
// {
//     resp.render('login');
// })

// app.get('*',(_,resp)=>{
//     resp.sendFile(`${publicPath}/end.html`);
// })



// app.listen(5000);