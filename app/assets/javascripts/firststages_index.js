document.addEventListener('DOMContentLoaded', function() {
  let hero = document.getElementById("first_stage_hero");
  let hang_num = 0;
  let vertical_num = 0;
  let position = "px";

  document.onkeydown = keydown;
  function keydown(e) {
    if(e.keyCode === 39) {
      hang_num += 5;
      let hang_num_position = hang_num + position;
      hero.style.left = hang_num_position;
      if(Math.floor(Math.random() * 150) === 1) {
        location.href = battles_path.href;
      }
    } else if(e.keyCode === 37) {
      hang_num -= 5;
      let hang_num_position = hang_num + position;
      hero.style.left = hang_num_position;
      if(Math.floor(Math.random() * 150) === 1) {
        location.href = battles_path.href;
      }
    } else if(e.keyCode === 40) {
      vertical_num += 5;
      let vertical_num_position = vertical_num + position;
      hero.style.top = vertical_num_position;
      if(Math.floor(Math.random() * 150) === 1) {
        location.href = battles_path.href;
      }
    } else if(e.keyCode === 38) {
      vertical_num -= 5;
      let vertical_num_position = vertical_num + position;
      hero.style.top = vertical_num_position;
      if(Math.floor(Math.random() * 150) === 1) {
        location.href = battles_path.href;
      }
    }
  }
});