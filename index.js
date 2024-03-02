const sol = document.querySelector('area[alt="Sol"]');
let textoPlaneta = document.getElementById('texto-inf');

sol.addEventListener("click", function(){
    textoPlaneta.textContent = "Informações sobre o sol:";
})