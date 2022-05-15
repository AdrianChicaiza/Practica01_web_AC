const consultarPokemon = (id, number) => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
        .then((response) => {
            return response.json();
        })

        .then((data) => {
            //console.log(data);
            pintarPokemon(data, number)
        })

        .catch((error) => {
            console.log(error);
        });
};



const btnSeleccionar = () => {
    let primerPokemon = Math.round(Math.random() * 150);
    let segundoPokemon = Math.round(Math.random() * 150);
    consultarPokemon(primerPokemon, 1);
    consultarPokemon(segundoPokemon, 2);
};

btnSeleccionar()

const lista = document.getElementById("listarpokemon")

const pintarPokemon = (data, id) => {
    let item = lista.querySelector(`#pok-${id}`);
    item.getElementsByTagName("img")[0].setAttribute("src", data.sprites.front_default);
    item.getElementsByTagName("p")[0].innerHTML = data.name; //lo que hago es que en el primer <p> cambie a un valor string que proviene de la API.

    let pokeUNO = '';
    for (let i = 0; i < data.abilities.length; i++) {
        pokeUNO += `<li>${data.abilities[i].ability.name}</li>`
    }
    console.log(pokeUNO);

    //pintar las habilidades:
    item.getElementsByTagName(`ol`)[0].innerHTML = pokeUNO;

}


// https://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_document_getelementsbytagname2

// https://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_document_queryselector

// https://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_element_setattribute1