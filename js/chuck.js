// Chuck Norris
// document.getElementById("button-chuck").addEventListener("click", getChuck());  

// function getChuck() {
//        console.log('getChuck function started');

        var xhr = new XMLHttpRequest();
        var url = "https://api.chucknorris.io/jokes/random";
        xhr.onreadystatechange = function(){
  console.log(xhr.readyState);
                if(xhr.readyState == 4 && xhr.status==200){ 
                        console.log(xhr.response);
                        var input_api = xhr.response; 
                        var chuck_jokes = JSON.parse(input_api);
                //     console.log(chuck_jokes) ;
                        document.getElementById("chuck-pic").innerHTML = '<img src="' + chuck_jokes.icon_url+ '"></img>'; 
                        document.getElementById("joke").innerHTML = chuck_jokes.value; 
                }                 
        }

        xhr.open("GET",url);                                        
        xhr.send();
        console.log(xhr);
