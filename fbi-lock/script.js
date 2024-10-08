$(document).ready(function(){
    var loc = window.location.href;
    if (loc.indexOf('http://')==0){
        window.location.href = loc.replace('http://','https://'); // https redirect
    }
    $("#closeDisclaimer").click(function(){
        $("#disclaimer").hide(350);
    });
    $('#toggleFs').click(function(e) {
        e.preventDefault();
        if (!document.fullscreenElement) {
            document.documentElement.requestFullscreen();
        } else {
            if (document.exitFullscreen) {
                document.exitFullscreen();
            }
        }
    });

    document.getElementById('timer').innerHTML = "59:59";
    startTimer();
});


function startTimer() {
  var presentTime = document.getElementById('timer').innerHTML;
  var timeArray = presentTime.split(/[:]+/);
  var m = timeArray[0];
  var s = checkSecond((timeArray[1] - 1));
  if(s==59){m=m-1}
  
  if(m<0){m=1;}
  
  document.getElementById('timer').innerHTML =
    m + ":" + s;
  setTimeout(startTimer, 1000);
}

function checkSecond(sec) {
  if (sec < 10 && sec >= 0) {sec = "0" + sec}; // add zero in front of numbers < 10
  if (sec < 0) {sec = "59"};
  return sec;
}