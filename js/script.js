// console.log("sa");
var videoArray = [];

// Crumb Locket
videoArray[0] = '<iframe id="kiri" width="350" height="200" src="https://www.youtube.com/embed/BqnG_Ei35JE?modestbranding=1&showinfo=0"></iframe>';
console.log(videoArray[0]);

/* <iframe id="kiri" width="350" height="200" src="https://www.youtube.com/embed/V5YOhcAof8I"></iframe> */

// LAN
videoArray[1] = '<iframe id="kiri" width="350" height="200" src="https://www.youtube.com/embed/CAWjdVqXd1I"></iframe>';

// Structure
videoArray[2] = '<iframe id="kiri" width="350" height="200" src="https://www.youtube.com/embed/GqrnxE6UwbQ"></iframe>';

// Still Corners - The trip
videoArray[3] = '<iframe id="kiri" width="350" height="200" src="https://www.youtube.com/embed/V5YOhcAof8I"></iframe>';

var x = 0;
var y = x-1;
if(y==-1){
    y=3;
}



// console.log(myFunction());

var kiri = videoArray[y];
var utama = videoArray[x];
var kanan = videoArray[x+1];

window.onload = function(){
    $('.venobox').venobox(); 
    // Code. . .

    // document.getElementById("video1").innerHTML = kiri;
    // $('#video1').html(kiri).fadeIn();
    // $('#videomain').html(utama).fadeIn();
    // $('#video3').html(kanan).fadeIn();

    // document.getElementById("videomain").innerHTML = utama;
    // document.getElementById("video3").innerHTML = kanan;
    // console.log(container);
    var container = document.getElementById('video');
    container.classList.add('animation');
    $("#ep1").css("background-color", "#000000");

    
}
$('#videomain')
.magnificPopup({
	  type:'inline',
	  midClick: true // Allow opening popup on middle mouse click. Always set it to true if you don't provide alternative source in href.
  })

function ep1(){
    x = 0;
    $("#ep2").css("background-color", "#C4C4C4");
    $("#ep3").css("background-color", "#C4C4C4");
    $("#ep4").css("background-color", "#C4C4C4");
    $("#ep5").css("background-color", "#C4C4C4");
    $("#ep1").css("background-color", "#000000");

    return x;
}
function ep2(){
    x = 1;
    $("#ep1").css("background-color", "#C4C4C4");
    $("#ep2").css("background-color", "#000000");
    $("#ep3").css("background-color", "#C4C4C4");
    $("#ep4").css("background-color", "#C4C4C4");
    $("#ep5").css("background-color", "#C4C4C4");

    return x;
}
function ep3(){
    x = 2;
    $("#ep2").css("background-color", "#C4C4C4");
    $("#ep3").css("background-color", "#000000");
    $("#ep4").css("background-color", "#C4C4C4");
    $("#ep5").css("background-color", "#C4C4C4");
    $("#ep1").css("background-color", "#C4C4C4");

    return x;
}
function ep4(){
    x = 3;
    $("#ep3").css("background-color", "#C4C4C4");
    $("#ep4").css("background-color", "#000000");
    $("#ep5").css("background-color", "#C4C4C4");
    $("#ep1").css("background-color", "#C4C4C4");
    $("#ep2").css("background-color", "#C4C4C4");

    return x;
}
function ep5(){
    x = 4;
    $("#ep4").css("background-color", "#C4C4C4");
    $("#ep5").css("background-color", "#000000");
    $("#ep1").css("background-color", "#C4C4C4");
    $("#ep2").css("background-color", "#C4C4C4");
    $("#ep3").css("background-color", "#C4C4C4");
    $("#ep4").css("background-color", "#C4C4C4");

    return x;
}

$("#right-arrow").click(function() {
    // alert("Image clicked");
    console.log(x);
});

function list(){
    if(x == 0){
        $('#kiri').fadeOut("slow", function(){
            var div = $('<img style="max-width:100%;max-height:100%;object-fit: cover;" id="kiri" src="assets/series/ep5fix.jpg">').hide();
            $(this).replaceWith(div);
            $('#kiri').fadeIn("slow");
        });
        $('#utama').fadeOut("slow", function(){
            var div = $('<img style="max-width:100%;max-height:100%;object-fit: cover;" id="utama" src="assets/series/ep1fix.jpg">').hide();
            $(this).replaceWith(div);
            $('#utama').fadeIn("slow");
        });
        $('#kanan').fadeOut("slow", function(){
            var div = $('<img style="max-width:100%;max-height:100%;" id="kanan" src="assets/series/ep2fix.jpg">').hide();
            $(this).replaceWith(div);
            $('#kanan').fadeIn("slow");
        });
        $('#textTitle').fadeOut("slow", function(){
            var text = $('<h1 id="textTitle">The Beauty of Langgahan : <b>Episode 1</b></h1>').hide();
            $("#textTitle").replaceWith(text);
            $('#textTitle').fadeIn("slow");
        });
        // $('#videomain').html(videoArray[1]).fadeIn();
        // $('#video3').html(videoArray[2]).fadeIn();
        // document.getElementById("video1").innerHTML = videoArray[0];
        // document.getElementById("videomain").innerHTML = videoArray[1];
        // document.getElementById("video3").innerHTML = videoArray[2];
        x=x+1;
        
    }else if(x == 1){
        $('#kiri').fadeOut("slow", function(){
            var div = $('<img style="max-width:100%;max-height:100%;object-fit: cover;" id="kiri" src="assets/series/ep1fix.jpg">').hide();
            $(this).replaceWith(div);
            $('#kiri').fadeIn("slow");
        });
        $('#utama').fadeOut("slow", function(){
            var div = $('<img style="max-width:100%;max-height:100%;object-fit: cover;" id="utama" src="assets/series/ep2fix.jpg">').hide();
            $(this).replaceWith(div);
            $('#utama').fadeIn("slow");
        });
        $('#kanan').fadeOut("slow", function(){
            var div = $('<img style="max-width:100%;max-height:100%;" id="kanan" src="assets/series/ep3fix.jpg">').hide();
            $(this).replaceWith(div);
            $('#kanan').fadeIn("slow");
        });
        $('#textTitle').fadeOut("slow", function(){
            var text = $('<h1 id="textTitle">The Beauty of Langgahan : <b>Episode 2</b></h1>').hide();
            $("#textTitle").replaceWith(text);
            $('#textTitle').fadeIn("slow");
        });
        x=x+1;
    
    }else if(x == 2){
        $('#kiri').fadeOut("slow", function(){
            var div = $('<img style="max-width:100%;max-height:100%;object-fit: cover;" id="kiri" src="assets/series/ep2fix.jpg">').hide();
            $(this).replaceWith(div);
            $('#kiri').fadeIn("slow");
        });
        $('#utama').fadeOut("slow", function(){
            var div = $('<img style="max-width:100%;max-height:100%;object-fit: cover;" id="utama" src="assets/series/ep3fix.jpg">').hide();
            $(this).replaceWith(div);
            $('#utama').fadeIn("slow");
        });
        $('#kanan').fadeOut("slow", function(){
            var div = $('<img style="max-width:100%;max-height:100%;" id="kanan" src="assets/series/ep4fix.jpg">').hide();
            $(this).replaceWith(div);
            $('#kanan').fadeIn("slow");
        });
        $('#textTitle').fadeOut("slow", function(){
            var text = $('<h1 id="textTitle">The Beauty of Langgahan : <b>Episode 3</b></h1>').hide();
            $("#textTitle").replaceWith(text);
            $('#textTitle').fadeIn("slow");
        });
        x=x+1;
    }else if(x == 3){
        $('#kiri').fadeOut("slow", function(){
            var div = $('<img style="max-width:100%;max-height:100%;object-fit: cover;" id="kiri" src="assets/series/ep3fix.jpg">').hide();
            $(this).replaceWith(div);
            $('#kiri').fadeIn("slow");
        });
        $('#utama').fadeOut("slow", function(){
            var div = $('<img style="max-width:100%;max-height:100%;object-fit: cover;" id="utama" src="assets/series/ep4fix.jpg">').hide();
            $(this).replaceWith(div);
            $('#utama').fadeIn("slow");
        });
        $('#kanan').fadeOut("slow", function(){
            var div = $('<img style="max-width:100%;max-height:100%;" id="kanan" src="assets/series/ep5fix.jpg">').hide();
            $(this).replaceWith(div);
            $('#kanan').fadeIn("slow");
        });
        $('#textTitle').fadeOut("slow", function(){
            var text = $('<h1 id="textTitle">The Beauty of Langgahan : <b>Episode 4</b></h1>').hide();
            $("#textTitle").replaceWith(text);
            $('#textTitle').fadeIn("slow");
        });
        // x =0;
        x=x+1;
    }
    else if(x == 4){
        $('#kiri').fadeOut("slow", function(){
            var div = $('<img style="max-width:100%;max-height:100%;object-fit: cover;" id="kiri" src="assets/series/ep4fix.jpg">').hide();
            $(this).replaceWith(div);
            $('#kiri').fadeIn("slow");
        });
        $('#utama').fadeOut("slow", function(){
            var div = $('<img style="max-width:100%;max-height:100%;object-fit: cover;" id="utama" src="assets/series/ep5fix.jpg">').hide();
            $(this).replaceWith(div);
            $('#utama').fadeIn("slow");
        });
        $('#kanan').fadeOut("slow", function(){
            var div = $('<img style="max-width:100%;max-height:100%;" id="kanan" src="assets/series/ep1fix.jpg">').hide();
            $(this).replaceWith(div);
            $('#kanan').fadeIn("slow");
        });
        $('#textTitle').fadeOut("slow", function(){
            var text = $('<h1 id="textTitle">The Beauty of Langgahan : <b>Episode 5</b></h1>').hide();
            $("#textTitle").replaceWith(text);
            $('#textTitle').fadeIn("slow");
        });
        x =0;
        // x++;
        
    }
}






// function myFunction(){
//     // kiri = videoArray[y];
    
//     if(x == 0){
//         document.getElementById("video1").innerHTML = videoArray[0];
//         document.getElementById("videomain").innerHTML = videoArray[1];
//         document.getElementById("video3").innerHTML = videoArray[2];
//         x=x+1;
//         setTimeout(function(){
//             container.classList.remove('animation')
//         },100)

//     }else if(x == 1){
//         document.getElementById("video1").innerHTML = videoArray[1];
//         document.getElementById("videomain").innerHTML = videoArray[2];
//         document.getElementById("video3").innerHTML = videoArray[3];
//         x=x+1;
//         setTimeout(function(){
//             container.classList.remove('animation')
//         },100)

//     }else if(x == 2){
//         document.getElementById("video1").innerHTML = videoArray[2];
//         document.getElementById("videomain").innerHTML = videoArray[3];
//         document.getElementById("video3").innerHTML = videoArray[0];
//         x=x+1;
//         setTimeout(function(){
//             container.classList.remove('animation')
//         },100)
        
//     }else if(x == 3){
//         document.getElementById("video1").innerHTML = videoArray[3];
//         document.getElementById("videomain").innerHTML = videoArray[0];
//         document.getElementById("video3").innerHTML = videoArray[1];
//         x =0;
//         setTimeout(function(){
//             container.classList.remove('animation')
//         },100)
//         // x++;
        
//     }

//     console.log(x);
//     return x;
// }