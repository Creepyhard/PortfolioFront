/*---------------------------------------LuaEstrelas---------------------------------------*/ 
let estrelas = document.getElementById('estrelas');
let lua = document.getElementById('lua');
let montanha = document.getElementById('montanha');
let montanhaf = document.getElementById('montanhaf');
let texto = document.getElementById('texto');
let header = document.getElementById('header');

window.addEventListener('scroll', function(){
    let value = window.scrollY;
    estrelas.style.left = value * 0.25 + 'px';
    lua.style.top = value * 1.05 + 'px';
    lua.style.left = value * 1.05 + 'px';
    header.style.top = value * 0.5 + 'px';
    //montanha.style.top = value * 0.5 + 'px';
    montanhaf.style.top = value * 0.5 + 'px';
})

/*---------------------------------------Skills---------------------------------------*/ 
const skills = document.querySelectorAll('.skill-box');
const descricao = document.querySelector('.texto-descricao');
const sobreSkill = [
                    '<p>HTML /Médio</p> <br> <p>É uma linguagem de marcação utilizada na construção de páginas na Web.</p> <br>',
                    '<p>CSS /Médio</p> <br> <p>É um mecanismo para adicionar estilo a um documento web.</p> <br>',
                    '<p>JavaScript /Iniciante</p> <br> <p>É uma linguagem de programação. Juntamente com HTML e CSS, é uma das três principais tecnologias da web.</p> <br>',
                    '<p>Git /Médio</p> <br> <p>É um sistema de controle de versões distribuído, usado principalmente no desenvolvimento de software.</p> <br>',
                    '<p>Java /Intermediário</p> <br> <p>Java é uma linguagem de programação orientada a objetos desenvolvida na década de 90.</p> <br>',
                    '<p>MySQL /Médio</p> <br> <p>O MySQL é um sistema de gerenciamento de banco de dados, que utiliza a linguagem SQL como interface.</p> <br>',
                    '<p>Angular /Médio</p> <br> <p>Angular é uma plataforma de aplicações web de código-fonte aberto e front-end baseado em TypeScript liderado pela Equipe Angular do Google e por uma comunidade de indivíduos e corporações.</p> <br>',
                    '<p>Bootstrap /Intermediário</p> <br> <p>Bootstrap é um framework web com código-fonte aberto para desenvolvimento de componentes de interface e front-end para sites e aplicações web.</p> <br>'
]

skills.forEach(  (elemento, index) => {
    let index1 = index;
    elemento.addEventListener('mouseover', (evento) => {
        descricao.innerHTML = `<p>${sobreSkill[index1]} </p>` ;
    } )
    elemento.addEventListener('mouseout', (evento, elemento,) => {
        descricao.innerHTML = 'Passe o mouse por cima de algum conhecimento para ler sobre';
    } )
} );
/*---------------------------------------Contato---------------------------------------*/ 
const textarea = document.querySelector('.textarea');
textarea.addEventListener('keyup', e => {
    textarea.style.height = `59px`;
    let altura = e.target.scrollHeight;
    textarea.style.height = `${altura}px`;
});