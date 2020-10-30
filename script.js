
let wishes = [
    {
     name:"💕Rishabh💕",
     avatar:1,
     wish:"💗💓💟💝💘💖💞💛💕💜💙💚🏁🧡❤️😚😙😘😗👨‍❤️‍💋‍👨👩‍❤️‍💋‍👩🤗👩‍❤️‍💋‍👨👨‍❤️‍👨👩‍❤️‍👩👩‍❤️‍👨💋💋😸😺🥰🥳😎🤩",
    },
    {
     name:"😎 Dinesh 😎",
     avatar:1,
     wish:"Sending you smiles for every moment of your special day…Have a wonderful time and a very happy birthday!",
    },
    {
     name:"💝 Vibhu 💝",
     avatar:3,
     wish:"Happiest birthday to my #BholuRam 😘😘 May god bless you with all the love,happiness and success. 💐💐May you keep smiling and shining like a star 🤩I love you so much yarr❤️❤️Thanku for always being with me. Thank you for being so caring and loving You have proved the actual meaning of \"True Friendship\"  Love you Infinity ❤️\n "
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
    document.querySelector('.main').style.display = "block";

    showWishes()
    document.getElementById("music").play();
   }
  
   function showGift(){
    document.querySelector(".loader").style.display = "none";
    document.querySelector('.main').style.display = "none";
    document.querySelector('.teddy_area').style.display = "block";
    document.getElementById("music").pause();
   }
   document.querySelector('.main').style.display = "none";
