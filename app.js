/**
 * Swedish National Soccer Team - 2026 World Cup Hub
 * Client-Side Core Logic (Updated with Official Group F Schedule & Real-World Spotify Tracks)
 */

// 1. Official 26-Man Squad Database
const PLAYERS = [
  // Goalkeepers
  {
    id: "viktor_johansson",
    name: "Viktor Johansson",
    number: 1,
    position: "Goalkeeper",
    club: "Stoke City",
    age: 27,
    caps: 8,
    goals: 0,
    avatar: "🇸🇪",
    status: "Healthy",
    bio: "Known as 'The Viking' among Stoke fans. Viktor is an exceptionally agile shot-stopper with explosive reflexes, vying for the starting goalkeeper shirt under Graham Potter.",
    stats: { saves: 114, cleanSheets: 14, passAccuracy: "78%" }
  },
  {
    id: "kristoffer_nordfeldt",
    name: "Kristoffer Nordfeldt",
    number: 12,
    position: "Goalkeeper",
    club: "AIK",
    age: 36,
    caps: 48,
    goals: 0,
    avatar: "🇸🇪",
    status: "Healthy",
    bio: "The veteran presence in the goalkeeping cohort. Nordfeldt brings immense international experience and composure, acting as a crucial mentor to the younger players.",
    stats: { saves: 62, cleanSheets: 19, passAccuracy: "81%" }
  },
  {
    id: "jacob_zetterstrom",
    name: "Jacob Widell Zetterström",
    number: 23,
    position: "Goalkeeper",
    club: "Derby County",
    age: 27,
    caps: 3,
    goals: 0,
    avatar: "🇸🇪",
    status: "Healthy",
    bio: "A physical giant standing at 197cm. Zetterström dominates his penalty box and is highly regarded for his command of aerial duels and solid distribution.",
    stats: { saves: 89, cleanSheets: 11, passAccuracy: "72%" }
  },

  // Defenders
  {
    id: "hjalmar_ekdal",
    name: "Hjalmar Ekdal",
    number: 3,
    position: "Defender",
    club: "Burnley",
    age: 27,
    caps: 15,
    goals: 0,
    avatar: "🇸🇪",
    status: "Healthy",
    bio: "A modern, ball-playing center-back with excellent positioning. Ekdal's ability to read the game makes him a reliable option for Potter's defensive rotation.",
    stats: { tackles: 34, interceptions: 28, passAccuracy: "88%" }
  },
  {
    id: "gabriel_gudmundsson",
    name: "Gabriel Gudmundsson",
    number: 5,
    position: "Defender",
    club: "Leeds United",
    age: 27,
    caps: 18,
    goals: 1,
    avatar: "🇸🇪",
    status: "Healthy",
    bio: "Dynamic left wing-back who provides relentless overlapping runs. Gudmundsson possesses blistering pace and high-quality crossing capabilities.",
    stats: { tackles: 41, crosses: 52, passAccuracy: "82%" }
  },
  {
    id: "isak_hien",
    name: "Isak Hien",
    number: 4,
    position: "Defender",
    club: "Atalanta",
    age: 27,
    caps: 24,
    goals: 0,
    avatar: "🇸🇪",
    status: "Healthy",
    bio: "A powerhouse in central defense. Hien has flourished in Serie A with Atalanta, bringing raw physical strength, aerial dominance, and elite recovery speed.",
    stats: { tackles: 58, interceptions: 42, passAccuracy: "85%" }
  },
  {
    id: "emil_holm",
    name: "Emil Holm",
    number: 2,
    position: "Defender",
    club: "Juventus",
    age: 26,
    caps: 20,
    goals: 2,
    avatar: "🇸🇪",
    status: "Healthy",
    bio: "An athletic right wing-back with a massive engine. Holm is defensively robust and highly active in offensive phases, perfectly suited for the wing-back role.",
    stats: { tackles: 46, assists: 3, passAccuracy: "80%" }
  },
  {
    id: "gustaf_lagerbielke",
    name: "Gustaf Lagerbielke",
    number: 13,
    position: "Defender",
    club: "SC Braga",
    age: 25,
    caps: 7,
    goals: 1,
    avatar: "🇸🇪",
    status: "Healthy",
    bio: "Strong, commanding center-back who is a major threat on offensive set-pieces. Lagerbielke offers solid cover and depth in central defense.",
    stats: { tackles: 18, interceptions: 14, passAccuracy: "86%" }
  },
  {
    id: "victor_lindelof",
    name: "Victor Lindelöf",
    number: 14,
    position: "Defender",
    club: "Aston Villa",
    age: 31,
    caps: 68,
    goals: 3,
    avatar: "🇸🇪",
    status: "Healthy",
    bio: "The Captain. Lindelöf is the undisputed leader of the Swedish backline. His composure on the ball and extensive Premier League experience are foundational.",
    stats: { tackles: 72, interceptions: 61, passAccuracy: "91%" }
  },
  {
    id: "eric_smith",
    name: "Eric Smith",
    number: 6,
    position: "Defender",
    club: "St. Pauli",
    age: 29,
    caps: 5,
    goals: 0,
    avatar: "🇸🇪",
    status: "Healthy",
    bio: "Extremely versatile defender who can easily step into a defensive midfield anchor role. Known for his tactical intelligence and superb long-range passing.",
    stats: { tackles: 22, longBalls: 45, passAccuracy: "87%" }
  },
  {
    id: "carl_starfelt",
    name: "Carl Starfelt",
    number: 15,
    position: "Defender",
    club: "Celta de Vigo",
    age: 30,
    caps: 21,
    goals: 0,
    avatar: "🇸🇪",
    status: "Healthy",
    bio: "An experienced, aggressive defender who excels in 1v1 duels. Starfelt is highly valued for his fighting spirit and reliable blocking.",
    stats: { tackles: 39, blocks: 24, passAccuracy: "84%" }
  },
  {
    id: "elliot_stroud",
    name: "Elliot Stroud",
    number: 22,
    position: "Defender",
    club: "Mjällby AIF",
    age: 24,
    caps: 2,
    goals: 0,
    avatar: "🇸🇪",
    status: "Healthy",
    bio: "The surprise breakout star of the Allsvenskan. Stroud earned his World Cup ticket due to his high work rate, versatility, and energetic left-flank play.",
    stats: { tackles: 12, crosses: 19, passAccuracy: "79%" }
  },
  {
    id: "daniel_svensson",
    name: "Daniel Svensson",
    number: 24,
    position: "Defender",
    club: "Borussia Dortmund",
    age: 24,
    caps: 6,
    goals: 0,
    avatar: "🇸🇪",
    status: "Healthy",
    bio: "Comfortable at both left-back and holding midfield. Svensson's technical proficiency and tactical awareness have earned him key minutes at Dortmund.",
    stats: { tackles: 20, interceptions: 18, passAccuracy: "89%" }
  },

  // Midfielders
  {
    id: "yasin_ayari",
    name: "Yasin Ayari",
    number: 8,
    position: "Midfielder",
    club: "Brighton & Hove Albion",
    age: 22,
    caps: 10,
    goals: 1,
    avatar: "🇸🇪",
    status: "Healthy",
    bio: "A highly creative, press-resistant central midfielder. Ayari excels in tight spaces and possesses exceptional vision to split opposition defensive blocks.",
    stats: { assists: 2, keyPasses: 18, passAccuracy: "88%" }
  },
  {
    id: "lucas_bergvall",
    name: "Lucas Bergvall",
    number: 10,
    position: "Midfielder",
    club: "Tottenham Hotspur",
    age: 20,
    caps: 8,
    goals: 0,
    avatar: "🇸🇪",
    status: "Healthy",
    bio: "Sweden's golden boy. At just 20, Bergvall plays with a veteran's maturity. A dazzling dribbler who can drive the team forward from midfield transitions.",
    stats: { dribblesSuccess: "74%", keyPasses: 15, passAccuracy: "86%" }
  },
  {
    id: "jesper_karlstrom",
    name: "Jesper Karlström",
    number: 16,
    position: "Midfielder",
    club: "Udinese",
    age: 30,
    caps: 22,
    goals: 0,
    avatar: "🇸🇪",
    status: "Healthy",
    bio: "A tenacious, hard-working defensive midfielder. Karlström acts as a shield for the defense, breaking up attacks and recycling possession with discipline.",
    stats: { tackles: 51, interceptions: 38, passAccuracy: "83%" }
  },
  {
    id: "benjamin_nygren",
    name: "Benjamin Nygren",
    number: 18,
    position: "Midfielder",
    club: "Celtic",
    age: 24,
    caps: 4,
    goals: 1,
    avatar: "🇸🇪",
    status: "Healthy",
    bio: "An attacking midfielder with a sharp eye for goal. Nygren is highly intelligent in pocket navigation and can operate effectively on either flank.",
    stats: { goals: 1, shotsOnTarget: 9, passAccuracy: "81%" }
  },
  {
    id: "ken_sema",
    name: "Ken Sema",
    number: 11,
    position: "Midfielder",
    club: "Pafos",
    age: 32,
    caps: 25,
    goals: 1,
    avatar: "🇸🇪",
    status: "Healthy",
    bio: "A powerful winger who can also fill in at wing-back. Sema's upper body strength and ability to hold up the ball under pressure are invaluable.",
    stats: { crosses: 33, duelsWon: "62%", passAccuracy: "79%" }
  },
  {
    id: "mattias_svanberg",
    name: "Mattias Svanberg",
    number: 19,
    position: "Midfielder",
    club: "VfL Wolfsburg",
    age: 27,
    caps: 36,
    goals: 2,
    avatar: "🇸🇪",
    status: "Healthy",
    bio: "The midfield engine. Svanberg is a box-to-box midfielder with a lethal long-range shot and excellent stamina, serving as Sweden's midfield centerpiece.",
    stats: { distanceCovered: "11.2km/90", shots: 28, passAccuracy: "85%" }
  },
  {
    id: "besfort_zeneli",
    name: "Besfort Zeneli",
    number: 20,
    position: "Midfielder",
    club: "Union Saint-Gilloise",
    age: 23,
    caps: 3,
    goals: 0,
    avatar: "🇸🇪",
    status: "Healthy",
    bio: "An agile, quick-thinking playmaker. Zeneli's dynamic movement off the ball helps unlock stubborn defensive low-blocks in final stages.",
    stats: { keyPasses: 7, dribblesSuccess: "68%", passAccuracy: "84%" }
  },

  // Forwards
  {
    id: "taha_ali",
    name: "Taha Ali",
    number: 21,
    position: "Forward",
    club: "Malmö FF",
    age: 27,
    caps: 5,
    goals: 1,
    avatar: "🇸🇪",
    status: "Healthy",
    bio: "A sensational dribbler. Ali has the ability to beat any defender 1v1 with his trickery and quick acceleration. A powerful weapon off the bench.",
    stats: { dribblesSuccess: "81%", keyPasses: 9, passAccuracy: "76%" }
  },
  {
    id: "alexander_bernhardsson",
    name: "Alexander Bernhardsson",
    number: 25,
    position: "Forward",
    club: "Holstein Kiel",
    age: 27,
    caps: 4,
    goals: 1,
    avatar: "🇸🇪",
    status: "Healthy",
    bio: "A direct, pacey forward who excels at running into channels. Bernhardsson provides fantastic tactical flexibility across the front line.",
    stats: { goals: 1, sprints: 38, passAccuracy: "78%" }
  },
  {
    id: "anthony_elanga",
    name: "Anthony Elanga",
    number: 7,
    position: "Forward",
    club: "Newcastle United",
    age: 24,
    caps: 21,
    goals: 4,
    avatar: "🇸🇪",
    status: "Healthy",
    bio: "Express winger with explosive acceleration and lethal counter-attacking skills. Elanga is a major threat in open space on the global stage.",
    stats: { topSpeed: "35.8 km/h", assists: 4, passAccuracy: "80%" }
  },
  {
    id: "viktor_gyokeres",
    name: "Viktor Gyökeres",
    number: 9,
    position: "Forward",
    club: "Arsenal",
    age: 27,
    caps: 26,
    goals: 15,
    avatar: "🇸🇪",
    status: "Healthy",
    bio: "One of Europe's most feared marksmen. Gyökeres is physical, incredibly direct, and a clinical finisher, leading the line for Sweden with immense power.",
    stats: { goals: 34, assists: 11, shotConversion: "26%" }
  },
  {
    id: "alexander_isak",
    name: "Alexander Isak",
    number: 17,
    position: "Forward",
    club: "Liverpool",
    age: 26,
    caps: 52,
    goals: 18,
    avatar: "🇸🇪",
    status: "Healthy",
    bio: "World-class striker blending sublime technical skills with high intelligence and elegance. Isak constitutes Sweden's primary offensive catalyst.",
    stats: { goals: 22, keyPasses: 34, dribblesSuccess: "67%" }
  },
  {
    id: "gustaf_nilsson",
    name: "Gustaf Nilsson",
    number: 26,
    position: "Forward",
    club: "Club Brugge",
    age: 29,
    caps: 9,
    goals: 3,
    avatar: "🇸🇪",
    status: "Healthy",
    bio: "A traditional target man standing 196cm tall. Nilsson is lethal in the air and highly adept at holding up play to bring wingers into action.",
    stats: { aerialDuelsWon: "78%", goals: 3, passAccuracy: "74%" }
  }
];

PLAYERS.find(p => p.id === "gustaf_nilsson").number = 26;

// 2. Chronological Pre-Camp News Timeline (May 21, 22, 23, 2026 - Geared towards genuine pre-camp activities)
const TIMELINE_DATABASE = {
  "2026-05-21": {
    1: {
      timeLabel: "07:00",
      name: "Frukost Rapport (Breakfast Camp Report)",
      articles: [
        {
          id: "art_21_1_1",
          category: "sweden",
          type: "Nyheter",
          title: "Potter's staff inspects Bosön training facilities ahead of May 27 gather",
          bullets: [
            "Coaching assistants tour Stockholm's elite national training complex.",
            "Inspect newly laid turf surfaces and high-performance recovery rooms.",
            "Svenska FA confirms all technical apparatus is prepared to receive players."
          ],
          summary: "Graham Potter's coaching assistants, coordinated by Björn Hamberg, performed a complete site walkthrough at Bosön in Stockholm yesterday. The Swedish FA has secured Stockholm's top elite facility to act as the primary preparation base. The fields are in pristine condition, and all tactical analysis gear is configured for the players' arrival on Wednesday, May 27.",
          author: "Olof Lundh (Fotbollskanalen)",
          readTime: "3 min",
          tag: "Bosön Läger",
          relatedPlayers: []
        }
      ]
    },
    2: {
      timeLabel: "11:00",
      name: "Presskonferens (Graham Potter Press Briefing)",
      articles: [
        {
          id: "art_21_2_1",
          category: "sweden",
          type: "Nyheter",
          title: "Sweden FA confirms ticketing details and safety plan for Norway warmup in Oslo",
          bullets: [
            "Ticketing portal opens for the highly anticipated friendly at Ullevaal Stadion.",
            "Over 6,000 traveling Swedish fans expected to pack Oslo's away blocks.",
            "Svenska FA releases detailed pre-match logistics for traveling fans."
          ],
          summary: "The Swedish FA released ticketing and security protocols for the upcoming international friendly against Norway on June 1 at Ullevaal Stadion. Norwegian authorities anticipate a completely packed venue. Swedish fans have already snapped up their designated away allocation, promising an electric Scandinavian atmosphere for Potter's first match of the final phase.",
          author: "Svensk Fotboll Press",
          readTime: "2 min",
          tag: "Biljett Intel",
          relatedPlayers: []
        }
      ]
    },
    3: {
      timeLabel: "14:30",
      name: "Träningspass (Afternoon Workouts)",
      articles: [
        {
          id: "art_21_3_1",
          category: "sweden",
          type: "Blogg",
          title: "Viktor Gyökeres maintains elite gym drills at Arsenal training facility",
          bullets: [
            "Prolific forward logs individual weight lifting routines in London.",
            "Physiologists confirm Gyökeres is entering the pre-camp in perfect metabolic shape.",
            "Gyökeres writes: 'Got my personal schedule from Graham; focusing on high-speed stamina.'"
          ],
          summary: "Sticking to an individualized conditioning program, Arsenal striker Viktor Gyökeres is spending his week performing rigorous explosive speed drills at his club's gym in London. Under instructions from Potter's staff, players not in active league matches are keeping their physical registers high so that tactical field sessions can start at maximum velocity on day one.",
          author: "Viktor Gyökeres (Spelar-Blogg)",
          readTime: "3 min",
          tag: "Spelar-Fokus",
          relatedPlayers: ["viktor_gyokeres"]
        }
      ]
    },
    4: {
      timeLabel: "18:00",
      name: "Taktik & Analys (Scouting Update)",
      articles: [
        {
          id: "art_21_4_1",
          category: "opponent",
          type: "Scouting",
          title: "Netherlands Watch: Ronald Koeman organizes high-intensity Dallas base",
          bullets: [
            "Netherlands FA reserves training pitches in Texas, USA.",
            "Koeman schedules triple-sessions to acclimatize Dutch squad to Central timezones.",
            "Scouts confirm de Jong is working extensively on midfield recovery routines."
          ],
          summary: "Sweden's analytics division has logged the travel and training schedule of the Netherlands. Ronald Koeman's squad is bypassing a local European camp, choosing instead to travel early to Texas, USA, where their opening match against Japan takes place. The Dutch are preparing intense double and triple daily sessions to adjust quickly to Central timezones.",
          author: "Erik Niva (Aftonbladet)",
          readTime: "4 min",
          tag: "Nederländerna Intel",
          relatedPlayers: []
        }
      ]
    },
    5: {
      timeLabel: "21:30",
      name: "Kvällssnack (Late Night Camp Diary)",
      articles: [
        {
          id: "art_21_5_1",
          category: "sweden",
          type: "Blogg",
          title: "Player Blog: Emil Holm on packing bags and heading home to Gothenburg",
          bullets: [
            "Juventus wing-back shares photos of his flight luggage and travel ticket.",
            "Excited to spend a quick 48 hours with family before gathering in Stockholm.",
            "Holm: 'Stockholm and Bosön represent the final engine start. Let's make this year wild.'"
          ],
          summary: "In a personal blog post, Emil Holm expressed his excitement as he boarded a flight back to Sweden. Having concluded his Serie A campaign, Holm is taking a brief two-day rest with family in Gothenburg before reporting to the national team training camp at Bosön on Wednesday morning. 'My mind is completely locked on the yellow and blue,' Holm wrote.",
          author: "Emil Holm (Spelar-Blogg)",
          readTime: "2 min",
          tag: "Spelar-Resa",
          relatedPlayers: ["emil_holm"]
        }
      ]
    }
  },
  "2026-05-22": {
    1: {
      timeLabel: "07:00",
      name: "Frukost Rapport (Breakfast Camp Report)",
      articles: [
        {
          id: "art_22_1_1",
          category: "sweden",
          type: "Krönika",
          title: "Lundh's Column: Why the May 25 release deadline is crucial for Potter's team synergy",
          bullets: [
            "FIFA's mandatory player release deadline begins on Monday, May 25.",
            "Allows national teams full, uninterrupted access to their European stars.",
            "Potter gains complete coaching custody over Isak, Gyökeres, and Lindelöf."
          ],
          summary: "As we edge closer to the mandatory FIFA player release date on May 25, Graham Potter is poised to finally take full command of his squad. The staggered endings of European club seasons have made early tactical assemblies impossible. Starting Monday, all club responsibilities cease, marking the true structural beginning of Sweden's quest to build cohesive chemistry for their Group F opener.",
          author: "Olof Lundh (Fotbollskanalen)",
          readTime: "4 min",
          tag: "Läger-Analys",
          relatedPlayers: ["alexander_isak", "viktor_gyokeres", "victor_lindelof"]
        }
      ]
    },
    2: {
      timeLabel: "11:00",
      name: "Presskonferens (Graham Potter Press Briefing)",
      articles: [
        {
          id: "art_22_2_1",
          category: "sweden",
          type: "Nyheter",
          title: "Potter outlines Stockholm pre-camp objectives: 'It is about rhythm and physical loading'",
          bullets: [
            "Graham Potter outlines exact daily workloads for the Stockholm gathering.",
            "Focuses heavily on ball possession drills and system familiarity.",
            "Praises Sweden FA's logistics division for organizing a seamless flight plan."
          ],
          summary: "During an online media briefing today, förbundskapten Graham Potter spoke on the goals of Sweden's local Stockholm pre-camp. 'The first three days at Bosön are designed to get everyone on the same physical page. Some players have had a week off, while others played club games last Sunday. We will balance player workloads and implement our core patterns before flying to Norway,' Potter explained.",
          author: "Therese Strömberg (Expressen)",
          readTime: "3 min",
          tag: "Förbundskaptenen",
          relatedPlayers: []
        }
      ]
    },
    3: {
      timeLabel: "14:30",
      name: "Träningspass (Afternoon Workouts)",
      articles: [
        {
          id: "art_22_3_1",
          category: "sweden",
          type: "Blogg",
          title: "Alexander Isak completes final individual agility drills in Liverpool",
          bullets: [
            "Liverpool striker shares a training log from his local pitch workouts.",
            "Focuses on quick turning radius drills and penalty-box finishing.",
            "Isak: 'Getting the muscles tuned up. Stockholm, see you next week!'"
          ],
          summary: "Alexander Isak is not wasting his pre-camp window. The Liverpool striker has been working with a personal trainer on quick direction-change sprints to preserve his agility levels. 'The physical side of the game is vital in the opening match against Tunisia. We must be quick off the mark, and I want to be 100% sharp when we gather at Bosön,' Isak wrote in his online camp log.",
          author: "Alexander Isak (Spelar-Blogg)",
          readTime: "3 min",
          tag: "Spelar-Träning",
          relatedPlayers: ["alexander_isak"]
        }
      ]
    },
    4: {
      timeLabel: "18:00",
      name: "Taktik & Analys (Scouting Update)",
      articles: [
        {
          id: "art_22_4_1",
          category: "opponent",
          type: "Scouting",
          title: "Tunisia schedules high-intensity warmups in Monterrey; analysts monitor setups",
          bullets: [
            "Tunisia chooses local base in Monterrey to replicate matchday weather conditions.",
            "Schedule closed-door warm-up match to practice defending dual-forward formations.",
            "Sweden scouts monitor defensive rotations and set-piece marking profiles."
          ],
          summary: "Tunisia has arrived at their training base in Monterrey, choosing the local climate to replicate the conditions they will face against Sweden. Under coach Jalel Kadri, the Tunisians have scheduled a series of high-tempo practices designed to test their defensive compactness, particularly rehearsing how they will mark dual-forward shapes.",
          author: "Marcus Leifby (Aftonbladet)",
          readTime: "4 min",
          tag: "Tunisien Intel",
          relatedPlayers: []
        }
      ]
    },
    5: {
      timeLabel: "21:30",
      name: "Kvällssnack (Late Night Camp Diary)",
      articles: [
        {
          id: "art_22_5_1",
          category: "sweden",
          type: "Blogg",
          title: "Tottenham starlet Lucas Bergvall: 'Playing a World Cup at 20 is a dream I am ready for'",
          bullets: [
            "Bergvall shares a late-night travel diary entry regarding his emotions.",
            "Reflects on his incredible season in London and his tactical fit under Potter.",
            "Bergvall: 'The pressure is a privilege. I want to learn, but most of all, I want to win.'"
          ],
          summary: "In a highly candid late-night diary post, Lucas Bergvall discussed his emotions ahead of reporting to Stockholm. The 20-year-old playmaker has caught global attention at Tottenham Hotspur and is set to be Sweden's creative catalyst. 'Playing for Sweden in a World Cup is what you practice for in the garden as a kid. I'm ready to fight for my country,' Bergvall wrote.",
          author: "Lucas Bergvall (Spelar-Blogg)",
          readTime: "4 min",
          tag: "Spelar-Dagbok",
          relatedPlayers: ["lucas_bergvall"]
        }
      ]
    }
  },
  "2026-05-23": {
    1: {
      timeLabel: "07:00",
      name: "Frukost Rapport (Breakfast Camp Report)",
      articles: [
        {
          id: "art_23_1_1",
          category: "sweden",
          type: "Nyheter",
          title: "Sweden media desk gears up for Stockholm media blitz starting May 27",
          bullets: [
            "Swedish FA's press crew arrives in Stockholm to build team media center.",
            "Over 120 accredited international journalists scheduled to cover Bosön drills.",
            "Potter coordinates with staff to organize structured player media panels."
          ],
          summary: "The Swedish FA's advanced media division arrived in Stockholm this morning to build the primary press room at the team's headquarters. Starting next Wednesday, players will engage in daily press briefings and mixed zones, creating high transparency and media accessibility as the nation rallies behind their players' campaign.",
          author: "Olof Lundh (Fotbollskanalen)",
          readTime: "3 min",
          tag: "Mediaplanering",
          relatedPlayers: []
        },
        {
          id: "art_23_1_2",
          category: "opponent",
          type: "Scouting",
          title: "Netherlands Watch: Frenkie de Jong declared fully fit for Barcelona training",
          bullets: [
            "Midfield maestro Frenkie de Jong participates in Barcelona's final team session.",
            "Medical clearance issued, paving the way for Dutch World Cup inclusion.",
            "Swedish analytics pivot immediately starts crafting de Jong pressing traps."
          ],
          summary: "Sweden's scouting network logged excellent news for the Netherlands, but a major tactical challenge for Graham Potter. Barcelona midfielder Frenkie de Jong participated in full-contact drills today, indicating his ankle injury is fully healed. His presence means Sweden's double-pivot must prepare specialized pressing traps to disrupt de Jong's elite playmaking tempo.",
          author: "Voetbal International",
          readTime: "4 min",
          tag: "Nederländerna Rapport",
          relatedPlayers: ["yasin_ayari", "mattias_svanberg"]
        }
      ]
    },
    2: {
      timeLabel: "11:00",
      name: "Presskonferens (Graham Potter Press Briefing)",
      articles: [
        {
          id: "art_23_2_1",
          category: "sweden",
          type: "Nyheter",
          title: "Potter's finalized pre-tournament agenda: Stockholm to Dallas timeline published",
          bullets: [
            "Svenska FA publishes the detailed chronological itinerary for the final phase.",
            "Squad reports to Stockholm on May 27, trains at Bosön and Strawberry Arena.",
            "Flights to Oslo on May 31, Norway match June 1, departs for Dallas base on June 2."
          ],
          summary: "Svensk Fotboll today published the official team calendar. The 26-man roster will gather in Stockholm next Wednesday, training locally for four days. On May 31, they travel to Oslo for their first friendly against Norway on June 1, and immediately board a charter flight to their primary base camp in Dallas, Texas on June 2 to begin their final tournament preparations.",
          author: "Therese Strömberg (Expressen)",
          readTime: "3 min",
          tag: "Läger-Schema",
          relatedPlayers: []
        }
      ]
    },
    3: {
      timeLabel: "14:30",
      name: "Träningspass (Afternoon Workouts)",
      articles: [
        {
          id: "art_23_3_1",
          category: "sweden",
          type: "Blogg",
          title: "Carl Starfelt completes ankle rehab, cleared for full practice at Bosön",
          bullets: [
            "Celta Vigo defender Starfelt completes final ankle muscle-load courses.",
            "Physiotherapists issue 100% clearance for day-one contact exercises.",
            "Starfelt: 'The ankle feels rock-solid. See you guys on the pitch on Wednesday!'"
          ],
          summary: "Sweden has received a major fitness boost as center-back Carl Starfelt completed his ankle physical therapy program. Carrying a light knock from his final La Liga match, Starfelt has been training individually, but has now been given 100% clearance to join the team for full-contact training when camp gathers on Wednesday morning.",
          author: "Carl Starfelt (Spelar-Dagbok)",
          readTime: "3 min",
          tag: "Skadeuppdatering",
          relatedPlayers: ["carl_starfelt"]
        }
      ]
    },
    4: {
      timeLabel: "18:00",
      name: "Taktik & Analys (Scouting Update)",
      articles: [
        {
          id: "art_23_4_1",
          category: "opponent",
          type: "Scouting",
          title: "Japan Watch: Mitoma showcases blazing pace in Vancouver warm-up session",
          bullets: [
            "Japan winger Kaoru Mitoma displays elite 1v1 dribbling in Vancouver drills.",
            "Moriyasu focuses Japan's tactical scheme on lightning-fast wing counters.",
            "Sweden scouts analyze Mitoma's cutting patterns to brief wing-back Emil Holm."
          ],
          summary: "Scouts monitoring Japan's training base in Vancouver reported that Kaoru Mitoma was in sensational form during today's offensive drills. Manager Hajime Moriyasu is tailoring a direct 4-2-3-1 counter-attacking system to exploit wide areas. Sweden's coaching staff is already utilizing this footage to prepare Emil Holm for a demanding defensive assignment.",
          author: "Nikkan Sports (Tokyo)",
          readTime: "4 min",
          tag: "Japan Intel",
          relatedPlayers: ["emil_holm"]
        }
      ]
    },
    5: {
      timeLabel: "21:30",
      name: "Kvällssnack (Late Night Camp Diary)",
      articles: [
        {
          id: "art_23_5_1",
          category: "sweden",
          type: "Blogg",
          title: "Captain Victor Lindelöf: 'The suitcases are packed; Stockholm, see you on Wednesday'",
          bullets: [
            "Aston Villa defender shares photos of his travel luggage on social media.",
            "Reflects on the immense pride of captaining Sweden in their World Cup campaign.",
            "Lindelöf: 'The work starts on Wednesday. We have a special squad, let's lock in.'"
          ],
          summary: "In a late-night camp diary entry, captain Victor Lindelöf shared photos of his packed travel bags. Expressing deep pride in leading *Herrlandslaget* into the 2026 World Cup, Lindelöf emphasized that Sweden's collective unity will be their primary strength. 'Gothenburg was home for a bit, but Stockholm is where the final engine starts. The team is locked in. Let's make this year unforgettable,' the captain wrote.",
          author: "Victor Lindelöf (Player Log)",
          readTime: "4 min",
          tag: "Lagkaptenen",
          relatedPlayers: ["victor_lindelof"]
        }
      ]
    }
  }
};

// 3. Official 2026 World Cup Group F Match Schedule
const MATCH_SCHEDULE = [
  {
    id: "match_norway",
    type: "warmup",
    date: "2026-06-01",
    time: "19:00",
    opponent: "Norge",
    opponentFlag: "🇳🇴",
    venue: "Ullevaal Stadion, Oslo",
    details: "Skandinaviskt klassiskt derby som fungerar som förbundskapten Graham Potters första stora taktiska test inför avresan till USA."
  },
  {
    id: "match_tunisia",
    type: "worldcup",
    date: "2026-06-14",
    time: "20:00 (Mexikotid)", // 10:00 p.m. ET is 8:00 p.m. local Monterrey time (CST)
    opponent: "Tunisien",
    opponentFlag: "🇹🇳",
    venue: "Estadio Monterrey, Mexiko",
    details: "VM-premiär i Grupp F! Sverige förväntas möta ett extremt disciplinerat, defensivt Tunisien i Monterrey."
  },
  {
    id: "match_netherlands",
    type: "worldcup",
    date: "2026-06-20",
    time: "12:00 (Texastid)", // 1:00 p.m. ET is 12:00 p.m. local Houston time (CST)
    opponent: "Nederländerna",
    opponentFlag: "🇳🇱",
    venue: "Houston Stadium, Texas",
    details: "En riktig tungviktsdrabbning i Houston som kan bli helt avgörande för gruppsegern."
  },
  {
    id: "match_japan",
    type: "worldcup",
    date: "2026-06-25",
    time: "18:00 (Texastid)", // 7:00 p.m. ET is 6:00 p.m. local Dallas time (CST)
    opponent: "Japan",
    opponentFlag: "🇯🇵",
    venue: "Dallas Stadium, Texas",
    details: "Tredje gruppspelsmatchen. En intensiv kamp mot ett taktiskt skickligt, löpstarkt och snabbt Japan lett av Hajime Moriyasu."
  }
];

// 4. Locker Room Chat Messages Database (Pre-Camp Banter)
const CHAT_MESSAGES = [
  { sender: "Victor Lindelöf", avatar: "🇸🇪", text: "Tja grabbar! Dags att ladda inför onsdag! Packningen klar?", time: "10:15", isCaptain: true },
  { sender: "Emil Holm", avatar: "🇸🇪", text: "Japp! Väskorna är fullproppade. Tar med mig Allsvenskans bästa fika upp till Stockholm på onsdag! 🇸🇪☕", time: "10:18" },
  { sender: "Viktor Gyökeres", avatar: "🇸🇪", text: "Spara lite fika till oss anfallare, Emil! Körde sista tunga fyspasset här på Arsenals gym idag. Känner mig galet ready.", time: "10:22" },
  { sender: "Alexander Isak", avatar: "🇸🇪", text: "Samma här i Liverpool. Kroppen känns 100%. Lucas, se till att du inte glömmer passet den här gången! 😂", time: "10:25" },
  { sender: "Lucas Bergvall", avatar: "🇸🇪", text: "Men hallå! Det var en gång, Alex! 🙄 Har kollat passet tre gånger nu. Ska bli sjukt kul att köra igång med Potters spelsystem på Bosön.", time: "10:28" },
  { sender: "Victor Lindelöf", avatar: "🇸🇪", text: "Grymt fokus. Kom ihåg, samling på hotellet kl 10:00 på onsdag den 27:e. Vi gör detta tillsammans, hela vägen! 🇸🇪💪", time: "10:31", isCaptain: true }
];

// 5. Locker Room Music Playlist Data (With real-world Swedish songs & Spotify Links)
const PLAYLIST = [
  { title: "När vi gräver guld i USA", artist: "GES", duration: "4:02", category: "Klassiker", audioUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3", spotifyUrl: "https://open.spotify.com/track/3iAJRvvn8pywXZtvBNNP71" },
  { title: "Mera Mål", artist: "Markoolio", duration: "3:45", category: "Laddning", audioUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3", spotifyUrl: "https://open.spotify.com/track/7lQW7v5w8Yg7zJgU7mS1aU" },
  { title: "In med bollen i mål", artist: "Markoolio", duration: "3:20", category: "Laddning", audioUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3", spotifyUrl: "https://open.spotify.com/search/Markoolio%20In%20med%20bollen%20i%20mål" },
  { title: "Sverige", artist: "Kent", duration: "4:01", category: "Stämning", audioUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-4.mp3", spotifyUrl: "https://open.spotify.com/search/Kent%20Sverige" },
  { title: "Explodera", artist: "Staffan Hellstrand", duration: "3:30", category: "Klassiker", audioUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-5.mp3", spotifyUrl: "https://open.spotify.com/search/Staffan%20Hellstrand%20Explodera" }
];

let currentTrackIndex = 0;
let isPlaying = false;
let audioPlayer = null; 

// 6. Time Schedule & State Management
let SIMULATOR_ACTIVE = false;
let SIMULATED_HOUR = 9;
let SIMULATED_MINUTE = 40;
let ACTIVE_NEWS_TAB = "sweden";

function getCurrentTimeMinutes() {
  if (SIMULATOR_ACTIVE) {
    return SIMULATED_HOUR * 60 + SIMULATED_MINUTE;
  }
  const now = new Date();
  return now.getHours() * 60 + now.getMinutes();
}

function getActiveUpdatesForDate(dateStr) {
  const targetDateVal = new Date(dateStr).getTime();
  const todayVal = new Date("2026-05-23").getTime();

  if (targetDateVal < todayVal) {
    return [1, 2, 3, 4, 5];
  }

  if (targetDateVal > todayVal) {
    return [];
  }

  const currentMinutes = getCurrentTimeMinutes();
  const activeIds = [];

  const updateTimes = {
    1: timeToMinutes("07:00"),
    2: timeToMinutes("11:00"),
    3: timeToMinutes("14:30"),
    4: timeToMinutes("18:00"),
    5: timeToMinutes("21:30")
  };

  for (const id in updateTimes) {
    if (currentMinutes >= updateTimes[id]) {
      activeIds.push(Number(id));
    }
  }

  if (activeIds.length === 0) {
    return [1]; 
  }

  return activeIds;
}

function timeToMinutes(timeStr) {
  const [h, m] = timeStr.split(":").map(Number);
  return h * 60 + m;
}

function generateTimelineTimestamp(dateStr, timeLabel) {
  return `${dateStr} @ ${timeLabel}`;
}

function getNextUpdateCountdown() {
  const currentMinutes = getCurrentTimeMinutes();
  const updateTimes = [
    { label: "Frukost Rapport", minutes: timeToMinutes("07:00"), timeStr: "07:00" },
    { label: "Presskonferens", minutes: timeToMinutes("11:00"), timeStr: "11:00" },
    { label: "Träningspass", minutes: timeToMinutes("14:30"), timeStr: "14:30" },
    { label: "Taktik & Analys", minutes: timeToMinutes("18:00"), timeStr: "18:00" },
    { label: "Kvällssnack", minutes: timeToMinutes("21:30"), timeStr: "21:30" }
  ];

  let nextUpdate = null;

  for (const update of updateTimes) {
    if (currentMinutes < update.minutes) {
      nextUpdate = update;
      break;
    }
  }

  if (!nextUpdate) {
    nextUpdate = {
      label: "Frukost Rapport (Imorgon)",
      minutes: updateTimes[0].minutes + 24 * 60,
      timeStr: "07:00"
    };
  }

  const diffMinutes = nextUpdate.minutes - currentMinutes;
  const hours = Math.floor(diffMinutes / 60);
  const mins = diffMinutes % 60;

  const realSeconds = new Date().getSeconds();
  const displaySeconds = 60 - realSeconds === 60 ? 0 : 60 - realSeconds;

  return {
    label: nextUpdate.label,
    timeStr: nextUpdate.timeStr,
    hours: hours,
    minutes: mins,
    seconds: displaySeconds
  };
}

// 7. Dom Interactivity and Rendering
document.addEventListener("DOMContentLoaded", () => {
  initApp();
});

function initApp() {
  audioPlayer = new Audio();
  audioPlayer.preload = "auto";
  
  audioPlayer.addEventListener("ended", () => {
    currentTrackIndex = (currentTrackIndex + 1) % PLAYLIST.length;
    renderMusicPlayer();
    updateAudioState();
  });

  renderPlayerGrid(PLAYERS);
  renderTacticalPitch();
  updateNewsDashboard();
  renderMatchSchedule();
  renderLockerChat();
  renderMusicPlayer();
  setupEventListeners();

  setInterval(() => {
    tickCountdown();
  }, 1000);
}

// Update the News Board with cumulative multi-day history
function updateNewsDashboard() {
  const container = document.getElementById("bulletin-container");
  if (!container) return;

  container.innerHTML = "";

  let totalArticlesRendered = 0;
  const dates = ["2026-05-23", "2026-05-22", "2026-05-21"];

  dates.forEach(dateStr => {
    const activeIds = getActiveUpdatesForDate(dateStr);
    if (activeIds.length === 0) return;

    const dateSection = document.createElement("div");
    dateSection.className = "timeline-date-section animated fade-in";
    
    let displayDateLabel = dateStr;
    if (dateStr === "2026-05-23") displayDateLabel = "Idag (" + dateStr + ")";
    else if (dateStr === "2026-05-22") displayDateLabel = "Igår (" + dateStr + ")";
    
    dateSection.innerHTML = `
      <div class="timeline-date-header">
        <span><i class="far fa-calendar-check"></i> ${displayDateLabel}</span>
      </div>
      <div class="date-updates-container" id="updates-for-${dateStr.replace(/-/g, '')}"></div>
    `;
    container.appendChild(dateSection);

    const updatesSubContainer = dateSection.querySelector(`#updates-for-${dateStr.replace(/-/g, '')}`);

    for (let i = activeIds.length - 1; i >= 0; i--) {
      const updateId = activeIds[i];
      const update = TIMELINE_DATABASE[dateStr][updateId];
      if (!update) continue;

      const filteredArticles = update.articles.filter(art => art.category === ACTIVE_NEWS_TAB);
      if (filteredArticles.length === 0) continue;

      totalArticlesRendered += filteredArticles.length;

      const updateSection = document.createElement("div");
      updateSection.className = "update-block";
      updateSection.innerHTML = `
        <div class="update-block-header">
          <span class="update-time"><i class="far fa-clock"></i> ${update.timeLabel}</span>
          <span class="update-title">${update.name}</span>
        </div>
        <ul class="headline-bullets-list" id="bullets-list-${dateStr.replace(/-/g, '')}-${updateId}"></ul>
      `;

      updatesSubContainer.appendChild(updateSection);

      const bulletsList = updateSection.querySelector(`#bullets-list-${dateStr.replace(/-/g, '')}-${updateId}`);
      filteredArticles.forEach(article => {
        const li = document.createElement("li");
        li.className = "headline-bullet-item";

        const stamp = generateTimelineTimestamp(dateStr, update.timeLabel);

        let typeClass = "type-news";
        if (article.type === "Blogg") typeClass = "type-blog";
        else if (article.type === "Analys") typeClass = "type-analysis";
        else if (article.type === "Krönika") typeClass = "type-column";
        else if (article.type === "Scouting") typeClass = "type-scout";

        li.innerHTML = `
          <div class="headline-meta-row">
            <span class="bullet-tag ${typeClass}">${article.type}</span>
            <span class="bullet-timestamp"><i class="far fa-calendar-alt"></i> ${stamp}</span>
          </div>
          <a href="#" class="headline-link" data-article-id="${article.id}">${article.title}</a>
        `;
        bulletsList.appendChild(li);
      });
    }
  });

  if (totalArticlesRendered === 0) {
    container.innerHTML = `
      <div class="no-news-found">
        <p><i class="fas fa-info-circle"></i> Inga artiklar tillgängliga för detta filter i nuläget.</p>
      </div>
    `;
  }

  document.querySelectorAll(".headline-link").forEach(link => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      const artId = link.getAttribute("data-article-id");
      openArticleModal(artId);
    });
  });

  updateNewsTimelineStylesFix();
}

function updateNewsTimelineStylesFix() {
  const container = document.getElementById("bulletin-container");
  if (!container) return;
  
  container.querySelectorAll(".headline-bullet-item").forEach(item => {
    item.style.paddingLeft = "1.8rem";
    const dot = item.querySelector("::before");
    if (dot) {
      dot.style.top = "18px";
    }
  });

  updateSimulatorUI();
}

// Tick the countdown widget
function tickCountdown() {
  const countdown = getNextUpdateCountdown();
  const labelEl = document.getElementById("next-update-label");
  const timeEl = document.getElementById("next-update-time");
  
  if (labelEl && timeEl) {
    labelEl.textContent = `Nästa: ${countdown.label} (${countdown.timeStr})`;
    
    const hStr = String(countdown.hours).padStart(2, "0");
    const mStr = String(countdown.minutes).padStart(2, "0");
    const sStr = String(countdown.seconds).padStart(2, "0");
    
    timeEl.innerHTML = `
      <span class="time-box">${hStr}t</span>
      <span class="time-separator">:</span>
      <span class="time-box">${mStr}m</span>
      <span class="time-separator">:</span>
      <span class="time-box">${sStr}s</span>
    `;
  }
}

// Render player cards
function renderPlayerGrid(playerList) {
  const grid = document.getElementById("player-grid-container");
  if (!grid) return;

  grid.innerHTML = "";
  playerList.forEach(player => {
    const card = document.createElement("div");
    card.className = "player-card animated card-pop";
    card.setAttribute("data-player-id", player.id);
    card.innerHTML = `
      <div class="player-card-jersey">#${player.number}</div>
      <div class="player-card-flag">${player.avatar}</div>
      <div class="player-card-content">
        <h3 class="player-card-name">${player.name}</h3>
        <p class="player-card-pos">${player.position}</p>
        <div class="player-card-meta">
          <span><i class="fas fa-tshirt"></i> ${player.club}</span>
          <span><i class="fas fa-birthday-cake"></i> ${player.age} år</span>
        </div>
        <div class="player-card-caps">
          <span>Landskamper: <strong>${player.caps}</strong></span>
          <span>Mål: <strong>${player.goals}</strong></span>
        </div>
        <div class="player-status-badge status-${player.status.toLowerCase()}">
          ${player.status}
        </div>
      </div>
    `;
    grid.appendChild(card);
    card.addEventListener("click", () => openPlayerModal(player.id));
  });
}

// Render tactical pitch positions
function renderTacticalPitch() {
  const pitch = document.getElementById("tactical-pitch-inner");
  if (!pitch) return;

  pitch.innerHTML = "";
  const lineup = [
    { id: "viktor_johansson", top: "85%", left: "50%", role: "GK" },
    { id: "isak_hien", top: "67%", left: "50%", role: "CB" },
    { id: "victor_lindelof", top: "67%", left: "25%", role: "LCB" },
    { id: "carl_starfelt", top: "67%", left: "75%", role: "RCB" },
    { id: "emil_holm", top: "45%", left: "90%", role: "RWB" },
    { id: "mattias_svanberg", top: "48%", left: "37%", role: "LDM" },
    { id: "yasin_ayari", top: "48%", left: "63%", role: "RDM" },
    { id: "gabriel_gudmundsson", top: "45%", left: "10%", role: "LWB" },
    { id: "lucas_bergvall", top: "28%", left: "33%", role: "LAM" },
    { id: "alexander_isak", top: "28%", left: "67%", role: "RAM" },
    { id: "viktor_gyokeres", top: "12%", left: "50%", role: "ST" }
  ];

  lineup.forEach(item => {
    const player = PLAYERS.find(p => p.id === item.id);
    if (!player) return;

    const node = document.createElement("div");
    node.className = "pitch-player-node";
    node.style.top = item.top;
    node.style.left = item.left;
    node.innerHTML = `
      <div class="jersey-node">${player.number}</div>
      <div class="node-name">${player.name.split(" ").pop()}</div>
    `;
    node.addEventListener("click", () => openPlayerModal(player.id));
    pitch.appendChild(node);
  });
}

// Render Match Schedule Timeline
function renderMatchSchedule() {
  const scheduleBox = document.getElementById("match-schedule-container");
  if (!scheduleBox) return;

  scheduleBox.innerHTML = "";

  MATCH_SCHEDULE.forEach(match => {
    const isWarmup = match.type === "warmup";
    const item = document.createElement("div");
    item.className = `schedule-item ${isWarmup ? 'type-warmup' : 'type-wc'}`;
    item.innerHTML = `
      <div class="schedule-dot-indicator"></div>
      <div class="schedule-item-header">
        <span class="match-badge">${isWarmup ? 'VÄNSKAPSMATCH' : 'FOTBOLLS-VM'}</span>
        <span class="match-date-stamp"><i class="far fa-calendar-alt"></i> ${match.date} kl. ${match.time}</span>
      </div>
      <div class="schedule-item-body">
        <h3 class="match-pairing">Sverige <span class="flag-vs">🇸🇪</span> vs. ${match.opponentFlag} ${match.opponent}</h3>
        <p class="match-venue"><i class="fas fa-map-marker-alt"></i> ${match.venue}</p>
        <p class="match-info-desc">${match.details}</p>
      </div>
    `;
    scheduleBox.appendChild(item);
  });
}

// Render Locker Room Chat
function renderLockerChat() {
  const chatContainer = document.getElementById("chat-messages-container");
  if (!chatContainer) return;

  chatContainer.innerHTML = "";

  CHAT_MESSAGES.forEach(msg => {
    const msgBlock = document.createElement("div");
    msgBlock.className = `chat-bubble-block ${msg.isCaptain ? 'captain' : ''}`;
    msgBlock.innerHTML = `
      <div class="chat-bubble-avatar">${msg.avatar}</div>
      <div class="chat-bubble-content">
        <div class="chat-bubble-meta">
          <span class="chat-sender-name">${msg.sender} ${msg.isCaptain ? '<span class="captain-badge">Lagkapten</span>' : ''}</span>
          <span class="chat-bubble-time">${msg.time}</span>
        </div>
        <div class="chat-bubble-text">${msg.text}</div>
      </div>
    `;
    chatContainer.appendChild(msgBlock);
  });

  chatContainer.scrollTop = chatContainer.scrollHeight;
}

// Render Music Player track states and Spotify Link bindings
function renderMusicPlayer() {
  const songTitle = document.getElementById("music-song-title");
  const artist = document.getElementById("music-artist");
  const songCount = document.getElementById("music-track-count");
  const playerBtn = document.getElementById("music-play-btn");
  const visualizer = document.getElementById("music-visualizer");
  const spotifyLink = document.getElementById("music-spotify-link");

  if (!songTitle) return;

  const track = PLAYLIST[currentTrackIndex];
  songTitle.textContent = track.title;
  artist.textContent = `${track.artist} (${track.category})`;
  songCount.textContent = `Låt ${currentTrackIndex + 1} av ${PLAYLIST.length}`;

  if (spotifyLink) {
    spotifyLink.setAttribute("href", track.spotifyUrl);
  }

  if (isPlaying) {
    playerBtn.innerHTML = '<i class="fas fa-pause"></i>';
    visualizer.classList.add("active");
  } else {
    playerBtn.innerHTML = '<i class="fas fa-play"></i>';
    visualizer.classList.remove("active");
  }
}

// Controls active HTML5 Audio playback streams
function updateAudioState() {
  if (!audioPlayer) return;

  const track = PLAYLIST[currentTrackIndex];

  if (audioPlayer.src !== track.audioUrl) {
    audioPlayer.src = track.audioUrl;
    audioPlayer.load();
  }

  if (isPlaying) {
    audioPlayer.play().catch(err => {
      console.log("Audio playback failed or blocked by browser: ", err);
      isPlaying = false;
      renderMusicPlayer();
    });
  } else {
    audioPlayer.pause();
  }
}

// Find Article
function findArticleWithTimelineContext(artId) {
  for (const dateStr in TIMELINE_DATABASE) {
    for (const updateId in TIMELINE_DATABASE[dateStr]) {
      const art = TIMELINE_DATABASE[dateStr][updateId].articles.find(a => a.id === artId);
      if (art) return { article: art, update: TIMELINE_DATABASE[dateStr][updateId], dateStr };
    }
  }
  return null;
}

// Open Article Modal
function openArticleModal(artId) {
  const dataObj = findArticleWithTimelineContext(artId);
  if (!dataObj) return;

  const { article, update, dateStr } = dataObj;

  const modal = document.getElementById("article-reader-modal");
  const title = document.getElementById("modal-article-title");
  const meta = document.getElementById("modal-article-meta");
  const bullets = document.getElementById("modal-article-bullets");
  const summary = document.getElementById("modal-article-summary");
  const playersContainer = document.getElementById("modal-article-players");

  if (!modal) return;

  const stamp = generateTimelineTimestamp(dateStr, update.timeLabel);

  title.textContent = article.title;
  meta.innerHTML = `
    <span><i class="fas fa-user-edit"></i> ${article.author}</span>
    <span><i class="far fa-clock"></i> ${stamp}</span>
    <span><i class="fas fa-tag"></i> ${article.type} / ${article.tag}</span>
  `;

  bullets.innerHTML = "";
  article.bullets.forEach(b => {
    const li = document.createElement("li");
    li.textContent = b;
    bullets.appendChild(li);
  });

  summary.innerHTML = `<p>${article.summary}</p>`;

  playersContainer.innerHTML = "";
  if (article.relatedPlayers && article.relatedPlayers.length > 0) {
    const label = document.createElement("span");
    label.className = "related-label";
    label.textContent = "Profilerade Spelare: ";
    playersContainer.appendChild(label);

    article.relatedPlayers.forEach(pId => {
      const p = PLAYERS.find(pl => pl.id === pId);
      if (p) {
        const link = document.createElement("button");
        link.className = "btn-related-player";
        link.innerHTML = `<span class="flag-mini">${p.avatar}</span> ${p.name}`;
        link.addEventListener("click", () => {
          modal.classList.remove("active");
          setTimeout(() => {
            openPlayerModal(p.id);
          }, 300);
        });
        playersContainer.appendChild(link);
      }
    });
  }

  modal.classList.add("active");
}

// Open Player Modal
function openPlayerModal(pId) {
  const player = PLAYERS.find(p => p.id === pId);
  if (!player) return;

  const modal = document.getElementById("player-profile-modal");
  const avatar = document.getElementById("player-modal-avatar");
  const name = document.getElementById("player-modal-name");
  const meta = document.getElementById("player-modal-meta");
  const bio = document.getElementById("player-modal-bio");
  const statBox = document.getElementById("player-modal-stats-grid");

  if (!modal) return;

  avatar.textContent = player.avatar;
  name.innerHTML = `${player.name} <span class="modal-jersey-pill">#${player.number}</span>`;
  meta.innerHTML = `
    <span><strong>Position:</strong> ${player.position}</span>
    <span><strong>Klubb:</strong> ${player.club}</span>
    <span><strong>Ålder:</strong> ${player.age} år</span>
    <span><strong>Landskamper:</strong> ${player.caps} (${player.goals} mål)</span>
  `;

  bio.textContent = player.bio;

  statBox.innerHTML = "";
  for (const [key, value] of Object.entries(player.stats)) {
    let cleanKey = key;
    if (key === "saves") cleanKey = "Räddningar";
    else if (key === "cleanSheets") cleanKey = "Hållna nollor";
    else if (key === "passAccuracy") cleanKey = "Passningssäkerhet";
    else if (key === "tackles") cleanKey = "Tacklingar";
    else if (key === "interceptions") cleanKey = "Brytningar";
    else if (key === "crosses") cleanKey = "Inlägg";
    else if (key === "assists") cleanKey = "Målgivande pass";
    else if (key === "longBalls") cleanKey = "Långbollar";
    else if (key === "blocks") cleanKey = "Skottblockeringar";
    else if (key === "dribblesSuccess") cleanKey = "Dribblingar (%)";
    else if (key === "keyPasses") cleanKey = "Nyckelpassningar";
    else if (key === "goals") cleanKey = "Mål";
    else if (key === "shots") cleanKey = "Skott";
    else if (key === "distanceCovered") cleanKey = "Löpsträcka";
    else if (key === "topSpeed") cleanKey = "Topphastighet";
    else if (key === "aerialDuelsWon") cleanKey = "Luftdueller (%)";

    const box = document.createElement("div");
    box.className = "stat-metric-card";
    box.innerHTML = `
      <span class="metric-val">${value}</span>
      <span class="metric-lbl">${cleanKey}</span>
    `;
    statBox.appendChild(box);
  }

  modal.classList.add("active");
}

// Setup Event Handlers
function setupEventListeners() {
  document.querySelectorAll(".modal-close, .modal-backdrop").forEach(el => {
    el.addEventListener("click", () => {
      document.querySelectorAll(".modal-overlay").forEach(m => m.classList.remove("active"));
    });
  });

  const tabSweden = document.getElementById("tab-news-sweden");
  const tabOpponent = document.getElementById("tab-news-opponent");

  if (tabSweden && tabOpponent) {
    tabSweden.addEventListener("click", () => {
      tabOpponent.classList.remove("active");
      tabSweden.classList.add("active");
      ACTIVE_NEWS_TAB = "sweden";
      updateNewsDashboard();
    });

    tabOpponent.addEventListener("click", () => {
      tabSweden.classList.remove("active");
      tabOpponent.classList.add("active");
      ACTIVE_NEWS_TAB = "opponent";
      updateNewsDashboard();
    });
  }

  // Music Player Events
  const playBtn = document.getElementById("music-play-btn");
  const prevBtn = document.getElementById("music-prev-btn");
  const nextBtn = document.getElementById("music-next-btn");

  if (playBtn) {
    playBtn.addEventListener("click", () => {
      isPlaying = !isPlaying;
      renderMusicPlayer();
      updateAudioState();
    });
  }

  if (prevBtn) {
    prevBtn.addEventListener("click", () => {
      currentTrackIndex = currentTrackIndex === 0 ? PLAYLIST.length - 1 : currentTrackIndex - 1;
      renderMusicPlayer();
      updateAudioState();
    });
  }

  if (nextBtn) {
    nextBtn.addEventListener("click", () => {
      currentTrackIndex = currentTrackIndex === PLAYLIST.length - 1 ? 0 : currentTrackIndex + 1;
      renderMusicPlayer();
      updateAudioState();
    });
  }

  // Position Filters
  const filters = document.querySelectorAll(".filter-btn");
  filters.forEach(btn => {
    btn.addEventListener("click", () => {
      filters.forEach(f => f.classList.remove("active"));
      btn.classList.add("active");

      const pos = btn.getAttribute("data-pos");
      let filtered = PLAYERS;
      if (pos !== "all") {
        filtered = PLAYERS.filter(p => p.position.toLowerCase() === pos);
      }
      renderPlayerGrid(filtered);
    });
  });

  const searchInput = document.getElementById("player-search");
  if (searchInput) {
    searchInput.addEventListener("input", (e) => {
      const q = e.target.value.toLowerCase().trim();
      
      filters.forEach(f => f.classList.remove("active"));
      filters[0].classList.add("active");

      const searched = PLAYERS.filter(p => 
        p.name.toLowerCase().includes(q) || 
        p.club.toLowerCase().includes(q) || 
        p.position.toLowerCase().includes(q)
      );
      renderPlayerGrid(searched);
    });
  }

  const simToggle = document.getElementById("sim-active");
  const hourSelect = document.getElementById("sim-hour");
  
  if (simToggle && hourSelect) {
    simToggle.addEventListener("change", (e) => {
      SIMULATOR_ACTIVE = e.target.checked;
      updateNewsDashboard();
      tickCountdown();
    });

    hourSelect.addEventListener("change", (e) => {
      SIMULATED_HOUR = Number(e.target.value);
      updateNewsDashboard();
      tickCountdown();
    });
  }
}

// Update simulator UI indicators
function updateSimulatorUI() {
  const currentMinutes = getCurrentTimeMinutes();
  const timeBox = document.getElementById("sim-current-time-display");
  if (timeBox) {
    const h = String(Math.floor(currentMinutes / 60)).padStart(2, "0");
    const m = String(currentMinutes % 60).padStart(2, "0");
    timeBox.textContent = `${h}:${m}`;
  }

  const activeIds = getActiveUpdatesForDate("2026-05-23");
  for (let id = 1; id <= 5; id++) {
    const indicator = document.getElementById(`sched-indicator-${id}`);
    if (indicator) {
      if (activeIds.includes(id)) {
        indicator.classList.add("active");
      } else {
        indicator.classList.remove("active");
      }
    }
  }
}
