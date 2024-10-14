async function getData() {
    const response = await fetch('https://rickandmortyapi.com/api/character');
    const data = await response.json();
    return data;
}

async function handleData() {
    const data = await getData();
    
    showData(data.results);
}
function showData(data) {
    const root = document.getElementById('character grid');
    data.forEach(character => {
        showCharacter(root, character);
    });
}

function showCharacter(root, character) {
    const div = document.createElement('div');
    div.className = 'character';

    const img = document.createElement('img');
    img.src = character.image;
    div.appendChild(img);

    const name = document.createElement('p');
    name.className = 'name';
    name.textContent = character.name;
    div.appendChild(name);

    const ifAlive = document.createElement('p');
    ifAlive.className = 'alive';
    ifAlive.textContent = character.status;
    if(character.status === 'Alive') {
        ifAlive.style.color = 'limegreen';
    }
    else if(character.status === 'Dead') {
        ifAlive.style.color = 'red';
    }
    div.appendChild(ifAlive);

    root.appendChild(div);
}

handleData();