const root = document.querySelector('.container');
const loading = document.querySelector('.loading');
const modal = document.querySelector('.modal');
const modalContent = document.querySelector('.modal-content');
const modalClose = document.querySelector('.close');

const getData = async (url) => {
    const response = await fetch(url);
    if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
    const data = await response.json();
    return data;
};

const showData = async (url = 'https://rickandmortyapi.com/api/character')  => {
    const data = await getData(url);
    root.innerHTML = '';
    root.style.display = 'none';
    loading.style.display = 'block';

    addData(data);
    loading.style.display = 'none';
    root.style.display = 'grid';
};

const addData = ({ results }) => {
    const charactersHtml = results.map(character => showCharacter(character)).join('');
    root.innerHTML += charactersHtml;
};

const showModal = async (url) => {
    const characterData = await getData(url);
    modalContent.innerHTML = `
        <img src="${characterData.image}">
        <p class="name">${characterData.name}</p>
    `;
    modal.style.display = 'flex';
};

const showCharacter = ({ image, name, status, id }) => {
    const statusColor = status === 'Alive' ? 'limegreen' : status === 'Dead' ? 'red' : 'gray';

    return `
        <div class="character" data-index="${id}">
            <img src="${image}">
            <p class="name">${name}</p>
            <p class="alive" style="color: ${statusColor}">${status}</p>
        </div>
    `;
};

root.addEventListener('click', (event) => {
    const character = event.target.closest('.character');
    if (!character) return;
    const index = character.getAttribute('data-index');
    const url = `https://rickandmortyapi.com/api/character/${index}`;
    showModal(url);
});

modalClose.addEventListener('click', () => {
    modal.style.display = 'none';
});

window.addEventListener('click', (event) => {
    if (event.target === modal) {
        modal.style.display = 'none';
    }
});

showData();