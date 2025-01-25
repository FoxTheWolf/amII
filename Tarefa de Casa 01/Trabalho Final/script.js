// Obtemos o elemento do slider
const xSlider = document.getElementById('xSlider');
// Obtemos o círculo que representa o ponto no gráfico
const dataPoint = document.getElementById('dataPoint');

// Definimos limites do eixo X no SVG (em pixels)
const xMinPixel = 40;  // Onde o eixo X começa no SVG
const xMaxPixel = 480; // Onde o eixo X termina no SVG

// Adiciona transição suave ao círculo
dataPoint.style.transition = 'cx 0.3s ease, cy 0.3s ease';

// Precisamos converter o valor do slider (0 a 100) em coordenadas do SVG.
function updatePointPosition(value) {
  // 'value' vai de 0 a 100
  // Vamos converter para a faixa [xMinPixel, xMaxPixel]

  const rangeSlider = 100; // Tamanho máximo do slider
  const pixelRange = xMaxPixel - xMinPixel; // Distância em pixels do eixo

  // Regra de 3: valor % slider -> pixel no SVG
  const newX = xMinPixel + (value / rangeSlider) * pixelRange;

  // Movemos o ponto para esse X (eixo Y baseado em y = x^2 ajustado)
  const yMaxPixel = 250; // Máximo do eixo Y no SVG
  const newY = yMaxPixel - (value / rangeSlider) ** 2 * yMaxPixel;

  dataPoint.setAttribute('cx', newX);
  dataPoint.setAttribute('cy', newY);
}

// Quando carregamos a página, atualizamos a posição inicial
updatePointPosition(xSlider.value);

// Escutamos mudanças no slider
xSlider.addEventListener('input', (event) => {
  const valorAtual = event.target.value;
  updatePointPosition(valorAtual);
});

