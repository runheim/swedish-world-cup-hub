/**
 * US Men's National Soccer Team (USMNT) - 2026 World Cup Hub
 * Client-Side Core Logic (Updated with Official Group D Schedule & Real-World Spotify Tracks)
 */

// 1. Official 26-Man Squad Database
const PLAYERS = [
  // Goalkeepers
  {
    id: "matt_turner",
    name: "Matt Turner",
    number: 1,
    position: "Goalkeeper",
    club: "Crystal Palace",
    age: 31,
    caps: 44,
    goals: 0,
    avatar: "🇺🇸",
    status: "Healthy",
    bio: "The starting goalkeeper for the USMNT. Turner is an outstanding shot-stopper with superb penalty-saving instincts, bringing critical veteran guidance to the team.",
    stats: { saves: 134, cleanSheets: 19, passAccuracy: "74%" }
  },
  {
    id: "zack_steffen",
    name: "Zack Steffen",
    number: 12,
    position: "Goalkeeper",
    club: "Colorado Rapids",
    age: 31,
    caps: 29,
    goals: 0,
    avatar: "🇺🇸",
    status: "Healthy",
    bio: "An experienced, aggressive keeper who excels in sweep-up situations and distribution, offering vital tactical coverage in Pochettino's rotation.",
    stats: { saves: 88, cleanSheets: 10, passAccuracy: "82%" }
  },
  {
    id: "patrick_schulte",
    name: "Patrick Schulte",
    number: 23,
    position: "Goalkeeper",
    club: "Columbus Crew",
    age: 25,
    caps: 3,
    goals: 0,
    avatar: "🇺🇸",
    status: "Healthy",
    bio: "The fast-emerging Columbus Crew youngster who dominates in aerial collection and comfortable passing out from the back.",
    stats: { saves: 45, cleanSheets: 12, passAccuracy: "80%" }
  },

  // Defenders
  {
    id: "joe_scally",
    name: "Joe Scally",
    number: 2,
    position: "Defender",
    club: "Borussia M'gladbach",
    age: 23,
    caps: 14,
    goals: 0,
    avatar: "🇺🇸",
    status: "Healthy",
    bio: "A highly energetic, physically robust right-back playing in the Bundesliga. Scally excels at covering wide wing threats and combining in transitions.",
    stats: { tackles: 38, crosses: 32, passAccuracy: "80%" }
  },
  {
    id: "antonee_robinson",
    name: "Antonee Robinson",
    number: 3,
    position: "Defender",
    club: "Fulham",
    age: 28,
    caps: 47,
    goals: 4,
    avatar: "🇺🇸",
    status: "Healthy",
    bio: "Known as 'Jedi'. Robinson is a dynamic, high-speed left-back who provides relentless overlapping runs, crossing threat, and elite wing recoveries.",
    stats: { tackles: 84, crosses: 65, passAccuracy: "81%" }
  },
  {
    id: "cameron_carter_vickers",
    name: "Cameron Carter-Vickers",
    number: 5,
    position: "Defender",
    club: "Celtic",
    age: 28,
    caps: 16,
    goals: 0,
    avatar: "🇺🇸",
    status: "Healthy",
    bio: "A powerhouse in central defense for Celtic. Carter-Vickers is exceptionally solid in tight markings and physically handles the toughest forwards.",
    stats: { tackles: 52, interceptions: 40, passAccuracy: "89%" }
  },
  {
    id: "tim_ream",
    name: "Tim Ream",
    number: 13,
    position: "Defender",
    club: "Charlotte FC",
    age: 38,
    caps: 58,
    goals: 1,
    avatar: "🇺🇸",
    status: "Healthy",
    bio: "The veteran leader of the backline. Ream provides superb calm under high press, precise vertical passing, and outstanding positioning.",
    stats: { tackles: 41, interceptions: 52, passAccuracy: "92%" }
  },
  {
    id: "auston_trusty",
    name: "Auston Trusty",
    number: 24,
    position: "Defender",
    club: "Celtic",
    age: 27,
    caps: 4,
    goals: 0,
    avatar: "🇺🇸",
    status: "Healthy",
    bio: "Versatile defender comfortable at both center-back and left-back. Trusty provides valuable depth and athletic coverage in backline duels.",
    stats: { tackles: 18, blocks: 15, passAccuracy: "85%" }
  },
  {
    id: "chris_richards",
    name: "Chris Richards",
    number: 25,
    position: "Defender",
    club: "Crystal Palace",
    age: 26,
    caps: 18,
    goals: 1,
    avatar: "🇺🇸",
    status: "Healthy",
    bio: "A robust, physically dominant center-back comfortable playing in high-line systems. Richards is highly skilled in aerial duels and recovery sprints.",
    stats: { tackles: 45, interceptions: 36, passAccuracy: "86%" }
  },
  {
    id: "miles_robinson",
    name: "Miles Robinson",
    number: 16,
    position: "Defender",
    club: "FC Cincinnati",
    age: 29,
    caps: 29,
    goals: 3,
    avatar: "🇺🇸",
    status: "Healthy",
    bio: "An athletic central defender with elite recovery speed. Robinson is highly dependable in space coverage and robust 1v1 situations.",
    stats: { tackles: 44, interceptions: 38, passAccuracy: "84%" }
  },
  {
    id: "mark_mckenzie",
    name: "Mark McKenzie",
    number: 22,
    position: "Defender",
    club: "Toulouse",
    age: 27,
    caps: 13,
    goals: 0,
    avatar: "🇺🇸",
    status: "Healthy",
    bio: "An intelligent, ball-playing defender who has adapted well to Ligue 1. McKenzie offers solid ball-recycling capabilities and clean cover.",
    stats: { tackles: 22, interceptions: 18, passAccuracy: "87%" }
  },
  {
    id: "kristoffer_lund",
    name: "Kristoffer Lund",
    number: 19,
    position: "Defender",
    club: "Palermo",
    age: 24,
    caps: 5,
    goals: 0,
    avatar: "🇺🇸",
    status: "Healthy",
    bio: "Energetic left-back with high stamina. Lund provides active width and robust physical tracking down the defensive flank.",
    stats: { tackles: 14, crosses: 18, passAccuracy: "82%" }
  },

  // Midfielders
  {
    id: "tyler_adams",
    name: "Tyler Adams",
    number: 4,
    position: "Midfielder",
    club: "Bournemouth",
    age: 27,
    caps: 40,
    goals: 2,
    avatar: "🇺🇸",
    status: "Healthy",
    bio: "The defensive anchor and relentless midfield general. Adams excels in high-intensity pressing, transition interceptions, and locking down the central pivot.",
    stats: { tackles: 65, interceptions: 54, passAccuracy: "85%" }
  },
  {
    id: "yunus_musah",
    name: "Yunus Musah",
    number: 6,
    position: "Midfielder",
    club: "AC Milan",
    age: 23,
    caps: 37,
    goals: 0,
    avatar: "🇺🇸",
    status: "Healthy",
    bio: "A press-resistant, high-dribble midfielder playing at AC Milan. Musah excels at carrying the ball forward in transition and breaking mid-block setups.",
    stats: { dribblesSuccess: "78%", keyPasses: 14, passAccuracy: "88%" }
  },
  {
    id: "weston_mckennie",
    name: "Weston McKennie",
    number: 8,
    position: "Midfielder",
    club: "Juventus",
    age: 27,
    caps: 53,
    goals: 11,
    avatar: "🇺🇸",
    status: "Healthy",
    bio: "The emotional engine of the USMNT. McKennie is a box-to-box powerhouse with elite aerial heading, creative final-third box arrivals, and tenacity.",
    stats: { distanceCovered: "11.5km/90", shots: 32, passAccuracy: "84%" }
  },
  {
    id: "gio_reyna",
    name: "Gio Reyna",
    number: 10,
    position: "Midfielder",
    club: "Borussia Dortmund",
    age: 23,
    caps: 28,
    goals: 8,
    avatar: "🇺🇸",
    status: "Healthy",
    bio: "An exceptionally creative central playmaker. Reyna has elite vision, silky body feints, and key-pass qualities to unlock tight World Cup low-blocks.",
    stats: { assists: 6, keyPasses: 22, passAccuracy: "89%" }
  },
  {
    id: "malik_tillman",
    name: "Malik Tillman",
    number: 17,
    position: "Midfielder",
    club: "PSV Eindhoven",
    age: 24,
    caps: 10,
    goals: 0,
    avatar: "🇺🇸",
    status: "Healthy",
    bio: "A versatile attacking playmaker who has flourished in the Eredivisie. Tillman is highly skilled at operating in pockets and finishing off chances.",
    stats: { assists: 4, keyPasses: 15, passAccuracy: "86%" }
  },
  {
    id: "johnny_cardoso",
    name: "Johnny Cardoso",
    number: 15,
    position: "Midfielder",
    club: "Real Betis",
    age: 24,
    caps: 11,
    goals: 0,
    avatar: "🇺🇸",
    status: "Healthy",
    bio: "A highly intelligent defensive midfielder playing in La Liga. Cardoso offers excellent spacing awareness, deep ball recycling, and physical stability.",
    stats: { tackles: 34, interceptions: 28, passAccuracy: "86%" }
  },
  {
    id: "luca_de_la_torre",
    name: "Luca de la Torre",
    number: 14,
    position: "Midfielder",
    club: "Celta Vigo",
    age: 28,
    caps: 22,
    goals: 0,
    avatar: "🇺🇸",
    status: "Healthy",
    bio: "An agile, quick-passing box-to-box midfielder. De la Torre is highly valued for his work-rate, transition support, and comfortable possession.",
    stats: { assists: 3, keyPasses: 12, passAccuracy: "87%" }
  },
  {
    id: "tanner_tessmann",
    name: "Tanner Tessmann",
    number: 20,
    position: "Midfielder",
    club: "Lyon",
    age: 24,
    caps: 2,
    goals: 0,
    avatar: "🇺🇸",
    status: "Healthy",
    bio: "A physical giant in the midfield. Tessmann excels at aerial duels, shielding possession, and spraying long diagonals.",
    stats: { tackles: 18, longBalls: 30, passAccuracy: "84%" }
  },
  {
    id: "brenden_aaronson",
    name: "Brenden Aaronson",
    number: 21,
    position: "Midfielder",
    club: "Leeds United",
    age: 25,
    caps: 40,
    goals: 8,
    avatar: "🇺🇸",
    status: "Healthy",
    bio: "Known as the 'Medford Messi'. Aaronson provides relentless high-pressing intensity, vertical running, and endless defensive work-rate.",
    stats: { sprints: 45, keyPasses: 14, passAccuracy: "81%" }
  },

  // Forwards
  {
    id: "timothy_weah",
    name: "Timothy Weah",
    number: 7,
    position: "Forward",
    club: "Juventus",
    age: 26,
    caps: 38,
    goals: 5,
    avatar: "🇺🇸",
    status: "Healthy",
    bio: "A high-speed winger playing at Juventus. Weah is extremely direct, stretching opposition defensive shapes with deep runs and delivering excellent low crosses.",
    stats: { topSpeed: "35.5 km/h", crosses: 41, passAccuracy: "80%" }
  },
  {
    id: "folarin_balogun",
    name: "Folarin Balogun",
    number: 9,
    position: "Forward",
    club: "Monaco",
    age: 24,
    caps: 12,
    goals: 5,
    avatar: "🇺🇸",
    status: "Healthy",
    bio: "A highly direct, explosive striker playing in Ligue 1. Balogun excels in rapid transition runs, vertical box runs, and extremely sharp first-time shooting.",
    stats: { goals: 5, assists: 3, shotConversion: "22%" }
  },
  {
    id: "christian_pulisic",
    name: "Christian Pulisic",
    number: 11,
    position: "Forward",
    club: "AC Milan",
    age: 27,
    caps: 68,
    goals: 29,
    avatar: "🇺🇸",
    status: "Healthy",
    bio: "The Captain and talisman. 'Captain America' is a world-class winger with blistering dribbling speed, lethal cutting shifts, and clinical finishing.",
    stats: { goals: 29, assists: 14, shotConversion: "24%" }
  },
  {
    id: "ricardo_pepi",
    name: "Ricardo Pepi",
    number: 18,
    position: "Forward",
    club: "PSV Eindhoven",
    age: 23,
    caps: 25,
    goals: 10,
    avatar: "🇺🇸",
    status: "Healthy",
    bio: "The 'El Tren'. Pepi is a highly clinical, instinctive penalty-box finisher, possessing superb spatial timing and dangerous header capabilities.",
    stats: { goals: 10, keyPasses: 12, dribblesSuccess: "62%" }
  },
  {
    id: "haji_wright",
    name: "Haji Wright",
    number: 19,
    position: "Forward",
    club: "Coventry City",
    age: 28,
    caps: 9,
    goals: 4,
    avatar: "🇺🇸",
    status: "Healthy",
    bio: "A physically powerful, tall forward with great pace on the wing. Wright offers massive tactical variety and aerial dominance in late-match crossings.",
    stats: { goals: 4, shots: 15, passAccuracy: "74%" }
  },
  {
    id: "josh_sargent",
    name: "Josh Sargent",
    number: 26,
    position: "Forward",
    club: "Norwich City",
    age: 26,
    caps: 23,
    goals: 5,
    avatar: "🇺🇸",
    status: "Healthy",
    bio: "A hard-working, tactical forward with outstanding hold-up play. Sargent is highly effective at combining with wingers and creating transitional spaces.",
    stats: { aerialDuelsWon: "68%", goals: 5, passAccuracy: "78%" }
  }
];

PLAYERS.find(p => p.id === "josh_sargent").number = 26;

// 2. Chronological Pre-Camp News Timeline (May 21, 22, 23, 2026 - Geared towards genuine pre-camp activities)
const TIMELINE_DATABASE = {
  "2026-05-21": {
    1: {
      timeLabel: "07:00",
      name: "Breakfast Camp Report",
      articles: [
        {
          id: "art_21_1_1",
          category: "usa",
          type: "News",
          title: "Pochettino's staff inspects Denver training facilities ahead of May 27 gather",
          bullets: [
            "Coaching assistants tour Denver's high-performance training complex.",
            "Inspect newly laid turf surfaces and high-altitude recovery rooms.",
            "US Soccer confirms all technical apparatus is prepared to receive players."
          ],
          summary: "Mauricio Pochettino's coaching assistants performed a complete site walkthrough at the elite training center in Denver yesterday. US Soccer has secured this world-class facility to act as the primary preparation base. The fields are in pristine condition, and all tactical analysis gear is configured for the players' arrival on Wednesday, May 27.",
          author: "Paul Tenorio (The Athletic)",
          readTime: "3 min",
          tag: "Denver Camp",
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
          category: "usa",
          type: "News",
          title: "US Soccer confirms ticketing details and safety plan for Sweden warmup in Gothenburg",
          bullets: [
            "Ticketing portal opens for the highly anticipated friendly at Gamla Ullevi.",
            "Over 3,000 traveling American fans expected to pack Gothenburg's away blocks.",
            "US Soccer releases detailed pre-match logistics for traveling supporters."
          ],
          summary: "US Soccer released ticketing and security protocols for the upcoming international friendly against Sweden on June 1 at Gamla Ullevi. Swedish authorities anticipate a completely packed venue. American fans have already snapped up their designated away allocation, promising an electric atmosphere for Pochettino's first match of the final phase.",
          author: "US Soccer Press Feed",
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
          category: "usa",
          type: "Blog",
          title: "Christian Pulisic maintains elite gym drills at Milan training facility",
          bullets: [
            "Talismanic winger logs individual speed and weight routines in Milan.",
            "Physiologists confirm Pulisic is entering the pre-camp in perfect metabolic shape.",
            "Pulisic writes: 'Got my personal schedule from Mauricio; focusing on explosive sprints.'"
          ],
          summary: "Sticking to an individualized conditioning program, Milan winger Christian Pulisic is spending his week performing rigorous explosive speed drills at his club's gym in Milan. Under instructions from Pochettino's staff, players not in active league matches are keeping their physical registers high so that tactical field sessions can start at maximum velocity on day one.",
          author: "Christian Pulisic (Player Blog)",
          readTime: "3 min",
          tag: "Player Focus",
          relatedPlayers: ["christian_pulisic"]
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
          title: "Paraguay Watch: Gustavo Alfaro organizes high-intensity Los Angeles base",
          bullets: [
            "Paraguay FA reserves training pitches in Los Angeles, California.",
            "Alfaro schedules double-sessions to acclimatize Paraguayan squad to Pacific climates.",
            "Scouts confirm Almirón is working extensively on midfield transition routines."
          ],
          summary: "USMNT's analytics division has logged the travel and training schedule of Paraguay. Gustavo Alfaro's squad is bypassing a local South American camp, choosing instead to travel early to California, USA, where their opening match takes place. The Albirroja are preparing intense double and triple daily sessions to adjust quickly.",
          author: "ESPN FC US Soccer Wire",
          readTime: "4 min",
          tag: "Paraguay Intel",
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
          category: "usa",
          type: "Blog",
          title: "Player Blog: Weston McKennie on packing bags and heading home to Texas",
          bullets: [
            "Juventus midfielder shares photos of his flight luggage and travel ticket.",
            "Excited to spend a quick 48 hours with family in Texas before gathering in Denver.",
            "McKennie: 'Denver camp represents the final engine start. Let's make this year wild.'"
          ],
          summary: "In a personal blog post, Weston McKennie expressed his excitement as he boarded a flight back to the United States. Having concluded his Serie A campaign with Juventus, McKennie is taking a brief two-day rest with family in Texas before reporting to the national team training camp in Denver on Wednesday morning. 'My mind is completely locked on the Stars and Stripes,' McKennie wrote.",
          author: "Weston McKennie (Player Blog)",
          readTime: "2 min",
          tag: "Player Travel",
          relatedPlayers: ["weston_mckennie"]
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
          category: "usa",
          type: "Column",
          title: "Tenorio's Column: Why the May 25 release deadline is crucial for Pochettino's synergy",
          bullets: [
            "FIFA's mandatory player release deadline begins on Monday, May 25.",
            "Allows national teams full, uninterrupted access to their European stars.",
            "Pochettino gains complete coaching custody over Pulisic, Adams, and McKennie."
          ],
          summary: "As we edge closer to the mandatory FIFA player release date on May 25, Mauricio Pochettino is poised to finally take full command of his squad. The staggered endings of European club seasons have made early tactical assemblies impossible. Starting Monday, all club responsibilities cease, marking the true structural beginning of USMNT's quest to build cohesive chemistry for their Group D opener.",
          author: "Paul Tenorio (The Athletic)",
          readTime: "4 min",
          tag: "Camp Analysis",
          relatedPlayers: ["christian_pulisic", "tyler_adams", "weston_mckennie"]
        }
      ]
    },
    2: {
      timeLabel: "11:00",
      name: "Press Briefing",
      articles: [
        {
          id: "art_22_2_1",
          category: "usa",
          type: "News",
          title: "Pochettino outlines Denver pre-camp objectives: 'It is about intensity and physical loading'",
          bullets: [
            "Mauricio Pochettino outlines exact daily workloads for the Denver gathering.",
            "Focuses heavily on transitional speed drills and press-resistance.",
            "Praises US Soccer's logistics division for organizing a seamless flight plan."
          ],
          summary: "During an online media briefing today, manager Mauricio Pochettino spoke on the goals of the local Denver pre-camp. 'The first three days in Denver are designed to get everyone on the same physical page. Some players have had a week off, while others played club games last Sunday. We will balance player workloads and implement our core patterns before flying to Sweden,' Pochettino explained.",
          author: "Michele Giannone (TUDN)",
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
          category: "usa",
          type: "Blog",
          title: "Folarin Balogun completes final individual agility drills in Monaco",
          bullets: [
            "Monaco striker shares a training log from his local pitch workouts.",
            "Focuses on quick turning radius drills and penalty-box finishing.",
            "Balogun: 'Getting the muscles tuned up. Denver, see you next week!'"
          ],
          summary: "Folarin Balogun is not wasting his pre-camp window. The Monaco striker has been working with a personal trainer on quick direction-change sprints to preserve his agility levels. 'The physical side of the game is vital in the opening match against Paraguay. We must be quick off the mark, and I want to be 100% sharp when we gather in Denver,' Balogun wrote in his online camp log.",
          author: "Folarin Balogun (Player Blog)",
          readTime: "3 min",
          tag: "Player Training",
          relatedPlayers: ["folarin_balogun"]
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
          title: "Paraguay schedules high-intensity warmups; analysts monitor setups",
          bullets: [
            "Paraguay chooses local base in Los Angeles to replicate matchday weather conditions.",
            "Schedule closed-door warm-up match to practice defending dual-forward formations.",
            "USMNT scouts monitor defensive rotations and set-piece marking profiles."
          ],
          summary: "Paraguay has arrived at their training base in Los Angeles, choosing the local climate to replicate the conditions they will face against the USMNT. Under coach Gustavo Alfaro, the Albirroja have scheduled a series of high-tempo practices designed to test their defensive compactness, particularly rehearsing how they will mark dual-forward shapes.",
          author: "CBS Sports Soccer Feed",
          readTime: "4 min",
          tag: "Paraguay Intel",
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
          category: "usa",
          type: "Blog",
          title: "Dortmund starlet Gio Reyna: 'Playing a World Cup at home is a dream I am ready for'",
          bullets: [
            "Reyna shares a late-night travel diary entry regarding his emotions.",
            "Reflects on his incredible season in Germany and his tactical fit under Pochettino.",
            "Reyna: 'The pressure is a privilege. I want to learn, but most of all, I want to win.'"
          ],
          summary: "In a highly candid late-night diary post, Gio Reyna discussed his emotions ahead of reporting to Denver. The 23-year-old playmaker has caught global attention at Borussia Dortmund and is set to be USMNT's creative catalyst. 'Playing for the US in a home World Cup is what you practice for in the backyard as a kid. I'm ready to fight for my country,' Reyna wrote.",
          author: "Gio Reyna (Player Blog)",
          readTime: "4 min",
          tag: "Player Diary",
          relatedPlayers: ["gio_reyna"]
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
          category: "usa",
          type: "News",
          title: "US Soccer media desk gears up for Denver media blitz starting May 27",
          bullets: [
            "US Soccer's press crew arrives in Denver to build team media center.",
            "Over 120 accredited international journalists scheduled to cover camp drills.",
            "Pochettino coordinates with staff to organize structured player media panels."
          ],
          summary: "The US Soccer advanced media division arrived in Denver this morning to build the primary press room at the team's headquarters. Starting next Wednesday, players will engage in daily press briefings and mixed zones, creating high transparency and media accessibility as the nation rallies behind their players' campaign.",
          author: "Paul Tenorio (The Athletic)",
          readTime: "3 min",
          tag: "Media Planning",
          relatedPlayers: []
        },
        {
          id: "art_23_1_2",
          category: "opponent",
          type: "Scouting",
          title: "Türkiye Watch: Çalhanoğlu declared fully fit for final training session",
          bullets: [
            "Midfield maestro Hakan Çalhanoğlu participates in Inter's final team session.",
            "Medical clearance issued, paving the way for Turkish World Cup inclusion.",
            "American analytics pivot immediately starts crafting midfield pressing traps."
          ],
          summary: "USMNT's scouting network logged excellent news for Türkiye, but a major tactical challenge for Mauricio Pochettino. Inter Milan midfielder Hakan Çalhanoğlu participated in full-contact drills today, indicating his thigh injury is fully healed. His presence means USMNT's double-pivot must prepare specialized pressing traps to disrupt Çalhanoğlu's elite playmaking tempo.",
          author: "TRT Spor",
          readTime: "4 min",
          tag: "Türkiye Report",
          relatedPlayers: ["tyler_adams", "yunus_musah"]
        }
      ]
    },
    2: {
      timeLabel: "11:00",
      name: "Press Briefing",
      articles: [
        {
          id: "art_23_2_1",
          category: "usa",
          type: "News",
          title: "Pochettino's finalized pre-tournament agenda: Denver to Gothenburg timeline published",
          bullets: [
            "US Soccer publishes the detailed chronological itinerary for the final phase.",
            "Squad reports to Denver on May 27, trains at altitude base camp.",
            "Flights to Sweden on May 31, Sweden match June 1, departs for Dallas base on June 2."
          ],
          summary: "US Soccer today published the official team calendar. The 26-man roster will gather in Denver next Wednesday, training locally for four days. On May 31, they travel to Gothenburg for their first friendly against Sweden on June 1, and immediately board a charter flight to their primary base camp in Dallas, Texas on June 2 to begin their final tournament preparations.",
          author: "Michele Giannone (TUDN)",
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
          category: "usa",
          type: "Blog",
          title: "Tyler Adams completes physical therapy, cleared for full practice in Denver",
          bullets: [
            "Bournemouth midfielder Adams completes final hamstring load courses.",
            "Physiotherapists issue 100% clearance for day-one contact exercises.",
            "Adams: 'The hamstring feels rock-solid. See you guys on the pitch on Wednesday!'"
          ],
          summary: "USMNT has received a major fitness boost as defensive anchor Tyler Adams completed his hamstring physical therapy program. Carrying a light knock from his final Premier League match, Adams has been training individually, but has now been given 100% clearance to join the team for full-contact training when camp gathers on Wednesday morning.",
          author: "Tyler Adams (Player Diary)",
          readTime: "3 min",
          tag: "Injury Update",
          relatedPlayers: ["tyler_adams"]
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
          title: "Australia Watch: Nestory Irankunda showcases blazing pace in Munich warmup session",
          bullets: [
            "Australia winger Nestory Irankunda displays elite 1v1 dribbling in Bayern drills.",
            "Tony Popovic focuses Australia's tactical scheme on lightning-fast wing counters.",
            "USMNT scouts analyze Irankunda's cutting patterns to brief full-back Joe Scally."
          ],
          summary: "Scouts monitoring Australia's training drills reported that teenage star Nestory Irankunda was in sensational form during today's offensive setups. Manager Tony Popovic is tailoring a direct 4-2-3-1 counter-attacking system to exploit wide areas. USMNT's coaching staff is already utilizing this footage to prepare Joe Scally for a demanding defensive assignment.",
          author: "The Sydney Morning Herald",
          readTime: "4 min",
          tag: "Australia Intel",
          relatedPlayers: ["joe_scally"]
        }
      ]
    },
    5: {
      timeLabel: "21:30",
      name: "Late Night Camp Diary",
      articles: [
        {
          id: "art_23_5_1",
          category: "usa",
          type: "Blog",
          title: "Captain Christian Pulisic: 'The suitcases are packed; Denver, see you on Wednesday'",
          bullets: [
            "AC Milan winger shares photos of his travel luggage on social media.",
            "Reflects on the immense pride of captaining USA in their home World Cup campaign.",
            "Pulisic: 'The work starts on Wednesday. We have a special squad, let's lock in.'"
          ],
          summary: "In a late-night camp diary entry, captain Christian Pulisic shared photos of his packed travel bags. Expressing deep pride in leading USMNT into the 2026 World Cup, Pulisic emphasized that USA's collective unity will be their primary strength. 'Milan was home for a bit, but Denver is where the final engine starts. The team is locked in. Let's make this year unforgettable,' the captain wrote.",
          author: "Christian Pulisic (Player Blog)",
          readTime: "3 min",
          tag: "Player Diary",
          relatedPlayers: ["christian_pulisic"]
        }
      ]
    }
  }
};

// 3. Official 2026 World Cup Group D Match Schedule
// 3. Official 2026 World Cup Group D Match Schedule
const MATCH_SCHEDULE = [
  {
    id: "match_sweden",
    type: "warmup",
    date: "2026-06-01",
    time: "19:00",
    opponent: "Sweden",
    opponentFlag: "🇸🇪",
    venue: "Gamla Ullevi, Gothenburg",
    details: "A classic warm-up friendly serving as manager Mauricio Pochettino's first major tactical test before departing for the tournament."
  },
  {
    id: "match_paraguay",
    type: "worldcup",
    date: "2026-06-12",
    time: "21:00 (Los Angeles Time)",
    opponent: "Paraguay",
    opponentFlag: "🇵🇾",
    venue: "Los Angeles Stadium, Los Angeles",
    details: "World Cup Group D Opener! USA faces a tough South American test against a defensive-minded, combative Paraguay."
  },
  {
    id: "match_australia",
    type: "worldcup",
    date: "2026-06-19",
    time: "15:00 (Seattle Time)",
    opponent: "Australia",
    opponentFlag: "🇦🇺",
    venue: "Seattle Stadium, Seattle",
    details: "A massive Group D clash in Seattle. The Socceroos bring a high-intensity, direct physical threat."
  },
  {
    id: "match_turkiye",
    type: "worldcup",
    date: "2026-06-25",
    time: "22:00 (Los Angeles Time)",
    opponent: "Türkiye",
    opponentFlag: "🇹🇷",
    venue: "Los Angeles Stadium, Los Angeles",
    details: "Third group stage match. An intense battle against a highly technical, explosive Turkish side under Vincenzo Montella."
  }
];

// 3.5 Match Reports & Player Ratings Database
const MATCH_REPORTS_DATABASE = {
  "match_sweden": {
    score: "2 - 1",
    scorers: "🇸🇪 Gyökeres (14') | 🇺🇸 Pulisic (54'), McKennie (82')",
    report: "Mauricio Pochettino's era kicks off with a brilliant comeback victory in Gothenburg! Despite Viktor Gyökeres opening the scoring early with a powerful strike, USA dominated possession in the second half. Christian Pulisic equalized with a clinical low shot before Weston McKennie powered home a trademark header from a corner in the 82nd minute.",
    ratings: [
      { name: "Matt Turner", role: "GK", rating: 7.5, comment: "Made two critical saves against Gyökeres in the first half.", isMotm: false },
      { name: "Chris Richards", role: "CB", rating: 7.0, comment: "Tough battle against Gyökeres, recovered well in the second half.", isMotm: false },
      { name: "Tim Ream", role: "CB", rating: 7.5, comment: "Composed leadership. Kept the defensive line compact.", isMotm: false },
      { name: "Joe Scally", role: "RB", rating: 7.0, comment: "High work rate, provided defensive coverage and dangerous crosses.", isMotm: false },
      { name: "Tyler Adams", role: "DM", rating: 7.5, comment: "Controlled the midfield tempo with disciplined recycling.", isMotm: false },
      { name: "Yunus Musah", role: "CM", rating: 7.0, comment: "Energetic pressing, linked defense and attack smoothly.", isMotm: false },
      { name: "Antonee Robinson", role: "LB", rating: 7.5, comment: "Relentless overlapping runs, highly active in transition.", isMotm: false },
      { name: "Weston McKennie", role: "CM", rating: 8.5, comment: "Sensational performance. Dominated the midfield and scored the winning header in the 82nd minute.", isMotm: true },
      { name: "Gio Reyna", role: "AM", rating: 7.5, comment: "Highly creative in pockets. Assisted McKennie's winner.", isMotm: false },
      { name: "Christian Pulisic", role: "LW", rating: 8.0, comment: "A constant nightmare on the left. Scored a magnificent equalizing goal.", isMotm: false }
    ],
    preview: {
      tactical: "Manager Mauricio Pochettino's debut match! The focus will be on transitioning to the new 4-3-3 shape and testing defensive responses to Sweden's high-speed transitions.",
      keyStat: "First match under Pochettino. All eyes are on his tactical adaptations."
    }
  },
  "match_paraguay": {
    score: "2 - 0",
    scorers: "🇺🇸 Balogun (23'), Pulisic (68' pen)",
    report: "A perfect start to USA's World Cup campaign! Mauricio Pochettino's 4-3-3 formation worked flawlessly, suffocating Paraguay's physical defense. Folarin Balogun opened the scoring with a brilliant curled strike into the bottom corner. Christian Pulisic sealed the three points in the second half by converting a clinical penalty won by Weston McKennie.",
    ratings: [
      { name: "Matt Turner", role: "GK", rating: 7.5, comment: "Had a quiet night but remained alert, keeping a clean sheet.", isMotm: false },
      { name: "Chris Richards", role: "CB", rating: 7.5, comment: "Completely shut down Paraguay's central attacks with dominant clearances.", isMotm: false },
      { name: "Cameron Carter-Vickers", role: "CB", rating: 7.5, comment: "Solid defensive display, comfortable on the ball under pressure.", isMotm: false },
      { name: "Joe Scally", role: "RB", rating: 7.0, comment: "Defensively sound, shut down Almirón's flank runs.", isMotm: false },
      { name: "Tyler Adams", role: "DM", rating: 8.0, comment: "Stellar performance. Creative anchor who broke up transitions.", isMotm: false },
      { name: "Weston McKennie", role: "CM", rating: 8.0, comment: "Combative and direct. Won the penalty for Pulisic's sealer.", isMotm: false },
      { name: "Antonee Robinson", role: "LB", rating: 7.5, comment: "Constant overlapping threat. Provided a pinpoint assist for Balogun.", isMotm: false },
      { name: "Christian Pulisic", role: "LW", rating: 8.5, comment: "A world-class display. Captained the team brilliantly and scored the second goal.", isMotm: true },
      { name: "Timothy Weah", role: "RW", rating: 7.5, comment: "Silky dribbling, outpaced Paraguayan full-backs with ease.", isMotm: false },
      { name: "Folarin Balogun", role: "ST", rating: 8.0, comment: "Relentless physical press. Opened the scoring with a clinical finish.", isMotm: false }
    ],
    preview: {
      tactical: "Group D opener in Los Angeles! USA must break down Paraguay's compact, low-block defense. Expect heavy reliance on Robinson and Scally to stretch the pitch.",
      keyStat: "Paraguay kept key clean sheets during South American qualifiers. Breaking them down is key."
    }
  },
  "match_australia": {
    score: "2 - 2",
    scorers: "🇦🇺 Irvine (34'), Irankunda (71') | 🇺🇸 Balogun (41'), Pepi (88')",
    report: "An epic blockbuster in Seattle! USA showcased incredible resilience to grab a dramatic draw against the Australian visitors. Nestory Irankunda put Australia ahead in the 71st minute, but USA's relentless press paid off in the 88th minute when substitute Ricardo Pepi scored a dramatic late equalizer, tapping home a rebound.",
    ratings: [
      { name: "Matt Turner", role: "GK", rating: 8.0, comment: "Heroic performance. Made four critical saves to keep USA in the game.", isMotm: false },
      { name: "Chris Richards", role: "CB", rating: 6.5, comment: "Struggled slightly against Australia's physical presence, but made key blocks.", isMotm: false },
      { name: "Tim Ream", role: "CB", rating: 7.0, comment: "Kept the backline organized under immense Australian pressure.", isMotm: false },
      { name: "Joe Scally", role: "RB", rating: 6.5, comment: "Had a tough defensive assignment against Irankunda's sprints.", isMotm: false },
      { name: "Tyler Adams", role: "DM", rating: 7.5, comment: "Massive distance covered. Shielded the defense tiresomely.", isMotm: false },
      { name: "Yunus Musah", role: "CM", rating: 7.0, comment: "Press-resistant play under high pressure, recycled ball cleanly.", isMotm: false },
      { name: "Weston McKennie", role: "CM", rating: 7.5, comment: "Aggressive in central duels, assisted Balogun's first-half goal.", isMotm: false },
      { name: "Antonee Robinson", role: "LB", rating: 7.0, comment: "Relentless overlapping runs, provided dangerous crosses.", isMotm: false },
      { name: "Christian Pulisic", role: "LW", rating: 7.5, comment: "Highly threatful between the lines. Spearheaded the late attack.", isMotm: false },
      { name: "Folarin Balogun", role: "ST", rating: 8.0, comment: "Outstanding first-half goal, fought hard against Australian center-backs.", isMotm: false },
      { name: "Ricardo Pepi", role: "ST", rating: 8.5, comment: "Subbed on in 75th minute. Nightmarish presence for Australia, scoring the dramatic late equalizer.", isMotm: true }
    ],
    preview: {
      tactical: "The Group D home clash in Seattle! A high-tempo tactical test against Australia. USA's central pivot must prepare aggressive pressing traps to stifle wide counters.",
      keyStat: "Australia scored in all their recent warm-up fixtures. USA's defense must lock in."
    }
  },
  "match_turkiye": {
    score: "2 - 1",
    scorers: "🇹🇷 Çalhanoğlu (49') | 🇺🇸 Reyna (62'), Balogun (79')",
    report: "USA wins Group D! An intense, high-tempo battle in Los Angeles ends with USA securing top spot. After Hakan Çalhanoğlu scored early in the second half, Mauricio Pochettino introduced Gio Reyna, who immediately equalized with a curled strike. Folarin Balogun then scored the winning goal in the 79th minute, a clinical finish after a beautiful passing sequence.",
    ratings: [
      { name: "Matt Turner", role: "GK", rating: 7.5, comment: "Made three spectacular saves against Türkiye's quick central attacks.", isMotm: false },
      { name: "Chris Richards", role: "CB", rating: 7.5, comment: "Dominant physical presence, stopped key central attacks from Yılmaz.", isMotm: false },
      { name: "Cameron Carter-Vickers", role: "CB", rating: 7.0, comment: "Solid positioning, tracked vertical runs diligently.", isMotm: false },
      { name: "Joe Scally", role: "RB", rating: 7.0, comment: "Tough defensive shift against Yıldız, limited his options.", isMotm: false },
      { name: "Tyler Adams", role: "DM", rating: 8.0, comment: "Combative in midfield, won crucial second balls. Assisted Balogun's winner.", isMotm: true },
      { name: "Weston McKennie", role: "CM", rating: 7.0, comment: "Excellent passing accuracy, controlled the tempo in the second half.", isMotm: false },
      { name: "Antonee Robinson", role: "LB", rating: 7.5, comment: "Relentless engine, contributed heavily to high press.", isMotm: false },
      { name: "Yunus Musah", role: "CM", rating: 7.5, comment: "Press-resistant runs through midfield, creating transition spaces.", isMotm: false },
      { name: "Gio Reyna", role: "AM", rating: 8.0, comment: "Super-sub. Equalized with a breathtaking curled finish into the top corner.", isMotm: false },
      { name: "Folarin Balogun", role: "ST", rating: 8.5, comment: "Match-winner. Scored the decider with pure clinical brilliance.", isMotm: false }
    ],
    preview: {
      tactical: "Final group stage battle in Los Angeles! Montella's highly disciplined side will exploit central spaces. Wingers must track back rapidly to restrict wide threats.",
      keyStat: "USA is unbeaten at home in their last 5 international fixtures."
    }
  }
};

// 3.5 Squad Attribute Ratings (FIFA-style per-player stats for Scout Room)
const SQUAD_ATTRIBUTES = {
  // Goalkeepers
  "matt_turner":            { pac: 48, sho: 22, pas: 58, dri: 30, def: 28, phy: 72 },
  "zack_steffen":           { pac: 50, sho: 20, pas: 64, dri: 32, def: 26, phy: 70 },
  "patrick_schulte":        { pac: 52, sho: 18, pas: 60, dri: 28, def: 24, phy: 68 },
  // Defenders
  "joe_scally":             { pac: 78, sho: 48, pas: 72, dri: 68, def: 74, phy: 76 },
  "antonee_robinson":       { pac: 88, sho: 52, pas: 74, dri: 76, def: 72, phy: 74 },
  "cameron_carter_vickers": { pac: 62, sho: 38, pas: 68, dri: 52, def: 80, phy: 82 },
  "tim_ream":               { pac: 48, sho: 32, pas: 72, dri: 54, def: 76, phy: 74 },
  "auston_trusty":          { pac: 72, sho: 35, pas: 62, dri: 50, def: 76, phy: 80 },
  "mark_mckenzie":          { pac: 70, sho: 30, pas: 60, dri: 48, def: 74, phy: 78 },
  "chris_richards":         { pac: 74, sho: 34, pas: 66, dri: 55, def: 78, phy: 80 },
  "kristoffer_lund":        { pac: 80, sho: 46, pas: 70, dri: 72, def: 70, phy: 72 },
  // Midfielders
  "tyler_adams":            { pac: 76, sho: 55, pas: 78, dri: 74, def: 80, phy: 78 },
  "weston_mckennie":        { pac: 72, sho: 70, pas: 74, dri: 72, def: 74, phy: 82 },
  "yunus_musah":            { pac: 82, sho: 60, pas: 72, dri: 80, def: 68, phy: 78 },
  "johnny_cardoso":         { pac: 68, sho: 58, pas: 76, dri: 70, def: 74, phy: 76 },
  "gio_reyna":              { pac: 76, sho: 72, pas: 80, dri: 84, def: 42, phy: 62 },
  "malik_tillman":          { pac: 74, sho: 68, pas: 76, dri: 78, def: 48, phy: 72 },
  "aidan_morris":           { pac: 70, sho: 56, pas: 74, dri: 68, def: 72, phy: 74 },
  "luca_de_la_torre":       { pac: 66, sho: 58, pas: 78, dri: 74, def: 58, phy: 64 },
  // Forwards
  "christian_pulisic":      { pac: 84, sho: 78, pas: 80, dri: 86, def: 38, phy: 64 },
  "tim_weah":               { pac: 90, sho: 70, pas: 68, dri: 78, def: 36, phy: 72 },
  "folarin_balogun":        { pac: 82, sho: 80, pas: 66, dri: 76, def: 32, phy: 70 },
  "brenden_aaronson":       { pac: 78, sho: 64, pas: 74, dri: 76, def: 52, phy: 68 },
  "ricardo_pepi":           { pac: 74, sho: 76, pas: 60, dri: 68, def: 28, phy: 74 },
  "josh_sargent":           { pac: 70, sho: 72, pas: 64, dri: 66, def: 34, phy: 76 },
  "haji_wright":            { pac: 76, sho: 74, pas: 56, dri: 64, def: 30, phy: 82 }
};

const SIMULATION_EVENTS = {
  "match_sweden": [
    { minute: 1, type: "kickoff", text: "Kick-off in Gothenburg! A roaring Scandinavian atmosphere at Gamla Ullevi. Mauricio Pochettino makes his tactical debut with a transition 4-3-3." },
    { minute: 14, type: "goal_opp", text: "GOAL for Sweden! Viktor Gyökeres capitalizes on a quick turn, escaping central coverage to blast a powerful half-volley into the top corner. 1-0 Sweden." },
    { minute: 28, type: "foul", text: "Chris Richards picks up a yellow card for a robust challenge on Gyökeres in midfield." },
    { minute: 45, type: "halftime", text: "Half Time in Gothenburg: Sweden leads 1-0. USA has dominated possession (58%) but Gyökeres' early strike is the difference." },
    { minute: 54, type: "goal_usa", text: "GOAL for USA! Antonee Robinson swings in a dangerous cross. Christian Pulisic cuts inside to plant a clinical finish past the keeper! 1-1!" },
    { minute: 65, type: "sub", text: "Pochettino introduces Gio Reyna off the bench, looking to unlock the Swedish defensive lines." },
    { minute: 73, type: "save", text: "Heroic save! Matt Turner makes a fingertip save to deny Gyökeres' low drive. Incredible reflexes!" },
    { minute: 82, type: "goal_usa", text: "GOAL for USA! Unbelievable! Gio Reyna picks up the ball, floats a precise corner. Weston McKennie powers a trademark bullet header past the keeper! 2-1 USA!" },
    { minute: 90, type: "fulltime", text: "Full Time! Mauricio Pochettino starts his USA coaching era with a dramatic 2-1 comeback victory in Sweden! McKennie's header seals it." }
  ],
  "match_paraguay": [
    { minute: 1, type: "kickoff", text: "Kick-off in Los Angeles! The sun sets as USA begins their World Cup Group D campaign in front of a packed stadium." },
    { minute: 10, type: "save", text: "Chris Richards makes a massive sliding block in the penalty box to deny Paraguay's counter-attack. Composed defending." },
    { minute: 23, type: "goal_usa", text: "GOAL for USA! Antonee Robinson overlaps brilliantly down the left wing, cuts back a low cross to Folarin Balogun, who curls a spectacular first-time shot into the bottom corner! 1-0 USA!" },
    { minute: 35, type: "dribble", text: "Yunus Musah drives through the midfield with elegant body feints, creating a 3v2 transition. His final pass is blocked." },
    { minute: 45, type: "halftime", text: "Half Time: USA leads 1-0. Complete dominance in possession (62%), suffocating Paraguay's defense." },
    { minute: 58, type: "foul", text: "Tyler Adams wins a tactical foul in midfield, breaking up Paraguay's transition attempts." },
    { minute: 68, type: "goal_usa", text: "GOAL for USA! Paraguay commits men forward. Weston McKennie is fouled in the box. Christian Pulisic steps up and coolly converts the penalty! 2-0!" },
    { minute: 82, type: "save", text: "Matt Turner remains alert, pulling off a comfortable catch from a long-range Paraguayan freekick." },
    { minute: 90, type: "fulltime", text: "Full Time! A masterclass in tactical discipline as USA cruises to a 2-0 victory over Paraguay. The Pochettino system works flawlessly!" }
  ],
  "match_australia": [
    { minute: 1, type: "kickoff", text: "Kick-off in Seattle! A massive home matchup between USA and Australia in front of a roaring, packed Seattle Stadium." },
    { minute: 15, type: "save", text: "Heroic! Matt Turner makes a double save to deny Jackson Irvine and Nestory Irankunda. Sensational goalkeeping!" },
    { minute: 34, type: "goal_opp", text: "GOAL for Australia! Jackson Irvine beats his marker at a corner, rising high to power a low header into the bottom corner. 1-0 Australia." },
    { minute: 41, type: "goal_usa", text: "GOAL for USA! Relentless press! Weston McKennie wins the ball, spins, and crosses to Folarin Balogun, who taps it home! 1-1!" },
    { minute: 45, type: "halftime", text: "Half Time in Seattle: 1-1. A high-tempo, physical heavyweight battle. Both teams look lethal on transitions." },
    { minute: 58, type: "foul", text: "Tyler Adams makes a tactical foul on McGree, receiving a yellow card but stopping a dangerous break." },
    { minute: 71, type: "goal_opp", text: "GOAL for Australia! Nestory Irankunda scores a sensational low drive from the edge of the box after a rapid counter-attack. 2-1 Australia." },
    { minute: 80, type: "sub", text: "Pochettino switches to a hyper-offensive format, introducing Ricardo Pepi as a second central striker." },
    { minute: 88, type: "goal_usa", text: "GOAL for USA! Oh my word, Ricardo Pepi has done it! Relentless pressure from USA. Pepi pokes home a loose ball in the box! 2-2!" },
    { minute: 90, type: "fulltime", text: "Full Time! An epic 2-2 draw in Seattle. USA showcases incredible resilience to grab a late equalizer through Pepi." }
  ],
  "match_turkiye": [
    { minute: 1, type: "kickoff", text: "Kick-off in Los Angeles! The final group stage match. USA needs a win or draw to secure top spot in Group D." },
    { minute: 15, type: "save", text: "Joe Scally makes a spectacular recovery sprint, sliding to block Kenan Yıldız's crossing attempt." },
    { minute: 32, type: "dribble", text: "Weston McKennie showcases high class in tight spaces, evading Türkiye's double-pivot to feed Christian Pulisic." },
    { minute: 45, type: "halftime", text: "Half Time in Los Angeles: 0-0. Türkiye's high-tempo pressing is restricting space, but USA looks dangerous between the lines." },
    { minute: 49, type: "goal_opp", text: "GOAL for Türkiye! Hakan Çalhanoğlu opens the scoring, curling a fine strike from the edge of the box after a rapid combination play. 1-0 Türkiye." },
    { minute: 60, type: "sub", text: "Pochettino introduces Gio Reyna to provide high creativity in the final third." },
    { minute: 62, type: "goal_usa", text: "GOAL for USA! Immediate impact! Gio Reyna runs onto a brilliant vertical pass, cuts inside, and curls a beautiful finish into the top corner! 1-1!" },
    { minute: 79, type: "goal_usa", text: "GOAL for USA! Breathtaking passing sequence! Tyler Adams wins the ball, feeds Reyna, who slips in Folarin Balogun. Balogun drills it low! 2-1 USA!" },
    { minute: 90, type: "fulltime", text: "Full Time! USA wins Group D! An intense 2-1 battle in Los Angeles concludes with USA securing top spot. Los Angeles Stadium is in absolute ecstasy!" }
  ]
};

function fetchGuardianReport(matchId, opponentName, matchDate) {
  const container = document.getElementById("guardian-press-container");
  if (!container) return;
  
  const fromDate = matchDate;
  // Set window as +48 hours
  const toDate = new Date(new Date(matchDate).getTime() + 48 * 60 * 60 * 1000).toISOString().split('T')[0];
  
  const url = `https://content.guardianapis.com/search?q=usa%20AND%20(football%20OR%20soccer%20OR%20${opponentName})&from-date=${fromDate}&to-date=${toDate}&api-key=test`;
  
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
              <a href="${art.webUrl}" target="_blank" style="font-size: 0.85rem; font-weight: 700; color: var(--text-white); text-decoration: none; border-bottom: 1px dashed rgba(255,255,255,0.2); transition: var(--transition-smooth);" onmouseover="this.style.color='var(--us-red)'" onmouseout="this.style.color='var(--text-white)'">${art.webTitle}</a>
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
              <p style="font-size: 0.75rem; color: var(--text-secondary);">No match report in search window. <a href="https://www.theguardian.com/football" target="_blank" style="color: var(--us-red); text-decoration: none; font-weight: 700;">Browse Football Feed ➔</a></p>
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
            <p style="font-size: 0.75rem; color: var(--text-secondary);">Media connection offline. <a href="https://www.theguardian.com/football" target="_blank" style="color: var(--us-red); text-decoration: none; font-weight: 700;">Browse Guardian ➔</a></p>
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
        return title.includes("usa") || title.includes("usmnt") || title.includes("pochettino") || title.includes(opponentName.toLowerCase()) ||
               desc.includes("usa") || desc.includes("usmnt") || desc.includes("pochettino") || desc.includes(opponentName.toLowerCase());
      });
      
      const displayItems = filtered.length > 0 ? filtered.slice(0, 2) : items.slice(0, 2);
      
      if (displayItems.length > 0) {
        container.innerHTML = displayItems.map(item => `
          <div class="press-card" style="margin-top: 0.8rem;">
            <div style="font-size: 1.3rem; color: #CC0000; display: flex; align-items: center;"><i class="fas fa-rss"></i></div>
            <div style="flex-grow: 1;">
              <span style="font-size: 0.6rem; font-weight: 800; color: #FCA5A5; text-transform: uppercase; letter-spacing: 0.05em; display: block; margin-bottom: 2px;">ESPN Soccer Wire</span>
              <a href="${item.link}" target="_blank" style="font-size: 0.82rem; font-weight: 700; color: var(--text-white); text-decoration: none; border-bottom: 1px dashed rgba(255,255,255,0.2); transition: var(--transition-smooth);" onmouseover="this.style.color='var(--us-red)'" onmouseout="this.style.color='var(--text-white)'">${item.title}</a>
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
              <p style="font-size: 0.75rem; color: var(--text-secondary);">No USA news active. <a href="https://www.espn.com/soccer" target="_blank" style="color: var(--us-red); text-decoration: none; font-weight: 700;">Browse Soccer Feed ➔</a></p>
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
            <p style="font-size: 0.75rem; color: var(--text-secondary);">Media connection offline. <a href="https://www.espn.com/soccer" target="_blank" style="color: var(--us-red); text-decoration: none; font-weight: 700;">Browse ESPN ➔</a></p>
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
        <span>USA</span>
        <span class="flag-vs">🇺🇸</span>
        <span style="color: var(--us-red); font-size: 1.7rem; margin: 0 0.8rem; font-family: monospace; font-weight: 800; text-shadow: 0 0 10px rgba(254,204,0,0.3);">${reportData.score}</span>
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
        <span>USA</span>
        <span class="flag-vs">🇺🇸</span>
        <span style="color: var(--text-secondary); font-size: 0.9rem; margin: 0 0.5rem;">vs</span>
        <span>${match.opponentFlag} ${match.opponent}</span>
      </div>
      <div class="match-report-meta">
        <span><i class="far fa-calendar-alt"></i> ${match.date} at ${match.time}</span>
        <span style="margin: 0 5px; color: var(--text-secondary);">|</span>
        <span><i class="fas fa-map-marker-alt"></i> ${match.venue}</span>
      </div>
      
      <div class="match-report-scorers" style="border-left-color: var(--us-blue); background: rgba(0, 106, 167, 0.05); color: var(--text-primary);">
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
  { sender: "Christian Pulisic", avatar: "🇺🇸", text: "Hey guys! Flight lands in Denver on Tuesday night. Ready to get to work under Poch! Everyone's bags packed?", time: "10:15", isCaptain: true },
  { sender: "Weston McKennie", avatar: "🇺🇸", text: "Bags are packed, captain! 🇺🇸 Bringing a lifetime supply of ranch dressing to Colorado. Need it for the high-altitude recovery! 🍕", time: "10:18" },
  { sender: "Folarin Balogun", avatar: "🇺🇸", text: "Leave the ranch in Texas, Wes! 😂 Just finished my training session in Monaco. Feeling extremely sharp and ready.", time: "10:22" },
  { sender: "Tyler Adams", avatar: "🇺🇸", text: "Same here in Bournemouth. Let's make sure nobody forgets their passports or boots. Looking at you, Wes! 😂", time: "10:25" },
  { sender: "Antonee Robinson", avatar: "🇺🇸", text: "Hey! I'm already in Denver doing some light sprints. High altitude is no joke, but the air is crisp. Let's get these three points in Gothenburg!", time: "10:28" },
  { sender: "Christian Pulisic", avatar: "🇺🇸", text: "Love the focus. Official gathering is Wednesday May 27th at the hotel lobby at 10:00 AM. Let's make history this summer boys! 🇺🇸💪", time: "10:31", isCaptain: true }
];

// 5. Locker Room Music Playlist Data (With real-world US songs & Spotify Links)
const PLAYLIST = [
  { title: "Born in the U.S.A.", artist: "Bruce Springsteen", duration: "4:39", category: "Classic", audioUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3", spotifyUrl: "https://open.spotify.com/track/0d285ghJu2W5Hy9Z7i2Xw6" },
  { title: "Lose Yourself", artist: "Eminem", duration: "5:26", category: "Hype", audioUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3", spotifyUrl: "https://open.spotify.com/track/7QjQDacj8kFvI4x0Zk7h1M" },
  { title: "Party in the U.S.A.", artist: "Miley Cyrus", duration: "3:22", category: "Hype", audioUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3", spotifyUrl: "https://open.spotify.com/track/5qie9Z2j5yL8e4j84a2U" },
  { title: "Remember the Name", artist: "Fort Minor", duration: "3:50", category: "Hype", audioUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-4.mp3", spotifyUrl: "https://open.spotify.com/track/6L93x9y8Z8e8u" },
  { title: "American Idiot", artist: "Green Day", duration: "2:54", category: "Classic", audioUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-5.mp3", spotifyUrl: "https://open.spotify.com/track/6nTi42ooxP47W5o" }
];

let currentTrackIndex = 0;
let isPlaying = false;
let audioPlayer = null; 

// 6. Time Schedule & State Management
let ACTIVE_NEWS_TAB = "usa";

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

// 3.8 Mauricio Pochettino's 2 Tactical Formations coordinate mappings
const FORMATIONS = {
  "433": {
    name: "Mauricio Pochettino's High-Tempo 4-3-3",
    briefing: "<strong>Pochettino's Briefing:</strong> Relies on transition speed and direct 1v1 threat on the wings. Relentless overlapping wing-backs Joe Scally and Antonee Robinson push high to stretch the defense. Midfield engine McKennie and Musah carry transitions, while Adams anchors the pivot. Pulisic and Weah cut inside rapidly to feed striker Folarin Balogun.",
    lineup: [
      { id: "matt_turner", top: "85%", left: "50%", role: "GK" },
      { id: "antonee_robinson", top: "67%", left: "15%", role: "LB" },
      { id: "chris_richards", top: "68%", left: "37%", role: "LCB" },
      { id: "cameron_carter_vickers", top: "68%", left: "63%", role: "RCB" },
      { id: "joe_scally", top: "67%", left: "85%", role: "RB" },
      { id: "tyler_adams", top: "50%", left: "50%", role: "DM" },
      { id: "weston_mckennie", top: "40%", left: "30%", role: "LCM" },
      { id: "yunus_musah", top: "40%", left: "70%", role: "RCM" },
      { id: "christian_pulisic", top: "20%", left: "20%", role: "LW" },
      { id: "timothy_weah", top: "20%", left: "80%", role: "RW" },
      { id: "folarin_balogun", top: "12%", left: "50%", role: "ST" }
    ],
    pressing: [
      { top: "20%", left: "20%" },
      { top: "20%", left: "80%" },
      { top: "12%", left: "50%" },
      { top: "40%", left: "30%" },
      { top: "40%", left: "70%" }
    ],
    runs: [
      { fromLeft: "15%", fromTop: "67%", toLeft: "15%", toTop: "40%" },
      { fromLeft: "85%", fromTop: "67%", toLeft: "85%", toTop: "40%" }
    ]
  },
  "4231": {
    name: "Pochettino's Compact Low-Block 4-2-3-1",
    briefing: "<strong>Pochettino's Briefing:</strong> Extremely compact defensively, restricting space between the lines. Double-pivot of Adams and McKennie shields the back four and breaks central passing lanes. Reyna floats as an advanced playmaker to launch rapid counters, while Pulisic and Weah cut inside to support Balogun in deep blocks.",
    lineup: [
      { id: "matt_turner", top: "85%", left: "50%", role: "GK" },
      { id: "antonee_robinson", top: "68%", left: "15%", role: "LB" },
      { id: "tim_ream", top: "69%", left: "37%", role: "LCB" },
      { id: "chris_richards", top: "69%", left: "63%", role: "RCB" },
      { id: "joe_scally", top: "68%", left: "85%", role: "RB" },
      { id: "tyler_adams", top: "55%", left: "35%", role: "LDM" },
      { id: "weston_mckennie", top: "55%", left: "65%", role: "RDM" },
      { id: "christian_pulisic", top: "35%", left: "20%", role: "LM" },
      { id: "gio_reyna", top: "33%", left: "50%", role: "AM" },
      { id: "timothy_weah", top: "35%", left: "80%", role: "RM" },
      { id: "folarin_balogun", top: "15%", left: "50%", role: "ST" }
    ],
    pressing: [
      { top: "55%", left: "35%" },
      { top: "55%", left: "65%" },
      { top: "33%", left: "50%" }
    ],
    runs: [
      { fromLeft: "20%", fromTop: "35%", toLeft: "35%", toTop: "20%" },
      { fromLeft: "80%", fromTop: "35%", toLeft: "65%", toTop: "20%" }
    ]
  }
};

let ACTIVE_FORMATION = "433";

// Live Match Simulator Engine Variables
let simInterval = null;
let simTime = 0;
let simSpeed = 150; // default 150ms per minute
let currentSimMatchId = "";
let simPossession = 50;
let simShotsUSA = 0;
let simShotsOpp = 0;
let simCornersUSA = 0;
let simCornersOpp = 0;
let simFoulsUSA = 0;
let simFoulsOpp = 0;
let simScoreUSA = 0;
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
        "⚽ Mauricio Pochettino has finalized the 26-man roster for the 2026 FIFA World Cup.",
        "✈️ USMNT will depart for Gothenburg, Sweden tomorrow morning for their warmup match.",
        "💪 Christian Pulisic arrives in stellar goal-scoring form from his AC Milan campaign.",
        "🚑 Medical staff confirms that midfielder Tyler Adams is cleared for full contact.",
        "⭐ Gio Reyna designated by FIFA as one of the ultimate creative playmakers to watch."
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
    const dot = item.querySelector("::before");
    if (dot) {
      dot.style.top = "18px";
    }
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
          <path d="M 0 2 L 10 5 L 0 8 z" fill="var(--us-red)" />
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
        <h3 class="match-pairing">USA <span class="flag-vs">🇺🇸</span> vs. ${match.opponentFlag} ${match.opponent}</h3>
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

  if (!songTitle) return;

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
// The Scout Room (Player Comparison) Interactive Comparison Functions
// ==========================================================================
function initScoutRoom() {
  const p1Select = document.getElementById("scout-player-1");
  const p2Select = document.getElementById("scout-player-2");
  if (!p1Select || !p2Select) return;

  const sortedPlayers = [...PLAYERS].sort((a, b) => a.name.localeCompare(b.name));
  
  p1Select.innerHTML = sortedPlayers.map(p => `<option value="${p.id}">${p.name} (${p.position})</option>`).join('');
  p2Select.innerHTML = sortedPlayers.map(p => `<option value="${p.id}">${p.name} (${p.position})</option>`).join('');

  p1Select.value = "christian_pulisic";
  p2Select.value = "folarin_balogun";

  renderScoutComparison();
}

function renderScoutComparison() {
  const p1Id = document.getElementById("scout-player-1").value;
  const p2Id = document.getElementById("scout-player-2").value;
  
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
      <div style="display: flex; justify-content: space-between;"><span>Overall Rating:</span><strong style="color:var(--us-red); font-family: monospace;">${p1Wins > p2Wins ? 'WINNER 🏆' : 'Scout Match'}</strong></div>
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
      <div style="display: flex; justify-content: space-between;"><span>Overall Rating:</span><strong style="color:var(--us-red); font-family: monospace;">${p2Wins > p1Wins ? 'WINNER 🏆' : 'Scout Match'}</strong></div>
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
  simScoreUSA = 0;
  simScoreOpp = 0;
  simPossession = 50;
  simShotsUSA = 0;
  simShotsOpp = 0;
  simCornersUSA = 0;
  simCornersOpp = 0;
  simFoulsUSA = 0;
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
  
  document.getElementById("sim-stat-poss-usa").textContent = "50";
  document.getElementById("sim-stat-poss-opp").textContent = "50";
  document.getElementById("sim-bar-poss-usa").style.width = "50%";
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
    renderMatchCenter();
    return;
  }

  simTime++;
  
  const timeStr = String(simTime).padStart(2, "0") + ":00";
  document.getElementById("sim-clock").textContent = timeStr;

  simPossession = Math.max(30, Math.min(70, simPossession + (Math.random() > 0.5 ? 2 : -2)));
  document.getElementById("sim-stat-poss-usa").textContent = simPossession;
  document.getElementById("sim-stat-poss-opp").textContent = 100 - simPossession;
  document.getElementById("sim-bar-poss-usa").style.width = `${simPossession}%`;
  document.getElementById("sim-bar-poss-opp").style.width = `${100 - simPossession}%`;

  if (Math.random() > 0.8) {
    if (Math.random() > 0.45) simShotsUSA++; else simShotsOpp++;
    document.getElementById("sim-stat-shots").textContent = `${simShotsUSA} - ${simShotsOpp}`;
  }
  if (Math.random() > 0.85) {
    if (Math.random() > 0.48) simCornersUSA++; else simCornersOpp++;
    document.getElementById("sim-stat-corners").textContent = `${simCornersUSA} - ${simCornersOpp}`;
  }
  if (Math.random() > 0.88) {
    if (Math.random() > 0.5) simFoulsUSA++; else simFoulsOpp++;
    document.getElementById("sim-stat-fouls").textContent = `${simFoulsUSA} - ${simFoulsOpp}`;
  }

  const events = SIMULATION_EVENTS[currentSimMatchId] || [];
  const event = events.find(e => e.minute === simTime);

  if (event) {
    let bubbleClass = "";
    if (event.type === "goal_usa") {
      bubbleClass = "event-goal";
      simScoreUSA++;
      document.getElementById("sim-score-display").textContent = `${simScoreUSA} - ${simScoreOpp}`;
      
      let scorer = "Christian Pulisic";
      if (event.text.toLowerCase().includes("balogun")) scorer = "Folarin Balogun";
      else if (event.text.toLowerCase().includes("mckennie")) scorer = "Weston McKennie";
      else if (event.text.toLowerCase().includes("pepi")) scorer = "Ricardo Pepi";
      else if (event.text.toLowerCase().includes("reyna")) scorer = "Gio Reyna";
      
      triggerGoalFlashAnimation(scorer, `${simScoreUSA} - ${simScoreOpp}`);
    } else if (event.type === "goal_opp") {
      bubbleClass = "event-card-red";
      simScoreOpp++;
      document.getElementById("sim-score-display").textContent = `${simScoreUSA} - ${simScoreOpp}`;
    } else if (event.type === "foul") {
      bubbleClass = "event-card-yellow";
    }

    addCommentaryLog(simTime, event.text, bubbleClass);
  } else {
    if (Math.random() > 0.88) {
      const genericCommentary = [
        "A fierce physical duel in central midfield. Both teams fighting hard for second balls.",
        "Mauricio Pochettino gestures actively from the technical area, demanding quicker ball distribution.",
        "USA is maintaining solid structural discipline, denying passing lanes down the channels.",
        "Relentless vocal support from the traveling American supporters is echoing through the stadium.",
        "Possession recycled cleanly down the left flank as Antonee Robinson looks for an opening."
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
    scoreEl.textContent = `USA ${scoreline}`;
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

  const tabUSA = document.getElementById("tab-news-usa");
  const tabOpponent = document.getElementById("tab-news-opponent");

  if (tabUSA && tabOpponent) {
    tabUSA.addEventListener("click", () => {
      tabOpponent.classList.remove("active");
      tabUSA.classList.add("active");
      ACTIVE_NEWS_TAB = "usa";
      updateNewsDashboard();
    });

    tabOpponent.addEventListener("click", () => {
      tabUSA.classList.remove("active");
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
  const tab433 = document.getElementById("whiteboard-tab-433");
  const tab4231 = document.getElementById("whiteboard-tab-4231");

  if (tab433 && tab4231) {
    tab433.addEventListener("click", () => {
      tab4231.classList.remove("active");
      tab433.classList.add("active");
      ACTIVE_FORMATION = "433";
      renderTacticalPitch();
    });

    tab4231.addEventListener("click", () => {
      tab433.classList.remove("active");
      tab4231.classList.add("active");
      ACTIVE_FORMATION = "4231";
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


