const epicMix = [
  "Get Back Up Again",
  "Try Everything",
  "The Climb",
  "A Million Dreams",
  "Unwritten",
  "On Top of the World",
  "Brave",
];

const mixList = document.querySelector(".mix");
const button = document.querySelector(".show-list");
const total = document.querySelector(".total");

button.addEventListener("click", function () {
  mixList.classList.remove("hide");
  button.classList.add("hide");
  mixInfo(epicMix);
});

total.innerText = `${epicMix.length} growth mindset songs!`;
const mixInfo = function (mix) {
  mix.forEach(function (song, index) {
    const li = document.createElement("li");
    li.classList.add("song");
    li.innerHTML = `<span class = "song-number">#${index + 1}</span> ${song}`;
    mixList.append(li);
  });
};
