var Vogelhaus_obj;
(function (Vogelhaus_obj) {
    class Birds {
        position;
        velocity;
        scale;
        constructor(_position, _velocity, _scale) {
            this.position = _position;
            this.velocity = _velocity;
            this.scale = _scale;
        }
        draw() {
            let positionx = 800;
            let positiony = 339;
            //Unterkörper
            let radius2 = 12;
            Vogelhaus_obj.crc2.beginPath();
            Vogelhaus_obj.crc2.arc(positionx, positiony, radius2, 0, 2 * Math.PI);
            Vogelhaus_obj.crc2.fill();
            Vogelhaus_obj.crc2.stroke();
            Vogelhaus_obj.crc2.closePath();
            //Kopf
            let radius = 10;
            Vogelhaus_obj.crc2.beginPath();
            Vogelhaus_obj.crc2.arc(positionx - 10, positiony - 10, radius, 0, 2 * Math.PI);
            Vogelhaus_obj.crc2.fill();
            Vogelhaus_obj.crc2.stroke();
            Vogelhaus_obj.crc2.closePath();
            //Schnabel
            Vogelhaus_obj.crc2.beginPath();
            Vogelhaus_obj.crc2.moveTo(positionx - 20, positiony - 10);
            Vogelhaus_obj.crc2.lineTo(positionx - 25, positiony - 5);
            Vogelhaus_obj.crc2.stroke();
            Vogelhaus_obj.crc2.closePath();
            Vogelhaus_obj.crc2.beginPath();
            Vogelhaus_obj.crc2.moveTo(positionx - 19, positiony - 5);
            Vogelhaus_obj.crc2.lineTo(positionx - 25, positiony - 5);
            Vogelhaus_obj.crc2.stroke();
            Vogelhaus_obj.crc2.closePath();
            //Bein
            Vogelhaus_obj.crc2.beginPath();
            Vogelhaus_obj.crc2.moveTo(positionx, positiony + 5);
            Vogelhaus_obj.crc2.lineTo(positionx, positiony + 20);
            Vogelhaus_obj.crc2.stroke();
            Vogelhaus_obj.crc2.closePath();
            //Fuß
            Vogelhaus_obj.crc2.beginPath();
            Vogelhaus_obj.crc2.moveTo(positionx, positiony + 20);
            Vogelhaus_obj.crc2.lineTo(positionx - 5, positiony + 20);
            Vogelhaus_obj.crc2.stroke();
            Vogelhaus_obj.crc2.closePath();
        }
        update() {
            if (this.position.x < 0)
                this.position.x += Vogelhaus_obj.canvas.width;
            if (this.position.y < 0)
                this.position.y += Vogelhaus_obj.canvas.height;
            if (this.position.x > Vogelhaus_obj.canvas.width)
                this.position.x -= Vogelhaus_obj.canvas.width;
            if (this.position.y > Vogelhaus_obj.canvas.height)
                this.position.y -= Vogelhaus_obj.canvas.height;
            this.position.x += this.velocity.x;
            this.position.y += this.velocity.y;
            this.draw();
        }
    }
    Vogelhaus_obj.Birds = Birds;
})(Vogelhaus_obj || (Vogelhaus_obj = {}));
//# sourceMappingURL=birds.js.map