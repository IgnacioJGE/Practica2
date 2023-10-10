
type pokemon={
name: string,   
id: number,
types:types[],
}
type types={
slot:number,
type:tipo
}
type tipo={
name:string,
url: string
}

  const screen = prompt("Dame el nombre de un Pokemon","");
  const url= ("https://pokeapi.co/api/v2/pokemon/"+screen)
 
try {
    const respuesta= await fetch( url);
    const Poke: pokemon = await respuesta.json();
    
      if (!respuesta) {
        throw new Error('La solicitud no se ha completado correctamente');
      }
    
    
    console.log("Nombre: ",Poke.name) 
    if(Poke.types.length>1){
      console.log("Tipo: ")
      for (let index = 0; index < Poke.types.length; index++) {
       
       console.log(Poke.types[index].type.name)
        
      }
    }else{
    console.log("Tipo: ", Poke.types[0].type.name)
    }
    console.log("Id: ", Poke.id)
  
    } catch (error) {
      console.error('Ocurrió un error:', error);
    }
  