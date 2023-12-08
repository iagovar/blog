---

Template: post

title: Is an alternative to Youtube possible? Yes, but there are still problems to solve.

description: It is possible to create a Youtube alternative, and there are already some proposals, but the problems are many and the solutions are not clear.

date: 2019-11-12 14:46

author: iagovar

---

<style type="text/css">
	@media screen and (max-width:730px) {
 
    iframe[src*="blender"] {
        width: auto !important;
        height: auto !important
    }
    iframe[src*="vlare"] {
        width: auto !important;
        height: auto !important
    }
}
</style>


<div id="toc"></div>

I guess you're here because either you're curious, or you have a Youtube channel, and you're exploring the possibility of having an alternative, or even a backup, of Youtube.

You've heard that YouTube has never had any benefits, so, given that there are few money-making machines like Google Adwords, it doesn't seem like an attractive business for the competition.

You've heard that there are free and federated alternatives, but what you've found is confusing, and some of these sites are full of conspiracy fanatics, Nazis, and generally people you wouldn't want to be associated with.
In this post I'm going to try to respond to this concern, delimiting where we are, what possibilities exist and what challenges remain to be resolved.

## Where are we?

From a superficial point of view, Youtube is easy. It's easy to open a channel, and upload content. You don't have to worry about the technical complexities of hosting a video. For the video consumer, it's a place where all the content you'll ever want is.

[This wasn't always the case](https://www.youtube.com/watch?v=OU6CuSMzNus), not too long ago (if you're even under thirty you'll remember) Internet was a diverse place, where there wasn't much standardization and hosting online content required some knowledge. In those years, recording and editing video was not a knowledge within everyone's reach, and the capabilities of non-professional software at the time were very primitive.

The reason why the Internet has become what it is today, a kind of set of corporate silos, is because it is the most efficient way, from an economic and organizational point of view, to extract rents from those who pay, that is, consumers (think e-commerce) and advertisers (think any website with ads), with the added advantage that, in addition, it is also more convenient for consumers and advertisers.

This has a counterpart, which you probably already know. A company has to moderate an avalanche of content, and you can also be censored. In the old internet, content moderation was distributed, so it was more manageable. Each small site could, with greater or lesser difficulty, digest the content that users uploaded to their sites, helped by the fact that the population had a lower digital literacy (so that the total volume was also lower) and the friction to publish text, images or video on the Internet was greater.

Censorship was also different. In those years, if the owner of one website censored you, you went to another. Surely nobody enjoyed it, but it wasn't dramatic. Today Youtube removes your channel and you have a serious problem. Also, at that time, the authorities were very lost in this Internet in most of the world. Today they know that it is enough to expel someone from a few places so that in practice that person loses all his audience, forcing them to take refuge in domains that are associated with the extremes of society, and thus fulfilling the double objective of providing another argument against them. See how the Nazis are? They have a channel on X!



## What initiatives are there now? What ideas do they have?

I think we can divide the efforts into two groups.

### 1. The "Youtube without being Youtube"

Basically [Dailymotion](https://www.dailymotion.com/) would be the only viable candidate. Currently the site has pivoted to a more TV-like model where there is no interaction. Formerly you could comment on the videos, but I guess they didn't see it clear, so seeing that they couldn't compete with YouTube because of the [network effects](https://en.wikipedia.org/wiki/Network_effect), they got rid of all the fat. But it's a French company, which means that, when the day comes, they could take a step forward. In France there is [some resistance to surrendering to Sillicon Valley](http://iagovar.com/european-web-hosting-alternatives). In other words, if a window of opportunity arrived, and money was needed for development, there probably would be such money.

Then there are funny things like [Vidlii](https://www.vidlii.com), which is a kind of amateur experiment. It has limitations for videos, like 2GB, 20 minutes, etc. It's the project of a German guy who surely wanted to set up a site that looks like Youtube in 2008, but of course, he'll have to pay for hosting out of pocket. The same guy mounted [Vlare](https://vlare.tv/), which looks more promising, but I'm not sure how serious it can be, because it seems to depend on just on that guy, and the process of registration and access has bugs (I've been communicating with them for a few days). Who knows how many people wanted to register and couldn't.

<blockquote class="twitter-tweet"><p lang="en" dir="ltr">We make our money from other projects we&#39;ve worked on, which are quite profitable. Additionally, the creator of the project has at least 2 years worth of money for server costs as backup. Not to mention, the obvious ads and premium subscription which users can buy to support us.</p>&mdash; Vlare (@VlareTV) <a href="https://twitter.com/VlareTV/status/1194351412097929216?ref_src=twsrc%5Etfw">November 12, 2019</a></blockquote>

<center><iframe width="640" height="360" src="https://vlare.tv/embed/aPFEbXIh/false/true/49" frameborder="0" allowfullscreen></iframe></center>

The problem with these sites is that, at the end of the day, they will end up having the same Youtube problems. Eventually they will have to face the bill of allowing an astronomical number of videos to be uploaded to your site, you will have to moderate that content (with the unrealistic expectations that the general population and politicians have about the capabilities of <i>machine learning</i>), and besides, nothing prevents your ideological position from being annoying for this company and find yourself banned.

### 2. The "Let's make a revolution with P2P and Blockchain!!!"

In this section we find solutions like [Peertube](https://joinpeertube.org/), [Bitchute](https://www.bitchute.com/), [D.Tube](https://d.tube/) and some others. 



<center style="padding: 1em 0; margin: 1em 0; background-color: lightgreen;">

<a href="https://www.blender.org/media-exposure/youtube-blocks-blender-videos-worldwide/">The Blender Foundation Testing Peertube</a>

<br><br>

<iframe width="560" height="315" sandbox="allow-same-origin allow-scripts" src="https://video.blender.org/videos/embed/3d95fb3d-c866-42c8-9db1-fe82f48ccb95" frameborder="0" allowfullscreen></iframe>

</center>

Not everyone is convinced of these solutions.

<blockquote class="twitter-tweet"><p lang="en" dir="ltr">Vlare is a centralized platform, and that&#39;s how it ought to be. Decentralized platforms are unstable, and more of a marketing stunt than an actual improvement (at least in my personal opinion).</p>&mdash; Vlare (@VlareTV) <a href="https://twitter.com/VlareTV/status/1194018192860962818?ref_src=twsrc%5Etfw">November 11, 2019</a></blockquote>

It is true that most P2P platforms are unstable and, at least they seem to be, more of a marketing experiment to catch the <i>decentralized</i> wave than anything else.

However, if we start from the assumption that one of the main reasons why YouTube could not generate benefits are the hosting costs and bandwidth, a technology such as <a href="https://webtorrent.io/">Webtorrent</a>, used in Peertube and Bitchute, and <a href="https://ipfs.io/">IPFS</a> as used by D.Tube, means that at least part of those costs can be outsourced.

Let's take the case of Webtorrent, which in my opinion is the most promising. The user visits our hypothetical WebTube, and clicks on one of the videos. The video starts to be downloaded from other users who are watching it, from the content creator, who is using a <a href="https://es.wikipedia.org/wiki/Seedbox">seedbox</a> so that his videos always have a good bandwidth, and perhaps, from the very server that has WebTube to ensure, at least, a minimum width.

<center><img src="../assets/youtube-alternative/peertorrent.png"></center>

If the video becomes more popular, the effort is shared between WebTube, the seedbox of the content creator, and the users. The majority of users in countries such as Spain already have symmetrical speeds, and generally higher than 100mbps (people in the countryside getting angry while reading this lines). Mobile connections are very variable, but 4G in average saturation conditions may be about 10mbps uplink. As for seedboxes can be found for reasonable prices and bandwidths of about 1 to 20gbps. Nowadays, if you make money with your videos, the price of buying a managed server with good bandwidth is trivial. If most of your users are Spanish you host the videos in Spain, and if they are international maybe in the Netherlands. Also, there isn't anything preventing you from having several seedboxes for various audiences. With a magnet link, moreover, you would only have to upload the file to one of them and pass the link to the rest so that the file replicates effortlessly.

As in bittorrent, the more seeds, the wider the available bandwidth. If you have two 20gbps seedboxes, that means 40gbps of available bandhwidth for whoever watches your videos, plus the bandwidth provided by the WebTube instance, and the users who stay for while watching the video.

Hosting the content also allows anyone to play it with a magnet link. <a href="https://instant.io/#magnet%3A%3Fxs%3Dhttps%253A%252F%252Fvideo.blender.org%252Fstatic%252Ftorrents%252F3d95fb3d-c866-42c8-9db1-fe82f48ccb95-360.torrent%26xt%3Durn%3Abtih%3A4a5d29d447a4b69c99503d1ac452255b4ad1877c%26dn%3DSpring%2B-%2BBlender%2BOpen%2BMovie%26tr%3Dwss%253A%252F%252Fvideo.blender.org%253A443%252Ftracker%252Fsocket%26tr%3Dhttps%253A%252F%252Fvideo.blender.org%252Ftracker%252Fannounce%26ws%3Dhttps%253A%252F%252Fvideo.blender.org%252Fstatic%252Fwebseed%252F3d95fb3d-c866-42c8-9db1-fe82f48ccb95-360.mp4">Here you have an example with the same Blender video that I embbeded above</a>.

If you don't like WebTube, you go somewhere else, and you just have to provide a list of your magnet links.

## Still a bunch of problems to solve

In the case of alternatives that want to replicate Youtube, we've already commented above. <b>I don't think it's possible to replicate YouTube without having the same problems</b>. Hosting and bandwidth can be prohibitive at moderate levels of popularity.

In the case of P2P alternatives, Webtorrent exposes the visitor's IP to anyone who is downloading or uploading the video. Basically the same as bittorrent. For many people this is a security problem, but it is certainly unavoidable. There is also a problem with the user experience. In most cases, when a user visits Youtube, the video is played immediately. This in P2P is usually not so fast, and depending on how popular the video is it can become quite slow. A delay of five or six seconds may seem like a short time when you're reading it, but for users, used to everything on the internet being almost instantaneous, it's an eternity.

It won't be a problem for those who are willing to hire a server and host their videos (just watch the Peertube video, it works -almost- perfectly), but many people will not, or at most, will do it from consumer-grade computer and internet connection. In contrast to what happens with traditional hosting, the more popular a video is, the more bandwidth there will be. Diving into unknown content will become slower and more problematic, though.

While P2P technologies can solve a large part of the video cost problem, managing a site with a lot of fame is not a trivial problem at all.

### The problem of censorship and filters has no solution

P2P alternatives will also not be spared from the problems of moderation and censorship. You can also be expelled from our hypothetical WebTube, and this website can also have a system of moderation of videos and comments that you don't like.

A typical response of P2P evangelizers is that the platform does not have control of the content, only of the metadata (the number of visits, comments and other metrics of your video), and that in any case these data can be hosted in a blockchain.

Any blockchain is going to be slower than a typical relational database, and anyway, the point is irrelevant. When you subscribe to more than 50 youtubers you don't keep track of everyone, you just trust Youtube to deliver its content when necessary. If one of them, who doesn't publish very often, has problems and decides to leave, you will only find out by pure luck (having seen an ad of theirs in another social network) or because someone else tells you. There is too much noise, and your attention span is limited. You are human.

Users are looking for comfort. They want to type in a domain name, and they want them to have there practically everything they want. Or at most a handful of domains, not hundreds. Imagine that each Youtuber would only post the videos on their domain. It would be crazy to be aware of them all, and you would have to make an active effort to remember each one of them. It's not viable. I have a lot of well organized bookmarks with websites I like, and I don't remember visiting most of them even once a week. Only with about five or six that I visit daily. <a href="https://www.nngroup.com/articles/participation-inequality/">And I think I'm a <i>power user</i> not a <i>lurker</i></a>.

In my opinion it is not possible to solve this problem. It's possible to educate your followers so that, if they want to support you, they do it through independent means (as is the case of many Youtubers with Patreon), with moderate success, but they will not remember 50 domains. Forget about that.

Think of Netflix. Out there in the wild you can get a lot of content for free that would otherwise be paid for. But Netflix is taking up more and more share. Why? Because it's more convenient than searching for trackers, look for links that work, others that don't, torrents that don't have enough seeds, websites that have false links... all that friction is what Netflix takes out from the user. It succeeds because the guy sits on the couch and his brain rests. It's that simple.


### Advertisers don't want problems, but they do experiment

Advertisers want to control where ads are published, because they don't want to waste money. A cosmetics brand could be wasting money if their ads get placed on <i>gameplays</i>. In fact, the main claim of Adwords and Facebook Ads (which are approximately 50% of the market share in this sector) is control. To know what you do with your ads and your money.

This is possible because these companies spend a lot of money on tracing their visitors and evaluating the content that is uploaded to their platform. Once WebTube becomes a little popular it will not be possible to manually evaluate the content that is uploaded. At that point you can do two things, either set up an expensive system of <i>machine learning</i> that evaluates all that content, or basically accept that such is life, and let advertisers fight with chaos.

Chaos will drive away the most conservative advertisers (typically large companies with deep pockets), which will mean less money to distribute among everyone. And you must also moderate advertisers! You don't want your cosmetics ad to end up next to a pornographic ad, especially when someone criticizes you on Twitter (And having worked in the industry I can confirm that there are managers with a ridiculous sense of what a PR disaster is).

This, of course, is a problem, but I have to dismiss the fatalistic discourse that advertisers are not going to risk it. If any of this finally happens, they will risk it, because they already do it. PornHub hosted ads from [Eat24](http://archive.is/gyJ35) (recommended read), [Diesel](https://fightthenewdrug.org/these-major-companies-are-now-using-porn-sites-to-advertise-their-product/), [a Danish politician](https://nh1.com/nh1/this-danish-politician-placed-an-election-ad-on-pornhub-and-his-explanation-is-refreshing-to-hear/), [Marvin.ie](https://www.reddit.com/r/ireland/comments/9k0euj/noticed_pornhub_adverts_werent_trying_to_sell_me/) to [Unilever and Kraft](https://www.cnbc.com/2019/11/04/unilever-and-kraft-heinz-criticized-by-politician-over-pornhub-adverts.html) [[2]](https://www.bbc.com/news/business-50283716), and this is just off the top of my head.

Did you read the last two links? Have you noticed the moral panic? Some guys in the marketing department, who know that most people literate enough with a PC consumes porn on a regular basis have come to a logical conclusion. A lot of people use Pornhub, it's cheaper to advertise than Youtube and there are also people who finds funny to see those ads on a porn site. Everything works normally until someone's heart is turned upside down because some guy in the press has accused him of something.

I guess you can get what I do think about this issue by the way I wrote the last paragraph, but regardless of any moral perspective, the real world works that way. And our WebTube will have problems in this sense, unless you want to build a machine to analyze and classify everything. That means money and a lot of effort.

Now, in spite of all this, imagine that you want to make a channel with content aimed at teenagers or young children. If no one controls this issue, it can be a problem.

### The Copyright Problem

If you've ever visited a site with pirate content, you've also seen ads. That is, there are people paying for that ad to be there. However, if you want access to large advertising budgets, protecting intellectual property is also critical. Especially if the advertiser is from the audiovisual sector. And let's not talk about the legal problems you're exposed to.

In Youtube we can see how the copyright protection system is constantly abused by companies and by people who want to make a video or a channel disappear for other reasons (whether political or competitive). I suppose if we asked, most of the Youtubers would say that Youtube does not make a sufficient effort to ensure that these problems are not reproduced, and that the support provided by the platform is practically nonexistent ([a constant in all Google services, to be honest](http://iagovar.com/european-web-hosting-alternatives)), however we are talking about creating an alternative with a fraction of the budget that Google has. I don't think we're going to get any better.

### The discovery problem

[There is some debate about the problem of discovery](https://news.ycombinator.com/item?id=21513595), which essentially pivots on the idea that one of the main attractions of Youtube is that it is easy to discover related or new content, because everything is indexed on the same site and because the company strives to improve their recommendations, despite the fact that it fights against many people who want to alter it, whether for commercial or political reasons.

In my opinion, an alternative to Youtube can copy the centralized indexing model outsourcing the cost of hosting through P2P, which will have problems in the beginning, because the transfer of content takes time, but it can be done. The federative model proposed by Peertube could be more complicated, because although the platform allows indexing content from other peertube instances, the instance administrator is in charge of this registry. If the world really changed and almost all the content was inside many small silos, the work of these administrators would be exhausting.


### Technology also has to be easy to administrate

Peertube, Bitchute and D.Tube seem more or less suitable from the user's point of view. They still need to be polished (for example, embbeding codes are not <a href="https://es.wikipedia.org/wiki/Dise%C3%B1o_web_adaptable">responsive</a>). The interfaces are not bad, but well, they're not really there either.

Peertube, which is the only software of this type that you can install yourself, <a href="https://es.wikipedia.org/wiki/Dise%C3%B1o_web_adaptable">requires more knowledge than is necessary to install, for example, Wordpress</a> on a shared hosting. This means that many people, especially the majority of Youtubers who are probably one man bands, will not bother to install an instance.

Renting a VPS and configuring an access via SSH or VNC is one thing, which for many people can already be a challenge. Managing this kind of software, and dealing with problems that may arise during installation and maintenance, is a completely different level.

I know perfectly well that these people does it for free, and being strict no one has the right to claim anything from them. Most open source software is a very ungrateful job, I know. But still, I think many developers don't have clear ideas when they have a mission in mind, or aren't able to recognize that they're doing a project because they like a particular technology.

But if you create software with a mission, before you start writing code think about who your audience is, otherwise it will be a largely wasted effort.

My brother had a small business. I taught him some stuff in Excel, and how to look for solutions on the Internet. Now he's an Excel fan because it allows him to solve many problems easily that can't be solved with CRMs, accounting programs, warehousing, or other small business applications. I could also teach him SQL and so on, but I know it's not going to happen. SQL is great, but my brother is not the kind of person who is going to learn it. He understands the limitations of Excel, but he doesn't have the time or energy to consider something more advanced. Just like I use PicoCMS and I've recommended him to use Wordpress, which he hasn't been able to install it either, because before that he would have to understand how domains work, what a DNS is, how an FTP is used, etc. My brother is almost 50 years old, so what he has done is hire someone to do it for him. His goal in life is to dedicate himself to what he likes, and earn enough money to live and enjoy what he does, not learn SQL or how DNS works. And that's fine.

Likewise, most Youtubers don't make much money, surely most of them have already made a considerable effort to learn how to edit videos. Most of the time and mental energy they have is used to think about new videos they can make, and whether it will be possible to live off the videos or not. It is not reasonable to expect many of them to learn how to administer a VM with Debian, its web server, its database, systemd, openrc, etc. Not to mention debugging any edge case, which are a difficult wall, not walk in the park like a tutorial.

I think that the optimal level between freedom and easyness is precisely what Wordpress has achieved. A relatively motivated user can install and manage it in a short time. Hosting is very cheap, and easy to use. I think that if PeerTube, or any other alternative, has the mission to provide software that is ubiquitous, and that people who are really looking for an answer to the question in this post can use it, they have to approach this model. Maybe package it? Of course a <code>sudo apt-get install peertube</code> would already be an important step. Especially if it includes frontends to handle the necessary services, despite the problem that someone has to learn to handle a VM.

## Conclusions

1. Solving the technological and cost problems associated with hosting and bandwidth is doable. The technology is not mature but it is not very far either, in particular Webtorrent.

2. More freedom and independence means, in most ways, more chaos. Those who want to create or use the new alternatives to YouTube will have to choose some degree between these two opposites. As soon as the volume of content surpasses the human capacities of supervision, it will have to be automated, and this implies that there will be people who pays a price, either because they are in an edge case or because the engineers who have deployed the system cannot describe how it works in a discrete manner, and therefore there will always be undesirable situations without optimal solution.

3. The problems associated with advertising and copyright are also related to chaos. There are advertisers for chaos, but they are not the big pockets. Whoever creates an alternative should also think about this, because it is a complex problem, although not impossible to solve. Currently, most SSPs/DSPs (for those who are not familiar with terminology <i>adtech</i>, think Adsense/Adwords) that work with chaos are full of porn ads, penis enlargement and magic cosmetics. I've worked with some in the past and they do categorize ads, but the control is a bit vague, I guess because the margins are small.

	Perhaps it would be interesting if someone could take a good look at this sector in conjunction with the problem posed by this post. It is another angle of attack.

4. I think we are not as far away as many people believe from a viable alternative, at least from a centralized indexing system with decentralized hosting. The network effects will be very difficult to overcome, and YouTube will fight for this (although predictably annoying everyone but the big advertisers, it might serve as ammunition against them). Webtorrent needs more love, someone also has to do the work of implementing the protocol in other libraries like libtorrent so that most of the software currently working on bitorrent can get on the train.

I don't think I've missed anything. If you have something to say, you have the comments section and @iagovar on Twitter.