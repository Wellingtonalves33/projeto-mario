const form = document.querySelector(".formulario-fale-conosco")
const masc = document.querySelector(".mascara-formulario")




function apareceForm (){
    form.style.left= "50%"
    form.style.transform="translateX(-50%)"
    masc.style.visibility="visible"
}

function desaparecerForm(){
    form.style.left="-314px"
    form.style.transform= "translateX(0)"
    masc.style.visibility= "hidden"
}