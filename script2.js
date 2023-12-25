const body = document.querySelector("body");
const swalst = Swal.mixin({
  timer: 2300,
  allowOutsideClick: false,
  showConfirmButton: false,
  timerProgressBar: true,
  imageHeight: 90,
});

const audio = new Audio('' + linkmp3.src);
let ftganti = 0;
let fungsi = 0;
let fungsiAwal = 0;
const deffotostiker = fotostiker.src;

function berjatuhan(){
  const heart = document.createElement("div");
  heart.className = "fas fa-snowflake";
  heart.style.left = (Math.random() * 90) + "vw";
  heart.style.animationDuration = (Math.random() * 3) + 2 + "s";
  body.appendChild(heart);
}

setInterval(function name(params){
  const heartArr = document.querySelectorAll(".fa-snowflake");
  if(heartArr.length > 100){
    heartArr[0].remove();
  }
}, 100);

Content.style = "opacity:1;margin-top:16vh";

const swals = Swal.mixin({
  allowOutsideClick: false,
  cancelButtonColor: '#FF0040',
  imageHeight: 80,
});

// Event listener untuk membuat audio berulang
audio.addEventListener('ended', function(){
  audio.currentTime = 0;
  audio.play();
});

document.getElementById("kadoIn").onclick = function (){
  if(fungsiAwal == 0){
    audio.play();
    fungsiAwal = 1;
    kadoIn.style = "transition:all .8s ease;transform:scale(10);opacity:0";
    wallpaper.style = "transform: scale(1.5);";
    ket.style = "display:none";
    setTimeout(initengahan, 300);
    setTimeout(inipesan, 500);
  }
};

async function inipesan(){
    const{ value: nama } = await swals.fire({
      title: 'Kamu siapa?? kok bisa disini??, nama kamu siapa?',
      input: 'text',
    });
  
    if(nama && nama.length < 11){
      const lowercaseNama = nama.toLowerCase();
  
      if(lowercaseNama === 'orlin' || lowercaseNama === 'cia' || lowercaseNama === 'felicia' || lowercaseNama === 'citrakara'){
        window.nama = nama;
        vketikhalo = "Loh sayang?" + " haloo" + " ✨";
        mulainama();
      }else if(lowercaseNama === 'nichi' || lowercaseNama === 'hanif' || lowercaseNama === 'bubub' || lowercaseNama === 'nichinoya'){
        window.nama = nama;
        vketikhalo = "Kamu mau ku smekdon kah?? untung kamu lagi ultah, kumaafkan";
        mulainama();
      }else{
        window.nama = nama;
        vketikhalo = "Pake nama kamu bebb. Biar enak di sg hehe. tapi yaudah deh gpp";
        mulainama();
      }
  
    }else{
      await swals.fire('Nama pendek aja yang biar enak di SG HAHAHA');
      inipesan();
    }
  }
  

const tanya = 'mau kado gakk';
const opstanya = 'hehe';
const tompositif= 'maauu';
const tomnegatif= 'g';