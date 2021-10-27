const URLPOKEMON = "https://pokeapi.co/api/v2/pokemon/1";

let pokeName;
let pokeNumber;
let pokeImage;
let pokeShiny;
let pokeType;
let pokeTypeSecond;
let pokeAbility;
let pokeAbilitySecond;
let pokeWeigth;
let pokeHp;
let pokeAttack;
let pokeDefense;
let pokeSpecialAttack;
let pokeSpecialDefense;
let pokeSpeed;

// console.log(URLPOKEMON);

$.get(URLPOKEMON, function (data) {
  console.log(data);

  pokeName = data.species.name;
  pokeNumber = data.id;
  pokeImage = data.sprites.front_default;
  pokeShiny = data.sprites.front_shiny;
  pokeType = data.types[0].type.name;
  if (data.types.length == 2) {
    pokeTypeSecond = data.types[1].type.name;
  }
  pokeAbility = data.abilities[0].ability.name;
  if (data.abilities.length == 2) {
    pokeAbilitySecond = data.abilities[1].ability.name;
  }
  pokeWeigth = data.weight;
  pokeHp = data.stats[0].base_stat;
  pokeAttack = data.stats[1].base_stat;
  pokeDefense = data.stats[2].base_stat;
  pokeSpecialAttack = data.stats[3].base_stat;
  pokeSpecialDefense = data.stats[4].base_stat;
  pokeSpeed = data.stats[5].base_stat;

  console.log(
    pokeName,
    pokeNumber,
    pokeImage,
    pokeShiny,
    pokeType,
    pokeTypeSecond,
    pokeAbility,
    pokeAbilitySecond,
    pokeWeigth,
    pokeHp,
    pokeAttack,
    pokeDefense,
    pokeSpecialAttack,
    pokeDefense,
    pokeSpeed
  );
});
