---
layout: default
title: Listagem geral
permalink: directorio.html
sitemap: false
estilo: "homepage clean-black"
---
<header class="directorio">
</header>

<article class="post">
  <div class="coluna">

    <!-- tags -->
    <div class="directorio">

      <!-- featured -->
      {% for post in site.posts limit:1 %}
      <ul class="lista-artigos">
        <li>
          <small>
            {{ post.date | date: '%d-%m-%Y' }}
          </small>
          <a href="{{ post.url | relative_url }}">
            {{ post.title }}
          </a>
        </li>
      </ul>
      {% if post.sumario %}
      <div class="info coluna">
        <blockquote>
          {{ post.sumario | strip_html | truncatewords:75 }}
        </blockquote>
      </div>
      {% endif %}
    {% endfor %}

    <!-- latest -->
    <ul class="lista-artigos">
      {% for post in site.posts offset:1 %}
      {% capture year %}{{post.date | date: "%Y"}}{% endcapture %}
      <li>
          <small>
            {% if year == "1977" or year == "1997" %}
              {{ post.date | date: '%Y' }}
            {% else %}
              {{ post.date | date: '%d-%m-%Y' }}
            {% endif %}
            </small>
          <a href="{{ post.url | relative_url }}">
            {{ post.title | escape }}
          </a>
          {% if post.sumario %}
          <blockquote>
              {{ post.sumario | strip_html | truncatewords:75 }}
          </blockquote>
          {% endif %}
      </li>
      {% endfor %}
    </ul>
    </div>

  </div>
</article>
