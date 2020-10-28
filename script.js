/*
{
 name:"",
 avatar:,
 wish:""
},
*/
let wishes = [
    {
     name:"💕Rishabh💕",
     avatar:1,
     wish:"Sending you smiles for every moment of your special day…Have a wonderful time and a very happy birthday!",
    },
   
   ];
   const container = document.querySelector(".container");
   
   function addWishes(data) {
    let div = document.createElement("div");
    div.classList.add("card");
    div.innerHTML = `
     <div>
     <div class="img">
     <img src="images/${data.avatar}.png" alt="" >
     </div>
     <h2 class="card_title" >${data.name}</h2>
     <p class="card_text" >"${data.wish}"</p>
     </div>`;
    container.appendChild(div)
   }
   function showWishes(){
    wishes.forEach(wish => {
     addWishes(wish)
    });
   }
   function start() {
    document.querySelector(".loader").style.display = "none";
    showWishes()
    document.getElementById("music").play();
   }
  
   