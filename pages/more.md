---
layout: default
title: More
permalink: more.html
sitemap: false
estilo: "clean-black"
---
<link href="https://fonts.googleapis.com/css2?family=Nothing+You+Could+Do&display=swap" rel="stylesheet">

<script>
// set endpoint and your access key
http://api.ipstack.com/check
var access_key = '61179f3c66010e5e786d5cb0a9a35585';

// get the API result via jQuery.ajax
$.ajax({
    url: 'http://api.ipstack.com/' + ip + '?access_key=' + access_key,   
    dataType: 'jsonp',
    success: function(json) {

        // output the "capital" object inside "location"
        alert(json.location.capital);

    }
});
</script>
<style>
  #PT { text-align: left; color: blue; display:none;}
  #US { text-align: left; color: blue; display:none;}
</style>

<div id="ip">Loading...2</div>
<div id="country_code"></div>
<div id="PT">THE PT</div>
<div id="US">THE US</div>

<header>
    <a href="{{ "/" | relative_url }}">
    <img src="{{ "/assets/images/skull.gif" | absolute_url }}" alt="OS POSITIVOS" style="max-width:300px;" />
    </a>
</header>
<article class="post" style="margin-bottom:128px;">
  <div class="coluna centre">
    <h3 style="font-family: 'Nothing You Could Do', cursive; font-size:4em;">Não te conformes à lógica dos outros porque não há filosofia que melhor te sirva do que aquela que emana de dentro.</h3>
  </div>
</article>
