const sections = document.querySelectorAll("section");
const navLi = document.querySelectorAll('li a');

window.addEventListener('scroll', ()=>{
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if(pageYOffset >= (sectionTop - sectionHeight / 3)){
            current = section.getAttribute('id');
            // section.getElementsByClassName
        }
    })
    
    navLi.forEach(a => {
        a.classList.remove('active');
        if(a.classList.contains(current)){
            a.classList.add("active");
            console.log(current);
        }
    })
})

// max768


// max 576
// a.logo img{
//     border: none;
//     width: 170px;
// }

// max420
// .container-fluid{
//     margin: 0 30px!important;
// }

// a.logo img{
//     border: none;
//     width: 150px;
// }