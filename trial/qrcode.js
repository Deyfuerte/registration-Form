function htmlEncode(value) {
    return $('<div/>').text(value).html();
  }

  function calculateAge(birthday) {
    var today = new Date();
    var birthDate = new Date(birthday);
    var age = today.getFullYear() - birthDate.getFullYear();
    var monthDiff = today.getMonth() - birthDate.getMonth();
    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }
    return age;
  }

  $(function () {
    // Specify an onclick function
    // for the generate button
    $('#generate').click(function () {
      // Generate the link that would be
      // used to generate the QR Code
      // with the given data
      var age = calculateAge($('#birthday').val());
      let finalURL =
        'https://chart.googleapis.com/chart?cht=qr&chl=' +
        encodeURIComponent(
          $('#surname').val() + ", " + $('#name').val() + "\n" +
          age + " years old" + "\n" +
          $('#email').val() + "\n" +
          $('#phone').val() + "\n" +
          $('#gender').val() + "\n" +
          $('#address').val()
        ) +
        '&chs=160x160&chld=L|0';
      // Replace the src of the image with
      // the QR code image
      $('.qr-code').attr('src', finalURL);
    });
  });