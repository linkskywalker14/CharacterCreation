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
    
    if (creature && upbringing && job && habit) {
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
        history = "When you were young your parents were forced to flee their homes to live in caves. Perhaps because they did something terrible, or maybe just because they were " + creature + "s and people are prejudice. Whatever the reason, a cave is a cold and damp place to grow up. Makes you tough, but doesn't give you many opportunities to practice your social skills. Eventually you couldn't take it anymore, said goodbye to your parents, and left to ";
      } else if (upbringing === 'city'){
        str -= 2;
        con += 2;
        dex -= 1;
        int += 2;
        wis += 1;
        cha += 3;
        gear = "Rapier, dirty yet stylish clothes, hidden stash of whiskey, ";
        history = "Affluence isn't all its cracked up to be, even for such a refined " + creature + " as yourself. After all, sometimes your family is going to wind up on the wrong side of some political squabble, lose everything, and then you're forced to do some regular commoner job you're totally not prepared for. So you had to ";
      } else if (upbringing === 'hut'){
        str += 1;
        con += 2;
        dex += 3;
        int += 1;
        wis += 1;
        cha -= 3;
        gear = "Leather sling, satchel of smooth stones, a goat, ";
        history = "Your typically antisocial " + creature + " grandfather raised you after your parents split. It was the pits. He herded goats in this little hut way up on the mountain. You never had anyone to play with, or talk to, but him and the goats. The two choices were roughly equal in terms of conversational ability. He was a nice old man, and it killed you to break his heart, but you had to get away to ";
      } else if (upbringing === 'valley'){
        str += 3;
        con += 2;
        dex += 0;
        int -= 1;
        wis -= 2;
        cha += 2;
        gear = "Battered short sword, straw hat, sack of apples, ";
        history = "You had a healthy childhood. You were nurtured by a loving community, always had plenty to eat, and work to do. It would have been easy to settle down and perpetrate another generation of wholesome, simple-living " + creature + "s. That wasn't the life for you, though. You were born with a restless spirit. You bid a teary farewell to your kin, and ventured out to ";
      } else if (upbringing === 'wizard'){
        str += 1;
        con += 0;
        dex += 2;
        int += 3;
        wis += 2;
        cha += 0;
        gear = "Cursed Greatsword, 3 philes of alchemical fire, ";
        history = "It seemed like apprenticing yourself to a wizard would be fun. You were young, she was offering three hots and a cot at a time when you really needed them, plus you'd get to learn magic! Except...um...turns out that when a wizard says 'apprentice,' they actually mean 'guinea pig for all sorts of weird experiments.' You endured it as long as you could, but a " + creature + " can only take so much. You escaped late one night, and ran off to ";
      } else if (upbringing === 'slave'){
        str += 1;
        con -= 1;
        dex += 2;
        int -= 2;
        wis += 3;
        cha += 2;
        gear = "Wooden club, iron manacles, fishing hook, ";
        history = "Perhaps it is an understatement to say that growing up a slave sucks. Well, excuse you for not having much education. You spent your formative years chained to an oar. There wasn't a lot of time for learning rhetoric. Mostly you just learn how to avoid beatings, and how to keep an eye out for the right time to escape. Yours was in a port town, where you were able to slip away to ";
      }

      if (job === 'soldier'){
        str += 3;
        con += 2;
        dex += 2;
        int += 0;
        wis += 1;
        cha -= 1;
        gear += "chain armor, cooking pot, shovel, 100 pennies.";
        history += "enroll in the army. The looting and pillaging of inferior peoples was cool, but that life just wasn't suited to a " + creature + " like you. Too many rules, to much marching, plus you were always getting in trouble for ";
      } else if (job === 'bandit'){
        str += 1;
        con += 1;
        dex += 3;
        int += 0;
        wis += 2;
        cha += 1;
        gear += "light gambeson, several hidden knives, looking glass, hand drill, 30 pennies.";
        history += "become a bandit. You'd hoped it would be an easy way to make loadsa money, but it turned out to be a much tougher vocation than you had anticipated. Eventually the rest of the band voted to kick you out for ";
      } else if (job === 'deacon'){
        str += 0;
        con += 2;
        dex -= 2;
        int += 2;
        wis += 1;
        cha += 3;
        gear += "ornate breastplate, donkey and cart, 500 pennies.";
        history += "join the clergy. There were a lot of prayers and junk to memorize, but you managed to muddle through. All the food and wine they gave you made it seem like a real sweet gig until they excommunicated you after you were caught ";
      } else if (job === 'engineer'){
        str += 1;
        con += 2;
        dex += 1;
        int += 3;
        wis += 0;
        cha -= 1;
        gear += "sledgehammer, mining pick, small keg of gunpowder, 250 pennies.";
        history += "apprentice to become an engineer.  You showed an apptitude for the work, but unfortunately your teacher had a reputation to uphold. They had to cut all ties with you when someone saw you ";
      } else if (job === 'farmer'){
        str += 1;
        con += 3;
        dex -= 3;
        int += 2;
        wis += 2;
        cha += 2;
        gear += "10' pole, 3 trained chickens, straw hat, hoe, 12 pennies.";
        history += "work on a farm. Part of your pay was a small personal plot, on which you chose to grow a mind-altering cash crop. It could have been a sweet gig, but you had to go and wreck it for yourself by neglecting your plants because you were spending all of your time ";
      } else if (job === 'fur'){
        str += 1;
        con += 2;
        dex += 2;
        int -= 3;
        wis += 3;
        cha += 0;
        gear += "loyal dog companion, leather armor, a bear's head helm, notebook filled with what you claim is 'the language of birds.'";
        history += "live in the woods, trapping animals and trading their pelts. It had seemed like a step forward when you started, but it was a painfully lonely life. Not to mention how difficult it was to indulge your desire for ";
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
        history += "punchin' dudes right in their dicks when they look atche funny. There's nothing like a good fight, but now you've gotta find some other way to get by...";
      } else if (habit === 'steals'){
        str += 0;
        con += 1;
        dex += 3;
        int += 1;
        wis += 2;
        cha += 1;
        $(".class").text("Thief");
        $(".HD").text("d6");
        history += "stealing stuff. Doesn't even matter if it's valuable, you just love slipping stuff that isn't yours int your dirty little pockets, damn the consequences. Of course...now you've gotta find some other way to get by...";
      } else if (habit === 'drugs'){
        str += 1;
        con -= 1;
        dex += 1;
        int += 3;
        wis += 2;
        cha += 2;
        $(".class").text("Magic User");
        $(".HD").text("d4");
        history += "doing the drugs. Not the socially acceptable kind. Not even the sorta-tolerated counter culture kind. The hard shit. And now, because of your love of drugs, you've gotta find some other way to get by...";
      } else if (habit === 'nudity'){
        str += 1;
        con += 1;
        dex += 2;
        int += 1;
        wis -= 1;
        cha += 3;
        $(".class").text("Bard");
        $(".HD").text("d6");
        history += "running through public spaces without a stitch of clothing on your body. Nakedly singing songs about how great your junk is, and how much of a dynamo you are in the sack. For some reason people don't appreciate that behavior, and now you're stuck finding some other way to get by...";
      } else if (habit === 'dirty'){
        str += 1;
        con += 3;
        dex += 1;
        int += 1;
        wis += 1;
        cha -= 3;
        $(".class").text("Ranger");
        $(".HD").text("d8");
        history += "never, ever, ever bathing. Why should you bathe? It ain't natural, and as best you can tell you smell just fine. Buuuut a bunch of prima donas say you stink, so now you've gotta find some other way to get by...";
      } else if (habit === 'debate'){
        str += 1;
        con += 2;
        dex += 1;
        int += 0;
        wis += 3;
        cha -= 2;
        $(".class").text("Cleric");
        $(".HD").text("d8");
        history += "getting into endless vitriolic arguments over stuff that nobody cares about but you. Apparently nobody else values the truth the way you do. Oh well, now you've gotta find some other way to get by...";
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

    } else {
    alert ("Make a selection in all fields.");
  };
  });
});
