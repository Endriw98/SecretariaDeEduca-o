const visible_fd = document.getElementById('visible-fd');
const funcionarios_desligados = document.getElementById('listar-funcionario-desligado');
visible_fd.addEventListener('click', () => {
    if (funcionarios_desligados.style.display === 'none' || funcionarios_desligados.style.display === '') {
        funcionarios_desligados.style.display = 'block';
        visible_fd.innerText = 'Ocultar Funcionários Desligados';
        visible_fd.style.width = '220px';
    } else {
        funcionarios_desligados.style.display = 'none';
        visible_fd.innerText = 'Mostrar Funcionários Desligados';
        visible_fd.style.width = '230px';
    }
});
const bt_recadastramento = document.getElementById('bt-recadastramento');
const recadastramento_div = document.getElementById('recadastramento');
const visualizar_historico = document.getElementById('visualizar_historico');

bt_recadastramento.addEventListener('click', () => {
    if (recadastramento_div.style.display === 'none' || recadastramento_div.style.display === '') {
        recadastramento_div.style.display = 'block';
        bt_recadastramento.innerText = 'Cancelar Recadastramento';

    } else {
        recadastramento_div.style.display = 'none';
        bt_recadastramento.innerText = 'Iniciar Recadastramento';
    }
});

const historico_detalhado = document.getElementById('historico-detalhado');
visualizar_historico.addEventListener('click', () => {
    if (historico_detalhado.style.display === 'none' || historico_detalhado.style.display === '') {
        historico_detalhado.style.display = 'block';
        visualizar_historico.innerText = 'Ocultar Histórico';
    } else {
        historico_detalhado.style.display = 'none';
        visualizar_historico.innerText = 'Visualizar Histórico';

    }
});        

    const inicioView = document.getElementById('inicio');
    const funcionariosView = document.getElementById('funcionarios');
    const relatoriosView = document.getElementById('relatorios');
    function inicio() {
            inicioView.style.display = 'block';
            funcionariosView.style.display = 'none';
            relatoriosView.style.display = 'none';
    }
    function funcionarios() {
            if (funcionariosView.style.display === 'none') {
                funcionariosView.style.display = 'block';
                inicioView.style.display = 'none';
                relatoriosView.style.display = 'none';
            }
    }
    
    function relatorios() {
            if (relatoriosView.style.display === 'none') {
                relatoriosView.style.display = 'block';
                inicioView.style.display = 'none';
                funcionariosView.style.display = 'none';
            }   
    }
    function sair() {
        window.location.href = "index.html";

    }

    const modoBtn = document.getElementById('modo');

const sunIcon = `
<svg class="icon-toggle" xmlns="http://www.w3.org/2000/svg" 
     viewBox="0 0 24 24" aria-labelledby="sunTitle" role="img">
  <title id="sunTitle">Modo Claro</title>
  <path fill="currentColor" d="M12 18a6 6 0 1 1 0-12 6 6 0 0 1 0 12zm0-16a1 1 0 0 1 1 1v2a1 1 0 1 1-2 0V3a1 1 0 0 1 1-1zm0 16a1 1 0 0 1 1 1v2a1 1 0 1 1-2 0v-2a1 1 0 0 1 1-1zM4.22 4.22a1 1 0 0 1 1.41 0L7 5.59a1 1 0 1 1-1.41 1.41L4.22 5.63a1 1 0 0 1 0-1.41zm12.19 12.19a1 1 0 0 1 1.41 0L19.78 19a1 1 0 1 1-1.41 1.41l-1.97-1.97a1 1 0 0 1 0-1.41zM1 12a1 1 0 0 1 1-1h2a1 1 0 1 1 0 2H2a1 1 0 0 1-1-1zm16 0a1 1 0 0 1 1-1h2a1 1 0 1 1 0 2h-2a1 1 0 0 1-1-1zM4.22 19.78a1 1 0 0 1 1.41 0L7 18.41a1 1 0 1 1 1.41 1.41l-1.97 1.97a1 1 0 0 1-1.41 0zm12.19-12.19a1 1 0 0 1 1.41 0L19.78 7a1 1 0 1 1-1.41 1.41l-1.97-1.97a1 1 0 0 1 0-1.41z"/>
</svg>
`;

const moonIcon = `
<svg class="icon-toggle" xmlns="http://www.w3.org/2000/svg"
     viewBox="0 0 24 24" role="img" aria-labelledby="moonTitle">
  <title id="moonTitle">Modo Noturno</title>
  <path fill="currentColor" d="M21 12.79A9 9 0 0 1 11.21 3 7 7 0 1 0 21 12.79z"/>
</svg>
`;

const body = document.body;
const h1 = document.querySelector('h1');
const box_0 = document.getElementById('content')
const box_1 = document.getElementById('content1');
const box_2 = document.getElementById('content2');
const box_3 = document.getElementById('content3');
const p01 = document.getElementById('p1');
const getElement = (selector) => document.querySelector(selector);
modoBtn.innerHTML = sunIcon;
modoBtn.dataset.mode = "light";

modoBtn.addEventListener("click", () => {
    if (modoBtn.dataset.mode === "light") {
        modoBtn.innerHTML = moonIcon;
        modoBtn.dataset.mode = "dark";
        body.style.backgroundColor = '#474747ff';
        document.body.classList.add("dark");
        h1.style.color = '#ffffff';
        box_0.style.backgroundColor = '#636363ff';
        box_0.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.3)';
        box_0.style.color = '#ffffff';
        box_1.style.backgroundColor = '#636363ff';
        box_1.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.3)';
        box_1.style.color = '#ffffff';
        box_2.style.backgroundColor = '#636363ff';
        box_2.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.3)';
        box_2.style.color = '#ffffff';
        box_3.style.backgroundColor = '#636363ff';
        box_3.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.3)';
        box_3.style.color = '#ffffff';
    } else {
        modoBtn.innerHTML = sunIcon;
        modoBtn.dataset.mode = "light";
        body.style.backgroundColor = '';
        h1.style.color = '#000000';
        box_2.style.backgroundColor = '#f0f0f0';
        box_2.style.boxShadow = '';
        box_2.style.color = '#000000';
        
        getElement('body').style.backgroundColor = '#e6e6e6';
        document.body.classList.remove("dark");
    }
});