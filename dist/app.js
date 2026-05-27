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



// 2. Chronological Pre-Camp News Timeline (May 21, 22, 23, 2026 - Geared towards genuine pre-camp activities)
const TIMELINE_DATABASE = {
  "2026-05-21": {
    1: {
      timeLabel: "07:00",
      name: "Breakfast Camp Report",
      articles: [
        {
          id: "art_21_1_1",
          category: "sweden",
          type: "News",
          title: "Potter's staff inspects Bosön training facilities ahead of May 27 gather",
          bullets: [
            "Coaching assistants tour Stockholm's elite national training complex.",
            "Inspect newly laid turf surfaces and high-performance recovery rooms.",
            "Svenska FA confirms all technical apparatus is prepared to receive players."
          ],
          summary: "Graham Potter's coaching assistants, coordinated by Björn Hamberg, performed a complete site walkthrough at Bosön in Stockholm yesterday. The Swedish FA has secured Stockholm's top elite facility to act as the primary preparation base. The fields are in pristine condition, and all tactical analysis gear is configured for the players' arrival on Wednesday, May 27.",
          author: "Olof Lundh (Fotbollskanalen)",
          readTime: "3 min",
          tag: "Bosön Camp",
          relatedPlayers: []
        }
      ]
    },
    2: {
      timeLabel: "11:00",
      name: "Press Briefing",
      articles: [
        {
          id: "art_21_2_1",
          category: "sweden",
          type: "News",
          title: "Sweden FA confirms ticketing details and safety plan for Norway warmup in Oslo",
          bullets: [
            "Ticketing portal opens for the highly anticipated friendly at Ullevaal Stadion.",
            "Over 6,000 traveling Swedish fans expected to pack Oslo's away blocks.",
            "Svenska FA releases detailed pre-match logistics for traveling fans."
          ],
          summary: "The Swedish FA released ticketing and security protocols for the upcoming international friendly against Norway on June 1 at Ullevaal Stadion. Norwegian authorities anticipate a completely packed venue. Swedish fans have already snapped up their designated away allocation, promising an electric Scandinavian atmosphere for Potter's first match of the final phase.",
          author: "Svensk Fotboll Press",
          readTime: "2 min",
          tag: "Ticket Intel",
          relatedPlayers: []
        }
      ]
    },
    3: {
      timeLabel: "14:30",
      name: "Afternoon Workouts",
      articles: [
        {
          id: "art_21_3_1",
          category: "sweden",
          type: "Blog",
          title: "Viktor Gyökeres maintains elite gym drills at Arsenal training facility",
          bullets: [
            "Prolific forward logs individual weight lifting routines in London.",
            "Physiologists confirm Gyökeres is entering the pre-camp in perfect metabolic shape.",
            "Gyökeres writes: 'Got my personal schedule from Graham; focusing on high-speed stamina.'"
          ],
          summary: "Sticking to an individualized conditioning program, Arsenal striker Viktor Gyökeres is spending his week performing rigorous explosive speed drills at his club's gym in London. Under instructions from Potter's staff, players not in active league matches are keeping their physical registers high so that tactical field sessions can start at maximum velocity on day one.",
          author: "Viktor Gyökeres (Player Blog)",
          readTime: "3 min",
          tag: "Player Focus",
          relatedPlayers: ["viktor_gyokeres"]
        }
      ]
    },
    4: {
      timeLabel: "18:00",
      name: "Scouting Update",
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
      name: "Late Night Camp Diary",
      articles: [
        {
          id: "art_21_5_1",
          category: "sweden",
          type: "Blog",
          title: "Player Blog: Emil Holm on packing bags and heading home to Gothenburg",
          bullets: [
            "Juventus wing-back shares photos of his flight luggage and travel ticket.",
            "Excited to spend a quick 48 hours with family before gathering in Stockholm.",
            "Holm: 'Stockholm and Bosön represent the final engine start. Let's make this year wild.'"
          ],
          summary: "In a personal blog post, Emil Holm expressed his excitement as he boarded a flight back to Sweden. Having concluded his Serie A campaign, Holm is taking a brief two-day rest with family in Gothenburg before reporting to the national team training camp at Bosön on Wednesday morning. 'My mind is completely locked on the yellow and blue,' Holm wrote.",
          author: "Emil Holm (Player Blog)",
          readTime: "2 min",
          tag: "Player Travel",
          relatedPlayers: ["emil_holm"]
        }
      ]
    }
  },
  "2026-05-22": {
    1: {
      timeLabel: "07:00",
      name: "Breakfast Camp Report",
      articles: [
        {
          id: "art_22_1_1",
          category: "sweden",
          type: "Column",
          title: "Lundh's Column: Why the May 25 release deadline is crucial for Potter's team synergy",
          bullets: [
            "FIFA's mandatory player release deadline begins on Monday, May 25.",
            "Allows national teams full, uninterrupted access to their European stars.",
            "Potter gains complete coaching custody over Isak, Gyökeres, and Lindelöf."
          ],
          summary: "As we edge closer to the mandatory FIFA player release date on May 25, Graham Potter is poised to finally take full command of his squad. The staggered endings of European club seasons have made early tactical assemblies impossible. Starting Monday, all club responsibilities cease, marking the true structural beginning of Sweden's quest to build cohesive chemistry for their Group F opener.",
          author: "Olof Lundh (Fotbollskanalen)",
          readTime: "4 min",
          tag: "Camp Analysis",
          relatedPlayers: ["alexander_isak", "viktor_gyokeres", "victor_lindelof"]
        }
      ]
    },
    2: {
      timeLabel: "11:00",
      name: "Press Briefing",
      articles: [
        {
          id: "art_22_2_1",
          category: "sweden",
          type: "News",
          title: "Potter outlines Stockholm pre-camp objectives: 'It is about rhythm and physical loading'",
          bullets: [
            "Graham Potter outlines exact daily workloads for the Stockholm gathering.",
            "Focuses heavily on ball possession drills and system familiarity.",
            "Praises Sweden FA's logistics division for organizing a seamless flight plan."
          ],
          summary: "During an online media briefing today, förbundskapten Graham Potter spoke on the goals of Sweden's local Stockholm pre-camp. 'The first three days at Bosön are designed to get everyone on the same physical page. Some players have had a week off, while others played club games last Sunday. We will balance player workloads and implement our core patterns before flying to Norway,' Potter explained.",
          author: "Therese Strömberg (Expressen)",
          readTime: "3 min",
          tag: "Manager Focus",
          relatedPlayers: []
        }
      ]
    },
    3: {
      timeLabel: "14:30",
      name: "Afternoon Workouts",
      articles: [
        {
          id: "art_22_3_1",
          category: "sweden",
          type: "Blog",
          title: "Alexander Isak completes final individual agility drills in Liverpool",
          bullets: [
            "Liverpool striker shares a training log from his local pitch workouts.",
            "Focuses on quick turning radius drills and penalty-box finishing.",
            "Isak: 'Getting the muscles tuned up. Stockholm, see you next week!'"
          ],
          summary: "Alexander Isak is not wasting his pre-camp window. The Liverpool striker has been working with a personal trainer on quick direction-change sprints to preserve his agility levels. 'The physical side of the game is vital in the opening match against Tunisia. We must be quick off the mark, and I want to be 100% sharp when we gather at Bosön,' Isak wrote in his online camp log.",
          author: "Alexander Isak (Player Blog)",
          readTime: "3 min",
          tag: "Player Training",
          relatedPlayers: ["alexander_isak"]
        }
      ]
    },
    4: {
      timeLabel: "18:00",
      name: "Scouting Update",
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
          tag: "Tunisia Intel",
          relatedPlayers: []
        }
      ]
    },
    5: {
      timeLabel: "21:30",
      name: "Late Night Camp Diary",
      articles: [
        {
          id: "art_22_5_1",
          category: "sweden",
          type: "Blog",
          title: "Tottenham starlet Lucas Bergvall: 'Playing a World Cup at 20 is a dream I am ready for'",
          bullets: [
            "Bergvall shares a late-night travel diary entry regarding his emotions.",
            "Reflects on his incredible season in London and his tactical fit under Potter.",
            "Bergvall: 'The pressure is a privilege. I want to learn, but most of all, I want to win.'"
          ],
          summary: "In a highly candid late-night diary post, Lucas Bergvall discussed his emotions ahead of reporting to Stockholm. The 20-year-old playmaker has caught global attention at Tottenham Hotspur and is set to be Sweden's creative catalyst. 'Playing for Sweden in a World Cup is what you practice for in the garden as a kid. I'm ready to fight for my country,' Bergvall wrote.",
          author: "Lucas Bergvall (Player Blog)",
          readTime: "4 min",
          tag: "Player Diary",
          relatedPlayers: ["lucas_bergvall"]
        }
      ]
    }
  },
  "2026-05-23": {
    1: {
      timeLabel: "07:00",
      name: "Breakfast Camp Report",
      articles: [
        {
          id: "art_23_1_1",
          category: "sweden",
          type: "News",
          title: "Sweden media desk gears up for Stockholm media blitz starting May 27",
          bullets: [
            "Swedish FA's press crew arrives in Stockholm to build team media center.",
            "Over 120 accredited international journalists scheduled to cover Bosön drills.",
            "Potter coordinates with staff to organize structured player media panels."
          ],
          summary: "The Swedish FA's advanced media division arrived in Stockholm this morning to build the primary press room at the team's headquarters. Starting next Wednesday, players will engage in daily press briefings and mixed zones, creating high transparency and media accessibility as the nation rallies behind their players' campaign.",
          author: "Olof Lundh (Fotbollskanalen)",
          readTime: "3 min",
          tag: "Media Planning",
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
          tag: "Netherlands Report",
          relatedPlayers: ["yasin_ayari", "mattias_svanberg"]
        }
      ]
    },
    2: {
      timeLabel: "11:00",
      name: "Press Briefing",
      articles: [
        {
          id: "art_23_2_1",
          category: "sweden",
          type: "News",
          title: "Potter's finalized pre-tournament agenda: Stockholm to Dallas timeline published",
          bullets: [
            "Svenska FA publishes the detailed chronological itinerary for the final phase.",
            "Squad reports to Stockholm on May 27, trains at Bosön and Strawberry Arena.",
            "Flights to Oslo on May 31, Norway match June 1, departs for Dallas base on June 2."
          ],
          summary: "Svensk Fotboll today published the official team calendar. The 26-man roster will gather in Stockholm next Wednesday, training locally for four days. On May 31, they travel to Oslo for their first friendly against Norway on June 1, and immediately board a charter flight to their primary base camp in Dallas, Texas on June 2 to begin their final tournament preparations.",
          author: "Therese Strömberg (Expressen)",
          readTime: "3 min",
          tag: "Camp Schedule",
          relatedPlayers: []
        }
      ]
    },
    3: {
      timeLabel: "14:30",
      name: "Afternoon Workouts",
      articles: [
        {
          id: "art_23_3_1",
          category: "sweden",
          type: "Blog",
          title: "Carl Starfelt completes ankle rehab, cleared for full practice at Bosön",
          bullets: [
            "Celta Vigo defender Starfelt completes final ankle muscle-load courses.",
            "Physiotherapists issue 100% clearance for day-one contact exercises.",
            "Starfelt: 'The ankle feels rock-solid. See you guys on the pitch on Wednesday!'"
          ],
          summary: "Sweden has received a major fitness boost as center-back Carl Starfelt completed his ankle physical therapy program. Carrying a light knock from his final La Liga match, Starfelt has been training individually, but has now been given 100% clearance to join the team for full-contact training when camp gathers on Wednesday morning.",
          author: "Carl Starfelt (Player Diary)",
          readTime: "3 min",
          tag: "Injury Update",
          relatedPlayers: ["carl_starfelt"]
        }
      ]
    },
    4: {
      timeLabel: "18:00",
      name: "Scouting Update",
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
      name: "Late Night Camp Diary",
      articles: [
        {
          id: "art_23_5_1",
          category: "sweden",
          type: "Blog",
          title: "Captain Victor Lindelöf: 'The suitcases are packed; Stockholm, see you on Wednesday'",
          bullets: [
            "Aston Villa defender shares photos of his travel luggage on social media.",
            "Reflects on the immense pride of captaining Sweden in their World Cup campaign.",
            "Lindelöf: 'The work starts on Wednesday. We have a special squad, let's lock in.'"
          ],
          summary: "In a late-night camp diary entry, captain Victor Lindelöf shared photos of his packed travel bags. Expressing deep pride in leading *Herrlandslaget* into the 2026 World Cup, Lindelöf emphasized that Sweden's collective unity will be their primary strength. 'Gothenburg was home for a bit, but Stockholm is where the final engine starts. The team is locked in. Let's make this year unforgettable,' the captain wrote.",
          author: "Victor Lindelöf (Player Log)",
          readTime: "4 min",
          tag: "Captain's Log",
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
    opponent: "Norway",
    opponentFlag: "🇳🇴",
    venue: "Ullevaal Stadion, Oslo",
    details: "A classic Scandinavian derby serving as manager Graham Potter's first major tactical test before departing for the USA."
  },
  {
    id: "match_greece",
    type: "warmup",
    date: "2026-06-04",
    time: "19:00",
    opponent: "Greece",
    opponentFlag: "🇬🇷",
    venue: "Strawberry Arena, Stockholm",
    details: "Second warm-up friendly at home in Stockholm. A final tactical rehearsal before departing for the World Cup in America."
  },
  {
    id: "match_tunisia",
    type: "worldcup",
    date: "2026-06-14",
    time: "20:00 (Monterrey Time)", // 10:00 p.m. ET is 8:00 p.m. local Monterrey time (CST)
    opponent: "Tunisia",
    opponentFlag: "🇹🇳",
    venue: "Estadio Monterrey, Mexico",
    details: "World Cup Group F Opener! Sweden is expected to face an extremely disciplined, defensive Tunisia in Monterrey."
  },
  {
    id: "match_netherlands",
    type: "worldcup",
    date: "2026-06-20",
    time: "12:00 (Houston Time)", // 1:00 p.m. ET is 12:00 p.m. local Houston time (CST)
    opponent: "Netherlands",
    opponentFlag: "🇳🇱",
    venue: "Houston Stadium, Texas",
    details: "A massive heavyweight clash in Houston that could decide the top spot of the group."
  },
  {
    id: "match_japan",
    type: "worldcup",
    date: "2026-06-25",
    time: "18:00 (Dallas Time)", // 7:00 p.m. ET is 6:00 p.m. local Dallas time (CST)
    opponent: "Japan",
    opponentFlag: "🇯🇵",
    venue: "Dallas Stadium, Texas",
    details: "Third group stage match. An intense battle against a highly tactical, high-stamina, and fast Japan side under Hajime Moriyasu."
  }
];

// 3.5 Match Reports & Player Ratings Database
const MATCH_REPORTS_DATABASE = {
  "match_norway": {
    score: "2 - 1",
    scorers: "🇳🇴 Haaland (12') | 🇸🇪 Gyökeres (54'), Bergvall (82')",
    report: "Graham Potter's era kicks off with an impressive comeback victory in Oslo! Despite Erling Haaland opening the scoring early with a powerful half-volley, Sweden dominated possession in the second half. Viktor Gyökeres equalized with a towering header before substitute Lucas Bergvall scored a sensational 25-yard winner in the 82nd minute.",
    ratings: [
      { name: "Viktor Johansson", role: "GK", rating: 7.5, comment: "Made two critical saves against Haaland in the first half.", isMotm: false },
      { name: "Isak Hien", role: "CB", rating: 7.0, comment: "Tough battle against Haaland, recovered well in the second half.", isMotm: false },
      { name: "Victor Lindelöf", role: "CB", rating: 7.5, comment: "Composed leadership. Kept the defensive line compact.", isMotm: false },
      { name: "Emil Holm", role: "RWB", rating: 7.0, comment: "High work rate, provided defensive coverage and dangerous crosses.", isMotm: false },
      { name: "Mattias Svanberg", role: "DM", rating: 7.5, comment: "Controlled the midfield tempo with disciplined recycling.", isMotm: false },
      { name: "Yasin Ayari", role: "DM", rating: 7.0, comment: "Energetic pressing, linked defense and attack smoothly.", isMotm: false },
      { name: "Gabriel Gudmundsson", role: "LWB", rating: 6.5, comment: "Decent runs, but struggled slightly with Norway's wingers.", isMotm: false },
      { name: "Lucas Bergvall", role: "AM", rating: 8.5, comment: "Subbed on in the 65th minute. Changed the game completely with his creative dribbling and a spectacular long-range winning goal.", isMotm: true },
      { name: "Alexander Isak", role: "AM", rating: 7.5, comment: "Highly threatful between the lines. Assisted Bergvall's goal.", isMotm: false },
      { name: "Viktor Gyökeres", role: "ST", rating: 8.0, comment: "A physical powerhouse upfront. Scored a magnificent equalizing header.", isMotm: false }
    ],
    preview: {
      tactical: "Manager Graham Potter's debut match! The focus will be on transitioning to the new 3-4-2-1 formation and testing defensive responses to Erling Haaland's lethal central runs.",
      keyStat: "Last meeting ended in a 3-2 victory for Norway in 2022. Time for Sweden's revenge!"
    }
  },
  "match_greece": {
    score: "1 - 0",
    scorers: "🇸🇪 Gyökeres (67')",
    report: "A gritty home victory for Sweden at Strawberry Arena! Greece set up a disciplined defensive block, frustrating Sweden for over an hour. Viktor Gyökeres finally broke the deadlock with a clinical volley from Alexander Isak's cross. Potter used the match to test squad depth, with several rotated players impressing.",
    ratings: [
      { name: "Viktor Johansson", role: "GK", rating: 7.0, comment: "Comfortable night, dealt well with high crosses.", isMotm: false },
      { name: "Isak Hien", role: "CB", rating: 7.0, comment: "Solid and composed, kept Greek attackers quiet.", isMotm: false },
      { name: "Victor Lindelöf", role: "CB", rating: 7.5, comment: "Marshalled the defense excellently, good on the ball.", isMotm: false },
      { name: "Emil Holm", role: "RWB", rating: 7.0, comment: "Provided dangerous width down the right.", isMotm: false },
      { name: "Mattias Svanberg", role: "DM", rating: 7.0, comment: "Steady in the pivot, recycled possession cleanly.", isMotm: false },
      { name: "Hugo Larsson", role: "DM", rating: 7.5, comment: "Impressive display as a rotated option, drove the ball forward with intent.", isMotm: false },
      { name: "Gabriel Gudmundsson", role: "LWB", rating: 7.0, comment: "Energetic overlapping runs, won several corners.", isMotm: false },
      { name: "Alexander Isak", role: "AM", rating: 7.5, comment: "Provided the assist for Gyökeres' winner with a precise cross.", isMotm: false },
      { name: "Lucas Bergvall", role: "AM", rating: 7.0, comment: "Creative spark, unlocking Greek lines with quick passes.", isMotm: false },
      { name: "Viktor Gyökeres", role: "ST", rating: 8.5, comment: "Match-winner. Clinical volley to break the deadlock. Physical dominance throughout.", isMotm: true }
    ],
    preview: {
      tactical: "Second warm-up friendly at home in Stockholm! Potter rotates to test squad depth and fine-tune tactical patterns before the World Cup.",
      keyStat: "Sweden have won 4 of their last 5 home matches at Strawberry Arena."
    }
  },
  "match_tunisia": {
    score: "2 - 0",
    scorers: "🇸🇪 Isak (23'), Gyökeres (68')",
    report: "A perfect start to Sweden's World Cup campaign! Graham Potter's 3-4-2-1 formation worked flawlessly, suffocating Tunisia's defensive low-block. Alexander Isak opened the scoring with a brilliant curled strike into the top corner. Viktor Gyökeres sealed the three points in the second half by capitalizing on a clinical counter-attack engineered by Yasin Ayari.",
    ratings: [
      { name: "Viktor Johansson", role: "GK", rating: 7.0, comment: "Had a quiet night but remained alert, keeping a clean sheet.", isMotm: false },
      { name: "Isak Hien", role: "CB", rating: 7.5, comment: "Completely shut down Tunisia's aerial attacks with dominant clearances.", isMotm: false },
      { name: "Carl Starfelt", role: "RCB", rating: 7.0, comment: "Solid defensive display, comfortable on the ball.", isMotm: false },
      { name: "Victor Lindelöf", role: "LCB", rating: 7.5, comment: "Excellent positioning, initiated attacks from deep.", isMotm: false },
      { name: "Emil Holm", role: "RWB", rating: 8.0, comment: "Constant overlapping threat. Provided a pinpoint assist for Isak's goal.", isMotm: false },
      { name: "Mattias Svanberg", role: "DM", rating: 7.0, comment: "Shielded the back three reliably, broke up transitions.", isMotm: false },
      { name: "Yasin Ayari", role: "DM", rating: 8.0, comment: "Stellar performance. Creative playmaker who assisted Gyökeres with a visionary pass.", isMotm: false },
      { name: "Gabriel Gudmundsson", role: "LWB", rating: 7.0, comment: "Defensively sound and highly active in transitions.", isMotm: false },
      { name: "Lucas Bergvall", role: "AM", rating: 7.5, comment: "Creative linking, dribbled past defenders with ease.", isMotm: false },
      { name: "Alexander Isak", role: "AM", rating: 8.5, comment: "A world-class display. Opened the scoring with a spectacular solo goal and was a constant threat.", isMotm: true },
      { name: "Viktor Gyökeres", role: "ST", rating: 8.0, comment: "Relentless physical press. Scored Sweden's second goal with a powerful finish.", isMotm: false }
    ],
    preview: {
      tactical: "Group F opener in Monterrey! Sweden must break down Tunisia's disciplined, compact low-block. Expect heavy reliance on wing-backs Holm and Gudmundsson to stretch the pitch.",
      keyStat: "Tunisia kept 4 clean sheets during African qualifiers. Breaking them down is key."
    }
  },
  "match_netherlands": {
    score: "2 - 2",
    scorers: "🇳🇱 Gakpo (34'), Depay (71') | 🇸🇪 Gyökeres (41', 88')",
    report: "An epic blockbuster in Houston! Sweden showcased incredible resilience to grab a dramatic draw against the Dutch favorites. Memphis Depay put the Netherlands ahead in the 71st minute, but Sweden's relentless press paid off in the 88th minute when Viktor Gyökeres scored his second of the game, blasting a low shot past Bart Verbruggen.",
    ratings: [
      { name: "Viktor Johansson", role: "GK", rating: 8.0, comment: "Heroic performance. Made five critical saves to keep Sweden in the game.", isMotm: false },
      { name: "Isak Hien", role: "CB", rating: 6.5, comment: "Struggled slightly against Gakpo's pace, but made key blocks.", isMotm: false },
      { name: "Carl Starfelt", role: "RCB", rating: 6.5, comment: "Gave away a penalty, but recovered to win crucial aerial duels.", isMotm: false },
      { name: "Victor Lindelöf", role: "LCB", rating: 7.0, comment: "Kept the backline organized under immense Dutch pressure.", isMotm: false },
      { name: "Emil Holm", role: "RWB", rating: 7.0, comment: "Tough battle against Gakpo, made excellent recoveries.", isMotm: false },
      { name: "Mattias Svanberg", role: "DM", rating: 7.5, comment: "Massive distance covered. Shielded the defense tirelessly.", isMotm: false },
      { name: "Yasin Ayari", role: "DM", rating: 7.0, comment: "Press-resistant play under high pressure, recycled ball cleanly.", isMotm: false },
      { name: "Gabriel Gudmundsson", role: "LWB", rating: 6.5, comment: "Had a tough defensive assignment but contributed to transitions.", isMotm: false },
      { name: "Lucas Bergvall", role: "AM", rating: 7.0, comment: "Showcased high class in tight spaces before being subbed.", isMotm: false },
      { name: "Alexander Isak", role: "AM", rating: 7.5, comment: "Assisted Gyökeres' first goal with a brilliant turn and cross.", isMotm: false },
      { name: "Viktor Gyökeres", role: "ST", rating: 9.0, comment: "Sensational brace. A constant nightmare for Virgil van Dijk, scoring the dramatic late equalizer.", isMotm: true }
    ],
    preview: {
      tactical: "The Group F blockbuster in Houston! A heavy-duty tactical test against Koeman's highly fluent Dutch setup. Sweden's central pivot must prepare aggressive pressing traps.",
      keyStat: "Netherlands scored 18 goals in their last 6 matches. Sweden's defense must lock in."
    }
  },
  "match_japan": {
    score: "1 - 2",
    scorers: "🇯🇵 Kubo (49') | 🇸🇪 Elanga (62'), Isak (79')",
    report: "Sweden wins Group F! An intense, high-tempo battle in Dallas ends with Sweden securing top spot. After Takefusa Kubo scored early in the second half, Graham Potter introduced Anthony Elanga, who immediately equalized with a blistering run. Alexander Isak then scored the winning goal in the 79th minute, clinical finishing after a beautiful passing sequence.",
    ratings: [
      { name: "Viktor Johansson", role: "GK", rating: 7.5, comment: "Made three spectacular saves against Japan's quick counters.", isMotm: false },
      { name: "Isak Hien", role: "CB", rating: 7.5, comment: "Dominant physical presence, stopped key central attacks.", isMotm: false },
      { name: "Carl Starfelt", role: "RCB", rating: 7.0, comment: "Solid positioning, tracked runs diligently.", isMotm: false },
      { name: "Victor Lindelöf", role: "LCB", rating: 7.5, comment: "Organized defense, launched transitions with precise long balls.", isMotm: false },
      { name: "Emil Holm", role: "RWB", rating: 7.0, comment: "Tough defensive shift against Mitoma, limited his options.", isMotm: false },
      { name: "Mattias Svanberg", role: "DM", rating: 7.0, comment: "Combative in midfield, won crucial second balls.", isMotm: false },
      { name: "Yasin Ayari", role: "DM", rating: 7.5, comment: "Excellent passing accuracy, controlled the tempo in the second half.", isMotm: false },
      { name: "Gabriel Gudmundsson", role: "LWB", rating: 7.0, comment: "Relentless engine, contributed heavily to high press.", isMotm: false },
      { name: "Lucas Bergvall", role: "AM", rating: 7.0, comment: "Showcased high creativity before being replaced by Elanga.", isMotm: false },
      { name: "Anthony Elanga", role: "AM", rating: 8.0, comment: "Super-sub of the tournament. Equalized with a lightning-fast sprint and finish.", isMotm: false },
      { name: "Alexander Isak", role: "AM", rating: 8.5, comment: "Match-winner. Scored the decider with pure clinical brilliance and generalled the entire attack.", isMotm: true }
    ],
    preview: {
      tactical: "Final group stage battle in Dallas! Moriyasu's high-stamina side will exploit transitional spaces. Wing-backs must track back rapidly to restrict Kubo and Mitoma.",
      keyStat: "Sweden is unbeaten in their last 3 meetings with Japan."
    }
  }
};

// 3.6 Scout Comparison Attributes Database (2026 FIFA Attributes out of 100)
const SQUAD_ATTRIBUTES = {
  "viktor_johansson": { pac: 76, sho: 15, pas: 78, dri: 45, def: 88, phy: 80 },
  "kristoffer_nordfeldt": { pac: 58, sho: 12, pas: 81, dri: 38, def: 82, phy: 78 },
  "jacob_zetterstrom": { pac: 64, sho: 10, pas: 72, dri: 35, def: 84, phy: 92 },
  "isak_hien": { pac: 85, sho: 38, pas: 70, dri: 64, def: 88, phy: 90 },
  "victor_lindelof": { pac: 68, sho: 55, pas: 81, dri: 72, def: 86, phy: 80 },
  "carl_starfelt": { pac: 72, sho: 35, pas: 68, dri: 58, def: 84, phy: 86 },
  "hjalmar_ekdal": { pac: 70, sho: 40, pas: 78, dri: 62, def: 82, phy: 78 },
  "gabriel_gudmundsson": { pac: 90, sho: 62, pas: 76, dri: 78, def: 74, phy: 78 },
  "emil_holm": { pac: 88, sho: 68, pas: 75, dri: 76, def: 78, phy: 84 },
  "gustaf_lagerbielke": { pac: 66, sho: 45, pas: 70, dri: 55, def: 80, phy: 85 },
  "eric_smith": { pac: 70, sho: 58, pas: 84, dri: 72, def: 80, phy: 82 },
  "elliot_stroud": { pac: 84, sho: 60, pas: 74, dri: 78, def: 70, phy: 75 },
  "daniel_svensson": { pac: 80, sho: 55, pas: 82, dri: 76, def: 78, phy: 74 },
  "yasin_ayari": { pac: 78, sho: 70, pas: 86, dri: 84, def: 68, phy: 72 },
  "lucas_bergvall": { pac: 82, sho: 75, pas: 88, dri: 90, def: 62, phy: 74 },
  "jesper_karlstrom": { pac: 68, sho: 52, pas: 78, dri: 68, def: 84, phy: 86 },
  "benjamin_nygren": { pac: 80, sho: 80, pas: 78, dri: 81, def: 45, phy: 68 },
  "ken_sema": { pac: 78, sho: 68, pas: 76, dri: 78, def: 72, phy: 85 },
  "mattias_svanberg": { pac: 80, sho: 82, pas: 84, dri: 80, def: 76, phy: 84 },
  "besfort_zeneli": { pac: 82, sho: 72, pas: 80, dri: 84, def: 52, phy: 64 },
  "taha_ali": { pac: 92, sho: 70, pas: 74, dri: 91, def: 35, phy: 60 },
  "alexander_bernhardsson": { pac: 88, sho: 74, pas: 70, dri: 78, def: 48, phy: 72 },
  "anthony_elanga": { pac: 93, sho: 78, pas: 75, dri: 82, def: 42, phy: 70 },
  "viktor_gyokeres": { pac: 88, sho: 90, pas: 78, dri: 84, def: 45, phy: 92 },
  "alexander_isak": { pac: 90, sho: 88, pas: 83, dri: 89, def: 38, phy: 76 },
  "gustaf_nilsson": { pac: 72, sho: 80, pas: 68, dri: 70, def: 40, phy: 90 }
};

// 3.7 Simulated Match Events Chronology Database (Matches actual database results)
const SIMULATION_EVENTS = {
  "match_norway": [
    { minute: 1, type: "kickoff", text: "Kick-off in Oslo! A roaring Scandinavian atmosphere at Ullevaal Stadion. Graham Potter makes his tactical debut with a 3-4-2-1 formation." },
    { minute: 12, type: "goal_opp", text: "GOAL for Norway! Erling Haaland capitalizes on a quick turn, escaping central coverage to blast a powerful half-volley into the top corner. 1-0 Norway." },
    { minute: 28, type: "foul", text: "Isak Hien picks up a yellow card for a robust challenge on Haaland in midfield." },
    { minute: 45, type: "halftime", text: "Half Time in Oslo: Norway leads 1-0. Sweden has dominated possession (58%) but Haaland's early strike is the difference." },
    { minute: 54, type: "goal_swe", text: "GOAL for Sweden! Emil Holm swings in a dangerous cross. Viktor Gyökeres rises above the defenders to plant a towering header past the keeper! 1-1!" },
    { minute: 65, type: "sub", text: "Potter introduces Lucas Bergvall off the bench, looking to unlock the Norwegian defensive lines." },
    { minute: 73, type: "save", text: "Heroic save! Viktor Johansson makes a fingertip save to deny Haaland's low drive. Incredible reflexes!" },
    { minute: 82, type: "goal_swe", text: "GOAL for Sweden! Unbelievable! Lucas Bergvall picks up the ball in midfield, beats two players, and fires a sensational 25-yard dipping strike into the top corner! 2-1 Sweden!" },
    { minute: 90, type: "fulltime", text: "Full Time! Graham Potter starts his Swedish national team era with a dramatic 2-1 comeback victory in Oslo! Bergvall's heroics seal it." }
  ],
  "match_greece": [
    { minute: 1, type: "kickoff", text: "Kick-off at Strawberry Arena! Stockholm is buzzing as Sweden hosts Greece in their second warm-up friendly." },
    { minute: 22, type: "save", text: "Viktor Johansson makes a comfortable save from a long-range Greek free kick." },
    { minute: 35, type: "dribble", text: "Lucas Bergvall dances past two Greek defenders on the edge of the box, but his shot deflects wide." },
    { minute: 45, type: "halftime", text: "Half Time at Strawberry Arena: 0-0. Greece's disciplined defensive block is frustrating Sweden's attack." },
    { minute: 55, type: "sub", text: "Potter makes three changes, bringing fresh energy into midfield and wide areas." },
    { minute: 67, type: "goal_swe", text: "GOAL for Sweden! Alexander Isak whips in a cross from the left, and Viktor Gyökeres meets it with a powerful volley! 1-0 Sweden!" },
    { minute: 80, type: "save", text: "Greece push forward looking for an equalizer, but Lindelöf makes a crucial interception." },
    { minute: 90, type: "fulltime", text: "Full Time! Sweden wins 1-0 at Strawberry Arena. A professional performance ahead of the World Cup." }
  ],
  "match_tunisia": [
    { minute: 1, type: "kickoff", text: "Kick-off in Monterrey! The sun sets in Mexico as Sweden begins their World Cup Group F campaign in front of a packed stadium." },
    { minute: 10, type: "save", text: "Isak Hien makes a massive sliding block in the penalty box to deny Tunisia's counter-attack. Composed defending." },
    { minute: 23, type: "goal_swe", text: "GOAL for Sweden! Emil Holm overlaps brilliantly down the right wing, cuts back a low cross to Alexander Isak, who curls a spectacular first-time shot into the top corner! 1-0 Sweden!" },
    { minute: 35, type: "dribble", text: "Lucas Bergvall drives through the midfield with elegant body feints, creating a 3v2 transition. His final pass is blocked." },
    { minute: 45, type: "halftime", text: "Half Time: Sweden leads 1-0. Complete dominance in possession (65%), suffocating Tunisia's low-block." },
    { minute: 58, type: "foul", text: "Yasin Ayari wins a tactical foul in midfield, breaking up Tunisia's transition attempts." },
    { minute: 68, type: "goal_swe", text: "GOAL for Sweden! Tunisia commits men forward and loses the ball. Yasin Ayari engineers a clinical counter, feeding Viktor Gyökeres, who holds off the defender and blasts a low finish past the keeper! 2-0!" },
    { minute: 82, type: "save", text: "Viktor Johansson remains alert, pulling off a comfortable catch from a long-range Tunisian freekick." },
    { minute: 90, type: "fulltime", text: "Full Time! A masterclass in tactical discipline as Sweden cruises to a 2-0 victory over Tunisia. The Potter system works flawlessly!" }
  ],
  "match_netherlands": [
    { minute: 1, type: "kickoff", text: "Kick-off in Houston! A massive blockbuster matchup between Sweden and the Netherlands. The winner likely tops Group F." },
    { minute: 15, type: "save", text: "Heroic! Viktor Johansson makes a double save to deny Gakpo and Depay. Sensational goalkeeping!" },
    { minute: 34, type: "goal_opp", text: "GOAL for Netherlands! Cody Gakpo beats his marker on the wing, cuts inside, and curls a low shot into the bottom corner. 1-0 Netherlands." },
    { minute: 41, type: "goal_swe", text: "GOAL for Sweden! Relentless press! Isak wins the ball in the Dutch third, spins his defender, and crosses to Viktor Gyökeres, who taps it home! 1-1!" },
    { minute: 45, type: "halftime", text: "Half Time in Houston: 1-1. A high-tempo, physical heavyweight battle. Both teams look lethal on transitions." },
    { minute: 58, type: "foul", text: "Victor Lindelöf makes a tactical foul on Depay, receiving a yellow card but stopping a dangerous break." },
    { minute: 71, type: "goal_opp", text: "GOAL for Netherlands! Memphis Depay scores from the penalty spot after Carl Starfelt is ruled to have handled the ball. 2-1 Netherlands." },
    { minute: 80, type: "sub", text: "Potter switches to a hyper-offensive format, urging wingbacks Holm and Gudmundsson to join the forward line." },
    { minute: 88, type: "goal_swe", text: "GOAL for Sweden! Oh my word, Gyökeres has done it again! A relentless physical press from Sweden forces a mistake. Gyökeres blasts a low shot past Verbruggen! 2-2!" },
    { minute: 90, type: "fulltime", text: "Full Time! An epic 2-2 blockbuster draw in Houston. Sweden showcases incredible resilience to grab a late equalizer through Gyökeres." }
  ],
  "match_japan": [
    { minute: 1, type: "kickoff", text: "Kick-off in Dallas! The final group stage match. Sweden needs a win or draw to secure top spot in Group F." },
    { minute: 15, type: "save", text: "Emil Holm makes a spectacular recovery sprint, sliding to block Kaoru Mitoma's crossing attempt." },
    { minute: 32, type: "dribble", text: "Lucas Bergvall showcase high class in tight spaces, evading Japan's double-pivot to feed Alexander Isak." },
    { minute: 45, type: "halftime", text: "Half Time in Dallas: 0-0. Japan's high-stamina pressing is restricting space, but Sweden looks dangerous between the lines." },
    { minute: 49, type: "goal_opp", text: "GOAL for Japan! Takefusa Kubo opens the scoring, curling a fine strike from the edge of the box after a rapid combination play. 1-0 Japan." },
    { minute: 60, type: "sub", text: "Potter introduces Anthony Elanga to provide blistering pace on the counter-attacks." },
    { minute: 62, type: "goal_swe", text: "GOAL for Sweden! Immediate impact! Elanga runs onto a brilliant long pass from Victor Lindelöf, outpaces the defense, and slots it home! 1-1!" },
    { minute: 79, type: "goal_swe", text: "GOAL for Sweden! Breathtaking passing sequence! Bergvall feeds Isak, who plays a quick one-two with Gyökeres and curls a beautiful finish into the corner! 2-1 Sweden!" },
    { minute: 90, type: "fulltime", text: "Full Time! Sweden wins Group F! An intense 2-1 battle in Dallas concludes with Sweden securing top spot. The squad is officially on fire!" }
  ]
};

function fetchGuardianReport(matchId, opponentName, matchDate) {
  const container = document.getElementById("guardian-press-container");
  if (!container) return;
  
  const fromDate = matchDate;
  // Set window as +48 hours
  const toDate = new Date(new Date(matchDate).getTime() + 48 * 60 * 60 * 1000).toISOString().split('T')[0];
  
  const url = `https://content.guardianapis.com/search?q=sweden%20AND%20(football%20OR%20soccer%20OR%20${opponentName})&from-date=${fromDate}&to-date=${toDate}&api-key=test`;
  
  fetch(url)
    .then(res => res.json())
    .then(data => {
      const results = data.response && data.response.results ? data.response.results : [];
      if (results.length > 0) {
        const art = results[0];
        container.innerHTML = `
          <div class="press-card">
            <div style="font-size: 1.5rem; color: #005689; display: flex; align-items: center;"><i class="far fa-newspaper"></i></div>
            <div style="flex-grow: 1;">
              <span style="font-size: 0.6rem; font-weight: 800; color: #60A5FA; text-transform: uppercase; letter-spacing: 0.05em; display: block; margin-bottom: 2px;">The Guardian Coverage</span>
              <a href="${art.webUrl}" target="_blank" style="font-size: 0.85rem; font-weight: 700; color: var(--text-white); text-decoration: none; border-bottom: 1px dashed rgba(255,255,255,0.2); transition: var(--transition-smooth);" onmouseover="this.style.color='var(--sweden-yellow)'" onmouseout="this.style.color='var(--text-white)'">${art.webTitle}</a>
              <span style="font-size: 0.65rem; color: var(--text-secondary); display: block; margin-top: 3px;">Published: ${new Date(art.webPublicationDate).toLocaleDateString()}</span>
            </div>
          </div>
        `;
      } else {
        container.innerHTML = `
          <div class="press-card" style="opacity: 0.7;">
            <div style="font-size: 1.2rem; color: var(--text-secondary); display: flex; align-items: center;"><i class="fas fa-info-circle"></i></div>
            <div style="flex-grow: 1;">
              <span style="font-size: 0.6rem; font-weight: 800; color: var(--text-secondary); text-transform: uppercase; letter-spacing: 0.05em; display: block; margin-bottom: 2px;">The Guardian Coverage</span>
              <p style="font-size: 0.75rem; color: var(--text-secondary);">No match report in search window. <a href="https://www.theguardian.com/football" target="_blank" style="color: var(--sweden-yellow); text-decoration: none; font-weight: 700;">Browse Football Feed ➔</a></p>
            </div>
          </div>
        `;
      }
    })
    .catch(err => {
      console.warn("Guardian API load failed:", err);
      container.innerHTML = `
        <div class="press-card" style="opacity: 0.7;">
          <div style="font-size: 1.2rem; color: var(--text-secondary); display: flex; align-items: center;"><i class="fas fa-exclamation-triangle"></i></div>
          <div style="flex-grow: 1;">
            <span style="font-size: 0.6rem; font-weight: 800; color: var(--text-secondary); text-transform: uppercase; letter-spacing: 0.05em; display: block; margin-bottom: 2px;">The Guardian Coverage</span>
            <p style="font-size: 0.75rem; color: var(--text-secondary);">Media connection offline. <a href="https://www.theguardian.com/football" target="_blank" style="color: var(--sweden-yellow); text-decoration: none; font-weight: 700;">Browse Guardian ➔</a></p>
          </div>
        </div>
      `;
    });
}

function fetchESPNNews(opponentName) {
  const container = document.getElementById("espn-press-container");
  if (!container) return;
  
  const rssUrl = "https://www.espn.com/espn/rss/soccer/news";
  const proxyUrl = `https://api.rss2json.com/v1/api.json?rss_url=${encodeURIComponent(rssUrl)}`;
  
  fetch(proxyUrl)
    .then(res => res.json())
    .then(data => {
      const items = data.items ? data.items : [];
      // Filter for keywords
      const filtered = items.filter(item => {
        const title = item.title.toLowerCase();
        const desc = item.description ? item.description.toLowerCase() : "";
        return title.includes("sweden") || title.includes("potter") || title.includes(opponentName.toLowerCase()) ||
               desc.includes("sweden") || desc.includes("potter") || desc.includes(opponentName.toLowerCase());
      });
      
      const displayItems = filtered.length > 0 ? filtered.slice(0, 2) : items.slice(0, 2);
      
      if (displayItems.length > 0) {
        container.innerHTML = displayItems.map(item => `
          <div class="press-card" style="margin-top: 0.8rem;">
            <div style="font-size: 1.3rem; color: #CC0000; display: flex; align-items: center;"><i class="fas fa-rss"></i></div>
            <div style="flex-grow: 1;">
              <span style="font-size: 0.6rem; font-weight: 800; color: #FCA5A5; text-transform: uppercase; letter-spacing: 0.05em; display: block; margin-bottom: 2px;">ESPN Soccer Wire</span>
              <a href="${item.link}" target="_blank" style="font-size: 0.82rem; font-weight: 700; color: var(--text-white); text-decoration: none; border-bottom: 1px dashed rgba(255,255,255,0.2); transition: var(--transition-smooth);" onmouseover="this.style.color='var(--sweden-yellow)'" onmouseout="this.style.color='var(--text-white)'">${item.title}</a>
              <p style="font-size: 0.7rem; color: var(--text-secondary); margin-top: 3px; line-height: 1.35;">${item.description ? item.description.replace(/<[^>]*>/g, '').substring(0, 100) + '...' : ''}</p>
            </div>
          </div>
        `).join('');
      } else {
        container.innerHTML = `
          <div class="press-card" style="opacity: 0.7;">
            <div style="font-size: 1.2rem; color: var(--text-secondary); display: flex; align-items: center;"><i class="fas fa-info-circle"></i></div>
            <div style="flex-grow: 1;">
              <span style="font-size: 0.6rem; font-weight: 800; color: var(--text-secondary); text-transform: uppercase; letter-spacing: 0.05em; display: block; margin-bottom: 2px;">ESPN Soccer Wire</span>
              <p style="font-size: 0.75rem; color: var(--text-secondary);">No sweden news active. <a href="https://www.espn.com/soccer" target="_blank" style="color: var(--sweden-yellow); text-decoration: none; font-weight: 700;">Browse Soccer Feed ➔</a></p>
            </div>
          </div>
        `;
      }
    })
    .catch(err => {
      console.warn("ESPN RSS proxy load failed:", err);
      container.innerHTML = `
        <div class="press-card" style="opacity: 0.7;">
          <div style="font-size: 1.2rem; color: var(--text-secondary); display: flex; align-items: center;"><i class="fas fa-exclamation-triangle"></i></div>
          <div style="flex-grow: 1;">
            <span style="font-size: 0.6rem; font-weight: 800; color: var(--text-secondary); text-transform: uppercase; letter-spacing: 0.05em; display: block; margin-bottom: 2px;">ESPN Soccer Wire</span>
            <p style="font-size: 0.75rem; color: var(--text-secondary);">Media connection offline. <a href="https://www.espn.com/soccer" target="_blank" style="color: var(--sweden-yellow); text-decoration: none; font-weight: 700;">Browse ESPN ➔</a></p>
          </div>
        </div>
      `;
    });
}

function renderMatchCenter() {
  const selector = document.getElementById("match-center-selector");
  const forceUnlockCheckbox = document.getElementById("force-unlock-report");
  const contentArea = document.getElementById("match-center-content");
  
  if (!selector || !contentArea) return;
  
  const matchId = selector.value;
  const match = MATCH_SCHEDULE.find(m => m.id === matchId);
  const reportData = MATCH_REPORTS_DATABASE[matchId];
  
  if (!match || !reportData) return;
  
  const forceUnlock = forceUnlockCheckbox ? forceUnlockCheckbox.checked : false;
  const isCompleted = forceUnlock;
  
  if (isCompleted) {
    contentArea.innerHTML = `
      <div style="display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 0.8rem; flex-wrap: wrap; gap: 0.5rem;">
        <div class="match-report-badge completed">Final Result</div>
        <div class="match-report-meta" style="margin-bottom: 0;">
          <span><i class="far fa-calendar-alt"></i> ${match.date}</span>
          <span style="margin: 0 5px; color: var(--text-secondary);">|</span>
          <span><i class="fas fa-map-marker-alt"></i> ${match.venue}</span>
        </div>
      </div>
      
      <div class="match-report-title" style="margin-bottom: 1rem; justify-content: center; background: rgba(255,255,255,0.01); border: 1px solid rgba(255,255,255,0.03); padding: 0.8rem; border-radius: var(--radius-md);">
        <span>Sweden</span>
        <span class="flag-vs">🇸🇪</span>
        <span style="color: var(--sweden-yellow); font-size: 1.7rem; margin: 0 0.8rem; font-family: monospace; font-weight: 800; text-shadow: 0 0 10px rgba(254,204,0,0.3);">${reportData.score}</span>
        <span>${match.opponentFlag} ${match.opponent}</span>
      </div>

      <!-- Tab Buttons Row -->
      <div class="news-tabs-container" style="margin-bottom: 1.2rem; width: 100%; display: flex; padding: 2px;">
        <button class="news-tab-btn active" id="match-tab-report" style="flex-grow: 1; justify-content: center; font-size: 0.78rem; padding: 0.4rem 0.5rem;">
          <i class="far fa-newspaper"></i> Report &amp; Press
        </button>
        <button class="news-tab-btn" id="match-tab-ratings" style="flex-grow: 1; justify-content: center; font-size: 0.78rem; padding: 0.4rem 0.5rem;">
          <i class="fas fa-star"></i> Player Ratings
        </button>
      </div>
      
      <!-- Tab 1 Content Area: Report & Press Feed -->
      <div id="match-center-tab-report-content">
        <div class="match-report-scorers">
          <strong>Goals:</strong> ${reportData.scorers}
        </div>
        
        <div class="match-report-text" style="border-bottom: 1px solid rgba(255,255,255,0.06); padding-bottom: 1.2rem; margin-bottom: 1.2rem;">
          ${reportData.report}
        </div>

        <!-- Media outlets feeds -->
        <h4 style="font-size: 0.8rem; font-weight: 800; color: var(--text-secondary); text-transform: uppercase; letter-spacing: 0.05em; margin-bottom: 0.4rem;"><i class="fas fa-podcast"></i> Live Media Press Room</h4>
        <div id="guardian-press-container">
          <p style="font-size: 0.75rem; color: var(--text-secondary); padding: 0.5rem;"><i class="fas fa-spinner fa-spin"></i> Contacting Guardian API...</p>
        </div>
        <div id="espn-press-container">
          <p style="font-size: 0.75rem; color: var(--text-secondary); padding: 0.5rem;"><i class="fas fa-spinner fa-spin"></i> Connecting to ESPN Soccer Wire...</p>
        </div>
      </div>

      <!-- Tab 2 Content Area: Player Ratings Grid -->
      <div id="match-center-tab-ratings-content" style="display: none;">
        <div class="ratings-list-container active" id="ratings-list-container" style="max-height: 380px;">
          <!-- Injected dynamically -->
        </div>
      </div>
    `;
    
    // Inject ratings into Tab 2
    const ratingsContainer = document.getElementById("ratings-list-container");
    if (ratingsContainer) {
      reportData.ratings.forEach(p => {
        const ratingRow = document.createElement("div");
        ratingRow.className = "rating-player-row";
        
        const isExcellent = p.rating >= 8.0;
        const ratingClass = isExcellent ? "excellent" : "good";
        
        ratingRow.innerHTML = `
          <div class="rating-player-info">
            <div class="rating-player-name">
              ${p.name} <span style="font-size: 0.7rem; color: var(--text-secondary); font-weight: 500;">(${p.role})</span>
              ${p.isMotm ? '<span class="rating-motm-badge" style="margin-left: 5px;">MOTM</span>' : ''}
            </div>
            <div class="rating-player-comment">${p.comment}</div>
          </div>
          <div class="rating-score-pill ${ratingClass}">
            ${p.rating.toFixed(1)}
          </div>
        `;
        ratingsContainer.appendChild(ratingRow);
      });
    }

    // Trigger external live API fetches
    fetchGuardianReport(matchId, match.opponent, match.date);
    fetchESPNNews(match.opponent);

    // Bind Tab Event Listeners
    const tabReportBtn = document.getElementById("match-tab-report");
    const tabRatingsBtn = document.getElementById("match-tab-ratings");
    const reportContent = document.getElementById("match-center-tab-report-content");
    const ratingsContent = document.getElementById("match-center-tab-ratings-content");

    if (tabReportBtn && tabRatingsBtn && reportContent && ratingsContent) {
      tabReportBtn.addEventListener("click", () => {
        tabRatingsBtn.classList.remove("active");
        tabReportBtn.classList.add("active");
        ratingsContent.style.display = "none";
        reportContent.style.display = "block";
      });

      tabRatingsBtn.addEventListener("click", () => {
        tabReportBtn.classList.remove("active");
        tabRatingsBtn.classList.add("active");
        reportContent.style.display = "none";
        ratingsContent.style.display = "block";
      });
    }
    
  } else {
    contentArea.innerHTML = `
      <div class="match-report-badge upcoming">Upcoming Fixture</div>
      <div class="match-report-title">
        <span>Sweden</span>
        <span class="flag-vs">🇸🇪</span>
        <span style="color: var(--text-secondary); font-size: 0.9rem; margin: 0 0.5rem;">vs</span>
        <span>${match.opponentFlag} ${match.opponent}</span>
      </div>
      <div class="match-report-meta">
        <span><i class="far fa-calendar-alt"></i> ${match.date} at ${match.time}</span>
        <span style="margin: 0 5px; color: var(--text-secondary);">|</span>
        <span><i class="fas fa-map-marker-alt"></i> ${match.venue}</span>
      </div>
      
      <div class="match-report-scorers" style="border-left-color: var(--sweden-blue); background: rgba(0, 106, 167, 0.05); color: var(--text-primary);">
        <strong>Tactical Preview:</strong> ${reportData.preview.tactical}
      </div>
      
      <div class="match-report-text" style="border-bottom: none; margin-bottom: 0; padding-bottom: 0;">
        <strong>Key Scout Stat:</strong> ${reportData.preview.keyStat}
      </div>
    `;
  }
}

// 4. Locker Room Chat Messages Database (Pre-Camp Banter)
const CHAT_MESSAGES = [
  { sender: "Victor Lindelöf", avatar: "🇸🇪", text: "Hey boys! Time to get ready for Wednesday! Packing all done?", time: "10:15", isCaptain: true },
  { sender: "Emil Holm", avatar: "🇸🇪", text: "Yep! Bags are packed. Bringing the best fika up to Stockholm on Wednesday! 🇸🇪☕", time: "10:18" },
  { sender: "Viktor Gyökeres", avatar: "🇸🇪", text: "Save some fika for us forwards, Emil! Finished my last heavy gym session at Arsenal today. Feeling crazy ready.", time: "10:22" },
  { sender: "Alexander Isak", avatar: "🇸🇪", text: "Same here in Liverpool. Body feels 100%. Lucas, make sure you don't forget your passport this time! 😂", time: "10:25" },
  { sender: "Lucas Bergvall", avatar: "🇸🇪", text: "Oh come on, that was one time, Alex! 🙄 Checked my passport three times now. Can't wait to get started with Potter's system at Bosön.", time: "10:28" },
  { sender: "Victor Lindelöf", avatar: "🇸🇪", text: "Great focus. Remember, gathering at the hotel at 10:00 on Wednesday the 27th. We do this together, all the way! 🇸🇪💪", time: "10:31", isCaptain: true }
];

// 5. Locker Room Music Playlist Data (With real-world Swedish songs & Spotify Links)
const PLAYLIST = [
  { title: "När vi gräver guld i USA", artist: "GES", duration: "4:02", category: "Classic", audioUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3", spotifyUrl: "https://open.spotify.com/track/3iAJRvvn8pywXZtvBNNP71" },
  { title: "Mera Mål", artist: "Markoolio", duration: "3:45", category: "Hype", audioUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3", spotifyUrl: "https://open.spotify.com/track/7lQW7v5w8Yg7zJgU7mS1aU" },
  { title: "In med bollen i mål", artist: "Markoolio", duration: "3:20", category: "Hype", audioUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3", spotifyUrl: "https://open.spotify.com/search/Markoolio%20In%20med%20bollen%20i%20mål" },
  { title: "Sverige", artist: "Kent", duration: "4:01", category: "Atmosphere", audioUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-4.mp3", spotifyUrl: "https://open.spotify.com/search/Kent%20Sverige" },
  { title: "Explodera", artist: "Staffan Hellstrand", duration: "3:30", category: "Classic", audioUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-5.mp3", spotifyUrl: "https://open.spotify.com/search/Staffan%20Hellstrand%20Explodera" }
];

let currentTrackIndex = 0;
let isPlaying = false;
let audioPlayer = null; 

// 6. Time Schedule & State Management
let ACTIVE_NEWS_TAB = "sweden";

function getCurrentTimeMinutes() {
  const now = new Date();
  return now.getHours() * 60 + now.getMinutes();
}

function getActiveUpdatesForDate(dateStr) {
  // Parse target date (avoiding timezone offset shift)
  const [targetYear, targetMonth, targetDay] = dateStr.split("-").map(Number);
  const targetDate = new Date(targetYear, targetMonth - 1, targetDay);

  const now = new Date();
  const currentDate = new Date(now.getFullYear(), now.getMonth(), now.getDate());

  if (targetDate < currentDate) {
    return [1, 2, 3, 4, 5]; // Full historical access
  }

  if (targetDate > currentDate) {
    return []; // Future date
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
    { label: "Breakfast Report", minutes: timeToMinutes("07:00"), timeStr: "07:00" },
    { label: "Press Conference", minutes: timeToMinutes("11:00"), timeStr: "11:00" },
    { label: "Training Session", minutes: timeToMinutes("14:30"), timeStr: "14:30" },
    { label: "Tactics & Analysis", minutes: timeToMinutes("18:00"), timeStr: "18:00" },
    { label: "Evening Talk", minutes: timeToMinutes("21:30"), timeStr: "21:30" }
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
      label: "Breakfast Report (Tomorrow)",
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

// 3.8 Graham Potter's 3 Tactical Formations coordinate mappings
const FORMATIONS = {
  "3421": {
    name: "Graham Potter's signature 3-4-2-1",
    briefing: "<strong>Potter's Briefing:</strong> Relies on overlapping wing-backs Emil Holm and Gabriel Gudmundsson to stretch the defense. Lucas Bergvall and Alexander Isak sit in creative half-spaces behind Viktor Gyökeres, creating dynamic central combinations.",
    lineup: [
      { id: "viktor_johansson", top: "85%", left: "50%", role: "GK" },
      { id: "victor_lindelof", top: "67%", left: "25%", role: "LCB" },
      { id: "isak_hien", top: "67%", left: "50%", role: "CB" },
      { id: "carl_starfelt", top: "67%", left: "75%", role: "RCB" },
      { id: "gabriel_gudmundsson", top: "45%", left: "12%", role: "LWB" },
      { id: "mattias_svanberg", top: "50%", left: "35%", role: "LDM" },
      { id: "yasin_ayari", top: "50%", left: "65%", role: "RDM" },
      { id: "emil_holm", top: "45%", left: "88%", role: "RWB" },
      { id: "lucas_bergvall", top: "28%", left: "33%", role: "LAM" },
      { id: "alexander_isak", top: "28%", left: "67%", role: "RAM" },
      { id: "viktor_gyokeres", top: "12%", left: "50%", role: "ST" }
    ],
    pressing: [
      { top: "28%", left: "33%" },
      { top: "28%", left: "67%" },
      { top: "12%", left: "50%" }
    ],
    runs: [
      { fromLeft: "88%", fromTop: "45%", toLeft: "88%", toTop: "20%" },
      { fromLeft: "12%", fromTop: "45%", toLeft: "12%", toTop: "20%" }
    ]
  },
  "433": {
    name: "Potter's Attacking 4-3-3",
    briefing: "<strong>Potter's Briefing:</strong> Strong midfield control and direct 1v1 threat on the wings. Fullbacks Holm and Svensson provide defensive coverage, while Elanga and Isak exploit half-spaces to feed clinical marksman Gyökeres.",
    lineup: [
      { id: "viktor_johansson", top: "85%", left: "50%", role: "GK" },
      { id: "daniel_svensson", top: "67%", left: "15%", role: "LB" },
      { id: "victor_lindelof", top: "68%", left: "37%", role: "LCB" },
      { id: "isak_hien", top: "68%", left: "63%", role: "RCB" },
      { id: "emil_holm", top: "67%", left: "85%", role: "RB" },
      { id: "jesper_karlstrom", top: "50%", left: "50%", role: "DM" },
      { id: "mattias_svanberg", top: "40%", left: "30%", role: "LCM" },
      { id: "lucas_bergvall", top: "40%", left: "70%", role: "RCM" },
      { id: "anthony_elanga", top: "20%", left: "20%", role: "LW" },
      { id: "alexander_isak", top: "20%", left: "80%", role: "RW" },
      { id: "viktor_gyokeres", top: "12%", left: "50%", role: "ST" }
    ],
    pressing: [
      { top: "20%", left: "20%" },
      { top: "20%", left: "80%" },
      { top: "12%", left: "50%" },
      { top: "40%", left: "70%" }
    ],
    runs: [
      { fromLeft: "20%", fromTop: "20%", toLeft: "42%", toTop: "10%" },
      { fromLeft: "80%", fromTop: "20%", toLeft: "58%", toTop: "10%" }
    ]
  },
  "451": {
    name: "Potter's Defensive 4-5-1",
    briefing: "<strong>Potter's Briefing:</strong> Extremely compact defensively, restricting space between the lines. Ideal for protecting leads against heavyweights like the Netherlands. Midfield line of five slides horizontally to block passing lanes.",
    lineup: [
      { id: "viktor_johansson", top: "85%", left: "50%", role: "GK" },
      { id: "daniel_svensson", top: "67%", left: "15%", role: "LB" },
      { id: "victor_lindelof", top: "68%", left: "37%", role: "LCB" },
      { id: "isak_hien", top: "68%", left: "63%", role: "RCB" },
      { id: "emil_holm", top: "67%", left: "85%", role: "RB" },
      { id: "ken_sema", top: "45%", left: "15%", role: "LM" },
      { id: "mattias_svanberg", top: "48%", left: "35%", role: "LCM" },
      { id: "jesper_karlstrom", top: "50%", left: "50%", role: "DM" },
      { id: "yasin_ayari", top: "48%", left: "65%", role: "RCM" },
      { id: "taha_ali", top: "45%", left: "85%", role: "RM" },
      { id: "viktor_gyokeres", top: "15%", left: "50%", role: "ST" }
    ],
    pressing: [
      { top: "50%", left: "50%" },
      { top: "48%", left: "35%" },
      { top: "48%", left: "65%" }
    ],
    runs: [
      { fromLeft: "85%", fromTop: "45%", toLeft: "70%", toTop: "25%" },
      { fromLeft: "15%", fromTop: "45%", toLeft: "30%", toTop: "25%" }
    ]
  }
};

let ACTIVE_FORMATION = "3421";

// Live Match Simulator Engine Variables
let simInterval = null;
let simTime = 0;
let simSpeed = 150; // default 150ms per minute
let currentSimMatchId = "";
let simPossession = 50;
let simShotsSwe = 0;
let simShotsOpp = 0;
let simCornersSwe = 0;
let simCornersOpp = 0;
let simFoulsSwe = 0;
let simFoulsOpp = 0;
let simScoreSwe = 0;
let simScoreOpp = 0;

function initApp() {
  // Merge dynamic web-researched news if available from data.js
  if (typeof DYNAMIC_HUB_DATA !== "undefined") {
    if (DYNAMIC_HUB_DATA.timeline) {
      for (const date in DYNAMIC_HUB_DATA.timeline) {
        if (!TIMELINE_DATABASE[date]) {
          TIMELINE_DATABASE[date] = {};
        }
        for (const slot in DYNAMIC_HUB_DATA.timeline[date]) {
          TIMELINE_DATABASE[date][slot] = DYNAMIC_HUB_DATA.timeline[date][slot];
        }
      }
    }
    if (DYNAMIC_HUB_DATA.matchReports) {
      for (const matchId in DYNAMIC_HUB_DATA.matchReports) {
        MATCH_REPORTS_DATABASE[matchId] = DYNAMIC_HUB_DATA.matchReports[matchId];
      }
    }
    // Inject last updated timestamps to news feed and match center headers
    if (DYNAMIC_HUB_DATA.lastUpdated) {
      const newsStamp = document.getElementById("news-last-updated");
      const matchStamp = document.getElementById("match-last-updated");
      if (newsStamp) newsStamp.textContent = `Last update: ${DYNAMIC_HUB_DATA.lastUpdated}`;
      if (matchStamp) matchStamp.textContent = `Last update: ${DYNAMIC_HUB_DATA.lastUpdated}`;
    }
  }

  // Populate breaking news ticker dynamically
  const tickerSlider = document.getElementById("ticker-slider");
  if (tickerSlider) {
    let tickerItems = [];
    if (typeof DYNAMIC_HUB_DATA !== "undefined" && DYNAMIC_HUB_DATA.ticker && DYNAMIC_HUB_DATA.ticker.length > 0) {
      tickerItems = DYNAMIC_HUB_DATA.ticker;
    } else {
      tickerItems = [
        "⚽ Graham Potter has finalized the 26-man roster for the 2026 FIFA World Cup.",
        "✈️ Sweden will depart for their main training facility in Dallas, Texas tomorrow morning.",
        "💪 Viktor Gyökeres arrives in stellar goal-scoring form from his domestic campaign.",
        "🚑 Medical staff confirms that defender Carl Starfelt has returned to full-contact training.",
        "⭐ Lucas Bergvall designated by FIFA as one of the ultimate teenage prospects of the tournament."
      ];
    }
    tickerSlider.innerHTML = tickerItems.map(item => `<span>${item}</span>`).join("");
  }

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
  renderMatchCenter();
  initScoutRoom();
  setupEventListeners();
  initPremiumUpgrades();

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
  
  // Get today's local date in YYYY-MM-DD format
  const now = new Date();
  const yyyy = now.getFullYear();
  const mm = String(now.getMonth() + 1).padStart(2, '0');
  const dd = String(now.getDate()).padStart(2, '0');
  const todayStr = `${yyyy}-${mm}-${dd}`;

  // Dynamically extract and sort all available dates in the timeline database up to today
  const dates = Object.keys(TIMELINE_DATABASE)
    .filter(dateStr => dateStr <= todayStr)
    .sort()
    .reverse()
    .slice(0, 3);

  // Generate yesterday's local date dynamically
  const yesterday = new Date();
  yesterday.setDate(now.getDate() - 1);
  const yStr = `${yesterday.getFullYear()}-${String(yesterday.getMonth() + 1).padStart(2, '0')}-${String(yesterday.getDate()).padStart(2, '0')}`;

  dates.forEach(dateStr => {
    const activeIds = getActiveUpdatesForDate(dateStr);
    if (activeIds.length === 0) return;

    const dateSection = document.createElement("div");
    dateSection.className = "timeline-date-section animated fade-in";
    
    let displayDateLabel = dateStr;
    if (dateStr === todayStr) displayDateLabel = "Today (" + dateStr + ")";
    else if (dateStr === yStr) displayDateLabel = "Yesterday (" + dateStr + ")";
    
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
        if (article.type === "Blog") typeClass = "type-blog";
        else if (article.type === "Analysis") typeClass = "type-analysis";
        else if (article.type === "Column") typeClass = "type-column";
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
        <p><i class="fas fa-info-circle"></i> No articles available for this filter at the moment.</p>
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
  });
}

// Tick the countdown widget
function tickCountdown() {
  const countdown = getNextUpdateCountdown();
  const labelEl = document.getElementById("next-update-label");
  const timeEl = document.getElementById("next-update-time");
  
  if (labelEl && timeEl) {
    labelEl.textContent = `Next: ${countdown.label} (${countdown.timeStr})`;
    
    const hStr = String(countdown.hours).padStart(2, "0");
    const mStr = String(countdown.minutes).padStart(2, "0");
    const sStr = String(countdown.seconds).padStart(2, "0");
    
    timeEl.innerHTML = `
      <span class="time-box">${hStr}h</span>
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
          <span><i class="fas fa-birthday-cake"></i> ${player.age} yrs</span>
        </div>
        <div class="player-card-caps">
          <span>Caps: <strong>${player.caps}</strong></span>
          <span>Goals: <strong>${player.goals}</strong></span>
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

// Render tactical pitch positions with smooth coordinate animations
function renderTacticalPitch() {
  const pitch = document.getElementById("tactical-pitch-inner");
  if (!pitch) return;

  const formation = FORMATIONS[ACTIVE_FORMATION];
  
  // Update pitch title
  const pitchTitle = document.getElementById("tactical-pitch-title");
  if (pitchTitle) {
    pitchTitle.innerHTML = `<i class="fas fa-chess-board"></i> ${formation.name}`;
  }

  // Update briefing box
  const briefingBox = document.getElementById("whiteboard-briefing-box");
  if (briefingBox) {
    briefingBox.innerHTML = formation.briefing;
  }

  // Get current active player nodes in the DOM
  const existingNodes = pitch.querySelectorAll(".pitch-player-node");
  const existingIds = Array.from(existingNodes).map(node => node.getAttribute("data-player-id"));

  const targetLineup = formation.lineup;
  const targetIds = targetLineup.map(item => item.id);

  // Hide or remove nodes that are not in the new lineup
  existingNodes.forEach(node => {
    const id = node.getAttribute("data-player-id");
    if (!targetIds.includes(id)) {
      node.style.opacity = "0";
      node.style.pointerEvents = "none";
      setTimeout(() => {
        if (node.parentNode === pitch && !FORMATIONS[ACTIVE_FORMATION].lineup.map(x=>x.id).includes(id)) {
          node.style.display = "none";
        }
      }, 600);
    }
  });

  // Position or create nodes in the new lineup
  targetLineup.forEach(item => {
    const player = PLAYERS.find(p => p.id === item.id);
    if (!player) return;

    let node = pitch.querySelector(`.pitch-player-node[data-player-id="${item.id}"]`);
    
    if (!node) {
      // Create new node
      node = document.createElement("div");
      node.className = "pitch-player-node";
      node.style.transition = "top 0.6s cubic-bezier(0.25, 0.8, 0.25, 1), left 0.6s cubic-bezier(0.25, 0.8, 0.25, 1), opacity 0.4s ease";
      node.setAttribute("data-player-id", item.id);
      node.innerHTML = `
        <div class="jersey-node">${player.number}</div>
        <div class="node-name">${player.name.split(" ").pop()}</div>
      `;
      node.addEventListener("click", () => openPlayerModal(player.id));
      pitch.appendChild(node);
      
      // Set initial position (instant)
      node.style.top = item.top;
      node.style.left = item.left;
      node.style.opacity = "0";
      node.style.display = "flex";
      
      // Trigger fade in
      setTimeout(() => {
        node.style.opacity = "1";
      }, 50);
    } else {
      // Node exists, make sure it is visible and animate position
      node.style.display = "flex";
      node.style.pointerEvents = "auto";
      setTimeout(() => {
        node.style.top = item.top;
        node.style.left = item.left;
        node.style.opacity = "1";
      }, 20);
    }
  });

  // Render Overlays (Pressing Zones & Run Arrows)
  renderTacticalOverlays();
}

function renderTacticalOverlays() {
  const pitch = document.getElementById("tactical-pitch-inner");
  if (!pitch) return;

  // Clear existing overlays
  pitch.querySelectorAll(".pressing-zone, .tactical-run-arrow").forEach(el => el.remove());

  const showPressing = document.getElementById("whiteboard-show-pressing")?.checked;
  const showRuns = document.getElementById("whiteboard-show-runs")?.checked;
  const formation = FORMATIONS[ACTIVE_FORMATION];

  if (showPressing && formation.pressing) {
    formation.pressing.forEach(pos => {
      const zone = document.createElement("div");
      zone.className = "pressing-zone";
      zone.style.top = pos.top;
      zone.style.left = pos.left;
      pitch.appendChild(zone);
    });
  }

  if (showRuns && formation.runs) {
    const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    svg.setAttribute("class", "tactical-run-arrow");
    svg.setAttribute("viewBox", "0 0 380 480");
    
    svg.innerHTML = `
      <defs>
        <marker id="run-arrow" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
          <path d="M 0 2 L 10 5 L 0 8 z" fill="var(--sweden-yellow)" />
        </marker>
      </defs>
    `;

    formation.runs.forEach(run => {
      const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
      
      const x1 = parseFloat(run.fromLeft) * 3.8;
      const y1 = parseFloat(run.fromTop) * 4.8;
      const x2 = parseFloat(run.toLeft) * 3.8;
      const y2 = parseFloat(run.toTop) * 4.8;

      path.setAttribute("d", `M ${x1} ${y1} Q ${(x1+x2)/2 - 10} ${(y1+y2)/2 - 10} ${x2} ${y2}`);
      path.setAttribute("class", "run-path");
      path.setAttribute("marker-end", "url(#run-arrow)");
      svg.appendChild(path);
    });

    pitch.appendChild(svg);
  }
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
        <span class="match-badge">${isWarmup ? 'WARM-UP FRIENDLY' : 'FIFA WORLD CUP'}</span>
        <span class="match-date-stamp"><i class="far fa-calendar-alt"></i> ${match.date} at ${match.time}</span>
      </div>
      <div class="schedule-item-body">
        <h3 class="match-pairing">Sweden <span class="flag-vs">🇸🇪</span> vs. ${match.opponentFlag} ${match.opponent}</h3>
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
          <span class="chat-sender-name">${msg.sender} ${msg.isCaptain ? '<span class="captain-badge">Captain</span>' : ''}</span>
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

  if (!songTitle || !artist || !songCount || !playerBtn || !visualizer) return;

  const track = PLAYLIST[currentTrackIndex];
  songTitle.textContent = track.title;
  artist.textContent = `${track.artist} (${track.category})`;
  songCount.textContent = `Song ${currentTrackIndex + 1} of ${PLAYLIST.length}`;

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
    label.textContent = "Profiled Players: ";
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
    <span><strong>Club:</strong> ${player.club}</span>
    <span><strong>Age:</strong> ${player.age} yrs</span>
    <span><strong>Caps:</strong> ${player.caps} (${player.goals} goals)</span>
  `;

  bio.textContent = player.bio;

  statBox.innerHTML = "";
  for (const [key, value] of Object.entries(player.stats)) {
    let cleanKey = key;
    if (key === "saves") cleanKey = "Saves";
    else if (key === "cleanSheets") cleanKey = "Clean Sheets";
    else if (key === "passAccuracy") cleanKey = "Pass Accuracy";
    else if (key === "tackles") cleanKey = "Tackles";
    else if (key === "interceptions") cleanKey = "Interceptions";
    else if (key === "crosses") cleanKey = "Crosses";
    else if (key === "assists") cleanKey = "Assists";
    else if (key === "longBalls") cleanKey = "Long Balls";
    else if (key === "blocks") cleanKey = "Blocks";
    else if (key === "dribblesSuccess") cleanKey = "Dribbles (%)";
    else if (key === "keyPasses") cleanKey = "Key Passes";
    else if (key === "goals") cleanKey = "Goals";
    else if (key === "shots") cleanKey = "Shots";
    else if (key === "distanceCovered") cleanKey = "Distance Covered";
    else if (key === "topSpeed") cleanKey = "Top Speed";
    else if (key === "aerialDuelsWon") cleanKey = "Aerial Duels (%)";
    else if (key === "shotConversion") cleanKey = "Shot Conversion";
    else if (key === "sprints") cleanKey = "Sprints";
    else if (key === "duelsWon") cleanKey = "Duels Won";

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

// ==========================================================================
// The Scout Room (Spelarkampen) Interactive Comparison Functions
// ==========================================================================
function initScoutRoom() {
  const p1Select = document.getElementById("scout-player-1");
  const p2Select = document.getElementById("scout-player-2");
  if (!p1Select || !p2Select) return;

  const sortedPlayers = [...PLAYERS].sort((a, b) => a.name.localeCompare(b.name));
  
  p1Select.innerHTML = sortedPlayers.map(p => `<option value="${p.id}">${p.name} (${p.position})</option>`).join('');
  p2Select.innerHTML = sortedPlayers.map(p => `<option value="${p.id}">${p.name} (${p.position})</option>`).join('');

  p1Select.value = "alexander_isak";
  p2Select.value = "viktor_gyokeres";

  renderScoutComparison();
}

function renderScoutComparison() {
  const el1 = document.getElementById("scout-player-1");
  const el2 = document.getElementById("scout-player-2");
  if (!el1 || !el2) return;
  const p1Id = el1.value;
  const p2Id = el2.value;
  
  const p1 = PLAYERS.find(p => p.id === p1Id);
  const p2 = PLAYERS.find(p => p.id === p2Id);
  if (!p1 || !p2) return;

  const a1 = SQUAD_ATTRIBUTES[p1Id] || { pac: 75, sho: 70, pas: 72, dri: 73, def: 55, phy: 70 };
  const a2 = SQUAD_ATTRIBUTES[p2Id] || { pac: 75, sho: 70, pas: 72, dri: 73, def: 55, phy: 70 };

  const stats = [
    { name: "Pace", key: "pac" },
    { name: "Shooting", key: "sho" },
    { name: "Passing", key: "pas" },
    { name: "Dribbling", key: "dri" },
    { name: "Defending", key: "def" },
    { name: "Physicality", key: "phy" }
  ];

  let p1Wins = 0;
  let p2Wins = 0;
  
  stats.forEach(s => {
    if (a1[s.key] > a2[s.key]) p1Wins++;
    else if (a2[s.key] > a1[s.key]) p2Wins++;
  });

  const card1 = document.getElementById("scout-player-card-1");
  const card2 = document.getElementById("scout-player-card-2");
  
  if (p1Wins > p2Wins) {
    card1.className = "scout-player-card animate card-pop active-winner";
    card2.className = "scout-player-card animate card-pop";
  } else if (p2Wins > p1Wins) {
    card1.className = "scout-player-card animate card-pop";
    card2.className = "scout-player-card animate card-pop active-winner";
  } else {
    card1.className = "scout-player-card animate card-pop";
    card2.className = "scout-player-card animate card-pop";
  }

  card1.innerHTML = `
    <div class="scout-avatar-big">${p1.avatar}</div>
    <div style="text-align: center; margin-top: 0.5rem;">
      <h3 style="color: var(--text-white); margin-bottom: 2px;">${p1.name}</h3>
      <span class="bullet-tag type-news">${p1.position}</span>
    </div>
    <div style="font-size: 0.8rem; color: var(--text-secondary); display: flex; flex-direction: column; gap: 0.4rem; background: rgba(0,0,0,0.25); padding: 0.8rem; border-radius: var(--radius-sm); margin-top: 0.5rem;">
      <div style="display: flex; justify-content: space-between;"><span>Club:</span><strong style="color:var(--text-white);">${p1.club}</strong></div>
      <div style="display: flex; justify-content: space-between;"><span>Age:</span><strong style="color:var(--text-white);">${p1.age} yrs</strong></div>
      <div style="display: flex; justify-content: space-between;"><span>Caps/Goals:</span><strong style="color:var(--text-white);">${p1.caps} (${p1.goals} G)</strong></div>
      <div style="display: flex; justify-content: space-between;"><span>Overall Rating:</span><strong style="color:var(--sweden-yellow); font-family: monospace;">${p1Wins > p2Wins ? 'WINNER 🏆' : 'Scout Match'}</strong></div>
    </div>
  `;

  card2.innerHTML = `
    <div class="scout-avatar-big">${p2.avatar}</div>
    <div style="text-align: center; margin-top: 0.5rem;">
      <h3 style="color: var(--text-white); margin-bottom: 2px;">${p2.name}</h3>
      <span class="bullet-tag type-blog">${p2.position}</span>
    </div>
    <div style="font-size: 0.8rem; color: var(--text-secondary); display: flex; flex-direction: column; gap: 0.4rem; background: rgba(0,0,0,0.25); padding: 0.8rem; border-radius: var(--radius-sm); margin-top: 0.5rem;">
      <div style="display: flex; justify-content: space-between;"><span>Club:</span><strong style="color:var(--text-white);">${p2.club}</strong></div>
      <div style="display: flex; justify-content: space-between;"><span>Age:</span><strong style="color:var(--text-white);">${p2.age} yrs</strong></div>
      <div style="display: flex; justify-content: space-between;"><span>Caps/Goals:</span><strong style="color:var(--text-white);">${p2.caps} (${p2.goals} G)</strong></div>
      <div style="display: flex; justify-content: space-between;"><span>Overall Rating:</span><strong style="color:var(--sweden-yellow); font-family: monospace;">${p2Wins > p1Wins ? 'WINNER 🏆' : 'Scout Match'}</strong></div>
    </div>
  `;

  const barsContainer = document.getElementById("scout-comparison-bars");
  barsContainer.innerHTML = stats.map(s => {
    const v1 = a1[s.key];
    const v2 = a2[s.key];
    const p1IsWinner = v1 > v2;
    const p2IsWinner = v2 > v1;
    
    return `
      <div class="scout-stat-bar-container">
        <div class="scout-stat-label-row">
          <span class="scout-stat-value p1" style="font-weight:${p1IsWinner ? '800' : '500'};">${v1} ${p1IsWinner ? '<i class="fas fa-crown scout-winner-crown"></i>' : ''}</span>
          <span class="scout-stat-name">${s.name}</span>
          <span class="scout-stat-value p2" style="font-weight:${p2IsWinner ? '800' : '500'};">${p2IsWinner ? '<i class="fas fa-crown scout-winner-crown"></i>' : ''} ${v2}</span>
        </div>
        <div class="scout-stat-bar-bg">
          <div class="scout-stat-bar-fill-left" id="bar-fill-l-${s.key}" style="width: 0%; transform: rotate(180deg); transform-origin: right;"></div>
          <div class="scout-stat-bar-fill-right" id="bar-fill-r-${s.key}" style="width: 0%;"></div>
        </div>
      </div>
    `;
  }).join('');

  setTimeout(() => {
    stats.forEach(s => {
      const fillL = document.getElementById(`bar-fill-l-${s.key}`);
      const fillR = document.getElementById(`bar-fill-r-${s.key}`);
      if (fillL) fillL.style.width = `${a1[s.key]}%`;
      if (fillR) fillR.style.width = `${a2[s.key]}%`;
    });
  }, 50);
}

// ==========================================================================
// Live Match Day Simulator Engine Core Functions
// ==========================================================================
function openMatchSimulator() {
  const selector = document.getElementById("match-center-selector");
  if (!selector) return;
  const matchId = selector.value;
  currentSimMatchId = matchId;
  const match = MATCH_SCHEDULE.find(m => m.id === matchId);
  if (!match) return;

  const modal = document.getElementById("match-simulator-modal");
  if (!modal) return;

  simTime = 0;
  simScoreSwe = 0;
  simScoreOpp = 0;
  simPossession = 50;
  simShotsSwe = 0;
  simShotsOpp = 0;
  simCornersSwe = 0;
  simCornersOpp = 0;
  simFoulsSwe = 0;
  simFoulsOpp = 0;

  if (simInterval) clearInterval(simInterval);
  simInterval = null;

  document.getElementById("sim-score-display").textContent = "0 - 0";
  document.getElementById("sim-opp-flag").textContent = match.opponentFlag;
  document.getElementById("sim-opp-name").textContent = match.opponent;
  document.getElementById("sim-clock").textContent = "00:00";
  
  const statusPill = document.getElementById("sim-status-pill");
  statusPill.textContent = "Not Started";
  statusPill.style.color = "#10B981";
  statusPill.style.background = "rgba(16,185,129,0.1)";

  document.getElementById("sim-control-play").style.display = "inline-block";
  document.getElementById("sim-control-pause").style.display = "none";
  document.getElementById("sim-control-play").innerHTML = '<i class="fas fa-play"></i> Start Match';
  
  document.getElementById("sim-stat-poss-swe").textContent = "50";
  document.getElementById("sim-stat-poss-opp").textContent = "50";
  document.getElementById("sim-bar-poss-swe").style.width = "50%";
  document.getElementById("sim-bar-poss-opp").style.width = "50%";
  document.getElementById("sim-stat-shots").textContent = "0 - 0";
  document.getElementById("sim-stat-corners").textContent = "0 - 0";
  document.getElementById("sim-stat-fouls").textContent = "0 - 0";

  const log = document.getElementById("sim-commentary-log");
  log.innerHTML = `
    <div class="sim-comment-bubble" style="opacity: 0.8; justify-content: center; border: none; background: transparent;">
      <span class="sim-comment-text" style="font-weight: 700; color: var(--text-secondary);"><i class="fas fa-info-circle"></i> Ready to begin the match simulation. Click 'Start Match' above.</span>
    </div>
  `;

  document.getElementById("sim-modal-footer").style.display = "none";
  modal.classList.add("active");
}

function handleSimulatorTick() {
  if (simTime >= 90) {
    clearInterval(simInterval);
    simInterval = null;
    
    const statusPill = document.getElementById("sim-status-pill");
    statusPill.textContent = "Full Time";
    statusPill.style.color = "#EF4444";
    statusPill.style.background = "rgba(239,68,68,0.1)";

    document.getElementById("sim-control-play").style.display = "none";
    document.getElementById("sim-control-pause").style.display = "none";
    document.getElementById("sim-modal-footer").style.display = "block";

    const forceUnlockCheckbox = document.getElementById("force-unlock-report");
    if (forceUnlockCheckbox) {
      forceUnlockCheckbox.checked = true;
    }
    
    // Update simulated group match results
    if (currentSimMatchId === "match_tunisia" || currentSimMatchId === "match_netherlands" || currentSimMatchId === "match_japan") {
      SIMULATED_RESULTS[currentSimMatchId] = { swe: simScoreSwe, opp: simScoreOpp };
      calculateGroupStandings();
    }
    
    renderMatchCenter();
    return;
  }

  simTime++;
  
  const timeStr = String(simTime).padStart(2, "0") + ":00";
  document.getElementById("sim-clock").textContent = timeStr;

  simPossession = Math.max(30, Math.min(70, simPossession + (Math.random() > 0.5 ? 2 : -2)));
  document.getElementById("sim-stat-poss-swe").textContent = simPossession;
  document.getElementById("sim-stat-poss-opp").textContent = 100 - simPossession;
  document.getElementById("sim-bar-poss-swe").style.width = `${simPossession}%`;
  document.getElementById("sim-bar-poss-opp").style.width = `${100 - simPossession}%`;

  if (Math.random() > 0.8) {
    if (Math.random() > 0.45) simShotsSwe++; else simShotsOpp++;
    document.getElementById("sim-stat-shots").textContent = `${simShotsSwe} - ${simShotsOpp}`;
  }
  if (Math.random() > 0.85) {
    if (Math.random() > 0.48) simCornersSwe++; else simCornersOpp++;
    document.getElementById("sim-stat-corners").textContent = `${simCornersSwe} - ${simCornersOpp}`;
  }
  if (Math.random() > 0.88) {
    if (Math.random() > 0.5) simFoulsSwe++; else simFoulsOpp++;
    document.getElementById("sim-stat-fouls").textContent = `${simFoulsSwe} - ${simFoulsOpp}`;
  }

  const events = SIMULATION_EVENTS[currentSimMatchId] || [];
  const event = events.find(e => e.minute === simTime);

  if (event) {
    let bubbleClass = "";
    if (event.type === "goal_swe") {
      bubbleClass = "event-goal";
      simScoreSwe++;
      document.getElementById("sim-score-display").textContent = `${simScoreSwe} - ${simScoreOpp}`;
      
      let scorer = "Alexander Isak";
      if (event.text.toLowerCase().includes("gyökeres")) scorer = "Viktor Gyökeres";
      else if (event.text.toLowerCase().includes("elanga")) scorer = "Anthony Elanga";
      else if (event.text.toLowerCase().includes("bergvall")) scorer = "Lucas Bergvall";
      
      triggerGoalFlashAnimation(scorer, `${simScoreSwe} - ${simScoreOpp}`);
    } else if (event.type === "goal_opp") {
      bubbleClass = "event-card-red";
      simScoreOpp++;
      document.getElementById("sim-score-display").textContent = `${simScoreSwe} - ${simScoreOpp}`;
    } else if (event.type === "foul") {
      bubbleClass = "event-card-yellow";
    }

    addCommentaryLog(simTime, event.text, bubbleClass);
  } else {
    if (Math.random() > 0.88) {
      const genericCommentary = [
        "A fierce physical duel in central midfield. Both teams fighting hard for second balls.",
        "Graham Potter gestures actively from the technical area, demanding quicker ball distribution.",
        "Sweden is maintaining solid structural discipline, denying passing lanes down the channels.",
        "Relentless vocal support from the traveling Swedish supporters is echoing through the stadium.",
        "Possession recycled cleanly down the left flank as Gudmundsson looks for an opening."
      ];
      const randomText = genericCommentary[Math.floor(Math.random() * genericCommentary.length)];
      addCommentaryLog(simTime, randomText, "");
    }
  }
}

function addCommentaryLog(minute, text, bubbleClass) {
  const log = document.getElementById("sim-commentary-log");
  if (!log) return;

  const bubble = document.createElement("div");
  bubble.className = `sim-comment-bubble ${bubbleClass}`;
  bubble.innerHTML = `
    <span class="sim-comment-minute">${minute}'</span>
    <span class="sim-comment-text">${text}</span>
  `;
  
  log.appendChild(bubble);
  log.scrollTop = log.scrollHeight;
}

function triggerGoalFlashAnimation(scorer, scoreline) {
  if (simInterval) {
    clearInterval(simInterval);
    simInterval = null;
  }

  const overlay = document.getElementById("goal-flash-overlay");
  const scorerEl = document.getElementById("goal-flash-scorer");
  const scoreEl = document.getElementById("goal-flash-score");

  if (overlay && scorerEl && scoreEl) {
    scorerEl.textContent = `${scorer} scores!`;
    scoreEl.textContent = `Sverige ${scoreline}`;
    document.body.classList.add("goal-flash-active");
    
    setTimeout(() => {
      document.body.classList.remove("goal-flash-active");
      if (document.getElementById("sim-control-pause").style.display === "inline-block") {
        simInterval = setInterval(handleSimulatorTick, simSpeed);
      }
    }, 2800);
  }
}

// Setup Event Handlers
function setupEventListeners() {
  document.querySelectorAll(".modal-close, .modal-backdrop").forEach(el => {
    el.addEventListener("click", () => {
      document.querySelectorAll(".modal-overlay").forEach(m => m.classList.remove("active"));
      if (simInterval) {
        clearInterval(simInterval);
        simInterval = null;
        document.getElementById("sim-control-play").style.display = "inline-block";
        document.getElementById("sim-control-pause").style.display = "none";
      }
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



  // Match Center Events
  const matchSelector = document.getElementById("match-center-selector");
  const forceUnlockReport = document.getElementById("force-unlock-report");
  
  if (matchSelector) {
    matchSelector.addEventListener("change", renderMatchCenter);
  }
  if (forceUnlockReport) {
    forceUnlockReport.addEventListener("change", renderMatchCenter);
  }

  // Tactical Whiteboard Events
  const tab3421 = document.getElementById("whiteboard-tab-3421");
  const tab433 = document.getElementById("whiteboard-tab-433");
  const tab451 = document.getElementById("whiteboard-tab-451");

  if (tab3421 && tab433 && tab451) {
    tab3421.addEventListener("click", () => {
      tab433.classList.remove("active");
      tab451.classList.remove("active");
      tab3421.classList.add("active");
      ACTIVE_FORMATION = "3421";
      renderTacticalPitch();
    });

    tab433.addEventListener("click", () => {
      tab3421.classList.remove("active");
      tab451.classList.remove("active");
      tab433.classList.add("active");
      ACTIVE_FORMATION = "433";
      renderTacticalPitch();
    });

    tab451.addEventListener("click", () => {
      tab3421.classList.remove("active");
      tab433.classList.remove("active");
      tab451.classList.add("active");
      ACTIVE_FORMATION = "451";
      renderTacticalPitch();
    });
  }

  const overlayPressing = document.getElementById("whiteboard-show-pressing");
  const overlayRuns = document.getElementById("whiteboard-show-runs");
  
  if (overlayPressing) {
    overlayPressing.addEventListener("change", renderTacticalOverlays);
  }
  if (overlayRuns) {
    overlayRuns.addEventListener("change", renderTacticalOverlays);
  }

  // Scout Room select changes
  const scoutP1 = document.getElementById("scout-player-1");
  const scoutP2 = document.getElementById("scout-player-2");

  if (scoutP1 && scoutP2) {
    scoutP1.addEventListener("change", renderScoutComparison);
    scoutP2.addEventListener("change", renderScoutComparison);
  }

  // Match Simulator Trigger Events
  const simulateBtn = document.getElementById("match-center-simulate-btn");
  if (simulateBtn) {
    simulateBtn.addEventListener("click", openMatchSimulator);
  }

  const playSim = document.getElementById("sim-control-play");
  const pauseSim = document.getElementById("sim-control-pause");
  
  if (playSim && pauseSim) {
    playSim.addEventListener("click", () => {
      const statusPill = document.getElementById("sim-status-pill");
      statusPill.textContent = "Live";
      statusPill.style.color = "#FECC00";
      statusPill.style.background = "rgba(254,204,0,0.1)";

      playSim.style.display = "none";
      pauseSim.style.display = "inline-block";
      pauseSim.innerHTML = '<i class="fas fa-pause"></i> Pause';

      if (simInterval) clearInterval(simInterval);
      simInterval = setInterval(handleSimulatorTick, simSpeed);
    });

    pauseSim.addEventListener("click", () => {
      const statusPill = document.getElementById("sim-status-pill");
      statusPill.textContent = "Paused";
      statusPill.style.color = "#9CA3AF";
      statusPill.style.background = "rgba(156,163,175,0.1)";

      pauseSim.style.display = "none";
      playSim.style.display = "inline-block";
      playSim.innerHTML = '<i class="fas fa-play"></i> Resume';

      if (simInterval) {
        clearInterval(simInterval);
        simInterval = null;
      }
    });
  }

  const speedSelect = document.getElementById("sim-speed-select");
  if (speedSelect) {
    speedSelect.addEventListener("change", (e) => {
      simSpeed = Number(e.target.value);
      if (simInterval) {
        clearInterval(simInterval);
        simInterval = setInterval(handleSimulatorTick, simSpeed);
      }
    });
  }

  const viewReportBtn = document.getElementById("sim-btn-view-report");
  if (viewReportBtn) {
    viewReportBtn.addEventListener("click", () => {
      document.getElementById("match-simulator-modal").classList.remove("active");
      const matchCenter = document.getElementById("match-center-card");
      if (matchCenter) {
        matchCenter.scrollIntoView({ behavior: "smooth" });
      }
      renderMatchCenter();
    });
  }
}

// ==========================================================================
// PREMIUM UPGRADES PORTAL UPGRADE SYSTEM (SWEDEN HUB)
// Includes: Theme Toggling, Group Standings, Host Venue Guide, Trivia Quiz & Predictor
// ==========================================================================

let SIMULATED_RESULTS = {
  match_tunisia: null,
  match_netherlands: null,
  match_japan: null
};

let venueClockInterval = null;
let currentTriviaIndex = 0;
let triviaScore = 0;
let answeredTrivia = false;
let selectedPredictorMatch = "match_tunisia";

const VENUES = {
  seattle: {
    city: "Seattle, USA",
    stadium: "Lumen Field",
    capacity: "69,000",
    timezone: "America/Los_Angeles",
    weather: "68°F (Sunny)",
    desc: "Lumen Field is home to MLS Seattle Sounders FC and NFL's Seahawks. Renowned for its thunderous acoustics and panoramic views of downtown Seattle, it will host Sweden's crucial World Cup opener against Tunisia.",
    flag: "🇺🇸",
    stadiumUrl: "https://www.lumenfield.com"
  },
  vancouver: {
    city: "Vancouver, Canada",
    stadium: "BC Place",
    capacity: "54,500",
    timezone: "America/Vancouver",
    weather: "62°F (Partly Cloudy)",
    desc: "BC Place is a architectural wonder featuring the world's largest cable-supported retractable roof. Nestled by Vancouver's False Creek, it will host Sweden's massive match against the Netherlands.",
    flag: "🇨🇦",
    stadiumUrl: "https://www.bcplace.com"
  },
  stockholm: {
    city: "Stockholm, Sweden",
    stadium: "Strawberry Arena",
    capacity: "50,600",
    timezone: "Europe/Stockholm",
    weather: "59°F (Clear)",
    desc: "Sweden's national football arena features a retractable roof and serves as the home base for AIK and the Sweden Men's National Team. It hosts the final high-profile warmup derby against Greece.",
    flag: "🇸🇪",
    stadiumUrl: "https://www.strawberryarena.se"
  }
};

const TRIVIA_QUESTIONS = [
  {
    q: "Sweden famously finished third in which World Cup tournament?",
    options: ["1958 in Sweden", "1994 in USA", "2018 in Russia", "1974 in Germany"],
    answer: 1,
    hint: "It took place in the United States, featuring iconic players like Kennet Andersson, Tomas Brolin, and Martin Dahlin!"
  },
  {
    q: "Who is Sweden's all-time leading male goalscorer?",
    options: ["Zlatan Ibrahimović", "Henrik Larsson", "Gunnar Nordahl", "Sven Rydell"],
    answer: 0,
    hint: "The legendary AC Milan, PSG, and Manchester United striker who scored 62 goals."
  },
  {
    q: "Who is the current head coach of the Swedish National Team?",
    options: ["Janne Andersson", "Jon Dahl Tomasson", "Graham Potter", "Lars Lagerbäck"],
    answer: 2,
    hint: "The former Brighton and Chelsea manager leading Sweden at this 2026 World Cup."
  },
  {
    q: "Sweden reached the World Cup Final in 1958. Who did they face in that historic match?",
    options: ["Brazil", "West Germany", "Italy", "Argentina"],
    answer: 0,
    hint: "A 17-year-old Pelé scored twice in the final to defeat Sweden 5-2 in Stockholm."
  },
  {
    q: "Which team is Sweden's opponent in their 2026 World Cup opening match?",
    options: ["Netherlands", "Japan", "Tunisia", "Norway"],
    answer: 2,
    hint: "A compact African team known as the Carthage Eagles playing in Group F."
  }
];

function initPremiumUpgrades() {
  initTheme();
  initGroupTable();
  initVenueGuide();
  initFanZone();
}

// 1. Dual-Kit Inspired Theme Controller
function initTheme() {
  const savedTheme = localStorage.getItem("user-theme") || "dark";
  setTheme(savedTheme);
  
  const chk = document.getElementById("theme-toggle-chk");
  if (chk) {
    chk.checked = savedTheme === "light";
    chk.addEventListener("change", (e) => {
      const theme = e.target.checked ? "light" : "dark";
      setTheme(theme);
    });
  }
}

function setTheme(theme) {
  document.documentElement.setAttribute("data-theme", theme);
  localStorage.setItem("user-theme", theme);
  
  const sunIcon = document.getElementById("theme-sun-icon");
  const moonIcon = document.getElementById("theme-moon-icon");
  if (sunIcon && moonIcon) {
    if (theme === "light") {
      sunIcon.style.color = "var(--sweden-blue)";
      moonIcon.style.color = "var(--text-secondary)";
    } else {
      sunIcon.style.color = "var(--text-secondary)";
      moonIcon.style.color = "var(--sweden-yellow)";
    }
  }
}

// 2. Dynamic Group Standings Table Widget
function initGroupTable() {
  calculateGroupStandings();
}

function calculateGroupStandings() {
  // Pre-populated background match results in Group F:
  // - Netherlands 1 - 1 Japan
  // - Tunisia 0 - 1 Japan
  // - Netherlands 2 - 0 Tunisia
  
  let standings = [
    { id: "sweden", name: "Sweden", flag: "🇸🇪", gp: 0, w: 0, d: 0, l: 0, gf: 0, ga: 0, gd: 0, pts: 0 },
    { id: "netherlands", name: "Netherlands", flag: "🇳🇱", gp: 3, w: 2, d: 1, l: 0, gf: 4, ga: 1, gd: 3, pts: 7 },
    { id: "japan", name: "Japan", flag: "🇯🇵", gp: 3, w: 1, d: 1, l: 1, gf: 2, ga: 2, gd: 0, pts: 4 },
    { id: "tunisia", name: "Tunisia", flag: "🇹🇳", gp: 3, w: 0, d: 0, l: 3, gf: 0, ga: 4, gd: -4, pts: 0 }
  ];

  // We overwrite Netherlands, Japan, Tunisia base states and dynamically calculate based on simulated outcomes
  // Let's clear their base records and calculate completely dynamically!
  const groupTeams = {
    sweden: { id: "sweden", name: "Sweden", flag: "🇸🇪", gp: 0, w: 0, d: 0, l: 0, gf: 0, ga: 0, gd: 0, pts: 0 },
    netherlands: { id: "netherlands", name: "Netherlands", flag: "🇳🇱", gp: 0, w: 0, d: 0, l: 0, gf: 0, ga: 0, gd: 0, pts: 0 },
    japan: { id: "japan", name: "Japan", flag: "🇯🇵", gp: 0, w: 0, d: 0, l: 0, gf: 0, ga: 0, gd: 0, pts: 0 },
    tunisia: { id: "tunisia", name: "Tunisia", flag: "🇹🇳", gp: 0, w: 0, d: 0, l: 0, gf: 0, ga: 0, gd: 0, pts: 0 }
  };

  // Helper to add match to team
  function addMatch(teamKey, gf, ga) {
    const t = groupTeams[teamKey];
    t.gp++;
    t.gf += gf;
    t.ga += ga;
    t.gd = t.gf - t.ga;
    if (gf > ga) {
      t.w++;
      t.pts += 3;
    } else if (gf === ga) {
      t.d++;
      t.pts += 1;
    } else {
      t.l++;
    }
  }

  // 1. Add background matches
  addMatch("netherlands", 1, 1);
  addMatch("japan", 1, 1);

  addMatch("tunisia", 0, 1);
  addMatch("japan", 1, 0);

  addMatch("netherlands", 2, 0);
  addMatch("tunisia", 0, 2);

  // 2. Add simulated Sweden matches
  if (SIMULATED_RESULTS.match_tunisia) {
    addMatch("sweden", SIMULATED_RESULTS.match_tunisia.swe, SIMULATED_RESULTS.match_tunisia.opp);
    addMatch("tunisia", SIMULATED_RESULTS.match_tunisia.opp, SIMULATED_RESULTS.match_tunisia.swe);
  } else {
    // If not simulated, add realistic placeholders or keep empty
  }
  
  if (SIMULATED_RESULTS.match_netherlands) {
    addMatch("sweden", SIMULATED_RESULTS.match_netherlands.swe, SIMULATED_RESULTS.match_netherlands.opp);
    addMatch("netherlands", SIMULATED_RESULTS.match_netherlands.opp, SIMULATED_RESULTS.match_netherlands.swe);
  }
  
  if (SIMULATED_RESULTS.match_japan) {
    addMatch("sweden", SIMULATED_RESULTS.match_japan.swe, SIMULATED_RESULTS.match_japan.opp);
    addMatch("japan", SIMULATED_RESULTS.match_japan.opp, SIMULATED_RESULTS.match_japan.swe);
  }

  // Convert map to array and sort
  const standingsArray = Object.values(groupTeams).sort((a, b) => {
    if (b.pts !== a.pts) return b.pts - a.pts;
    if (b.gd !== a.gd) return b.gd - a.gd;
    if (b.gf !== a.gf) return b.gf - a.gf;
    return a.name.localeCompare(b.name);
  });

  renderGroupTableUI(standingsArray);
}

function renderGroupTableUI(standings) {
  const tbody = document.getElementById("group-standings-tbody");
  if (!tbody) return;

  tbody.innerHTML = standings.map((t, idx) => {
    const isQualifying = idx < 2;
    const isSweden = t.id === "sweden";
    
    return `
      <tr style="border-bottom: 1px solid rgba(255, 255, 255, 0.04); font-weight: ${isSweden ? '800' : '500'}; color: ${isSweden ? 'var(--text-white)' : 'var(--text-primary)'}; background: ${isSweden ? 'rgba(0, 106, 167, 0.12)' : 'transparent'}; transition: var(--transition-smooth);">
        <td style="padding: 0.6rem 0.4rem; text-align: center;">
          <span style="display: inline-flex; align-items: center; justify-content: center; width: 20px; height: 20px; border-radius: 50%; background: ${isQualifying ? 'rgba(16, 185, 129, 0.15)' : 'transparent'}; color: ${isQualifying ? '#10B981' : 'var(--text-secondary)'}; font-size: 0.75rem; font-weight: 700;">
            ${idx + 1}
          </span>
        </td>
        <td style="padding: 0.6rem 0.8rem; display: flex; align-items: center; gap: 0.4rem;">
          <span style="font-size: 1.1rem; line-height: 1;">${t.flag}</span>
          <span>${t.name}</span>
        </td>
        <td style="padding: 0.6rem 0.4rem; text-align: center; color: var(--text-secondary); font-family: monospace;">${t.gp}</td>
        <td style="padding: 0.6rem 0.4rem; text-align: center; font-family: monospace;">${t.w}</td>
        <td style="padding: 0.6rem 0.4rem; text-align: center; font-family: monospace;">${t.d}</td>
        <td style="padding: 0.6rem 0.4rem; text-align: center; font-family: monospace;">${t.l}</td>
        <td style="padding: 0.6rem 0.4rem; text-align: center; font-family: monospace; color: ${t.gd > 0 ? '#10B981' : t.gd < 0 ? '#EF4444' : 'var(--text-secondary)'}; font-weight: 700;">
          ${t.gd > 0 ? '+' : ''}${t.gd}
        </td>
        <td style="padding: 0.6rem 0.4rem; text-align: center; font-weight: 800; font-family: monospace; color: var(--sweden-yellow); font-size: 0.9rem;">
          ${t.pts}
        </td>
      </tr>
    `;
  }).join('');
}

// 3. Interactive Host Venue & Stadium Guide
function initVenueGuide() {
  const tabsList = document.getElementById("venue-tabs-list");
  if (!tabsList) return;

  const buttons = tabsList.querySelectorAll(".news-tab-btn");
  buttons.forEach(btn => {
    btn.addEventListener("click", () => {
      buttons.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      
      const stKey = btn.getAttribute("data-stadium");
      renderVenueGuide(stKey);
    });
  });

  renderVenueGuide("seattle");
}

function renderVenueGuide(venueKey) {
  const display = document.getElementById("venue-display-card");
  if (!display) return;

  const v = VENUES[venueKey];
  if (!v) return;

  if (venueClockInterval) clearInterval(venueClockInterval);

  display.innerHTML = `
    <div style="display: flex; flex-direction: column; gap: 0.8rem;" class="animated fade-in">
      <div style="display: flex; justify-content: space-between; align-items: flex-start; border-bottom: 1px solid rgba(255,255,255,0.05); padding-bottom: 0.6rem;">
        <div>
          <h3 style="color: var(--text-white); font-size: 1.1rem; display: flex; align-items: center; gap: 0.4rem;">
            <span>${v.flag}</span> ${v.stadium}
          </h3>
          <p style="color: var(--text-secondary); font-size: 0.78rem; font-weight: 500;"><i class="fas fa-map-marker-alt" style="color: var(--sweden-yellow);"></i> ${v.city}</p>
        </div>
        <div style="text-align: right; background: rgba(0, 106, 167, 0.1); padding: 0.3rem 0.6rem; border-radius: var(--radius-sm); border: 1px solid rgba(0, 106, 167, 0.2);">
          <span style="font-size: 0.62rem; color: var(--text-secondary); text-transform: uppercase; font-weight: 700; letter-spacing: 0.05em; display: block; margin-bottom: 2px;">Local Time</span>
          <span style="font-size: 0.95rem; font-weight: 800; font-family: monospace; color: var(--sweden-yellow);" id="venue-clock-display">--:--:--</span>
        </div>
      </div>

      <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 0.8rem; margin: 0.2rem 0;">
        <div style="background: rgba(255,255,255,0.02); border: 1px solid rgba(255,255,255,0.04); border-radius: var(--radius-sm); padding: 0.5rem; text-align: center;">
          <span style="font-size: 0.65rem; color: var(--text-secondary); text-transform: uppercase; display: block; margin-bottom: 3px;">Seating Capacity</span>
          <strong style="font-size: 1.1rem; color: var(--text-white);">${v.capacity}</strong>
        </div>
        <div style="background: rgba(255,255,255,0.02); border: 1px solid rgba(255,255,255,0.04); border-radius: var(--radius-sm); padding: 0.5rem; text-align: center;">
          <span style="font-size: 0.65rem; color: var(--text-secondary); text-transform: uppercase; display: block; margin-bottom: 3px;">Live Weather Info</span>
          <strong style="font-size: 1.1rem; color: var(--sweden-yellow); display: flex; align-items: center; justify-content: center; gap: 0.3rem;"><i class="fas fa-sun" style="font-size: 0.85rem;"></i> ${v.weather}</strong>
        </div>
      </div>

      <p style="font-size: 0.78rem; color: var(--text-secondary); line-height: 1.45;">
        ${v.desc}
      </p>
      
      <a href="${v.stadiumUrl}" target="_blank" style="align-self: flex-start; font-size: 0.72rem; color: var(--sweden-yellow); font-weight: 700; text-decoration: none; display: inline-flex; align-items: center; gap: 0.3rem; margin-top: 2px; transition: var(--transition-smooth);" class="venue-link-hover">
        Visit Official Website <i class="fas fa-external-link-alt" style="font-size: 0.65rem;"></i>
      </a>
    </div>
  `;

  // Start Time clock tick
  function tickClock() {
    const clockEl = document.getElementById("venue-clock-display");
    if (clockEl) {
      const options = {
        timeZone: v.timezone,
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false
      };
      clockEl.textContent = new Intl.DateTimeFormat([], options).format(new Date());
    }
  }
  
  tickClock();
  venueClockInterval = setInterval(tickClock, 1000);
}

// 4. Camp Fan Zone (Trivia Quiz & Score Predictor) Controller
function initFanZone() {
  const tabTrivia = document.getElementById("tab-fanzone-trivia");
  const tabPredictor = document.getElementById("tab-fanzone-predictor");
  const stageTrivia = document.getElementById("stage-fanzone-trivia");
  const stagePredictor = document.getElementById("stage-fanzone-predictor");

  if (tabTrivia && tabPredictor && stageTrivia && stagePredictor) {
    tabTrivia.addEventListener("click", () => {
      tabPredictor.classList.remove("active");
      tabTrivia.classList.add("active");
      stagePredictor.style.display = "none";
      stageTrivia.style.display = "block";
      renderTrivia();
    });

    tabPredictor.addEventListener("click", () => {
      tabTrivia.classList.remove("active");
      tabPredictor.classList.add("active");
      stageTrivia.style.display = "none";
      stagePredictor.style.display = "block";
      renderPredictor();
    });
  }

  renderTrivia();
}

function renderTrivia() {
  const quizBox = document.getElementById("trivia-quiz-container");
  if (!quizBox) return;

  if (currentTriviaIndex >= TRIVIA_QUESTIONS.length) {
    // Show End state Summary
    let rating = "Bronze Scout Medal 🥉";
    let message = "Good effort! Practice makes perfect. Review your camp notes and try again!";
    if (triviaScore === 5) {
      rating = "Gold Camp Medal 🏆 Confetti Time!";
      message = "Incredible! You possess flawless knowledge of the Swedish National Team. You're ready for Graham Potter's tactical team meetings!";
      setTimeout(triggerConfetti, 100);
    } else if (triviaScore >= 3) {
      rating = "Silver Tactician Medal 🥈";
      message = "Impressive! You know your Swedish football history. Graham Potter is pleased with your tactical awareness.";
    }

    quizBox.innerHTML = `
      <div style="text-align: center;" class="animated scale-in">
        <h3 style="font-size: 1.3rem; color: var(--sweden-yellow); margin-bottom: 0.5rem;"><i class="fas fa-trophy"></i> Quiz Completed!</h3>
        <p style="font-size: 0.85rem; color: var(--text-secondary); margin-bottom: 0.8rem;">You scored <strong style="color:var(--text-white); font-size:1.2rem;">${triviaScore}</strong> out of <strong style="color:var(--text-white);">${TRIVIA_QUESTIONS.length}</strong></p>
        
        <div style="background: rgba(0,106,167,0.12); border: 1px dashed var(--sweden-blue); border-radius: var(--radius-sm); padding: 0.8rem; margin-bottom: 1.2rem;">
          <h4 style="font-size: 0.95rem; color: var(--text-white); margin-bottom: 4px;">${rating}</h4>
          <p style="font-size: 0.75rem; color: var(--text-secondary); line-height:1.4;">${message}</p>
        </div>

        <button class="ratings-toggle-btn" id="btn-trivia-restart" style="width: auto; padding: 0.5rem 1.5rem; display: inline-flex; justify-content: center; align-items: center; gap: 0.4rem; font-size: 0.8rem; cursor: pointer;">
          <i class="fas fa-redo"></i> Play Again
        </button>
      </div>
    `;

    const restartBtn = document.getElementById("btn-trivia-restart");
    if (restartBtn) {
      restartBtn.addEventListener("click", () => {
        currentTriviaIndex = 0;
        triviaScore = 0;
        answeredTrivia = false;
        renderTrivia();
      });
    }
    return;
  }

  const q = TRIVIA_QUESTIONS[currentTriviaIndex];
  answeredTrivia = false;

  quizBox.innerHTML = `
    <div class="animated fade-in" style="display: flex; flex-direction: column; gap: 0.8rem;">
      <div style="display: flex; justify-content: space-between; align-items: center; font-size: 0.72rem; color: var(--text-secondary); border-bottom: 1px solid rgba(255,255,255,0.05); padding-bottom: 0.4rem;">
        <span>CAMP TRIVIA CHALLENGE</span>
        <span style="font-family: monospace; font-weight: 700; color: var(--sweden-yellow);">Question ${currentTriviaIndex + 1}/${TRIVIA_QUESTIONS.length}</span>
      </div>

      <h4 style="font-size: 0.88rem; color: var(--text-white); font-weight: 600; line-height: 1.45; margin-bottom: 2px;">
        ${q.q}
      </h4>

      <div style="display: flex; flex-direction: column; gap: 0.5rem; margin: 0.2rem 0;">
        ${q.options.map((opt, oIdx) => {
          return `
            <button class="trivia-opt-btn" data-index="${oIdx}" style="width: 100%; text-align: left; background: rgba(255,255,255,0.02); border: 1px solid rgba(255,255,255,0.05); border-radius: var(--radius-sm); padding: 0.5rem 0.8rem; color: var(--text-primary); font-family: inherit; font-size: 0.78rem; font-weight: 600; cursor: pointer; transition: all 0.25s ease; outline: none; display: flex; align-items: center; gap: 0.5rem;">
              <span style="display:inline-flex; align-items:center; justify-content:center; width:18px; height:18px; border-radius:50%; background:rgba(255,255,255,0.05); color:var(--text-secondary); font-size:0.65rem; font-weight:700;">${String.fromCharCode(65 + oIdx)}</span>
              <span>${opt}</span>
            </button>
          `;
        }).join('')}
      </div>

      <div style="display: flex; justify-content: space-between; align-items: center; margin-top: 2px;">
        <button id="btn-trivia-hint" style="background:transparent; border:none; color:var(--text-secondary); font-size:0.7rem; font-weight:700; cursor:pointer; text-transform:uppercase; outline:none; display:flex; align-items:center; gap:0.3rem;">
          <i class="far fa-lightbulb" style="color:var(--sweden-yellow);"></i> Show Hint
        </button>
        <button id="btn-trivia-next" style="display: none; background: var(--sweden-blue); border: 1px solid var(--sweden-blue); border-radius: var(--radius-sm); color: var(--text-white); padding: 0.35rem 1rem; font-size: 0.72rem; font-weight: 700; cursor: pointer; font-family: inherit;">
          Next <i class="fas fa-chevron-right" style="font-size:0.6rem;"></i>
        </button>
      </div>
      
      <div id="trivia-hint-box" style="display: none; background: rgba(254,204,0,0.08); border: 1px solid rgba(254,204,0,0.15); border-radius: var(--radius-sm); padding: 0.6rem; font-size: 0.72rem; color: var(--text-secondary); line-height: 1.45;">
        <strong>Hint:</strong> ${q.hint}
      </div>
    </div>
  `;

  // Option actions
  const optBtns = quizBox.querySelectorAll(".trivia-opt-btn");
  optBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      if (answeredTrivia) return;
      answeredTrivia = true;

      const selIdx = Number(btn.getAttribute("data-index"));
      const circle = btn.querySelector("span");

      if (selIdx === q.answer) {
        triviaScore++;
        btn.style.background = "rgba(16, 185, 129, 0.12)";
        btn.style.borderColor = "#10B981";
        btn.style.color = "#10B981";
        if (circle) circle.style.background = "#10B981";
      } else {
        btn.style.background = "rgba(239, 68, 68, 0.12)";
        btn.style.borderColor = "#EF4444";
        btn.style.color = "#EF4444";
        if (circle) circle.style.background = "#EF4444";

        // Highlight correct one
        optBtns.forEach(b => {
          const bIdx = Number(b.getAttribute("data-index"));
          if (bIdx === q.answer) {
            b.style.background = "rgba(16, 185, 129, 0.08)";
            b.style.borderColor = "#10B981";
            b.style.color = "#10B981";
          }
        });
      }

      optBtns.forEach(b => b.style.cursor = "default");
      document.getElementById("btn-trivia-next").style.display = "inline-block";
    });
  });

  // Hint action
  const hintBtn = document.getElementById("btn-trivia-hint");
  const hintBox = document.getElementById("trivia-hint-box");
  if (hintBtn && hintBox) {
    hintBtn.addEventListener("click", () => {
      hintBox.style.display = hintBox.style.display === "none" ? "block" : "none";
    });
  }

  // Next action
  const nextBtn = document.getElementById("btn-trivia-next");
  if (nextBtn) {
    nextBtn.addEventListener("click", () => {
      currentTriviaIndex++;
      renderTrivia();
    });
  }
}

// Full Canvas Confetti particle logic
function triggerConfetti() {
  const canvas = document.createElement("canvas");
  canvas.style.position = "fixed";
  canvas.style.top = "0";
  canvas.style.left = "0";
  canvas.style.width = "100vw";
  canvas.style.height = "100vh";
  canvas.style.pointerEvents = "none";
  canvas.style.zIndex = "99999";
  document.body.appendChild(canvas);
  
  const ctx = canvas.getContext("2d");
  let width = canvas.width = window.innerWidth;
  let height = canvas.height = window.innerHeight;
  
  const colors = ["#006AA7", "#FECC00", "#FF3366", "#00F5D4", "#FFFFFF"];
  const particles = [];
  
  for (let i = 0; i < 120; i++) {
    particles.push({
      x: Math.random() * width,
      y: Math.random() * height - height,
      r: Math.random() * 5 + 3,
      d: Math.random() * width,
      color: colors[Math.floor(Math.random() * colors.length)],
      tilt: Math.random() * 10 - 5,
      tiltAngleIncremental: Math.random() * 0.05 + 0.02,
      tiltAngle: 0
    });
  }
  
  function draw() {
    ctx.clearRect(0, 0, width, height);
    let active = false;
    particles.forEach(p => {
      p.tiltAngle += p.tiltAngleIncremental;
      p.y += (Math.cos(p.d) + 3 + p.r / 2) / 2.5;
      p.x += Math.sin(p.tiltAngle);
      p.tilt = Math.sin(p.tiltAngle - p.r/2) * 4;
      
      if (p.y < height) active = true;
      
      ctx.beginPath();
      ctx.lineWidth = p.r;
      ctx.strokeStyle = p.color;
      ctx.moveTo(p.x + p.tilt + p.r/2, p.y);
      ctx.lineTo(p.x + p.tilt, p.y + p.tilt + p.r/2);
      ctx.stroke();
    });
    
    if (active) {
      requestAnimationFrame(draw);
    } else {
      canvas.remove();
    }
  }
  
  draw();
}

function renderPredictor() {
  const box = document.getElementById("predictor-widget-container");
  if (!box) return;

  const matches = [
    { id: "match_tunisia", name: "vs. Tunisia 🇹🇳 (WC Opener)", savedKey: "pred_tunisia", swePct: 78, drwPct: 14, oppPct: 8 },
    { id: "match_netherlands", name: "vs. Netherlands 🇳🇱 (WC Match 2)", savedKey: "pred_netherlands", swePct: 38, drwPct: 35, oppPct: 27 },
    { id: "match_japan", name: "vs. Japan 🇯🇵 (WC Match 3)", savedKey: "pred_japan", swePct: 54, drwPct: 28, oppPct: 18 }
  ];

  const m = matches.find(item => item.id === selectedPredictorMatch);
  
  // Retrieve saved prediction
  const saved = localStorage.getItem(m.savedKey);
  const parsed = saved ? JSON.parse(saved) : { swe: 0, opp: 0, locked: false };

  box.innerHTML = `
    <div class="animated fade-in" style="display: flex; flex-direction: column; gap: 0.8rem;">
      <div style="display: flex; flex-direction: column; gap: 0.3rem;">
        <label for="predictor-match-selector" style="font-size: 0.7rem; font-weight: 700; color: var(--text-secondary); text-transform: uppercase;">Select Opponent:</label>
        <select class="sim-select" id="predictor-match-selector" style="width: 100%; background: var(--bg-dark-700); border-color: var(--bg-dark-600); padding: 0.3rem 0.6rem; border-radius: var(--radius-sm); color: var(--text-white); font-family: inherit; font-size: 0.78rem; font-weight: 600; outline: none; cursor: pointer;">
          ${matches.map(item => `<option value="${item.id}" ${item.id === selectedPredictorMatch ? 'selected' : ''}>${item.name}</option>`).join('')}
        </select>
      </div>

      <div style="background: rgba(255,255,255,0.01); border: 1px solid rgba(255,255,255,0.03); border-radius: var(--radius-sm); padding: 0.8rem; text-align: center; margin: 0.2rem 0;">
        <span style="font-size: 0.65rem; color: var(--text-secondary); text-transform: uppercase; display: block; margin-bottom: 0.5rem; letter-spacing: 0.05em;">Your Score Guess</span>
        
        <div style="display: inline-flex; align-items: center; gap: 1rem;">
          <div style="display: flex; align-items: center; gap: 0.4rem;">
            <span style="font-size: 1.1rem;">🇸🇪</span>
            <button class="pred-inc-btn" id="pred-dec-swe" ${parsed.locked ? 'disabled' : ''} style="width: 22px; height: 22px; border-radius: 50%; border: 1px solid rgba(255,255,255,0.15); background: transparent; color: var(--text-white); cursor: pointer; font-size: 0.78rem;">-</button>
            <strong style="font-size: 1.5rem; font-family: monospace; min-width: 25px;" id="pred-val-swe">${parsed.swe}</strong>
            <button class="pred-inc-btn" id="pred-inc-swe" ${parsed.locked ? 'disabled' : ''} style="width: 22px; height: 22px; border-radius: 50%; border: 1px solid rgba(255,255,255,0.15); background: transparent; color: var(--text-white); cursor: pointer; font-size: 0.78rem;">+</button>
          </div>
          <span style="color: var(--text-secondary); font-weight: 800; font-size: 1.2rem;">:</span>
          <div style="display: flex; align-items: center; gap: 0.4rem;">
            <button class="pred-inc-btn" id="pred-dec-opp" ${parsed.locked ? 'disabled' : ''} style="width: 22px; height: 22px; border-radius: 50%; border: 1px solid rgba(255,255,255,0.15); background: transparent; color: var(--text-white); cursor: pointer; font-size: 0.78rem;">-</button>
            <strong style="font-size: 1.5rem; font-family: monospace; min-width: 25px;" id="pred-val-opp">${parsed.opp}</strong>
            <button class="pred-inc-btn" id="pred-inc-opp" ${parsed.locked ? 'disabled' : ''} style="width: 22px; height: 22px; border-radius: 50%; border: 1px solid rgba(255,255,255,0.15); background: transparent; color: var(--text-white); cursor: pointer; font-size: 0.78rem;">+</button>
            <span style="font-size: 1.1rem;" id="pred-flag-opp">${m.id === "match_tunisia" ? '🇹🇳' : m.id === "match_netherlands" ? '🇳🇱' : '🇯🇵'}</span>
          </div>
        </div>

        <button class="ratings-toggle-btn" id="btn-pred-lock" ${parsed.locked ? 'disabled' : ''} style="width: auto; margin: 0.8rem auto 0 auto; display: block; font-size: 0.75rem; padding: 0.4rem 1.5rem;">
          ${parsed.locked ? '<i class="fas fa-lock" style="color:var(--sweden-yellow);"></i> Guess Locked' : '<i class="fas fa-check"></i> Lock in Prediction'}
        </button>
      </div>

      <div style="display: flex; flex-direction: column; gap: 0.4rem;">
        <span style="font-size: 0.65rem; color: var(--text-secondary); text-transform: uppercase; font-weight: 700; letter-spacing: 0.05em;">Community Predictions</span>
        
        <!-- Pct Bars -->
        <div style="display: flex; flex-direction: column; gap: 3px;">
          <div style="display: flex; justify-content: space-between; font-size: 0.7rem; color: var(--text-secondary);">
            <span>Sweden Win</span>
            <strong style="color: var(--text-white);" id="comm-pct-swe">${parsed.locked ? Math.round(m.swePct + 3) + '%' : m.swePct + '%'}</strong>
          </div>
          <div style="height: 4px; background: rgba(255,255,255,0.05); border-radius: 2px; overflow: hidden;">
            <div style="width: ${parsed.locked ? (m.swePct + 3) + '%' : m.swePct + '%'}; height: 100%; background: var(--sweden-blue);"></div>
          </div>
        </div>

        <div style="display: flex; flex-direction: column; gap: 3px;">
          <div style="display: flex; justify-content: space-between; font-size: 0.7rem; color: var(--text-secondary);">
            <span>Draw</span>
            <strong style="color: var(--text-white);" id="comm-pct-drw">${parsed.locked ? Math.round(m.drwPct - 1) + '%' : m.drwPct + '%'}</strong>
          </div>
          <div style="height: 4px; background: rgba(255,255,255,0.05); border-radius: 2px; overflow: hidden;">
            <div style="width: ${parsed.locked ? (m.drwPct - 1) + '%' : m.drwPct + '%'}; height: 100%; background: var(--text-secondary);"></div>
          </div>
        </div>

        <div style="display: flex; flex-direction: column; gap: 3px;">
          <div style="display: flex; justify-content: space-between; font-size: 0.7rem; color: var(--text-secondary);">
            <span>Opponent Win</span>
            <strong style="color: var(--text-white);" id="comm-pct-opp">${parsed.locked ? Math.round(m.oppPct - 2) + '%' : m.oppPct + '%'}</strong>
          </div>
          <div style="height: 4px; background: rgba(255,255,255,0.05); border-radius: 2px; overflow: hidden;">
            <div style="width: ${parsed.locked ? (m.oppPct - 2) + '%' : m.oppPct + '%'}; height: 100%; background: var(--sweden-yellow);"></div>
          </div>
        </div>
      </div>
    </div>
  `;

  // Select match handler
  const select = document.getElementById("predictor-match-selector");
  if (select) {
    select.addEventListener("change", (e) => {
      selectedPredictorMatch = e.target.value;
      renderPredictor();
    });
  }

  if (!parsed.locked) {
    let sweVal = parsed.swe;
    let oppVal = parsed.opp;

    const btnDecSwe = document.getElementById("pred-dec-swe");
    const btnIncSwe = document.getElementById("pred-inc-swe");
    const btnDecOpp = document.getElementById("pred-dec-opp");
    const btnIncOpp = document.getElementById("pred-inc-opp");
    const lockBtn = document.getElementById("btn-pred-lock");

    btnDecSwe.addEventListener("click", () => {
      if (sweVal > 0) {
        sweVal--;
        document.getElementById("pred-val-swe").textContent = sweVal;
      }
    });
    btnIncSwe.addEventListener("click", () => {
      if (sweVal < 9) {
        sweVal++;
        document.getElementById("pred-val-swe").textContent = sweVal;
      }
    });

    btnDecOpp.addEventListener("click", () => {
      if (oppVal > 0) {
        oppVal--;
        document.getElementById("pred-val-opp").textContent = oppVal;
      }
    });
    btnIncOpp.addEventListener("click", () => {
      if (oppVal < 9) {
        oppVal++;
        document.getElementById("pred-val-opp").textContent = oppVal;
      }
    });

    lockBtn.addEventListener("click", () => {
      parsed.swe = sweVal;
      parsed.opp = oppVal;
      parsed.locked = true;
      localStorage.setItem(m.savedKey, JSON.stringify(parsed));
      renderPredictor();
    });
  }
}



