

chromeBtn.onclick=()=>{

    var html = `<div class='chrome-div'>
            <div class='browser'>https://www.google.com</div>
             <div class='chrome-header flex space-between p-1'>
             <ul class='flex'>
             <li>About</li>
             <li>Store</li>
             </ul>
             <ul class='flex'>
             <li>Gmail</li>
             <li>Images</li>
             <li><i class='fas fa-mail'></i></li>
             <li><i class='fas fa-google'></i></li>
             </ul>
             </div>
             <div>
             <div class='flex center'>
             <h1 class='blue'>G</h1>
             <h1 class='red'>o</h1>
             <h1 class='yellow'>o</h1>
             <h1 class='blue'>g</h1>
             <h1 class='green'>l</h1>
             <h1 class='red'>e</h1>
             </div>
             <div class='form-div'>
             <label>Search:</label>
             <input class='search-input' type='text' placeholder='search'>
             </div>
             <div class='flex center mt-10'>
             <button class='search-btn mr-2'>Search</button><button class='ml-2'>Lucky</button>
             </div>
             </div>
             </div>`

        screenDOM.innerHTML = html


        document.querySelector(".search-btn").onclick=searchQuery;
}



function searchQuery(){
    console.log('search query!')
    let query = document.querySelector(".search-input").value;
    let browser = document.querySelector(".browser");
        browser.innerHTML = ""
    let text = browser.innerText;

    text += `?q=${query}googleID=32ioio390v...`

    browser.innerHTML = text;
    
}