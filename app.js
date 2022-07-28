/* Muestra la data por consola
fetch("https://rickandmortyapi.com/api/character")
.then(response => response.json())
.then(data => console.log(data.results[0].image))
*/

let rick;

fetch("https://rickandmortyapi.com/api/character")
.then(response => response.json())
.then(data => rick = data.results[0].image)

console.log(rick) // Undefined
