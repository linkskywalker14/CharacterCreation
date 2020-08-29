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
    } else if (upbringing === 'city'){
      con += 100;
    } else if (upbringing === 'hut'){
      dex += 100;
    } else if (upbringing === 'valley'){
      int += 100;
    } else if (upbringing === 'wizard'){
      wis += 100;
    } else if (upbringing === 'slave'){
      cha += 100;
    }

    if (job === 'soldier'){
      str += 100;
    } else if (job === 'bandit'){
      con += 100;
    } else if (job === 'deacon'){
      dex += 100;
    } else if (job === 'engineer'){
      int += 100;
    } else if (job === 'farmer'){
      wis += 100;
    } else if (job === 'fur'){
      cha += 100;
    }

    if (habit === 'fights'){
      str += 100;
    } else if (habit === 'steals'){
      con += 100;
    } else if (habit === 'drugs'){
      dex += 100;
    } else if (habit === 'nudity'){
      int += 100;
    } else if (habit === 'dirty'){
      wis += 100;
    } else if (habit === 'debate'){
      cha += 100;
    }
    
    
    
    
    
    $("#str").text(str);
    $("#con").text(con);
    $("#dex").text(dex);
    $("#int").text(int);
    $("#wis").text(wis);
    $("#cha").text(cha);
    $("#CreateCharacter").hide();
    $("#result").show();

  });
});
