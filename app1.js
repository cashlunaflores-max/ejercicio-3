let peliculas=[
    {id:1,titulo:'Padrino',genero:'Drama', año:1972, calificacion:8.5, vista :true},
 {id:2,titulo:'Titanic',genero:'Romace', año:1997, calificacion:8.1, vista: false},
  {id:3,titulo:'Inception',genero:'Ciencia Ficción', año:2010, calificacion:9, vista: true}
];
let nextId=4;
let filtroGenero='';
let filtroEstado='';
let busqueda='';

const form = document.getElementById('movie-form');
const inputTitulo = document.getElementById('titulo');
const inputGenero = document.getElementById('genero');
const inputAño = document.getElementById('año');
const inputCalificacion = document.getElementById('calificacion');
const search = document.getElementById('search');

const filtersGenero=document.getElementById('filter-genero');
const filtersSelect=document.getElementById('filter-estado');
const clearFilters=document.getElementById('clear-filters');
const statsTotal = document.getElementById('stats-total');
const statsVistas = document.getElementById('stats-vistas');
const statsPendientes = document.getElementById('stats-pendientes');
const statsPromedio = document.getElementById('stats-promedio');
const moviesGrid = document.getElementById('movies-grid');
const moviesVistas = document.getElementById('movies-vistas');
const moviesEmpty = document.getElementById('movies-empty');
const notification = document.getElementById('notification');

const obtenerPeliculasFiltradas=()=>{
    let resultado=[...peliculas];
    if(busqueda.trim() !==''){
        resultado=resultado.filter(pelicula=>
            pelicula.titulo.toLowerCase().includes(busqueda.toLowerCase()));
    }
    if(filtroGenero!==''){
        resultado=resultado.filter(pelicula=>
            pelicula.genero==filtroGenero
        );
    }
    if(filtroEstado==='vistas'){
        resultado=resultado.filter(pelicula=>
            pelicula.vista==true
        );
    }
     if(filtroEstado==='pendientes'){
        resultado=resultado.filter(pelicula=>
            pelicula.vista==false
        );
    }
    return resultado;
}

const crearTarjetaPelicula=(pelicula)=>{
    const article=document.createElement('article');
    article.className='movie-card';
    const{id,titulo,genero,año,calificacion,vista}=pelicula;

    if(vista){
        article.classList.add('movie-card--viewe');
    }
    article.textContent=`<h3>${titulo}</h3><p>${genero}</p><p>${calificacion}/10</p>
    <div>
        <button>${vista ? 'Marcar pendiente' : 'Marca Vista'}</button>
    </div>`;
    return article;
}
const renderizarPeliculas=()=>{
    const pelicularFiltradas=obtenerPeliculasFiltradas();
    moviesGrid.textContent='';
    if(pelicularFiltradas.length===0){
        moviesEmpty.style.display='block';
        return;
    }
     moviesEmpty.style.display='none';

     pelicularFiltradas.forEach(pelicula=>{
        const tarjeta=crearTarjetaPelicula(pelicula);
        moviesGrid.appendChild(tarjeta);
     });
   
};
  /* toast llibreria    */
     const mostrarNotificacion=(mensaje,tipo='success')=>{
        notification.textContent=mensaje;
        notification.className('notificacion');
        if(tipo==='success'){
            notification.classList.add('notificacio--succcess');
        }
        else{
            notification.classList.add('notificacion--error');
        }
        notification.classList.add('notificacion--show');
        setTimeout(()=>{
            notification.classList.remove('notificacion--show');
        },3000);
     };
  /* toast llibreria    */
     const agregarpelicula=(evento)=>{
        evento.preventDefault();

        const titulo=inputTitulo.value.trim();
        const genero=inputGenero.value.trim();
        const año=parseInt(inputAño.value);
        const calificacion=parseFloat(inputCalificacion.value);
    
        if(titulo||genero||año||calificacion){
            mostrarNotificacion('Complete todos los campos','error')
            return;
        }
        if(calificacion>10 || calificacion<0){
            mostrarNotificacion('La nota debe estar entre 0 y 100 ','error')
            return;
        }

        const nuevaPelicula={
            id:nextId,
            titulo:titulo,
            genero:genero,
            año:año,
            calificacion:calificacion,
            vista:false 
        }
        peliculas=[...peliculas,nuevaPelicula];
        nextId++;
        form.reset();
        renderizarPeliculas();

        mostrarNotificacion(`${titulo} agregado`);
        console.log('pelicula agregada');


    };
    
    form.addEventListener('submit',agregarpelicula);
    console.log('Evento configurado');