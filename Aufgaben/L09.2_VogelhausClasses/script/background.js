var Vogelhaus_obj;
(function (Vogelhaus_obj) {
    class Background {
        draw() {
            let horizon = Vogelhaus_obj.canvas.height * 0.38;
            // sky color
            let gradientSky = Vogelhaus_obj.crc2.createLinearGradient(0, 0, 0, horizon);
            gradientSky.addColorStop(0, "skyblue");
            gradientSky.addColorStop(1, "white");
            Vogelhaus_obj.crc2.fillStyle = gradientSky;
            Vogelhaus_obj.crc2.fillRect(0, 0, Vogelhaus_obj.canvas.width, horizon);
            // meadow color
            let gradientMeadow = Vogelhaus_obj.crc2.createLinearGradient(0, horizon, 0, Vogelhaus_obj.canvas.height);
            gradientMeadow.addColorStop(0, "white");
            gradientMeadow.addColorStop(1, "grey");
            Vogelhaus_obj.crc2.fillStyle = gradientMeadow;
            Vogelhaus_obj.crc2.fillRect(0, horizon, Vogelhaus_obj.canvas.width, Vogelhaus_obj.canvas.height);
        }
    }
    Vogelhaus_obj.Background = Background;
})(Vogelhaus_obj || (Vogelhaus_obj = {}));
//# sourceMappingURL=background.js.map