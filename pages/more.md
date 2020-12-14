---
layout: default
title: More
permalink: more.html
sitemap: false
estilo: "clean-black"
---
<link href="https://fonts.googleapis.com/css2?family=Nothing+You+Could+Do&display=swap" rel="stylesheet">

<script>
  $.get("https://freegeoip.app/json/", function (response) {
      $("#ip").html("IP: " + response.ip);
      $("#country_code").html(response.country_code);
      if(response.country_code=='PT'||response.country_code=='US'){
      	document.getElementById(response.country_code).style.display = "block";
  	}
  }, "jsonp");
</script>
<style>
  #PT { text-align: left; color: blue; display:none;}
  #US { text-align: left; color: blue; display:none;}
</style>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.1/jquery.min.js"></script>
<div id="ip">Loading...</div>
<div id="country_code"></div>
<div id="PT">THE PT</div>
<div id="US">THE US</div>

<script src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.1/jquery.min.js"></script>

<header>
    <a href="{{ "/" | relative_url }}">
    <img src="{{ "/assets/images/skull.gif" | absolute_url }}" alt="OS POSITIVOS" style="max-width:300px;" />
    </a>
</header>
<article class="post" style="margin-bottom:128px;">
  <div class="coluna centre">
    <h3 style="font-family: 'Nothing You Could Do', cursive;font-size:4em;">Não te conformes à lógica dos outros porque não há filosofia que melhor te sirva do que aquela que emana de dentro.</h3>
  </div>
</article>
