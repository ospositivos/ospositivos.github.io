---
layout: default
title: Listagem geral
permalink: directorio.html
sitemap: false
estilo: "homepage clean-black"
---

<header class="directorio"></header>

<article class="post">
<div class="coluna directorio"><a name="tagme"></a>

    <ul class="uk-flex-center" uk-tab>
        <li><a class="link" href="#">desc</a></li>
        <li><a class="link" href="#">tag me</a></li>
    </ul>

    <ul class="uk-switcher uk-margin">
        <li>
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
                    {{ post.title }}
                  </a>
                  {% if post.sumario %}
                  <blockquote>
                      {{ post.sumario | strip_html | truncatewords:75 }}
                  </blockquote>
                  {% endif %}
              </li>
              {% endfor %}
            </ul>          
        </li>

        <li>
            <div style="text-align:center">
                {% for tag in site.tags %}
                    <a href="#{{ tag[0] | slugify }}" class="link">{{ tag[0] }}</a>
                {% endfor %}
            </div>
            {% for tag in site.tags %}
                <a href="#tagme" style="caret-color: transparent;"><h3 style="text-align:center;padding-top:32px;caret-color: transparent;" id="{{ tag[0] | slugify }}">{{ tag | first }}</h3></a>
                <ul class="lista-artigos">
                    {% for post in tag[1] %}    
                        <li>
                            <small class="post-date">{{ post.date | date_to_string }}</small>
                            <a class="link" href="{{ site.baseurl }}{{ post.url }}">{{ post.title }}</a>
                        </li>
                    {% endfor %}
                </ul>
            {% endfor %}
        </li>
    </ul>
</div>
</article>
