---
layout: page
---
{%- if site.posts.size > 0 -%}
<div class="coluna">
  <ul class="">
      {%- for post in site.posts -%}
      <li>
          <small style="float:right;">{{ post.date | date: date_format }}</small>
          {%- assign date_format = site.minima.date_format | default: "%b %-d, %Y" -%}
          <a href="{{ post.url | relative_url }}" style="text-transform:uppercase;font-style:normal;">
              <b>{{ post.title | escape }}</b>
            </a>
      </li>
      {%- endfor -%}
  </ul>
</div>
{%- endif -%}
