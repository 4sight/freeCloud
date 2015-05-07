// $(function(){
  var extractToken = function(hash) {
    var match = hash.match(/access_token=([^&]*)/);
    return !!match && match[1];
  };
 
  var setting =
    {
      'host':     'soundcloud.com',
      'clientId': '8a1b91f39d7f72d9f1ba24540cc5cc4d'
    };
 
  var authHost     = "https://"     + setting.host;
  var resourceHost = "https://api." + setting.host;
 
  var endUserAuthorizationEndpoint = authHost + "/connect";
 
  var token = extractToken(document.location.hash);
  if (token) {
    new Stream();
  } else if (number > 200 || number < 1) {
    window.alert('Please enter a number between 1 and 100');
  } else {
    $('div.authenticate').show();
 
  var authUrl = encodeURI(endUserAuthorizationEndpoint +
      "?response_type=token" +
      "&client_id="    + setting.clientId +
      "&redirect_uri=" + window.location);
 
    console.log(authUrl);

    $("a.connect").attr("href", authUrl);
  }
// });