/**
 * England National Football Team - 2026 World Cup Hub
 * Client-Side Core Logic (Three Lions Adaptation)
 */

// 1. Official 26-Man Squad Database
const PLAYERS = [
  // Goalkeepers
  {
    id: "jordan_pickford",
    name: "Jordan Pickford",
    number: 1,
    position: "Goalkeeper",
    club: "Everton",
    age: 32,
    caps: 71,
    goals: 0,
    avatar: "🏴󠁧󠁢󠁥󠁮󠁧󠁿",
    status: "Healthy",
    bio: "England's undisputed number one. Known for his incredible shot-stopping ability, passionate on-field vocal leadership, and superb distribution range under pressure.",
    stats: { saves: 218, cleanSheets: 31, passAccuracy: "82%" }
  },
  {
    id: "aaron_ramsdale",
    name: "Aaron Ramsdale",
    number: 13,
    position: "Goalkeeper",
    club: "Southampton",
    age: 28,
    caps: 5,
    goals: 0,
    avatar: "🏴󠁧󠁢󠁥󠁮󠁧󠁿",
    status: "Healthy",
    bio: "An energetic and highly athletic shot-stopper who provides elite coverage and high-performance competition in the goalkeeping department.",
    stats: { saves: 98, cleanSheets: 12, passAccuracy: "79%" }
  },
  {
    id: "dean_henderson",
    name: "Dean Henderson",
    number: 22,
    position: "Goalkeeper",
    club: "Crystal Palace",
    age: 29,
    caps: 1,
    goals: 0,
    avatar: "🏴󠁧󠁢󠁥󠁮󠁧󠁿",
    status: "Healthy",
    bio: "Extremely composed presence between the posts. Possesses superb reflexes and commanding aerial presence in high-pressure box situations.",
    stats: { saves: 112, cleanSheets: 14, passAccuracy: "74%" }
  },

  // Defenders
  {
    id: "kyle_walker",
    name: "Kyle Walker",
    number: 2,
    position: "Defender",
    club: "Manchester City",
    age: 36,
    caps: 90,
    goals: 1,
    avatar: "🏴󠁧󠁢󠁥󠁮󠁧󠁿",
    status: "Healthy",
    bio: "The veteran powerhouse. Possesses world-class recovery speed and elite tactical understanding, capable of playing as a right-back or right central defender.",
    stats: { tackles: 145, interceptions: 98, passAccuracy: "92%" }
  },
  {
    id: "joe_gomez",
    name: "Joe Gomez",
    number: 3,
    position: "Defender",
    club: "Liverpool",
    age: 29,
    caps: 15,
    goals: 0,
    avatar: "🏴󠁧󠁢󠁥󠁮󠁧󠁿",
    status: "Healthy",
    bio: "Extremely versatile defender comfortable anywhere across the back line. Possesses excellent physical strength and high-quality recovery speed.",
    stats: { tackles: 34, interceptions: 28, passAccuracy: "88%" }
  },
  {
    id: "john_stones",
    name: "John Stones",
    number: 5,
    position: "Defender",
    club: "Manchester City",
    age: 32,
    caps: 83,
    goals: 3,
    avatar: "🏴󠁧󠁢󠁥󠁮󠁧󠁿",
    status: "Healthy",
    bio: "England's premier ball-playing center-back. Known for stepping up into midfield spaces, elegant distribution, and commanding positional intelligence.",
    stats: { tackles: 85, interceptions: 92, passAccuracy: "95%" }
  },
  {
    id: "marc_guehi",
    name: "Marc Guéhi",
    number: 6,
    position: "Defender",
    club: "Crystal Palace",
    age: 25,
    caps: 22,
    goals: 0,
    avatar: "🏴󠁧󠁢󠁥󠁮󠁧󠁿",
    status: "Healthy",
    bio: "A highly composed and physically robust defender. Excellent in 1v1 duels, recovery sprints, and calm ball retention under extreme central press.",
    stats: { tackles: 54, interceptions: 48, passAccuracy: "91%" }
  },
  {
    id: "kieran_trippier",
    name: "Kieran Trippier",
    number: 12,
    position: "Defender",
    club: "Newcastle United",
    age: 35,
    caps: 54,
    goals: 1,
    avatar: "🏴󠁧󠁢󠁥󠁮󠁧󠁿",
    status: "Healthy",
    bio: "Highly experienced fullback and dead-ball specialist. Provides elite crossing delivery and defensive organization across both flanks.",
    stats: { tackles: 88, crosses: 142, passAccuracy: "84%" }
  },
  {
    id: "ezri_konsa",
    name: "Ezri Konsa",
    number: 14,
    position: "Defender",
    club: "Aston Villa",
    age: 28,
    caps: 8,
    goals: 0,
    avatar: "🏴󠁧󠁢󠁥󠁮󠁧󠁿",
    status: "Healthy",
    bio: "Commanding and modern center-back enjoying superb domestic campaigns, offering fantastic aerial presence and structural flexibility.",
    stats: { tackles: 24, interceptions: 22, passAccuracy: "89%" }
  },
  {
    id: "lewis_dunk",
    name: "Lewis Dunk",
    number: 15,
    position: "Defender",
    club: "Brighton & Hove Albion",
    age: 34,
    caps: 6,
    goals: 0,
    avatar: "🏴󠁧󠁢󠁥󠁮󠁧󠁿",
    status: "Healthy",
    bio: "Commanding veteran defender. Excellent reader of the game, highly dominant in aerial challenges, and comfortable progressing play from deep lines.",
    stats: { tackles: 18, blocks: 24, passAccuracy: "90%" }
  },
  {
    id: "luke_shaw",
    name: "Luke Shaw",
    number: 18,
    position: "Defender",
    club: "Manchester United",
    age: 30,
    caps: 34,
    goals: 3,
    avatar: "🏴󠁧󠁢󠁥󠁮󠁧󠁿",
    status: "Healthy",
    bio: "Highly dynamic left fullback. Combines elite overlapping support, press-resistant technical skill, and reliable defensive spatial awareness.",
    stats: { tackles: 62, crosses: 74, passAccuracy: "87%" }
  },

  // Midfielders
  {
    id: "declan_rice",
    name: "Declan Rice",
    number: 4,
    position: "Midfielder",
    club: "Arsenal",
    age: 27,
    caps: 58,
    goals: 4,
    avatar: "🏴󠁧󠁢󠁥󠁮󠁧󠁿",
    status: "Healthy",
    bio: "The midfield engine and anchor. A world-class box-to-box presence who excels at intercepting transitions, carrying the ball, and shielding the defensive block.",
    stats: { tackles: 124, interceptions: 110, passAccuracy: "91%" }
  },
  {
    id: "trent_alexander_arnold",
    name: "Trent Alexander-Arnold",
    number: 8,
    position: "Midfielder",
    club: "Liverpool",
    age: 27,
    caps: 33,
    goals: 4,
    avatar: "🏴󠁧󠁢󠁥󠁮󠁧󠁿",
    status: "Healthy",
    bio: "Possesses a generational passing range. Highly creative playmaker capable of delivering spectacular long switches, set-pieces, and crosses from deep half-spaces.",
    stats: { assists: 14, keyPasses: 85, passAccuracy: "86%" }
  },
  {
    id: "jude_bellingham",
    name: "Jude Bellingham",
    number: 10,
    position: "Midfielder",
    club: "Real Madrid",
    age: 22,
    caps: 40,
    goals: 6,
    avatar: "🏴󠁧󠁢󠁥󠁮󠁧󠁿",
    status: "Healthy",
    bio: "World-class attacking midfielder. A physical and technical powerhouse who dominates transitional zones, excels in late box arrivals, and scores decisive goals.",
    stats: { goals: 28, assists: 12, dribblesSuccess: "78%" }
  },
  {
    id: "conor_gallagher",
    name: "Conor Gallagher",
    number: 16,
    position: "Midfielder",
    club: "Atletico Madrid",
    age: 26,
    caps: 18,
    goals: 1,
    avatar: "🏴󠁧󠁢󠁥󠁮󠁧󠁿",
    status: "Healthy",
    bio: "Tenacious midfielder with a relentless work rate. Excels in pressing triggers, winning second balls, and injecting massive intensity into camp workouts.",
    stats: { tackles: 64, distanceCovered: "12.1km/90", passAccuracy: "83%" }
  },
  {
    id: "eberechi_eze",
    name: "Eberechi Eze",
    number: 21,
    position: "Midfielder",
    club: "Crystal Palace",
    age: 27,
    caps: 7,
    goals: 0,
    avatar: "🏴󠁧󠁢󠁥󠁮󠁧󠁿",
    status: "Healthy",
    bio: "A highly elegant playmaker. Glides past defenders in tight spaces with absolute ease, offering fantastic technical flair and attacking variety.",
    stats: { dribblesSuccess: "82%", keyPasses: 18, passAccuracy: "85%" }
  },
  {
    id: "cole_palmer",
    name: "Cole Palmer",
    number: 24,
    position: "Midfielder",
    club: "Chelsea",
    age: 24,
    caps: 9,
    goals: 2,
    avatar: "🏴󠁧󠁢󠁥󠁮󠁧󠁿",
    status: "Healthy",
    bio: "England's 'Cold Palmer'. An exceptionally calm, clinical creator with outstanding vision, precise final passing, and lethal penalty conversion rates.",
    stats: { goals: 25, assists: 15, keyPasses: 78 }
  },
  {
    id: "adam_wharton",
    name: "Adam Wharton",
    number: 25,
    position: "Midfielder",
    club: "Crystal Palace",
    age: 22,
    caps: 1,
    goals: 0,
    avatar: "🏴󠁧󠁢󠁥󠁮󠁧󠁿",
    status: "Healthy",
    bio: "A highly intelligent, technical defensive midfield anchor. Excellent in tight central spaces, recycling possession with calm and press-resistant composure.",
    stats: { tackles: 14, keyPasses: 10, passAccuracy: "92%" }
  },
  {
    id: "kobbie_mainoo",
    name: "Kobbie Mainoo",
    number: 26,
    position: "Midfielder",
    club: "Manchester United",
    age: 21,
    caps: 10,
    goals: 1,
    avatar: "🏴󠁧󠁢󠁥󠁮󠁧󠁿",
    status: "Healthy",
    bio: "Generational midfield talent. Plays with immense maturity, utilizing superb close control and body feints to escape defensive blocks and transition play smoothly.",
    stats: { dribblesSuccess: "76%", tackles: 24, passAccuracy: "89%" }
  },

  // Forwards
  {
    id: "bukayo_saka",
    name: "Bukayo Saka",
    number: 7,
    position: "Forward",
    club: "Arsenal",
    age: 24,
    caps: 42,
    goals: 12,
    avatar: "🏴󠁧󠁢󠁥󠁮󠁧󠁿",
    status: "Healthy",
    bio: "England's star right winger. Combines blistering pace, elite 1v1 dribbling skills, and clinical finishing inside the box, acting as a premier catalyst.",
    stats: { goals: 18, assists: 14, dribblesSuccess: "71%" }
  },
  {
    id: "harry_kane",
    name: "Harry Kane",
    number: 9,
    position: "Forward",
    club: "Bayern Munich",
    age: 32,
    caps: 100,
    goals: 68,
    avatar: "🏴󠁧󠁢󠁥󠁮󠁧󠁿",
    status: "Healthy",
    bio: "The Captain and all-time record goalscorer. A world-class forward blending lethal finishing capability with playmaking vision and leadership.",
    stats: { goals: 42, assists: 12, shotConversion: "28%" }
  },
  {
    id: "phil_foden",
    name: "Phil Foden",
    number: 11,
    position: "Forward",
    club: "Manchester City",
    age: 26,
    caps: 41,
    goals: 4,
    avatar: "🏴󠁧󠁢󠁥󠁮󠁧󠁿",
    status: "Healthy",
    bio: "An exceptionally gifted technical attacker. Glides in half-spaces, providing lethal shooting range, tight control, and outstanding combinational play.",
    stats: { goals: 20, assists: 11, keyPasses: 62 }
  },
  {
    id: "ivan_toney",
    name: "Ivan Toney",
    number: 17,
    position: "Forward",
    club: "Al-Ahli",
    age: 30,
    caps: 6,
    goals: 1,
    avatar: "🏴󠁧󠁢󠁥󠁮󠁧󠁿",
    status: "Healthy",
    bio: "Highly physical center forward and world-class penalty specialist. Provides excellent hold-up link play and central aerial presence.",
    stats: { aerialDuelsWon: "72%", goals: 14, passAccuracy: "78%" }
  },
  {
    id: "ollie_watkins",
    name: "Ollie Watkins",
    number: 19,
    position: "Forward",
    club: "Aston Villa",
    age: 30,
    caps: 15,
    goals: 4,
    avatar: "🏴󠁧󠁢󠁥󠁮󠁧󠁿",
    status: "Healthy",
    bio: "Direct, lightning-fast striker who makes relentless runs in channels to stretch defenses. Extremely clinical finisher in high-tempo situations.",
    stats: { goals: 23, sprints: 54, shotConversion: "22%" }
  },
  {
    id: "anthony_gordon",
    name: "Anthony Gordon",
    number: 20,
    position: "Forward",
    club: "Newcastle United",
    age: 25,
    caps: 4,
    goals: 0,
    avatar: "🏴󠁧󠁢󠁥󠁮󠁧󠁿",
    status: "Healthy",
    bio: "Dynamic winger offering direct attacking pace, aggressive defensive work rate in high press situations, and excellent crossing variety.",
    stats: { topSpeed: "36.2 km/h", assists: 8, tackles: 28 }
  },
  {
    id: "jarrod_bowen",
    name: "Jarrod Bowen",
    number: 23,
    position: "Forward",
    club: "West Ham United",
    age: 29,
    caps: 10,
    goals: 0,
    avatar: "🏴󠁧󠁢󠁥󠁮󠁧󠁿",
    status: "Healthy",
    bio: "Relentless forward who works tirelessly off the ball. Extremely direct dribbler who threatens the box from wide angles.",
    stats: { goals: 16, crosses: 52, passAccuracy: "79%" }
  }
];

// 2. Chronological Pre-Camp News Timeline (May 21, 22, 23, 2026 - Adapted for England)
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
          title: "FA inspects St George's Park facilities ahead of squad gather tomorrow",
          bullets: [
            "Technical staff reviews state-of-the-art pitches and recovery suites.",
            "Specialized high-altitude training chambers configured to optimal levels.",
            "England media center builders finalize broadcasting mixed zone layouts."
          ],
          summary: "England's advanced logistics crew completed a thorough inspection of the Burton-upon-Trent national football complex at St George's Park. The elite facilities are configured to accommodate the squad's high-intensity physical and tactical workouts. Staff confirmed that pitches are in pristine shape and recovery systems are fully online to ensure maximum support.",
          author: "Henry Winter (The Times)",
          readTime: "3 min",
          tag: "St George's Park",
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
          title: "Ticketing allocation for Wembley warmup against Ireland sells out",
          bullets: [
            "English FA reports all 90,000 Wembley seats sold out within hours.",
            "Traveling Irish block completely filled, promising electric local atmosphere.",
            "Metropolitan Police and Wembley operations finalize comprehensive transit plans."
          ],
          summary: "Ticketing departments confirmed that England's home friendly warm-up clash against the Republic of Ireland on June 1 at Wembley is officially sold out. Over 90,000 fans will pack the iconic stadium to bid the squad farewell before they depart for their USA World Cup base in Atlanta. Irish authorities have taken up their full allocations.",
          author: "James Pearce (The Athletic)",
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
          title: "Declan Rice prepares massive Yorkshire Tea stash for Burton camp",
          bullets: [
            "Midfielder shares packing logs containing over 480 bags of Yorkshire Gold.",
            "Declan writes: 'Cannot have an international camp without standard tea levels.'",
            "Arsenal anchor finishes individual aerobic exercises at Arsenal base."
          ],
          summary: "Maintaining a cheerful and light-hearted pre-camp atmosphere, Arsenal midfielder Declan Rice shared a packing update indicating he is supplying the entire St George's Park staff with premium tea collections. Beyond logistics, Rice has completed his personal physical schedules to report for contact drills in peak metabolic shape.",
          author: "Declan Rice (Player Blog)",
          readTime: "3 min",
          tag: "Player Focus",
          relatedPlayers: ["declan_rice"]
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
          title: "United States Watch: USMNT establishes hot weather camp in Atlanta",
          bullets: [
            "Coach schedules intensive multi-sessions to simulate Southern humidity.",
            "Pulisic and McKennie report to Atlanta camp in highGoal scoring shape.",
            "England analysts begin drafting transitional counter-pressing templates."
          ],
          summary: "England's tactical division has logged the schedules of their opening Group C opponents, the United States. USMNT has established their primary camp in Georgia to adjust to high local temperatures. With Christian Pulisic leading tactical routines, the Americans are focused on extremely fast wide overloads, prompting England to formulate custom defensive blocks.",
          author: "Tactical Analyst (The Athletic)",
          readTime: "4 min",
          tag: "USA Intel",
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
          title: "Jude Bellingham checks out of Madrid, boarding flight to London",
          bullets: [
            "Real Madrid star shares boarding photos with bags packed.",
            "Excited to link up with squad: 'Representing England at the WC is everything.'",
            "Midfielder outlines immense focus on standardized tournament layouts."
          ],
          summary: "Real Madrid midfielder Jude Bellingham shared a late-night travel diary entry as he prepared to board a flight to London. Having concluded a demanding Spanish league season, Bellingham expressed complete focus on England's World Cup quest: 'The St George's gather marks the true engine start. We have a special squad, let's lock in and bring it home.'",
          author: "Jude Bellingham (Player Blog)",
          readTime: "2 min",
          tag: "Player Travel",
          relatedPlayers: ["jude_bellingham"]
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
          title: "Why the May 25 release deadline is critical for England's system synergy",
          bullets: [
            "FIFA's mandatory player release deadline goes active next Monday.",
            "Stops club commitments, giving staff complete coaching custody over stars.",
            "Tactical division schedules double sessions to integrate Palmer and Foden."
          ],
          summary: "As we edge closer to the mandatory FIFA player release date on May 25, England's coaching team is poised to finally take full command of their squad. The staggered endings of European league fixtures had delayed a full assembly. Starting Monday, complete tactical custody allows the team to standardize spacing patterns.",
          author: "James Ducker (Telegraph)",
          readTime: "4 min",
          tag: "Camp Analysis",
          relatedPlayers: ["cole_palmer", "phil_foden", "harry_kane"]
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
          title: "Coaching staff outlines camp focus: 'We must build physical robustness'",
          bullets: [
            "England coaches present structured physical loading plan to media.",
            "Emphasis placed on quick ball transitions and low-block breaking patterns.",
            "Medical staff reports 100% clean bill of health across all 26 players."
          ],
          summary: "During a media briefing, England's coaching staff detailed the objectives of the Burton gathering. 'The first three days at St George's Park are designed to get everyone on the same physical page. Some players have had a week off, while others played club games last Sunday. We will balance player workloads and implement our core patterns,' the staff explained.",
          author: "David Ornstein (The Athletic)",
          readTime: "3 min",
          tag: "Coaching Focus",
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
          title: "Harry Kane finishes private agility routines in Munich gym",
          bullets: [
            "Bayern striker logs customized sprinting and turning routines.",
            "Agility trainers confirm Kane enters camp in perfect metabolic parameters.",
            "Kane: 'Got the technical brief; feeling incredibly sharp for day one.'"
          ],
          summary: "England captain Harry Kane is not wasting his pre-camp window. The striker has been working with a personal trainer on quick direction-change sprints to preserve his agility levels. 'The physical side of the game is vital in the opening match against the USA. We must be quick off the mark, and I want to be 100% sharp when we gather,' Kane wrote in his online camp log.",
          author: "Harry Kane (Player Blog)",
          readTime: "3 min",
          tag: "Player Training",
          relatedPlayers: ["harry_kane"]
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
          title: "Slovenia schedules warm-up fixtures; scouts monitor central transitions",
          bullets: [
            "Slovenia base camp monitors tactical shape transitions under Matjaž Kek.",
            "Striker Benjamin Šeško logs stellar hat-trick in training match.",
            "England analysts study Šeško's high aerial positioning metrics."
          ],
          summary: "Slovenia has arrived at their training base, immediately starting high-tempo practice matches. Matjaž Kek's side has focused on direct counter-attacks, with forward Benjamin Šeško looking fully fit and sharp, presenting a major threat to England's backline. England scouts have logged extensive video footage to prepare central defenders John Stones and Marc Guéhi.",
          author: "Sam Wallace (Telegraph)",
          readTime: "4 min",
          tag: "Slovenia Intel",
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
          title: "Bukayo Saka: 'Representing the Three Lions in a World Cup is my ultimate dream'",
          bullets: [
            "Saka shares candid thoughts on heading to St George's Park tomorrow.",
            "Reflects on his highly productive Arsenal campaign and international goals.",
            "Saka: 'We have unfinished business. The squad is incredibly united.'"
          ],
          summary: "In a highly candid late-night diary post, Bukayo Saka discussed his emotions ahead of reporting to camp. The Arsenal winger has caught global attention and is set to be England's primary wide threat. 'Playing for England in a World Cup is what you practice for in the garden as a kid. I'm ready to fight for my country,' Saka wrote.",
          author: "Bukayo Saka (Player Blog)",
          readTime: "4 min",
          tag: "Player Diary",
          relatedPlayers: ["bukayo_saka"]
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
          title: "England media desk builds Burton press arena for massive media blitz",
          bullets: [
            "FA press officers configure 150-seat press briefing complex at SGP.",
            "Broadcasting entities install high-bandwidth fiber links for live interviews.",
            "Structured daily player panels scheduled to run after training blocks."
          ],
          summary: "The FA's advanced media division arrived at St George's Park this morning to build the primary press room. Starting tomorrow, players will engage in daily press briefings and mixed zones, creating high transparency and media accessibility as the nation rallies behind their players' campaign.",
          author: "Miguel Delaney (Independent)",
          readTime: "3 min",
          tag: "Media Planning",
          relatedPlayers: []
        },
        {
          id: "art_23_1_2",
          category: "opponent",
          type: "Scouting",
          title: "Senegal Watch: Teranga Lions focus on defensive solidity in Dakar camp",
          bullets: [
            "Senegal national team practices compact low-block alignments.",
            "Nicolas Jackson logs high goal scoring registers in practice matches.",
            "Scouts note Senegal utilizing physical 4-3-3 tactical shapes in scrimmages."
          ],
          summary: "England's final Group C opponent Senegal is wrapping up their initial preparation phase in Dakar. Head coach Aliou Cissé has emphasized defensive shape, looking to crowd midfield spaces and launch lightning-fast counters. Chelsea's Nicolas Jackson remains their primary offensive threat, presenting a major assignment for England's wingbacks.",
          author: "ESPN FC Editorial",
          readTime: "4 min",
          tag: "Senegal Report",
          relatedPlayers: []
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
          title: "FA publishes finalized pre-tournament agenda: London to Atlanta",
          bullets: [
            "Squad reports to Burton on May 27, training at St George's Park for 4 days.",
            "Transit to London on May 31, Ireland friendly at Wembley on June 1.",
            "Charter flights to USA main camp in Atlanta scheduled for morning of June 2."
          ],
          summary: "The FA today published the official team calendar. The 26-man roster will gather in Burton next Wednesday, training locally for four days. On May 31, they travel to London for their first friendly against Ireland on June 1, and immediately board a charter flight to their primary base camp in Atlanta, Georgia on June 2 to begin their final tournament preparations.",
          author: "Kaveh Solhekol (Sky Sports)",
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
          title: "Luke Shaw completes intensive knee loading program in Manchester",
          bullets: [
            "Manchester United left-back cleared for full training at St George's.",
            "FA medical staff issues 100% physical fitness certificate.",
            "Shaw: 'Knee feels rock-solid. Cannot wait to link up with the boys!'"
          ],
          summary: "England has received a major fitness boost as left-back Luke Shaw completed his knee physical therapy program. Carrying a light knock from his final Premier League match, Shaw has been training individually, but has now been given 100% clearance to join the team for full-contact training when camp gathers on Wednesday morning.",
          author: "Luke Shaw (Player Diary)",
          readTime: "3 min",
          tag: "Injury Update",
          relatedPlayers: ["luke_shaw"]
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
          title: "USA Watch: Christian Pulisic displays blistering form in Georgia warm-up",
          bullets: [
            "Milan winger Pulisic logs two assists and a goal in closed scrimmage.",
            "USMNT transition schemes focus heavily on wide dynamic runs.",
            "England analytics division drafts wide coverage blocks to brief Kyle Walker."
          ],
          summary: "Scouts monitoring USA's training base reported that Christian Pulisic was in sensational form during today's offensive drills. The USMNT is tailoring a direct counter-attacking system to exploit wide areas. England's coaching staff is already utilizing this footage to prepare Kyle Walker for a demanding defensive assignment.",
          author: "Fox Soccer News Desk",
          readTime: "4 min",
          tag: "USMNT Report",
          relatedPlayers: ["kyle_walker"]
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
          title: "Phil Foden: 'The bags are packed; Burton, see you tomorrow morning'",
          bullets: [
            "City forward shares flight suitcases photos on social media.",
            "Reflects on deep pride of representing England at prime World Cup stage.",
            "Foden: 'First meeting at 10:00. Time to get standard patterns locked in.'"
          ],
          summary: "In a late-night camp diary entry, City forward Phil Foden shared photos of his packed travel bags. Expressing deep pride in representing England, Foden emphasized that team unity is their primary strength: 'Burton is where the final engine starts. The team is locked in. Let's make this year unforgettable,' Foden wrote.",
          author: "Phil Foden (Player Log)",
          readTime: "4 min",
          tag: "Player Diary",
          relatedPlayers: ["phil_foden"]
        }
      ]
    }
  }
};

// 3. Official 2026 World Cup Group C Match Schedule
const MATCH_SCHEDULE = [
  {
    id: "match_ireland",
    type: "warmup",
    date: "2026-06-01",
    time: "19:45",
    opponent: "Rep. of Ireland",
    opponentFlag: "🇮🇪",
    venue: "Wembley Stadium, London",
    details: "A classic international friendly at Wembley serving as the squad's final send-off match before departing for the USA."
  },
  {
    id: "match_usa",
    type: "worldcup",
    date: "2026-06-14",
    time: "20:00 (Atlanta Time)",
    opponent: "United States",
    opponentFlag: "🇺🇸",
    venue: "Mercedes-Benz Stadium, Atlanta",
    details: "World Cup Group C Opener! England faces USMNT in their first major match in Atlanta."
  },
  {
    id: "match_slovenia",
    type: "worldcup",
    date: "2026-06-20",
    time: "13:00 (New York Time)",
    opponent: "Slovenia",
    opponentFlag: "🇸🇮",
    venue: "MetLife Stadium, East Rutherford",
    details: "A crucial Group C encounter against a solid Slovenia side featuring world-class threats."
  },
  {
    id: "match_senegal",
    type: "worldcup",
    date: "2026-06-25",
    time: "18:00 (Los Angeles Time)",
    opponent: "Senegal",
    opponentFlag: "🇸🇳",
    venue: "SoFi Stadium, Inglewood",
    details: "Third group stage match. An intense battle against the African powerhouse in Los Angeles."
  }
];

// 3.5 Match Reports & Player Ratings Database (England Adaptation)
const MATCH_REPORTS_DATABASE = {
  "match_ireland": {
    score: "3 - 0",
    scorers: "🏴󠁧󠁢󠁥󠁮󠁧󠁿 Kane (14'), Saka (42'), Palmer (78')",
    report: "A comprehensive send-off victory at a roaring Wembley Stadium! England dominated possession from the opening whistle, suffocating Ireland's low block. Harry Kane opened the scoring with a trademark clinical header from a Foden corner. Bukayo Saka added a second with a dazzling run and curled effort before substitute Cole Palmer sealed the 3-0 win with a composed low finish.",
    ratings: [
      { name: "Jordan Pickford", role: "GK", rating: 7.0, comment: "Had a quiet night, claimed two high crosses with absolute security.", isMotm: false },
      { name: "John Stones", role: "CB", rating: 7.5, comment: "Stepped forward into midfield spaces beautifully, recycling play cleanly.", isMotm: false },
      { name: "Marc Guéhi", role: "CB", rating: 7.5, comment: "Completely untroubled in 1v1 duels, reading the game flawlessly.", isMotm: false },
      { name: "Kyle Walker", role: "RB", rating: 7.0, comment: "Solid defensive shift, completely shut down wide threats.", isMotm: false },
      { name: "Declan Rice", role: "DM", rating: 8.0, comment: "Absolute anchor in midfield. Broke up every counter transition instantly.", isMotm: false },
      { name: "Kobbie Mainoo", role: "CM", rating: 7.5, comment: "Showcased spectacular close control to slip out of tight areas.", isMotm: false },
      { name: "Luke Shaw", role: "LB", rating: 7.0, comment: "High work rate down the left flank, delivered dangerous overlapping runs.", isMotm: false },
      { name: "Jude Bellingham", role: "AM", rating: 7.5, comment: "Aggressive box runs, linked midfield and attack smoothly.", isMotm: false },
      { name: "Bukayo Saka", role: "RW", rating: 8.5, comment: "Dazzling performance. Scored a magnificent curled goal before halftime.", isMotm: true },
      { name: "Harry Kane", role: "ST", rating: 8.0, comment: "Clinical skipper. Opened the scoring and captained with total authority.", isMotm: false }
    ],
    preview: {
      tactical: "Wembley farewell warm-up! Focus will be on standardizing the fluid 4-2-3-1 shapes and building transitional synergy.",
      keyStat: "England is unbeaten at Wembley in their last 8 warmup matches."
    }
  },
  "match_usa": {
    score: "2 - 1",
    scorers: "🏴󠁧󠁢󠁥󠁮󠁧󠁿 Kane (24'), Bellingham (65') | 🇺🇸 Pulisic (48')",
    report: "A thrilling opening World Cup victory in Atlanta! England navigated a massive physical test against the USMNT. Harry Kane got the Three Lions off to a perfect start, blasting home from a Bellingham pass. Christian Pulisic equalized early in the second half, but England responded in champion style as Jude Bellingham arrived late in the box to slot home a dramatic winner.",
    ratings: [
      { name: "Jordan Pickford", role: "GK", rating: 7.5, comment: "Pulled off a heroic fingertip save to deny Pulisic's late equalizer.", isMotm: false },
      { name: "John Stones", role: "CB", rating: 7.5, comment: "Maintained structural compactness under high American press.", isMotm: false },
      { name: "Marc Guéhi", role: "CB", rating: 7.0, comment: "Dominant in aerial battles against high physical strikers.", isMotm: false },
      { name: "Kyle Walker", role: "RB", rating: 7.0, comment: "Tough battle with Pulisic, recovered brilliantly in secondary stages.", isMotm: false },
      { name: "Declan Rice", role: "DM", rating: 7.5, comment: "Massive distance covered. Shielded the defensive block tirelessly.", isMotm: false },
      { name: "Kobbie Mainoo", role: "CM", rating: 7.0, comment: "Press-resistant display in highly contested midfield spaces.", isMotm: false },
      { name: "Luke Shaw", role: "LB", rating: 7.0, comment: "Defensively disciplined, limited wide overlaps from McKennie.", isMotm: false },
      { name: "Jude Bellingham", role: "AM", rating: 9.0, comment: "Sensational display. Provided a brilliant assist and scored the dramatic winner.", isMotm: true },
      { name: "Bukayo Saka", role: "RW", rating: 7.5, comment: "Constant overlapping threat down the right wing, stretched play.", isMotm: false },
      { name: "Harry Kane", role: "ST", rating: 8.0, comment: "Clinical finish to open the scoring. Led the line with authority.", isMotm: false }
    ],
    preview: {
      tactical: "Group C opener in Atlanta! Expect heavy reliance on Rice and Mainoo to control transitions against the USMNT's athletic shapes.",
      keyStat: "England and USA draw their last World Cup meeting 0-0 in 2022. Time to claim the win!"
    }
  },
  "match_slovenia": {
    score: "2 - 0",
    scorers: "🏴󠁧󠁢󠁥󠁮󠁧󠁿 Foden (34'), Saka (71')",
    report: "A masterclass in patient tactical possession in East Rutherford! England comfortable secured their second World Cup win, effectively breaking down Slovenia's compact low block. Phil Foden opened the scoring with a brilliant curled free kick. Bukayo Saka sealed the points in the 71st minute, capitalizing on a Cole Palmer pass to slide the ball home.",
    ratings: [
      { name: "Jordan Pickford", role: "GK", rating: 7.0, comment: "Secured a comfortable clean sheet, commanding the penalty area.", isMotm: false },
      { name: "John Stones", role: "CB", rating: 7.5, comment: "Superb composure. Initiated attacking sequences from deep lines.", isMotm: false },
      { name: "Marc Guéhi", role: "CB", rating: 7.5, comment: "Completely shut down Šeško with tight, intelligent marking.", isMotm: false },
      { name: "Kyle Walker", role: "RB", rating: 7.0, comment: "Solid positioning, tracked runs diligently.", isMotm: false },
      { name: "Declan Rice", role: "DM", rating: 7.5, comment: "Won crucial second balls, dictating play with high efficiency.", isMotm: false },
      { name: "Jude Bellingham", role: "AM", rating: 7.5, comment: "Drew multiple defensive markers, creating massive central space.", isMotm: false },
      { name: "Luke Shaw", role: "LB", rating: 7.0, comment: "Reliable overlapping support, cross-deliveries were threatful.", isMotm: false },
      { name: "Phil Foden", role: "LW", rating: 8.5, comment: "Stellar performance. Scored a magnificent free kick and generalled the attack.", isMotm: true },
      { name: "Bukayo Saka", role: "RW", rating: 8.0, comment: "Clinical finish for England's second goal. Constant dribbling threat.", isMotm: false },
      { name: "Harry Kane", role: "ST", rating: 7.5, comment: "Dropped deep to link play, creating numerical overloads in midfield.", isMotm: false }
    ],
    preview: {
      tactical: "Group C Matchday 2! Patient ball possession and wing width will be crucial to break Slovenia's compact low block.",
      keyStat: "Slovenia kept 3 clean sheets during qualifying, demonstrating defensive organization."
    }
  },
  "match_senegal": {
    score: "3 - 1",
    scorers: "🏴󠁧󠁢󠁥󠁮󠁧󠁿 Kane (41', 88'), Saka (62') | 🇸🇳 Jackson (12')",
    report: "England wins Group C! An intense, high-tempo battle in Los Angeles concludes with England securing top spot. Despite Nicolas Jackson scoring an early opener, the Three Lions showcased immense resilience. Harry Kane equalized with a towering header before Bukayo Saka put England ahead. Skipper Kane then sealed the victory in the 88th minute with a clinical low drive.",
    ratings: [
      { name: "Jordan Pickford", role: "GK", rating: 7.5, comment: "Made three spectacular saves to deny quick Senegal counters.", isMotm: false },
      { name: "John Stones", role: "CB", rating: 7.5, comment: "Dominant physical presence, stopped key central attacks.", isMotm: false },
      { name: "Marc Guéhi", role: "CB", rating: 7.0, comment: "Solid positioning, tracked Jackson's runs diligently.", isMotm: false },
      { name: "Kyle Walker", role: "RB", rating: 7.5, comment: "Used blistering speed to recover and block critical crosses.", isMotm: false },
      { name: "Declan Rice", role: "DM", rating: 8.0, comment: "Absolute shield. Won key tackles in midfield, recycling play instantly.", isMotm: false },
      { name: "Kobbie Mainoo", role: "CM", rating: 7.5, comment: "Excellent passing accuracy, controlled the tempo in the second half.", isMotm: false },
      { name: "Luke Shaw", role: "LB", rating: 7.0, comment: "Relentless engine, contributed heavily to the high press.", isMotm: false },
      { name: "Jude Bellingham", role: "AM", rating: 8.0, comment: "High creativity. Assisted Saka's goal with a visionary pass.", isMotm: false },
      { name: "Bukayo Saka", role: "RW", rating: 8.0, comment: "Scored the go-ahead goal with a clinical far-post slot.", isMotm: false },
      { name: "Harry Kane", role: "ST", rating: 9.0, comment: "Match-winner. Scored a magnificent brace and led the attack.", isMotm: true }
    ],
    preview: {
      tactical: "Final group stage battle in Los Angeles! High physical threat from Senegal's wide wingers, requiring solid transitions.",
      keyStat: "England is unbeaten in all historical World Cup meetings with African nations."
    }
  }
};

// 3.6 Scout Comparison Attributes Database (2026 FIFA Attributes out of 100)
const SQUAD_ATTRIBUTES = {
  "jordan_pickford": { pac: 78, sho: 15, pas: 88, dri: 48, def: 90, phy: 82 },
  "aaron_ramsdale": { pac: 70, sho: 12, pas: 82, dri: 40, def: 84, phy: 78 },
  "dean_henderson": { pac: 66, sho: 10, pas: 76, dri: 36, def: 82, phy: 80 },
  "kyle_walker": { pac: 92, sho: 50, pas: 78, dri: 74, def: 88, phy: 86 },
  "joe_gomez": { pac: 84, sho: 34, pas: 72, dri: 68, def: 82, phy: 80 },
  "john_stones": { pac: 72, sho: 58, pas: 88, dri: 82, def: 88, phy: 82 },
  "marc_guehi": { pac: 78, sho: 36, pas: 76, dri: 70, def: 86, phy: 84 },
  "kieran_trippier": { pac: 68, sho: 64, pas: 86, dri: 78, def: 80, phy: 74 },
  "ezri_konsa": { pac: 76, sho: 32, pas: 74, dri: 64, def: 84, phy: 82 },
  "lewis_dunk": { pac: 58, sho: 44, pas: 78, dri: 60, def: 82, phy: 85 },
  "luke_shaw": { pac: 82, sho: 60, pas: 82, dri: 80, def: 80, phy: 78 },
  "declan_rice": { pac: 80, sho: 72, pas: 84, dri: 80, def: 89, phy: 88 },
  "trent_alexander_arnold": { pac: 78, sho: 78, pas: 94, dri: 84, def: 74, phy: 74 },
  "jude_bellingham": { pac: 85, sho: 86, pas: 88, dri: 90, def: 78, phy: 88 },
  "conor_gallagher": { pac: 78, sho: 74, pas: 78, dri: 76, def: 80, phy: 86 },
  "eberechi_eze": { pac: 84, sho: 80, pas: 85, dri: 89, def: 42, phy: 68 },
  "cole_palmer": { pac: 82, sho: 88, pas: 90, dri: 89, def: 45, phy: 70 },
  "adam_wharton": { pac: 70, sho: 62, pas: 86, dri: 80, def: 78, phy: 72 },
  "kobbie_mainoo": { pac: 78, sho: 70, pas: 84, dri: 88, def: 74, phy: 75 },
  "bukayo_saka": { pac: 89, sho: 85, pas: 86, dri: 90, def: 48, phy: 76 },
  "harry_kane": { pac: 72, sho: 94, pas: 89, dri: 83, def: 44, phy: 84 },
  "phil_foden": { pac: 86, sho: 88, pas: 89, dri: 92, def: 46, phy: 66 },
  "ivan_toney": { pac: 76, sho: 84, pas: 72, dri: 76, def: 40, phy: 86 },
  "ollie_watkins": { pac: 88, sho: 85, pas: 74, dri: 80, def: 38, phy: 78 },
  "anthony_gordon": { pac: 92, sho: 78, pas: 76, dri: 83, def: 45, phy: 74 },
  "jarrod_bowen": { pac: 85, sho: 82, pas: 78, dri: 81, def: 48, phy: 80 }
};

// 3.7 Simulated Match Events Chronology Database (England Hub)
const SIMULATION_EVENTS = {
  "match_ireland": [
    { minute: 1, type: "kickoff", text: "Kick-off at Wembley! An electric home atmosphere as England begins their farewell warm-up friendly." },
    { minute: 14, type: "goal_swe", text: "GOAL for England! Phil Foden swings in a pinpoint corner, and skipper Harry Kane rises above the defenders to plant a towering header home! 1-0 England." },
    { minute: 28, type: "foul", text: "Marc Guéhi picks up a yellow card for a tactical challenge in midfield." },
    { minute: 42, type: "goal_swe", text: "GOAL for England! Bukayo Saka cuts inside from the right wing, beats two players, and curls a spectacular dipping shot into the far corner! 2-0!" },
    { minute: 45, type: "halftime", text: "Half Time: England leads 2-0. Complete dominance in possession (68%), dictating play with high efficiency." },
    { minute: 65, type: "sub", text: "Cole Palmer is introduced off the bench, looking to unlock the Irish lines." },
    { minute: 73, type: "save", text: "Jordan Pickford remains alert, pulling off a comfortable catch from a long-range Irish freekick." },
    { minute: 78, type: "goal_swe", text: "GOAL for England! Cole Palmer receives a pass from Declan Rice, takes a touch, and slides a clinical low finish past the keeper! 3-0!" },
    { minute: 90, type: "fulltime", text: "Full Time! England cruises to a comprehensive 3-0 farewell victory at Wembley Stadium. The squad is officially ready!" }
  ],
  "match_usa": [
    { minute: 1, type: "kickoff", text: "Kick-off in Atlanta! The sun sets in Georgia as England begins their World Cup Group C campaign in front of a packed stadium." },
    { minute: 10, type: "save", text: "John Stones makes a massive sliding block in the penalty box to deny Pulisic's counter-attack." },
    { minute: 24, type: "goal_swe", text: "GOAL for England! Jude Bellingham drives through midfield, slips a perfect pass through the channel to Harry Kane, who fires a first-time shot past Turner! 1-0 England!" },
    { minute: 45, type: "halftime", text: "Half Time in Atlanta: England leads 1-0. Highly competitive half with both teams creating transition chances." },
    { minute: 48, type: "goal_opp", text: "GOAL for USA! Christian Pulisic cuts inside from the left flank, combines with McKennie, and slots a low finish into the far corner. 1-1." },
    { minute: 58, type: "foul", text: "Declan Rice wins a tactical foul in midfield, breaking up USMNT's transition attempts." },
    { minute: 65, type: "goal_swe", text: "GOAL for England! Bukayo Saka delivers a low cross, Harry Kane draws two defenders, and Jude Bellingham arrives late in the box to smash it home! 2-1 England!" },
    { minute: 82, type: "save", text: "Heroic save! Jordan Pickford stretches to deny Pulisic's dipping effort. Crucial reflexes!" },
    { minute: 90, type: "fulltime", text: "Full Time! England navigates a massive physical test to claim a vital 2-1 victory over the United States in Atlanta!" }
  ],
  "match_slovenia": [
    { minute: 1, type: "kickoff", text: "Kick-off in East Rutherford! England faces a highly organized Slovenia side. Spacing will be key." },
    { minute: 15, type: "save", text: "Jordan Pickford pulls off a comfortable catch from Benjamin Šeško's long-range header." },
    { minute: 34, type: "goal_swe", text: "GOAL for England! Spectacular! Phil Foden curls a gorgeous 25-yard free kick over the wall and into the top corner! 1-0 England!" },
    { minute: 45, type: "halftime", text: "Half Time: England leads 1-0. Complete tactical control of possession (64%), keeping Slovenia restricted." },
    { minute: 58, type: "foul", text: "Kyle Walker makes a robust challenge to stop a quick counter-attack, earning a yellow card." },
    { minute: 71, type: "goal_swe", text: "GOAL for England! Cole Palmer plays a slide-rule pass into the box, and Bukayo Saka beats his marker to slot it far-post! 2-0 England!" },
    { minute: 82, type: "save", text: "Marc Guéhi makes a superb recovery tackle to deny Šeško inside the penalty area." },
    { minute: 90, type: "fulltime", text: "Full Time! A masterclass in tactical patience as England cruises to a 2-0 victory over Slovenia at MetLife Stadium." }
  ],
  "match_senegal": [
    { minute: 1, type: "kickoff", text: "Kick-off in Los Angeles! A massive blockbuster matchup between England and Senegal to decide top spot in Group C." },
    { minute: 12, type: "goal_opp", text: "GOAL for Senegal! Nicolas Jackson capitalizes on a quick turn, escaping central coverage to blast a low shot past Pickford. 1-0 Senegal." },
    { minute: 28, type: "foul", text: "Declan Rice wins a hard-fought duel in central midfield, restarting the build-up." },
    { minute: 41, type: "goal_swe", text: "GOAL for England! Luke Shaw swings in a beautiful cross, and Harry Kane plants a towering header home! 1-1!" },
    { minute: 45, type: "halftime", text: "Half Time: 1-1. An extremely physical, high-tempo battle between two powerhouses." },
    { minute: 62, type: "goal_swe", text: "GOAL for England! Jude Bellingham drives forward, feeds Bukayo Saka on the right wing, who curls a clinical low finish past the keeper! 2-1 England!" },
    { minute: 73, type: "save", text: "Jordan Pickford pulls off a spectacular diving save to deny a powerful Senegal strike." },
    { minute: 88, type: "goal_swe", text: "GOAL for England! Relentless press! Ollie Watkins wins the ball in the final third, crosses to Harry Kane, who fires a low drive home! 3-1 England!" },
    { minute: 90, type: "fulltime", text: "Full Time! England wins Group C! A roaring 3-1 comeback victory in Los Angeles seals the top spot!" }
  ]
};

function fetchGuardianReport(matchId, opponentName, matchDate) {
  const container = document.getElementById("guardian-press-container");
  if (!container) return;
  
  const fromDate = matchDate;
  const toDate = new Date(new Date(matchDate).getTime() + 48 * 60 * 60 * 1000).toISOString().split('T')[0];
  
  const url = `https://content.guardianapis.com/search?q=england%20AND%20(football%20OR%20soccer%20OR%20${opponentName})&from-date=${fromDate}&to-date=${toDate}&api-key=test`;
  
  fetch(url)
    .then(res => res.json())
    .then(data => {
      const results = data.response && data.response.results ? data.response.results : [];
      if (results.length > 0) {
        const art = results[0];
        container.innerHTML = `
          <div class="press-card">
            <div style="font-size: 1.5rem; color: #0A1F3C; display: flex; align-items: center;"><i class="far fa-newspaper"></i></div>
            <div style="flex-grow: 1;">
              <span style="font-size: 0.6rem; font-weight: 800; color: #E60000; text-transform: uppercase; letter-spacing: 0.05em; display: block; margin-bottom: 2px;">The Guardian Coverage</span>
              <a href="${art.webUrl}" target="_blank" style="font-size: 0.85rem; font-weight: 700; color: var(--text-white); text-decoration: none; border-bottom: 1px dashed rgba(10,31,60,0.2); transition: var(--transition-smooth);" onmouseover="this.style.color='var(--england-red)'" onmouseout="this.style.color='var(--text-white)'">${art.webTitle}</a>
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
              <p style="font-size: 0.75rem; color: var(--text-secondary);">No match report in search window. <a href="https://www.theguardian.com/football" target="_blank" style="color: var(--england-red); text-decoration: none; font-weight: 700;">Browse Football Feed ➔</a></p>
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
            <p style="font-size: 0.75rem; color: var(--text-secondary);">Media connection offline. <a href="https://www.theguardian.com/football" target="_blank" style="color: var(--england-red); text-decoration: none; font-weight: 700;">Browse Guardian ➔</a></p>
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
      const filtered = items.filter(item => {
        const title = item.title.toLowerCase();
        const desc = item.description ? item.description.toLowerCase() : "";
        return title.includes("england") || title.includes("kane") || title.includes(opponentName.toLowerCase()) ||
               desc.includes("england") || desc.includes("kane") || desc.includes(opponentName.toLowerCase());
      });
      
      const displayItems = filtered.length > 0 ? filtered.slice(0, 2) : items.slice(0, 2);
      
      if (displayItems.length > 0) {
        container.innerHTML = displayItems.map(item => `
          <div class="press-card" style="margin-top: 0.8rem;">
            <div style="font-size: 1.3rem; color: #CC0000; display: flex; align-items: center;"><i class="fas fa-rss"></i></div>
            <div style="flex-grow: 1;">
              <span style="font-size: 0.6rem; font-weight: 800; color: #FCA5A5; text-transform: uppercase; letter-spacing: 0.05em; display: block; margin-bottom: 2px;">ESPN Soccer Wire</span>
              <a href="${item.link}" target="_blank" style="font-size: 0.82rem; font-weight: 700; color: var(--text-white); text-decoration: none; border-bottom: 1px dashed rgba(10,31,60,0.2); transition: var(--transition-smooth);" onmouseover="this.style.color='var(--england-red)'" onmouseout="this.style.color='var(--text-white)'">${item.title}</a>
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
              <p style="font-size: 0.75rem; color: var(--text-secondary);">No england news active. <a href="https://www.espn.com/soccer" target="_blank" style="color: var(--england-red); text-decoration: none; font-weight: 700;">Browse Soccer Feed ➔</a></p>
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
            <p style="font-size: 0.75rem; color: var(--text-secondary);">Media connection offline. <a href="https://www.espn.com/soccer" target="_blank" style="color: var(--england-red); text-decoration: none; font-weight: 700;">Browse ESPN ➔</a></p>
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
        <div class="match-report-meta" style="margin-bottom: 0; color: var(--text-secondary);">
          <span><i class="far fa-calendar-alt"></i> ${match.date}</span>
          <span style="margin: 0 5px; color: var(--text-secondary);">|</span>
          <span><i class="fas fa-map-marker-alt"></i> ${match.venue}</span>
        </div>
      </div>
      
      <div class="match-report-title" style="margin-bottom: 1rem; justify-content: center; background: rgba(10,31,60,0.02); border: 1px solid rgba(10,31,60,0.05); padding: 0.8rem; border-radius: var(--radius-md); font-weight: 800; font-size: 1.15rem; display: flex; align-items: center;">
        <span>England</span>
        <span class="flag-vs" style="margin: 0 10px;">🏴󠁧󠁢󠁥󠁮󠁧󠁿</span>
        <span style="color: var(--england-red); font-size: 1.7rem; margin: 0 0.8rem; font-family: monospace; font-weight: 800; text-shadow: 0 0 10px rgba(230,0,0,0.1);">${reportData.score}</span>
        <span style="margin: 0 10px;">${match.opponentFlag}</span>
        <span>${match.opponent}</span>
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
        <div class="match-report-scorers" style="margin-bottom: 0.8rem; font-size: 0.9rem; line-height: 1.45;">
          <strong>Goals:</strong> ${reportData.scorers}
        </div>
        
        <div class="match-report-text" style="border-bottom: 1px solid rgba(10,31,60,0.08); padding-bottom: 1.2rem; margin-bottom: 1.2rem; font-size: 0.92rem; line-height: 1.5; color: var(--text-primary);">
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
        ratingRow.style.display = "flex";
        ratingRow.style.justifyContent = "space-between";
        ratingRow.style.alignItems = "center";
        ratingRow.style.padding = "0.6rem 0";
        ratingRow.style.borderBottom = "1px solid rgba(10,31,60,0.05)";
        
        const isExcellent = p.rating >= 8.0;
        const ratingClass = isExcellent ? "excellent" : "good";
        
        ratingRow.innerHTML = `
          <div class="rating-player-info" style="flex-grow: 1; padding-right: 1rem;">
            <div class="rating-player-name" style="font-size: 0.88rem; font-weight: 700; color: var(--text-white);">
              ${p.name} <span style="font-size: 0.7rem; color: var(--text-secondary); font-weight: 500;">(${p.role})</span>
              ${p.isMotm ? '<span class="rating-motm-badge" style="margin-left: 5px; background: var(--england-red); color: white; font-size: 0.6rem; padding: 1px 4px; border-radius: 3px; font-weight:800;">MOTM</span>' : ''}
            </div>
            <div class="rating-player-comment" style="font-size: 0.78rem; color: var(--text-secondary); margin-top: 2px;">${p.comment}</div>
          </div>
          <div class="rating-score-pill ${ratingClass}" style="font-family: monospace; font-weight: 800; font-size: 1.1rem; background: ${isExcellent ? 'rgba(230,0,0,0.1)' : 'rgba(10,31,60,0.05)'}; color: ${isExcellent ? 'var(--england-red)' : 'var(--text-white)'}; padding: 0.2rem 0.6rem; border-radius: 4px;">
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
      <div class="match-report-badge upcoming" style="background: rgba(10,31,60,0.05); color: var(--text-white); border-color: rgba(10,31,60,0.1); margin-bottom: 0.8rem; display: inline-block; padding: 2px 8px; border-radius: 4px; font-size: 0.7rem; font-weight: 800; text-transform: uppercase;">Upcoming Fixture</div>
      <div class="match-report-title" style="font-size: 1.15rem; font-weight: 800; margin-bottom: 0.5rem; display: flex; align-items: center;">
        <span>England</span>
        <span class="flag-vs" style="margin: 0 10px;">🏴󠁧󠁢󠁥󠁮󠁧󠁿</span>
        <span style="color: var(--text-secondary); font-size: 0.9rem; margin: 0 0.5rem;">vs</span>
        <span style="margin: 0 10px;">${match.opponentFlag}</span>
        <span>${match.opponent}</span>
      </div>
      <div class="match-report-meta" style="font-size: 0.78rem; color: var(--text-secondary); margin-bottom: 1rem;">
        <span><i class="far fa-calendar-alt"></i> ${match.date} at ${match.time}</span>
        <span style="margin: 0 5px; color: var(--text-secondary);">|</span>
        <span><i class="fas fa-map-marker-alt"></i> ${match.venue}</span>
      </div>
      
      <div class="match-report-scorers" style="border-left: 3px solid var(--england-blue); background: rgba(10, 31, 60, 0.03); color: var(--text-primary); padding: 0.8rem; border-radius: 0 4px 4px 0; font-size: 0.85rem; line-height: 1.45; margin-bottom: 0.8rem;">
        <strong>Tactical Preview:</strong> ${reportData.preview.tactical}
      </div>
      
      <div class="match-report-text" style="border-bottom: none; margin-bottom: 0; padding-bottom: 0; font-size: 0.85rem; color: var(--text-secondary);">
        <strong>Key Scout Stat:</strong> ${reportData.preview.keyStat}
      </div>
    `;
  }
}

// 4. Locker Room Chat Messages Database (Pre-Camp Banter adapted for England)
const CHAT_MESSAGES = [
  { sender: "Harry Kane", avatar: "🏴󠁧󠁢󠁥󠁮󠁧󠁿", text: "Morning lads! Just checking in. Everyone sorted for the St George's Park gather tomorrow?", time: "10:15", isCaptain: true },
  { sender: "Declan Rice", avatar: "🏴󠁧󠁢󠁥󠁮󠁧󠁿", text: "Yes skipper! Bags packed and ready. I'm bringing a massive stash of Yorkshire Tea for the camp. ☕🏴󠁧󠁢󠁥󠁮󠁧󠁿", time: "10:18" },
  { sender: "Jude Bellingham", avatar: "🏴󠁧󠁢󠁥󠁮󠁧󠁿", text: "Can't wait to get back. Just landed from Madrid, heading straight to St George's. Energy levels are 100%!", time: "10:22" },
  { sender: "Bukayo Saka", avatar: "🏴󠁧󠁢󠁥󠁮󠁧󠁿", text: "Nice one Jude! Phil, hope you've got your boots sorted. No excuses during training drills! 😂", time: "10:25" },
  { sender: "Phil Foden", avatar: "🏴󠁧󠁢󠁥󠁮󠁧󠁿", text: "Ahaha, you know I'm always ready Bukayo! 😉 Focused on standardizing the tactical layout. Let's make this year ours.", time: "10:28" },
  { sender: "Harry Kane", avatar: "🏴󠁧󠁢󠁥󠁮󠁧󠁿", text: "Love that focus. First meeting is at 10:00 tomorrow morning. Let's start strong, stick together and bring it home! 🏴󠁧󠁢󠁥󠁮󠁧󠁿💪", time: "10:31", isCaptain: true }
];

// 5. Locker Room Music Playlist Data (English Football Anthems)
const PLAYLIST = [
  { title: "Three Lions (Football's Coming Home)", artist: "Baddiel, Skinner & Lightning Seeds", duration: "3:44", category: "Classic Anthem", audioUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3", spotifyUrl: "https://open.spotify.com/track/0R27V2W3u3nQv8h5i8y8a1" },
  { title: "World in Motion", artist: "New Order", duration: "4:30", category: "Dance / Hype", audioUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3", spotifyUrl: "https://open.spotify.com/track/4P49C8vD5Q9i0j9QjRreup" },
  { title: "Vindaloo", artist: "Fat Les", duration: "3:40", category: "Hype / Crowd", audioUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3", spotifyUrl: "https://open.spotify.com/track/6211L5N6n6mSZvQj22t1v3" },
  { title: "Sweet Caroline", artist: "Neil Diamond", duration: "3:21", category: "Crowd Classic", audioUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-4.mp3", spotifyUrl: "https://open.spotify.com/track/6ph2M0l3f2s8Gk0Q4eT3a1" },
  { title: "Southgate You're the One", artist: "Atomic Kitten", duration: "3:08", category: "Hype Pop", audioUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-5.mp3", spotifyUrl: "https://open.spotify.com/track/3kP71vD4qV9i0j8QjRreup" }
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

// 3.8 England's two tactical formations coordinate mappings (4-2-3-1 & 3-4-3)
const FORMATIONS = {
  "4231": {
    name: "Fluid 4-2-3-1 (Default)",
    briefing: "<strong>Tactical Briefing:</strong> Relying on defensive anchors Declan Rice and Kobbie Mainoo to break transitions. Attacking lines feature Bukayo Saka and Phil Foden drifting inside to feed Kane, supported by late box-runs from Bellingham.",
    lineup: [
      { id: "jordan_pickford", top: "85%", left: "50%", role: "GK" },
      { id: "kyle_walker", top: "67%", left: "85%", role: "RB" },
      { id: "john_stones", top: "68%", left: "63%", role: "RCB" },
      { id: "marc_guehi", top: "68%", left: "37%", role: "LCB" },
      { id: "luke_shaw", top: "67%", left: "15%", role: "LB" },
      { id: "declan_rice", top: "52%", left: "35%", role: "LDM" },
      { id: "kobbie_mainoo", top: "52%", left: "65%", role: "RDM" },
      { id: "bukayo_saka", top: "32%", left: "80%", role: "RAM" },
      { id: "jude_bellingham", top: "30%", left: "50%", role: "AM" },
      { id: "phil_foden", top: "32%", left: "20%", role: "LAM" },
      { id: "harry_kane", top: "12%", left: "50%", role: "ST" }
    ],
    pressing: [
      { top: "12%", left: "50%" },
      { top: "30%", left: "50%" },
      { top: "32%", left: "20%" },
      { top: "32%", left: "80%" }
    ],
    runs: [
      { fromLeft: "80%", fromTop: "32%", toLeft: "68%", toTop: "15%" },
      { fromLeft: "20%", fromTop: "32%", toLeft: "32%", toTop: "15%" },
      { fromLeft: "15%", fromTop: "67%", toLeft: "12%", toTop: "35%" }
    ]
  },
  "343": {
    name: "Defensive-Minded 3-4-3",
    briefing: "<strong>Tactical Briefing:</strong> Highly secure defensive shape utilizing Walker, Stones, and Guéhi in a robust back three. Wing-backs Trippier and Shaw drop deep to block wide channels, while Saka and Foden support Kane on direct counters.",
    lineup: [
      { id: "jordan_pickford", top: "85%", left: "50%", role: "GK" },
      { id: "kyle_walker", top: "67%", left: "75%", role: "RCB" },
      { id: "john_stones", top: "67%", left: "50%", role: "CB" },
      { id: "marc_guehi", top: "67%", left: "25%", role: "LCB" },
      { id: "kieran_trippier", top: "48%", left: "88%", role: "RWB" },
      { id: "jude_bellingham", top: "50%", left: "62%", role: "RCM" },
      { id: "declan_rice", top: "50%", left: "38%", role: "LCM" },
      { id: "luke_shaw", top: "48%", left: "12%", role: "LWB" },
      { id: "bukayo_saka", top: "25%", left: "78%", role: "RW" },
      { id: "harry_kane", top: "14%", left: "50%", role: "ST" },
      { id: "phil_foden", top: "25%", left: "22%", role: "LW" }
    ],
    pressing: [
      { top: "14%", left: "50%" },
      { top: "25%", left: "22%" },
      { top: "25%", left: "78%" }
    ],
    runs: [
      { fromLeft: "88%", fromTop: "48%", toLeft: "85%", toTop: "25%" },
      { fromLeft: "12%", fromTop: "48%", toLeft: "15%", toTop: "25%" }
    ]
  }
};

let ACTIVE_FORMATION = "4231";

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
        "⚽ Harry Kane has finalized the 26-man roster for the 2026 FIFA World Cup.",
        "✈️ England will depart for their main training facility in Atlanta, Georgia tomorrow morning.",
        "💪 Jude Bellingham arrives in stellar form from his domestic campaign.",
        "🚑 Medical staff confirms that defender Luke Shaw has returned to full-contact training.",
        "⭐ Kobbie Mainoo designated by FIFA as one of the ultimate midfield prospects of the tournament."
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
      node = document.createElement("div");
      node.className = "pitch-player-node";
      node.style.transition = "top 0.6s cubic-bezier(0.25, 0.8, 0.25, 1), left 0.6s cubic-bezier(0.25, 0.8, 0.25, 1), opacity 0.4s ease";
      node.setAttribute("data-player-id", item.id);
      node.innerHTML = `
        <div class="jersey-node" style="background: radial-gradient(circle, var(--england-blue) 60%, var(--england-red) 100%); color: white; border: 2px solid white;">${player.number}</div>
        <div class="node-name" style="background: rgba(10,31,60,0.85); border-color: rgba(10,31,60,0.1);">${player.name.split(" ").pop()}</div>
      `;
      node.addEventListener("click", () => openPlayerModal(player.id));
      pitch.appendChild(node);
      
      node.style.top = item.top;
      node.style.left = item.left;
      node.style.opacity = "0";
      node.style.display = "flex";
      
      setTimeout(() => {
        node.style.opacity = "1";
      }, 50);
    } else {
      node.style.display = "flex";
      node.style.pointerEvents = "auto";
      setTimeout(() => {
        node.style.top = item.top;
        node.style.left = item.left;
        node.style.opacity = "1";
      }, 20);
    }
  });

  renderTacticalOverlays();
}

function renderTacticalOverlays() {
  const pitch = document.getElementById("tactical-pitch-inner");
  if (!pitch) return;

  pitch.querySelectorAll(".pressing-zone, .tactical-run-arrow").forEach(el => el.remove());

  const showPressing = document.getElementById("whiteboard-show-pressing")?.checked;
  const showRuns = document.getElementById("whiteboard-show-runs")?.checked;
  const formation = FORMATIONS[ACTIVE_FORMATION];

  if (showPressing && formation.pressing) {
    formation.pressing.forEach(pos => {
      const zone = document.createElement("div");
      zone.className = "pressing-zone";
      zone.style.background = "radial-gradient(circle, rgba(230, 0, 0, 0.4) 0%, transparent 70%)";
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
          <path d="M 0 2 L 10 5 L 0 8 z" fill="var(--england-red)" />
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
      path.setAttribute("stroke", "var(--england-red)");
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
      <div class="schedule-dot-indicator" style="border-color: ${isWarmup ? 'var(--england-blue)' : 'var(--england-red)'};"></div>
      <div class="schedule-item-header">
        <span class="match-badge" style="background: ${isWarmup ? 'rgba(10,31,60,0.1)' : 'rgba(230,0,0,0.08)'}; color: ${isWarmup ? 'var(--england-blue)' : 'var(--england-red)'};">${isWarmup ? 'WARM-UP FRIENDLY' : 'FIFA WORLD CUP'}</span>
        <span class="match-date-stamp" style="color: var(--text-secondary);"><i class="far fa-calendar-alt"></i> ${match.date} at ${match.time}</span>
      </div>
      <div class="schedule-item-body">
        <h3 class="match-pairing" style="color: var(--text-white);">England <span class="flag-vs">🏴󠁧󠁢󠁥󠁮󠁧󠁿</span> vs. ${match.opponentFlag} ${match.opponent}</h3>
        <p class="match-venue" style="color: var(--text-secondary);"><i class="fas fa-map-marker-alt"></i> ${match.venue}</p>
        <p class="match-info-desc" style="color: var(--text-primary);">${match.details}</p>
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
          <span class="chat-sender-name">${msg.sender} ${msg.isCaptain ? '<span class="captain-badge" style="background: var(--england-red); color: white;">Captain</span>' : ''}</span>
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
  name.innerHTML = `${player.name} <span class="modal-jersey-pill" style="background: var(--england-red); color: white;">#${player.number}</span>`;
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
    box.style.background = "rgba(10,31,60,0.02)";
    box.style.border = "1px solid rgba(10,31,60,0.06)";
    box.innerHTML = `
      <span class="metric-val" style="color: var(--england-blue);">${value}</span>
      <span class="metric-lbl" style="color: var(--text-secondary);">${cleanKey}</span>
    `;
    statBox.appendChild(box);
  }

  modal.classList.add("active");
}

// Compare Roster Players
function initScoutRoom() {
  const p1Select = document.getElementById("scout-player-1");
  const p2Select = document.getElementById("scout-player-2");
  if (!p1Select || !p2Select) return;

  const sortedPlayers = [...PLAYERS].sort((a, b) => a.name.localeCompare(b.name));
  
  p1Select.innerHTML = sortedPlayers.map(p => `<option value="${p.id}">${p.name} (${p.position})</option>`).join('');
  p2Select.innerHTML = sortedPlayers.map(p => `<option value="${p.id}">${p.name} (${p.position})</option>`).join('');

  p1Select.value = "jude_bellingham";
  p2Select.value = "cole_palmer";

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
    card1.style.borderColor = "var(--england-red)";
    card2.style.borderColor = "rgba(10,31,60,0.1)";
  } else if (p2Wins > p1Wins) {
    card1.className = "scout-player-card animate card-pop";
    card2.className = "scout-player-card animate card-pop active-winner";
    card1.style.borderColor = "rgba(10,31,60,0.1)";
    card2.style.borderColor = "var(--england-red)";
  } else {
    card1.className = "scout-player-card animate card-pop";
    card2.className = "scout-player-card animate card-pop";
    card1.style.borderColor = "rgba(10,31,60,0.1)";
    card2.style.borderColor = "rgba(10,31,60,0.1)";
  }

  card1.innerHTML = `
    <div class="scout-avatar-big">${p1.avatar}</div>
    <div style="text-align: center; margin-top: 0.5rem;">
      <h3 style="color: var(--text-white); margin-bottom: 2px;">${p1.name}</h3>
      <span class="bullet-tag type-news">${p1.position}</span>
    </div>
    <div style="font-size: 0.8rem; color: var(--text-secondary); display: flex; flex-direction: column; gap: 0.4rem; background: rgba(10,31,60,0.02); border: 1px solid rgba(10,31,60,0.05); padding: 0.8rem; border-radius: var(--radius-sm); margin-top: 0.5rem;">
      <div style="display: flex; justify-content: space-between;"><span>Club:</span><strong style="color:var(--text-white);">${p1.club}</strong></div>
      <div style="display: flex; justify-content: space-between;"><span>Age:</span><strong style="color:var(--text-white);">${p1.age} yrs</strong></div>
      <div style="display: flex; justify-content: space-between;"><span>Caps/Goals:</span><strong style="color:var(--text-white);">${p1.caps} (${p1.goals} G)</strong></div>
      <div style="display: flex; justify-content: space-between;"><span>Overall Rating:</span><strong style="color:var(--england-red); font-family: monospace;">${p1Wins > p2Wins ? 'WINNER 🏆' : 'Scout Match'}</strong></div>
    </div>
  `;

  card2.innerHTML = `
    <div class="scout-avatar-big">${p2.avatar}</div>
    <div style="text-align: center; margin-top: 0.5rem;">
      <h3 style="color: var(--text-white); margin-bottom: 2px;">${p2.name}</h3>
      <span class="bullet-tag type-blog">${p2.position}</span>
    </div>
    <div style="font-size: 0.8rem; color: var(--text-secondary); display: flex; flex-direction: column; gap: 0.4rem; background: rgba(10,31,60,0.02); border: 1px solid rgba(10,31,60,0.05); padding: 0.8rem; border-radius: var(--radius-sm); margin-top: 0.5rem;">
      <div style="display: flex; justify-content: space-between;"><span>Club:</span><strong style="color:var(--text-white);">${p2.club}</strong></div>
      <div style="display: flex; justify-content: space-between;"><span>Age:</span><strong style="color:var(--text-white);">${p2.age} yrs</strong></div>
      <div style="display: flex; justify-content: space-between;"><span>Caps/Goals:</span><strong style="color:var(--text-white);">${p2.caps} (${p2.goals} G)</strong></div>
      <div style="display: flex; justify-content: space-between;"><span>Overall Rating:</span><strong style="color:var(--england-red); font-family: monospace;">${p2Wins > p1Wins ? 'WINNER 🏆' : 'Scout Match'}</strong></div>
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
          <span class="scout-stat-value p1" style="font-weight:${p1IsWinner ? '800' : '500'}; color: var(--text-white);">${v1} ${p1IsWinner ? '<i class="fas fa-crown scout-winner-crown" style="color: var(--england-red)"></i>' : ''}</span>
          <span class="scout-stat-name" style="color: var(--text-secondary);">${s.name}</span>
          <span class="scout-stat-value p2" style="font-weight:${p2IsWinner ? '800' : '500'}; color: var(--text-white);">${p2IsWinner ? '<i class="fas fa-crown scout-winner-crown" style="color: var(--england-red)"></i>' : ''} ${v2}</span>
        </div>
        <div class="scout-stat-bar-bg" style="background: rgba(10,31,60,0.06);">
          <div class="scout-stat-bar-fill-left" id="bar-fill-l-${s.key}" style="width: 0%; background: var(--england-blue); transform: rotate(180deg); transform-origin: right;"></div>
          <div class="scout-stat-bar-fill-right" id="bar-fill-r-${s.key}" style="width: 0%; background: var(--england-red);"></div>
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

// Live Simulator Engine
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
      
      let scorer = "Harry Kane";
      if (event.text.toLowerCase().includes("saka")) scorer = "Bukayo Saka";
      else if (event.text.toLowerCase().includes("bellingham")) scorer = "Jude Bellingham";
      else if (event.text.toLowerCase().includes("foden")) scorer = "Phil Foden";
      else if (event.text.toLowerCase().includes("watkins")) scorer = "Ollie Watkins";
      else if (event.text.toLowerCase().includes("palmer")) scorer = "Cole Palmer";
      
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
        "A fierce physical duel in central midfield. Declan Rice wins the second ball.",
        "England technical staff gestures actively, demanding quicker transition distribution.",
        "Saka stretches the play down the right channel, looking for overlaps from Kyle Walker.",
        "Relentless vocal support from the traveling fans: 'Football's coming home' echoes through the stands.",
        "Possession recycled cleanly through John Stones as England controls the tempo."
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
  bubble.style.padding = "0.4rem 0.6rem";
  bubble.style.borderBottom = "1px solid rgba(10,31,60,0.05)";
  bubble.style.display = "flex";
  bubble.style.gap = "0.5rem";
  bubble.innerHTML = `
    <span class="sim-comment-minute" style="font-family: monospace; font-weight: 800; color: var(--england-red);">${minute}'</span>
    <span class="sim-comment-text" style="color: var(--text-primary);">${text}</span>
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
    scoreEl.textContent = `England ${scoreline}`;
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
  document.querySelectorAll(".modal-close, .modal-backdrop, #simulator-modal-close").forEach(el => {
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
  const tab4231 = document.getElementById("whiteboard-tab-4231");
  const tab343 = document.getElementById("whiteboard-tab-343");

  if (tab4231 && tab343) {
    tab4231.addEventListener("click", () => {
      tab343.classList.remove("active");
      tab4231.classList.add("active");
      ACTIVE_FORMATION = "4231";
      renderTacticalPitch();
    });

    tab343.addEventListener("click", () => {
      tab4231.classList.remove("active");
      tab343.classList.add("active");
      ACTIVE_FORMATION = "343";
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
      statusPill.style.color = "white";
      statusPill.style.background = "var(--england-red)";

      playSim.style.display = "none";
      pauseSim.style.display = "inline-block";
      pauseSim.innerHTML = '<i class="fas fa-pause"></i> Pause';

      if (simInterval) clearInterval(simInterval);
      simInterval = setInterval(handleSimulatorTick, simSpeed);
    });

    pauseSim.addEventListener("click", () => {
      const statusPill = document.getElementById("sim-status-pill");
      statusPill.textContent = "Paused";
      statusPill.style.color = "var(--text-white)";
      statusPill.style.background = "rgba(10,31,60,0.05)";

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
