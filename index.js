// // const fs = require('fs');
// // const http = require('http');
// // /////////////////////////////////////
// // // Files
// //
// // // Blocking, synchronous way
// // // const textIn = fs.readFileSync('./input.txt', 'utf-8');
// // // console.log(textIn);
// // // const textOut = `This is what we know about the avocado: ${textIn}.\nCreated on ${Date.now()}`;
// // // fs.writeFileSync('./output.txt', textOut);
// // // console.log("File Written");
// //
// // // Non-blocking, asynchronous way
// // // fs.readFile('./txt/start.txt', 'utf-8', (err, data1) => {
// // //     if (err) return console.log('ERROR')
// // //     fs.readFile(`./txt/${data1}.txt`, 'utf-8', (err, data2) => {
// // //         console.log(data2);
// // //         fs.readFile('./txt/append.txt', 'utf-8', (err, data3) => {
// // //             console.log(data3);
// // //
// // //             fs.writeFile('./txt/final.txt', `${data2}\n${data3}`, 'utf-8', err =>{
// // //                 console.log('Your file has been written');
// // //             })
// // //         });
// // //     });
// // // });
// // // console.log("Will read file!")
// //
// // //////////////////////////////////
// // // Server
// //
// // const server = http.createServer((req,res) => {
// //     res.end('Hello from the server')
// // });
// //
// // server.listen(8000, '127.0.0.1', () => {
// //     console.log("Server running on port 8000");
// // });
//
// // ------------------Redo--------------------
// // const fs = require('fs')
// // const http = require('http');
//
// //////////////////////////// FILE
//
// // const fs = require('fs')
// // BLOCKING SYNCHRONOUS WAY
// // const textIn = fs.readFileSync('./txt/input.txt', 'utf-8');
// // console.log(textIn);
// // const hello = "Hello World";
// // console.log(hello);
// // const textOut = `This is what we know about the avocado: ${textIn}.\nCreated on ${Date.now()}`;
// // fs.writeFileSync('./txt/output.txt', textOut);
// // console.log('File written');
//
// // NON-BLOCKING NON-SYNCHRONOUS WAY
// // fs.readFile('./txt/start.txt', 'utf-8', (err, data1) => {
// //     fs.readFile(`./txt/${data1}.txt`, 'utf-8', (err, data2) => {
// //         console.log(data2);
// //         fs.readFile('./txt/append.txt', 'utf-8', (err, data3) => {
// //             console.log(data3);
// //
// //             fs.writeFile('./txt/final.txt', `${data2}\n${data3}`,'utf-8', err => {
// //                 console.log('Your file has been written')
// //             })
// //         });
// //     });
// // });
// // console.log('Will read file!')
//
//
//
// const fs = require('fs');
// const http = require('http');
// const url = require('url');
//
// ////////////////////// SERVER
//
// const tempOverview = fs.readFileSync(`${__dirname}/templates/templates-overview.html`, 'utf-8');
// const tempCard = fs.readFileSync(`${__dirname}/templates/templates-card.html`, 'utf-8');
// const tempProduct = fs.readFileSync(`${__dirname}/templates/templates-product.html`, 'utf-8');
//
// const data = fs.readFileSync(`${__dirname}/dev-data/data.json`, 'utf-8');
// const dataObj = JSON.parse(data);
//
// const server = http.createServer((req,res) => {
//     const pathName = req.url;
//
//         // Overview Page
//     if(pathName === '/' || pathName === '/overview'){
//         res.writeHead(200, {'Content-type': 'text/html'})
//         res.end(tempOverview);
//
//         // Product Page
//     } else if (pathName === '/product'){
//         res.end('This is the product');
//
//         // API
//     }else if (pathName === '/api'){
//         res.writeHead(200, {'Content-type': 'application/json'})
//         res.end(data);
//
//         // Not Found
//     } else {
//         res.writeHead(404, {
//             'Content-type': 'text/html',
//             'my-own-header': 'hello-world'
//         });
//         res.end("<h1>Fage not pound</h1>")
//     }
//     res.end('Hello from the server!');
// });
//
// server.listen(8000, '127.0.0.1', () => {
//     console.log("Server started on port 8000")
// })
// const add = require('./add.js');
// console.log("Hello from index.js");
// const sum = add(1,2)
// const sum2 = add(2,3)
// console.log(sum);
// console.log(sum2);

// require("./batman")
// require("./superman")

// const superHero = require("./super-hero");
// console.log(superHero.getName());
// superHero.setName("Superman");
// console.log(superHero.getName());
//
// const newSuperHero = require("./super-hero");
// console.log(newSuperHero.getName())

// const SuperHero = require('./super-hero');
// const batman = new SuperHero('Batman');
// console.log(batman.getName());
// batman.setName('Bruce Wayne');
// console.log(batman.getName());
//
// const superman = new SuperHero("Superman");
// console.log(superman.getName());

const math = require('./math');

const {add, subtract} = math;

console.log(math.add(2,3));
console.log(math.subtract(2,3));




