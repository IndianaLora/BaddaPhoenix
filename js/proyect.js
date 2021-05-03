const proyectSection = document.getElementById("proyects-section");
const img=document.createElement('img');


const proyectPhotos=[
    {tittle:"Jobs",src="./img/bolsa.png"},
    {tittle:"AfWorld",src="./img/afWorld.jpeg"},
    {tittle:"Itla",src="./img/itla.png"},
    {tittle:"Elecciones",src="./img/Votacion.png"},
    {tittle:"Pokedex",src="./img/pokedex.png"}
]

proyectPhotos.map((proyects)=>{
    return(proyectSection.innerHTML=proyects.tittle)
   
})

