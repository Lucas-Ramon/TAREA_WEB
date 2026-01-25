// Arreglo inicial de artículos
let articles = [
    { name: "Artículo A", price: 15, description: "Descripción del artículo A" },
    { name: "Artículo B", price: 25, description: "Descripción del artículo B" },
    { name: "Artículo C", price: 35, description: "Descripción del artículo C" }
];

// Función para renderizar la lista de artículos
function renderArticles() {
    const articleList = document.getElementById('article-list');
    articleList.innerHTML = ''; // Limpiar la lista antes de renderizar

    articles.forEach(article => {
        const li = document.createElement('li');
        li.textContent = `${article.name} - $${article.price}: ${article.description}`;
        articleList.appendChild(li);
    });
}

// Función para agregar un nuevo artículo
function addArticle() {
    const name = document.getElementById('article-name').value;
    const price = document.getElementById('article-price').value;
    const description = document.getElementById('article-description').value;

    if (name && price && description) {
        articles.push({ name, price: parseFloat(price), description });
        renderArticles(); // Renderizar la lista actualizada
        clearInputs(); // Limpiar los campos de entrada
    } else {
        alert("Por favor, completa todos los campos.");
    }
}

// Función para limpiar los campos de entrada
function clearInputs() {
    document.getElementById('article-name').value = '';
    document.getElementById('article-price').value = '';
    document.getElementById('article-description').value = '';
}

// Evento para agregar un artículo al hacer clic en el botón
document.getElementById('add-article').addEventListener('click', addArticle);

// Renderizar la lista de artículos al cargar la página
window.onload = renderArticles;