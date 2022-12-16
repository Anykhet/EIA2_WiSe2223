var Vogelhaus_obj;
(function (Vogelhaus_obj) {
    class MountainRange {
        position;
        min;
        max;
        colorLow;
        colorHigh;
        constructor(_position, _min, _max, _colorLow, _colorHigh) {
            this.position = _position;
            this.min = _min;
            this.max = _max;
            this.colorLow = _colorLow;
            this.colorHigh = _colorHigh;
        }
        draw() {
            let stepMin = 10;
            let stepMax = 20;
            let x = 0;
            Vogelhaus_obj.crc2.save();
            Vogelhaus_obj.crc2.translate(this.position.x, this.position.y);
            Vogelhaus_obj.crc2.beginPath();
            Vogelhaus_obj.crc2.moveTo(0, 0);
            Vogelhaus_obj.crc2.lineTo(0, -this.max);
            do {
                x += stepMin + Vogelhaus_obj.randomNumber(stepMin, stepMax);
                let y = -Vogelhaus_obj.randomNumber(this.min, this.max);
                Vogelhaus_obj.crc2.lineTo(x, y);
            } while (x < Vogelhaus_obj.canvas.width);
            Vogelhaus_obj.crc2.lineTo(x, 0);
            Vogelhaus_obj.crc2.closePath();
            let gradient = Vogelhaus_obj.crc2.createLinearGradient(0, 0, 0, -this.max);
            gradient.addColorStop(0, this.colorLow);
            gradient.addColorStop(0.9, this.colorHigh);
            Vogelhaus_obj.crc2.fillStyle = gradient;
            Vogelhaus_obj.crc2.fill();
            Vogelhaus_obj.crc2.restore();
        }
    }
    Vogelhaus_obj.MountainRange = MountainRange;
})(Vogelhaus_obj || (Vogelhaus_obj = {}));
//# sourceMappingURL=mountain.js.map