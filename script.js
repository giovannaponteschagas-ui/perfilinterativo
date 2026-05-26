// Banco de dados simulado para conter as informações das "playlists"
const playlistData = {
    hobbies: {
        title: "𝜗ৎ Meus Hobbies",
        description: "As atividades clássicas que preenchem meus dias de calmaria.",
        type: "list",
        items: [
            { title: "Leitura", subtitle: "Leio livros de todos os genêros mas fantasia e romance se destacam.", img: "https://i.pinimg.com/736x/05/62/88/056288c12d7534d07be26dd633b017ef.jpg" },
            { title: "Escrita", subtitle: "Gosto de criar personagens e histórias.", img: "https://i.pinimg.com/1200x/57/9a/95/579a95c3b37f2839c37fb7673e414d26.jpg" },
            { title: "Criações artísticas.", subtitle: "Crochet, pintura, colagens. Tudo aquilo que possa transformar meus sentimentos em coisas concretas.", img: "https://i.pinimg.com/736x/f1/26/ca/f126ca6488f08a00a452cdf805a3991d.jpg" }
        ]
    },
    musicas: {
        title: "಄ Músicas Favoritas",
        description: "A trilha sonora da minha vida.",
        type: "list",
        items: [
            { title: "In a Week (feat. Karen Cowley )", subtitle: "Hozier", img: "https://i.pinimg.com/736x/cf/f2/68/cff268923901e6ce9256d232abfb1601.jpg" },
            { title: "Lacy", subtitle: "Olivia Rodrigo", img: "https://i.pinimg.com/736x/d1/76/58/d17658049b1fb992baca83331a6a017f.jpg" },
            { title: "Sidelines", subtitle: "Wallows", img: "https://i.pinimg.com/736x/5e/4b/55/5e4b5537e4d9453ba4400bc2b5cb0463.jpg" }
        ]
    },
    livros: {
        title: "‎ꫂ᭪݁ Livros Favoritos",
        description: "Páginas que sangram minha alma.",
        type: "list",
        items: [
            { title: "É assim que se perde a guerra no tempo.", subtitle: "Amal El-Mohtar e Max Gladstone", img: "https://i.pinimg.com/736x/4c/ab/5c/4cab5c89258f37522c7e367751eed811.jpg" },
            { title: "Nona Casa", subtitle: "Leigh Bardugo", img: "https://i.pinimg.com/1200x/9b/62/b5/9b62b57d04298b59ad047fd963c65b98.jpg" },
            { title: "All will be well, as long as you stay by my side", subtitle: "ThornedRose44", img: "https://i.pinimg.com/1200x/c0/7f/01/c07f012cff935aa9557812d18d473574.jpg" }
        ]
    },
    inspiracoes: {
        title: "ᯓ★ Pessoas que me Inspiro",
        description: "Mentes brilhantes e estéticas que guiam minha criatividade.",
        type: "list",
        items: [
            { title: "R.F. Kuang", subtitle: "Por sua trajetória sempre focada em buscar o máximo de conhecimento possível", img: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?q=80&w=150&auto=format&fit=crop" },
            { title: "Marlene Koch Lins", subtitle: "Grande cientísta e professora que nunca me deixa desistir.", img: "https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?q=80&w=150&auto=format&fit=crop" }
        ]
    },
    moodboard: {
        title: "˖᯽ ݁˖ Meu Moodboard",
        description: "Uma colagem visual da minha mente e aspirações.",
        type: "grid",
        items: [
            "https://i.pinimg.com/1200x/85/0d/17/850d1705691bab0a32bf02762fdf04a5.jpg",
            "https://i.pinimg.com/736x/d4/0a/b1/d40ab13840e7f5d73cdd31fc0b40fa50.jpg",
            "https://i.pinimg.com/736x/e4/24/fe/e424fe67f32037c23b64b8b64f1bf766.jpg",
            "https://i.pinimg.com/736x/90/97/d5/9097d543174ba79e164882cf7392fded.jpg"
        ]
    }
};

// Função para mudar o conteúdo da página principal
function changeContent(key) {
    const data = playlistData[key];
    if (!data) return;

    // Atualiza o Título e a Descrição no Header
    document.getElementById("content-title").innerText = data.title;
    document.getElementById("content-description").innerText = data.description;

    const contentBody = document.getElementById("dynamic-content");
    contentBody.innerHTML = ""; // Limpa o conteúdo anterior

    // Renderiza baseado no tipo de exibição (Lista ou Grid do Moodboard)
    if (data.type === "list") {
        const listContainer = document.createElement("div");
        listContainer.className = "spotify-list";

        data.items.forEach((item, index) => {
            listContainer.innerHTML += `
                <div class="list-item">
                    <span class="item-index">${index + 1}</span>
                    <img src="${item.img}" alt="${item.title}" class="item-cover">
                    <div class="item-info">
                        <h4>${item.title}</h4>
                        <p>${item.subtitle}</p>
                    </div>
                </div>
            `;
        });
        contentBody.appendChild(listContainer);
    } else if (data.type === "grid") {
        const gridContainer = document.createElement("div");
        gridContainer.className = "moodboard-grid";

        data.items.forEach(imgUrl => {
            gridContainer.innerHTML += `
                <img src="${imgUrl}" alt="Moodboard Image" class="mood-img">
            `;
        });
        contentBody.appendChild(gridContainer);
    }

    // Atualiza a classe ativa na barra lateral
    updateActiveSidebarItem(key);
}

function updateActiveSidebarItem(key) {
    const items = document.querySelectorAll('.nav-item');
    items.forEach(item => item.classList.remove('active'));
    
    // Mapeamento simples para encontrar o item clicado e adicionar a classe 'active'
    const keys = ['hobbies', 'musicas', 'livros', 'inspiracoes', 'moodboard'];
    const index = keys.indexOf(key);
    if(index !== -1) {
        items[index].classList.add('active');
    }
}

// Inicializa a página mostrando a aba de "hobbies" por padrão
window.onload = function() {
    changeContent('hobbies');
};