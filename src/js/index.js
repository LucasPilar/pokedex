/*
Quando Clicar no pokémon da listagem têm que esconder o cartão atual e mostrar o selecionado.
*/

const listaSelecao = document.querySelectorAll('.pokemon');
const CardPokemon = document.querySelectorAll('.cartao-pokemon');


listaSelecao.forEach(pokemon => {
    //click
    pokemon.addEventListener('click', () => {
        // mexendo na classe aberto
        const cartaoPokemonAberto = document.querySelector('.aberto');
        console.log(cartaoPokemonAberto.classList);
        cartaoPokemonAberto.classList.remove('aberto');

        const idPokemonSelecionado = pokemon.attributes.id.value

        const idCartaoPokemonAbrir = 'cartao-' + idPokemonSelecionado
        const cartaoPokemonParaAbrir = document.getElementById(idCartaoPokemonAbrir);
        cartaoPokemonParaAbrir.classList.add('aberto');

        const pokemonAtivo = document.querySelector('.ativo');
        pokemonAtivo.classList.remove('ativo')

        const pokemonListado = document.getElementById(idPokemonSelecionado)
        pokemonListado.classList.add('ativo')
    });
});