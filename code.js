var firstHeight = $('#background').height();

height *= 2;
width *= 2;

scalechange = (actualHeight / firstHeight) - 1;
offsetX = -(coordX * scalechange);
offsetY = -(coordY * scalechange);

$("#background").css('top', offsetY + 'px');
$("#background").css('left', offsetX + 'px');