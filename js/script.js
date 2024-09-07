const getCharacterInfo = () => {
    const characterNameInput = document.getElementById('characterName')
    const characterInfo = document.getElementById('characterInfo')
    const characterName = characterNameInput.value.toLowerCase()

    characterInfo.innerHTML = '';

    if (characterName === '') {
        characterInfo.innerHTML = '<p>Please enter a character name.</p>';
        return;
    }

    fetch(`http://localhost:3000/characters/${characterName}`)
        .then(response => response.json())
        .then(data => {
            const {name, status, species, gender, origin, image} = data
            characterInfo.innerHTML = `
            <h2>${name}</h2>
            <p>Status: ${status}</p>
            <p>Species: ${species}</p>
            <p>Gender: ${gender}</p>
            <p>Origin: ${origin}</p>
            <img src="${image}" alt="${name}"/>
            `
        }) .catch(error => characterInfo.innerHTML = '<p>It\'s not possible to access the character')
}