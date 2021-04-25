

phonelistBtn.onclick=()=>{
    console.log("phonelistbtn fired")

    screenDOM.classList.remove('grid')
    fetch('https://randomuser.me/api?results=25')
    .then(res=>res.json())
    .then(res=>{
        console.log(res);
        // let ordered = res.results.sort((a,b)=>{
        //     if(b.name.last.charCodeAt(0) - a.name.last.charCodeAt(0)){
        //         return b;
        //     }
        // })
        let ordered = res.results.map(p=>{
            return{
                number:p.phone,
                name:p.name.first,
                lname:p.name.last,
                email:p.email,
            }
        })

        ordered = ordered.sort((a,b)=>a.lname.charCodeAt(0) - b.lname.charCodeAt(0))
        console.log(ordered)
        ordered = ordered.splice(0,15)
        var html="<div class='phonelist-screen-gui'>";
             html += `<h5>- ${ordered[0].lname[0].toUpperCase()} -</h5>`
        ordered.forEach((person,idx)=>{
            if(idx !== 0){
                if(person.lname[0] !== ordered[idx-1].lname[0]){
                    html += `<h5>- ${person.lname[0].toUpperCase()} -</h5>`
                 }
                }
                console.log("build html")
           
                 html += `<p style="color:red">${person.lname}, ${person.name}</p><p>${person.number}</p>`
        })
        html+= "</div>"
    console.log('HTML',html)
    screenDOM.innerHTML=""
    screenDOM.innerHTML = html;
    })
    //var test = '<h2 style="color:white">WTF???</h2>'
}



