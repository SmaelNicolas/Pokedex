const URLPOKEMON = "https://pokeapi.co/api/v2/pokemon/1";

let pokeNumber;
let pokeImage;
let pokeName;
let pokeType;
let pokeTypeSecond;
let pokeCategory;
let pokeAbilies;
let pokeWeakness;
let pokeShiny;
let pokeHp;
let pokeAttack;
let pokeDefense;
let pokeSpecialAtack;
let pokeSpecialDefense;
let pokeSpeed;

// console.log(URLPOKEMON);

$.get(URLPOKEMON, function (data) {
  console.log(data);
  //   console.log(data.sprites.other["official-artwork"].front_default);

  //   $("body").append(
  //     `<img src= ${data.sprites.other["official-artwork"].front_default}>
  //     <img src= ${data.sprites.front_shiny}>`
  //   );
});
