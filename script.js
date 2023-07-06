class Panel{
  elm;
  maxClicks = 0;
  currentClicksCount = 0;
  constructor(element){
    this.elm = element;
    this.maxClicks = parseInt(element.dataset.clicks, 10);
  }

  init() {
      function onClickHandler(el) {
        if(this.currentClicksCount >= this.maxClicks){
          el.target.removeEventListener('click', onClickHandler)
        } else {
          this.currentClicksCount++;
          document.querySelector(`span.${el.target.className}-counter`).innerHTML = this.currentClicksCount;
        }
      }

      this.elm.addEventListener('click', onClickHandler.bind(this))
  }
}

function main() {
    var elements = document.querySelectorAll(".wrapper")[0];
    [].slice.apply(elements.children).forEach(function (panelElement) {
      var panel = new Panel(panelElement);
      panel.init();
  });
}
  
main();




