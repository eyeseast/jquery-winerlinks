;(function($){
  $.fn.winerlinks = function(options) {
    
    var options = $.extend({
      selector: 'p',
      title: 'Link to this paragraph',
      className: 'permalink',
      linkText: ' #'
    }, options);
    
    this.children(options.selector).each(function(i) {
      var tag = this.tagName.toLowerCase();
      var e = $(this);
      e.attr('id', tag + '-' + i);
      
      var a = $('<a/>').attr('title', options.title)
        .attr('class', options.className)
        .attr('href', '#'+tag+'-'+i)
        .text(options.linkText);
      
      e.append(a);
    });
    
    return this;
  };
})(jQuery);