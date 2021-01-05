var DateTime = luxon.DateTime;
var now = DateTime.local();

var timeYYC = now.setZone('America/Edmonton').toLocaleString(DateTime.TIME_24_SIMPLE);

var timeSEA = now.setZone('America/Los_Angeles').toLocaleString(DateTime.TIME_24_SIMPLE);

var timeNYC = now.setZone('America/New_York').toLocaleString(DateTime.TIME_24_SIMPLE);

var timeLON = now.setZone('Europe/London').toLocaleString(DateTime.TIME_24_SIMPLE);

var timeMEL = now.setZone('Australia/Melbourne').toLocaleString(DateTime.TIME_24_SIMPLE);

var nowDate = now.setLocale('en').toLocaleString(DateTime.DATE_HUGE);

$('#cal h1').html(nowDate);

$('#YYC h1').html(timeYYC);
$('#SEA h1').html(timeSEA);
$('#NYC h1').html(timeNYC);
$('#LON h1').html(timeLON);
$('#MEL h1').html(timeMEL);
