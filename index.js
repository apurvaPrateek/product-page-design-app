let sizeOptions = document.querySelectorAll(".size label");

sizeOptions.forEach(option=>{
    option.addEventListener("click",(event)=>{
        sizeOptions.forEach(option=>{
            option.style.backgroundColor="white";
        })
        event.target.style.backgroundColor = "green";
    })
})

let boxOptions = document.querySelectorAll(".box div");
let heroImg = document.querySelector(".hero img");

boxOptions.forEach(opt=>{
  opt.addEventListener("click",(event)=>{
    boxOptions.forEach(opt=>{
      opt.style.backgroundColor="grey";
    })
    event.target.style.backgroundColor = "white";
    if(event.target.id=="one") heroImg.src = "./images/image1.png";
    else if(event.target.id=="two") heroImg.src = "./images/image2.png";
    else if(event.target.id=="three") heroImg.src = "./images/image3.png";
  })
})