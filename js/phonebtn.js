var phonekeyBtns = []

phoneBtn.onclick=()=>{ 
    console.log("phoneBtn clicked") 
    var html = "<div class='phone-dial-parent-screen'><div class='phone-dial-screen center white'></div><div class='keypad grid'>"
    for(let i=1;i<=10;i++){
        if(i === 10){
            html += "<div class='cel center'>*</div><div class='cel center'>0</div><div class='cel center'>#</div>"
         
        }
        else{
            html += `<div onclick="enterKey()" class='cel center'>${i}</div>`
        }
    }
    html += "<div class='cel center'>C</div><div class='cel center'><i class='fas fa-phone'></i></div><div class='cel center'><</div>"

    html += "</div></div>"
        screenDOM.classList.remove("grid")
        screenDOM.innerHTML = html

        phonekeyBtns = document.querySelectorAll(".cel");

        console.log(phonekeyBtns)

        phonekeyBtns.forEach(btn=>{
            btn.onclick=(e)=>enterKey(e)
        })

}


var html = ""


function enterKey(e){
    var phoneDialScreen = document.querySelector(".phone-dial-screen")
    if(e.target.textContent === "<"){
        console.log("WTF?")
        html = html.split("");
        html.pop("");
        if(html[html.length-1] === "-"){
            html.pop("")
        }
        console.log(html)
        html = html.join("")
    }

    else if(e.target.textContent === "C"){
        html=""
    }

    else if(!e.target.textContent.length){
        console.log("phonedial btn")
        callPhone(html,phoneDialScreen);
    }

    else if(html.length === 12)return;


  else{


    if(html.length === 3){
        html += "-"
    }
    if(html.length === 7){
        html += "-"
    }
    html += e.target.textContent;
  }


    phoneDialScreen.innerHTML = html;
    
}



function callPhone(num,screen){
    if(num.length !== 12){
        console.log(screen)
        setTimeout(()=>{
            screen.innerHTML = "Invalid number!"
        })
    }

    if(num.indexOf("*") !== -1 || num.indexOf("#") !== -1){
        setTimeout(()=>{
            screen.innerHTML = "Invalid number!"
        })
    }
    else{
        let counter = 0;
        let callInt = setInterval(()=>{
            screen.innerHTML = `Calling... <br> ${num}`
            demoScreenDOM.innerHTML = `<div class='flex center demo-call'><h3>Incomin Call</h3><h4>${num}</h4></div>`
            counter++
            setTimeout(()=>{
                screen.innerHTML = ""
                demoScreenDOM.innerHTML = "<div class='demo-call'></div>"

            },1000)

            if(counter === 4){
                console.log("calling is done")
                demoScreenDOM.innerHTML = ""
                clearInterval(callInt)
            }
        },2000);

    }
}