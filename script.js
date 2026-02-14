function loadScene(sceneKey) {
  const container = document.querySelector(".container");
  const img = document.getElementById("scene-image");

  // Fade whole container out
  container.style.opacity = "0";

  setTimeout(() => {
    const scene = scenes[sceneKey];

    // Update title + text immediately
    document.getElementById("scene-title").innerText = scene.title;
    document.getElementById("scene-text").innerText = scene.text;

    // Fade image out first
    img.style.opacity = "0";

    // Preload new image
    const newImg = new Image();
    newImg.src = scene.image;

    newImg.onload = function () {
      img.src = scene.image;
      img.style.opacity = "1";
    };

    // Update choices
    const choicesDiv = document.getElementById("choices");
    choicesDiv.innerHTML = "";

    scene.choices.forEach(choice => {
      const btn = document.createElement("button");
      btn.innerText = choice.text;
      btn.onclick = () => loadScene(choice.next);
      choicesDiv.appendChild(btn);
    });

    // Fade container back in
    container.style.opacity = "1";

  }, 400);
}

loadScene("start");
