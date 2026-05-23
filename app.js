/**
 * Swedish National Soccer Team - 2026 World Cup Hub
 * Client-Side Core Logic (Updated with Multi-Day Timeline & Cumulative Scrollable Feed)
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

// Correct duplicates
PLAYERS.find(p => p.id === "gustaf_nilsson").number = 26;

// 2. Chronological Multi-Day Database (May 21st, 22nd, 23rd)
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
          title: "Sweden squad reports to Gothenburg camp; initial fitness screenings completed",
          bullets: [
            "All 26 selected players arrive at the team headquarters in Gothenburg.",
            "Medical staff performs base cardiac and physical loading tests.",
            "Graham Potter welcomes the squad, expressing immense optimism."
          ],
          summary: "Sweden's World Cup campaign has officially begun as all 26 players reported to the Gothenburg camp this morning. The players underwent detailed medical examinations and fitness tests to establish baseline physical data before moving onto training pitches. Captain Victor Lindelöf expressed his excitement: 'We are finally here, the work starts now.'",
          author: "Olof Lundh (Fotbollskanalen)",
          readTime: "3 min",
          tag: "Camp Start",
          relatedPlayers: ["victor_lindelof"]
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
          type: "Krönika",
          title: "Potter: 'We represent our flag with pride and modern principles'",
          bullets: [
            "Förbundskapten Graham Potter lays out his primary philosophical goals.",
            "Demands tactical courage, flexible systems, and proactive high-presses.",
            "Emphasizes that Swedish collective spirit is their ultimate competitive advantage."
          ],
          summary: "In his opening press conference of the Gothenburg camp, Graham Potter outlined his tactical blueprint. The English manager stressed that Sweden will not be defensive spectators at the World Cup. 'We want to dictate phases, use the ball intelligently, and press aggressively. Our historical strength is unity, and we will combine that with modern technical courage,' Potter explained.",
          author: "Simon Bank (Aftonbladet)",
          readTime: "4 min",
          tag: "Taktisk Filosofi",
          relatedPlayers: []
        }
      ]
    },
    3: {
      timeLabel: "14:30",
      name: "Träningspass (Afternoon Pitch Training Update)",
      articles: [
        {
          id: "art_21_3_1",
          category: "sweden",
          type: "Blogg",
          title: "Emil Holm: 'First pitch training was incredibly sharp and high-tempo'",
          bullets: [
            "Juventus wing-back Holm logs his personal observations of the opening training session.",
            "Notes that passing drills were executed with rapid velocity.",
            "Puckish competition already brewing between strikers and defenders."
          ],
          summary: "Writing in his camp diary blog, right wingback Emil Holm highlighted the intense tempo of Sweden's first field session. 'Potter and his coaching staff don't waste a single minute. The exercises were short, physically demanding, and focused entirely on quick spatial transition. The chemistry is top-tier already,' Holm remarked.",
          author: "Emil Holm (Spelar-Blogg)",
          readTime: "2 min",
          tag: "Träningspass 1",
          relatedPlayers: ["emil_holm"]
        }
      ]
    },
    4: {
      timeLabel: "18:00",
      name: "Taktik & Analys (Tactical Prep & Opponent Scouting)",
      articles: [
        {
          id: "art_21_4_1",
          category: "opponent",
          type: "Scouting",
          title: "Scouting Group F: Dutch media analyzes threat of Sweden's dual forwards",
          bullets: [
            "De Telegraaf highlights Gyökeres and Isak as one of the tournament's most lethal duos.",
            "Dutch coaches plan special central overload routines to isolate Sweden's strikers.",
            "Frenkie de Jong comments: 'Sweden is highly structured and very dangerous.'"
          ],
          summary: "Reports out of Amsterdam show that the Netherlands is showing heavy respect for Sweden's attacking options. Dutch football columns spent the day dissecting Sweden's likely shape under Graham Potter, identifying the physical power of Viktor Gyökeres and the elegance of Alexander Isak as top-tier threats that will require specialized defensive monitoring.",
          author: "De Telegraaf (Amsterdam)",
          readTime: "3 min",
          tag: "Nederländerna Rapport",
          relatedPlayers: ["viktor_gyokeres", "alexander_isak"]
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
          title: "Gothenburg camp winds down; players enjoy quiet evening in team lounge",
          bullets: [
            "Squad wraps up Day 1 with shared dinner and recreation time.",
            "Jesper Karlström wins early team billiard tournament.",
            "Medical team reports zero complaints or injury scares."
          ],
          summary: "Sweden's first official training day in Gothenburg concluded with a relaxed team-bonding session in the lounge. Midfielder Jesper Karlström claimed the bragging rights in a hotly contested pool tournament. Crucially, the physical therapists reported that the entire 26-man roster finished the opening day with a clean bill of health.",
          author: "Svensk Fotboll Media",
          readTime: "2 min",
          tag: "Kvällsläger",
          relatedPlayers: ["jesper_karlstrom"]
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
          type: "Blogg",
          title: "Isak Hien and Victor Lindelöf discuss tactical defensive structures over coffee",
          bullets: [
            "Sweden's expected starting center-backs seen coordinating positions at frukost.",
            "Analyze footage of Netherlands' counter-attacking runs in warmups.",
            "Potter expresses satisfaction at his leaders' proactive tactical homework."
          ],
          summary: "Cohesion in Sweden's central defense is growing rapidly. At breakfast today, Atalanta's Isak Hien and captain Victor Lindelöf were seen utilizing tablets to dissect movement maps of the Netherlands' front three. By building direct, verbal understanding off the field, the center-back pairing plans to synchronize their positioning on the pitch.",
          author: "Johanna Frändén (Aftonbladet)",
          readTime: "3 min",
          tag: "Frukostanalys",
          relatedPlayers: ["isak_hien", "victor_lindelof"]
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
          title: "Medical Staff: Complete health update issued; Holm and Gudmundsson peak form",
          bullets: [
            "Swedish chief doctor confirms 100% squad health, zero muscular strains.",
            "Holm and Gudmundsson demonstrate elite recovery statistics in tests.",
            "Potter praises his medical division for managing player club workloads."
          ],
          summary: "Sweden issued a glowing medical update today, confirming that all 26 selected players are in optimal physiological shape. Tests conducted on key wingbacks Emil Holm and Gabriel Gudmundsson showed outstanding lung capacities and muscular recovery, reassuring fans that Sweden's high-pressing system will operate at peak energy.",
          author: "Therese Strömberg (Expressen)",
          readTime: "2 min",
          tag: "Medicinskt Pressmöte",
          relatedPlayers: ["emil_holm", "gabriel_gudmundsson"]
        }
      ]
    },
    3: {
      timeLabel: "14:30",
      name: "Träningspass (Afternoon Pitch Training Update)",
      articles: [
        {
          id: "art_22_3_1",
          category: "sweden",
          type: "Nyheter",
          title: "Anthony Elanga showcases lightning pace in counter-attacking exercises",
          bullets: [
            "Newcastle forward Elanga clocks top speed of 35.5 km/h during afternoon training.",
            "Displays lethal chemistry with Lucas Bergvall during transition drills.",
            "Potter focuses drills on rapid three-pass scoring phases."
          ],
          summary: "Sweden's speed transitions were the main focus of this afternoon's pitch session. Anthony Elanga was the standout performer, repeatedly catching defensive lines out with explosive vertical runs. Potter and assistant hamberg spent significant time coordinating Elanga's overlapping patterns with Lucas Bergvall's midfield distributions.",
          author: "Daniel Kristoffersson (Expressen)",
          readTime: "3 min",
          tag: "Träningsrapport 2",
          relatedPlayers: ["anthony_elanga", "lucas_bergvall"]
        }
      ]
    },
    4: {
      timeLabel: "18:00",
      name: "Taktik & Analys (Tactical Prep & Opponent Scouting)",
      articles: [
        {
          id: "art_22_4_1",
          category: "opponent",
          type: "Analys",
          title: "Scouting Tunisia: Tactical analysis of Kadri's compact 4-5-1 layout",
          bullets: [
            "Sweden analysts break down Tunisia's highly disciplined midfield lock.",
            "Highlight Ellyes Skhiri's screen as their tactical center of gravity.",
            "Outline Sweden's path to break through: rapid wingback shifts and dual width."
          ],
          summary: "Sweden's analytics desk delivered a comprehensive scouting overview of group opponent Tunisia today. Kadri's team utilizes a highly disciplined 4-5-1 shape that chokes spaces in the central channels. Swedish scouts noted that to unlock this low-block, Sweden must avoid slow central passes and instead utilize Holm and Gudmundsson to create overloads on the wings.",
          author: "Marcus Leifby (Aftonbladet)",
          readTime: "5 min",
          tag: "Scouting Tunis",
          relatedPlayers: ["emil_holm", "gabriel_gudmundsson"]
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
          title: "Camp Diary: Yasin Ayari on learning Graham Potter's technical demands",
          bullets: [
            "Brighton midfielder Ayari reflects on his personal development in camp.",
            "Expresses high respect for Potter's detail-oriented tactical adjustments.",
            "Highlights great support from veteran midfielders Karlström and Svanberg."
          ],
          summary: "In a late-night player blog, Yasin Ayari opened up about working under Graham Potter. 'Graham expects us to scan constantly and understand where the space is before we even receive the ball. It is demanding, but it makes us incredibly smart as a unit. Having guys like Jesper and Mattias alongside me makes the adaptation so much easier,' Ayari wrote.",
          author: "Yasin Ayari (Spelar-Blogg)",
          readTime: "4 min",
          tag: "Spelar-Dagbok",
          relatedPlayers: ["yasin_ayari", "jesper_karlstrom", "mattias_svanberg"]
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
          type: "Blogg",
          title: "Gyökeres and Isak report high morale at breakfast camp in Gothenburg",
          bullets: [
            "Positive mood envelopes the Swedish camp during their morning gathering.",
            "Star forwards Viktor Gyökeres and Alexander Isak seen sharing tactics and discussing their partnership.",
            "Manager Graham Potter emphasizes team chemistry before next week's flight to North America."
          ],
          summary: "A warm and unified atmosphere is taking root in the Swedish national team training camp. During breakfast today in Gothenburg, strike partners Viktor Gyökeres and Alexander Isak were observed in deep discussion regarding their offensive movements. With the squad flying to their base camp in Dallas, Texas next week, Potter is utilizing these quiet team moments to build strong interpersonal bonds, which he believes will translate directly to fluid combinations on the pitch.",
          author: "Olof Lundh (Fotbollskanalen)",
          readTime: "3 min",
          tag: "Team Camp",
          relatedPlayers: ["viktor_gyokeres", "alexander_isak"]
        },
        {
          id: "art_23_1_2",
          category: "sweden",
          type: "Nyheter",
          title: "Carl Starfelt recovers from minor ankle knock, cleared for full practice",
          bullets: [
            "Celta Vigo defender Carl Starfelt successfully completes rehabilitation drills.",
            "Medical staff issues 100% clearance for full-intensity contact training.",
            "Graham Potter gains a full defensive cohort ahead of crucial warm-up games."
          ],
          summary: "Sweden has received a major boost as defender Carl Starfelt has been declared fully fit. Starfelt, who arrived at camp carrying a minor ankle knock from his final La Liga outing, took part in early individual drills yesterday and has now received full medical clearance. His availability ensures that Graham Potter has his entire defensive roster healthy and available for tactical preparations, intensifying competition for a spot in the starting back three.",
          author: "Johanna Frändén (Aftonbladet)",
          readTime: "2 min",
          tag: "Skadeuppdatering",
          relatedPlayers: ["carl_starfelt"]
        },
        {
          id: "art_23_1_3",
          category: "opponent",
          type: "Scouting",
          title: "Netherlands Camp: Koeman confident but voices concern over Memphis Depay's form",
          bullets: [
            "Netherlands manager Ronald Koeman states squad is ready for Sweden's physical threat.",
            "Expressed major reservations regarding Memphis Depay's lack of domestic match fitness.",
            "Identifies Sweden's rapid transition threat as the primary tactical concern."
          ],
          summary: "During a quiet morning media briefing in Vancouver, Dutch head coach Ronald Koeman spoke on the upcoming Group F showdown with Sweden. While praising the tactical structure of Graham Potter's team, Koeman expressed mounting worries over Memphis Depay, who is struggling to reach 100% match sharpness. 'Sweden plays with immense physical power and transition speed through Gyökeres and Isak. We cannot afford to give them cheap space,' Koeman warned, hinting at a highly compact defensive layout.",
          author: "Voetbal International",
          readTime: "4 min",
          tag: "Nederländerna Intel",
          relatedPlayers: ["viktor_gyokeres", "alexander_isak"]
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
          type: "Analys",
          title: "Potter addresses Kulusevski's injury absence and outlines new tactical setup",
          bullets: [
            "Graham Potter expresses deep sympathy for the injured Dejan Kulusevski.",
            "Confirms a fluid 3-4-2-1 tactical scheme is being tailored to maximize active stars.",
            "Highlights the joint offensive power of Isak and Gyökeres as the team's key spearhead."
          ],
          summary: "In a heavily attended morning press briefing, head coach Graham Potter discussed Sweden's tactical adaptability in the wake of Dejan Kulusevski's heartbreaking injury. Potter confirmed that while Kulusevski's absence is a blow, it has prompted the team to adopt a fluid 3-4-2-1 system. This structure will rely on two highly creative attacking midfielders playing behind a lone striker, or a dynamic front two featuring Alexander Isak playing off Viktor Gyökeres. 'Our strength is in our flexibility and our collective speed,' Potter remarked.",
          author: "Therese Strömberg (Expressen)",
          readTime: "5 min",
          tag: "Presskonferens",
          relatedPlayers: ["alexander_isak", "viktor_gyokeres"]
        },
        {
          id: "art_23_2_2",
          category: "sweden",
          type: "Blogg",
          title: "Young midfielder Lucas Bergvall named 'One to Watch' by FIFA technical committee",
          bullets: [
            "Tottenham Hotspur's 20-year-old midfielder singled out in official tournament previews.",
            "Potter praises Bergvall's tactical intelligence, noting he plays like a seasoned veteran.",
            "Team captains support the young prodigy to keep his feet firmly on the ground."
          ],
          summary: "A technical report released by FIFA has identified Sweden's Lucas Bergvall as one of the standout young talents to watch at the 2026 World Cup. The Tottenham Hotspur starlet has impressed coaches with his scanning frequency, dribbling under pressure, and spatial awareness. Graham Potter echoed these sentiments today: 'Lucas possesses an innate understanding of space. Age is just a number; if you are good enough, you are ready, and Lucas is absolutely ready.'",
          author: "Daniel Kristoffersson (Expressen)",
          readTime: "3 min",
          tag: "Stortalang",
          relatedPlayers: ["lucas_bergvall"]
        },
        {
          id: "art_23_2_3",
          category: "opponent",
          type: "Nyheter",
          title: "Japan wraps up tactical camp in Vancouver; Mitoma warns about Alexander Isak's pace",
          bullets: [
            "Kaoru Mitoma addresses Japanese journalists, warning of Sweden's counter-attacking danger.",
            "Japan wraps up high-tempo preparation matches with a comfortable 2-0 win.",
            "Manager Moriyasu devises special defensive block to curb Lucas Bergvall's space."
          ],
          summary: "Japan winger Kaoru Mitoma spent his morning interview warning his defensive line about Alexander Isak's intelligence and pace. 'I play against Alex in England; he is incredibly graceful, unpredictable, and fast,' Mitoma explained. Japanese head coach Hajime Moriyasu has spent multiple hours practicing low-block defensive movements, focusing heavily on cutting off line-breaking supply routes to Sweden's dual forwards.",
          author: "Nikkan Sports (Tokyo)",
          readTime: "3 min",
          tag: "Japan Intel",
          relatedPlayers: ["alexander_isak", "lucas_bergvall"]
        }
      ]
    },
    3: {
      timeLabel: "14:30",
      name: "Träningspass (Afternoon Pitch Training Update)",
      articles: [
        {
          id: "art_23_3_1",
          category: "sweden",
          type: "Nyheter",
          title: "Pitchside Report: Isak Hien dominates defensive drills in tactical session",
          bullets: [
            "Atalanta defender Isak Hien exhibits exceptional physicality in 11v11 practice match.",
            "Thwarts key attacks and receives applause for building direct plays from the back.",
            "Potter works extensively on defensive transitions and low-block recovery lines."
          ],
          summary: "Atalanta center-back Isak Hien put on a masterclass during this afternoon's high-intensity tactical session. In a simulated 11-a-side match, Hien was rock-solid, neutralizing several rapid offensive transitions led by Anthony Elanga. Graham Potter halted play multiple times to praise Hien's body positioning and decision-making when passing under pressure. Hien's formidable physical condition suggests he will be the central pillar of Sweden's defensive back three.",
          author: "Simon Bank (Aftonbladet)",
          readTime: "3 min",
          tag: "Träningsrapport",
          relatedPlayers: ["isak_hien", "anthony_elanga"]
        },
        {
          id: "art_23_3_2",
          category: "sweden",
          type: "Krönika",
          title: "Camp Diary: Yasin Ayari and Mattias Svanberg form impressive pivot in practice",
          bullets: [
            "Central midfielders Ayari and Svanberg demonstrate excellent telepathic chemistry.",
            "The duo dictates possession tempo and breaks lines during midfield transition drills.",
            "Strong indication they could form Sweden's starting midfield engine room."
          ],
          summary: "Sweden's midfield configuration is taking shape as Yasin Ayari and Mattias Svanberg clicked during tactical drills. The pairing combined Brighton's fluid short-passing style with Wolfsburg's physical box-to-box dynamism. They successfully navigated tight high-press situations, distributing crisp vertical balls to attacking players. If today's session is any indicator, Potter has found his preferred double-pivot to balance defensive duties and forward supply lines.",
          author: "Noa Bachner (Expressen)",
          readTime: "3 min",
          tag: "Taktisk Analys",
          relatedPlayers: ["yasin_ayari", "mattias_svanberg"]
        },
        {
          id: "art_23_3_3",
          category: "opponent",
          type: "Scouting",
          title: "Tunisia completes training camp with surprise additions; prepares defensive tactical wall",
          bullets: [
            "Tunisia coach Jalel Kadri praises his squad's heavy defensive discipline and solidity.",
            "Midfield anchor Ellyes Skhiri declared 100% fit to shield their central block.",
            "Tunisia schedules closed-door warm-up match to practice handling dual-striker setups."
          ],
          summary: "Reports out of the Tunisian camp in Montreal reveal that coach Jalel Kadri is building a compact, high-discipline low-block specifically engineered to stifle Sweden's attacking options. With Bundesliga veteran Ellyes Skhiri cleared to act as their anchor, Tunisia's practices have focused almost entirely on neutralizing high-cross scenarios and preventing Viktor Gyökeres from finding space inside the box.",
          author: "Tunis Afrique Presse",
          readTime: "3 min",
          tag: "Tunisien Intel",
          relatedPlayers: ["viktor_gyokeres"]
        }
      ]
    },
    4: {
      timeLabel: "18:00",
      name: "Taktik & Analys (Tactical Prep & Opponent Scouting)",
      articles: [
        {
          id: "art_23_4_1",
          category: "sweden",
          type: "Analys",
          title: "Tactical Deep-Dive: How Potter intends to unlock defenses without Kulusevski",
          bullets: [
            "Sweden to utilize aggressive, high-pushing wing-backs Holm and Gudmundsson.",
            "Alexander Isak granted free-roaming license to drift between lines and exploit space.",
            "Gyökeres tasked with pinning center-backs to create channels for arriving midfielders."
          ],
          summary: "Without Dejan Kulusevski's standard creative outlet, Graham Potter is redesigning Sweden's attacking mechanics. According to scout briefings, the tactical blueprint involves push-and-run wing-backs Emil Holm and Gabriel Gudmundsson stretching the pitch as wide as possible. This layout forces opposing lines to expand, allowing Alexander Isak to drift into half-spaces to collect the ball and drive forward. Meanwhile, the physical presence of Viktor Gyökeres will pin central defenders deep, opening direct passing lanes for late-running midfielders like Mattias Svanberg and Lucas Bergvall.",
          author: "Erik Niva (Aftonbladet)",
          readTime: "6 min",
          tag: "Taktisk Krönika",
          relatedPlayers: ["emil_holm", "gabriel_gudmundsson", "alexander_isak", "viktor_gyokeres"]
        },
        {
          id: "art_23_4_2",
          category: "sweden",
          type: "Nyheter",
          title: "Eric Smith's versatility highlights Potter's late-game defensive options",
          bullets: [
            "St. Pauli defensive ace excels in dual-role practice sessions.",
            "Can pivot effortlessly between central sweeper and holding midfielder.",
            "Provides crucial tactical insurance for high-pressure tournament situations."
          ],
          summary: "Eric Smith's inclusion in the World Cup squad is proving to be a masterstroke of tactical planning. In the evening tactical sessions, Smith was rotated between the central spot in the back three and a defensive midfield screening role. His exceptional passing range allows Sweden to transition instantly from a compact defensive 5-4-1 to an expansive 3-4-2-1. Potter praised his versatility: 'Eric is a tactical Swiss-Army knife. He reads the game so quickly that he gives us multiple solutions within a single game.'",
          author: "Frida Fagerlund (Aftonbladet)",
          readTime: "3 min",
          tag: "Truppdjup",
          relatedPlayers: ["eric_smith"]
        },
        {
          id: "art_23_4_3",
          category: "opponent",
          type: "Analys",
          title: "Opponent Deep-Dive: How the Netherlands' 3-4-3 shapes up against Sweden",
          bullets: [
            "Tactical analysts evaluate Ronald Koeman's signature 3-4-3 Dutch structure.",
            "Midfield battleground: Frenkie de Jong's distribution vs. Svanberg & Ayari's pressing pivot.",
            "Wide threat: Denzel Dumfries overlaps present major challenge for Gabriel Gudmundsson."
          ],
          summary: "A thorough tactical breakdown reveals a fascinating clash of styles. Ronald Koeman's Netherlands relies heavily on Frenkie de Jong dictating tempo from deep, while Denzel Dumfries operates almost as a right-winger. Sweden's Gabriel Gudmundsson will face an intense shift containing Dumfries' runs, while Sweden's double-pivot must apply rapid pressure to restrict de Jong's vision and direct passing lanes.",
          author: "Erik Niva (Aftonbladet)",
          readTime: "5 min",
          tag: "Motståndar-Analys",
          relatedPlayers: ["gabriel_gudmundsson", "mattias_svanberg", "yasin_ayari"]
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
          type: "Krönika",
          title: "Captain Victor Lindelöf: 'This is the most united Swedish squad I have ever led'",
          bullets: [
            "Aston Villa defender reflects on squad unity and the lack of individual egos.",
            "Emphasizes that debutants and superstar forwards are aligned in purpose.",
            "Expresses deep faith in Graham Potter's long-term tactical vision."
          ],
          summary: "In a quiet evening interview at the team hotel, captain Victor Lindelöf spoke warmly about the squad's internal culture. 'I have been in many national team squads, but the bond in this group is truly special. There are no cliques, no massive egos. Whether it's Alexander Isak who's starring in the Premier League, or Elliot Stroud who just joined from Mjällby, everyone treats each other with equal respect. We are playing for the flag, and we are ready to leave everything on the pitch,' Lindelöf declared.",
          author: "Robert Laul (Göteborgs-Posten)",
          readTime: "4 min",
          tag: "Exklusivt",
          relatedPlayers: ["victor_lindelof", "alexander_isak", "elliot_stroud"]
        },
        {
          id: "art_23_5_2",
          category: "sweden",
          type: "Blogg",
          title: "Viktor Gyökeres talks about Arsenal form and World Cup goals",
          bullets: [
            "The star striker discusses carrying his prolific club scoring form to the national team.",
            "Highlights his partnership with Alexander Isak as natural and highly fluid.",
            "Stresses the importance of starting the group stage with extreme energy."
          ],
          summary: "Fresh off a sensational season with Arsenal, Viktor Gyökeres is ready to carry Sweden's goal-scoring burden. Speaking late tonight, the forward discussed his scoring instincts: 'When you are in a good rhythm, the goal feels twice as wide. My focus is entirely on helping Sweden win. Playing with Alex Isak is a dream—we understand each other's runs instantly. We know the fans are expecting a lot, and we embrace that challenge.'",
          author: "Patrik Brenning (Aftonbladet)",
          readTime: "3 min",
          tag: "Spelar-Blogg",
          relatedPlayers: ["viktor_gyokeres", "alexander_isak"]
        },
        {
          id: "art_23_5_3",
          category: "opponent",
          type: "Scouting",
          title: "Japan Coach Moriyasu outlines high-intensity pressing plan to disrupt Swedish playmakers",
          bullets: [
            "Hajime Moriyasu outlines Japan's late-night tactical blueprint for the opening group clash.",
            "Plans to choke Sweden's build-up phase with high-frequency team-wide pressing.",
            "Focuses heavily on restricting Lucas Bergvall's space to turn in transitions."
          ],
          summary: "Speaking to Japanese sports media late tonight, coach Hajime Moriyasu made it clear that Japan will defend from the front. 'We will not let their playmakers get comfortable. We are training our midfield to press high, shutting down Bergvall and Ayari before they can find Isak or Gyökeres,' Moriyasu stated. This strategy aims to force Sweden into long, direct distributions that Japan's quick defenders are confident they can contain.",
          author: "Asahi Shimbun (Tokyo)",
          readTime: "4 min",
          tag: "Japan Taktik",
          relatedPlayers: ["lucas_bergvall", "yasin_ayari", "alexander_isak", "viktor_gyokeres"]
        }
      ]
    }
  }
};

// 3. Timeline State & Configurations
let SIMULATOR_ACTIVE = false;
let SIMULATED_HOUR = 9;    // Default 09:00
let SIMULATED_MINUTE = 40;  // Default 40
let ACTIVE_NEWS_TAB = "sweden";

// Converts HH:MM string to absolute minutes of the day
function timeToMinutes(timeStr) {
  const [h, m] = timeStr.split(":").map(Number);
  return h * 60 + m;
}

// Get user's current or simulated time of the day in absolute minutes
function getCurrentTimeMinutes() {
  if (SIMULATOR_ACTIVE) {
    return SIMULATED_HOUR * 60 + SIMULATED_MINUTE;
  }
  const now = new Date();
  return now.getHours() * 60 + now.getMinutes();
}

// Determine which update windows should be active for a given date
// - If the date is before May 23, 2026, all 5 updates are fully active
// - If the date is May 23, 2026, updates unlock sequentially based on current minutes
function getActiveUpdatesForDate(dateStr) {
  const targetDateVal = new Date(dateStr).getTime();
  const todayVal = new Date("2026-05-23").getTime();

  // If this date is in the absolute past, all 5 updates are unlocked
  if (targetDateVal < todayVal) {
    return [1, 2, 3, 4, 5];
  }

  // If this date is in the future, nothing is active yet
  if (targetDateVal > todayVal) {
    return [];
  }

  // Otherwise, it is the active simulation day (2026-05-23)
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

  // Early morning fallback for active day
  if (activeIds.length === 0) {
    return [1]; // Baseline frukost
  }

  return activeIds;
}

// Format a calendar timestamp based on the target date
function generateTimelineTimestamp(dateStr, timeLabel) {
  return `${dateStr} @ ${timeLabel}`;
}

// Countdown to the next update on May 23, 2026
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

// 4. Dom Interactivity and Rendering
document.addEventListener("DOMContentLoaded", () => {
  initApp();
});

function initApp() {
  renderPlayerGrid(PLAYERS);
  renderTacticalPitch();
  updateNewsDashboard();
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
  const dates = ["2026-05-23", "2026-05-22", "2026-05-21"]; // Ordered newest to oldest

  dates.forEach(dateStr => {
    const activeIds = getActiveUpdatesForDate(dateStr);
    if (activeIds.length === 0) return;

    // Outer Date Section Header for high visual clarity
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

    // Iterate backwards (newest hours first)
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

  // Bind article clicks
  document.querySelectorAll(".headline-link").forEach(link => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      const artId = link.getAttribute("data-article-id");
      openArticleModal(artId);
    });
  });

  // Update simulator UI indicators
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

// Render the 26-man grid
function renderPlayerGrid(playerList) {
  const grid = document.getElementById("player-grid-container");
  if (!grid) return;

  grid.innerHTML = "";

  if (playerList.length === 0) {
    grid.innerHTML = `
      <div class="no-players-found">
        <p>Inga spelare matchade sökningen.</p>
      </div>
    `;
    return;
  }

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

    card.addEventListener("click", () => {
      openPlayerModal(player.id);
    });
  });
}

// Render tactical pitch positions (3-4-2-1 formation)
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
    node.setAttribute("title", `${player.name} (${item.role})`);
    node.innerHTML = `
      <div class="jersey-node">${player.number}</div>
      <div class="node-name">${player.name.split(" ").pop()}</div>
    `;

    node.addEventListener("click", () => {
      openPlayerModal(player.id);
    });

    pitch.appendChild(node);
  });
}

// Find Article and its parent Date / Update info
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

// Open Player Profile Modal
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

// Update simulation displays and indicators
function updateSimulatorUI() {
  // Current active day timeline display
  const currentMinutes = getCurrentTimeMinutes();
  const timeBox = document.getElementById("sim-current-time-display");
  if (timeBox) {
    const h = String(Math.floor(currentMinutes / 60)).padStart(2, "0");
    const m = String(currentMinutes % 60).padStart(2, "0");
    timeBox.textContent = `${h}:${m}`;
  }

  // Toggle active highlights on simulated schedule list (May 23, 2026)
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
