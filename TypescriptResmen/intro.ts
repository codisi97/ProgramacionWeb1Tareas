
//Tipo de enumeraciones 
enum genero{
  pop = "pop",
  rock = "rock",
  rap = "rap",
  reggaeton = "reggaeton" 
}

//Alias de union 

type Identificador = string | number;

//interfaces 

interface Cancion {
  id:  Identificador;
  titulo:  string;
  artista: string;
  genero: genero;
  album?: String;//Propiedad opcional 
}


//Arreglo 

//const biblioteca = []; // Este no se le ha declarado ningun tpo por eso es un any , no es un tipado estatico

const biblioteca: Cancion [] = [
  {id:1, titulo:"Sopa de caracol",artista:"Tilo tejeda",genero:genero.pop},
  {id:2, titulo:"Malena",artista:"MANESKIN",genero:genero.pop},
  {id:3, titulo:"bonito",artista:"Jarabe de palo",genero:genero.rock},

];



//Funciones 

const buscarCancion =(id:Identificador): Cancion | undefined  => {
  return biblioteca.find(cancion => cancion.id === id)
}

//Tuplas y desestructuracion 

const foratearDuracion = (segundos: number): [number,number]=> {
  const minutos = Math.floor(segundos/ 60);
  const seg = segundos % 60;
  return [minutos, segundos];
}