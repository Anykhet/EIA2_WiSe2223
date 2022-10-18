var EventInspector;
(function (EventInspector) {
    window.addEventListener("load", handleLoad);
    function handleLoad(_event) {
        let body = document.querySelector(".body");
        let div01 = (document.querySelector(".div01"));
        let div02 = (document.querySelector(".div02"));
        document.addEventListener("mousemove", setInfoBox);
        body.addEventListener("click", logInfo);
        body.addEventListener("keyup", logInfo);
        div01.addEventListener("click", logInfo);
        div01.addEventListener("keyup", logInfo);
        div02.addEventListener("click", logInfo);
        div02.addEventListener("keyup", logInfo);
    }
    function setInfoBox(_event) {
        let x = _event.pageX + 10;
        let y = _event.pageY + 10;
        let info = (document.querySelector(".span01"));
        info.style.left = x + "px";
        info.style.top = y + "px";
    }
    function logInfo(_event) {
        console.log("Event started: " + _event.type);
        console.log("Target: " + _event.target);
        console.log("CurrentTarget: " + _event.currentTarget);
    }
})(EventInspector || (EventInspector = {}));
//# sourceMappingURL=L02.js.map