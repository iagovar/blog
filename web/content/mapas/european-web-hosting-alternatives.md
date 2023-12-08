---

Template: post

title: Is it possible? A list of European Amazon AWS Cloud alternatives

description: A commented list of European alternatives to Amazon AWS, Digital Ocean and Heroku

date: 2021-11-03 14:46

author: iagovar

comments: true

---

<span style="background-color: lightgreen; padding: 1em; display: block;">
	<b>TL/DR</b> OVH is the only European competitor of AWS, Google Cloud or Azure in terms of variety of services. And it's not exactly there either. If you only use EC2 and databases you can find some, not many, alternatives.
</span>
<span style="background-color: lightblue; padding: 1em; display: block;">
<b>UPDATE 2021</b>: Many of this providers have updated their offerings since 2019, including managed databases, networking (load balancers and such) etc. The situation has changed, and although IMO it's still not Matching AWS, the situation has improved significantly, as most of them didn't go beyond virtual servers a couple years ago.
<br><br>
I've updated the descriptions accordingly.
</span>

I wanted to move some of my operations to Europe because I was concerned by the data I stored in my US servers, being Amazon AWS and Digital Ocean my current providers. Sometimes the jurisdiction of your servers are as important as the price you pay for them.

I don't want to waste your time, here's what I gathered.

<style type="text/css">
	td, th {
    padding: 0.4em;
    border: black solid 1px;
	}
</style>


| Domain            | Type        | HQs         | + Info                                                                                                                                                                                                                                                                                                                                             |
|-------------------|-------------|-------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| <a href="https://ovh.com">ovh.com</a>           | AWS-like    | France      | It is trying to position itself as the European alternative to Amazon AWS on top of OpenStack. It does provide many services in addition to the classic VPS. It also shares something I dislike about AWS, <a href="https://news.ycombinator.com/item?id=16723599">a confusing management panel</a>. OVH is well known all over the world, and the prices are good (Bandwitdh VS AWS is basically free). Support is terrible though. It's the go-to for many people.
| <a href="https://Scaleway.com">Scaleway.com</a>      | DO-Like     | France      | Another cheap French supplier. It tries to compete with DO. They do offer managed databases, network, containers, serverless functions, GPU servers for AI and even Apple Sillicon now. The management panel is easy to understand, something you'll appreciate if you're one of those who, like me, hate to spend time learning stupid acronyms.                                                                    |
| <a href="http://Exoscale.com ">Exoscale.com</a>     | DO-Like     | Switzerland | Offers managed DBs including Kafka and Redis, object storage, GPU instances and Kubernetes. If this anecdata is of any use to you, I've read that CERN has contracted its services, but it could be for anything non-critical.                                                                                                        |
| <a href="https://Hetzner.com/cloud">Hetzner.com/cloud</a> | Do-Like     | Germany     | It's known to be one of the cheapest, if not the most cheap provider ever. <a href="https://www.youtube.com/watch?v=5eo8nz_niiM">They do a lot of custom stuff for that</a> (rack mounts, ventilation systems, hardware). Although they seem to offer some networking capabilities, there's still a lack of offering of other managed services, like databases. A curious fact is that the game Krunker.io seems to be on top of Hetzner. <br><br> They've recently open an US location, which seems to worry some people, <a href="https://news.ycombinator.com/item?id=29093292">more here</a>. |
| <a href="https://scalingo.com">scalingo.com</a>      | Heroku-like | France      | This one really looks nice. Everyone I've talked to about your service is happy. The offer is good. You have containers, databases (Redis, MongoDB, ElasticSearch and InfluxDB included) and networking. Prices are okay.                                                                                                                                                                                |
| <a href="https://clouding.io/en">clouding.io/en</a>    | VPS         | Spain       | The offer is very simple, only VPS, although the configuration is very flexible. They also offer Windows 2016 Datacenter for a small fee (+3€/month), which may be interesting for some uses. Personally I have used them for some side-projects, and it works fine.                                                                                |
| <a href="https://upcloud.com">upcloud.com</a> 		| Do-Like     | Finland     | A very similar service to Exoscale. It tries to compete with Digital Ocean. They have both managed databases (Postre + MySQL) and object storage now. |
| <a href="https://fortrabbit.com">fortrabbit.com</a> | Heroku-Like | Germany | Similar to Heroky and Scalingo, but for PHP. Sadly, it only offers MySQL and it's really running on top of AWS |

Other interesting services:

| Domain | Type | HQs | + Info |
|-|-|-|-|
| <a href="https://cloud.yandex.com">cloud.yandex.com</a> | Google-Like | Russia | Well, if you wanted to move your data out of the U.S. maybe you are not confortable putting it in the hands of a Russian company, but the truth is that Yandex is interesting, because it has from a cloud service to its own browser, through an analytics service (which I do use, and which I like quite a lot), and of course a search engine. I haven't found a way to put the prices in Euros.<br></br>Russia is a big and, let's say, motivated country, but it's striking that in Western Europe we haven't been able to develop a service that can even compete with Yandex.<br></br>You may also find it interesting to read a little about Ilya Segalovich, one of its co-founders. |
| <a href="https://alibabacloud.com">alibabacloud.com</a> | AWS-Like | China | Obviously in China they were not going to stay out of this market. Alibaba's offer is obviously not appealing to those who are concerned about what is done with their data, but the truth is that it is very complete, and I would say that, at least on paper, it can compete with AWS. Personally I haven't tried it, and I don't think I will. If one day I have a website aimed at the Chinese market I probably host it in Singapore or something like that, despite '<a href="https://www.alibabacloud.com/product/icp-filing?spm=a3c0i.23369113.6791778070.dnavpricing0.39724238AIo3Js">their handholding offer for chinese bureaucracy</a>'. |



There are many more companies out there, but the truth is that the offers didn't seem too appealing to me, if only they were limited to selling old-fashioned VPS blocks.

In any case, the reality is that no one in Europe competes with AWS, Google Cloud or Azure with the same range of services and integration (Well, maybe Yandex if we consider Russia). OVH is approaching, and really if you wanted to set up your own Kafka-type service you could, but really the appeal of these providers is to save you that work.

Surely governments and big companies have access to services that the rest of us mortals don't have (for example, through companies like Atos, Indra, DT, etc), but I have no way to evaluate them, and I couldn't hire them anyway.

If you know more companies, please share it with me on @iagovar (twitter).
