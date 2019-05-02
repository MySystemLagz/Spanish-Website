let language = 0;  // 0 is English, 1 is Spanish

function ChangeText() {

    const english = ['<i class="fas fa-globe"></i> Toggle Language', 'Solar', 'Convert sunlight into clean energy with solar panels on your existing roof, or a brand new Solar Roof.', 'A home battery designed to store your clean energy, so you can use it anytime you want—at night or during an outage.', 'Energy'];

    const spanish = ['<i class="fas fa-globe"></i> Cambiar Idioma', 'Solar', 'Convierta la luz solar en energía limpia con paneles solares en su tejado existente, o un nuevo techo solar.', 'Una hogar batería diseñada para almacenar tu energía limpia, para que puedas usarla en cualquier momento que quieras, por la noche o durante una interrupción.', 'Energía'];

    if (language === 0) {
        for (let i = 0; i < spanish.length; i++) {
            document.getElementsByClassName('text')[i].innerHTML = spanish[i];
        }
        language = 1;
    } else {
        for (let i = 0; i < english.length; i++) {
            document.getElementsByClassName('text')[i].innerHTML = english[i];
        }
        language = 0;
    }
}