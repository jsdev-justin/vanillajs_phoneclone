var phone = document.querySelectorAll(".phone-div")

var chromeBtn = document.querySelector(".chrome")
var phoneBtn = document.querySelector(".phone")

var phonelistBtn = document.querySelector(".phonelist")
var commentBtn = document.querySelector(".comment")
var appsBtn = document.querySelector(".apps");

var rangeInputs = document.querySelectorAll("input[type='range']")
var screenDOM = document.querySelector(".gui-screen");
var demoScreenDOM = document.querySelector(".demo-screen");


let phoneR = 0;
let phoneG = 0;
let phoneB = 0;

console.log(phoneR,phoneG,phoneB)

rangeInputs.forEach(input=>{
    input.oninput=(e)=>{
        console.log(e.target)
        console.log(e.target.value)


        if(e.target.getAttribute("name") === "r"){
            // let phoneR = window.getComputedStyle(phone).getPropertyValue('--phoneR')
            // let phoneG = window.getComputedStyle(phone).getPropertyValue('--phoneG')
            // let phoneB = window.getComputedStyle(phone).getPropertyValue('--phoneB')
            console.log("Here is your variable", phoneR)
            phoneR = e.target.value;
            let percent = (phoneR/100) * 255

            phoneR = Math.floor(percent)



        }

        if(e.target.getAttribute("name") === "g"){

            console.log("Here is your variable", phoneR)
            phoneG = e.target.value;
            let percent = (phoneG/100) * 255

            phoneG = Math.floor(percent)



        }


        if(e.target.getAttribute("name") === "b"){

            phoneB = e.target.value;
            let percent = (phoneB/100) * 255

            phoneB = Math.floor(percent)

            console.log(phoneB)

        }
        console.log(`R:${phoneR},G:${phoneG},B:${phoneB}`)
        phone.forEach(p=>{
            p.style.backgroundColor=`rgb(${phoneR},${phoneG},${phoneB})`
        })

    }
})