let amigos = [];

function adicionarAmigo() {
    let amigo = document.getElementById('amigo').value;
    
    if (amigo == '') {
        alert('Por favor, digite um nome!');
        return;
    }
    
    amigos.push(amigo);
    
    let lista = document.getElementById('listaAmigos');
    lista.innerHTML = amigos.join(', ');
    
    document.getElementById('amigo').value = '';
}

function sortearAmigo() {
    if (amigos.length < 2) {
        alert('Adicione pelo menos 2 amigos para fazer o sorteio!');
        return;
    }
    
    let numeroSorteado = Math.floor(Math.random() * amigos.length);
    let amigoSorteado = amigos[numeroSorteado];
    
    document.getElementById('resultado').innerHTML = `O amigo secreto sorteado é: ${amigoSorteado}`;
}

function reiniciar() {
    amigos = [];
    document.getElementById('listaAmigos').innerHTML = '';
    document.getElementById('resultado').innerHTML = '';
}