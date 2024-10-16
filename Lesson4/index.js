const root = document.querySelector('.container');
const loading = document.querySelector('.loading');
const modal = document.querySelector('.modal');
const modalContent = document.querySelector('.modal-content');
const modalClose = document.querySelector('.close');

let nextPage = 'https://rickandmortyapi.com/api/character';
let isLoading = false;

const getData = async (url) => {
    const response = await fetch(url);
    if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
    const data = await response.json();
    return data;
};

const showData = async (url = 'https://rickandmortyapi.com/api/character')  => {
    root.style.display = 'none';
    loading.style.display = 'block';

    await addData(url);

    if (document.documentElement.scrollHeight <= window.innerHeight){
        await addData(nextPage);
    }

    loading.style.display = 'none';
    root.style.display = 'grid';
};

const addData = async(url) => {
    isLoading = true;
    const data = await getData(url);
    const charactersHtml = data.results.map(character => showCharacter(character)).join('');
    root.innerHTML += charactersHtml;
    nextPage = data.info.next;
    isLoading = false;
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

window.addEventListener('scroll', () => {
    if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight - 200&& !isLoading) {
        addData(nextPage);
    }
});

showData();