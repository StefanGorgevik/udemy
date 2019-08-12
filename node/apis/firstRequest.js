const request = require('request');
// request('http://www.google.com', function (error, response, body) {
//     if(error) {
//         console.log("There is an error", error);
//     } else {
//         if(response.statusCode === 200) {
//             //Everything is ok!
//             console.log(body);
//         }
//     }
// });


request('https://jsonplaceholder.typicode.com/users/1', function (error, response, body) {
    if(!error && response.statusCode === 200) {
        var parsedData = JSON.parse(body);
        console.log(parsedData);
    } 
});