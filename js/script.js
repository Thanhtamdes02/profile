var Email = { send: function (a) { return new Promise(function (n, e) { a.nocache = Math.floor(1e6 * Math.random() + 1), a.Action = "Send"; var t = JSON.stringify(a); Email.ajaxPost("https://smtpjs.com/v3/smtpjs.aspx?", t, function (e) { n(e) }) }) }, ajaxPost: function (e, n, t) { var a = Email.createCORSRequest("POST", e); a.setRequestHeader("Content-type", "application/x-www-form-urlencoded"), a.onload = function () { var e = a.responseText; null != t && t(e) }, a.send(n) }, ajax: function (e, n) { var t = Email.createCORSRequest("GET", e); t.onload = function () { var e = t.responseText; null != n && n(e) }, t.send() }, createCORSRequest: function (e, n) { var t = new XMLHttpRequest; return "withCredentials" in t ? t.open(e, n, !0) : "undefined" != typeof XDomainRequest ? (t = new XDomainRequest).open(e, n) : t = null, t } };

document.querySelector('#form-submit').addEventListener('submit', function(event) {
    event.preventDefault();
   
    var from = document.getElementById('email').value;
    var subject = document.getElementById('usr').value;
    var body = document.getElementById('message').value;
   
    Email.send({
      SecureToken: "2220685e-6f33-4263-8d31-e0aacb40d826",
      To: 'thanhtamdes02@gmail.com',
      From: 'thanhtamdes02@gmail.com',
      Subject: `${subject} - Contact you from your Portfolio`,
      Body: `${body} || From: ${from}`
    }).then(
      message => alert('Đã gửi mail thành công!!!')
    );
  });
