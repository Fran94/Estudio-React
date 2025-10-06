
const httpsClient = fetch('https://jsonplaceholder.typicode.com/users');

/*httpsClient.then(response => {
    //console.log(response);\
    response.json().then(data => {
        console.log(data);
    })
})*/

httpsClient.then(response => response.json())
.then(data => console.log(data));

console.log('Hola que tal!');