---

template: post

title: How are refugees and/or migrants in Germany related to crime?

date: 2016-12-24 01:00

author: iagovar

comments: true

categories: [Migration]

---

<ol id="toc"></ol>



I've been asking myself this question for some time. I've seen news about this phenomena in Greece and other passing countries, but it seemed more like isolated cases combined with exaggerated perception.



And perception, when we are talking about policy and narratives, is fair enough for defining reality. If people perceives something as a threat then it shouldn't be ignored, either the causes or the consequences. specially on migrant issues, where social frictions spark so easily.



Anyway, having studies about social sciences, just observing narratives seems pretty lazy, so I decided to stop lurking around the Internet and look for some data.



I found <a href="https://www.bka.de/SharedDocs/Downloads/EN/Publications/PoliceCrimeStatistics/2015/pks2015_englisch.pdf" target="_blank">this report about crime in Germany in 2015</a> (couldn't find anything better in English), and downloaded some data about <a href="http://ec.europa.eu/eurostat/web/population-demography-migration-projections/population-data/database" target="_blank">population by citizenship on Eurostat</a>.

<ul>

 	<li>Take into account that we are going to talk about crime in a broad sense, not about <em>violent crime, s</em>o the <em>suspects</em> data below includes the guy who fires a gun, and the guy who steals a chicken. Yes, I could dive more deep, but let's be honest, I do this for free, maybe in other post.</li>

</ul>

<h2>Suspects table</h2>

A bit of time later, I ended up with this:



<img class="size-medium aligncenter" src="http://i.imgur.com/ddeRut9.png" width="709" height="721" />



This table does not take into account people who has double nationality, second-generation immigrants and other situations that could draw a better picture, but is the best I could achieve with my little experience in this field, and little-to-no knowledge on how to navigate statistics about Germany.



I'll do something about victims this holidays, but you can download and play <a href="https://1drv.ms/x/s!AhrE8WJJ4etSt2Jg3O5sYhmIB1Tl" target="_blank">with my workbook</a> meanwhile (XLSX).

<h2>Interpretation</h2>

Well, a superficial look at the table makes me think that yes, there may be some correlation between immigration and crime (in its broader sense, we are talking about <em>suspects</em>, look on definitions below), but it seems to be a declining trend.



The first thing I thought was to make a correlation between population growth and suspects number variation. The chart below is a little bit packed, but you can compare a Pearson correlation between those two variables, and the rate of suspects by 1000 inhabitants for 2015.



&nbsp;



<img class="size-medium alignleft" src="http://i.imgur.com/jnExerJ.png" width="321" height="460" />



Well, looking at the table we can see that there is positive correlation for most of them, but exceptions are important, like Algeria, Iraq, etc.



Basically, we know that certain nationalities are more likely to commit crimes, but it's still unclear what drives them to that.



Is it muslim background? Well, it's clear that muslim countries are playing a role here, but that can't explain the differences between them. Is it poverty? Maybe specific muslim branchs?



&nbsp;

<h3>Crime VS Muslim background Vs Poverty VS Education</h3>

If I had problems with previous data, here comes the fun. There are so many polls with significant differences in results that I just will consider using <a href="http://www.pewforum.org/2015/04/02/religious-projection-table/2010/number/all/" target="_blank">this PEW Research data</a> for the sake of preserving my sanity. I'm also going to use the average between 2010 data and 2020 projection, just for feeling like I know what I'm doing.



But there is even more, measuring the weight of different branches of Islam is a <a href="http://www.pewforum.org/2009/10/07/mapping-the-global-muslim-population20/" target="_blank">fairly complicated task</a>, and the best data I could find is also <a href="http://www.pewforum.org/2009/10/07/mapping-the-global-muslim-population/" target="_blank">this one</a>, back from 2009. I'd like to have something better, but that's what I've got.



For poverty data I'm going to use this <a href="https://en.wikipedia.org/wiki/List_of_countries_by_percentage_of_population_living_in_poverty" target="_blank">table from wikipedia</a> (I've inspected it a bit and it seems that data is more or less updated, so I'm going to take advantage of it, since someone already bothered to do the tedious task) on <a href="https://en.wikipedia.org/wiki/Poverty_threshold" target="_blank">relative poverty line</a>. I'll avoid the discussion about relative VS absolute here, I'll say that I just consider it better.



Finally, for education measurement I'll use the World Bank registry about gross enrollment ratio for tertiary education. If someone needs further explanation, just ask me.



So here is the table:



<img class="size-medium aligncenter" src="http://i.imgur.com/9uPozcD.png" width="571" height="938" />



Basically, the more a country has its people in tertiary education, the less likely to commit crimes.



There's also a <a href="http://www.statstutor.ac.uk/resources/uploaded/pearsons.pdf" target="_blank">strong (reverse) correlation</a> between the percentage of muslims and, tertiary education, as also a positive one with crime. We could say that the most probable variable acting as cause here is the predominance of Islam, but we have Turkey and, maybe Bosnia as outliers.



We also have to take into account that I removed "others" as category, because it was difficult to play with it. I'm not sure if throwing in the pot all countries, not only the ones in the 2015 PKS report may change the results, because even though that category includes a bunch of muslim countries, it also contains many others that are not, so they may cancel each other in whatever the effect it produces.



There's another thing that we have to consider. This is just playing with quantitative data, and just making correlations and a bit of fun stuff. But the reality is that, without getting access to the police database, we cannot be sure who those immigrants are.



It could happen that although a country has a majority of muslims, most of its immigrants in Germany are not, and it would be impossible to know without the police gathering that data, putting it in a database and releasing it. Producing reliable data is <strong>very expensive</strong>, and even when the means are available, there may be not political will to open access, or statistic secrecy and so on.



So yes, probably those correlations have a close relation with reality, but remember that this is a blog, I didn't want to go through gathering all the poverty data since it was dispersed, I used a Wikipedia table, and this post has no peer review whatsoever. It has not even a strong review, to be honest. Greek data about education seems strange, and I don't want to put more time into this.

<h2>Conclusions?</h2>

<ul>

 	<li>Yes, we can see that some countries are more prone to crime than others. Specially, muslim ones.</li>

 	<li>Tertiary education prevalence seems the best predictor for avoiding problems, but it sounds like a common place to me.</li>

 	<li>Contrary to what I had thought, relative poverty does not play a decisive role in predicting predisposition to crime. It's a strange thing, since I've read studies that link it clearly with crime within countries.</li>

 	<li>I guess that Islam prevalence is the cause for less tertiary enrollment, but even though I have above average knowledge about Islam and muslim countries, I didn't study this specific topic. I may explore it later, I find it interesting.</li>

</ul>

<h2>Definitions</h2>

• A suspect is everyone who, based on police inquiries and adequate factual evidence, is suspected of having committed an unlawful (criminal) act. This also includes accomplices, instigators and abettors.



• A suspect who comes to notice in several cases involving the same crime during the period under review is counted only once in the same German state. Before 1983, a new entry was made each time for persons who came to notice several times during the year under review. Because this practice of counting the same person several times, which led to excessively high and structurally distorted figures on suspects, has been replaced by the approach of counting the "real" number of suspects on the level of German states difficulties arise when comparing the pre-1984 figures with the post-1984 figures. The same problem occurs when comparing the pre-2009 figures with the post-2009 figures because of the change to counting the “real” number of suspects not only on the state but on the federal level (see p. 5; 2009: Transition to delivery of individual data sets).



• If, during the period under review, several offences from different key categories are linked to the same suspect, the suspect is counted separately for each subordinate group but is counted only once in the corresponding superordinate offence category and/or in the total number of offences. For this reason, adding up the number of suspects listed under the individual offences or offence categories does not produce the total number of suspects.

Furthermore, it should be noted that, when counting the number of suspects for the Police Crime Statistics, grounds for exemption from punishment or lackof criminal liability are not taken into account.



For example, the total number includes children under 14 years of age who cannot be held responsible under criminal law. Persons who cannot be convicted because they are deceased, ill, or at large are also included as suspects.



• Non-German suspects are foreign nationals, stateless persons, or persons whose nationality has not been clarified. Persons who are German nationals and also citizens of another country are counted as Germans. If the same suspect comes to notice as having different nationalities within the same reporting period, he is recorded under the most recent nationality. An analogous approach is taken with regard to the residential status of non-German suspects. All non-Germans who are attending a school, college for higher professional training, or university in the Federal Republic of Germany are recorded as "students/pupils".

<h2>Questions and Answers</h2>

<h3>What about data without crimes against the foreigners law?</h3>

<a href="https://www.reddit.com/r/europe/comments/5k9ut4/are_refugees_andor_migrants_really_linked_to/dbmf7co/" target="_blank">This dude in Reddit</a> told me that I should exclude crimes related to the foreigners law, which makes sense, because this crimes are mainly illegal entry and illegal stay, which we could say that it's not what most people would understand as crime, like thief, murder, rape and so on.



The problem is that PKS reports didn't include figures without foreigners law by citizenship until 2015, and just for this very year, providing only <em>estimated percentages</em> for previous years.



Comparing both tables, I got what you are seeing below, which basically means that for some nationalities they commit more crimes subtracting those against the foreigners law, comparing with the table that includes every crime, which is obviously impossible, and weird.



<img class="alignnone size-medium" src="http://i.imgur.com/sulsMp5.png" width="721" height="501" />



So unless the German police begins to provide comprehensive data in accessible formats,  I don't think that we can rely in data previous to 2015 for this particular concern.



Anyway, let's make a little effort, and try to see what actually our table should look like. The first question would be, when the problem of migratory crisis began to worry people?



<script type="text/javascript" src="https://ssl.gstatic.com/trends_nrtr/863_RC25/embed_loader.js"></script> <script type="text/javascript"> trends.embed.renderExploreWidget("TIMESERIES", {"comparisonItem":[{"keyword":"/m/0134cz66","geo":"","time":"2014-01-01 2016-12-27"}],"category":0,"property":""}, {"exploreQuery":"date=2014-01-01%202016-12-27&q=%2Fm%2F0134cz66"}); </script>



According to the previous chart, and this <a href="https://en.wikipedia.org/wiki/Refugees_of_the_Syrian_Civil_War#2015" target="_blank">Wikipedia article</a>, the migrant crisis may hit Germany around summer 2015, which seems to make sense, if we look at data that I already gathered:



<img class="alignnone size-medium" src="http://i.imgur.com/ptGE86O.png" width="749" height="181" />



The problem is, what do we do with data about Romanians, Poles, Italians, Bulgarians, and Greeks? Are we just going to accept that they commit more crime excluding those against the foreigners law? Because it doesn't make any sense.



But I do not want to leave the question unanswered neither, so I've started to play with factors, averages, and other calculations that I do not feel as comfortable as I should for making this table:



<img class="size-medium aligncenter" src="http://i.imgur.com/Tn1uKt3.png" width="643" height="703" />



Looking <a href="https://1drv.ms/x/s!AhrE8WJJ4etSt3zUxHQGpNSO8xTR" target="_blank">how I made it</a>, we should be careful with this table. As I said at the beginning, contrary to the total data, we only have estimates for data excluding crimes against the Foreigners Law in periods prior to 2015.



Well, at the end, how would the correlations between different variables be? It changes, but not that much.



<img class="size-medium alignright" src="http://i.imgur.com/mU5izKD.png" width="597" height="976" />

<h3>Why are Shia muslims being counted, and not Sunnis?</h3>

I answered it here:

<div class="reddit-embed" data-embed-media="www.redditmedia.com" data-embed-parent="false" data-embed-live="false" data-embed-uuid="d1310392-bda7-4fa2-a09f-dccc832644c5" data-embed-created="2016-12-28T12:04:31.560Z"><a href="https://www.reddit.com/r/europe/comments/5k9ut4/are_refugees_andor_migrants_really_linked_to/dbn2hsf/">Comment</a> from discussion <a href="https://www.reddit.com/r/europe/comments/5k9ut4/are_refugees_andor_migrants_really_linked_to/">Are refugees and/or migrants really linked to crime in Europe?</a>.</div>

<script async src="https://www.redditstatic.com/comment-embed.js"></script>

<h3>What about socio-economic status and other variables?</h3>

<a href="https://www.reddit.com/r/europe/comments/5k9ut4/are_refugees_andor_migrants_really_linked_to/dbmfr76/" target="_blank">Some redditors</a> were discussing the suitability of using other variables.



Some of them are difficult to measure, and are available in papers, not in downloadable periodic series on the Internet, which is a problem if I want to get the results soon, and also want to have a life.



I will go slowly trying to solve these issues, but they will go in separate posts.

<h3>What is to be German? What is to be Syrian?</h3>

<div class="reddit-embed" data-embed-media="www.redditmedia.com" data-embed-parent="false" data-embed-live="false" data-embed-uuid="2283f6cd-f6d1-4d12-a9ca-ebaeb9777764" data-embed-created="2016-12-28T11:39:55.537Z"><a href="https://www.reddit.com/r/europe/comments/5k9ut4/are_refugees_andor_migrants_really_linked_to/dbmkkmh/">Comment</a> from discussion <a href="https://www.reddit.com/r/europe/comments/5k9ut4/are_refugees_andor_migrants_really_linked_to/">Are refugees and/or migrants really linked to crime in Europe?</a>.</div>

<script async src="https://www.redditstatic.com/comment-embed.js"></script>



So, as I said at the beginning, if someone gets double nationality, counts as German. If someone is a second-generation immigrant, he also counts as a German.

<h3>What does it mean that the trend does not fit the narrative? Muslim countries have a much higher crime rate in your table.</h3>

I partially answered here:

<div class="reddit-embed" data-embed-media="www.redditmedia.com" data-embed-parent="false" data-embed-live="false" data-embed-uuid="a4b8e44b-5cf0-446a-bd3c-68671632ab09" data-embed-created="2016-12-28T11:48:17.868Z"><a href="https://www.reddit.com/r/europe/comments/5k9ut4/are_refugees_andor_migrants_really_linked_to/dbmfhin/">Comment</a> from discussion <a href="https://www.reddit.com/r/europe/comments/5k9ut4/are_refugees_andor_migrants_really_linked_to/">Are refugees and/or migrants really linked to crime in Europe?</a>.</div>

<script async src="https://www.redditstatic.com/comment-embed.js"></script>



I didn't bookmark news about the migrant crisis, so it is true that my percepcion of the narrative has no data gathering behind, nor a serious scrutiny, I was just judging under my own perception. Anyway, it doesn't change the results, and if you look on the table without crimes against the foreigners law, there is no longer a decreasing ratio.

<h3>Where are you getting the religion, poverty, and education data from?</h3>

<div class="reddit-embed" data-embed-media="www.redditmedia.com" data-embed-parent="false" data-embed-live="false" data-embed-uuid="fb741d0b-4e81-4a32-bb9e-8874ade8b032" data-embed-created="2016-12-28T12:09:35.752Z"><a href="https://www.reddit.com/r/europe/comments/5k9ut4/are_refugees_andor_migrants_really_linked_to/dbn2tm3/">Comment</a> from discussion <a href="https://www.reddit.com/r/europe/comments/5k9ut4/are_refugees_andor_migrants_really_linked_to/">Are refugees and/or migrants really linked to crime in Europe?</a>.</div>

<script async src="https://www.redditstatic.com/comment-embed.js"></script>



Religion, poverty and education data is explained before or after each chart. There are no public data on these variables relative to immigrants, so these figures are referencing the countries of origin.



Anyway, this question is interesting because it perhaps shows how Iran stands as outlier.

<h3>Is your poverty data about Syria updated?</h3>

<div class="reddit-embed" data-embed-media="www.redditmedia.com" data-embed-parent="false" data-embed-live="false" data-embed-uuid="baf5be63-314e-4777-be11-331b64f6285e" data-embed-created="2016-12-28T12:19:10.619Z"><a href="https://www.reddit.com/r/europe/comments/5k9ut4/are_refugees_andor_migrants_really_linked_to/dbn2w62/">Comment</a> from discussion <a href="https://www.reddit.com/r/europe/comments/5k9ut4/are_refugees_andor_migrants_really_linked_to/">Are refugees and/or migrants really linked to crime in Europe?</a>.</div>

<script async src="https://www.redditstatic.com/comment-embed.js"></script>



<a href="https://en.wikipedia.org/wiki/List_of_countries_by_percentage_of_population_living_in_poverty" target="_blank">This table</a> has only estimates up to 2006. It's a problem, because we can say for sure that most syrians lost almost everything, excluding a few areas.



Even so, Syria is only one of the countries on the list. If I change the poverty value from 11.9% to 100%, the correlation between suspects and poverty grows from 0.238 to 0.3672, it remains weak.

<h2>Related discussions</h2>

<a href="https://www.reddit.com/r/europe/comments/5k9ut4/are_refugees_andor_migrants_really_linked_to/" target="_blank">First</a> and <a href="https://www.reddit.com/r/europe/comments/5kxjd9/are_refugees_andor_migrants_really_linked_to/" target="_blank">second</a> threads in Reddit about this post.

