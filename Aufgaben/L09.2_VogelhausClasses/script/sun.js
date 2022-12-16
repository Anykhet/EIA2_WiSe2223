var Vogelhaus_obj;
(function (Vogelhaus_obj) {
    class Sun {
        position;
        constructor(_position) {
            this.position = _position;
        }
        draw() {
            let r1 = Vogelhaus_obj.canvas.width * 0.02;
            let r2 = Vogelhaus_obj.canvas.width * 0.06;
            let gradient = Vogelhaus_obj.crc2.createRadialGradient(0, 0, r1, 0, 0, r2);
            gradient.addColorStop(0, "HSLA(60, 100%, 90%, 1)");
            gradient.addColorStop(1, "HSLA(60, 100%, 60%, 0)");
            Vogelhaus_obj.crc2.save();
            Vogelhaus_obj.crc2.translate(this.position.x, this.position.y);
            Vogelhaus_obj.crc2.fillStyle = gradient;
            Vogelhaus_obj.crc2.arc(0, 0, r2, 0, 2 * Math.PI);
            Vogelhaus_obj.crc2.fill();
            Vogelhaus_obj.crc2.restore();
        }
    }
    Vogelhaus_obj.Sun = Sun;
})(Vogelhaus_obj || (Vogelhaus_obj = {}));
//# sourceMappingURL=sun.js.map