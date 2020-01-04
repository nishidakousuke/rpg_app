document.addEventListener("DOMContentLoaded", function() {
  let hero_text = document.getElementById("hero_name_define");
  let hero_submit = document.getElementById("hero_name_define_submit");
  hero_text.addEventListener("change", function() {
    if(hero_text.value.length > 0) {
      hero_submit.style.display = "block";
    } else {
      hero_submit.style.display = "none";
    }
  });
});

