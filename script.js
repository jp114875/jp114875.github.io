// ==========================
// SCENES
// ==========================

const scenes = {

  start: {
    title: "What kind of fricken date is this??",
    text: "By: julian\nFor: theresa!!!",
    image: "images/title.png",
    choices: [
      { text: "Start 💖", next: "decision1" }
    ]
  },

  // ==========================
  // DECISION 1
  // ==========================

  decision1: {
    title: "You decide you want to pick the date for today!!",
    text: "What do you wanna do?",
    image: "images/decision1.png",
    choices: [
      { text: "naengmyun yay!!!", next: "decision21" },
      { text: "sugo pasta??!!", next: "decision22" }
    ]
  },

  // ==========================
  // DECISION 2-1
  // ==========================

  decision21: {
    title: "You happily ate naengmyun!!! It was super tasty!",
    text: "What do u wanna do now?",
    image: "images/decision21.png",
    choices: [
      { text: "go aquarium!!", next: "decision31a" },
      { text: "go look at dogs", next: "decision31b" }
    ]
  },

  // ==========================
  // DECISION 2-2
  // ==========================

  decision22: {
    title: "You ended up sleeping in and not going…",
    text: "What do you wanna do now",
    image: "images/decision22.png",
    choices: [
      { text: "go to the zoo", next: "decision32a" },
      { text: "have fun at home ;)", next: "decision32b" }
    ]
  },

  // ==========================
  // DECISION 3-1a
  // ==========================

  decision31a: {
    title: "The fishes were very pretty but julian gets a stomach ache!!!",
    text: "What do you do?!",
    image: "images/decision31a.png",
    choices: [
      { text: "heal now heal now muahhhh", next: "ending31aa" },
      { text: "go back home and rub his stomach", next: "ending31ab" }
    ]
  },

  // ==========================
  // DECISION 3-1b
  // ==========================

  decision31b: {
    title: "There are a buncha cute doggies!!! OMG is that AGATHA!!!!",
    text: "What do you do??",
    image: "images/decision31b.png",
    choices: [
      { text: "give the good girl big big pets", next: "ending31ba" },
      { text: "boop its nose", next: "ending31bb" }
    ]
  },

  // ==========================
  // DECISION 3-2a
  // ==========================

  decision32a: {
    title: "You ended up sleeping in even more…",
    text: "can we at least eat something?",
    image: "images/decision32a.png",
    choices: [
      { text: "yummy yummy pho", next: "ending32aa" },
      { text: "CHICKEN + PIZZA + SOJU ULTIMATE COMBOOO!!!!", next: "ending32ab" }
    ]
  },

  // ==========================
  // DECISION 3-2b
  // ==========================

  decision32b: {
    title: "Wow that was nice…",
    text: "You look over and OH NOOO!!! Julian is suuuuuper drained!! How do u wanna help??",
    image: "images/decision32b.png",
    choices: [
      { text: "red ribbon + collar fun time!!!", next: "ending32ba" },
      { text: "cook for julian!!!", next: "ending32bb" }
    ]
  },

  // ==========================
  // ENDINGS
  // ==========================

  ending31aa: {
    title: "The kisses were nice but…",
    text: "The stomach pain keeps going and consumes him… He dies peacefully in your lap. (good way to go out for me hehe)",
    image: "images/ending31aa.png",
    choices: []
  },

  ending31ab: {
    title: "Yay he’s healed now!!! But…",
    text: "Before you knew it… HE MOVED UR HAND TO CUP HIM!!! MWAHAHAHHAHAA",
    image: "images/ending31ab.png",
    choices: []
  },

  ending31ba: {
    title: "agatha is super happy!!!",
    text: "Agatha is super happy and you guys get to adopt agatha for free!!",
    image: "images/ending31ba.png",
    choices: []
  },

  ending31bb: {
    title: "You’ll regret that…",
    text: "Agatha teams up with julian so that he can give you infinite nose boops!!! You better say no more muhehehehhe",
    image: "images/ending31bb.png",
    choices: []
  },

  ending32aa: {
    title: "S-so… sleeepyyyy…",
    text: "After coming home you guys just knock out… I can’t believe we slept the whole day theresa…",
    image: "images/ending32aa.png",
    choices: []
  },

  ending32ab: {
    title: "yum yum fun time",
    text: "You two play danganronpa and have a bunch of fun until you knock out for the next day!! Awesome sauce!!",
    image: "images/ending32ab.png",
    choices: []
  },

  ending32ba: {
    title: "Julian dies…",
    text: "Julian dies a happy death… Seems the king of rahways reign is finally over.",
    image: "images/ending32ba.png",
    choices: []
  },

  ending32bb: {
    title: "JULIAN SUPERCHARGEDD!!!!!",
    text: "RAHHHHHHH!!!! Julian is super duper muper energized after eating your cooking and you will end up with back and leg pains tomorrow morning hohoho",
    image: "images/ending32bb.png",
    choices: []
  }

};



// ==========================
// SCENE LOADER (Smooth + Restart)
// ==========================

function loadScene(sceneKey) {
  const scene = scenes[sceneKey];
  const container = document.querySelector(".container");
  const img = document.getElementById("scene-image");

  container.style.opacity = "0";

  setTimeout(() => {

    document.getElementById("scene-title").innerText = scene.title;
    document.getElementById("scene-text").innerText = scene.text;

    const choicesDiv = document.getElementById("choices");
    choicesDiv.innerHTML = "";

    if (scene.choices.length > 0) {
      scene.choices.forEach(choice => {
        const btn = document.createElement("button");
        btn.innerText = choice.text;
        btn.onclick = () => loadScene(choice.next);
        choicesDiv.appendChild(btn);
      });
    } else {
      const restartBtn = document.createElement("button");
      restartBtn.innerText = "Restart 💖";
      restartBtn.onclick = () => loadScene("start");
      choicesDiv.appendChild(restartBtn);
    }

    // SAFE image swap (no blank screen if image missing)
    img.style.opacity = "0";
    img.src = scene.image;
    img.onload = () => {
      img.style.opacity = "1";
    };

    container.style.opacity = "1";

  }, 400);
}



// ==========================
// START GAME
// ==========================

loadScene("start");
