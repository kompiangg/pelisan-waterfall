function update() {
  let option_element = document.getElementById('id');
  let selected = option_element.options[option_element.selectedIndex];
  return selected.value;
}

function updateContent() {
  let will_translate = document.querySelectorAll('.will-translate');
  let will_translate_navbar = document.querySelectorAll('.will-translate-navbar');
  let will_translate_location = document.querySelectorAll('.will-translate-location');
  let will_translate_360 = document.querySelectorAll('.will-translate-360');
  if (update() == "ENG") {
    document.querySelector('html').setAttribute("lang", "en");
    will_translate_navbar[0].outerHTML = '<li class="nav menu will-translate-navbar" id="active"><a href="#home">Home</a></li>';
    will_translate_navbar[1].outerHTML = '<li class="nav menu will-translate-navbar"><a href="#gallery">Gallery</a></li>';
    will_translate_navbar[2].outerHTML = '<li class="nav menu will-translate-navbar"><a href="#location">Location</a></li>';
    will_translate_navbar[3].outerHTML = '<li class="nav menu will-translate-navbar"><a href="#contact-us">Contact Us</a></li>';
    
    will_translate[0].outerHTML = '<p class="will-translate">The island of Bali is not always about the beach. Many hidden paradises are waiting to be discovered. One of them is the Pelisan Waterfall, which is located in the Kintamani sub-district of Bangli. This hidden paradise, waiting to be explored </p>';
    will_translate[1].outerHTML = '<h2 class="will-translate">Entry Fee</h2>';
    will_translate[2].outerHTML = '<h2 class="will-translate"><strong>About</strong><br>Pelisan Waterfall</h2>';
    will_translate[3].outerHTML = '<p style="padding-top: 10px;" class="will-translate">Pelisan Waterfall is a waterfall located on Banjar Langgahan Kangin, Langgahan village, Kintamani sub-district of Bangli, Bali. This waterfall does not plunge directly to the ground. However, it flows on a sloping slope in the river valley. The thing that makes this waterfall more beautiful, because the springs appear at several points. Furthermore, the environment is lush, very ideal for those of you who are looking for silence and peace because of its hidden location and away from the noise of the machine.</p>';
    will_translate[4].outerHTML = '<p class="will-translate">You can melukat at the Pelisan waterfall, because there is a special sacred area. Melukat is one of the cleansing ceremonies in Bali. The melukat ceremony is still carried out and has become a tradition for Hindus in Bali which is usually held in certain water sources.<br><br><strong>Prohibition</strong><br>However, there is a prohibition when you want to melukat. People who are grieving because one of their family died and is menstruating are not allowed to melukat.</p>';
    will_translate[5].outerHTML = '<h2 class="will-translate">Gallery</h2>';
    will_translate[6].outerHTML = '<button class="will-translate">View more</button>';
    will_translate[7].outerHTML = '<h2 class="will-translate">360<sup>o</sup> View</h2>';
    will_translate[8].outerHTML = '<p class="will-translate">Feels virtual tour experience by click the mark on map</p>';
    will_translate[9].outerHTML = '<h2 class="will-translate">Location</h2>';
    will_translate[10].outerHTML = '<button class="will-translate">Visit Us On Gmaps</button>';
    will_translate[11].outerHTML = '<h2 class="will-translate">Tourist Review</h2>';
    will_translate[12].outerHTML = '<p class="follow-us will-translate"> <strong>Follow Us On</strong> </p>';
    will_translate[13].outerHTML = '<h6 class="will-translate"> <strong>Featured Information</strong> </h6>';
    will_translate[14].outerHTML = '<a class="will-translate" href="#home">Home</a>';
    will_translate[15].outerHTML = '<a class="will-translate" href="#gallery">Gallery</a>';
    will_translate[16].outerHTML = '<a class="will-translate" href="#series">Pelisan The Series</a>';
    will_translate[17].outerHTML = '<a class="will-translate" href="#about-us">About Us</a>';
    will_translate[18].outerHTML = '<h6 class="will-translate"><strong>Langgahan Village Office</strong></h6>';
    will_translate[19].outerHTML = '<h6 id="contact-us" class="will-translate"><strong>Contact Us</strong></h6>';
    will_translate[20].outerHTML = '<p class="will-translate"> <strong>Phone Number</strong>:</p>';

    will_translate_location[0].outerHTML = '<p class="will-translate-location"> <span>Pelisan Waterfall</span> <br>Langgahan Village, Kintamani, Bangli Regency, Bali</p>';

    will_translate_360[0].outerHTML = '<li class="pinned will-translate-360"> <a href="https://app.lapentor.com/sphere/virtual-tour-1634218795" target="blank"> 1) Sign of Assisted Village </a> </li>';
    will_translate_360[1].outerHTML = '<li class="pinned will-translate-360"><a href="https://app.lapentor.com/sphere/virtual-tour-1634218795?scene=61669658739f857e10367484" target="blank">2) Three-way junction to Langgahan Village</a></li>';
    will_translate_360[2].outerHTML = '<li class="pinned will-translate-360"><a href="https://app.lapentor.com/sphere/virtual-tour-1634218795?scene=61669682939f9760a9416594" target="blank">3) Three-way junction on Langgahan Village</a></li>';
    will_translate_360[3].outerHTML = '<li class="pinned will-translate-360"><a href="https://app.lapentor.com/sphere/virtual-tour-1634218795?scene=616694d21962ca4cdf410623" target="blank">4) Interchange to Pelisan Waterfall from Langgahan Village</a></li>';
  }

  else if (update() == "IDN") {
    document.querySelector('html').setAttribute("lang", "id");
    will_translate_navbar[0].outerHTML = '<li class="nav menu will-translate-navbar" id="active"><a href="#home">Beranda</a></li>';
    will_translate_navbar[1].outerHTML = '<li class="nav menu will-translate-navbar"><a href="#gallery">Galeri</a></li>';
    will_translate_navbar[2].outerHTML = '<li class="nav menu will-translate-navbar"><a href="#location">Lokasi</a></li>';
    will_translate_navbar[3].outerHTML = '<li class="nav menu will-translate-navbar"><a href="#contact-us">Kontak Kami</a></li>';

    will_translate[0].outerHTML = '<p class="will-translate">Pulau Bali tidak selalu tentang pantai. Banyak surga tersembunyi yang menunggu untuk ditemui. Salah satunya adalah air terjun Pelisan ini, yang berlokasi di kecamatan Kintamani, kabupaten Bangli. Surga tersembunyi ini, menunggu untuk dijelajahi.</p>';
    will_translate[1].outerHTML = '<h2 class="will-translate">Tiket Masuk</h2>';
    will_translate[2].outerHTML = '<h2 class="will-translate"><strong>Tentang</strong><br>Air Terjun Pelisan</h2>';
    will_translate[3].outerHTML = '<p style="padding-top: 10px;" class="will-translate">Air terjun Pelisan merupakan air terjun yang berada di banjar adat Langgahan Kangin, desa Langgahan, kecamatan Kintamani, kabupaten Bangli, Bali. Air terjun ini tidak terjun langsung ke tanah. Namun, mengalir pada tebih miring yang ada di lembah sungai. Hal yang membuat air terjun ini lebih cantik, karena mata airnya muncul di sejumlah titik. Selain itu, alam sekitarnya yang masih asri, sangat idel bagi anda yang mencari kesunyian serta kedamaian karena lokasinya yang tersembunyi dan jauh dari kebisingan</p>';
    will_translate[4].outerHTML = '<p class="will-translate">Kalian dapat melukat di air terjun Pelisan, karena terdapat areal suci khusus. Melukat merupakan salah satu upacara pembersihan dalam diri manusia. Upacara melukat hingga kini tetap dilakukan dan sudah menjadi tradisi bagi umat Hindu di Bali yang biasa dilakukan di sumber air tertentu.<br><br><strong>Larangan</strong><br>Namun, terdapat larangan bagi yang ingin melukat. Orang yang sedang berduka karena memiliki kerabat yang meninggal serta sedang haid tidak diizinkan untuk melukat.</p>';
    will_translate[5].outerHTML = '<h2 class="will-translate">Galeri</h2>';
    will_translate[6].outerHTML = '<button class="will-translate">Foto Lainnya</button>';
    will_translate[7].outerHTML = '<h2 class="will-translate">Tampilan  360<sup>o</sup></h2>';
    will_translate[8].outerHTML = '<p class="will-translate">Rasakan pengalaman perjalanan virtual dengan mengklik tanda pada peta</p>';
    will_translate[9].outerHTML = '<h2 class="will-translate">Lokasi</h2>';
    will_translate[10].outerHTML = '<button class="will-translate">Cek pada Gmaps</button>';
    will_translate[11].outerHTML = '<h2 class="will-translate">Ulasan Pengunjung</h2>';
    will_translate[12].outerHTML = '<p class="follow-us will-translate"> <strong>Ikuti Kami</strong> </p>';
    will_translate[13].outerHTML = '<h6 class="will-translate"> <strong>Informasi Pilihan</strong> </h6>';
    will_translate[14].outerHTML = '<a class="will-translate" href="#home">Beranda</a>';
    will_translate[15].outerHTML = '<a class="will-translate" href="#gallery">Gallery</a>';
    will_translate[16].outerHTML = '<a class="will-translate" href="#series">Pelisan The Series</a>';
    will_translate[17].outerHTML = '<a class="will-translate" href="#about-us">Tentang Kami</a>';
    will_translate[18].outerHTML = '<h6 class="will-translate"><strong>Kantor Desa Langgahan</strong></h6>';
    will_translate[19].outerHTML = '<h6 id="contact-us" class="will-translate"><strong>Kontak Kami</strong></h6>';
    will_translate[20].outerHTML = '<p class="will-translate"> <strong>Nomor Telepon</strong>:</p>';

    will_translate_location[0].outerHTML = '<p class="will-translate-location"> <span>Air Terjun Pelisan</span> <br>Desa Langgahan, Kecamatan Kintamani, Kabupaten Bangli, Bali</p>';

    will_translate_360[0].outerHTML = '<li class="pinned will-translate-360"> <a href="https://app.lapentor.com/sphere/virtual-tour-1634218795" target="blank"> 1) Plang Desa Dampingan </a> </li>';
    will_translate_360[1].outerHTML = '<li class="pinned will-translate-360"><a href="https://app.lapentor.com/sphere/virtual-tour-1634218795?scene=61669658739f857e10367484" target="blank">2) Pertigaan Menuju Desa Langahan</a></li>';
    will_translate_360[2].outerHTML = '<li class="pinned will-translate-360"><a href="https://app.lapentor.com/sphere/virtual-tour-1634218795?scene=61669682939f9760a9416594" target="blank">3) Pertigaan Desa Langahan</a></li>';
    will_translate_360[3].outerHTML = '<li class="pinned will-translate-360"><a href="https://app.lapentor.com/sphere/virtual-tour-1634218795?scene=616694d21962ca4cdf410623" target="blank">4) Belokan ke Air Terjun dari Desa Langgahan</a></li>';
  }
}

