async function getData(url) {
    const response = await fetch(url);
    if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
    const data = await response.json();
    return data;
}

async function handleData(url = 'https://rickandmortyapi.com/api/character') {
    showData(await getData(url));
}

function showData(data) {
    const root = document.querySelector('.container');
    const loading = document.querySelector('.loading');
    root.innerHTML = '';
    root.style.display = 'none';
    loading.style.display = 'block';

    data.results.forEach(character => showCharacter(root, character));
    loading.style.display = 'none';
    root.style.display = 'grid';
    
    showPageNumber(data);
    setupPagination(data);
}

function showCharacter(root, { image, name, status }) {
    const div = document.createElement('div');
    div.className = 'character';
    
    const statusColor = status === 'Alive' ? 'limegreen' : status === 'Dead' ? 'red' : 'gray';

    div.innerHTML = `
        <img src="${image}">
        <p class="name">${name}</p>
        <p class="alive" style="color: ${statusColor}">${status}</p>
    `;

    root.appendChild(div);
}

function showPageNumber( { info }) {
    const pageNumber = document.getElementById('pageNumber');
    const page = info.next ? new URL(info.next).searchParams.get('page') : undefined;
    pageNumber.textContent = page ? page - 1 : info.pages;
}

function setupPagination({ info}) {
    document.getElementById('prev').onclick = info.prev ? () => handleData(info.prev) : null;
    document.getElementById('prev').disabled = !info.prev;
    document.getElementById('next').onclick = info.next ? () => handleData(info.next) : null;
    document.getElementById('next').disabled = !info.next;
}

handleData();