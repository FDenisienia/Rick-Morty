// Creo card con todos los personajes

fetch("https://rickandmortyapi.com/api/character")
.then(response => response.json())
.then(data => crearCard(data.results))


const crearCard = (personajes) => {
    const cardContainer = document.getElementById('body')
    console.log(personajes)

    personajes.map(persona => {
        cardContainer.innerHTML = cardContainer.innerHTML + 
        `    
        <div id="card-container">
            <div id="card">
                <h2>${persona.name}</h2>
                <img src="${persona.image}" class="img"><img>
            </div>
        <div>
        `
    })
}