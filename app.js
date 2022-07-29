const template = document.getElementById('template')
const cardContainers = document.getElementById('cards-container')
const searchInput = document.getElementById('search')

for(i = 1; i < 42; i++){
    let characters = []

    searchInput.addEventListener("input", e => {
        const inputValue = e.target.value.toLowerCase()
        // console.log(inputValue)
        characters.forEach(character => {
            const existe = character.name.toLowerCase().includes(inputValue) 
                            || character.origin.toLowerCase().includes(inputValue) 
                            || character.status.toLowerCase().includes(inputValue)
            character.element.classList.toggle("noexiste", !existe)
    
        })
    })

    fetch(`https://rickandmortyapi.com/api/character?page=${i}`)
    .then(response => response.json())
    .then(data => {
     
    let characters1 = data.results
    characters = characters1.map(char => {
        const card = template.content.cloneNode(true).children[0]
        const header = card.querySelector('.card-header')
        const location = card.querySelector('.location')
        const origin = card.querySelector('.origin')
        const gender = card.querySelector('.gender')
        const especie = card.querySelector('.specie')
        const status = card.querySelector('.status')
        const cardImg = card.querySelector('.card-img')
        // console.log(card)
        // console.log(char.name)
        header.textContent = char.name
        origin.innerHTML = `Origin: ${char.origin.name}`
        especie.innerHTML = `Specie: ${char.species}`
        gender.innerHTML = `Gender: ${char.gender}`
        location.innerHTML = `Location: ${char.location.name}`
        status.innerHTML = `Status: ${char.status}`


        cardImg.src = char.image

        cardContainers.append(card)

        return { element: card, name: char.name, origin: char.origin.name, status: char.status }
    })
})
}



