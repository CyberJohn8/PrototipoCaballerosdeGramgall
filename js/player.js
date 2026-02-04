export class Player {
    constructor(element) {
        this.el = element;
        this.x = 150;
        this.speed = 4;
        this.direction = 0;
        this.attacking = false;
    }

    move() {
        this.x += this.direction * this.speed;
        this.el.style.left = this.x + "px";

        this.el.classList.toggle("walk", this.direction !== 0);
    }

    attack(callback) {
        if (this.attacking) return;

        this.attacking = true;
        this.el.classList.add("attack");

        callback();

        setTimeout(() => {
            this.el.classList.remove("attack");
            this.attacking = false;
        }, 200);
    }
}
