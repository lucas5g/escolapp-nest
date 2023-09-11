import http from 'k6/http';

// const vus = 2
// const vus = 18
const vus = 100

//types = Serviços Ex: Backup 
//Provider type ca = Categorias: Ex: Inform
//Provider service - match -

//query os ids types, provider_type e que pro



export const options = {
  vus: vus,
  iterations: vus,
  duration: '2s'
}

export default function () {
  http.get('http://localhost:3000/students?unity=contagem');
  // http.get('https://dev1.aplicativodeservicos.com.br/application/types')
  // http.get('https://dev1.aplicativodeservicos.com.br/application/settings')
  
}
