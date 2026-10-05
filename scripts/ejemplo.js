/* 
console.log('Tecnologiasweb');
let cadena='Hola Mundo';
console.log(cadena);

let gravedad=9.76;
console.log(gravedad);
gravedad=8;
console.log('Cadena de texto : ',cadena,'Tipo de dato: ',typeof cadena);
console.log(gravedad);

const persona={
    nombre:'pepito',
    edad:20,
    ciudad:'La Paz',
    hobbies:['leer','viajar','programar']
}
console.log('Nombre: ',persona.nombre);
console.log(persona['nombre']);
console.log(persona['nombre']);
console.log(persona.hobbies.join(', '));
const color=['rojo','amarillo','verde'];

console.log(typeof color);
console.log(color[1]);
console.log(color.length-1);

const numero='38';
const numeroconvertido= Number(numero);
console.log(typeof numeroconvertido);
const texto=String(numeroconvertido);
console.log(typeof texto);

const bole='true';
const booleanvalue= Boolean(bole); 
console.log(typeof booleanvalue);

function saludo(nombre){
    return `hola: ${nombre}`;
}
function saludo2(nombre){
    const frase='Hola '+nombre;
    return frase;
}
console.log(saludo2('Luis'));

const suma1=(a,b)=>a+b;
console.log(suma1(6,7));

const saludo3=(nombre,saludo='Hola ')=>{
    return `${saludo}, ${nombre}`
}

console.log(saludo3('luis'));

console.log(saludo3('luis','holis'));

const resta=(a,b)=>a-b;
const multi=(a,b)=>a*b;
 onst divide2=(a,b)=>{
    if b===0;
        return 0;
    return a/b;
}
const divide=(a,b)=>{
    if b==0;
        return 0;
    return a/b;

const peliculas={
    titulo:'Titulo de pelicula',
    directo: 'directo de pelicula',
    anio: 1998

}

const mostrarPeliculas=(pelicula)=>{
    console.log(`${peliculas.titulo}; Dirigido por: ${peliculas.directo} - Anio${peliculas.anio}` );
}

mostrarPeliculas(peliculas);



 destructuring 
const pelicula2={
    titulo:'Poseidon',
    anio:2005
}





 
console.log('sin destructuring',pelicula2.titulo);
const {titulo,anio}=pelicula2;
console.log('con destructuring: ',titulo);

const {titulo: nombrePelicula}=pelicula2;
console.log('Renombrado: ',nombrePelicula);

const nombres=['Juan','Ana','Pablo'];
const[nom1,nom2,nom3]=nombres;
console.log('Nombre 1: ', nom1);

const numeros=[1,2,3];
const numerosAdicionales=[...numeros,4,5,6];
console.log(numerosAdicionales);

const frutas1=['uva','manzana'];
const frutas2=['pera','naranja'];
const frutas=[...frutas1,...frutas2]
console.log(frutas);
const alumno={
    nombre:'Luis',
    apellidos:'Flores'
}

const alumno1={
    ...alumno,
    edad:1,
    genero:'masculino'
}
    console.log(alumno);
console.log(alumno1); 


// Selección del botón
const boton = document.querySelector('.card__button');
if(boton){
boton.addEventListener('click', (event) => {
  console.log(' Click en el botón');
  console.log('Elemento:', event.target);
  console.log('ID del botón:', event.target.id);

  const tarjeta = event.target.closest('.card');
  const titulo = tarjeta.querySelector('.card__title').textContent;
  alert(`Ver más detalles de "${titulo}"`);
    }
});
*/