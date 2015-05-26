function includeScripts(urls) {
  var head = $("head");

  $.each(urls, function(index, url) {
    head.append('<script type="text/javascript" src="' + url + '"></script>');
  })
}
