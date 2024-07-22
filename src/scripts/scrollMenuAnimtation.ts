const nav = document.querySelector('.nav');
const escudo = document.querySelector('.nav img');

window.addEventListener('scroll', function() {	
	if (window.scrollY > 160) {
		nav!.classList.add('bg-[#c00000]'); 
		escudo!.classList.add('opacity-100');
		nav!.classList.add('shadow-elevation-m'); 
	  } else {
		nav!.classList.remove('bg-[#c00000]');
		escudo!.classList.remove('opacity-100');
		nav!.classList.remove('shadow-elevation-m'); 
	  }
}); 