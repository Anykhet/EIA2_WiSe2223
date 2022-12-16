namespace Vogelhaus_obj {

    export class Birds {

        position: Vector;
        velocity: Vector;
        scale: number;

        constructor(_position: Vector, _velocity: Vector, _scale: number) {

            this.position = _position;
            this.velocity = _velocity;
            this.scale = _scale;
        }

        draw(): void {

            let positionx: number = 800;
            let positiony: number = 339;


            //Unterkörper
            let radius2: number = 12;
            crc2.beginPath();
            crc2.arc(positionx, positiony, radius2, 0, 2 * Math.PI);
            crc2.fill();
            crc2.stroke();
            crc2.closePath();

            //Kopf
            let radius: number = 10;
            crc2.beginPath();
            crc2.arc(positionx - 10, positiony - 10, radius, 0, 2 * Math.PI);
            crc2.fill();
            crc2.stroke();
            crc2.closePath();



            //Schnabel
            crc2.beginPath();
            crc2.moveTo(positionx - 20, positiony - 10);
            crc2.lineTo(positionx - 25, positiony - 5);
            crc2.stroke();
            crc2.closePath();

            crc2.beginPath();
            crc2.moveTo(positionx - 19, positiony - 5);
            crc2.lineTo(positionx - 25, positiony - 5);
            crc2.stroke();
            crc2.closePath();

            //Bein
            crc2.beginPath();
            crc2.moveTo(positionx, positiony + 5);
            crc2.lineTo(positionx, positiony + 20);
            crc2.stroke();
            crc2.closePath();

            //Fuß
            crc2.beginPath();
            crc2.moveTo(positionx, positiony + 20);
            crc2.lineTo(positionx - 5, positiony + 20);
            crc2.stroke();
            crc2.closePath();


        }


    update(): void { 

        if (this.position.x < 0)
            this.position.x += canvas.width;
        if (this.position.y < 0)
            this.position.y += canvas.height;
        if (this.position.x > canvas.width)
            this.position.x -= canvas.width;
        if (this.position.y > canvas.height)
            this.position.y -= canvas.height;

        this.position.x += this.velocity.x;
        this.position.y += this.velocity.y;

        this.draw();
    }

}}
