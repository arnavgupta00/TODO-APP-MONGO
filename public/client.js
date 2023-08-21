
//BALL ANIMATION

document.addEventListener("DOMContentLoaded", function () {
  const rainContainer = document.querySelector(".rain");

  for (let i = 0; i < 100; i++) {
    const drop = document.createElement("div");
    drop.className = "drop";
    drop.style.left = Math.random() * 100 + "vw";
    drop.style.animationDuration = Math.random() * 2 + 1 + "s";
    rainContainer.appendChild(drop);
  }
});
//BALL ANIMATION OVER


//COLORCHANGE START
var colorIndex = 0
function changeColor(){
  var list_bg_color =["rgb(0, 147, 155)","#52734D","#648f84","#421c9b","#1e1e1e"];
  var list_text_color =["#393E46","#d2d3bb","#C9F658","#D7BBF5","#79a4b3"];
  const root = document.documentElement;

  colorIndex = (colorIndex + 1) % list_bg_color.length;

  root.style.setProperty('--pageBg', list_bg_color[colorIndex]);

  root.style.setProperty('--textColor', list_text_color[colorIndex]);
}

//COLORCHANGE OVER

rippleContainer.addEventListener('mousemove', function (event) {
    const scrollX = window.scrollX || window.pageXOffset;
    const scrollY = window.scrollY || window.pageYOffset;
    const ripple = document.createElement('div');
    ripple.className = 'ripple';
    ripple.style.left = `${event.clientX + scrollX}px`;
    ripple.style.top = `${event.clientY + scrollY}px`;
    rippleContainer.appendChild(ripple);
    setTimeout(function () {
      ripple.remove();
    }, 1000);
  });
  
  rippleContainer.addEventListener('click', function (event) {

    if (event.target.tagName.toLowerCase() !== 'button') {
      changeColor();
    }
  
   
    const scrollX = window.scrollX || window.pageXOffset;
    const scrollY = window.scrollY || window.pageYOffset;
    const centerX = event.clientX + scrollX;
    const centerY = event.clientY + scrollY;
    const radius = 70;
    const numParticles = 100;
    const angleIncrement = (2 * Math.PI) / numParticles;
  
    for (let i = 0; i < numParticles; i++) {
      const angle = i * angleIncrement;
      const distanceFromCenter = Math.random() * radius;
      const x = centerX + Math.cos(angle) * distanceFromCenter;
      const y = centerY + Math.sin(angle) * distanceFromCenter;
  
      const particle = document.createElement('div');
      particle.className = 'ripple';
      particle.style.left = `${x}px`;
      particle.style.top = `${y}px`;
      rippleContainer.appendChild(particle);
  
      setTimeout(function () {
        particle.remove();
      }, 1000);
  
    }
  });
  
  //RIPPLE OVER