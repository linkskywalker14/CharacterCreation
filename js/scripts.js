function getBaseAbilityScore(){
  return parseInt(Math.random() * 3 + 4)
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
    let history;
    
    if (creature === 'human'){
      cha += 3;
      $(".portrait").html("<img src='img/human.jpg' />");
    } else if (creature === 'elf'){
      wis += 3;
      $(".portrait").html("<img src='img/elf.jpg' />");
    } else if (creature === 'dwarf'){
      con += 3;
      $(".portrait").html("<img src='img/dwarf.jpg' />");
    } else if (creature === 'orc'){
      str += 3;
      $(".portrait").html("<img src='img/orc.jpg' />");
    } else if (creature === 'goblin'){
      dex += 3;
      $(".portrait").html("<img src='img/goblin.jpg' />");
    } else if (creature === 'kobold'){
      int += 3;
      $(".portrait").html("<img src='img/kobold.jpg' />");
    }

    if (upbringing === 'cave'){
      con += 3;
      gear = "Stone spear, lantern, satchel of glow worms, ";
      history = "Growing up in a cave is damp. Eventually you left to ";
    } else if (upbringing === 'city'){
      cha += 3;
      gear = "Rapier, dirty yet stylish clothes, hidden stash of whiskey, ";
      history = "Affluence isn't all its cracked up to be. After all, sometimes your family loses everything, then you're forced to get a regular job, like ";
    } else if (upbringing === 'hut'){
      dex += 3;
      gear = "Leather sling, satchel of smooth stones, a goat, ";
      history = "It was lonely on the mountain. Your grandpa had no use for other people, but you just had to get away to ";
    } else if (upbringing === 'valley'){
      str += 3;
      gear = "Battered short sword, straw hat, sack of apples, ";
      history = "You had a healthy childhood, for a " + creature + ". You were nurtured by a loving community, and always with plenty to eat. You had a restless spirit, though, which is why you left home to ";
    } else if (upbringing === 'wizard'){
      int += 3;
      gear = "Cursed Greatsword, 3 philes of alchemical fire, ";
      history = "You thought it'd be fun to be a wizard, but that guy you appretniced to kept trying to do experiments on you! That's why you ran away to ";
    } else if (upbringing === 'slave'){
      wis += 3;
      gear = "Wooden club, iron manacles, fishing hook, ";
      history = "Growing up as a slave sucks! Fortunately you were able to escape and go on to ";
    }

    if (job === 'soldier'){
      str += 100;
      gear += "chain armor, cooking pot, shovel, 100 pennies.";
      history += "join the army. But that just wasn't any good for a " + creature + " like you. Too many rules. Plus, you were always getting in trouble for ";
    } else if (job === 'bandit'){
      con += 100;
      gear += "light gambeson, several hidden knives, looking glass, hand drill, 30 pennies.";
      history += "become a bandit, which turned out to be a much tougher life than you anticipated. Eventually you were kicked out of the band for ";
    } else if (job === 'deacon'){
      dex += 100;
      gear += "ornate breastplate, donkey and cart, 500 pennies.";
      history += "join the clergy. It seemed like a real sweet gig until you were caught ";
    } else if (job === 'engineer'){
      int += 100;
      gear += "sledgehammer, mining pick, small keg of gunpowder, 250 pennies.";
      history += "become an engineer. Unfortunately you were expelled from school when someone saw you ";
    } else if (job === 'farmer'){
      wis += 100;
      gear += "10' pole, 3 trained chickens, straw hat, hoe, 12 pennies.";
      history += "till the soil growing the latest designer-drug cash crop. Unfortunately the whole operation went belly-up when you wound up spending all your time ";
    } else if (job === 'fur'){
      cha += 100;
      gear += "loyal dog companion, leather armor, a bear's head helm, notebook filled with what you claim is 'the language of birds.'";
      history += "live in the woods, trapping animals and trading their pelts. It got lonely, though, especially as it become difficult to indulge your desire to ";
    }

    if (habit === 'fights'){
      str += 100;
      $(".class").text("Fighter");
      $(".HD").text("d12");
      history += "punchin' dudes right in their dicks when they look atche funny. Now you've gotta find some other way to get by...";
    } else if (habit === 'steals'){
      con += 100;
      $(".class").text("Thief");
      $(".HD").text("d6");
      history += "slipping stuff that wasn't yours into your dirty little pockets. Now you've gotta find some other way to get by...";
    } else if (habit === 'drugs'){
      dex += 100;
      $(".class").text("Magic User");
      $(".HD").text("d4");
      history += "injecting drugs. Not the socially acceptable kind. Not even the sorta-tolerated counter culture kind. Now you've gotta find some other way to get by...";
    } else if (habit === 'nudity'){
      int += 100;
      $(".class").text("Bard");
      $(".HD").text("d6");
      history += "running around nekkid, singing songs about how great you are in bed! Now you've gotta find some other way to get by...";
    } else if (habit === 'dirty'){
      wis += 100;
      $(".class").text("Ranger");
      $(".HD").text("d8");
      history += "never, ever, ever bathing. Now you've gotta find some other way to get by...";
    } else if (habit === 'debate'){
      cha += 100;
      $(".class").text("Cleric");
      $(".HD").text("d8");
      history += "getting into these endless, vitriolic arguments where you constantly move the goal posts and refuse to ever admit any wrongdoing. Now you've gotta find some other way to get by...";
    }
    
    
    
    
    
    $("#str").text(str);
    $("#con").text(con);
    $("#dex").text(dex);
    $("#int").text(int);
    $("#wis").text(wis);
    $("#cha").text(cha);
    $(".gear").text(gear);
    $(".history").text(history);
    $("#CreateCharacter").hide();
    $("#result").show();

  });
});
