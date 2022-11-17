function getPokemon(){
    let nombre = document.getElementById("nombre").value;
    fetch(`https://pokeapi.co/api/v2/pokemon/${nombre}/`)
    .then(function(data){
        return data.json();
    })
    .then((function (result){
        console.log(result.name);
        console.log(result.sprites.front_default);
        let habilidades ="";
        for(let i = 0; i < result.abilities.length; i++){
            habilidades += `<tr><td>${result.abilities[i].ability.name}</td></tr>`
        }
        let str = `<div class="card" style="width: 18rem;"><img src="${result.sprites.front_default}"><h1 class="text-center">${result.name.toUpperCase()}</h1><table>${habilidades}</table></div>`;
                $("#main3").empty();
                $("#main3").append(str);
    }))
}

function showToast(message, color)
{
    document.getElementById("toastText").innerText=message;
    let toastElement  = document.getElementById('toast')

    toastElement.className = toastElement.className.replace("bg-warning").replace("bg-danger") + " "  + color;

    let toast = new bootstrap.Toast(toastElement)
    toast.show()
}
