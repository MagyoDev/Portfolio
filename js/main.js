const translations = {
    br: {
        description: 'Olá! Meu nome é Alan de Lima Silva, sou técnico em desenvolvimento de sistemas. Atualmente, estou cursando graduação em Análise e Desenvolvimento de Sistemas na Faculdade de Tecnologia da Zona Leste. Tenho um artigo publicado, caso queira ler <a href="https://revista.fateczl.edu.br/index.php/engetec_revista/article/view/1">EnGeTec</a>/<a href="https://zenodo.org/records/10904539">Zenodo</a>.'
    },
    en: {
        description: 'Hello! My name is Alan de Lima Silva, I am a systems development technician. Currently, I am pursuing a degree in Systems Analysis and Development at the Zona Leste Technology College. I have a published article, if you want to read <a href="https://revista.fateczl.edu.br/index.php/engetec_revista/article/view/1">EnGeTec</a>/<a href="https://zenodo.org/records/10904539">Zenodo</a>.'
    },
    es: {
        description: '¡Hola! Mi nombre es Alan de Lima Silva, soy técnico en desarrollo de sistemas. Actualmente, estoy cursando una licenciatura en Análisis y Desarrollo de Sistemas en la Facultad de Tecnología de Zona Leste. Tengo un artículo publicado, si quieres leer <a href="https://revista.fateczl.edu.br/index.php/engetec_revista/article/view/1">EnGeTec</a>/<a href="https://zenodo.org/records/10904539">Zenodo</a>.'
    }
};

function changeLanguage(language) {
    const descriptionElement = document.getElementById('description');
    if (translations[language]) {
        descriptionElement.innerHTML = translations[language].description;
    }
}

document.getElementById('language-select').addEventListener('change', function() {
    changeLanguage(this.value);
});

changeLanguage('br');
