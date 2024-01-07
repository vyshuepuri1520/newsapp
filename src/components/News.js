import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class News extends Component {
  articles = [
    {
      "source": { "id": null, "name": "The New Yorker" },
      "author": "Simon Webster",
      "title": "Understanding the Laws of Cricket",
      "description": "My hope is that these brief and straightforward instructions will bring legions of new fans into the British Empire—I mean, global cricket family.",
      "url": "https://www.newyorker.com/humor/daily-shouts/understanding-the-laws-of-cricket",
      "urlToImage": "https://media.newyorker.com/photos/6579d39668872af306a7c711/16:9/w_1280,c_limit/Webster-Shouts-Cricket.jpg",
      "publishedAt": "2023-12-14T11:00:00Z",
      "content": "Cricket is the second most popular sport in the world, with some two and a half billion fans globally, including several Americans. And theres always room for more, which is why Ive prepared this sho… [+4172 chars]"
    },
    {
      "source": { "id": null, "name": "Gizmodo.com" },
      "author": "Kyle Barr",
      "title": "Wikipedia Readers Were Thinking About AI and Atom Bombs in 2023",
      "description": "If you want to know what average online folks are trying to learn about, then perhaps the total view counts on Wikipedia might offer us a glimpse into what most people want to learn about. If the top 25 most-viewed Wikipedia articles of 2023 are anything to g…",
      "url": "https://gizmodo.com/wikipedia-readers-2023-chatgpt-atom-bombs-oppenheimer-1851070502",
      "urlToImage": "https://i.kinja-img.com/image/upload/c_fill,h_675,pg_1,q_80,w_1200/a15967119d80fa80a835f3164e2fefba.jpg",
      "publishedAt": "2023-12-05T12:00:00Z",
      "content": "If you want to know what average online folks are trying to learn about, then perhaps the total view counts on Wikipedia might offer us a glimpse into what most people want to learn about. If the top… [+2400 chars]"
    },
    {
      "source": { "id": null, "name": "ReadWrite" },
      "author": "Graeme Hanna",
      "title": "Most viewed Wikipedia page in 2023 is..ChatGPT",
      "description": "The Wikimedia Foundation has revealed the 25 most-read articles on English Wikipedia this year with ChatGPT comfortably in the number […]\nThe post Most viewed Wikipedia page in 2023 is..ChatGPT appeared first on ReadWrite.",
      "url": "https://readwrite.com/most-viewed-wikipedia-page-in-2023-is-chatgpt/",
      "urlToImage": "https://readwrite.com/wp-content/uploads/2023/12/Amended-ChatGPT-terms.jpg",
      "publishedAt": "2023-12-06T13:30:09Z",
      "content": "The Wikimedia Foundation has revealed the 25 most-read articles on English Wikipedia this year with ChatGPT comfortably in the number one spot.\r\nJust over one year since its launch, ChatGPT  – and ar… [+2629 chars]"
    },
    {
      "source": { "id": "abc-news", "name": "ABC News" },
      "author": "WYATTE GRANTHAM-PHILIPS AP business writer",
      "title": "Wikipedia, wrapped: 2023's most-viewed articles on the internet's encyclopedia",
      "description": "Remember what you searched for in 2023",
      "url": "https://abcnews.go.com/Business/wireStory/wikipedia-wrapped-2023s-viewed-articles-internets-encyclopedia-105381574",
      "urlToImage": "https://i.abcnewsfe.com/a/7eab6a1c-962c-419f-a36a-c5d487e901c3/wirestory_a0e742df4e00c30c063d0c2505c126e5_16x9.jpg?w=992",
      "publishedAt": "2023-12-05T13:34:47Z",
      "content": "NEW YORK -- Remember what you searched for in 2023? Well, Wikipedia has the receipts.\r\nEnglish Wikipedia raked in more than 84 billion views this year, according to numbers released Tuesday by the Wi… [+2665 chars]"
    },
    {
      "source": { "id": "bbc-news", "name": "BBC News" },
      "author": "https://www.facebook.com/bbcnews",
      "title": "Usman Khawaja: Cricket Australia warns batter against making Gaza message",
      "description": "The Australian batter had planned to wear shoes bearing the words \"all lives are equal\" during a Test.",
      "url": "https://www.bbc.co.uk/news/world-australia-67700408",
      "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/DE29/production/_132037865_gettyimages-1846372164.jpg",
      "publishedAt": "2023-12-13T05:12:15Z",
      "content": "Australian cricketer Usman Khawaja has been warned against showing an on-field message in support of Palestinians at a Test match against Pakistan.\r\nThe batter had planned to wear shoes bearing the w… [+1424 chars]"
    },
    {
      "source": { "id": null, "name": "Digital Trends" },
      "author": "Trevor Mogg",
      "title": "You can probably guess Wikipedia’s most-viewed article of 2023",
      "description": "Wikipedia has released its annual list revealing its most viewed pages from the last 12 months, and you can probably guess what comes out on top ...",
      "url": "https://www.digitaltrends.com/news/wikipedia-reveals-its-most-viewed-articles-of-2023/",
      "urlToImage": "https://www.digitaltrends.com/wp-content/uploads/2020/01/wikipedia-logo-pink.png?resize=1200%2C630&p=1",
      "publishedAt": "2023-12-07T08:40:07Z",
      "content": "Wikipedia\r\nWhat did you search for on Wikipedia this year?\r\nYou may not be surprised to learn that according to the site’s annual round-up of its most-viewed pages, top of the list is its article on … [+2702 chars]"
    },
    {
      "source": { "id": null, "name": "Boing Boing" },
      "author": "Rob Beschizza",
      "title": "Venezuela says it will annex most of Guyana—and all of that newly-found oil there",
      "description": "Venezuela, the despotic economic hole kept running by its vast reserves of oil, declared plans to annex most of Guyana, the much smaller country next to it. Guyana, with its cricket and tea, enjoys a higher quality of life and soaring per-capita income—but ha…",
      "url": "https://boingboing.net/2023/12/07/venezuela-says-it-will-annex-most-of-guyana-and-all-of-that-newly-found-oil-there.html",
      "urlToImage": "https://i0.wp.com/boingboing.net/wp-content/uploads/2023/12/image-34.png?fit=1049%2C1200&ssl=1",
      "publishedAt": "2023-12-07T14:46:02Z",
      "content": "Venezuela, the despotic economic hole kept running by its vast reserves of oil, declared plans to annex most of Guyana, the much smaller country next to it. Guyana, with its cricket and tea, enjoys a… [+1574 chars]"
    },
    {
      "source": { "id": null, "name": "XDA Developers" },
      "author": "Christopher Burke",
      "title": "How to download Cricket 07 in Windows 11",
      "description": "Although Cricket games are no longer made by EA, you can still play the classic Cricket 07 on Windows 11",
      "url": "https://www.xda-developers.com/how-download-cricket-07-windows/",
      "urlToImage": "https://static1.xdaimages.com/wordpress/wp-content/uploads/wm/2023/12/77.png",
      "publishedAt": "2023-12-23T12:00:25Z",
      "content": "EA was the king of sports games in the early 2000s, covering nearly every major sport. Cricket was one of the recurring titles in the EA Sports franchise. But, by the end of the decade, EA stopped pr… [+4660 chars]"
    },
    {
      "source": { "id": "business-insider", "name": "Business Insider" },
      "author": "Sawdah Bhaimiya",
      "title": "ChatGPT was Wikipedia's most viewed page in 2023 — beating out Taylor Swift, 'Oppenheimer,' and Elon Musk",
      "description": "ChatGPT's Wikipedia page was visited between 100,000 and 400,000 times almost every day, in the first half of the year, the Wikimedia Foundation said.",
      "url": "https://www.businessinsider.com/chatgpt-wikipedia-most-popular-page-in-2023-2023-12",
      "urlToImage": "https://i.insider.com/65704d2a7a3c8094d5d9fe6e?width=1200&format=jpeg",
      "publishedAt": "2023-12-06T11:10:45Z",
      "content": "ChatGPT became the fastest growing consumer app in internet history. Frank Rumpenhorst/picture alliance via Getty Images\r\n<ul><li>The Wikimedia Foundation released the most popular articles on Wikipe… [+2510 chars]"
    },
    {
      "source": { "id": "bbc-news", "name": "BBC News" },
      "author": "https://www.facebook.com/bbcnews",
      "title": "Blackpool Tower fire: Five other times people were fooled by false alarms",
      "description": "After orange netting was mistaken for flames, we revisit five other big public \"whoops\" moments.",
      "url": "https://www.bbc.co.uk/news/uk-67802959",
      "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/84C2/production/_132168933_01hjrkww9b6na25se5xhhmv2ev.jpg",
      "publishedAt": "2023-12-29T14:15:20Z",
      "content": "Things are not always what they seem. And there is no better example of that old adage than Blackpool Tower and the fire that never was.\r\nOn Thursday, six fire engines, a drone team and a rope-rescue… [+3911 chars]"
    },
    {
      "source": { "id": null, "name": "Mental Floss" },
      "author": "Ellen Gutoskey",
      "title": "Wikipedia’s 25 Most Popular Pages of 2023",
      "description": "Four of the most visited Wikipedia pages involve cricket.",
      "url": "https://www.mentalfloss.com/posts/most-popular-wikipedia-pages-2023",
      "urlToImage": "https://images2.minutemediacdn.com/image/upload/c_crop,w_3300,h_1856,x_0,y_117/c_fill,w_1440,ar_16:9,f_auto,q_auto,g_auto/images/GettyImages/mmsport/mentalfloss/01hh0f46ea54h48nkvk5.jpg",
      "publishedAt": "2023-12-10T13:00:02Z",
      "content": "To some people, perusing a long Wikipedia page is one of lifes greatest pleasures. This year, millions of people did that with Oppenheimerboth the person and the blockbuster biopic he inspired.\r\nAs t… [+2864 chars]"
    },
    {
      "source": { "id": null, "name": "Deadspin" },
      "author": "Cale Clinton",
      "title": "These are the oldest players in NFL history",
      "description": "The NFL is a rough, violent game. The average career length in the modern NFL is just 3.3 years in the league. This is why it’s so impressive to see these NFL legends play so deep into their 40s. How many more names will we see join the ranks of the league’s …",
      "url": "https://deadspin.com/oldest-nfl-players-tom-brady-george-blanda-testaverde-1851087598",
      "urlToImage": "https://i.kinja-img.com/image/upload/c_fill,h_675,pg_1,q_80,w_1200/df14b07ad80c4f8d96f3b2ac25859b4c.jpg",
      "publishedAt": "2023-12-24T12:00:00Z",
      "content": "Age: 44 years, 117 days\r\nTeams: Detroit Lions, Kansas City Chiefs, Tampa Bay Buccaneers, Dallas Cowboys, Philadelphia Eagles, Washington, Minnesota Vikings\r\nFun fact: His Canadian high school didnt o… [+69 chars]"
    },
    {
      "source": { "id": "bbc-news", "name": "BBC News" },
      "author": null,
      "title": "ECB introduces independent cricket regulator",
      "description": "The England and Wales Cricket Board (ECB) has introduced an independent regulator in response to damning independent report into the game.",
      "url": "https://www.bbc.co.uk/sport/cricket/67618663",
      "urlToImage": "https://ichef.bbci.co.uk/live-experience/cps/624/cpsprodpb/1563C/production/_131921678_gettyimages-1525996211.jpg",
      "publishedAt": "2023-12-04T18:56:19Z",
      "content": "The Independent Commission for Equity in Cricket received more than 4,000 responses to its call for evidence\r\nThe England and Wales Cricket Board (ECB) has introduced an independent regulator in resp… [+1531 chars]"
    },
    {
      "source": { "id": "time", "name": "Time" },
      "author": "Koh Ewe",
      "title": "Pakistan’s Imran Khan Delivers Speech From Behind Bars, Using Artificial Intelligence",
      "description": "Pakistan’s former Prime Minister Imran Khan is behind bars, and his party isn’t allowed to hold in-person rallies in the country ahead of elections in February.",
      "url": "https://time.com/6548669/imran-khan-virtual-rally-artificial-intelligence/",
      "urlToImage": "https://api.time.com/wp-content/uploads/2023/12/Imran-Khan-PTI-Virtual-Rally.png",
      "publishedAt": "2023-12-18T11:15:00Z",
      "content": "Pakistans former Prime Minister Imran Khan is behind bars, and his party isnt allowed to hold in-person rallies in the country ahead of elections in February. But that hasnt stopped Khan from speakin… [+2005 chars]"
    },
    {
      "source": { "id": null, "name": "ReadWrite" },
      "author": "Graeme Hanna",
      "title": "Imran Khan deploys AI clone to campaign from jail in Pakistan",
      "description": "Pakistan’s former Prime Minister Imran Khan has been able to send a message to the electorate despite being in prison, […]\nThe post Imran Khan deploys AI clone to campaign from jail in Pakistan appeared first on ReadWrite.",
      "url": "https://readwrite.com/imran-khan-deploys-ai-clone-to-campaign-from-jail-in-pakistan/",
      "urlToImage": "https://readwrite.com/wp-content/uploads/2023/12/Pakistan_Tehreek-e-Insaf_-_LIVE_Chairman_PTI_Imran_Khans_Important_Address_to_Nation_UFSVutIOc74_-_1920x1080_-_35m07s.png",
      "publishedAt": "2023-12-19T12:16:45Z",
      "content": "Pakistan’s former Prime Minister Imran Khan has been able to send a message to the electorate despite being in prison, thanks to artificial intelligence (AI).\r\nA voice clone was used for Khan to send… [+2589 chars]"
    },
    {
      "source": { "id": "bbc-news", "name": "BBC News" },
      "author": null,
      "title": "SA have 'utmost respect' for Tests after criticism",
      "description": "Cricket South Africa says it has \"utmost respect\" for Test cricket after they receive criticism for naming a weakened squad for a tour of New Zealand.",
      "url": "https://www.bbc.co.uk/sport/cricket/67866091",
      "urlToImage": "https://ichef.bbci.co.uk/live-experience/cps/624/cpsprodpb/1E1D/production/_132190770_gettyimages-1195391664.jpg",
      "publishedAt": "2024-01-02T17:30:56Z",
      "content": "Wicketkeeper David Bedingham, who only made his Test debut on 26 December, will go to New Zealand as one of eight capped players\r\nCricket South Africa (CSA) says it has the \"utmost respect\" for Test … [+4759 chars]"
    },
    {
      "source": { "id": null, "name": "Android Central" },
      "author": "michael.hicks@futurenet.com (Michael L Hicks)",
      "title": "Beefy Garmin Venu 3 update adds skin temperature, glucose watch face, and more",
      "description": "Garmin ends 2023 on a high note by making some major upgrades to the Venu 3, Vivoactive 5, Forerunner 255/265/955/965, and all of the high-end Fenix and Epix watches, starting with skin temperature readings.",
      "url": "https://www.androidcentral.com/wearables/garmin-december-2023-update-skin-temperature",
      "urlToImage": "https://cdn.mos.cms.futurecdn.net/ySjxwMw9LpmNoqkiNjv3en-1200-80.jpeg",
      "publishedAt": "2023-12-06T19:04:07Z",
      "content": "<ul><li>The December Garmin software update for Venu 3, Vivoactive 5, Forerunner, and high-end Fenix and Epix watches rolled out on December 6.</li><li>The main highlight is the activated skin temper… [+3854 chars]"
    },
    {
      "source": { "id": "new-scientist", "name": "New Scientist" },
      "author": "Clare Wilson",
      "title": "People’s ‘speed of sight’ varies and this may explain sporting prowess",
      "description": "There is significant variation in people’s ability to visually track fast-moving objects, which might explain why they have superior abilities in some sports",
      "url": "https://www.newscientist.com/article/2409000-peoples-speed-of-sight-varies-and-this-may-explain-sporting-prowess/",
      "urlToImage": "https://images.newscientist.com/wp-content/uploads/2023/12/20115033/SEI_184652782.jpg",
      "publishedAt": "2023-12-28T16:00:52Z",
      "content": "Some people will see fast-moving objects more clearly, some just see a blur\r\nYuri Arcurs/Alamy\r\nOur ability to perceive rapid changes in visual scenes over time our speed of sight varies a surprising… [+357 chars]"
    },
    {
      "source": { "id": "bbc-news", "name": "BBC News" },
      "author": null,
      "title": "Your women's cricket team of the year revealed",
      "description": "See who made the cut in BBC Sport's 2023 women's cricket team of the year.",
      "url": "https://www.bbc.co.uk/sport/cricket/67868231",
      "urlToImage": "https://ichef.bbci.co.uk/live-experience/cps/624/cpsprodpb/798F/production/_132191113_womensteam.png",
      "publishedAt": "2024-01-02T19:05:53Z",
      "content": "Nonkululeko Mlaba, Nat Sciver-Brunt and Ellyse Perry all made it into your team of the year\r\nThe results are in and there are one or two shocks in our 2023 women's team of the year.\r\nHere is the team… [+878 chars]"
    },
    {
      "source": { "id": "bbc-news", "name": "BBC News" },
      "author": null,
      "title": "Pick your 2023 women's cricket team of the year",
      "description": "Pick your women's team of the year across all three formats from a shortlist of 22 players.",
      "url": "https://www.bbc.co.uk/sport/cricket/67750247",
      "urlToImage": "https://ichef.bbci.co.uk/live-experience/cps/624/cpsprodpb/CA60/production/_132080815_bbc-sport-index-imagery-3-split-images-gradient-8c6d2573-0ddb-4a5e-b41b-8de6c22d7ea0.png",
      "publishedAt": "2023-12-28T08:06:14Z",
      "content": "Chamari Athapathu (left), Nat Sciver-Brunt (middle) and Ellyse Perry (right) have been among the stars of women's cricket in 2023\r\nIt has been a landmark year for women's international cricket.\r\nAust… [+618 chars]"
    },
    {
      "source": { "id": "bbc-news", "name": "BBC News" },
      "author": null,
      "title": "Lyon takes 500th Test wicket for Australia v Pakistan",
      "description": "Australia off-spinner Nathan Lyon becomes the eighth player in Test cricket history to take 500 career wickets.",
      "url": "https://www.bbc.co.uk/sport/cricket/67741224",
      "urlToImage": "https://ichef.bbci.co.uk/live-experience/cps/624/cpsprodpb/2479/production/_132073390_gettyimages-1861670431.jpg",
      "publishedAt": "2023-12-17T08:19:07Z",
      "content": "Nathan Lyon is congratulated by his Australia teammates after taking his 500th career Test wicket against Pakistan in Perth\r\nAustralia off-spinner Nathan Lyon became the eighth player to take 500 car… [+1266 chars]"
    },
    {
      "source": { "id": "business-insider", "name": "Business Insider" },
      "author": "Jennifer Sor",
      "title": "Financial disaster is looming for American commercial real estate. Here's what experts see happening next.",
      "description": "The debt-stricken commercial real estate sector is in for a reckoning amid higher-for-longer interest rates, experts warn.",
      "url": "https://www.businessinsider.com/commercial-real-estate-crash-debt-interest-rates-property-prices-outlook-2023-12",
      "urlToImage": "https://i.insider.com/65845cb6cefc010bea2635ef?width=1200&format=jpeg",
      "publishedAt": "2023-12-28T13:04:01Z",
      "content": "Experts have been worried about the commercial real estate space for months as over a trillion dollars in debt approaches maturity.Nick Laham/Getty\r\n<ul>\n<li>Experts have been increasingly sounding t… [+3929 chars]"
    },
    {
      "source": { "id": null, "name": "Theregister.com" },
      "author": "Simon Sharwood",
      "title": "While you holidayed, Microsoft brought Copilot to mobile devices, again",
      "description": "Redmond's AI assistant bounds onto Android and iOS without Bing branding\nFirst Look While many readers enjoyed holiday downtime, Microsoft was busy bringing its Copilot AI to Android and iOS.…",
      "url": "https://www.theregister.com/2024/01/02/copilot_android_ios_apps/",
      "urlToImage": "https://regmedia.co.uk/2023/09/07/copilot_shutterstock.jpg",
      "publishedAt": "2024-01-02T06:32:06Z",
      "content": "First Look While many readers enjoyed holiday downtime, Microsoft was busy bringing its Copilot AI to Android and iOS.\r\nThe software giant released Copilot apps for both platforms, with the Android v… [+3658 chars]"
    },
    {
      "source": { "id": "al-jazeera-english", "name": "Al Jazeera English" },
      "author": "Al Jazeera Staff",
      "title": "The top 10 moments that shaped cricket in 2023",
      "description": "From Australia winning women's and men's World Cups and everything in between, Al Jazeera looks at cricket in 2023.",
      "url": "https://www.aljazeera.com/sports/2023/12/24/biggest-moments-cricket-2023-icc-world-cup-pakistan-vs-india-asia-cup-final-virat-kohli-maxwell-afghanistan-womens-t20-shabnim-ismail-test-championship-final",
      "urlToImage": "https://www.aljazeera.com/wp-content/uploads/2023/12/2023-11-19T172113Z_983293843_UP1EJBJ1C7AXN_RTRMADP_3_CRICKET-WORLDCUP-IND-AUS-1703363199.jpg?resize=1920%2C1440",
      "publishedAt": "2023-12-24T05:48:42Z",
      "content": "Crickets whirlwind year began as South Africa lit up a home Womens T20 World Cup with a stunning run to the final, only to come up against the mighty Australians who crushed the home crowds hopes and… [+7483 chars]"
    },
    {
      "source": { "id": "al-jazeera-english", "name": "Al Jazeera English" },
      "author": "Faisal Mahmud",
      "title": "Bangladesh cricket star Shakib Al Hasan’s election run divides hometown",
      "description": "The country's biggest sporting icon is fighting for the ruling party in the January 7 vote, boycotted by the opposition.",
      "url": "https://www.aljazeera.com/sports/2024/1/2/bangladesh-cricket-star-shakib-al-hasans-election-run-divides-hometown",
      "urlToImage": "https://www.aljazeera.com/wp-content/uploads/2024/01/DSC_0779-1704194543.jpeg?resize=1920%2C1440",
      "publishedAt": "2024-01-02T12:17:29Z",
      "content": "Dhaka, Bangladesh In Magura, a sleepy town in southwest Bangladesh, about 168km (104 miles) from capital Dhaka, more than a thousand people are gathered outside a circular-shaped auditorium.\r\nThe cri… [+7534 chars]"
    },
    {
      "source": { "id": "bbc-news", "name": "BBC News" },
      "author": null,
      "title": "The smiling South African quick defying calls for more menace",
      "description": "Nandre Burger laughs off criticism from Kevin Pietersen that he is too smiley on the cricket pitch.",
      "url": "https://www.bbc.co.uk/sport/cricket/67866212",
      "urlToImage": "https://ichef.bbci.co.uk/live-experience/cps/624/cpsprodpb/134FA/production/_132189097_burger.jpg",
      "publishedAt": "2024-01-02T15:39:39Z",
      "content": "Nandre Burger took seven wickets on his debut Test and such was his performance, Virat Kohli spent a large part of India's nets this week practising against left-arm quick bowling\r\nNandre Burger tick… [+5254 chars]"
    },
    {
      "source": { "id": "bbc-news", "name": "BBC News" },
      "author": null,
      "title": "Meet Sports Personality of the Year contender Stuart Broad",
      "description": "Stuart Broad is nominated for BBC Sports Personality of the Year after bowing out of cricket with a fairytale ending.",
      "url": "https://www.bbc.co.uk/sport/av/sports-personality/67737462",
      "urlToImage": "https://ichef.bbci.co.uk/news/1024/cpsprodpb/C970/production/_132086515_broad.jpg",
      "publishedAt": "2023-12-19T06:09:43Z",
      "content": "Former England player Stuart Broad has been nominated for BBC Sports Personality of the Year after bowing out of cricket in 2023 with a fairytale ending. In the fifth Ashes Test, Broad scored a six w… [+339 chars]"
    },
    {
      "source": { "id": null, "name": "Presse-citron" },
      "author": "Jean-Yves Alric",
      "title": "Wikipédia : vous ne devinerez jamais quel a été l’article le plus lu en 2023",
      "description": "Vous avez peut-être une petite idée.",
      "url": "https://www.presse-citron.net/wikipedia-vous-ne-devinerez-jamais-quel-a-ete-larticle-le-plus-lu-en-2023/",
      "urlToImage": "https://www.presse-citron.net/app/uploads/2023/12/wikipedia.jpg",
      "publishedAt": "2023-12-07T12:00:52Z",
      "content": "Cest une tradition désormais bien établie. Wikipédia vient de dévoiler ses pages les plus consultées de lannée dans sa version anglophone. Lencyclopédie en ligne donne demblée des chiffres qui donnen… [+2954 chars]"
    },
    {
      "source": { "id": "bbc-news", "name": "BBC News" },
      "author": null,
      "title": "Sporting highlights to look forward to in 2024",
      "description": "The 2024 sporting calendar features Euro 2024, the Olympics, Paralympics and men's and women's T20 World Cups.",
      "url": "https://www.bbc.co.uk/sport/67592570",
      "urlToImage": "https://ichef.bbci.co.uk/live-experience/cps/624/cpsprodpb/4C60/production/_132125591_bbc-sport-index-imagery-4-split-images-gradient-86a5b1b8-8dcd-4352-8d8d-486a48a8cd96.png",
      "publishedAt": "2023-12-30T10:06:31Z",
      "content": "England cricketer Jos Buttler, footballer Jude Bellingham, Olympic diving champion Tom Daley and Paralympic champion Hannah Cockroft all have major events in 2024\r\nThe 2024 sporting calendar is set t… [+31277 chars]"
    },
    {
      "source": { "id": null, "name": "Phandroid - News for Android" },
      "author": "Mike Viray",
      "title": "DEAL: Grab the Nokia G50 for up to $25 Off!",
      "description": "The Nokia G50 is currently on sale from Amazon right now, bringing its price down to as low as $225.\nThe post DEAL: Grab the Nokia G50 for up to $25 Off! appeared first on Phandroid.",
      "url": "https://phandroid.com/2023/12/13/deal-grab-the-nokia-g50-for-up-to-25-off/",
      "urlToImage": "https://phandroid.com/wp-content/uploads/2021/09/Nokia-G50-Camera.jpg",
      "publishedAt": "2023-12-13T14:44:04Z",
      "content": "If you’re in the market for a pretty standard smartphone with all the essential Android features, Nokia’s wide range of different devices are good options to look at, with a variety of models designe… [+620 chars]"
    },
    {
      "source": { "id": "al-jazeera-english", "name": "Al Jazeera English" },
      "author": "Al Jazeera",
      "title": "Australian cricketer David Warner retires from ODIs ahead of last Test",
      "description": "Warner has called time on his ODI career after confirming the Sydney Test against Pakistan would be his last.",
      "url": "https://www.aljazeera.com/sports/2024/1/1/australian-cricketer-david-warner-retires-from-tests-and-odis-pakistan-series",
      "urlToImage": "https://www.aljazeera.com/wp-content/uploads/2024/01/2023-11-19T175422Z_1651980020_UP1EJBJ1DQK0R_RTRMADP_3_CRICKET-WORLDCUP-IND-AUS-1704093150.jpg?resize=1920%2C1440",
      "publishedAt": "2024-01-01T07:32:20Z",
      "content": "Australia opener David Warner has called time on his one-day international (ODI) and Test match careers to spend more time with his family but kept the door open to play the 2025 Champions Trophy if … [+2806 chars]"
    },
    {
      "source": { "id": "bbc-news", "name": "BBC News" },
      "author": "https://www.facebook.com/bbcnews",
      "title": "Imran Khan: Pakistan ex-PM used artificial intelligence to campaign from jail",
      "description": "The ex-Pakistan PM's party uses artificial intelligence to address a \"virtual rally\" on social media.",
      "url": "https://www.bbc.co.uk/news/world-asia-67752610",
      "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/111B4/production/_132086007_b401abb6d6649c62754624359ab8f8192978b0ef0_287_5500_30951000x563.jpg",
      "publishedAt": "2023-12-18T18:47:29Z",
      "content": "Former Pakistan Prime Minister Imran Khan's party has used an artificial intelligence voice clone of him to campaign from prison.\r\nMr Khan had his three-year sentence for corruption suspended in Augu… [+2337 chars]"
    },
    {
      "source": { "id": null, "name": "Variety" },
      "author": "Tim Chan",
      "title": "Pakistan vs. Australia Cricket Livestream: How to Watch the Third Test Series Online Free",
      "description": "The Australia vs. Pakistan cricket test series has kicked off Down Under, with the two powerhouse nations facing off in front of thousands of fans in Australia and millions more watching from home. Part of the 2023-2025 ICC World Test Championship, the Austra…",
      "url": "https://variety.com/2024/shopping/athletes/watch-pakistan-vs-australia-test-cricket-live-stream-online-free-1235850756/",
      "urlToImage": "https://variety.com/wp-content/uploads/2023/12/GettyImages-1878227031.jpg?w=1000&h=563&crop=1",
      "publishedAt": "2024-01-02T23:48:00Z",
      "content": "If you purchase an independently reviewed product or service through a link on our website, Variety may receive an affiliate commission.\r\nThe Australia vs. Pakistan cricket test series has kicked off… [+2955 chars]"
    },
    {
      "source": { "id": null, "name": "Variety" },
      "author": "Tim Chan",
      "title": "Pakistan vs. Australia Cricket Livestream: How to Watch the Test Series Online for Free",
      "description": "The Australia vs. Pakistan cricket test series has kicked off Down Under, with the two powerhouse nations facing off in front of thousands of fans in Australia and millions more watching from home. Part of the 2023-2025 ICC World Test Championship, the Austra…",
      "url": "https://variety.com/2023/shopping/athletes/watch-pakistan-vs-australia-test-cricket-live-stream-online-free-1235850756/",
      "urlToImage": "https://variety.com/wp-content/uploads/2023/12/GettyImages-1878227031.jpg?w=1000&h=563&crop=1",
      "publishedAt": "2023-12-26T22:48:31Z",
      "content": "If you purchase an independently reviewed product or service through a link on our website, Variety may receive an affiliate commission.\r\nThe Australia vs. Pakistan cricket test series has kicked off… [+2863 chars]"
    },
    {
      "source": { "id": "bbc-news", "name": "BBC News" },
      "author": null,
      "title": "England give Pollard T20 World Cup coaching role",
      "description": "England appoint former West Indies captain Kieron Pollard to their coaching set-up for next year's T20 World Cup.",
      "url": "https://www.bbc.co.uk/sport/cricket/67816254",
      "urlToImage": "https://ichef.bbci.co.uk/live-experience/cps/624/cpsprodpb/14E45/production/_132137558_gettyimages-1349973833.jpg",
      "publishedAt": "2023-12-24T13:00:09Z",
      "content": "Kieron Pollard has won the Indian Premier League five times\r\nEngland have appointed former West Indies captain Kieron Pollard to their coaching set-up for next year's T20 World Cup.\r\nPollard, 36, wil… [+1099 chars]"
    },
    {
      "source": { "id": "bbc-news", "name": "BBC News" },
      "author": null,
      "title": "Khawaja charged for armband in support of Gaza",
      "description": "Australia's Usman Khawaja wore a black armband in support of civilians in Gaza during the first Test against Pakistan.",
      "url": "https://www.bbc.co.uk/sport/cricket/67797417",
      "urlToImage": "https://ichef.bbci.co.uk/live-experience/cps/624/cpsprodpb/11AA/production/_132122540_gettyimages-1853775530.jpg",
      "publishedAt": "2023-12-21T21:51:36Z",
      "content": "Usman Khawaja scored 41 and 90 as Australia won the first Test by 360 runs\r\nAustralia opener Usman Khawaja has been charged by the International Cricket Council for wearing a black armband in support… [+2270 chars]"
    },
    {
      "source": { "id": "business-insider", "name": "Business Insider" },
      "author": "Robin Madell",
      "title": "I'm a global president at Mars Snacking. My day starts at 5:30 a.m. and our HQ looks like 'Charlie and the Chocolate Factory.'",
      "description": "Mars Snacking's global president says the candy company's Chicago headquarters looks like 'Charlie and the Chocolate Factory' but with less chaos.",
      "url": "https://www.businessinsider.com/mars-snacking-candy-company-president-headquarters-2023-12",
      "urlToImage": "https://i.insider.com/6578bd607a3c8094d5dc3515?width=1200&format=jpeg",
      "publishedAt": "2023-12-13T10:27:01Z",
      "content": "Clarke at the M&M's color wall.Mars Snacking\r\n<ul><li>Andrew Clarke is the global president of Mars Snacking. His day starts at 5:30 a.m. and ends at 10:30 p.m.</li><li>Clarke gets over 200 emails a … [+5613 chars]"
    },
    {
      "source": { "id": "al-jazeera-english", "name": "Al Jazeera English" },
      "author": "Annesha Ghosh",
      "title": "From Kolkata’s slums to elite cricket: The story of India’s Saika Ishaque",
      "description": "In a fairytale-like rags-to-riches story, Saika has worked her way up to be India's breakthrough cricketer in 2023.",
      "url": "https://www.aljazeera.com/sports/2023/12/15/from-kolkatas-slums-to-elite-cricket-the-story-of-indias-saika-ishaque",
      "urlToImage": "https://www.aljazeera.com/wp-content/uploads/2023/12/AP23344522888926-1702555106-1702577280.jpg?resize=1200%2C630&quality=80",
      "publishedAt": "2023-12-15T03:03:16Z",
      "content": "Mumbai, India Park Circus, a bustling neighbourhood in the heart of Indias historic eastern metropolis Kolkata, is known as a Muslim ghetto by its inhabitants and the citys Hindu middle-class populac… [+7324 chars]"
    },
    {
      "source": { "id": "al-jazeera-english", "name": "Al Jazeera English" },
      "author": "Al Jazeera",
      "title": "Nepal court finds former cricket captain Sandeep Lamichhane guilty of rape",
      "description": "Court in Nepal finds Lamichhane guilty of raping an 18-year-old woman at a Kathmandu hotel in 2022.",
      "url": "https://www.aljazeera.com/sports/2023/12/31/nepal-former-cricket-captain-sandeep-lamichhane-found-guilty-of-rape-court",
      "urlToImage": "https://www.aljazeera.com/wp-content/uploads/2023/12/AP23246500611095-1704000599.jpg?resize=1920%2C1440",
      "publishedAt": "2023-12-31T06:34:41Z",
      "content": "A court in Nepal has found the countrys highest profile cricketer Sandeep Lamichhane guilty of raping an 18-year-old woman and has fixed January 10 for his sentencing.\r\nThe judgement was announced af… [+2371 chars]"
    },
    {
      "source": { "id": "al-jazeera-english", "name": "Al Jazeera English" },
      "author": "Al Jazeera",
      "title": "South Africa trail India after 23 wickets fall on frenetic day of cricket",
      "description": "The second Test between South Africa and India gets off to a manic start as both teams suffer batting collapses.",
      "url": "https://www.aljazeera.com/sports/2024/1/3/south-africa-vs-india-second-test-cape-town-23-wickets-mohammed-siraj-dean-elgar-virat-kohli",
      "urlToImage": "https://www.aljazeera.com/wp-content/uploads/2024/01/AP24003345216237-1704301449-1704304356.jpg?resize=1200%2C630&quality=80",
      "publishedAt": "2024-01-03T17:52:49Z",
      "content": "India has suffered a spectacular collapse, losing six batters for no runs as 23 wickets fell on a crazy opening day of their second Test against South Africa at Newlands.\r\nResuming on 153-4 after tea… [+2784 chars]"
    },
    {
      "source": { "id": null, "name": "Quartz India" },
      "author": "Laura Bratton",
      "title": "Wikipedia’s most popular article is also its biggest threat",
      "description": "The most popular topic on Wikipedia in 2023 could also be the website’s downfall: ChatGPT. English Wikipedia’s ChatGPT page garnered nearly 50 million total visitors so far this year as of Nov. 28, making it more popular than even Taylor Swift and Barbie, acc…",
      "url": "https://qz.com/wikipedia-most-visited-pages-2023-chatgpt-death-cricket-1851072047",
      "urlToImage": "https://i.kinja-img.com/image/upload/c_fill,h_675,pg_1,q_80,w_1200/3d40021b0ae962faaaca1e1d8c73d333.jpg",
      "publishedAt": "2023-12-05T12:00:00Z",
      "content": "The most popular topic on Wikipedia in 2023 could also be the websites downfall: ChatGPT. English Wikipedias ChatGPT page garnered nearly 50 million total visitors so far this year as of Nov. 28, mak… [+3025 chars]"
    },
    {
      "source": { "id": "bbc-news", "name": "BBC News" },
      "author": null,
      "title": "The Bash is back - everything you need to know about BBL 13",
      "description": "The Big Bash League is back - here is all you need to know before its 13th edition.",
      "url": "https://www.bbc.co.uk/sport/cricket/67542419",
      "urlToImage": "https://ichef.bbci.co.uk/live-experience/cps/624/cpsprodpb/81F9/production/_131837233_gettyimages-1462625454-1.jpg",
      "publishedAt": "2023-12-06T08:22:37Z",
      "content": "Perth Scorchers are the Big Bash's most successful team but have lost some key players this year\r\n<table><tr><th>Men's Big Bash League 2023-24</th></tr>\r\n<tr><td>Dates: 7 December 2023 - 24 January 2… [+4750 chars]"
    },
    {
      "source": { "id": null, "name": "Digital Trends" },
      "author": "Briley Kenney",
      "title": "OnePlus Open foldable phone is $200 off in Best Buy’s Year-End sale",
      "description": "This OnePlus Open deal gets you an incredible price on a powerful, convenient folding phone that stands out as one of the most beautifully designed.",
      "url": "https://www.digitaltrends.com/mobile/oneplus-open-unlocked-deal-bestbuy-december-2023/",
      "urlToImage": "https://www.digitaltrends.com/wp-content/uploads/2023/11/OnePlus-Open-air-gestures.jpg?resize=1200%2C630&p=1",
      "publishedAt": "2023-12-29T01:39:57Z",
      "content": "Tushar Mehta / Digital Trends\r\nFolding phones are the new trend, with a bevy of manufacturers now offering them, including Samsung, Google, and OnePlus. But no folding phone is created equal. You’ll … [+2404 chars]"
    },
    {
      "source": { "id": "bbc-news", "name": "BBC News" },
      "author": null,
      "title": "Lamb out of England Test squad with back injury",
      "description": "Maia Bouchier and Kirstie Gordon have been called up to England's squad for the one-off Test against India, with Emma Lamb suffering a back injury.",
      "url": "https://www.bbc.co.uk/sport/cricket/67660162",
      "urlToImage": "https://ichef.bbci.co.uk/live-experience/cps/624/cpsprodpb/6207/production/_131959052_gettyimages-1500686098.jpg",
      "publishedAt": "2023-12-08T11:40:46Z",
      "content": "Emma Lamb has opened the batting with Tammy Beaumont in England's most recent two Tests\r\nEmma Lamb has withdrawn from England's squad for the one-off Test match against India with a back injury. \r\nOp… [+1014 chars]"
    },
    {
      "source": { "id": null, "name": "Torrentfreak.com" },
      "author": "Ernesto Van der Sar",
      "title": "2023 in Review: RARBG, Zoro, Z-Library, Flawless, IPTV and AI",
      "description": "Another year has flown by. As a tradition, we use the last day of the year to look back at some of the biggest stories of the past twelve months; from Afghanistan's cricket team to the takedown of Zoro.to. RARBG can't be forgotten either, and we certainly hav…",
      "url": "https://torrentfreak.com/2023-in-review-rarbg-zoro-z-library-flawless-iptv-and-ai-231231/",
      "urlToImage": "https://torrentfreak.com/images/road.jpg",
      "publishedAt": "2023-12-31T09:54:22Z",
      "content": "The new year can’t start without reflecting the current one, looking back at the major stories of the past 12 months.For writers and readers, the news often passes by, with major headlines swiftly fa… [+7756 chars]"
    },
    {
      "source": { "id": null, "name": "The Indian Express" },
      "author": "Sweety Adimulam",
      "title": "Samruddhi Mahamarg: 50-acre parcel at Amane to be used to develop international cricket stadium",
      "description": "An official from MSRDC confirmed that Mumbai Cricket Association (MCA) had expressed interest in acquiring land parcels.",
      "url": "https://indianexpress.com/article/cities/mumbai/samruddhi-mahamarg-50-acre-parcel-to-be-used-to-develop-international-cricket-stadium-9062562/",
      "urlToImage": "https://images.indianexpress.com/2023/12/mumbai-cricket.jpg",
      "publishedAt": "2023-12-10T16:28:11Z",
      "content": "The Maharashtra State Road Development Corporation has floated tenders for leasing 50 acres of open land near Amane in Thane district which is the Western end of the 701 km long Mumbai Nagpur Samrudd… [+2749 chars]"
    },
    {
      "source": { "id": null, "name": "The Indian Express" },
      "author": "Sports Desk",
      "title": "Test cricket is very important for my career, says Mohammed Siraj after career best bowling against South Africa",
      "description": "It was a second instance of Siraj claiming six wickets in an innings and his best figures in Test cricket.",
      "url": "https://indianexpress.com/article/sports/cricket/tests-important-career-mohammed-siraj-india-vs-south-africa-9094158/",
      "urlToImage": "https://images.indianexpress.com/2024/01/Mohammed-Siraj-4.jpg",
      "publishedAt": "2024-01-03T17:55:43Z",
      "content": "Mohammed Siraj steamed in to bowl nine overs in a row in the first session of the Cape Town Test. Leaking only 15 runs, he’d claim six wickets as India managed to bundle South Africa out for 55 on wh… [+2613 chars]"
    },
    {
      "source": { "id": null, "name": "The Indian Express" },
      "author": "Express News Service",
      "title": "‘If you want to be remembered as a great, play Tests’: Wasim Akram to Haris Rauf",
      "description": "Pakistan legend criticises Rauf for sitting out of Test series against Australia and playing only white-ball cricket.",
      "url": "https://indianexpress.com/article/sports/cricket/if-you-want-to-be-remembered-as-a-great-play-tests-wasim-akram-to-haris-rauf-9059373/",
      "urlToImage": "https://images.indianexpress.com/2023/12/Haris-rauf.jpg",
      "publishedAt": "2023-12-08T04:46:54Z",
      "content": "Pakistan legend Wasim Akram has come down heavily on pacer Haris Rauf, who has chosen to skip the Test tour of Australia, citing workload issues. While announcing the squad for the Test series last m… [+1221 chars]"
    },
    {
      "source": { "id": "bbc-news", "name": "BBC News" },
      "author": null,
      "title": "India win toss & bowl against England in first T20",
      "description": "Follow live text updates as England face India in the first of three T20s at the Wankhede Stadium in Mumbai.",
      "url": "https://www.bbc.co.uk/sport/live/cricket/67439653",
      "urlToImage": "https:////m.files.bbci.co.uk/modules/bbc-morph-sport-seo-meta/1.23.3/images/bbc-sport-logo.png",
      "publishedAt": "2023-12-05T13:12:49Z",
      "content": "England captain Heather Knight: \"We were going to do the same but we're going to have bat very well. It should be an alright wicket, but there is usually a bit more bounce here than you'd expect in I… [+199 chars]"
    },
    {
      "source": { "id": "al-jazeera-english", "name": "Al Jazeera English" },
      "author": "Al Jazeera",
      "title": "Pakistan court restores jailed ex-PM Imran Khan’s party election symbol",
      "description": "Khan's party claimed the election body's move was aimed at preventing him from contesting the February 8 polls.",
      "url": "https://www.aljazeera.com/news/2023/12/26/pakistan-court-restores-jailed-ex-pm-imran-khans-party-election-symbol",
      "urlToImage": "https://www.aljazeera.com/wp-content/uploads/2023/12/2018-07-27T095951Z_1424713193_RC1DBDDA8300_RTRMADP_3_PAKISTAN-ELECTION-1703603250.jpg?resize=1920%2C1440",
      "publishedAt": "2023-12-26T16:11:16Z",
      "content": "A court in Pakistan has ruled that former Prime Minister Imran Khans party can contest elections using its cricket bat logo a relief for the jailed opposition leader in advance of national elections.… [+1830 chars]"
    },
    {
      "source": { "id": null, "name": "Scientific American" },
      "author": "Jonathan O'Callaghan",
      "title": "The Science of 2024's Epic Solar Eclipse, the Last for a Generation",
      "description": "Unique studies of gravity waves, atmospheric holes and dazzling coronal displays will accompany April’s total solar eclipse across the U.S., Mexico, and Canada",
      "url": "https://www.scientificamerican.com/article/the-science-of-2024s-epic-solar-eclipse-the-last-for-a-generation/",
      "urlToImage": "https://static.scientificamerican.com/sciam/cache/file/3F67D42C-6527-41BD-91F7E42808FC6383_source.jpg?w=1200",
      "publishedAt": "2024-01-03T11:45:00Z",
      "content": "North America will soon be treated to one of the rarest of heavenly delights: a total solar eclipse. On April 8 the moon will pass in front of our star, projecting a sun-devouring shadow across the e… [+7292 chars]"
    },
    {
      "source": { "id": "al-jazeera-english", "name": "Al Jazeera English" },
      "author": "Kevin Hand",
      "title": "Australia cricketer Khawaja will ‘fight’ to wear Palestine solidarity shoes",
      "description": "Khawaja says he will fight the ICC's ruling that stops him from wearing shoes with messages of support for Palestine.",
      "url": "https://www.aljazeera.com/news/2023/12/13/australian-cricket-usman-khawaja-to-fight-decision-to-block-him-wearing-all-lives-matter-message-on-his-boots-supporting-children-in-gaza-as-icc-deem-it-political-and-in-support-of-palastine",
      "urlToImage": "https://www.aljazeera.com/wp-content/uploads/2023/12/2023-06-19T092716Z_876191936_UP1EJ6J0Q9E05_RTRMADP_3_CRICKET-TEST-ENG-AUS-1702480446.jpg?resize=1920%2C1440",
      "publishedAt": "2023-12-13T18:47:09Z",
      "content": "Australian cricket player Usman Khawaja has promised to fight a ruling by the sports governing body that he says has stopped him from displaying messages in support of those who dont have a voice.\r\nI… [+6394 chars]"
    },
    {
      "source": { "id": "bbc-news", "name": "BBC News" },
      "author": null,
      "title": "England bat first against India in third T20",
      "description": "Follow live text updates as England face India in the third and final T20 at the Wankhede Stadium in Mumbai.",
      "url": "https://www.bbc.co.uk/sport/live/cricket/67440604",
      "urlToImage": "https:////m.files.bbci.co.uk/modules/bbc-morph-sport-seo-meta/1.23.3/images/bbc-sport-logo.png",
      "publishedAt": "2023-12-09T15:16:55Z",
      "content": "England captain Heather Knight: \"The pitch played slightly different to the first one, a bit slower. It will still be a pretty good wicket so we just want to get out there first and put in a really g… [+432 chars]"
    },
    {
      "source": { "id": null, "name": "Android Police" },
      "author": "Jay Bonggolto",
      "title": "Play 'Where's Waldo' with Google for its 25th birthday",
      "description": "Google's new Doodle game is a treasure hunt through search history",
      "url": "https://www.androidpolice.com/google-25-years-celebration-wheres-waldo-style/",
      "urlToImage": "https://static1.anpoimages.com/wordpress/wp-content/uploads/2023/12/google-doodle-25.jpeg",
      "publishedAt": "2023-12-12T18:47:13Z",
      "content": "Summary\r\n<ul><li> Google celebrates 25 years with an interactive \"Most Searched Playground\" doodle, featuring 25 hot topics that shaped the world. </li><li> The game invites users to spot clues in a … [+2891 chars]"
    },
    {
      "source": { "id": null, "name": "Caschys Blog" },
      "author": "André Westphal",
      "title": "Wikipedia: Das sind die beliebtesten Artikel des Jahres 2023",
      "description": "Die Wikimedia Foundation hat bestätigt, welche die beliebtesten Wikipedia-Artikel des Jahres 2023 gewesen sind. Zu beachten: Dabei bezieht man sich ausschließlich auf Einträge in englischer Sprache. Die englischsprachige Version der Online-Enzyklopädie konnte…",
      "url": "https://stadt-bremerhaven.de/wikipedia-das-sind-die-beliebtesten-artikel-des-jahres-2023/",
      "urlToImage": "https://stadt-bremerhaven.de/wp-content/uploads/2023/12/Wikipedia-beliebt-2023.jpg",
      "publishedAt": "2023-12-06T18:30:58Z",
      "content": "Die Wikimedia Foundation hat bestätigt, welche die beliebtesten Wikipedia-Artikel des Jahres 2023 gewesen sind. Zu beachten: Dabei bezieht man sich ausschließlich auf Einträge in englischer Sprache. … [+2600 chars]"
    },
    {
      "source": { "id": null, "name": "Android Police" },
      "author": "Chandraveer Mathur",
      "title": "Here's what you cared most about in 2023, according to Google",
      "description": "Nothing encapsulates a year of curiosity like the annual Google Search trends",
      "url": "https://www.androidpolice.com/google-year-in-search-2023-is-live/",
      "urlToImage": "https://static1.anpoimages.com/wordpress/wp-content/uploads/2023/12/google-year-in-search-2023.jpg",
      "publishedAt": "2023-12-12T19:27:33Z",
      "content": "Summary\r\n<ul><li> Google's Year in Search provides insights into global trends, including the popularity of Lens for translation, entertainment, and text searches. </li><li> Imagine Dragons' \"Bones\" … [+3367 chars]"
    },
    {
      "source": { "id": "al-jazeera-english", "name": "Al Jazeera English" },
      "author": "Al Jazeera",
      "title": "Why has cricketer Khawaja been barred from showing solidarity with Gaza?",
      "description": "Australian cricketer says ICC is showing 'double standards' about when players can display political images.",
      "url": "https://www.aljazeera.com/news/2023/12/26/why-has-cricketer-khawaja-been-barred-from-showing-solidarity-with-gaza",
      "urlToImage": "https://www.aljazeera.com/wp-content/uploads/2023/12/348Z2W2-highres-1703581221.jpg?resize=1920%2C1440",
      "publishedAt": "2023-12-26T13:22:06Z",
      "content": "The Australian cricketer, Usman Khawaja, has accused the International Cricket Council (ICC) of double standards this time after being denied permission to display the image of a dove of peace on his… [+5349 chars]"
    },
    {
      "source": { "id": "bbc-news", "name": "BBC News" },
      "author": null,
      "title": "Australia and Pakistan finely poised in second Test",
      "description": "Australia end a rain-affected opening day of the second Test against Pakistan in Melbourne on 187-3 as they chase victory for series win.",
      "url": "https://www.bbc.co.uk/sport/cricket/67822099",
      "urlToImage": "https://ichef.bbci.co.uk/live-experience/cps/624/cpsprodpb/D628/production/_132142845_khawaja_gettyimages-1875765102.jpg",
      "publishedAt": "2023-12-26T12:06:09Z",
      "content": "Pakistan's Aamer Jamal claimed the wicket of Steve Smith after a successful review\r\n<table>\r\n<tr><td>Second Test, Melbourne Cricket Ground (day one of five):</td></tr><tr><td>Australia 187-3 (66 over… [+2794 chars]"
    },
    {
      "source": { "id": null, "name": "The Indian Express" },
      "author": "Sports Desk",
      "title": "Simon Katich says unfair to blame David Warner entirely for ‘Sandpaper-gate’ scandal",
      "description": "Katich feels it would be difficult for most of the Australian public to forgive David Warner for his role in the sandpaper-gate scandal.",
      "url": "https://indianexpress.com/article/sports/cricket/simon-katich-says-unfair-to-blame-david-warner-entirely-for-sandpaper-gate-scandal-9092793/",
      "urlToImage": "https://images.indianexpress.com/2024/01/David-Warner-4.jpg",
      "publishedAt": "2024-01-03T03:25:46Z",
      "content": "Former Australia cricketer Simon Katich says he understands why it is difficult for most of the Australian public to forgive David Warner for his role in the sandpaper-gate scandal but feels it is un… [+1564 chars]"
    },
    {
      "source": { "id": null, "name": "ComingSoon.net" },
      "author": "Ayesha Asif",
      "title": "Capturing Cricket: Steve Waugh in India Season 1 Streaming: Watch & Stream Online via Amazon Prime Video",
      "description": "Capturing Cricket: Steve Waugh in India Season 1 is a sports documentary that follows Australian cricket star Steve Waugh as he delves into the cricket culture in India. It was directed by Nel Minchin, written by Mithila Gupta, and released in 2020. Here’s ho…",
      "url": "https://www.comingsoon.net/guides/news/1454272-capturing-cricket-steve-waugh-in-india-season-1-streaming-watch-stream-online-via-amazon-prime-video",
      "urlToImage": "https://www.comingsoon.net/wp-content/uploads/sites/3/2023/12/Capturing-Cricket-Steve-Waugh-in-India-Season-1.jpeg?resize=1200,630",
      "publishedAt": "2023-12-21T10:41:36Z",
      "content": "Capturing Cricket: Steve Waugh in India Season 1 is a sports documentary that follows Australian cricket star Steve Waugh as he delves into the cricket culture in India. It was directed by Nel Minchi… [+2877 chars]"
    },
    {
      "source": { "id": null, "name": "Forbes" },
      "author": "Tim Ellis, Contributor, \n Tim Ellis, Contributor\n https://www.forbes.com/sites/timellis/",
      "title": "English Cricket Troubled By Its White Ball Christmas",
      "description": "England's white-ball cricket team are searching for series wins after the debacle of the World Cup. Comfort statements about comradeship aren't cutting it.",
      "url": "https://www.forbes.com/sites/timellis/2023/12/27/english-cricket-troubled-by-its-white-ball-christmas/",
      "urlToImage": "https://imageio.forbes.com/specials-images/imageserve/658c08c9f4bfd7d51ac7c906/0x0.jpg?format=jpg&height=900&width=1600&fit=bounds",
      "publishedAt": "2023-12-27T20:45:03Z",
      "content": "TAROUBA, TRINIDAD AND TOBAGO - DECEMBER 21: Jason Holder of West Indies celebrates getting the ... [+] wicket of Jos Buttler of England during the 5th T20 International between the West Indies and En… [+4662 chars]"
    },
    {
      "source": { "id": null, "name": "Forbes" },
      "author": "Tristan Lavalette, Contributor, \n Tristan Lavalette, Contributor\n https://www.forbes.com/sites/tristanlavalette/",
      "title": "What Amazon’s New Deal Means For Australian Cricket",
      "description": "Australian cricket fans will have to pay to watch their national team in major events after a broadcast deal was struck with Amazon.",
      "url": "https://www.forbes.com/sites/tristanlavalette/2023/12/07/what-amazons-new-deal-means-for-australian-cricket/",
      "urlToImage": "https://imageio.forbes.com/specials-images/imageserve/657126ce15d2fa4502a8298e/0x0.jpg?format=jpg&height=900&width=1600&fit=bounds",
      "publishedAt": "2023-12-07T13:19:03Z",
      "content": "Australia won the 2023 World Cup which was beamed on free to air television in Australia (Photo by ... [+] Alex Davidson-ICC/ICC via Getty Images)\r\nICC via Getty Images\r\nMany people in Australia woke… [+3908 chars]"
    },
    {
      "source": { "id": null, "name": "Forbes" },
      "author": "Tristan Lavalette, Contributor, \n Tristan Lavalette, Contributor\n https://www.forbes.com/sites/tristanlavalette/",
      "title": "Lucrative Cricket Deals Struck At Women’s Premier League Auction In India",
      "description": "Mighty India's stranglehold of cricket has started to move beyond the men's game as underlined by the lucrative deals at the Women's Premier League auction.",
      "url": "https://www.forbes.com/sites/tristanlavalette/2023/12/10/lucrative-cricket-deals-struck-at-indias-womens-premier-league-auction/",
      "urlToImage": "https://imageio.forbes.com/specials-images/imageserve/6575b42066719a6817460ba3/0x0.jpg?format=jpg&height=900&width=1600&fit=bounds",
      "publishedAt": "2023-12-10T14:27:56Z",
      "content": "Mumbai Indians won the Women's Premier League title earlier in the year (Photo by Pankaj ... [+] Nangia/Getty Images)\r\nGetty Images\r\nMighty India's stranglehold of cricket has started to move beyond … [+3866 chars]"
    },
    {
      "source": { "id": null, "name": "Forbes" },
      "author": "Tristan Lavalette, Contributor, \n Tristan Lavalette, Contributor\n https://www.forbes.com/sites/tristanlavalette/",
      "title": "Pakistan’s Misery In Australia Continues In Worrying Sign For Test Cricket",
      "description": "The struggling five-day Test cricket format needs a strong Pakistan, who are once again hopelessly outmatched in Australia.",
      "url": "https://www.forbes.com/sites/tristanlavalette/2023/12/23/pakistans-cricket-misery-in-australia-reaches-new-low/",
      "urlToImage": "https://imageio.forbes.com/specials-images/imageserve/65853950676f48a9b9a2c74b/0x0.jpg?format=jpg&height=900&width=1600&fit=bounds",
      "publishedAt": "2023-12-24T04:47:43Z",
      "content": "Shan Masood had a disastrous captaincy debut (Photo by Will Russell/Getty Images)\r\nGetty Images\r\nWasim Akram was slumped in his chair, glumly staring at his phone, probably scrolling through messages… [+4124 chars]"
    },
    {
      "source": { "id": null, "name": "Clubic" },
      "author": "Stéphane Ficca",
      "title": "Wikimédia dévoile le top 25 des sujets plus recherchés en 2023",
      "description": "Comme des millions d'utilisateurs, vous consultez sans doute Wikipédia, et le bilan de l'année 2023 en passe de se conclure est désormais disponible.",
      "url": "https://www.clubic.com/actualite-511642-wikimedia-devoile-le-top-25-des-sujets-plus-recherches-en-2023.html",
      "urlToImage": "https://pic.clubic.com/v1/images/2170690/raw",
      "publishedAt": "2023-12-07T14:32:00Z",
      "content": "Comme des millions d'utilisateurs, vous consultez sans doute Wikipédia, et le bilan de l'année 2023 en passe de se conclure est désormais disponible.\r\nLa version anglaise de Wikipédia a été consultée… [+3402 chars]"
    },
    {
      "source": { "id": null, "name": "Github.com" },
      "author": "tlack",
      "title": "Atree: A simple and efficient pointer-free tree implementation",
      "description": "Stevan Apter-style trees in C++17. Contribute to tlack/atree development by creating an account on GitHub.",
      "url": "https://github.com/tlack/atree",
      "urlToImage": "https://opengraph.githubassets.com/611059a861c6e93f20d37c22d9d9f0a61c598a4b4912000870ca744a11e43e10/tlack/atree",
      "publishedAt": "2023-12-16T17:52:48Z",
      "content": "Apter Trees are a simpler representation of trees using just two vectors: [nodevalues, parentindices].\r\nThis repo contains a tree-like data type implemented in C++17, in the style of Stevan Apter in\r… [+7852 chars]"
    },
    {
      "source": { "id": "bbc-news", "name": "BBC News" },
      "author": null,
      "title": "Important to keep improving heart screenings - Taylor",
      "description": "It is important to continue improving heart screenings in sport in the wake of Tom Lockyer's cardiac arrest, says ex-cricketer James Taylor.",
      "url": "https://www.bbc.co.uk/sport/football/67746609",
      "urlToImage": "https://ichef.bbci.co.uk/live-experience/cps/624/cpsprodpb/133CD/production/_132079787_gettyimages-1686325306.jpg",
      "publishedAt": "2023-12-18T11:00:15Z",
      "content": "Luton's game against Bournemouth was abandoned after Tom Lockyer collapsed during the second half\r\nIt is important to continue improving heart screenings in sport in the wake of Tom Lockyer's on-pitc… [+1876 chars]"
    },
    {
      "source": { "id": null, "name": "Small Business Trends" },
      "author": "Lisa Price",
      "title": "How to Start a Butterfly Farm",
      "description": "Wondering how to start a butterfly farm? From writing a business plan to marketing, here's everything you need to know.",
      "url": "https://smallbiztrends.com/2023/12/butterfly-farm.html",
      "urlToImage": "https://media.smallbiztrends.com/2023/03/How-to-Start-a-Butterfly-Farm.png",
      "publishedAt": "2023-12-22T09:05:59Z",
      "content": "If youve been thinking about how to make money farming, but dont know how to start farming with no money, becoming a butterfly farmer warrants your consideration.\r\nButterfly farmers can start small, … [+15340 chars]"
    },
    {
      "source": { "id": null, "name": "Forbes" },
      "author": "Tristan Lavalette, Contributor, \n Tristan Lavalette, Contributor\n https://www.forbes.com/sites/tristanlavalette/",
      "title": "Record Multi-Million Dollar Paydays At Cricket’s Indian Premier League Auction",
      "description": "Mitchell Starc and Pat Cummins sold for record sums at the Indian Premier League auction to underline the lucrative tournament's heft.",
      "url": "https://www.forbes.com/sites/tristanlavalette/2023/12/19/record-multi-million-dollar-paydays-at-crickets-indian-premier-league-auction/",
      "urlToImage": "https://imageio.forbes.com/specials-images/imageserve/65819a383a755435efc5cfb5/0x0.jpg?format=jpg&height=900&width=1600&fit=bounds",
      "publishedAt": "2023-12-19T14:57:22Z",
      "content": "Pat Cummins and Mitchell Starc had record deals in the IPL (Photo by Darrian Traynor-ICC/ICC via ... [+] Getty Images)\r\nICC via Getty Images\r\nJust a month after they helped Australia memorably win cr… [+3623 chars]"
    },
    {
      "source": { "id": null, "name": "The Indian Express" },
      "author": "PTI",
      "title": "Imran Khan’s party to challenge ‘flawed’ ECP verdict on intra-party polls, electoral symbol in high court",
      "description": "A five-member panel of the Election Commission of Pakistan (ECP) on Friday rejected the organisational elections of Khan's party and its plea to have a cricket bat as the electoral symbol for the general elections.",
      "url": "https://indianexpress.com/article/pakistan/imran-khan-pti-election-commission-polls-peshawar-9082320/",
      "urlToImage": "https://images.indianexpress.com/2023/12/dec21-66.jpg",
      "publishedAt": "2023-12-25T13:05:17Z",
      "content": "The Pakistan Tehreek-e-Insaf (PTI) party on Monday said that it will challenge the election commission’s decision to declare its intra-party polls as unconstitutional and revoke the iconic cricket ba… [+2796 chars]"
    },
    {
      "source": { "id": null, "name": "The Indian Express" },
      "author": "Sriram Veera",
      "title": "Nathan Lyon crosses 500 Test wickets: His journey from self-doubts and emerging from Shane Warne’s shadow",
      "description": "Cricket fans are lucky to have Lyon and Ashwin in the same era, one a traditionalist, other an innovator and together they have made kids fall in love with the art of off spin.",
      "url": "https://indianexpress.com/article/sports/cricket/nathan-lyon-500-test-wickets-journey-self-doubts-emerging-from-shane-warnes-shadow-9072047/",
      "urlToImage": "https://images.indianexpress.com/2023/12/Lyon.png",
      "publishedAt": "2023-12-17T15:26:33Z",
      "content": "Cricket is lucky to have two artists at the top of their game, Nathan Lyon, who went past 500 Test wickets against Pakistan in the Perth Test, and R Ashwin — one a traditionalist and the other an inn… [+11947 chars]"
    },
    {
      "source": { "id": "al-jazeera-english", "name": "Al Jazeera English" },
      "author": "Al Jazeera",
      "title": "Cummins takes 10 wickets to lead Australia to Pakistan series triumph",
      "description": "A fired-up Cummins bagged five wickets and 10 in the match to earn Australia a nail-biting 79-run win in second Test.",
      "url": "https://www.aljazeera.com/sports/2023/12/29/cummins-takes-10-wickets-to-lead-australia-to-pakistan-series-triumph",
      "urlToImage": "https://www.aljazeera.com/wp-content/uploads/2023/12/AP23363270415990-1703846916.jpg?resize=1920%2C1440",
      "publishedAt": "2023-12-29T10:52:08Z",
      "content": "Australia captain Pat Cummins took 10 wickets in a masterclass of clutch bowling to end stout Pakistan resistance and lead his side to a 79-run victory on the fourth day of the second test, locking u… [+3713 chars]"
    },
    {
      "source": { "id": null, "name": "The Indian Express" },
      "author": "Vibha Maru",
      "title": "Why do Virat Kohli and Anushka Sharma come across as the perfect couple?",
      "description": "In a country where cricket and cinema are revered as religions, the union of Virat Kohli and Anushka Sharma inevitably sparked a firestorm of attention. However, it's their approach towards their relationship that serves as an inspiration for many.",
      "url": "https://indianexpress.com/article/entertainment/bollywood/why-do-virat-kohli-and-anushka-sharma-come-across-as-the-perfect-couple-9059061/",
      "urlToImage": "https://images.indianexpress.com/2023/12/anushka.jpg",
      "publishedAt": "2023-12-11T05:13:51Z",
      "content": "Right after India lost the World Cup final to Australia, I found my heartbroken husband looking for videos of Anushka Sharma and Virat Kohli from the tournament. It was an unusual sight considering h… [+4053 chars]"
    },
    {
      "source": { "id": "al-jazeera-english", "name": "Al Jazeera English" },
      "author": "Al Jazeera",
      "title": "Australia’s Starc, Cummins become most expensive signings in IPL history",
      "description": "The Australian cricketers landed record deals in auction, surpassing England's Sam Curran's record signing in 2022.",
      "url": "https://www.aljazeera.com/news/2023/12/19/australias-starc-and-cummins-now-most-expensive-signings-in-ipl-history",
      "urlToImage": "https://www.aljazeera.com/wp-content/uploads/2023/12/2023-11-16T164607Z_1510742670_UP1EJBG1AKTGT_RTRMADP_3_CRICKET-WORLDCUP-ZAF-AUS-1702987853-1702987939.jpg?resize=1200%2C630&quality=80",
      "publishedAt": "2023-12-19T12:38:57Z",
      "content": "Australias Mitchell Starc became the most expensive signing in the history of the Indian Premier League (IPL), topping the record figure paid for teammate Pat Cummins at the competitions auction a fe… [+2379 chars]"
    },
    {
      "source": { "id": "al-jazeera-english", "name": "Al Jazeera English" },
      "author": "Annesha Ghosh",
      "title": "Who is Mallika Sagar, the IPL’s first female auctioneer?",
      "description": "Sagar is set to break new ground as the first female auctioneer to wield the gavel at the IPL 2024 auction.",
      "url": "https://www.aljazeera.com/sports/2023/12/18/ipl-auction-who-is-mallika-sagar-auctioneer-wpl-first-woman-cricket-franchise-t20-interview",
      "urlToImage": "https://www.aljazeera.com/wp-content/uploads/2023/12/mallika_sagar_1_720-1702884296.jpg?resize=1200%2C675",
      "publishedAt": "2023-12-18T13:52:15Z",
      "content": "Mumbai, India  Mallika Sagars introduction to the world of auctioneering came when, as a teenager in her hometown Mumbai, she read a book with a female auctioneer as its protagonist.\r\nAnd, perhaps, a… [+5645 chars]"
    },
    {
      "source": { "id": null, "name": "Forbes" },
      "author": "Tristan Lavalette, Contributor, \n Tristan Lavalette, Contributor\n https://www.forbes.com/sites/tristanlavalette/",
      "title": "New York Is Set To Host Money-Spinner India And Pakistan Match At Cricket’s T20 World Cup",
      "description": "The India and Pakistan cricket clash - with so much at stake geopolitically and for the national psyche of both countries - will add to New York's sporting lore.",
      "url": "https://www.forbes.com/sites/tristanlavalette/2023/12/21/new-york-is-set-to-host-money-spinner-india-and-pakistan-match-at-crickets-t20-world-cup/",
      "urlToImage": "https://imageio.forbes.com/specials-images/imageserve/6584bf6cbc16f3faff89c11c/0x0.jpg?format=jpg&height=900&width=1600&fit=bounds",
      "publishedAt": "2023-12-22T01:05:48Z",
      "content": "Pakistan and India set to play in New York during next year's T20 World Cup (Photo by Daniel ... [+] Pockett-ICC/ICC via Getty Images)\r\nICC via Getty Images\r\nIndia and Pakistan, cricket's fiercest an… [+4617 chars]"
    },
    {
      "source": { "id": null, "name": "Forbes" },
      "author": "Manasi Pathak, Contributor, \n Manasi Pathak, Contributor\n https://www.forbes.com/sites/manasipathak/",
      "title": "David Warner Retires From ODIs But Keeps Door Open For Champions Trophy",
      "description": "Australia opener David Warner has officially declared his retirement from both one-day internationals and tests, leaving an indelible mark on the cricketing world.",
      "url": "https://www.forbes.com/sites/manasipathak-1/2024/01/01/david-warner-retires-from-odis-but-keeps-door-open-for-champions-trophy/",
      "urlToImage": "https://imageio.forbes.com/specials-images/imageserve/659276fe68f077271669f9da/0x0.jpg?format=jpg&height=900&width=1600&fit=bounds",
      "publishedAt": "2024-01-01T08:36:08Z",
      "content": "BANGALORE, INDIA - OCTOBER 20: David Warner of Australia celebrates their century during the ICC ... [+] Men's Cricket World Cup India 2023 between Australia and Pakistan at M. Chinnaswamy Stadium on… [+3216 chars]"
    },
    {
      "source": { "id": null, "name": "Forbes" },
      "author": "Tim Ellis, Contributor, \n Tim Ellis, Contributor\n https://www.forbes.com/sites/timellis/",
      "title": "Tom Curran BBL Ban Shows Cricket Must Protect The Respect For Umpires",
      "description": "Tom Curran's BBL ban for intimidating an umpire was a voltage shock to the Spirit of Cricket. Umpires know their place but Curran overstepped the mark.",
      "url": "https://www.forbes.com/sites/timellis/2023/12/23/tom-curran-bbl-ban-shows-cricket-must-protect-the-respect-for-umpires/",
      "urlToImage": "https://imageio.forbes.com/specials-images/imageserve/65875a39413b759d7eeaa59f/0x0.jpg?format=jpg&height=900&width=1600&fit=bounds",
      "publishedAt": "2023-12-23T23:52:41Z",
      "content": "Umpire Dickie Bird (centre) removes the bails for the last time in a Test match (Photo by Chris ... [+] Turvey/EMPICS via Getty Images)\r\nPA Images via Getty Images\r\nOne of the most shocking images on… [+4878 chars]"
    },
    {
      "source": { "id": null, "name": "Forbes" },
      "author": "Tristan Lavalette, Contributor, \n Tristan Lavalette, Contributor\n https://www.forbes.com/sites/tristanlavalette/",
      "title": "A Shot Clock Hopes To Address Cricket’s Problem With Being Too Slow",
      "description": "A shot clock has been introduced in shorter forms of cricket to speed the game up as the sport tries to eradicate dead time.",
      "url": "https://www.forbes.com/sites/tristanlavalette/2023/12/22/a-shot-clock-hopes-to-address-crickets-problem-with-being-too-slow/",
      "urlToImage": "https://imageio.forbes.com/specials-images/imageserve/65853ca05b853a9ea1ae8ed5/0x0.jpg?format=jpg&height=900&width=1600&fit=bounds",
      "publishedAt": "2023-12-22T23:39:44Z",
      "content": "Cricket hopes to speed up its matches (Photo by Ashley Allen/Getty Images)\r\nGetty Images\r\nCricket has always been perceived as slow. A game that traditionally lasts five days with players standing ar… [+4012 chars]"
    },
    {
      "source": { "id": null, "name": "Forbes" },
      "author": "Tristan Lavalette, Contributor, \n Tristan Lavalette, Contributor\n https://www.forbes.com/sites/tristanlavalette/",
      "title": "Pakistan Remain The World’s Most Entertaining Cricket Team Even In Defeat",
      "description": "Pakistan issued a reminder of why they're innately the most baffling team in cricket after a painful Test defeat to Australia",
      "url": "https://www.forbes.com/sites/tristanlavalette/2023/12/29/pakistan-remain-the-worlds-most-entertaining-cricket-team-even-in-defeat/",
      "urlToImage": "https://imageio.forbes.com/specials-images/imageserve/658ecc3e871c95d985d5bc82/0x0.jpg?format=jpg&height=900&width=1600&fit=bounds",
      "publishedAt": "2023-12-30T01:46:08Z",
      "content": "Mohammad Rizwan was the key wicket for Pakistan late on day four (Photo by Morgan Hancock - ... [+] CA/Cricket Australia via Getty Images)\r\nCricket Australia via Getty Images\r\nAdmit it, you were ente… [+4969 chars]"
    },
    {
      "source": { "id": null, "name": "Forbes" },
      "author": "Tim Ellis, Contributor, \n Tim Ellis, Contributor\n https://www.forbes.com/sites/timellis/",
      "title": "King Kohli Reigns, But Shubman Gill Is New Prince Of Indian Cricket",
      "description": "Shubman Gill is the new darling of Indian cricket. His classical style is fused with substance and he's making waves in all formats of the game.",
      "url": "https://www.forbes.com/sites/timellis/2023/12/20/king-kohli-reigns-but-shubman-gill-is-new-prince-of-indian-cricket/",
      "urlToImage": "https://imageio.forbes.com/specials-images/imageserve/6582fc9f357c1e444064ec03/0x0.jpg?format=jpg&height=900&width=1600&fit=bounds",
      "publishedAt": "2023-12-20T15:29:36Z",
      "content": "THIRUVANANTHAPURAM, INDIA - OCTOBER 02: Shubman Gill of India poses for a portrait ahead of the ICC ... [+] Men's Cricket World Cup India 2023 on October 02, 2023 in Thiruvananthapuram, India. (Photo… [+4571 chars]"
    },
    {
      "source": { "id": null, "name": "Forbes" },
      "author": "Tim Ellis, Contributor, \n Tim Ellis, Contributor\n https://www.forbes.com/sites/timellis/",
      "title": "Is There Anything That Pat Cummins Can’t Do?",
      "description": "Pat Cummins has led Australia to a full house of trophies on the cricket pitch in 2023. His detractors are trying to find fault elsewhere.",
      "url": "https://www.forbes.com/sites/timellis/2023/12/30/is-there-anything-that-pat-cummins-cant-do/",
      "urlToImage": "https://imageio.forbes.com/specials-images/imageserve/658f628ea7d15e83df10fa0e/0x0.jpg?format=jpg&height=900&width=1600&fit=bounds",
      "publishedAt": "2023-12-30T15:37:39Z",
      "content": "Australia's Pat Cummins holds up the ball after taking 5 wickets in Pakistan's first innings during ... [+] the third day of their cricket test match in Melbourne, Thursday, Dec. 28, 2023. (AP Photo/… [+5233 chars]"
    },
    {
      "source": { "id": null, "name": "Forbes" },
      "author": "Tim Ellis, Contributor, \n Tim Ellis, Contributor\n https://www.forbes.com/sites/timellis/",
      "title": "West Indies Cricket Is Missing Its Days in The Sun As Money Talks",
      "description": "The West Indies used to be the kings of cricket. Now they can't even qualify for World Cups unless they are co-hosting them. It's a long way back.",
      "url": "https://www.forbes.com/sites/timellis/2023/12/06/west-indies-cricket-is-missing-its-days-in-the-sun-as-money-talks/",
      "urlToImage": "https://imageio.forbes.com/specials-images/imageserve/656f1051cfd093992526351b/0x0.jpg?format=jpg&height=900&width=1600&fit=bounds",
      "publishedAt": "2023-12-06T08:42:06Z",
      "content": "Shai Hope, of West Indies, hits 6 during the first one day international (ODI) cricket match between ... [+] England and West Indies at Sir Vivian Richards Stadium in North Sound, Antigua and Barbuda… [+5757 chars]"
    },
    {
      "source": { "id": null, "name": "Sky Sports" },
      "author": null,
      "title": "Richardson appointed Rotherham manager",
      "description": "Leam Richardson has been confirmed by Rotherham as the club's new manager, signing a contract until 2026 almost a month after the Millers sacked Matt Taylor.",
      "url": "https://www.skysports.com/football/news/11095/13028255/leam-richardson-appointed-rotherham-manager-on-three-and-a-half-year-deal-after-matt-taylor-departure",
      "urlToImage": "https://e0.365dm.com/22/10/1600x900/skysports-breaking-news-story_5927130.jpg?20221010162109",
      "publishedAt": "2023-12-11T17:13:00Z",
      "content": "Leam Richardson has been appointed Rotherham manager, signing a contract until 2026 almost a month after the Millers sacked Matt Taylor.\r\nMore to follow…\r\nThis is a breaking news story that is being … [+790 chars]"
    },
    {
      "source": { "id": null, "name": "Forbes" },
      "author": "Manasi Pathak, Contributor, \n Manasi Pathak, Contributor\n https://www.forbes.com/sites/manasipathak/",
      "title": "Kieron Pollard Added To England’s Coaching Staff For T20 World Cup",
      "description": "Former West Indies captain Kieron Pollard has been appointed to the England coaching staff for the 2024 Twenty20 World Cup in the United States and the West Indies.",
      "url": "https://www.forbes.com/sites/manasipathak-1/2023/12/25/kieron-pollard-added-to-englands-coaching-staff-for-t20-world-cup/",
      "urlToImage": "https://imageio.forbes.com/specials-images/imageserve/6589299516df1e98de970df8/0x0.jpg?format=jpg&height=900&width=1600&fit=bounds",
      "publishedAt": "2023-12-25T07:11:56Z",
      "content": "SYDNEY, AUSTRALIA - FEBRUARY 08: Kieron Pollard of West Indies celebrates scoring his century ... [+] during game four of the Commonwealth Bank One Day International Series between Australia and the … [+2527 chars]"
    },
    {
      "source": { "id": null, "name": "The Indian Express" },
      "author": "Sayak Dutta",
      "title": "India vs South Africa Live Score, 2nd ODI: KL Rahul-led IND look to wrap up series against SA in Gqeberha",
      "description": "India vs South Africa 2nd ODI Live Score: India are already 1-0 up in the series after thrashing South Africa by 8 wickets in Johannesburg in the weekend.",
      "url": "https://indianexpress.com/article/sports/cricket/india-vs-south-africa-live-score-2nd-odi-ind-vs-sa-full-scorecard-latest-updates-st-georges-park-gqeberha-9073603/",
      "urlToImage": "https://images.indianexpress.com/2023/12/IND-SA-2nd-ODI-live.png",
      "publishedAt": "2023-12-19T08:31:24Z",
      "content": "India's bowler Arshdeep Singh succefully appeals for LBW dismissal against South Africa's batsman Rassie van der Dussen during the first One Day International cricket match between South Africa and I… [+1248 chars]"
    },
    {
      "source": { "id": null, "name": "The Indian Express" },
      "author": "Pratyush Raj",
      "title": "Sourav Ganguly promised that Delhi Capitals will bid even Rs 10 crore for Kumar Kushagra, said he reminded him of MS Dhoni: father Shashikant",
      "description": "The 19-year-old wicketkeeper-batsman from Jharkhand was picked by Delhi Capitals for Rs 7.20 crore, following a bidding war between Gujarat Titans and Capitals.",
      "url": "https://indianexpress.com/article/sports/cricket/sourav-ganguly-kumar-kushagra-ms-dhoni-delhi-capitals-ipl-auction-10-crore-9075153/",
      "urlToImage": "https://images.indianexpress.com/2023/12/Dubey-and-Dhoni.jpg",
      "publishedAt": "2023-12-19T18:12:06Z",
      "content": "Kumar Kushagra’s father, Shashikant, says former India captain Sourav Ganguly was so impressed with his son at the trials held by the Delhi Capitals franchise that he promised that the team would get… [+2099 chars]"
    },
    {
      "source": { "id": "bbc-news", "name": "BBC News" },
      "author": null,
      "title": "Why are golf and other sports limiting advances?",
      "description": "Golf becomes the latest sport to introduce new rules limiting the impact of performance advances - so why is the trend so common across sport?",
      "url": "https://www.bbc.co.uk/sport/golf/67636402",
      "urlToImage": "https://ichef.bbci.co.uk/live-experience/cps/624/cpsprodpb/182BC/production/_131940099_gettyimages-1798116905.jpg",
      "publishedAt": "2023-12-06T15:01:37Z",
      "content": "Rory McIlroy was the biggest hitter on the PGA Tour this season with an average driving distance of 326.3 yards\r\nGolf has become the latest sport to introduce new rules to limit the impact of perform… [+3826 chars]"
    },
    {
      "source": { "id": null, "name": "Inside.com.tw" },
      "author": "Sisley",
      "title": "ChatGPT 登 2023 年瀏覽量最高的英文維基百科頁面",
      "description": "維基媒體基金會表示，2023 年英文維基百科頁面的總瀏覽量超過 840 億次，ChatGPT 以 4950 萬次的瀏覽量位居年度 25 大排行榜榜首。",
      "url": "https://www.inside.com.tw/article/33535-chatgpt-wiki-no1",
      "urlToImage": "https://bucket-img.tnlmedia.com/cabinet/2023/12/218ed06a-42d6-4dec-968b-ec7bb9f0d37a.jpg?w=1200&h=630&fit=crop&auto=compress",
      "publishedAt": "2023-12-06T03:54:00Z",
      "content": "ChatGPT 2023 \r\n2023 840 ChatGPT 4950 25 \r\nChatGPT AI 11 30 OpenAI 1 \r\nChatGPT 2023 Deaths in 2023 4270 2023 2023 Cricket World Cup 3820 Indian Premier League 3200 2830 Elon Musk 1437 \r\nMia\r\nINSIDE Go… [+11 chars]"
    },
    {
      "source": { "id": null, "name": "Artofmanliness.com" },
      "author": "Brett & Kate McKay",
      "title": "Silencing the Ring: Proven Strategies for Tinnitus Relief",
      "description": "Back in January of this year, I was sitting on the couch with my family, watching a movie. Suddenly, my ears popped, and I heard a loud ringing, like the ear ringing you might experience after leaving a loud rock show.  I wasn’t alarmed by this. Random ear ri…",
      "url": "https://www.artofmanliness.com/health-fitness/health/silencing-the-ring-proven-strategies-for-tinnitus-relief/",
      "urlToImage": "https://content.artofmanliness.com/uploads/2023/12/tin.jpg",
      "publishedAt": "2023-12-05T14:27:20Z",
      "content": "Back in January of this year, I was sitting on the couch with my family, watching a movie. Suddenly, my ears popped, and I heard a loud ringing, like the ear ringing you might experience after leavin… [+13916 chars]"
    },
    {
      "source": { "id": "bbc-news", "name": "BBC News" },
      "author": null,
      "title": "Remembering the sports stars we lost in 2023",
      "description": "A chance to reflect on the people from the world of sport who have died in the past 12 months",
      "url": "https://www.bbc.co.uk/sport/sports-personality/67726877",
      "urlToImage": "https://ichef.bbci.co.uk/live-experience/cps/624/cpsprodpb/6B89/production/_132092572_gettyimages-1281888478.jpg",
      "publishedAt": "2023-12-19T21:00:31Z",
      "content": "A host of figures from the world of sport died in 2023.\r\nHere, we remember some of those sporting names.\r\nAMERICAN SPORTS\r\nVida Blue:external-link\r\nThree-time Major League Baseball champion, the youn… [+41181 chars]"
    },
    {
      "source": { "id": null, "name": "Nautil.us" },
      "author": "Jeffrey McKinnon",
      "title": "A peculiar fish and an evolutionary mystery",
      "description": "What we can learn from the macabre diets of a curious species of cichlids.",
      "url": "https://nautil.us/a-peculiar-fish-and-an-evolutionary-mystery-458958/",
      "urlToImage": "https://assets.nautil.us/sites/3/nautilus/McKinnon-right-lead.png?auto=compress&fm=png&ixlib=php-3.3.1",
      "publishedAt": "2023-12-05T12:42:47Z",
      "content": "Our story begins in 1954, on the shores of Lake Tanganyika in what was then Belgian Congo, with a little paper about fish diets titled A Curious Ecological Niche among the Fishes of Lake Tanganyika.\r… [+6082 chars]"
    },
    {
      "source": { "id": null, "name": "Android Central" },
      "author": "michael.hicks@futurenet.com (Michael L Hicks)",
      "title": "Garmin Venu 3 vs. Venu Sq 2 Music: Which is the best 'mainstream' Garmin watch?",
      "description": "The Garmin Venu 3 is our favorite fitness smartwatch, while the Venu Sq 2 is a compromise pick that costs much less. They're both relatively mainstream compared to most rugged (aka ugly) Garmin watches, so you'll want to start with one of these. But which?",
      "url": "https://www.androidcentral.com/wearables/garmin-venu-3-vs-venu-sq-2",
      "urlToImage": "https://cdn.mos.cms.futurecdn.net/gPG6UCAuHUKqzvf9LchGPV-1200-80.jpeg",
      "publishedAt": "2023-12-31T15:00:07Z",
      "content": "The Garmin Venu 3 looks fantastic, has a ton of new tricks and upgrades for the modern athlete, and gives you the mic/speaker combo you need to take phone calls on your wrist. It's also quite expensi… [+13359 chars]"
    },
    {
      "source": { "id": null, "name": "The Indian Express" },
      "author": "Sandeep Dwivedi",
      "title": "Looking at 2024: Politics and sport, arts of the possible",
      "description": "Politics and sport will remain in the national conversation next year — and will continue to draw from the metaphors and possibilities of each other. The changes in India’s favourite sports team will become permanent, even as the nation looks at new heroes in…",
      "url": "https://indianexpress.com/article/explained/explained-sports/politics-and-sport-arts-of-the-possible-9088072/",
      "urlToImage": "https://images.indianexpress.com/2023/12/sportttt.jpg",
      "publishedAt": "2023-12-30T01:37:49Z",
      "content": "Politicians often use sporting metaphors to put their point across during elections. Example: A front-runner can always be on a sticky wicket if he lacks the knock-out punch.It works the other way ro… [+9449 chars]"
    },
    {
      "source": { "id": "bbc-news", "name": "BBC News" },
      "author": null,
      "title": "Behind the sporting franchise focused on women",
      "description": "BBC Sport takes a look at how Loughborough Lightning have grown from a netball team to a multi-sport franchise focused on women.",
      "url": "https://www.bbc.co.uk/sport/67572226",
      "urlToImage": "https://ichef.bbci.co.uk/live-experience/cps/624/cpsprodpb/10373/production/_131891466_gettyimages-1498100155.jpg",
      "publishedAt": "2023-12-05T09:53:54Z",
      "content": "Loughborough Lightning are defending Netball Super League champions\r\nIt was on a university netball court in rural Leicestershire almost two decades ago that one of Britain's most ambitious and endur… [+8259 chars]"
    },
    {
      "source": { "id": null, "name": "Forbes" },
      "author": "Tristan Lavalette, Contributor, \n Tristan Lavalette, Contributor\n https://www.forbes.com/sites/tristanlavalette/",
      "title": "India’s Quest For Test Cricket Greatness On The Line In South Africa",
      "description": "Mighty India are tasked with tackling the difficult surroundings of South Africa in what has long been described as their \"final frontier\"",
      "url": "https://www.forbes.com/sites/tristanlavalette/2023/12/26/indias-quest-for-test-cricket-greatness-on-the-line-in-south-africa/",
      "urlToImage": "https://imageio.forbes.com/specials-images/imageserve/658a164660b46291fabde9e7/0x0.jpg?format=jpg&height=900&width=1600&fit=bounds",
      "publishedAt": "2023-12-26T05:27:17Z",
      "content": "Rohit Sharma will lead India's charge against South Africa (Photo by RANDY BROOKS/AFP via Getty ... [+] Images)\r\nAFP via Getty Images\r\nFor the past month, India have had to do some soul searching fol… [+3756 chars]"
    },
    {
      "source": { "id": "bbc-news", "name": "BBC News" },
      "author": null,
      "title": "Sports Personality of the Year 2023 - follow build-up to 70th show",
      "description": "Follow live build-up to the 2023 Sports Personality of the Year as the show celebrates its 70th show.",
      "url": "https://www.bbc.co.uk/sport/live/sports-personality/67726239",
      "urlToImage": "https:////m.files.bbci.co.uk/modules/bbc-morph-sport-seo-meta/1.23.3/images/bbc-sport-logo.png",
      "publishedAt": "2023-12-18T09:10:28Z",
      "content": "Lets refresh our memories with some of\r\nthe headlines from 2023.\r\nThe Lionesses went agonisingly close to\r\nfollowing up their Euro 2022 triumph as they reached the World Cup final,\r\nlosing 1-0 to Spa… [+1003 chars]"
    },
    {
      "source": { "id": null, "name": "Cracked.com" },
      "author": "Keegan Kelly",
      "title": "Kaitlin Olson Is the Emmys’ Most Snubbed Female Comedian",
      "description": "The Emmys will continue to ignore ‘It’s Always Sunny in Philadelphia’ for no reason later this month",
      "url": "https://www.cracked.com/article_40678_kaitlin-olson-is-the-emmys-most-snubbed-female-comedian.html",
      "urlToImage": "https://s3.crackedcdn.com/phpimages/article/9/8/0/1000980.jpg",
      "publishedAt": "2024-01-03T01:00:00Z",
      "content": "Two weeks from today marks the 75th Primetime Emmy Awards where, supposedly, the years most talented comedienne will earn TV comedys highest honor not that Kaitlin Olsons ever had one.\r\nIts Always Su… [+2381 chars]"
    },
    {
      "source": { "id": "bbc-news", "name": "BBC News" },
      "author": null,
      "title": "Uncapped Bashir in England Test squad for India",
      "description": "Uncapped trio Shoaib Bashir, Tom Hartley and Gus Atkinson have been called up to the England Test squad for the upcoming tour of India.",
      "url": "https://www.bbc.co.uk/sport/cricket/67681286",
      "urlToImage": "https://ichef.bbci.co.uk/live-experience/cps/624/cpsprodpb/AC37/production/_131978044_gettyimages-1571734045.jpg",
      "publishedAt": "2023-12-11T12:00:09Z",
      "content": "Gus Atkinson, Tom Hartley and Shoaib Bashir are all uncapped at Test level\r\n<table><tr><th>India v England Test series</th></tr>\r\n<tr><td>Dates: 25 January - 11 March</td></tr><tr><td>Venues: Hyderab… [+2804 chars]"
    },
    {
      "source": { "id": null, "name": "Forbes" },
      "author": "Tim Ellis, Contributor, \n Tim Ellis, Contributor\n https://www.forbes.com/sites/timellis/",
      "title": "India Cricket Team Tops All Charts But Rankings Feel Empty At Year End",
      "description": "India's cricketers have just been humbled in South Africa after a painful World Cup loss. They are ranked number one in every format, but it's damned with faint praise.",
      "url": "https://www.forbes.com/sites/timellis/2023/12/31/india-cricket-team-tops-all-charts-but-rankings-feel-empty-at-year-end/",
      "urlToImage": "https://imageio.forbes.com/specials-images/imageserve/6591cdc70c1bed284ef7547f/0x0.jpg?format=jpg&height=900&width=1600&fit=bounds",
      "publishedAt": "2023-12-31T21:50:00Z",
      "content": "India's captain Rohit Sharma, left, leaves the field after being dismissed by South Africa's bowler ... [+] Kagiso Rabada, for 5 runs during the first day of the Test cricket match between South Afri… [+4999 chars]"
    }
  ]
  constructor(){
    super();
    this.state = {
      articles :this.articles,
      loading :false
    }
  }
  render() {
    return (
      <div className='container my-3'>
        <h2>NewsBreak- Top Headlines</h2>
        <div className="row">
        {this.state.articles.map((element)=>{
          return <div className="col-md-4" key = {element.url}>
          <NewsItem  title={element.title.slice(0,30)} description = {element.description.slice(0,90)} imageUrl = {element.urlToImage} newsUrl = {element.url}/>
          </div>
          })}


        
        </div>
        
        
        
      </div>
    )
  }
}

export default News
