---
layout: compress
permalink: indice-home.html
sitemap: false
---

<!DOCTYPE html>
<html lang="{{ page.lang | default: site.lang | default: "pt" }}">
{%- include head.html -%}

<body id="homepage">
  <header>
  </header>
  <article class="post">
    <div class="coluna">

      <!-- Html Elements for Search -->
      <div id="search-container">
      <input data-hj-whitelist type="text" id="search-input" placeholder="pesquisar por título...">
      <ul id="results-container"></ul>
      </div>

      <!-- Script pointing to search-script.js -->
      <script src="/assets/search-script.js"></script>

      <!-- Configuration -->
      <script>
      SimpleJekyllSearch({
        searchInput: document.getElementById('search-input'),
        resultsContainer: document.getElementById('results-container'),
        json: '/search.json'
      })
      </script>

      <!-- featured -->
      {% for post in site.posts limit:1 %}
      <ul>
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
    <ul>
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
</article>
{%- include footer.html -%}
</body>

</html>
