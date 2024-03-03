const sol = document.querySelector('area[alt="Sol"]');
const terra = document.querySelector('area[alt="Terra"]');
const marte = document.querySelector('area[alt="Marte"]');
let textoPlaneta = document.getElementById('texto-inf');

sol.addEventListener("click", function(){
    textoPlaneta.textContent = "Informações sobre o Sol:";
})
terra.addEventListener("click", function(){
    textoPlaneta.textContent = "Informações sobre a Terra:"
})
marte.addEventListener("click", function(){
    textoPlaneta.textContent = "Informações sobre Marte:"
})