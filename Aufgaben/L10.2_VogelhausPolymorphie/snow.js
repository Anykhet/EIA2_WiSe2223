var Vogelhaus_Polymorphie;
(function (Vogelhaus_Polymorphie) {
    class Snowflake extends Vogelhaus_Polymorphie.Moveable {
        size;
        constructor(_size, _position) {
            console.log("constructor Snowflakes");
            super(_position);
            if (_position)
                this.position = _position.copy();
            else
                this.position = new Vogelhaus_Polymorphie.Vector(0, 0);
            this.velocity = new Vogelhaus_Polymorphie.Vector(0, 0);
            this.velocity.random(100, 200);
            this.size = _size;
        }
        move(_timeslice) {
            console.log("move Snowflakes");
            super.move(_timeslice);
        }
        draw() {
            console.log("draw Snowflake");
            let canvas = document.querySelector("canvas");
            let crc2 = canvas.getContext("2d");
            let r2 = 2;
            crc2.save();
            crc2.translate(this.position.x, this.position.y);
            crc2.scale(this.size, this.size);
            crc2.fillStyle = "white";
            crc2.beginPath();
            crc2.arc(100, 10, r2, 0, 2 * Math.PI);
            crc2.closePath();
            crc2.fill();
            crc2.restore();
        }
    }
    Vogelhaus_Polymorphie.Snowflake = Snowflake;
})(Vogelhaus_Polymorphie || (Vogelhaus_Polymorphie = {}));
//# sourceMappingURL=snow.js.map