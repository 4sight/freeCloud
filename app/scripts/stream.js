var Stream = Backbone.View.extend({
  el: 'body',

  events: {
    'click span#disconnect' : 'connect'
  },

  initialize: function (){
    $('div.authenticated').show();
    $('span.token').text(token);
    $.ajax({
        url: resourceHost + '/me',
        data: {
          client_id: setting.clientId
        },
        beforeSend: function (xhr) {
          xhr.setRequestHeader('Authorization', "OAuth " + token);
          xhr.setRequestHeader('Accept',        "application/json");
        },
        success: function (response) {
          var container = $('span.user');
          if (response) {
            var spacesRemoved = response.username.replace(/\s+/g, '-');
            container.append('<a href="https://soundcloud.com/' + spacesRemoved + '">' + response.username + '</a>');
          } else {
            container.text('An error occurred.');
          }
        }
      })
    this.render();
    },

  render: function(){
    $('div#home').hide();
    SC.initialize({ client_id: setting.clientId });
    console.log(setting.clientId);
    $.ajax({
      url: resourceHost + '/me',
      data: {
        client_id: setting.clientId
      },
      beforeSend: function (xhr) {
        xhr.setRequestHeader('Authorization', "OAuth " + token);
        xhr.setRequestHeader('Accept',        "application/json");
      },
      success: function (response) {
          var nothing;
          return response.username;
      }
    });
    SC.get('/me/activities?oauth_token=' + token, {limit: 400}, function(tracks){
      var track = tracks;
      console.log(track);
      var examined = 0;
      var shown = 0;
      while (shown < 40) {
        if (track.collection[examined].origin.downloadable == true) {
          SC.oEmbed(track.collection[examined].origin.uri, {}, function (oembed) {
            $('#wrapper').append('<div class="sound">' + oembed.html + '</div>');
          });
          shown++;
          } else {}
        examined++;
        }
        console.log(examined + ' tracks scanned');
      });
    }
  });