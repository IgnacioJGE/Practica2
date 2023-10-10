type libro={
    id: number,
    title: string,
    author: string,
    pages: number,
    genre  : string 
}

let libreria: libro[]=[];
let idtotal:number=0;
const addbook = function(titulo: string, Autor: string, paginas: number, Genero: string) {
    const lib: libro = {
      id: idtotal,
      title: titulo,
      author: Autor,
      pages: paginas,
      genre: Genero,
    };
    libreria.push(lib);
    idtotal=idtotal+1;
}

const filterbook =function(genero:string){
    for (let index = 0; index < libreria.length; index++) {
        if(libreria[index].genre===genero) console.log(libreria[index])
        
    }
}
const deletebook =function(nombre:string){
for (let index = 0; index < libreria.length; index++) {
    if(libreria[index].title===nombre){
        libreria.splice(index,1)
    }
    
}
}
do{
console.log("Elige una de las siguientes opciones")
console.log("1 - Crear libro 2 - Filtrar libro por género 3 - Borrar libro 4 - Salir ")
const screen = prompt("","");
// tiene errores porque el prompt tiene un tipo raro como string|null pero siempre devuelve string asi que funciona perfectamente incluso cuando hay que meter un numero porque lo convierto a number
switch (screen) {
    case "1":{
        const titulo = prompt("Dame el titulo del libro","");
        const Autor = prompt("Dame el autor del libro","");
        const paginnas = prompt("Dime cuantas paginas tiene el libro","");
        const paginas=parseInt(paginnas);
        const genero = prompt("Dame el genero del libro","");
        addbook(titulo,Autor,paginas,genero)
    
      break;
    }

    case "2":{
        const genero = prompt("Dime el genero que quieres buscar","");
        filterbook(genero)
      break;
    }
    case "3":{
        const titulo = prompt("Dime el título del libro que ddeseas borrar","");
        deletebook(titulo)
      break;
    }
    case "4":
      Deno.exit(0)
      break;


  }
}while(libreria.length<1000000000)
