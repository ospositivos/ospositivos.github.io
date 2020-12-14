---
layout: default
title: More
permalink: more.html
sitemap: false
estilo: "clean-black"
---
<link href="https://fonts.googleapis.com/css2?family=Nothing+You+Could+Do&display=swap" rel="stylesheet">

<script
			  src="https://code.jquery.com/jquery-3.5.1.slim.min.js"
			  integrity="sha256-4+XzXVhsDmqanXGHaHvgh1gMQKX40OUvDEBTu8JcmNs="
			  crossorigin="anonymous"></script>
<script>
$.get("http://ipinfo.io", function (response) {
    $("#ip").html("IP: " + response.ip);
    $("#address").html("Location: " + response.city + ", " + response.region);
    $("#details").html(JSON.stringify(response, null, 4));
}, "jsonp");
</script>

<h3>Client side IP geolocation using <a href="http://ipinfo.io">ipinfo.io</a></h3>

<hr/>
<div id="ip"></div>
<div id="address"></div>
<hr/>Full response: <pre id="details"></pre>

<header>
    <a href="{{ "/" | relative_url }}">
    <img src="{{ "/assets/images/skull.gif" | absolute_url }}" alt="OS POSITIVOS" style="max-width:300px;" />
    </a>
</header>
<article class="post" style="margin-bottom:128px;">
  <div class="coluna centre">
    <h3 style="font-family: 'Nothing You Could Do', cursive; font-size:3.3em;">Não te conformes à lógica dos outros porque não há filosofia que melhor te sirva do que aquela que emana de dentro.</h3>
  </div>
</article>
