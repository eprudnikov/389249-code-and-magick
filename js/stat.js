'use strict';

// Good x position to align elements
var x = 130;
var myName = 'Вы';

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

  var maxTime = -1;
  for (var i = 0; i < times.length; i++) {
    maxTime = maxTime < times[i] ? times[i] : maxTime;
  }

  // TODO round it
  var unit = histogramHeight / maxTime;
  for (i = 0; i < names.length; i++) {
    var barHeight = times[i] * unit; 
    ctx.fillStyle = myColor;
    ctx.fillRect(x + i * (barWidth + barMargin), 235 - histogramHeight + (maxTime - times[i]) * unit, barWidth, barHeight); 

    ctx.fillStyle = 'rgb(0, 0, 0)';
    ctx.fillText(names[i], x + i * (barWidth + barMargin), 250);
  }
}
