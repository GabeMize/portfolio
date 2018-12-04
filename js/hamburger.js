      /*
       * Open the drawer when the menu ison is clicked.
       */
      var hamburger = document.querySelector('#hamburger');
      var main = document.querySelector('main');
      var menu = document.querySelector('#menu');

      hamburger.addEventListener('click', function(e) {
        menu.classList.toggle('open');
        e.stopPropagation();
      });
      main.addEventListener('click', function() {
        menu.classList.remove('open');
      });