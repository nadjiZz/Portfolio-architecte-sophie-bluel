// Récuperation de l'Url des travaux
const urlWorks = await fetch("http://localhost:5678/api/works");
const works = await urlWorks.json();

// Création des elements du DOM et ajout des travaux à la galerie
function generationTravaux(works){

 for (let i in works){
    const travaux = works[i];
    // Les elements qui accueilleront les travaux
    const galerie = document.querySelector(".gallery");
    const figure = document.createElement("figure");

    const imageElement = document.createElement("img");
    imageElement.src = travaux.imageUrl;
    imageElement.alt = travaux.title;
    const titleElement = document.createElement("figcaption");
    titleElement.innerText =travaux.title;
    //Rattachemment
    figure.appendChild(imageElement);
    figure.appendChild(titleElement)

    galerie.appendChild(figure)
 }
}
generationTravaux(works);

//Création de boutons de filtrages
const btnTous = document.querySelector('.Tout');
btnTous.addEventListener("click", function(){
    const tous = works.filter(function(work){
        return work
    })
    document.querySelector(".gallery").innerHTML = "";
    generationTravaux(tous)
    console.log(tous)
})
const btnObjet = document.querySelector('.Objet');
btnObjet.addEventListener("click", function(){
    const objets = works.filter(function(work){
        return work.categoryId===1;
        
    });
    document.querySelector(".gallery").innerHTML = "";
    generationTravaux(objets)
    console.log(objets)
})
const btnAppartement = document.querySelector('.Appart');
btnAppartement.addEventListener("click", function(){
    const appartements = works.filter(function(work){
        return work.categoryId===2;
        
    });
    document.querySelector(".gallery").innerHTML = "";
    generationTravaux(appartements)
    console.log(appartements)
})
const btnHotelRestaurant = document.querySelector('.Hotel');
btnHotelRestaurant.addEventListener("click", function(){
    const hotelRestaurants = works.filter(function(work){
        return work.categoryId===3;
        
    });
    document.querySelector(".gallery").innerHTML = "";
    generationTravaux(hotelRestaurants)
    console.log(hotelRestaurants)
});

// //Gestion des donnés de login

// const  dataExist = window.sessionStorage.getItem("token");
// const Edition =document.querySelector("#edition");
// const MyBtn1 =document.querySelector("#myBtn1");  
// const MyBtn2 =document.querySelector("#myBtn2");
// const MyBtn3 =document.querySelector("#myBtn3");
// const MyBtnGroup = document.querySelector(".BtnGroup")

// if(dataExist){
//     Edition.classList.remove('hidden');
//     Edition.classList.add('edition');
//     MyBtn1.classList.remove('hidden');
//     MyBtn1.classList.add('modifier');
//     MyBtn2.classList.remove('hidden');
//     MyBtn2.classList.add('modifier');
//     MyBtn3.classList.remove('hidden');
//     MyBtn3.classList.add('modifier');
//     MyBtn.classList.remove('BtnGroup');
//     MyBtn.classList.add("hidden")
     
//     const logout = document.querySelector('#login')
//     logout.innerText = "logout";
//     logout.addEventListener("click", function(){
//         window.sessionStorage.removeItem('token')
//         logout.removeAttribute('href')
//         logout.setAttribute('href', '/index.html')
//     })
// }