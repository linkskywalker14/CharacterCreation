function getBaseAbilityScore(){
  return parseInt(Math.random() * 4 + 4)
}

let str = getBaseAbilityScore();
let con = getBaseAbilityScore();
let dex = getBaseAbilityScore();
let int = getBaseAbilityScore();
let wis = getBaseAbilityScore();
let cha = getBaseAbilityScore();

$(document).ready(function() {
  $("form#CreateCharacter").submit(function(event) {
    event.preventDefault();
    const creature = $("input:radio[name=creature]:checked").val();
    const upbringing = $("input:radio[name=upbringing]:checked").val();
    const job = $("input:radio[name=job]:checked").val();
    const habit = $("input:radio[name=habit]:checked").val();
    let gear;
    
    if (creature === 'human'){
      str += 100;
      $(".portrait").html("<img src='img/human.jpg' />");
    } else if (creature === 'elf'){
      con += 100;
      $(".portrait").html("<img src='img/elf.jpg' />");
    } else if (creature === 'dwarf'){
      dex += 100;
      $(".portrait").html("<img src='img/dwarf.jpg' />");
    } else if (creature === 'orc'){
      int += 100;
      $(".portrait").html("<img src='img/orc.jpg' />");
    } else if (creature === 'goblin'){
      wis += 100;
      $(".portrait").html("<img src='img/goblin.jpg' />");
    } else if (creature === 'kobold'){
      cha += 100;
      $(".portrait").html("<img src='img/kobold.jpg' />");
    }

    if (upbringing === 'cave'){
      str += 100;
      gear = "Stone spear, lantern, satchel of glow worms, ";
    } else if (upbringing === 'city'){
      con += 100;
      gear = "Rapier, dirty yet stylish clothes, hidden stash of whiskey, ";
    } else if (upbringing === 'hut'){
      dex += 100;
      gear = "Leather sling, satchel of smooth stones, a goat, ";
    } else if (upbringing === 'valley'){
      int += 100;
      gear = "Battered short sword, straw hat, sack of apples, ";
    } else if (upbringing === 'wizard'){
      wis += 100;
      gear = "Cursed Greatsword, 3 philes of alchemical fire, ";
    } else if (upbringing === 'slave'){
      cha += 100;
      gear = "Wooden club, iron manacles, fishing hook, ";
    }

    if (job === 'soldier'){
      str += 100;
      gear += "chain armor, cooking pot, shovel, 100 pennies.";
    } else if (job === 'bandit'){
      con += 100;
      gear += "light gambeson, several hidden knives, looking glass, hand drill, 30 pennies.";
    } else if (job === 'deacon'){
      dex += 100;
      gear += "ornate breastplate, donkey and cart, 500 pennies.";
    } else if (job === 'engineer'){
      int += 100;
      gear += "sledgehammer, mining pick, small keg of gunpowder, 250 pennies.";
    } else if (job === 'farmer'){
      wis += 100;
      gear += "10' pole, 3 trained chickens, straw hat, hoe, 12 pennies.";
    } else if (job === 'fur'){
      cha += 100;
      gear += "loyal dog companion, leather armor, a bear's head helm, notebook filled with what you claim is 'the language of birds.'";
    }

    if (habit === 'fights'){
      str += 100;
      $(".class").text("Fighter");
      $(".HD").text("d12");
    } else if (habit === 'steals'){
      con += 100;
      $(".class").text("Thief");
      $(".HD").text("d6");
    } else if (habit === 'drugs'){
      dex += 100;
      $(".class").text("Magic User");
      $(".HD").text("d4");
    } else if (habit === 'nudity'){
      int += 100;
      $(".class").text("Bard");
      $(".HD").text("d6");
    } else if (habit === 'dirty'){
      wis += 100;
      $(".class").text("Ranger");
      $(".HD").text("d8");
    } else if (habit === 'debate'){
      cha += 100;
      $(".class").text("Cleric");
      $(".HD").text("d8");
    }
    
    
    
    
    
    $("#str").text(str);
    $("#con").text(con);
    $("#dex").text(dex);
    $("#int").text(int);
    $("#wis").text(wis);
    $("#cha").text(cha);
    $(".gear").text(gear);
    $("#CreateCharacter").hide();
    $("#result").show();

  });
});
