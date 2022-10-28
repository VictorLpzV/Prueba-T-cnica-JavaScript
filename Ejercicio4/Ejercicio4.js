    
fetch("https://pokeapi.co/api/v2/pokemon/ditto")
  .then((response) => response.json()) //Promesa
  .then((data) => {
    let elemento = document.getElementById("ditto");
    elemento.innerHTML = 
    `<label>Nombre: </label>
    <p>${data.name}</p>
    <label>Número de pokemon: </label>
    <p>${data.order}</p>
   
  <img src='${data.sprites.front_default}'/>
  <br>
  <label>Habilidad: </label>
  `;
  
  for(let i=0;i<data.abilities.length;i++){
    elemento.innerHTML+=`<p>${data.abilities[i].ability.name}</p>`
  }

    console.log(data);
  })
  .catch((err) => console.log(err));

