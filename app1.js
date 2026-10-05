const API_KEY='a2f4846ecb293eb98168a4c93854f664';
const BASE_URL='https://api.themoviedb.org/3';
const probarApi=async()=>{
    const url=`${BASE_URL}/movie/popular?api_key=${API_KEY}&language=es-ES`;
    console.log('Url de la peticion',url);
    const respuesta=await fetch(url);
    const datos=await respuesta.json();
    console.log('Respuesta completa', datos);
    console.log('Peliculas', datos.results);
    console.log('Total de resultados',datos.total_results);
}
/*como usar la ap key */
probarApi();
