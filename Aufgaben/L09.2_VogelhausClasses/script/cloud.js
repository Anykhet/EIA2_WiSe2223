var Vogelhaus_obj;
(function (Vogelhaus_obj) {
    class Cloud {
        position;
        velocity = new Vogelhaus_obj.Vector(0.3, 0);
        constructor(_position) {
            this.position = _position;
        }
        draw() {
            let gradient = Vogelhaus_obj.crc2.createRadialGradient(0, 0, 0, 0, 0, 20);
            gradient.addColorStop(0, "HSLA(0, 100%, 100%, 0.8)");
            gradient.addColorStop(1, "HSLA(0, 100%, 100%, 0.2)");
            Vogelhaus_obj.crc2.fillStyle = gradient;
            Vogelhaus_obj.crc2.fill();
            Vogelhaus_obj.crc2.save();
            Vogelhaus_obj.crc2.translate(this.position.x, this.position.y);
            Vogelhaus_obj.crc2.beginPath();
            Vogelhaus_obj.crc2.arc(0, 0, 20, 0, 2 * Math.PI);
            Vogelhaus_obj.crc2.fill();
            Vogelhaus_obj.crc2.translate(10, 5);
            Vogelhaus_obj.crc2.arc(0, 0, 30, 0, 2 * Math.PI);
            Vogelhaus_obj.crc2.fill();
            Vogelhaus_obj.crc2.translate(35, 7);
            Vogelhaus_obj.crc2.arc(0, 0, 25, 0, 2 * Math.PI);
            Vogelhaus_obj.crc2.fill();
            Vogelhaus_obj.crc2.translate(20, 10);
            Vogelhaus_obj.crc2.arc(0, 0, 30, 0, 2 * Math.PI);
            Vogelhaus_obj.crc2.fill();
            Vogelhaus_obj.crc2.translate(-20, 10);
            Vogelhaus_obj.crc2.arc(0, 0, 30, 0, 2 * Math.PI);
            Vogelhaus_obj.crc2.fill();
            Vogelhaus_obj.crc2.translate(-30, 5);
            Vogelhaus_obj.crc2.arc(0, 0, 30, 0, 2 * Math.PI);
            Vogelhaus_obj.crc2.fill();
            Vogelhaus_obj.crc2.translate(-40, 0);
            Vogelhaus_obj.crc2.arc(0, 0, 30, 0, 2 * Math.PI);
            Vogelhaus_obj.crc2.fill();
            Vogelhaus_obj.crc2.translate(20, -5);
            Vogelhaus_obj.crc2.arc(0, 0, 30, 0, 2 * Math.PI);
            Vogelhaus_obj.crc2.fill();
            Vogelhaus_obj.crc2.translate(-10, -10);
            Vogelhaus_obj.crc2.arc(0, 0, 30, 0, 2 * Math.PI);
            Vogelhaus_obj.crc2.fill();
            Vogelhaus_obj.crc2.restore();
        }
        update() {
            if (this.position.x < 0)
                this.position.x += Vogelhaus_obj.canvas.width;
            if (this.position.x > Vogelhaus_obj.canvas.width)
                this.position.x -= Vogelhaus_obj.canvas.width;
            this.position.x += this.velocity.x;
            this.draw();
        }
    }
    Vogelhaus_obj.Cloud = Cloud;
})(Vogelhaus_obj || (Vogelhaus_obj = {}));
//# sourceMappingURL=cloud.js.map