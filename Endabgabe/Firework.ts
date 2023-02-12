namespace Feuerwerk {

    
    export interface FireworkConfig {
        color: string;
        numberOfParticles: number;
        positionX: number;
        positionY: number;
        speed: number;
    }

    export class Firework {
        particles: Particle[];
        createdParticles: boolean;
        particleConfig: ParticleConfig;
        
        counter: number; 
        crc2: CanvasRenderingContext2D;
    
        color: string;
        flightDuration: number;
        numberOfParticles: number;
    
        position: Vector;
        speed: number;
    

        
        constructor(config: FireworkConfig, particleConfig: ParticleConfig) {
            this.counter = 0;
            let canvas: HTMLCanvasElement | null = document.querySelector("canvas");
            this.crc2 = <CanvasRenderingContext2D>canvas.getContext("2d");

            this.color = config.color;
            this.numberOfParticles = config.numberOfParticles;
            this.position = new Vector(config.positionX, config.positionY);
            this.speed = config.speed;

            this.particleConfig = particleConfig;
            this.createdParticles = false;
            this.particles = [];

           
            if (this.color == "#000000") {
                this.color = "#" + Math.floor(Math.random() * 8000000 + 8000000).toString(16);
            }
        }

        draw(): void {
            
                this.drawExplosion();

        }

        update(): void {
            

                this.updateParticles();

            this.counter++;
        }


         drawExplosion(): void {
            for (let particle of this.particles) {
                particle.draw();
            }
        }

         updateParticles(): void {
            
            if (!this.createdParticles) {
                for (let i: number = 0; i < this.numberOfParticles; i++) {
                    
                    let startVelocity: Vector = new Vector(Math.random() * this.particleConfig.width - this.particleConfig.width / 2, Math.random() * 35 - 10); 

                    
                    this.particles.push( new Particle(this.particleConfig, this.position.copy(), startVelocity));
                }
                this.createdParticles = true;
                return;
            }

           
            for (let i: number = this.particles.length - 1; i >= 0; i--) {
               
                if (!this.particles[i].alive) {
                    this.particles.splice(i, 1);
                    continue;
                }
                this.particles[i].update();
            }
        }
    }
    
}