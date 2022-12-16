var Vogelhaus_obj;
(function (Vogelhaus_obj) {
    class Vector {
        x;
        y;
        constructor(_x, _y) {
            this.set(_x, _y);
        }
        set(_x, _y) {
            this.x = _x;
            this.y = _y;
        }
        scale(_factor) {
            this.x *= _factor;
            this.y *= _factor;
        }
        add(_addend) {
            this.x += _addend.x;
            this.y += _addend.y;
        }
    }
    Vogelhaus_obj.Vector = Vector;
})(Vogelhaus_obj || (Vogelhaus_obj = {}));
//# sourceMappingURL=vector.js.map