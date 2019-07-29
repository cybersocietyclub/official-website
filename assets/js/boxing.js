var Boxlayout = function() {

  var wrapper = document.body,
      sections = Array.from(document.querySelectorAll('.gallery--grid-section')),
      closeButtons = Array.from(document.querySelectorAll('.gallery--grid-section-closed')),
      header = document.querySelector('.header'),
      sideNav = document.querySelector('.l-side-nav'),
      banner = document.querySelector('.gallery--banner'),
      expandedClass = 'gallery--grid-section-is-expanded',
      hasExpandedClass = 'gallery--grid-section-has-expanded-item';

  return { init : init };

  function init() {
    _initEvents();
  }

  function _initEvents() {    
    sections.forEach(function(element) {
      element.onclick = function() {
        _openSection(this);
      };
    });
    closeButtons.forEach(function(element) {
      element.onclick = function(element) {
        element.stopPropagation();
        _closeSection(this.parentElement);
      };
    });
  }

  function _openSection(element) {
    if ( ! element.classList.contains(expandedClass) ) {
      element.classList.add(expandedClass);
      wrapper.classList.add(hasExpandedClass);
      header.style.display = 'none';
      banner.style.display = 'none';
      if(screen.width > 1180) {
        sideNav.style.display = 'none';
      }
    }
  }

  function _closeSection(element) {
    if ( element.classList.contains(expandedClass) ) {
      element.classList.remove(expandedClass);
      wrapper.classList.remove(hasExpandedClass);
      header.style.display = 'flex';
      banner.style.display = 'block';
      if(screen.width > 1180) {
        sideNav.style.display = 'flex';
      }
    }
  }

}();

Boxlayout.init();