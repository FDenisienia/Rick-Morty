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
        const cardImg = card.querySelector('.card-img')

        // console.log(card)
        // console.log(char.name)
        header.textContent = char.name
        cardImg.src = char.image

        cardContainers.append(card)

        return { name: char.name, element: card }
    })
})
}



