

export interface ResponseData {
    statusCode:  number;
    message:     string;
    pagination:  Pagination;
    totalQuotes: null;
    data:        quotes[];
}

export interface Pagination {
    currentPage: null;
    nextPage:    null;
    totalPages:  null;
}
type quotes ={
    _id: string,
    quoteText: string,
    quoteAuthor: string,
    quoteGenre: string,
    __v: number

}



try {

const respuesta= await fetch( "https://quote-garden.onrender.com/api/v3/quotes?limit=30");//el limit dicta la cantidad de elementos que toma
const Quotes: ResponseData = await respuesta.json();

  if (!respuesta) {
    throw new Error('La solicitud no se ha completado correctamente');
  }

 
Quotes.data.forEach((elem)=> console.log("Genero", elem.quoteGenre, "Autor", elem.quoteAuthor, "Quote", elem.quoteText) )
} catch (error) {
  console.error('Ocurrió un error:', error);
}
