
// //Equivalent stuff

// //1
// process.stdin.pipe(process.stdout);

// //2
// let inStream = process.stdin;
// inStream.on('data', (chunk)=>{
//     process.stdout.write(chunk);
// });

// inStream.on('end', ()=>{
//     process.stdout.write(null);
//        //Above statement is equivalent to
//        //process.stdout.end();
// });
