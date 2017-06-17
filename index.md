---
layout: home
---
# Hey, it's NeutronCode.
I am a freelance web desinger/developer. I have coded some themes in Wordpress. In my spare time I do include coding, electronics and longboarding. If you want me to design a theme for your website, contact me at <a href="mailto://neutroncode@protonmail.com">neutroncode@protonmail.com</a>

<div class="showcase">
<div class="showcase-left">
# Themes {#themes}
I have designed some themes for use in Wordpress, check them out at <a href="https://wordpress.org">worpress.org</a>. If you want to tinker with the source code, here is the link to the github repo: <a href="https://github.com">github.com</a>

If you want me to design a theme for your website, contact me at <a href="mailto://neutroncode@protonmail.com">neutroncode@protonmail.com</a>

</div>
<div class="showcase-right">
<img src="/assets/img/theme.png" alt="Wordpress Theme"/>
</div>

<div class="showcase">
<div class="showcase-left">
# Scripts {#scripts}
I have some scripts avaliable here for your perusal. Some are for work, others for entertainment. Check them out at <a href="https://github.com">github.com</a>
</div>

<div class="showcase-right">
{% highlight bash %}
SOCKS Proxy type: 
[4 for Socks4]
[5 for Socks5]
> 4

Enter IP and Port: 
Like so: <ip-address>:<port>
> 12.12.12.12:8000
You chose Socks4 and IP address 12.12.12.12:8000
 
Save? [Y/n]: y
{% endhighlight %}
</div>
</div>

<div class="showcase">
# Posts {#post}
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
</div>
