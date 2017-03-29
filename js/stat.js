'use strict';

// Good x position to align elements
var x = 130;

function renderStatistics(ctx, names, times) {
  ctx.fillStyle = 'rgba(0, 0, 0, 0.7)';
  ctx.fillRect(110, 20, 420, 270);

  ctx.fillStyle = 'rgb(255, 255, 255)';
  ctx.fillRect(100, 10, 420, 270);

  ctx.fillStyle = 'rgb(0, 0, 0)';
  ctx.font = '16px PT Mono';
  ctx.fillText('Ура, вы победили!', x, 40);
  ctx.fillText('Список результатов:', x, 60);

  renderHistogram(ctx, names, times);
}

function renderHistogram(ctx, names, times) {
  var histogramHeight = 150; // px
  var barWidth = 40; // px
  var barMargin = 50; // px
  var myColor = 'rgba(255, 0, 0, 1)';
  var myName = 'Вы';

  var maxTime = -1;
  for (var i = 0; i < times.length; i++) {
    maxTime = maxTime < times[i] ? times[i] : maxTime;
  }

  var unit = histogramHeight / maxTime;
  for (i = 0; i < names.length; i++) {
    var barXPosition = x + i * (barWidth + barMargin);    
    var barYPosition = 235 - histogramHeight + (maxTime - times[i]) * unit;    
    var barHeight = times[i] * unit;

    ctx.fillStyle = names[i] === myName ? myColor : generateRandomColor();
    ctx.fillRect(barXPosition, barYPosition, barWidth, barHeight); 

    ctx.fillStyle = 'rgb(0, 0, 0)';
    ctx.fillText(names[i], barXPosition, 250);
    ctx.fillText(Math.round(times[i]), barXPosition, barYPosition - 5);
  }
}

function generateRandomColor() {
  var alpha = Math.random() * 0.8 + 0.2; // 0.2 is min value to avoid completely transparent bar
  return 'rgba(120, 120, 255, ' + alpha + ')';
}
