import { Player } from "./player.js";
import { Enemy } from "./enemy.js";
import { checkHit } from "./level.js";

const player = new Player(document.getElementById("player"));
const enemy = new Enemy(document.getElementById("enemy"));

document.addEventListener("keydown", e => {
    if (e.key === "ArrowRight") player.direction = 1;
    if (e.key === "ArrowLeft") player.direction = -1;

    if (e.key.toLowerCase() === "z") {
        player.attack(() => {
            if (checkHit(player, enemy)) enemy.hit();
        });
    }
});

document.addEventListener("keyup", () => player.direction = 0);

function loop() {
    player.move();
    requestAnimationFrame(loop);
}

loop();
