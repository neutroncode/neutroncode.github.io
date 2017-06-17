---
layout: page
title: Posts
---
<ul class="post">
{% for post in site.posts %}
    {% assign date_format = site.minima.date_format | default: "%b %-d, %Y" %}
    <li>
        <h2> <a class="post-link" href="{{ post.url | relative_url }}">{{ post.title | escape }}</a> </h2>
        <span class="post-meta">{{ post.date | date: date_format }}</span>
    </li>
{% endfor %}
</ul>

<p class="rss-subscribe">Subscribe <a href="{{ "/feed.xml" | relative_url }}">via RSS</a></p>
