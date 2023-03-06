const paths = document.querySelectorAll('svg path');
let step_animation = 0.3;
let start_animation = 0

for(let i = 0; i < paths.length; i++){
  let size_element = Math.ceil(paths[i].getTotalLength());

  paths[i].style.strokeDasharray = `${size_element}`;
  paths[i].style.strokeDashoffset = `${size_element}`;
  paths[i].style.animation = "anim-line 2s ease forwards " + start_animation + 's';
  start_animation += step_animation;
}

const el = document.querySelector('svg')
el.style.animation = "anim-fill 1s ease forwards " + (start_animation + 2)+ 's';
