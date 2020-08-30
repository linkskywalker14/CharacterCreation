function getBaseAbilityScore(){
  return parseInt(Math.random() * 3 + 4);
}

function checkBaseAbilityScore(num){
  if (num > 18){
    num = 18;
  } else if (num < 3){
    num = 3;
  }
  return num;

}

function getModifier(num){
  let mod;
  if (num === 3){
    mod = "(-3)";
  } else if (num > 3 && num <= 5){
    mod = "(-2)";
  } else if (num >= 6 && num <= 8){
    mod = "(-1)";
  } else if (num >= 9 && num <= 12){
    mod = "(+0)";
  } else if (num >= 13 && num <= 15){
    mod = "(+1)";
  } else if (num >= 16 && num <= 17){
    mod = "(+2)";
  } else if (num === 18){
    mod = "(+3)";
  }
  return mod;
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
      str += 1;
      con += 1;
      dex += 1;
      int += 0;
      wis -= 2;
      cha += 3;
      $(".portrait").html("<img src='img/human.jpg' />");
    } else if (creature === 'elf'){
      str -= 1;
      con -= 2;
      dex += 1;
      int += 2;
      wis += 3;
      cha += 0;
      $(".portrait").html("<img src='img/elf.jpg' />");
    } else if (creature === 'dwarf'){
      str += 2;
      con += 3;
      dex += 0;
      int += 0;
      wis += 2;
      cha -= 1;
      $(".portrait").html("<img src='img/dwarf.jpg' />");
    } else if (creature === 'orc'){
      str += 3;
      con += 2;
      dex += 1;
      int += 1;
      wis += 1;
      cha -= 2;
      $(".portrait").html("<img src='img/orc.jpg' />");
    } else if (creature === 'goblin'){
      str += 0;
      con += 2;
      dex += 3;
      int += 1;
      wis -= 3;
      cha += 0;
      $(".portrait").html("<img src='img/goblin.jpg' />");
    } else if (creature === 'kobold'){
      str += 1;
      con += 0;
      dex += 2;
      int += 3;
      wis += 1;
      cha += 2;
      $(".portrait").html("<img src='img/kobold.jpg' />");
    }

    if (upbringing === 'cave'){
      str += 2;
      con += 3;
      dex += 1;
      int += 1;
      wis += 1;
      cha -= 1;
      gear = "Stone spear, lantern, satchel of glow worms, ";
      history = "Growing up in a cave is damp. Eventually you left to ";
    } else if (upbringing === 'city'){
      str -= 2;
      con += 2;
      dex -= 1;
      int += 2;
      wis += 1;
      cha += 3;
      gear = "Rapier, dirty yet stylish clothes, hidden stash of whiskey, ";
      history = "Affluence isn't all its cracked up to be. After all, sometimes your family loses everything, then you're forced to get a regular job, like ";
    } else if (upbringing === 'hut'){
      str += 1;
      con += 2;
      dex += 3;
      int += 1;
      wis += 1;
      cha -= 3;
      gear = "Leather sling, satchel of smooth stones, a goat, ";
      history = "It was lonely on the mountain. Your grandpa had no use for other people, but you just had to get away to ";
    } else if (upbringing === 'valley'){
      str += 3;
      con += 2;
      dex += 0;
      int -= 1;
      wis -= 2;
      cha += 2;
      gear = "Battered short sword, straw hat, sack of apples, ";
      history = "You had a healthy childhood, for a " + creature + ". You were nurtured by a loving community, and always with plenty to eat. You had a restless spirit, though, which is why you left home to ";
    } else if (upbringing === 'wizard'){
      str += 1;
      con += 0;
      dex += 2;
      int += 3;
      wis += 2;
      cha += 0;
      gear = "Cursed Greatsword, 3 philes of alchemical fire, ";
      history = "You thought it'd be fun to be a wizard, but that guy you appretniced to kept trying to do experiments on you! That's why you ran away to ";
    } else if (upbringing === 'slave'){
      str += 1;
      con -= 1;
      dex += 2;
      int -= 2;
      wis += 3;
      cha += 2;
      gear = "Wooden club, iron manacles, fishing hook, ";
      history = "Growing up as a slave sucks! Fortunately you were able to escape and go on to ";
    }

    if (job === 'soldier'){
      str += 3;
      con += 2;
      dex += 2;
      int += 0;
      wis += 1;
      cha -= 1;
      gear += "chain armor, cooking pot, shovel, 100 pennies.";
      history += "join the army. But that just wasn't any good for a " + creature + " like you. Too many rules. Plus, you were always getting in trouble for ";
    } else if (job === 'bandit'){
      str += 1;
      con += 1;
      dex += 3;
      int += 0;
      wis += 2;
      cha += 1;
      gear += "light gambeson, several hidden knives, looking glass, hand drill, 30 pennies.";
      history += "become a bandit, which turned out to be a much tougher life than you anticipated. Eventually you were kicked out of the band for ";
    } else if (job === 'deacon'){
      str += 0;
      con += 2;
      dex -= 2;
      int += 2;
      wis += 1;
      cha += 3;
      gear += "ornate breastplate, donkey and cart, 500 pennies.";
      history += "join the clergy. It seemed like a real sweet gig until you were caught ";
    } else if (job === 'engineer'){
      str += 1;
      con += 2;
      dex += 1;
      int += 3;
      wis += 0;
      cha -= 1;
      gear += "sledgehammer, mining pick, small keg of gunpowder, 250 pennies.";
      history += "become an engineer. Unfortunately you were expelled from school when someone saw you ";
    } else if (job === 'farmer'){
      str += 1;
      con += 3;
      dex -= 3;
      int += 2;
      wis += 2;
      cha += 2;
      gear += "10' pole, 3 trained chickens, straw hat, hoe, 12 pennies.";
      history += "till the soil growing the latest designer-drug cash crop. Unfortunately the whole operation went belly-up when you wound up spending all your time ";
    } else if (job === 'fur'){
      str += 1;
      con += 2;
      dex += 2;
      int -= 3;
      wis += 3;
      cha += 0;
      gear += "loyal dog companion, leather armor, a bear's head helm, notebook filled with what you claim is 'the language of birds.'";
      history += "live in the woods, trapping animals and trading their pelts. It got lonely, though, especially as it become difficult to indulge your desire to ";
    }

    if (habit === 'fights'){
      str += 3;
      con += 2;
      dex += 2;
      int -= 1;
      wis -= 2;
      cha -= 1;
      $(".class").text("Fighter");
      $(".HD").text("d12");
      history += "punchin' dudes right in their dicks when they look atche funny. Now you've gotta find some other way to get by...";
    } else if (habit === 'steals'){
      str += 0;
      con += 1;
      dex += 3;
      int += 1;
      wis += 2;
      cha += 1;
      $(".class").text("Thief");
      $(".HD").text("d6");
      history += "slipping stuff that wasn't yours into your dirty little pockets. Now you've gotta find some other way to get by...";
    } else if (habit === 'drugs'){
      str += 1;
      con -= 1;
      dex += 1;
      int += 3;
      wis += 2;
      cha += 2;
      $(".class").text("Magic User");
      $(".HD").text("d4");
      history += "injecting drugs. Not the socially acceptable kind. Not even the sorta-tolerated counter culture kind. Now you've gotta find some other way to get by...";
    } else if (habit === 'nudity'){
      str += 1;
      con += 1;
      dex += 2;
      int += 1;
      wis -= 1;
      cha += 3;
      $(".class").text("Bard");
      $(".HD").text("d6");
      history += "running around nekkid, singing songs about how great you are in bed! Now you've gotta find some other way to get by...";
    } else if (habit === 'dirty'){
      str += 1;
      con += 3;
      dex += 1;
      int += 1;
      wis += 1;
      cha -= 3;
      $(".class").text("Ranger");
      $(".HD").text("d8");
      history += "never, ever, ever bathing. Now you've gotta find some other way to get by...";
    } else if (habit === 'debate'){
      str += 1;
      con += 2;
      dex += 1;
      int += 0;
      wis += 3;
      cha -= 2;
      $(".class").text("Cleric");
      $(".HD").text("d8");
      history += "getting into these endless, vitriolic arguments where you constantly move the goal posts and refuse to ever admit any wrongdoing. Now you've gotta find some other way to get by...";
    }
    
    //Check to ensure none of the ability scores have been adjusted outside the acceptable range of 3 to 18
    
    str = checkBaseAbilityScore(str);
    con = checkBaseAbilityScore(con);
    dex = checkBaseAbilityScore(dex);
    int = checkBaseAbilityScore(int);
    wis = checkBaseAbilityScore(wis);
    cha = checkBaseAbilityScore(cha);

    let strMod = getModifier(str);
    let conMod = getModifier(con);
    let dexMod = getModifier(dex);
    let intMod = getModifier(int);
    let wisMod = getModifier(wis);
    let chaMod = getModifier(cha);
    

    //Return all the results.


    $("#str").text(str);
    $("#con").text(con);
    $("#dex").text(dex);
    $("#int").text(int);
    $("#wis").text(wis);
    $("#cha").text(cha);
    $("#strMod").text(strMod);
    $("#conMod").text(conMod);
    $("#dexMod").text(dexMod);
    $("#intMod").text(intMod);
    $("#wisMod").text(wisMod);
    $("#chaMod").text(chaMod);
    $(".gear").text(gear);
    $(".history").text(history);
    $("#CreateCharacter").hide();
    $("#result").show();

  });
});
