export class Enemy {
    constructor(element) {
        this.el = element;
        this.life = 3;
        this.dead = false;
        this.ground = 5;
    }

    hit() {
        if (this.dead) return;

        this.life--;
        this.el.classList.add("hit");

        setTimeout(() => this.el.classList.remove("hit"), 150);

        if (this.life <= 0) {
            this.die();
        }
    }

    die() {
        this.dead = true;
        this.el.classList.add("fall");
    }
}
