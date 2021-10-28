let URLPOKEMON;

let value;

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

const newInput = () => {
  $("#main_input").change(() => {
    value = $("#main_input").val().toLowerCase();
    if (value != "") {
      $("#poke_info").show();
      app(value);
    } else {
      $("#poke_info").hide();
    }
  });
};

const capitalize = (string) => {
  return string[0].toUpperCase() + string.slice(1);
};

const app = (value) => {
  URLPOKEMON = `https://pokeapi.co/api/v2/pokemon/${value}`;

  $.get(URLPOKEMON, function (data) {
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

    $("#pokeName").text(capitalize(pokeName));

    $("#pokeNumber").text(pokeNumber);

    $("#pokeImage").attr("src", pokeImage);

    $("#pokeImageShiny").attr("src", pokeShiny);

    $("#pokeType").text(capitalize(pokeType));
    if (pokeTypeSecond != undefined && pokeType != pokeTypeSecond) {
      $("#pokeTypeSecond").text(capitalize(pokeTypeSecond));
    }
    $("#pokeAbility").text(capitalize(pokeAbility));
    if (pokeAbilitySecond != undefined) {
      $("#pokeAbilitySecond").text(capitalize(pokeAbilitySecond));
    }

    $("#pokeWeigth").text(pokeWeigth);

    $("#pokeHp").text(pokeHp);
    $("#pokeAttack").text(pokeAttack);
    $("#pokeDefense").text(pokeDefense);
    $("#pokeSpecialAttack").text(pokeSpecialAttack);
    $("#pokeSpecialDefense").text(pokeSpecialDefense);
    $("#pokeSpeed").text(pokeSpeed);
  }).fail(() => {
    alert("There is no such Pokémon");
  });
};

newInput();
