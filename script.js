function main() {
    var elements = document.querySelectorAll(".wrapper")[0];
    [].slice.apply(elements.children).forEach(function (panelElement) {
      var panel = new Panel(panelElement);
      panel.init();
    });
  }
  
  main();
