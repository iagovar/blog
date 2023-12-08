---
Template: post
title: Much more than you'd want to know about the leaked Twitch data (Payouts).
description: A superficial analysis of the payment data leaked with the Twitch repository.
date: 2021-10-14 14:00
author: iagovar
comments: true
---

<style type="text/css">
	#toc > li:nth-child(1) {
		display: none;
	}
</style>


<div id="toc"></div>

This post is a small analysis exercise, motivated solely by curiosity. Recently an entire Twitch repository was leaked where, among other things, there is a list of Twitch *payouts*. From the volume of data it looks like a dump of a database, not a sampling, which can give us quite a lot of play. Let's see.

# Definitions

As I don't know much about the Twitch thing, I decided to make a small compilation of the different types of income that appear publicly on the Twitch website.

- Bits: Twitch internal tokens, which are used as a one-time reward for the streamer. The price is defined by Twitch.

- Subs: Monthly subscriptions in exchange for advantages the streamer configures in his channel. Prices are set by Twitch, in three tiers.

	Amazon Prime users can subscribe to a streamer for free, but the subscription is not automatically renewed. They would have to re-assign it each month to the same streamer, if they wish.

- Ads: Revenue sharing ads between Twitch and the streamer. It's up to the streamer to decide when they run.

- Extensions and Developer: 80% of 1 cent to the streamer, and the remaining 20% to the developer, for each Bit spent on the extension. This payout is in addition to the Bit itself, which is paid to the streamer.

# 2020 Analysis

The reason for choosing 2020 is simply because the 2019 and 2021 data are incomplete, and 2020 is the only year in the leak that includes all the data.

It would be reasonable to think that there were changes between 2019 and 2020 because of the pandemic issue, forcing people to spend more time at home. We will further analyze possible changes between the 2019 data we have, and 2020.

These are the columns with which we will analyze in 2020.


| Column                     | Concept                                                                            |
|----------------------------|------------------------------------------------------------------------------------|
| user_id                    | User identifier.                                                                   |
| payout_entity_id           | Could be a payment source or destination ID. We won't use it.                      |
| ad_share_gross             | Ad compensation.                                                                   |
| prime_sub_share_gross      | Amazon Prime subscriptions income.                                                 |
| bits_share_gross           | Compensation for Twitch Tokens.                                                    |
| bits_developer_share_gross | Compensation for extensions development.                                           |
| bits_extension_share_gross | Income coming from users spending on Twitch Extensions.                            |
| bit_share_ad_gross         | Empty column.                                                                      |
| fuel_rev_gross             | Empty column.                                                                      |
| bb_rev_gross               | Some kind of income of unknown origin, I have not been able to find out.           |
| report_date                | Payout date. I'll group em to obtain the annual payout amount.                     |
| experimental_rev_gross     | Empty column.                                                                      |

## Some hypotheses to test

Often, when hypotheses are formulated, a context for them is provided. In this case, since this is a blog, I will simply ask myself questions or make assertions on the fly.

### Hypothesis 1 (eliminated)
Hypothesis eliminated.

The first hypothesis has been eliminated for privacy reasons.


### Hypothesis 2: Extensions and developers
While *bits_extension_share* seems to be a payout streamers can get, along with ads, bits and subs, I'd say that *bits_developer_share* will not constitute a reveneue stream for streamers but for developers, assuming then, that we have two different people/entities.

To test that hypothesis we sum up all the revenue in the columns, except the *bits_developer* column, and compare the values found for each UserID.

Let's see the result:

| Values         | User ID's |
|----------------|-----------|
| Both < 0       | 210116    |
| Both > 0       | 42        |
| Only Developer | 76        |
| Only Streamer  | 1341916   |

It's impossible to determine if this results are a product of noise in the data, but it wouldn't be so strange to have 42 developers that also stream, and get revenue from both activies, in such large userbase.

### Hypothesis 3: Amazon Prime Subscriptions
*prime_sub_share* will always be smaller than *sub_share_gross*- If there's an instance where the value is equivalent, it may mean that prime subs are a subset of the the gross sub column, an unlikely circunstance that may only happen with streamers that have so few subs, that their only subs are from Prime.

Let's see the result:

| Values                  | User ID's |
|-------------------------|-----------|
| Prime subs < Subs gross | 775358    |
| Prime subs = Subs gross | 142       |
| Prime subs > Subs gross | 326771    |

This result is obtained by first excluding those users whose value in both columns is zero, to avoid noise from users with no gangancy and/or noise.

The fact that there are approximately 300K users who have more subs in the Prime column than in *sub_share_gross* indicates that they are two distinct categories, not subsets.

This is useful, because we now know that to get a user's total revenue it is necessary to sum these two columns.

We can also see that, although there is a difference, Prime subs are very widespread.

### Hypothesis 4: bb_rev_gross, the unknown concept
I am not able to guess what concept supports the *bb_rev_gross* column, but it appears to me that it could be the total gross income. That is, the rest of the concepts added together would have to be equivalent or at least less than this column. Otherwise it would have to be a forcibly differentiated concept, but what would it be? **If you are a streamer, or think you know what it refers to, please let me know in the comments or on my Twitter account @iagovar**.


Let's see the result:

| Values                | User ID's |
|-----------------------|-----------|
| bb_rev_gross < ΣRest  | 1342011   |
| bb_rev_gross = ΣRest  | 209957    |
| bb_rev_gross > ΣRest  | 182       |

As we can see, the hypothesis has to be discarded, since this column is in fact, in most instances, smaller than the sum of the rest of the columns.

However, that there are so many rows where the value is equivalent that it is a sign that we need to dig a little deeper. It is strange, what if we are dealing with some kind of noise?

Let's do another test:

| Values                         | User ID's |
|--------------------------------|-----------|
| Both <= 0                      | 210116    |
| Both > 0                       | 1799      |
| bb_rev_gross <= 0 Y ΣRest > 0  | 1340234   |
| bb_rev_gross > 0 Y ΣRest <= 0  | 1         |

It is clear that those +200k rows where the sum of the remainder columns and *bb_rev_gross* are equivalent are, fundamentally, users who have no income, so it makes sense.

Another observation that helps to refute the hypothesis is that in most of the rows where they are not equivalent, it is not just that *bb_rev_gross* is less than the sum of the rest of the columns, but that it is less than or equal to zero.

However all concepts that are public have a column assigned to them, and we still don't know what exactly *bb_rev_gross* is. Could this refer to private agreements between streamers or twitch? Or perhaps related in some way to intermediaries? Truth be told, I don't know. I insist, **if you know anything, let me know in the comments or on my Twitter @iagovar**.

### Hypothesis 5: Distribution of income for streamers
Knowing already that the columns represent different categories of income, and based on the knowledge of other communities, I would say that most of the users do not earn anything, and only a very small minority is able to make a living from it.

For this, I have decided to categorize the users as follows. 

| Year $  |        |
|---------|--------|
| Min     | Max    |
|         | -0     |
| 0       | 12     |
| 12      | 600    |
| 600     | 1200   |
| 1200    | 6000   |
| 6000    | 12000  |
| 12000   | 24000  |
| 24000   | 36000  |
| 36000   | 48000  |
| 48000   | 60000  |
| 60000   | 72000  |
| 72000   | 84000  |
| 84000   | 96000  |
| 96000   | 108000 |
| 108000  | 120000 |
| +120000 |        |


Let's see the result:

<img src="assets/twitch-payout-data/twitch-payout-distribution-en.png" alt="Twitch Payout distribution for 2020">

As can be seen in the table above, almost 97% of users can't reach 12k, and less than 8% are between 1200 and 6000$. Keep in mind that this may seem very little money for example, my country (Spain), but in many places 6000$ a year is a lot of money, and this dataset includes users from all over the world.

For example, in most Latin American countries $6000/year is money. Someone who broadcasts on Twitch probably lives in a big city with some infrastructure, and relatively high cost for the region, so 6000$ is not a radical lifestyle change, but I think it would bring a lot of peace of mind, especially if you live in a country where the currency is very volatile (anyone reading this from Argentina or Venezuela will understand the advantages of having income in euros or dollars).

I am not as familiar with living costs in Africa or Asia, but I can imagine that there will be countries where earning these amounts can be a differential factor (Philippines) or have the same or less impact on personal finances than in Spain (Japan, South Korea, much of China, many large ASEAN cities).

Unfortunately, the leaked data does not include geographic information, but even so, it must be taken into account that very few users reach that level of income. Most streamers may be able to afford to pay for a bunch of nice things with what they earn, but not much else.

### Hypothesis 6: Where do streamers get their revenue from?
Another hypothesis, looking at the nature of the revenue types, would be that revenue will be hierarchized as follows for most users: Bits > Subs > Prime > Prime > Ads, and there remains the unknown of *bb_rev_gross*, extensions and developers.

Let's look at the averages per group:

| Hierarchies        | bb      | ad       | sub       | bits     | dev     | ext     | prime    |
|--------------------|---------|----------|-----------|----------|---------|---------|----------|
| Up to 12$          | 0       | 0,79     | 0,73      | 0,47     | 0       | 0,01    | 0,49     |
| Up to 600$         | 0       | 6,57     | 86,56     | 25,45    | 0,01    | 0,72    | 39,41    |
| Up to 1200$        | 0,01    | 32,59    | 504,15    | 175,11   | 0,03    | 5,86    | 132,84   |
| Up to 6,000$       | 0,26    | 96,84    | 1547,94   | 627,97   | 0,36    | 23,43   | 297,32   |
| Up to 12,000$      | 2,13    | 355,99   | 4961,57   | 2210,72  | 0,75    | 85,68   | 775,1    |
| Up to 24,000$      | 15,41   | 845,31   | 9859,8    | 4361,09  | 0,82    | 160,52  | 1545,71  |
| Up to 36,000$      | 46,39   | 1577,23  | 16994,35  | 7543,4   | 16,3    | 308,12  | 2778,04  |
| Up to 48,000$      | 98,21   | 2432,99  | 24074,18  | 10311,71 | 0       | 378,71  | 4119,95  |
| Up to 60,000$      | 138,98  | 3581,59  | 30606,44  | 13084,43 | 8,14    | 444,92  | 5713,89  |
| Up to 72,000$      | 180,99  | 4442,52  | 37802,73  | 15631,02 | 0       | 641,07  | 6955,15  |
| Up to 84,000$      | 396,24  | 5415,3   | 44215,98  | 17847,68 | 0       | 780,01  | 9035,42  |
| Up to 96,000$      | 335,74  | 7225,34  | 50260,64  | 19834,45 | 142,93  | 870,02  | 11141,99 |
| Up to 108,000$     | 466,82  | 7845,3   | 57186,21  | 22598,14 | 0       | 808,85  | 12787,98 |
| Up to 120,000$     | 481,22  | 8644,14  | 65840,27  | 24528,79 | 0       | 666,46  | 13689,59 |
| More than 120,000$ | 3187,33 | 65979,29 | 207622,66 | 50913,24 | 1380,88 | 1385,41 | 96457,85 |

It's complicated to mentally process this jumble of information, and I can't find a way to make an easy-to-read visualization.


Let's transform it into the following:

| Hierarchies        |   bb |   ad |  sub | bits |  dev |  ext | prime |
|--------------------|-----:|-----:|-----:|-----:|-----:|-----:|------:|
|          Up to 12$ |  6,5 |    1 |    2 |    4 |  6,5 |    5 |     3 |
|         Up to 600$ |    7 |    4 |    1 |    3 |    6 |    5 |     2 |
|        Up to 1200$ |    7 |    4 |    1 |    2 |    6 |    5 |     3 |
|       Up to 6,000$ |    7 |    4 |    1 |    2 |    6 |    5 |     3 |
|      Up to 12,000$ |    6 |    4 |    1 |    2 |    7 |    5 |     3 |
|      Up to 24,000$ |    6 |    4 |    1 |    2 |    7 |    5 |     3 |
|      Up to 36,000$ |    6 |    4 |    1 |    2 |    7 |    5 |     3 |
|      Up to 48,000$ |    6 |    4 |    1 |    2 |    7 |    5 |     3 |
|      Up to 60,000$ |    6 |    4 |    1 |    2 |    7 |    5 |     3 |
|      Up to 72,000$ |    6 |    4 |    1 |    2 |    7 |    5 |     3 |
|      Up to 84,000$ |    6 |    4 |    1 |    2 |    7 |    5 |     3 |
|      Up to 96,000$ |    6 |    4 |    1 |    2 |    7 |    5 |     3 |
|     Up to 108,000$ |    6 |    4 |    1 |    2 |    7 |    5 |     3 |
|     Up to 120,000$ |    6 |    4 |    1 |    2 |    7 |    5 |     3 |
| More than 120,000$ |    5 |    3 |    1 |    4 |    7 |    6 |     2 |
|                    |      |      |      |      |      |      |       |
|            Average | 6,25 | 3,79 | 1,07 | 2,21 | 6,75 | 5,00 |  2,93 |
|              Final | 6    | 4    | 1    | 2    | 7    | 5    | 3     |



It is still a lot of information, but it is easier to understand. The top table represents the average position of each of the concepts for each revenue group.

The last row allows us to deduce that the most repeated hierarchy is subs > bits > prime > ads > extensions > "bb" (whatever that is) > development.

There are some changes depending on the revenue group, but not too significant. We could say that the hypothesis is not satisfied.


### Hypothesis 7: Did Twitch grow during the pandemic?
The last hypothesis, which we discussed at the beginning of the post, is that the pandemic has greatly boosted Twitch usage. This should somehow be reflected in both the number of users and revenue.

Let's see the result:

<img src="assets/twitch-payout-data/twitch-payout-dates-en.png" alt="Twitch Payout distribution for 2020">

As we can see in the table above, the number of payouts (a proxy on the number of users streaming) has clearly increased, but nothing particular is observed between February and May 2020, to speculate where the peak of new streamers could have come from. Perhaps it can be said that the average payout has gone up a bit, but it may very well be a statistical effect, as not all streamers accumulate enough to cash out every date.

Unfortunately the leaked data does not contain statistics on viewers. We can see a clearly increasing trajectory on Twitch between 2019 and 2020, but really the data does not allow to go much further.

Is this due to the pandemic or to the natural growth of the platform? I don't know. If you can think of any metrics that might help, post them in the comments or on my twitter account @iagovar.

# Get the data & analysis files
<script src="https://gumroad.com/js/gumroad-embed.js"></script>
<div class="gumroad-product-embed"><a href="https://gumroad.com/l/eDsdr">Loading...</a></div>