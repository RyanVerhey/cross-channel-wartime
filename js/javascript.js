(function() {
  var atWar, openInNewTab, showWarMessage;

  openInNewTab = function(url) {
    var win;
    win = window.open(url, '_blank');
    return win.focus();
  };

  atWar = function(year) {
    var warText;
    year = parseInt(year);
    if (year < 0) {
      year = (year * -1) + " BCE";
    }
    warText = wars[year];
    return showWarMessage(warText, year);
  };

  showWarMessage = function(warText, year) {
    $("#war-message").removeClass("hidden");
    if (isNaN(year) && typeof year !== "string") {
      return $("#war-message").html("<p>That's not a valid year! Try typing a year above.</p>");
    } else if (warText !== undefined) {
      return $("#war-message").html("<p>Yes, in <year>" + year + "</year> England and France <b>WERE</b> at war.</p><p style='font-size:small;'>" + warText + "</p>");
    } else if (year > new Date().getFullYear()) {
      return $("#war-message").html("<p>The year <year>" + year + "</year> is still in the future! How am I supposed to know?</p>");
    } else {
      return $("#war-message").html("<p>No, in <year>" + year + "</year> England and France <b>WERE NOT</b> at war.</p>");
    }
  };

  $(function() {
    $("#year-input").submit(function(e) {
      e.preventDefault();
      atWar($("#year").val());
      $("#year").val("");
      return $("#year").focus();
    });
    $("#ryan button").click(function(e) {
      return openInNewTab("http://ryanverhey.com");
    });
    return $("#history button").click(function(e) {
      return openInNewTab("http://missedinhistory.com");
    });
  });

}).call(this);
