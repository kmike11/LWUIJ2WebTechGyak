$(document).ready(function () {
    $('#megjelenit').click(function () {
  
      $.getJSON('LWUIJ2_orarend.json', function (data) {
        $('#orarend').html('<h2>MISKOLCI EGYETEM</h2>');
  
        $('#orarend').append('<p><b>Cím:</b>' + data.cim.code + ' ' + data.cim.city + ' ' + data.cim.street + '</p>');
  
        $('#orarend').append('<p><b>Telefonszám:</b><ul>');
        for (var i = 0; i < data["phone number"].length; i++) {
          $('#orarend').append('<li>' + data["phone number"][i].type + ': ' + data["phone number"][i].number + '</li>');
        }
        $('#orarend').append('</ul></p>');
  
        $("#orarend").append('<h2>MI Órarend 2024 tavasz');
  
        let elsoKurzus = data["KM orarend"].kurzus[0].kurzusnev;
        $('#orarend').append('<p><b>Kurzusnév:</b> ' + elsoKurzus + '</p>');
  
        let elsoOktato = data["KM orarend"].kurzus[0].oktato;
        $('#orarend').append("<p><b>Okatató: </b>" + elsoOktato + "</p>");
  
        let szak = data["KM orarend"].kurzus[0].szak;
        $('#orarend').append("<p><b>Szak: </b>" + szak + "</p>")
  
        elsoKurzus = data["KM orarend"].kurzus[0];
        $('#orarend').append('<p><b>Időpont:</b></p>');
        $('#orarend').append('<b>Nap:</b> ' + elsoKurzus.idopont.nap + '<br>');
        $('#orarend').append('<b>Tól:</b> ' + elsoKurzus.idopont.tol + '<br>');
        $('#orarend').append('<b>Ig:</b> ' + elsoKurzus.idopont.ig + '<br>');
  
        let helyszin = data["KM orarend"].kurzus[0].helyszin;
        $("#orarend").append('<p><b>Helyszin: </b>' + helyszin + "</p>");
      });
    });
  });