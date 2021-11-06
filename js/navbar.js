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