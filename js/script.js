// console.log("sa");
let review = [];
var nama = [];
var foto = [];
var foto2 = [];
var foto3 = [];

review[0] = '<p id="reviewr" class="reviewer-impression">Wisata alam di Bali, air terjun Pelisan di Desa Langgahan yang belum banyak orang tahu.</p>';
review[1] = '<p id="reviewr" class="reviewer-impression">Air Terjun Pelisan memiliki panorama yang indah, dengan  beberapa pohon jeruk yang bisa ditemui, dan air nya yang jernih.</p>';
review[2] = '<p id="reviewr" class="reviewer-impression">Salah satu surga tersembunyi di Bali, yang menyimpan banyak keindahan dan tradisi.</p>';
review[3] = '<p id="reviewr" class="reviewer-impression">Destinasi wisata dengan keunikan yang memanjakan mata. Pemandangan yang indah nan asri sangat menarik untuk dinikmati.</p>';
review[4] = '<p id="reviewr" class="reviewer-impression">Tempat yang tenang dan damai, sangat cocok untuk para penikmat  kesunyian.</p>';

nama[0] = '<p id="nama" class="reviewer-name"> <u>Vynna Valencia</u></p>';
nama[1] = '<p id="nama" class="reviewer-name"> <u>May Danawati</u></p>';
nama[2] = '<p id="nama" class="reviewer-name"> <u>Ari Laksmi</u></p>';
nama[3] = '<p id="nama" class="reviewer-name"> <u>Bulan Trisna</u></p>';
nama[4] = '<p id="nama" class="reviewer-name"> <u>Andy Prawira</u></p>';

var videoArray = [];

// Crumb Locket
videoArray[0] = '<iframe id="kiri" width="350" height="200" src="https://www.youtube.com/embed/BqnG_Ei35JE?modestbranding=1&showinfo=0"></iframe>';
// console.log(review[0]);

/* <iframe id="kiri" width="350" height="200" src="https://www.youtube.com/embed/V5YOhcAof8I"></iframe> */

// LAN
videoArray[1] = '<iframe id="kiri" width="350" height="200" src="https://www.youtube.com/embed/CAWjdVqXd1I"></iframe>';

// Structure
videoArray[2] = '<iframe id="kiri" width="350" height="200" src="https://www.youtube.com/embed/GqrnxE6UwbQ"></iframe>';

// Still Corners - The trip
videoArray[3] = '<iframe id="kiri" width="350" height="200" src="https://www.youtube.com/embed/V5YOhcAof8I"></iframe>';

var x = 0;
var y = 0;
// var y = x-1;
// if(y==-1){
//     y=3;
// }



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
    $("#r1").css("background-color", "#000000");
    
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

function next(){
    // var check = "nxt";
    if(x==4){
        x=-1;
    }
    if(x == -1){
        $("#ep2").css("background-color", "#C4C4C4");
        $("#ep3").css("background-color", "#C4C4C4");
        $("#ep4").css("background-color", "#C4C4C4");
        $("#ep5").css("background-color", "#C4C4C4");
        $("#ep1").css("background-color", "#000000");
    }
    else if(x == 0){
        $("#ep1").css("background-color", "#C4C4C4");
        $("#ep2").css("background-color", "#000000");
        $("#ep3").css("background-color", "#C4C4C4");
        $("#ep4").css("background-color", "#C4C4C4");
        $("#ep5").css("background-color", "#C4C4C4");
    }
    else if(x == 1){
        $("#ep2").css("background-color", "#C4C4C4");
        $("#ep3").css("background-color", "#000000");
        $("#ep4").css("background-color", "#C4C4C4");
        $("#ep5").css("background-color", "#C4C4C4");
        $("#ep1").css("background-color", "#C4C4C4");
    }
    else if(x == 2){
        $("#ep3").css("background-color", "#C4C4C4");
        $("#ep4").css("background-color", "#000000");
        $("#ep5").css("background-color", "#C4C4C4");
        $("#ep1").css("background-color", "#C4C4C4");
        $("#ep2").css("background-color", "#C4C4C4");
    }
    else if(x == 3){
        $("#ep4").css("background-color", "#C4C4C4");
        $("#ep5").css("background-color", "#000000");
        $("#ep1").css("background-color", "#C4C4C4");
        $("#ep2").css("background-color", "#C4C4C4");
        $("#ep3").css("background-color", "#C4C4C4");
        $("#ep4").css("background-color", "#C4C4C4");
    }
    x++;
    console.log(x);
    return x;
}

function prev(){
    var check = "prv";

    // x=3
    if(x==0){
        x=5;
    }
    if(x == 1){
        $("#ep2").css("background-color", "#C4C4C4");
        $("#ep3").css("background-color", "#C4C4C4");
        $("#ep4").css("background-color", "#C4C4C4");
        $("#ep5").css("background-color", "#C4C4C4");
        $("#ep1").css("background-color", "#000000");
    }
    else if(x == 2){
        $("#ep1").css("background-color", "#C4C4C4");
        $("#ep2").css("background-color", "#000000");
        $("#ep3").css("background-color", "#C4C4C4");
        $("#ep4").css("background-color", "#C4C4C4");
        $("#ep5").css("background-color", "#C4C4C4");
    }
    else if(x == 3){
        $("#ep2").css("background-color", "#C4C4C4");
        $("#ep3").css("background-color", "#000000");
        $("#ep4").css("background-color", "#C4C4C4");
        $("#ep5").css("background-color", "#C4C4C4");
        $("#ep1").css("background-color", "#C4C4C4");
    }
    else if(x == 4){
        $("#ep3").css("background-color", "#C4C4C4");
        $("#ep4").css("background-color", "#000000");
        $("#ep5").css("background-color", "#C4C4C4");
        $("#ep1").css("background-color", "#C4C4C4");
        $("#ep2").css("background-color", "#C4C4C4");
    }
    else if(x == 5){
        $("#ep4").css("background-color", "#C4C4C4");
        $("#ep5").css("background-color", "#000000");
        $("#ep1").css("background-color", "#C4C4C4");
        $("#ep2").css("background-color", "#C4C4C4");
        $("#ep3").css("background-color", "#C4C4C4");
        $("#ep4").css("background-color", "#C4C4C4");
    }
    --x;
    console.log(x);
    return x;
}

$("#right-arrow").click(function() {
    // alert("Image clicked");
    console.log(x);
});

function list(){
    if(x == 0){
        $('#kiri').fadeOut("slow", function(){
            var div = $('<img style="max-width:100%;max-height:100%;object-fit: cover;" id="kiri" src="assets/seriesfix/Episode5.png"">').hide();
            $(this).replaceWith(div);
            $('#kiri').fadeIn("slow");
        });
        $('#utama').fadeOut("slow", function(){
            var div = $('<img style="max-width:100%;max-height:100%;object-fit: cover;" id="utama" src="assets/seriesfix/Episode1.png">').hide();
            $(this).replaceWith(div);
            $('#utama').fadeIn("slow");
        });
        $('#kanan').fadeOut("slow", function(){
            var div = $('<img style="max-width:100%;max-height:100%;" id="kanan" src="assets/seriesfix/Episode2.png">').hide();
            $(this).replaceWith(div);
            $('#kanan').fadeIn("slow");
        });
        $('#textTitle').fadeOut("slow", function(){
            var text = $('<h1 id="textTitle">The Beauty of Langgahan : <b>Episode 1</b></h1>').hide();
            $("#textTitle").replaceWith(text);
            $('#textTitle').fadeIn("slow");
        });
        $("#ytlink").attr("href", "https://youtu.be/1knJkrIm3P8");
        // $('#videomain').html(videoArray[1]).fadeIn();
        // $('#video3').html(videoArray[2]).fadeIn();
        // document.getElementById("video1").innerHTML = videoArray[0];
        // document.getElementById("videomain").innerHTML = videoArray[1];
        // document.getElementById("video3").innerHTML = videoArray[2];
        // x=x+1;
        // x=x+1;

        
    }else if(x == 1){
        $('#kiri').fadeOut("slow", function(){
            var div = $('<img style="max-width:100%;max-height:100%;object-fit: cover;" id="kiri" src="assets/seriesfix/Episode1.png">').hide();
            $(this).replaceWith(div);
            $('#kiri').fadeIn("slow");
        });
        $('#utama').fadeOut("slow", function(){
            var div = $('<img style="max-width:100%;max-height:100%;object-fit: cover;" id="utama" src="assets/seriesfix/Episode2.png">').hide();
            $(this).replaceWith(div);
            $('#utama').fadeIn("slow");
        });
        $('#kanan').fadeOut("slow", function(){
            var div = $('<img style="max-width:100%;max-height:100%;" id="kanan" src="assets/seriesfix/Episode3.png">').hide();
            $(this).replaceWith(div);
            $('#kanan').fadeIn("slow");
        });
        $('#textTitle').fadeOut("slow", function(){
            var text = $('<h1 id="textTitle">The Beauty of Langgahan : <b>Episode 2</b></h1>').hide();
            $("#textTitle").replaceWith(text);
            $('#textTitle').fadeIn("slow");
        });
        $("#ytlink").attr("href", "https://youtu.be/hHpOTO7p66w");
        // x=x+1;
    
    }else if(x == 2){
        $('#kiri').fadeOut("slow", function(){
            var div = $('<img style="max-width:100%;max-height:100%;object-fit: cover;" id="kiri" src="assets/seriesfix/Episode2.png">').hide();
            $(this).replaceWith(div);
            $('#kiri').fadeIn("slow");
        });
        $('#utama').fadeOut("slow", function(){
            var div = $('<img style="max-width:100%;max-height:100%;object-fit: cover;" id="utama" src="assets/seriesfix/Episode3.png">').hide();
            $(this).replaceWith(div);
            $('#utama').fadeIn("slow");
        });
        $('#kanan').fadeOut("slow", function(){
            var div = $('<img style="max-width:100%;max-height:100%;" id="kanan" src="assets/seriesfix/Episode4.png">').hide();
            $(this).replaceWith(div);
            $('#kanan').fadeIn("slow");
        });
        $('#textTitle').fadeOut("slow", function(){
            var text = $('<h1 id="textTitle">The Beauty of Langgahan : <b>Episode 3</b></h1>').hide();
            $("#textTitle").replaceWith(text);
            $('#textTitle').fadeIn("slow");
        });
        $("#ytlink").attr("href", "https://youtu.be/9wcOqpAmeMY");

        
        // x=x+1;
    }else if(x == 3){
        $('#kiri').fadeOut("slow", function(){
            var div = $('<img style="max-width:100%;max-height:100%;object-fit: cover;" id="kiri" src="assets/seriesfix/Episode3.png">').hide();
            $(this).replaceWith(div);
            $('#kiri').fadeIn("slow");
        });
        $('#utama').fadeOut("slow", function(){
            var div = $('<img style="max-width:100%;max-height:100%;object-fit: cover;" id="utama" src="assets/seriesfix/Episode4.png">').hide();
            $(this).replaceWith(div);
            $('#utama').fadeIn("slow");
        });
        $('#kanan').fadeOut("slow", function(){
            var div = $('<img style="max-width:100%;max-height:100%;" id="kanan" src="assets/seriesfix/Episode5.png">').hide();
            $(this).replaceWith(div);
            $('#kanan').fadeIn("slow");
        });
        $('#textTitle').fadeOut("slow", function(){
            var text = $('<h1 id="textTitle">The Beauty of Langgahan : <b>Episode 4</b></h1>').hide();
            $("#textTitle").replaceWith(text);
            $('#textTitle').fadeIn("slow");
        });
        $("#ytlink").attr("href", "https://youtu.be/PuQf76MWu00");

        
        // x =0;
        // x=x+1;
    }
    else if(x == 4){
        $('#kiri').fadeOut("slow", function(){
            var div = $('<img style="max-width:100%;max-height:100%;object-fit: cover;" id="kiri" src="assets/seriesfix/Episode4.png">').hide();
            $(this).replaceWith(div);
            $('#kiri').fadeIn("slow");
        });
        $('#utama').fadeOut("slow", function(){
            var div = $('<img style="max-width:100%;max-height:100%;object-fit: cover;" id="utama" src="assets/seriesfix/Episode5.png">').hide();
            $(this).replaceWith(div);
            $('#utama').fadeIn("slow");
        });
        $('#kanan').fadeOut("slow", function(){
            var div = $('<img style="max-width:100%;max-height:100%;" id="kanan" src="assets/seriesfix/Episode1.png">').hide();
            $(this).replaceWith(div);
            $('#kanan').fadeIn("slow");
        });
        $('#textTitle').fadeOut("slow", function(){
            var text = $('<h1 id="textTitle">The Beauty of Langgahan : <b>Episode 5</b></h1>').hide();
            $("#textTitle").replaceWith(text);
            $('#textTitle').fadeIn("slow");
        });
        $("#ytlink").attr("href", "https://youtu.be/5qUAcu7WxNc");

        // x =0;
        // x++;
        
    }
}

y = 0;

function r1(){
    y = 0;
    $("#r2").css("background-color", "#C4C4C4");
    $("#r3").css("background-color", "#C4C4C4");
    $("#r4").css("background-color", "#C4C4C4");
    $("#r5").css("background-color", "#C4C4C4");
    $("#r1").css("background-color", "#000000");

    return y;
}
function r2(){
    y = 1;
    $("#r1").css("background-color", "#C4C4C4");
    $("#r2").css("background-color", "#000000");
    $("#r3").css("background-color", "#C4C4C4");
    $("#r4").css("background-color", "#C4C4C4");
    $("#r5").css("background-color", "#C4C4C4");

    return y;
}
function r3(){
    y = 2;
    $("#r2").css("background-color", "#C4C4C4");
    $("#r3").css("background-color", "#000000");
    $("#r4").css("background-color", "#C4C4C4");
    $("#r5").css("background-color", "#C4C4C4");
    $("#r1").css("background-color", "#C4C4C4");

    return y;
}
function r4(){
    y = 3;
    $("#r3").css("background-color", "#C4C4C4");
    $("#r4").css("background-color", "#000000");
    $("#r5").css("background-color", "#C4C4C4");
    $("#r1").css("background-color", "#C4C4C4");
    $("#r2").css("background-color", "#C4C4C4");

    return y;
}
function r5(){
    y = 4;
    $("#r4").css("background-color", "#C4C4C4");
    $("#r5").css("background-color", "#000000");
    $("#r1").css("background-color", "#C4C4C4");
    $("#r2").css("background-color", "#C4C4C4");
    $("#r3").css("background-color", "#C4C4C4");
    $("#r4").css("background-color", "#C4C4C4");

    return y;
}

function nextr(){
    // var check = "nxt";
    if(y==4){
        y=-1;
    }
    if(y == -1){
        $("#r2").css("background-color", "#C4C4C4");
        $("#r3").css("background-color", "#C4C4C4");
        $("#r4").css("background-color", "#C4C4C4");
        $("#r5").css("background-color", "#C4C4C4");
        $("#r1").css("background-color", "#000000");
    }
    else if(y == 0){
        $("#r1").css("background-color", "#C4C4C4");
        $("#r2").css("background-color", "#000000");
        $("#r3").css("background-color", "#C4C4C4");
        $("#r4").css("background-color", "#C4C4C4");
        $("#r5").css("background-color", "#C4C4C4");
    }
    else if(y == 1){
        $("#r2").css("background-color", "#C4C4C4");
        $("#r3").css("background-color", "#000000");
        $("#r4").css("background-color", "#C4C4C4");
        $("#r5").css("background-color", "#C4C4C4");
        $("#r1").css("background-color", "#C4C4C4");
    }
    else if(y == 2){
        $("#r3").css("background-color", "#C4C4C4");
        $("#r4").css("background-color", "#000000");
        $("#r5").css("background-color", "#C4C4C4");
        $("#r1").css("background-color", "#C4C4C4");
        $("#r2").css("background-color", "#C4C4C4");
    }
    else if(y == 3){
        $("#r5").css("background-color", "#000000");
        $("#r1").css("background-color", "#C4C4C4");
        $("#r2").css("background-color", "#C4C4C4");
        $("#r3").css("background-color", "#C4C4C4");
        $("#r4").css("background-color", "#C4C4C4");
    }
    y++;
    console.log(y);
    return y;
}

function prevr(){
    // var check = "prv";

    // x=3
    if(y==0){
        y=5;
    }
    if(y == 1){
        $("#r2").css("background-color", "#C4C4C4");
        $("#r3").css("background-color", "#C4C4C4");
        $("#r4").css("background-color", "#C4C4C4");
        $("#r5").css("background-color", "#C4C4C4");
        $("#r1").css("background-color", "#000000");
    }
    else if(y == 2){
        $("#r1").css("background-color", "#C4C4C4");
        $("#r2").css("background-color", "#000000");
        $("#r3").css("background-color", "#C4C4C4");
        $("#r4").css("background-color", "#C4C4C4");
        $("#r5").css("background-color", "#C4C4C4");
    }
    else if(y == 3){
        $("#r2").css("background-color", "#C4C4C4");
        $("#r3").css("background-color", "#000000");
        $("#r4").css("background-color", "#C4C4C4");
        $("#r5").css("background-color", "#C4C4C4");
        $("#r1").css("background-color", "#C4C4C4");
    }
    else if(y == 4){
        $("#r3").css("background-color", "#C4C4C4");
        $("#r4").css("background-color", "#000000");
        $("#r5").css("background-color", "#C4C4C4");
        $("#r1").css("background-color", "#C4C4C4");
        $("#r2").css("background-color", "#C4C4C4");
    }
    else if(y == 5){
        $("#r4").css("background-color", "#C4C4C4");
        $("#r5").css("background-color", "#000000");
        $("#r1").css("background-color", "#C4C4C4");
        $("#r2").css("background-color", "#C4C4C4");
        $("#r3").css("background-color", "#C4C4C4");
        $("#r4").css("background-color", "#C4C4C4");
    }
    --y;
    console.log(y);
    return y;
}


function listReview(){
    if(y == 0){
        $('#kirir').fadeOut("slow", function(){
            var div =  $('<img id="kirir" src="assets/review/andi.png">').hide();
            $(this).replaceWith(div);
            $('#kirir').fadeIn("slow");
        });
        $('#utamar').fadeOut("slow", function(){
            var div = $('<img id="utamar" src="assets/review/vvvv.jpg">').hide();
            $(this).replaceWith(div);
            $('#utamar').fadeIn("slow");
        });
        $('#kananr').fadeOut("slow", function(){
            var div = $('<img id="kananr" src="assets/review/maysa.jpg">').hide();
            $(this).replaceWith(div);
            $('#kananr').fadeIn("slow");
        });
        $('#reviewr').fadeOut("slow", function(){
            var reviews = $(review[0]).hide();
            $("#reviewr").replaceWith(reviews);
            $('#reviewr').fadeIn("slow");
        });
        $('#nama').fadeOut("slow", function(){
            var text = $(nama[0]).hide();
            $("#nama").replaceWith(text);
            $('#nama').fadeIn("slow");
        });
        // x =x+1;
    }else if(y == 1){
        $('#kirir').fadeOut("slow", function(){
            var div =  $('<img id="kirir" src="assets/review/vvvv.jpg">').hide();
            $(this).replaceWith(div);
            $('#kirir').fadeIn("slow");
        });
        $('#utamar').fadeOut("slow", function(){
            var div = $('<img id="utamar" src="assets/review/maysa.jpg">').hide();
            $(this).replaceWith(div);
            $('#utamar').fadeIn("slow");
        });
        $('#kananr').fadeOut("slow", function(){
            var div = $('<img id="kananr" src="assets/review/ari.jpg">').hide();
            $(this).replaceWith(div);
            $('#kananr').fadeIn("slow");
        });
        $('#reviewr').fadeOut("slow", function(){
            var reviews = $(review[1]).hide();
            $("#reviewr").replaceWith(reviews);
            $('#reviewr').fadeIn("slow");
        });
        $('#nama').fadeOut("slow", function(){
            var text = $(nama[1]).hide();
            $("#nama").replaceWith(text);
            $('#nama').fadeIn("slow");
        });
        // x =x+1;
    }else if(y == 2){
        $('#kirir').fadeOut("slow", function(){
            var div =  $('<img id="kirir" src="assets/review/maysa.jpg">').hide();
            $(this).replaceWith(div);
            $('#kirir').fadeIn("slow");
        });
        $('#utamar').fadeOut("slow", function(){
            var div = $('<img id="utamar" src="assets/review/ari.jpg">').hide();
            $(this).replaceWith(div);
            $('#utamar').fadeIn("slow");
        });
        $('#kananr').fadeOut("slow", function(){
            var div = $('<img id="kananr" src="assets/review/bulan.jpg">').hide();
            $(this).replaceWith(div);
            $('#kananr').fadeIn("slow");
        });
        $('#reviewr').fadeOut("slow", function(){
            var reviews = $(review[2]).hide();
            $("#reviewr").replaceWith(reviews);
            $('#reviewr').fadeIn("slow");
        });
        $('#nama').fadeOut("slow", function(){
            var text = $(nama[2]).hide();
            $("#nama").replaceWith(text);
            $('#nama').fadeIn("slow");
        });
        // x =x+1;
    }else if(y == 3){
        $('#kirir').fadeOut("slow", function(){
            var div =  $('<img id="kirir" src="assets/review/ari.jpg">').hide();
            $(this).replaceWith(div);
            $('#kirir').fadeIn("slow");
        });
        $('#utamar').fadeOut("slow", function(){
            var div = $('<img id="utamar" src="assets/review/bulan.jpg">').hide();
            $(this).replaceWith(div);
            $('#utamar').fadeIn("slow");
        });
        $('#kananr').fadeOut("slow", function(){
            var div = $('<img id="kananr" src="assets/review/andi.png">').hide();
            $(this).replaceWith(div);
            $('#kananr').fadeIn("slow");
        });
        $('#reviewr').fadeOut("slow", function(){
            var reviews = $(review[3]).hide();
            $("#reviewr").replaceWith(reviews);
            $('#reviewr').fadeIn("slow");
        });
        $('#nama').fadeOut("slow", function(){
            var text = $(nama[3]).hide();
            $("#nama").replaceWith(text);
            $('#nama').fadeIn("slow");
        });
        // x =x+1;
    }else if(y == 4){
        $('#kirir').fadeOut("slow", function(){
            var div =  $('<img id="kirir" src="assets/review/bulan.jpg">').hide();
            $(this).replaceWith(div);
            $('#kirir').fadeIn("slow");
        });
        $('#utamar').fadeOut("slow", function(){
            var div = $('<img id="utamar" src="assets/review/andi.png">').hide();
            $(this).replaceWith(div);
            $('#utamar').fadeIn("slow");
        });
        $('#kananr').fadeOut("slow", function(){
            var div = $('<img id="kananr" src="assets/review/vvvv.jpg">').hide();
            $(this).replaceWith(div);
            $('#kananr').fadeIn("slow");
        });
        $('#reviewr').fadeOut("slow", function(){
            var reviews = $(review[4]).hide();
            $("#reviewr").replaceWith(reviews);
            $('#reviewr').fadeIn("slow");
        });
        $('#nama').fadeOut("slow", function(){
            var text = $(nama[4]).hide();
            $("#nama").replaceWith(text);
            $('#nama').fadeIn("slow");
        });
        // x =x+1;
    }
}