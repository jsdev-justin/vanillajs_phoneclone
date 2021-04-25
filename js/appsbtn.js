


appsBtn.onclick=()=>{
    console.log("appsbtn fired")
    screenDOM.classList.add("grid")

    screenDOM.innerHTML = ""
    for(let i=0;i<5;i++){
        let folderDiv = document.createElement("div");
            folderDiv.className="folder center"
        let i = document.createElement("i");
        i.className="fa fa-folder"
        folderDiv.appendChild(i)
        screenDOM.appendChild(folderDiv)

    }
}