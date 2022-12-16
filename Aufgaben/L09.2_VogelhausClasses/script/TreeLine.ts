namespace Vogelhaus_obj {

    export class TreeLine {

        min: number;
        max: number;

        constructor(_min: number, _max: number) {
            this.min = _min;
            this.max = _max;
        }

        draw(): void { 

           
            let stepMin: number = 5;
            let stepMax: number = 15;
            let x: number = 0;

            
            do {
                let y: number = randomNumber(this.min, this.max);
                crc2.save();
                crc2.translate(x, y + (canvas.height * 0.39));

                let treeTrunk: number = -30; 
                let treeTop: number = -150; 
                let treeColor: string[] = ["#d2d2d2", "#e7e7e7", "#fff"]; 

                let treeSize: number = randomNumber(0.15, 0.2);

                crc2.scale(treeSize, treeSize);

                
                crc2.fillStyle = "#6d502b"; 
                crc2.fillRect(0, 0, 15, treeTrunk);

               
                for (let color: number = 0; color < 3; color++) {

                    
                    crc2.beginPath();
                    crc2.moveTo(-50, treeTrunk);
                    crc2.lineTo(60, treeTrunk);
                    crc2.lineTo(10, treeTop);
                    crc2.closePath();
                    crc2.fillStyle = treeColor[color];
                    crc2.fill();

                    
                    treeTrunk += -40;
                    treeTop += -40;
                }

                x += stepMin + randomNumber(stepMin, stepMax);
                crc2.restore();

            } while (x < canvas.width);
        }
    }
}