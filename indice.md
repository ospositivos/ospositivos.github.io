---
layout: page
---
{%- if site.posts.size > 0 -%}
<div class="coluna">
  <ul class="">
      {%- for post in site.posts -%}
      <li>
          <small style="float:right;">{{ post.date | date: '%d/%m/%Y' }}</small>

            <a href="{{ post.url | relative_url }}" style="text-transform:uppercase;font-style:normal;">
                <b>{{ post.title | escape }}</b>
            </a>

          {% if post.sumario %}
          {{ post.sumario | strip_html | truncatewords:75 }}
          {% endif %}

      </li>
      {%- endfor -%}
  </ul>
</div>
{%- endif -%}
