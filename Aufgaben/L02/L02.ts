namespace EventInspector {
    window.addEventListener("load", handleLoad);
  
    function handleLoad(_event: Event): void {
      let body: HTMLElement = <HTMLElement>document.querySelector(".body");
      let div01: HTMLDivElement = <HTMLDivElement>(
        document.querySelector(".div01")
      );
      let div02: HTMLDivElement = <HTMLDivElement>(
        document.querySelector(".div02")
      );
  
      document.addEventListener("mousemove", setInfoBox);
      body.addEventListener("click", logInfo);
      body.addEventListener("keyup", logInfo);
      div01.addEventListener("click", logInfo);
      div01.addEventListener("keyup", logInfo);
      div02.addEventListener("click", logInfo);
      div02.addEventListener("keyup", logInfo);
    }
  
    function setInfoBox(_event: MouseEvent): void {
      let x: number = _event.pageX + 10;
      let y: number = _event.pageY + 10;
      let info: HTMLSpanElement = <HTMLSpanElement>(
        document.querySelector(".span01")
      );
  
      info.style.left = x + "px";
      info.style.top = y + "px";
    }
  
    function logInfo(_event: Event): void {
      console.log("Event started: " + _event.type);
      console.log("Target: " + _event.target);
      console.log("CurrentTarget: " + _event.currentTarget);
    }
  }