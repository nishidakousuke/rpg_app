$(document).on('turbolinks:load', function() {
  // ロード後に、勇者とモンスターのステータスを取得しておく
  let combat = document.getElementById("combat");
  let hero_attack = parseInt(combat.getAttribute("data-attack"));
  let hero_defence = parseInt(combat.getAttribute("data-defence"));
  let battle_monster_box = document.getElementById("battle_monster_box");
  let monster_attack = parseInt(/\d+/.exec(battle_monster_box.getAttribute("data-attack")));
  let monster_attack_name = /\D+/.exec(battle_monster_box.getAttribute("data-attack"))[0];
  let monster_defence = parseInt(battle_monster_box.getAttribute("data-defence"));
  let random = (Math.floor( Math.random() * 16 ) + 85) / 100;

  // ロード後に、モンスターの名前をフッターに表示する
  let fotter = document.getElementById("battle_footer");
  let monster_name = document.getElementById("battle_monster_name_text");
  let hero_name = document.getElementById("battle_hero_box_name_text");
  let p = document.createElement("p");
  p.innerHTML = `${monster_name.textContent}が現れた！`;
  fotter.appendChild(p);

  // ロードの2秒後にたたかうコマンドを表示させる
  let battle_hero_box = document.getElementById("battle_hero_box");
  setTimeout(function() {
    fotter.removeChild(p);
    battle_hero_box.style.display = "block";
  }, 3000);

  // たたかうにマウスカーソルを載せると色が灰色に変化する
  combat.addEventListener("mouseover", function() {
    combat.style.backgroundColor = "gray";
  }, false);
  combat.addEventListener("mouseout", function() {
    combat.style.backgroundColor = "";
  }, false);

  // たたかうがクリックされた際の関数
  function heroAttack() {
    let damage = damageCalculation(hero_attack, monster_defence);
    battle_hero_box.style.display = "none";
    let p1 = document.createElement("p");
    p1.innerHTML = `${hero_name.textContent}の攻撃！<br>
    ${hero_name.textContent}は${monster_name.textContent}に${damage}のダメージを与えた！`;
    fotter.appendChild(p1);
    let monster_hp_obj = document.getElementById("battle_monster_hp_text");
    let monster_hp = parseInt(/\d+/.exec(monster_hp_obj.textContent)[0]);
    let after_attacked_monster_hp = monster_hp - damage;
    if(after_attacked_monster_hp > 0) {
      monster_hp_obj.innerHTML = `H ${after_attacked_monster_hp}`;
      monsterAttack(p1);
    } else {
      monster_hp_obj.innerHTML = `H 0`;
      monsterDefect(p1);
    }
  }

  // モンスター側の攻撃
  function monsterAttack(p1) {
    let promise = new Promise(function(resolve, reject) {
      setTimeout(function() {
        let damage = damageCalculation(monster_attack, hero_defence);
        fotter.removeChild(p1);
        let p2 = document.createElement("p");
        p2.innerHTML = `${monster_name.textContent}の${monster_attack_name}！<br>
        ${hero_name.textContent}は${damage}のダメージを受けた！`;
        fotter.appendChild(p2);
        let hero_hp_obj = document.getElementById("battle_hero_box_status_hp");
        let hero_hp = parseInt(/\d+/.exec(hero_hp_obj.textContent)[0]);
        hero_hp_obj.innerHTML = `H ${hero_hp - damage}`;
        resolve(p2);
      }, 3000);
    });
    promise.then(function(p2) {
      setTimeout(function() {
        fotter.removeChild(p2);
        battle_hero_box.style.display = "block";
      }, 3000);
    });
  }

  // モンスターを倒した後の関数
  function monsterDefect(p1) {
    let promise = new Promise(function(resolve, reject) {
      setTimeout(function() {
        fotter.removeChild(p1);
        let p3 = document.createElement("p");
        p3.innerHTML = `${monster_name.textContent}を倒した！`;
        fotter.appendChild(p3);
        resolve();
      }, 3000);
    });
    promise.then(function() {
      setTimeout(function() {
        let back_field = document.getElementById("back_field");
        let href = back_field.href;
        location.href = href;
      }, 3000);
    });
  }

  // 戦闘でのダメージを計算する関数
  function damageCalculation(attack, defence) {
    return Math.floor(((attack - defence) + 100) / 5 * random );
  }

  // たたかうをクリックすると発火
  combat.addEventListener("click", heroAttack, false);
});