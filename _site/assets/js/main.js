document.addEventListener(
  "DOMContentLoaded",
  (event) => {
    particlesJS.load("particles-js", "/assets/particles.json", function () {
      console.log("particles.js loaded - callback");
    });
  },
  false
);

const majors = ["Electrical and Computer Engineering", "Computer Science", "Mathematics", "Computer Engineering", "Machine Learning"]
function changeMajor() {
    const majorElement = document.getElementById("index_major");
    let index = 1;
    setInterval(() => {
        majorElement.classList.add("fade-out");
        setTimeout(() => {
            majorElement.textContent = majors[index];
            majorElement.classList.remove("fade-out");
            majorElement.classList.add("fade-in");
        }, 500);
        setTimeout(() => {
            majorElement.classList.remove("fade-in");
        }, 1500)

        index = (index + 1) % majors.length;
    }, 3000);
}

changeMajor();
