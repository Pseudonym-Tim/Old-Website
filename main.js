function getRandomSplashMessage()
{
  var quotes =
  [
    'Luigi Shrek Lantern!',
    'Gordon Ramsay, the Spiderman of worlds!',
    'Kurva Vonat!',
    'FÜGGÖNYÖK A HOTELBEN!',
    'Still stuck in Elwood&#39s basement!',
    'PAPER STATE NEGATIVE!',
    'Hold my bear!',
    'Chronic aids syndrome!',
    'Unsettling Ramen!',
    'When there&#39s a rave going on next door, but you&#39re trapped in the microwave...',
    'The human equivalent of the Windows 3.1 hot dog stand color scheme!',
    'No, STOP! My brain can barely form coherent thoughts already!',
    'The world is made out of isosceles!',
    'I see die in your future...',
    'Fill your eyes with selective soap!',
    'Free tortillas!',
    'Yummy! Asbestos watercolors!',
    'Making bathub meth!',
    "ARDUOUS DUEL, PERMANENT HUMAN!"
  ];

  return quotes[Math.floor((Math.random() * quotes.length))];
}

document.getElementById("splash-text").innerHTML = getRandomSplashMessage();

function playAudio(url) 
{
    new Audio(url).play();
}

function audioPlayer()
{
    var currentSong = 0;

    $("#audioPlayer")[0].src = $("#playlist li a")[0];

    $("#playlist li a").click(function(e)
    {
        e.preventDefault(); 
        $("#audioPlayer")[0].src = this;
        $("#audioPlayer")[0].play();
        $("#playlist li").removeClass("current-song");
        currentSong = $(this).parent().index();
        $(this).parent().addClass("current-song");
    });
    
    $("#audioPlayer")[0].addEventListener("ended", function()
    {
        currentSong++;

        if(currentSong == $("#playlist li a").length) { currentSong = 0; }

        $("#playlist li").removeClass("current-song");
        $("#playlist li:eq("+currentSong+")").addClass("current-song");
        $("#audioPlayer")[0].src = $("#playlist li a")[currentSong].href;
        $("#audioPlayer")[0].play();
    });
}