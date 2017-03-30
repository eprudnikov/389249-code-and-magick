'use strict';

var textColor = 'rgb(0, 0, 0)';
var font = '16px PT Mono';
var sheetWidth = 420;
var sheetHeight = 270;
var sheetXPosition = 110;
var sheetYPosition = 10;
var padding = 20;
var startXPosition = sheetXPosition + padding;
var textHeight = 20;

var renderStatistics = function (ctx, names, times) {
  var shadowColor = 'rgba(0, 0, 0, 0.7)';
  var sheetBackground = 'rgb(255, 255, 255)';
  var shadowOffset = 10;

  ctx.fillStyle = shadowColor;
  ctx.fillRect(sheetXPosition + shadowOffset, sheetYPosition + shadowOffset, sheetWidth, sheetHeight);

  ctx.fillStyle = sheetBackground;
  ctx.fillRect(sheetXPosition, sheetYPosition, sheetWidth, sheetHeight);

  ctx.fillStyle = textColor;
  ctx.font = font;
  ctx.fillText('Ура, вы победили!', startXPosition, sheetYPosition + padding + textHeight);
  ctx.fillText('Список результатов:', startXPosition, sheetYPosition + padding + textHeight * 2);

  renderHistogram(ctx, names, times);
};
window.renderStatistics = renderStatistics;

function renderHistogram(ctx, names, times) {
  var histogramHeight = 150;
  var barWidth = 40;
  var barMargin = 50;
  var myName = 'Вы';
  var myColor = 'rgba(255, 0, 0, 1)';

  var maxTime = findMaxTime(times);
  var unit = histogramHeight / maxTime;

  for (var i = 0; i < names.length; i++) {
    var barXPosition = startXPosition + i * (barWidth + barMargin);
    var barYPosition = sheetHeight - padding - histogramHeight + (maxTime - times[i]) * unit;
    var barHeight = times[i] * unit;

    ctx.fillStyle = names[i] === myName ? myColor : generateRandomColor();
    ctx.fillRect(barXPosition, barYPosition, barWidth, barHeight);

    var textMargin = 5;
    ctx.fillStyle = textColor;
    ctx.fillText(names[i], barXPosition, sheetHeight);
    ctx.fillText(Math.round(times[i]), barXPosition, barYPosition - textMargin);
  }
}

function findMaxTime(times) {
  var maxTime = -1;
  for (var i = 0; i < times.length; i++) {
    maxTime = maxTime < times[i] ? times[i] : maxTime;
  }
  return maxTime;
}

function generateRandomColor() {
  var rgbForOtherPlayers = '120, 120, 255';
  var opaqueMinimum = 0.2;

  var alpha = Math.random() * (1 - opaqueMinimum) + opaqueMinimum;
  return 'rgba(' + rgbForOtherPlayers + ', ' + alpha + ')';
}
