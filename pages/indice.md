---
layout: page
permalink: indice.html
---

<div class="coluna">

{%- if site.posts.size > 0 -%}
  <ul class="lista">
      {%- for post in site.posts -%}
        <li>
          <small style="float:right;">{{ post.date | date: '%d/%m/%Y' }}</small>

            <a href="{{ post.url | relative_url }}" style="text-transform:uppercase;font-style:normal;border-bottom:none;">
                <b style="letter-spacing:2px;">{{ post.title | escape }}</b>
            </a>

          {% if post.sumario %}
          <div class="info coluna smallish">
          {{ post.sumario | strip_html | truncatewords:75 }}
          </div>
          {% endif %}

      </li>

      {%- endfor -%}
      </ul>

{%- endif -%}
</div>
