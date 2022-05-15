let urlGif = "https://api.giphy.com/v1/gifs/random?api_key=M7480xdZuCRQSe1qFVEptMWh3MiPO7Z3&tag=spiderman";

const obtenerGif = async() =>{
    try {
        let response1 = await fetch(urlGif);

        if(!response1.ok){
            throw new Error("Ocurrio un error al realizar la peticion :v");
        }

        let dataS= await response1.json();
        console.log(dataS);
        PintarGif(dataS);

    } catch (error) {
        console.log(error);
    }
}
//obtenerGif();



const consultarGif = () => {
    fetch(urlGif)
        .then((response) => {
            return response.json();
        })

        .then((data) => {
            console.log(data);
            PintarGif(data)
        })

        .catch((error) => {
            console.log(error);
        });
};

consultarGif();

const lista1 = document.getElementById("divGif");

const PintarGif =(data)=>{
    let item = lista1.querySelector(`#divGif2`);
    item.getElementsByTagName("img")[0].setAttribute("src", data.data.images.fixed_height_small.url);
    item.getElementsByTagName("p")[0].innerHTML = data.data.title;
}


