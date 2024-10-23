export function gerarIdAleatorio() {
    
    const length = 8;
  
    const caracteres = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  
    let id = '';
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * caracteres.length);
      id += caracteres.charAt(randomIndex);
    }
  
    return id;
  }