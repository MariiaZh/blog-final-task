import Article from "./Article";

const dummy_posts: Article[] = [
    {
        articleId: "2845",
        authorIdKey: '01',
        image: 'https://resizing.flixster.com/_CAENim1mgBQ_idwbEkGMaaALpA=/ems.ZW1zLXByZC1hc3NldHMvbW92aWVzLzMzYWI2MmEyLWMxOWEtNDNjMC05NTdhLTUzYjFlNDA2MjJjZi5qcGc=',
        title: "‘House of Gucci’ is Oddly Dull Whenever Jared Leto is Offscreen",
        text: "There are a handful of hard truths in the world, but surely one is that no one expects Jared Leto to be the highlight of a movie. Well, aside from Leto himself, obviously. That seems an especially assured guarantee for a film stacked with an epic cast of talents old and new and directed by a legendary filmmaker, and yet — Leto is far and away the best and most interesting element in Ridley Scott‘s House of Gucci.It’s Italy in the 70s, a wild time where fashion and family reigns, and while Patrizia Reggiani (Lady Gaga) aspires towards the former whenever possible she’s already entrenched in the latter as a secretary at her father’s transportation business. The winds of change arrive when she meets Maurizio Gucci (Adam Driver) at a party and is almost as impressed by his martini-making skills as she is by his last name. Neither is in the other’s league status-wise, but they instantly hit it off anyway. Maurizio is studying to become a lawyer and isn’t that involved in his own family business — he’s on the outs with his father (Jeremy Irons, who didn’t get the memo that the film was going to be a mildly campy affair) who thinks Patrizia is only after money, but he’s still friendly with his uncle (Al Pacino, who absolutely got the memo in triplicate). Patrizia works both behind the scenes and in the open to change that by maneuvering Maurizio into a position of power within the house of Gucci, but the highs soon give way beneath the weight of lies, betrayal, and murder.",
        date: new Date(2021, 10, 22).toDateString(),
        categories: ["History", "Drama"],
        likes: 56,
    }, {
        articleId: "3467",
        authorIdKey: '01',
        image: 'https://resizing.flixster.com/jn6m-kKR02vAJcltjQG4RRAkxAs=/ems.ZW1zLXByZC1hc3NldHMvbW92aWVzLzdlZDQzYmMzLTIyNWItNGFkZC05NjE0LTNmNzQxZjE3ZjZmOC5qcGc=',
        title: '‘Red Notice’ plays like ‘Blue’s Clues’ for grown-ups',
        text: 'There’s a stinging form of déjà vu that can sweep over you when you’re watching a movie that feels like you’ve seen it before. Red Notice is so full of such moments that by the end, my skin was crawling. There’s turn off your brain and enjoy movies, and then there’s this. And no, its three ultra-famous headliners can’t rescue it from horrid mediocrity. Written and directed by Rawson Marshall Thurber, Red Notice is less a movie and more a frenzied splattering of cliches, snatched from a barrage of action, espionage, and heist films. Your brain might notice some familiar fight staging, a half-remembered plot point, or the whistling of the Indiana Jones theme. Sadly, all these inspirations come from far superior movies, so watching this one feels like watching Blue Clue’s, where the hints are so pronounced that you might well pull an overeager Leonard DiCaprio meme.',
        date: new Date(2021, 10, 21).toDateString(),
        categories: ['Action', 'Comedy'],
        likes: 206,

    }, {
        articleId: "5782",
        authorIdKey: '02',
        image: "https://resizing.flixster.com/I5Dc_ap83-ESRwtIPPFtFvdjpqs=/ems.ZW1zLXByZC1hc3NldHMvbW92aWVzL2MzZmQ1Y2VlLTQ2NTAtNDY0Zi1iY2RhLTE4MjFiNzMyZGI4MS5qcGc=",
        title: "House of Gucci. It should be called House of Gaga.",
        text: 'House of Gucci should be called House of Gaga. The Ridley Scott-directed film follows Patrizia Reggiani, an outsider from humble beginnings who marries into the infamous Gucci family. As expected, Gaga plays Patrizia, a woman with unbridled ambition, perfectly. The cast is, of course, stacked, and the Guccis are rounded out by the husband Maurizio (Adam Driver), the father-in-law Rodolfo (Jeremy Irons), the uncle Aldo (Al Pacino), and the cousin Paolo (Jared Leto). For the most part, that doesn’t matter, though, because while House of Gucci promised a look into the namesake’s unraveling, which is billed as “a reckless spiral of betrayal, decadence, revenge, and ultimately murder,” it’s surprisingly a slog. That is, save for the soundtrack and every acting decision Gaga makes, including the slightly offputting and somewhat amusing sex scene. The rest, however, is left struggling to find its footing as it oscillates between soap opera and prestige drama.',
        date: new Date(2021, 11, 1).toDateString(),
        categories: ["History", "Drama"],
        likes: 122,
    },
    {
        articleId: "9263",
        authorIdKey: '02',
        image: 'https://resizing.flixster.com/pYD-MzrUnpM0O-veslSo-p3F0Zk=/ems.ZW1zLXByZC1hc3NldHMvbW92aWVzLzg2MmYxOWU4LTkxNDYtNDdlNi05NTExLTI5MWJkMWUzZjViNi5qcGc=',
        title: "Last Night in Soho",
        text: "Last Night In Soho sees Edgar Wright shoot his shot, but ultimately his latest film offers more style than substance. It follows Eloise (Thomasin McKenzie), an aspiring fashion designer obsessed with 60s London, as she discovers she’s able to visit her favorite decade via her dreams. Once there, she encounters a stunning singer named Sandy (Anya Taylor-Joy). Eloise, a wallflower, follows Sandy like a shadow, seemingly envious of how she goes out and gets down. When Eloise awakes, the singer is her muse, inspiring her designs at school. It’s all glamour and giggles until it isn’t. About halfway through the movie, its music-video vibes are traded in for a tangled thriller, and Eloise’s envy evolves into empathy when Sandy’s true suffering is revealed. As Eloise becomes increasingly erratic and Sandy increasingly elusive, the film reaches a fever-pitch by forcing them to finally acknowledge how one’s past has impacted the other’s present.",
        date: new Date(2021, 9, 29).toDateString(),
        categories: ["Mystery", 'Thriller', "Drama"],
        likes: 154,
    }, {
        articleId: "7914",
        authorIdKey: '02',
        image: 'https://flxt.tmsimg.com/assets/p20418376_k_h8_ab.jpg',
        title: "Lamb",
        text: "Lamb captures grief by oscillating between the beautiful and the horrific in a way so authentic to the human experience that for a moment, one might forget just how peculiar the otherworldly youngster at the center of the film is. Half-human and half-lamb, Ada is readily accepted by a childless couple who run an idyllic-looking sheep farm in the Icelandic countryside. Maria (Noomi Rapace) and Ingvar (Hilmir Snær Guðnason) live a seemingly simple life until this moment. But when Ingvar’s brother Pétur (Björn Hlynur Haraldsson) arrives, a much more complicated past comes into focus. Maria holds many a secret, most only hinted at through interactions with Pétur, who eventually warms to Ada as well, strange as it all may seem. However, Maria’s heavy grief and pain are apparent and ultimately grow into a striking strength and a will to survive in this dark and atmospheric folktale from director Valdimar Jóhannsson.",
        date: new Date(2021, 9, 14).toDateString(),
        categories: ['Fantasy', 'Horror', 'Mystery', 'Thriller'],
        likes: 88,
    }, {
        articleId: "8524",
        authorIdKey: '03',
        image: "https://resizing.flixster.com/tcwY_VN19sHIA_YEz0OHj6ED-T0=/ems.ZW1zLXByZC1hc3NldHMvbW92aWVzL2RjNDliODg2LTI5OTMtNDg4Yy1iZmY4LThhODU4ZWFmY2I1Zi5qcGc=",
        title: "'King Richard' is a Will Smith showpiece, but it could have been more",
        text: "You know going into King Richard, there will be a happy ending. Anyone sitting down to watch this biopic probably realizes that the end title cards will list the astounding accomplishments of two of the world’s greatest athletes, Venus Williams and Serena Williams. This assured happy ending in the film makes the success of their younger selves feel inevitable, instead of anything but. Tennis was a sport long dominated by rich, white players. So, the rise of two Black phenoms from Compton was not just unexpected, it was the exhilarating stuff of a Hollywood movie. Yet, this Hollywood movie focuses not on the Black girls who defied expectation, pitfalls, and much, much prejudice to become living legends. King Richard focuses on their dad Richard Williams, and it's as if this biopic is an application for his canonization.",
        date: new Date(2021, 10, 20).toDateString(),
        categories: ['Biography', 'Drama'],
        likes: 47,
    }, {
        articleId: "1543",
        authorIdKey: '03',
        image: "https://resizing.flixster.com/TmkoIDGxTtfwCxgHVbCe03sHuas=/ems.ZW1zLXByZC1hc3NldHMvbW92aWVzL2EzZDFkM2Y2LTE2ZjctNDljZi04YTc5LTg5MGFhNTBmYjA0Yy5qcGc=",
        title: "'Ghostbusters: Afterlife' is a soulless ode to nepotism",
        text: "With Juno, Up in the Air, and Young Adult, Jason Reitman made a name for himself as a fine craftsman of whip-smart comedy. Then, he hit a rough patch with a string of duds, scorched by critics (Labor Day, Men Women and Children) or ignored by audiences (Tully, The Front Runner). Perhaps smarting from this slip, he seems to have run home to get help from his dad, Ghostbusters director Ivan Reitman. Together, they’re charting the next chapter of their careers by resurrecting the ‘80s-born horror-comedy franchise (again). But what this father-son team of filmmakers is bringing to theaters is not a fresh — or even fun — spin on an old classic. It’s a ghoulish re-animated corpse, stuffed with half-baked new characters and lazy fan service. Written by Jason Reitman and Gil Kenan, Ghostbusters: Afterlife casts aside the beloved pre-established characters of this franchise to focus on their sulking offspring. The recently deceased Egon Spengler has left a decrepit farmhouse in the middle of nowhere to his long-estranged daughter Callie (Carrie Coon). Broke and bitter, she takes her teen son Trevor (Stranger Things’ Finn Wolfhard) and 12-year-old daughter Phoebe (Mckenna Grace) to this “dirt farm” for a fresh start. Turns out, Phoebe is an apple who didn’t fall far from the Egon tree. She’s socially awkward, absolutely brilliant, and drawn to supernatural adventures. So, in no time, she’s pulling out grandpa's proton packs and ghost traps, and turning Summerville, Oklahoma, into a haunted hot spot. With the help of her family and new friends, she’ll have to defeat a powerful paranormal entity, just like her ancestor did before her. And I do mean just like.",
        date: new Date(2021, 9, 26).toDateString(),
        categories: ['Fantasy', 'Comedy', 'Adventure'],
        likes: 162,

    }, {
        articleId: "6720",
        authorIdKey: '03',
        image: "https://resizing.flixster.com/o6JENOOsq3oha0PYNxzuihgPiMg=/ems.ZW1zLXByZC1hc3NldHMvbW92aWVzL2E1ZjYwMDk1LWNkMWQtNDY3NS05YjA5LTMwY2EyZDA5OGZiZS5qcGc=",
        title: "The Green Knight Review",
        text: "Arthurian legends have long been translated into sweeping dramas or sword-and-shield action epics, but there's never been any adaptation so surreal and strange as David Lowery's The Green Knight. The writer-director translates the chivalric romance poem Sir Gawain and the Green Knight into a fascinating adventure, rejecting the heart-racing thrills expected of this subgenre for pleasures far more cerebral. Dev Patel puts a riveting new spin on Gawain, who, in his hunger for the glory of knighthood, accepts a Christmas challenge to confront the Green Knight, cutting him down with one intense blow. Dread rises when the Green Knight plucks up his severed head and rides away cackling, promising a grim reunion in one year. Smartly, Lowery’s script spends little time on the intervening year, swiftly establishing that one brave act has not made Gawain a hero. Instead, it focuses on the arduous and unpredictable journey he sets out on, leading the impetuous hero through festering battlefields and fog-slathered forests to cross paths with ambushing thieves, a mournful spirit, howling giants, and a perplexing couple in a curious castle.",
        date: new Date(2021, 9, 26).toDateString(),
        categories: ['Fantasy', 'Adventure'],
        likes: 239,
    },
]

export default dummy_posts.sort((a, b) => a.date > b.date ? 1 : -1);