async function getData(url) {
    const response = await fetch(url);
    const data = await response.json();
    return data;
}

async function handleData(url = 'https://rickandmortyapi.com/api/character') {
    const data = await getData(url);
    showData(data);
}

function showData(data) {
    const root = document.querySelector('.container');
    const loading = document.querySelector('.loading');
    root.innerHTML = '';

    root.style.display = 'none';
    loading.style.display = 'block';

    data.results.forEach(character => {
        showCharacter(root, character);
    });

    loading.style.display = 'none';
    root.style.display = 'grid';
    
    showPageNumber(data);

    setupPagination(data);
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

function showPageNumber(data) {
    const pageNumber = document.getElementById('pageNumber');
    if(data.info.next){
        const urlObj = new URL(data.info.next);
        const params = new URLSearchParams(urlObj.search);
        const page = params.get('page');
        pageNumber.textContent = page - 1;
    }
    else{
        pageNumber.textContent = data.info.pages;
    }
}

function setupPagination(data) {
    const prevButton = document.getElementById('prev');
    const nextButton = document.getElementById('next');

    prevButton.onclick = null;
    nextButton.onclick = null;

    if (data.info.prev) {
        prevButton.disabled = false;
        prevButton.onclick = () => handleData(data.info.prev);
    } else {
        prevButton.disabled = true; 
    }

    if (data.info.next) {
        nextButton.disabled = false;
        nextButton.onclick = () => handleData(data.info.next);
    } else {
        nextButton.disabled = true;
    }
}

handleData();