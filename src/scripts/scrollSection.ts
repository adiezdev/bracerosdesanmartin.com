document.addEventListener('DOMContentLoaded', function() {
    const sections = document.querySelectorAll('.section')

    const observer = new IntersectionObserver(entries =>{
        entries.forEach(entry=>{
            if(entry.isIntersecting){
                entry.target.classList.add('visible');
                observer.unobserve(entry.target); //opcionas, para de observar cuando ya ejecute

            }
        })
    },{
        threshold: 0.3
    });

    sections.forEach(section =>{
        observer.observe(section)
    })
})