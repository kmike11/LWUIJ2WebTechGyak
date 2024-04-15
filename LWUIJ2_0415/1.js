$(document).ready(function () {
    
    $("#hideParagraphs").click(function () {
      $("p").hide();
    });
  
    $("#showPage").click(function (event) {
      event.preventDefault();
      $("p").show();
    });
  });