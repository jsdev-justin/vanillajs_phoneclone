
let numbers = [];
let users = [];
let texts =[];

var str = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo, dignissimos. Amet rerum, totam tempore quis assumenda qui deserunt iste sit labore dolore culpa facere ut, nulla itaque beatae velit enim odio dolorem. Neque magni quam consectetur fugiat aliquam enim ex!'



str.split(" ").forEach((w,idx)=>{
    if(idx % 8 === 0){
        texts.push(str.split(" ").splice(idx,8).join(" "))
    }
})

for(let i =0;i<5;i++){
    let html=""

    for(let y=0;y<10;y++){
        let number = Math.random() * 10 | 0;

        html += JSON.stringify(number);

        if( y === 2 || y === 5){
            html += "-"
        }
        
    }
    numbers.push(html)
    users.push(`User${i}`)
}

let phoneData = [];


for(let i=0;i<5;i++){
    phoneData.push({user:users[i],number:numbers[i],text:texts[i]})
}

console.log(phoneData)


commentBtn.onclick=()=>{
    screenDOM.classList.remove("grid")
    console.log('commentBtn fired')

    let html = "<div class='texts-screen'>";
    let letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"

    phoneData.forEach(d=>{

        html += `<div class='flex p-1'>
        <div class='p-1 icon-div'><h1>${letters.split("")[Math.random() * letters.length | 0]}</h1></div><div><h5>${Math.random() > .5 ? d.user : d.number}</h5><h5>${d.text}</h5></div></div>`
    })

    screenDOM.innerHTML = html;
}


