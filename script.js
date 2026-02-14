const scenes = {

  start: {
    title: "What kind of fricken date is this??",
    image: "images/title.png",
    text: "",
    choices: [
      { text: "Start", next: "decision1" }
    ]
  },

  decision1: {
    title: "You decide you want to pick the date for today!!",
    image: "images/decision1.png",
    text: "What do you wanna do?",
    choices: [
      { text: "naengmyun yay!!!​", next: "decision21" },
      { text: "sugo pasta??!!", next: "decision22" }
    ]
  },

  decision21: {
    title: "You happily ate naengmyun!!! It was super tasty!",
    image: "images/decision21.png",
    text: "What do u wanna do now?",
    choices: [
      { text: "go aquarium!!", next: "decision31a" },
      { text: "go look at dogs", next: "decision31b" }
    ]
  },

  decision22: {
    title: "You ended up sleeping in and not going…",
    image: "images/decision22.png",
    text: "What do you wanna do now",
    choices: [
      { text: "go to the zoo", next: "decision32a" },
      { text: "have fun at home ;)", next: "decision32b" }
    ]
  },

  decision31a: {
    title: "The fishes were very pretty but julian gets a stomach ache!!!",
    image: "images/decision31a.png",
    text: "What do you do?!",
    choices: [
      { text: "heal now heal now muahhhh", next: "ending31aa" },
      { text: "go back home and rub his stomach", next: "ending31ab" }
    ]
  },

  decision31b: {
    title: "There are a buncha cute doggies!!! OMG is that AGATHA!!!!",
    image: "images/decision31b.png",
    text: "What do you do??",
    choices: [
      { text: "give the good girl big big pets", next: "ending31ba" },
      { text: "boop its nose", next: "ending31bb" }
    ]
  },

  decision32a: {
    title: "You ended up sleeping in even more…",
    image: "images/decision32a.png",
    text: "can we at least eat something?",
    choices: [
      { text: "yummy yummy pho", next: "ending32aa" },
      { text: "CHICKEN + PIZZA + SOJU ULTIMATE COMBOOO!!!!", next: "ending32ab" }
    ]
  },

  decision32b: {
    title: "Wow that was nice…",
    image: "images/decision32b.png",
    text: "You look over and OH NOOO!!! Julian is suuuuuper drained!! How do u wanna help??",
    choices: [
      { text: "red ribbon + collar fun time!!!", next: "ending32ba" },
      { text: "cook for julian!!!", next: "ending32bb" }
    ]
  },

  ending31aa: {
    title: "The kisses were nice but…",
    image: "images/ending31aa.png",
    text: "The stomach pain keeps going and consumes him… He dies peacefully in your lap. (good way to go out for me hehe)",
    choices: []
  },

  ending31ab: {
    title: "Yay he’s healed now!!! But…",
    image: "images/ending31ab.png",
    text: "Before you knew it… HE MOVED UR HAND TO CUP HIM!!! MWAHAHAHHAHAA",
    choices: []
  },

  ending31ba: {
    title: "agatha is super happy!!!",
    image: "images/ending31ba.png",
    text: "Agatha is super happy and you guys get to adopt agatha for free!!",
    choices: []
  },

  ending31bb: {
    title: "You’ll regret that…",
    image: "images/ending31bb.png",
    text: "Agatha teams up with julian so that he can give you infinite nose boops!!! You better say no more muhehehehhe",
    choices: []
  },

  ending32aa: {
    title: "S-so… sleeepyyyy…",
    image: "images/ending32aa.png",
    text: "After coming home you guys just knock out… I can’t believe we slept the whole day theresa…",
    choices: []
  },

  ending32ab: {
    title: "yum yum fun time",
    image: "images/ending32ab.png",
    text: "You two play danganronpa and have a bunch of fun until you knock out for the next day!! Awesome sauce!!",
    choices: []
  },

  ending32ba: {
    title: "Julian dies…",
    image: "images/ending32ba.png",
    text: "Julian dies a happy death… Seems the king of rahways reign is finally over.",
    choices: []
  },

  ending32bb: {
    title: "JULIAN SUPERCHARGEDD!!!!!",
    image: "images/ending32bb.png",
    text: "RAHHHHHHH!!!! Julian is super duper muper energized after eating your cooking and you will end up with back and leg pains tomorrow morning hohoho",
    choices: []
  }

};

const titleEl = document.getElementById("scene-title");
const imageEl = document.getElementById("scene-image");
const textEl = document.getElementById("scene-text");
const choicesEl = document.getElementById("choices");

function loadScene(sceneKey) {
  const container = document.querySelector(".container");

  container.classList.add("fade-out");

  setTimeout(() => {
    const scene = scenes[sceneKey];

    document.getElementById("scene-title").innerText = scene.title;
    document.getElementById("scene-text").innerText = scene.text;
    document.getElementById("scene-image").src = scene.image;

    const choicesDiv = document.getElementById("choices");
    choicesDiv.innerHTML = "";

    scene.choices.forEach(choice => {
      const btn = document.createElement("button");
      btn.innerText = choice.text;
      btn.onclick = () => loadScene(choice.next);
      choicesDiv.appendChild(btn);
    });

    container.classList.remove("fade-out");
  }, 400);
}


loadScene("start");
