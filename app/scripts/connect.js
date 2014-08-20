var Connect = Backbone.View.extend({
  el: 'body',

  initialize: function (){
    this.render();
    },

  render: function(){
    $('span#welcome').hide();
    $('span#number').hide();
    $('div.authenticate').mouseenter(function(){
        $('div.authenticate').addClass('connectHover');
      }
    );
    $('div.authenticate').mouseleave(function(){
      $('div.authenticate').removeClass('connectHover');
      }
    );
  }
});