export function translate(message:string){
    const messages = {
      'users_unity_id_fkey (index)': 'unity_id não registrado.'
    }
  
    return messages[message] ?? 'Opção inválida.'
  }