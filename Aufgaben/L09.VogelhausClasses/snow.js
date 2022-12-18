var Vogelhaus;
(function (Vogelhaus) {
    class Snowflake {
        position;
        velocity;
        size;
        constructor(_size) {
            console.log("constructor Snowflakes");
            this.position = new Vogelhaus.Vector(0, 0);
            this.velocity = new Vogelhaus.Vector(0, 0);
            this.velocity.random(100, 200);
            this.size = _size;
        }
        moveBy(_timeslice) {
            console.log("move Snowflakes");
            let canvas = document.querySelector("canvas");
            let crc2 = canvas.getContext("2d");
            let offset = new Vogelhaus.Vector(this.velocity.x, this.velocity.y);
            offset.scale(_timeslice);
            this.position.add(offset);
            if (this.position.x < 0)
                this.position.x += crc2.canvas.width;
            if (this.position.y < 0)
                this.position.y += crc2.canvas.height;
            if (this.position.x > crc2.canvas.width)
                this.position.x -= crc2.canvas.width;
            if (this.position.y > crc2.canvas.height)
                this.position.y -= crc2.canvas.height;
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
    Vogelhaus.Snowflake = Snowflake;
})(Vogelhaus || (Vogelhaus = {}));
//# sourceMappingURL=snow.js.map