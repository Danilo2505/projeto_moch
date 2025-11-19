// Função para buscar um arquivo SVG e inseri-lo inline no HTML
const buscarSvg = (image) => {
  // Faz uma requisição para obter o conteúdo do arquivo SVG a partir do src da imagem
  fetch(image.src)
    .then((response) => response.text()) // Converte a resposta para texto
    .then((response) => {
      const span = document.createElement("span"); // Cria um elemento <span>
      span.innerHTML = response; // Define o conteúdo do <span> como o SVG retornado
      const inlineSvg = span.getElementsByTagName("svg")[0]; // Obtém o elemento <svg>
      // Percorre cada classe do <img> e colocar no <svg>
      image.classList.forEach((value, key, parent) => {
        inlineSvg.classList.add(value);
      });
      image.parentNode.replaceChild(inlineSvg, image); // Substitui a imagem original pelo SVG inline
      return true;
    });
};
