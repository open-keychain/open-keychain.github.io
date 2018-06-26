---
layout: default
title: Blog
---

<section>
<div>

<div style="width:130px;float:right;margin-left:20px;">
<a href="https://twitter.com/OpenKeychain">
<img src="{{site.baseurl}}/public/images/twitter-512.png" width="30" height="30" style="margin-bottom:0px;" />
</a>
<a href="https://f-droid.org/app/org.sufficientlysecure.keychain">
<img src="{{site.baseurl}}/public/images/fdroid.png" width="129" height="45" style="margin-bottom:0px;" />
</a>
<a href="https://play.google.com/store/apps/details?id=org.sufficientlysecure.keychain">
<img src="{{site.baseurl}}/public/images/google_play.png" width="129" height="45" style="margin-bottom:0px;" />
</a>
</div>

<div>
<script src="{{site.baseurl}}/public/js/jquery/2.0.2/jquery.min.js"></script>
OpenKeychain for Android helps you communicate more privately and securely, compatible with the OpenPGP standard. [<a href="{{site.baseurl}}/about/">Read more</a>]

<p>
<ul>
<li><b>Donate via 
<a href="https://www.paypal.com/cgi-bin/webscr?cmd=_donations&amp;business=android%40schuermann.eu&amp;lc=US&amp;item_name=OpenKeychain+Donation&amp;no_note=0&amp;no_shipping=1&amp;currency_code=EUR">PayPal</a> / <a href="https://flattr.com/submit/auto?fid=4vzg0p&amp;url=https%3A%2F%2Fwww.openkeychain.org">Flattr</a> / <a href="" data-toggle="modal" data-target="#bitcoin-donation-overlay">Bitcoin</a></b></li>
</ul>
</p>
</div>

</div>
<div style="clear:both;"></div>
</section>

<section class="archive">
{% for post in site.posts %}
{% unless post.next %}

{% unless forloop.first %}</div></div>{% endunless %}

  <div class="bundle row gutters fadeInDown animated">
    <h2 class="post-year col span_2">{{ post.date | date: '%Y' }}</h2>
    <div class="posts-by-year col span_10">

{% else %}
{% capture year %}{{ post.date | date: '%Y' }}{% endcapture %}
{% capture nyear %}{{ post.next.date | date: '%Y' }}{% endcapture %}
{% if year != nyear %}

{% unless forloop.first %}</div></div>{% endunless %}

  <div class="bundle row gutters fadeInDown animated">
    <h2 class="post-year col span_2">{{ post.date | date: '%Y' }}</h2>
    <div class="posts-by-year col span_10">
{% endif %}
{% endunless %}

  <article class="row gutters">
    <a href="{{ site.baseurl }}{{ post.url }}" title="{{ post.title }}" class="col span_8">{{ post.title }}</a>
    <div class="post-date col span_4">
      <time datetime="{{ post.date | date: '%Y-%m-%d' }}">{{ post.date | date: "%-d %B" }}</time>
    </div>
  </article>

{% if forloop.last %}</div></div>{% endif %}

{% endfor %}
</section>
