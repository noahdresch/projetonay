// Inicializa TODOS os swipers da página (1, 2 e 3)
document.querySelectorAll('.swiper').forEach(swiperEl => {
  new Swiper(swiperEl, {
    loop: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    slidesPerView: 2,
    spaceBetween: 10,
    breakpoints: {
      600: { slidesPerView: 3, spaceBetween: 15 },
      768: { slidesPerView: 4, spaceBetween: 40 },
      1024: { slidesPerView: 5, spaceBetween: 50 },
    }
  });
});

// Data inicial do namoro
const dataInicio = new Date(2023, 7, 19); // exemplo: 19 de Agosto de 2022

function atualizarFlipClock() {
    const agora = new Date();
    let anos = agora.getFullYear() - dataInicio.getFullYear();
    let meses = agora.getMonth() - dataInicio.getMonth();
    let dias = agora.getDate() - dataInicio.getDate();
    let horas = agora.getHours() - dataInicio.getHours();
    let minutos = agora.getMinutes() - dataInicio.getMinutes();
    let segundos = agora.getSeconds() - dataInicio.getSeconds();

    if (segundos < 0) { segundos += 60; minutos--; }
    if (minutos < 0) { minutos += 60; horas--; }
    if (horas < 0) { horas += 24; dias--; }
    if (dias < 0) { 
        const ultimoMes = new Date(agora.getFullYear(), agora.getMonth(), 0).getDate();
        dias += ultimoMes; 
        meses--; 
    }
    if (meses < 0) { meses += 12; anos--; }

    // Função para atualizar número
    function atualizarFlip(id, valor) {
        const el = document.getElementById(id);
        el.textContent = valor.toString().padStart(2, '0');
    }

    atualizarFlip("anos", anos);
    atualizarFlip("meses", meses);
    atualizarFlip("dias", dias);
    atualizarFlip("horas", horas);
    atualizarFlip("minutos", minutos);
    atualizarFlip("segundos", segundos);
}

setInterval(atualizarFlipClock, 1000);
atualizarFlipClock();
