export function checkHit(player, enemy) {
    const pX = player.el.offsetLeft;
    const eX = enemy.el.offsetLeft;

    return Math.abs(pX - eX) < 60;
}
