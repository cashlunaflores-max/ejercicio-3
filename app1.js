const API_KEY='a2f4846ecb293eb98168a4c93854f664';
const BASE_URL='https://api.themoviedb.org/3';
const IMAGE_URL='https://image.tmdb.org/t/p/w500';

const moviesgrid=document.getElementById('movies-grid');
const obtenerPeliculas=async()=>{
    const url=`${BASE_URL}/movie/popular?api_key=${API_KEY}&language=es-ES`;
    const respuesta=await fetch(url);
    const datos=await respuesta.json();
    return datos.results;
}

const crearTarjeta=(pelicula)=>{
    const{title,release_date,vote_avarage,poster_path}=pelicula;
    const anio=release_date?release_date.split('-')[0]:'N/A';
    const imagen=poster_path ? `${IMAGE_URL}${poster_path}` :'';
    const rating =vote_avarage ? vote_avarage.toFixed(0): 'N/A';/* INVESTIGAR FUNCIONES NATIVAS DE JAVASRPIT */
    return `
    <article class="movie-card">
        <div class="movie-card__poster">
            <img class="movie-card__poster" src="${imagen}" alt="${title}"></img>
            <span class="movie-card__rating">${rating}</span>
        </div>
        <div class="movie-car__content">
            <h3 class="movie-card__title">${title}</h3>
            <p class="movie-card__year">${anio}</p>
        </div>
    </article>
    `;
}

const iniciar=async()=>{
    console.log('Mostrar  pelicula');
    const peliculas=await obtenerPeliculas();
    const primera=peliculas[0];
    console.log('Primera pelicula',primera);
    moviesgrid.innerHTML=crearTarjeta(primera);
    console.log('primera pelicula renderizada');

}


/* const probarApi=async()=>{
    const url=`${BASE_URL}/movie/popular?api_key=${API_KEY}&language=es-ES`;
    console.log('Url de la peticion',url);
    const respuesta=await fetch(url);
    const datos=await respuesta.json();
    console.log('Respuesta completa', datos);
    console.log('Peliculas', datos.results);
    console.log('Total de resultados',datos.total_results);
} 
    
probarApi();*/

iniciar();
/*como usar la ap key */

