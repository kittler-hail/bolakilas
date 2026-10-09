/* =========================================================
   BOLAKILAS — DATA HARIAN
   File ini di-generate OTOMATIS oleh fetch-schedule.js (sumber data:
   API-Football v3) pada 2026-10-09T07:01:23.316Z.

   Field hasil fetch (matches, standings, history, upcoming) akan
   TERTIMPA tiap kali script dijalankan ulang — jangan diedit manual.

   Field bigMatch.prediction / bigMatch.analysis / bigMatch.h2h /
   bigMatch.form / bigMatch.background / bigMatch.homeLogo /
   bigMatch.awayLogo BOLEH diedit manual: script ini mendeteksi &
   mempertahankan perubahan itu selama fixture (home vs away,
   tanggal) masih sama di run berikutnya.
   ========================================================= */

const siteData = {
    "date": "2026-10-09",
    "bigMatch": {
        "league": "Liga de Expansion MX",
        "date": "2026-10-09",
        "time": "08:00",
        "home": "Alebrijes de Oaxaca",
        "away": "Correcaminos Uat",
        "stadium": "",
        "prediction": "1 - 2",
        "analysis": "Alebrijes de Oaxaca bertemu Correcaminos Uat dalam laga Liga de Expansion MX. Analisis API-Football: Double chance : draw or Correcaminos Uat.",
        "statusCode": "FT",
        "minuteDisplay": "FT",
        "homeScore": 2,
        "awayScore": 1,
        "odds": {
            "home": 10,
            "draw": 45,
            "away": 45
        },
        "probability": {
            "home": 10,
            "draw": 45,
            "away": 45
        },
        "apiFixtureId": 1581444,
        "homeTeamId": 2300,
        "awayTeamId": 2313,
        "homeLogo": "https://media.api-sports.io/football/teams/2300.png",
        "awayLogo": "https://media.api-sports.io/football/teams/2313.png",
        "h2h": [
            {
                "home": "Alebrijes de Oaxaca",
                "away": "Correcaminos Uat",
                "score": "2-1"
            },
            {
                "home": "Correcaminos Uat",
                "away": "Alebrijes de Oaxaca",
                "score": "1-3"
            },
            {
                "home": "Alebrijes de Oaxaca",
                "away": "Correcaminos Uat",
                "score": "1-1"
            },
            {
                "home": "Alebrijes de Oaxaca",
                "away": "Correcaminos Uat",
                "score": "0-1"
            },
            {
                "home": "Correcaminos Uat",
                "away": "Alebrijes de Oaxaca",
                "score": "1-3"
            }
        ],
        "form": {
            "home": {
                "results": [
                    "W",
                    "L",
                    "L",
                    "L",
                    "W"
                ],
                "cleanSheets": 3,
                "failedToScore": 4,
                "goalsFor": 10,
                "goalsAgainst": 23,
                "winStreak": 2,
                "attack": 38,
                "defense": 39
            },
            "away": {
                "results": [
                    "L",
                    "D",
                    "L",
                    "W",
                    "D"
                ],
                "cleanSheets": 3,
                "failedToScore": 2,
                "goalsFor": 19,
                "goalsAgainst": 18,
                "winStreak": 2,
                "attack": 63,
                "defense": 61
            }
        }
    },
    "matches": [
        {
            "league": "Liga de Expansion MX",
            "date": "2026-10-09",
            "time": "08:00",
            "home": "Alebrijes de Oaxaca",
            "away": "Correcaminos Uat",
            "stadium": "",
            "round": "Apertura - 12",
            "statusCode": "FT",
            "minuteDisplay": "FT",
            "homeScore": 2,
            "awayScore": 1,
            "homeLogo": "https://media.api-sports.io/football/teams/2300.png",
            "awayLogo": "https://media.api-sports.io/football/teams/2313.png",
            "prediction": "1 - 2",
            "odds": {
                "home": 10,
                "draw": 45,
                "away": 45
            },
            "advice": "Double chance : draw or Correcaminos Uat",
            "comparison": {
                "form": {
                    "home": 38,
                    "away": 63
                },
                "att": {
                    "home": 38,
                    "away": 63
                },
                "def": {
                    "home": 39,
                    "away": 61
                },
                "poisson": {
                    "home": 31,
                    "away": 69
                },
                "h2h": {
                    "home": 71,
                    "away": 29
                },
                "goals": {
                    "home": 67,
                    "away": 33
                }
            },
            "goals": [
                {
                    "minute": "64",
                    "player": "A. Justo",
                    "team": "home"
                },
                {
                    "minute": "79",
                    "player": "I. Barreda",
                    "team": "home"
                },
                {
                    "minute": "88",
                    "player": "R. Arce",
                    "team": "away"
                }
            ],
            "cards": [
                {
                    "minute": "21",
                    "player": "J. Bustos",
                    "team": "home",
                    "type": "yellow"
                },
                {
                    "minute": "30",
                    "player": "J. Reyes",
                    "team": "home",
                    "type": "yellow"
                },
                {
                    "minute": "33",
                    "player": "A. Justo",
                    "team": "home",
                    "type": "yellow"
                },
                {
                    "minute": "45",
                    "player": "E. Torres",
                    "team": "away",
                    "type": "yellow"
                },
                {
                    "minute": "48",
                    "player": "W. Guzman",
                    "team": "away",
                    "type": "yellow"
                },
                {
                    "minute": "63",
                    "player": "I. Barreda",
                    "team": "home",
                    "type": "yellow"
                },
                {
                    "minute": "63",
                    "player": "O. Perez",
                    "team": "away",
                    "type": "yellow"
                },
                {
                    "minute": "70",
                    "player": "A. Catalan",
                    "team": "away",
                    "type": "yellow"
                },
                {
                    "minute": "90+1",
                    "player": "L. Jeffus",
                    "team": "home",
                    "type": "red"
                }
            ]
        },
        {
            "league": "Liga 1 (Indonesia)",
            "date": "2026-10-09",
            "time": "15:30",
            "home": "Persik Kediri",
            "away": "Persepam Madura Utd",
            "stadium": "Brawijaya Stadium",
            "round": "Pekan 4",
            "statusCode": "NS",
            "homeLogo": "https://media.api-sports.io/football/teams/4241.png",
            "awayLogo": "https://media.api-sports.io/football/teams/2444.png",
            "prediction": "1 - 2",
            "odds": {
                "home": 10,
                "draw": 45,
                "away": 45
            },
            "advice": "Winner : Persepam Madura Utd",
            "comparison": {
                "form": {
                    "home": 31,
                    "away": 69
                },
                "att": {
                    "home": 30,
                    "away": 70
                },
                "def": {
                    "home": 50,
                    "away": 50
                },
                "poisson": {
                    "home": 0,
                    "away": 100
                },
                "h2h": {
                    "home": 40,
                    "away": 60
                },
                "goals": {
                    "home": 57,
                    "away": 43
                }
            }
        },
        {
            "league": "Liga 1 (Indonesia)",
            "date": "2026-10-09",
            "time": "19:00",
            "home": "Isenmulang Kalteng",
            "away": "Persebaya Surabaya",
            "stadium": "Stadion Sriwedari",
            "round": "Pekan 4",
            "statusCode": "NS",
            "homeLogo": "https://media.api-sports.io/football/teams/24993.png",
            "awayLogo": "https://media.api-sports.io/football/teams/2446.png",
            "prediction": "1 - 2",
            "odds": {
                "home": 34,
                "draw": 50,
                "away": 50
            },
            "advice": "Double chance : draw or Persebaya Surabaya",
            "comparison": {
                "form": {
                    "home": 0,
                    "away": 100
                },
                "att": {
                    "home": 25,
                    "away": 75
                },
                "def": {
                    "home": 17,
                    "away": 83
                },
                "poisson": {
                    "home": 0,
                    "away": 0
                },
                "h2h": {
                    "home": 0,
                    "away": 0
                },
                "goals": {
                    "home": 0,
                    "away": 0
                }
            }
        }
    ],
    "news": [
        {
            "tag": "Bola",
            "title": "Atletico Madrid Tutup Pintu Bagi Barcelona dan Arsenal untuk Transfer Julian Alvarez",
            "desc": "Atletico Madrid menegaskan bahwa Julian Alvarez tidak dijual di musim panas ini.",
            "time": "3 jam lalu",
            "image": "https://cdns.klimg.com/bola.net/library/upload/24/2026/06/175/julian-alvarez-1_b1a23b6.jpg",
            "url": "https://www.bola.net/spanyol/atletico-madrid-tutup-pintu-bagi-barcelona-dan-arsenal-untuk-transfer-julian-alvarez-a2b5c0.html"
        },
        {
            "tag": "Bola",
            "title": "Marc Guehi Puji Mentalitas Manchester City Usai Comeback Dramatis atas Bournemouth",
            "desc": "Manchester City comeback 2-1 melawan Bournemouth beberapa saat yang lalu.",
            "time": "3 jam lalu",
            "image": "https://cdns.klimg.com/bola.net/library/upload/24/2026/08/175/guehi-2_4ba4676.jpg",
            "url": "https://www.bola.net/inggris/marc-guehi-puji-mentalitas-manchester-city-usai-comeback-dramatis-atas-bournemouth-df4cf5.html"
        },
        {
            "tag": "Bola",
            "title": "Man of the Match Man City vs Bournemouth: Marc Guehi",
            "desc": "Marc Guehi terpilih sebagai man of the match laga Manchester City vs Bournemouth di Premier League 2026/2027.",
            "time": "4 jam lalu",
            "image": "https://cdns.klimg.com/bola.net/library/upload/24/2026/08/175/guehi-1_9b8a7a9.jpg",
            "url": "https://www.bola.net/inggris/man-of-the-match-man-city-vs-bournemouth-marc-guehi-66249c.html"
        },
        {
            "tag": "Bola",
            "title": "Hasil Man City vs Bournemouth: Dua Bek Bawa City Epic Comeback di Laga Perdana EPL!",
            "desc": "Manchester City menang comeback 2-1 atas Bournemouth.",
            "time": "4 jam lalu",
            "image": "https://cdns.klimg.com/bola.net/library/upload/24/2026/08/175/guehi-2_4ba4676.jpg",
            "url": "https://www.bola.net/inggris/hasil-man-city-vs-bournemouth-dua-bek-bawa-city-epic-comeback-di-laga-perdana-epl-e3ad8c.html"
        },
        {
            "tag": "Bola",
            "title": "Al-Hilal Goda Gabriel Martinelli untuk Cabut dari Arsenal",
            "desc": "Al-Hilal lagi mencoba mendatangkan Gabriel Martinelli dari Arsenal.",
            "time": "5 jam lalu",
            "image": "https://cdns.klimg.com/bola.net/library/upload/24/2026/04/175/gabriel-martinelli_dee2be2.jpg",
            "url": "https://www.bola.net/inggris/al-hilal-goda-gabriel-martinelli-untuk-cabut-dari-arsenal-b9fa18.html"
        },
        {
            "tag": "Bola",
            "title": "Here We Go! Man City Keluarkan Rp 2 Triliun untuk Datangkan Ayyoub Bouaddi",
            "desc": "Manchester City telah bersepakat mengangkut Ayyoub Bouaddi dari Lille.",
            "time": "5 jam lalu",
            "image": "https://cdns.klimg.com/bola.net/library/upload/24/2026/06/175/ayyoub-bouaddi-brasi_ae82e79.jpg",
            "url": "https://www.bola.net/inggris/here-we-go-man-city-keluarkan-rp-2-triliun-untuk-datangkan-ayyoub-bouaddi-df377c.html"
        }
    ],
    "standings": {
        "Premier League": [
            {
                "rank": 1,
                "team": "Manchester City",
                "logo": "https://media.api-sports.io/football/teams/50.png",
                "played": 5,
                "win": 5,
                "draw": 0,
                "lose": 0,
                "gd": 8,
                "points": 15
            },
            {
                "rank": 2,
                "team": "Arsenal",
                "logo": "https://media.api-sports.io/football/teams/42.png",
                "played": 5,
                "win": 4,
                "draw": 0,
                "lose": 1,
                "gd": 4,
                "points": 12
            },
            {
                "rank": 3,
                "team": "Brighton",
                "logo": "https://media.api-sports.io/football/teams/51.png",
                "played": 5,
                "win": 3,
                "draw": 1,
                "lose": 1,
                "gd": 11,
                "points": 10
            },
            {
                "rank": 4,
                "team": "Brentford",
                "logo": "https://media.api-sports.io/football/teams/55.png",
                "played": 5,
                "win": 2,
                "draw": 3,
                "lose": 0,
                "gd": 6,
                "points": 9
            },
            {
                "rank": 5,
                "team": "Leeds",
                "logo": "https://media.api-sports.io/football/teams/63.png",
                "played": 5,
                "win": 2,
                "draw": 3,
                "lose": 0,
                "gd": 4,
                "points": 9
            },
            {
                "rank": 6,
                "team": "Liverpool",
                "logo": "https://media.api-sports.io/football/teams/40.png",
                "played": 5,
                "win": 2,
                "draw": 3,
                "lose": 0,
                "gd": 3,
                "points": 9
            },
            {
                "rank": 7,
                "team": "Everton",
                "logo": "https://media.api-sports.io/football/teams/45.png",
                "played": 5,
                "win": 2,
                "draw": 3,
                "lose": 0,
                "gd": 3,
                "points": 9
            },
            {
                "rank": 8,
                "team": "Hull City",
                "logo": "https://media.api-sports.io/football/teams/64.png",
                "played": 5,
                "win": 2,
                "draw": 2,
                "lose": 1,
                "gd": 2,
                "points": 8
            },
            {
                "rank": 9,
                "team": "Newcastle",
                "logo": "https://media.api-sports.io/football/teams/34.png",
                "played": 5,
                "win": 2,
                "draw": 2,
                "lose": 1,
                "gd": 0,
                "points": 8
            },
            {
                "rank": 10,
                "team": "Chelsea",
                "logo": "https://media.api-sports.io/football/teams/49.png",
                "played": 5,
                "win": 2,
                "draw": 1,
                "lose": 2,
                "gd": -2,
                "points": 7
            },
            {
                "rank": 11,
                "team": "Ipswich",
                "logo": "https://media.api-sports.io/football/teams/57.png",
                "played": 5,
                "win": 2,
                "draw": 0,
                "lose": 3,
                "gd": -4,
                "points": 6
            },
            {
                "rank": 12,
                "team": "Manchester United",
                "logo": "https://media.api-sports.io/football/teams/33.png",
                "played": 5,
                "win": 1,
                "draw": 2,
                "lose": 2,
                "gd": 0,
                "points": 5
            },
            {
                "rank": 13,
                "team": "Nottingham Forest",
                "logo": "https://media.api-sports.io/football/teams/65.png",
                "played": 5,
                "win": 1,
                "draw": 2,
                "lose": 2,
                "gd": -1,
                "points": 5
            },
            {
                "rank": 14,
                "team": "Sunderland",
                "logo": "https://media.api-sports.io/football/teams/746.png",
                "played": 5,
                "win": 1,
                "draw": 1,
                "lose": 3,
                "gd": -4,
                "points": 4
            },
            {
                "rank": 15,
                "team": "Crystal Palace",
                "logo": "https://media.api-sports.io/football/teams/52.png",
                "played": 5,
                "win": 1,
                "draw": 1,
                "lose": 3,
                "gd": -5,
                "points": 4
            },
            {
                "rank": 16,
                "team": "Aston Villa",
                "logo": "https://media.api-sports.io/football/teams/66.png",
                "played": 5,
                "win": 1,
                "draw": 1,
                "lose": 3,
                "gd": -5,
                "points": 4
            },
            {
                "rank": 17,
                "team": "Bournemouth",
                "logo": "https://media.api-sports.io/football/teams/35.png",
                "played": 5,
                "win": 0,
                "draw": 3,
                "lose": 2,
                "gd": -2,
                "points": 3
            },
            {
                "rank": 18,
                "team": "Coventry",
                "logo": "https://media.api-sports.io/football/teams/1346.png",
                "played": 5,
                "win": 1,
                "draw": 0,
                "lose": 4,
                "gd": -9,
                "points": 3
            },
            {
                "rank": 19,
                "team": "Fulham",
                "logo": "https://media.api-sports.io/football/teams/36.png",
                "played": 5,
                "win": 0,
                "draw": 2,
                "lose": 3,
                "gd": -3,
                "points": 2
            },
            {
                "rank": 20,
                "team": "Tottenham",
                "logo": "https://media.api-sports.io/football/teams/47.png",
                "played": 5,
                "win": 0,
                "draw": 2,
                "lose": 3,
                "gd": -6,
                "points": 2
            }
        ],
        "LaLiga": [
            {
                "rank": 1,
                "team": "Barcelona",
                "logo": "https://media.api-sports.io/football/teams/529.png",
                "played": 7,
                "win": 7,
                "draw": 0,
                "lose": 0,
                "gd": 24,
                "points": 21
            },
            {
                "rank": 2,
                "team": "Atletico Madrid",
                "logo": "https://media.api-sports.io/football/teams/530.png",
                "played": 7,
                "win": 5,
                "draw": 1,
                "lose": 1,
                "gd": 9,
                "points": 16
            },
            {
                "rank": 3,
                "team": "Real Betis",
                "logo": "https://media.api-sports.io/football/teams/543.png",
                "played": 7,
                "win": 5,
                "draw": 1,
                "lose": 1,
                "gd": 2,
                "points": 16
            },
            {
                "rank": 4,
                "team": "Real Madrid",
                "logo": "https://media.api-sports.io/football/teams/541.png",
                "played": 7,
                "win": 5,
                "draw": 0,
                "lose": 2,
                "gd": 10,
                "points": 15
            },
            {
                "rank": 5,
                "team": "Sevilla",
                "logo": "https://media.api-sports.io/football/teams/536.png",
                "played": 7,
                "win": 4,
                "draw": 1,
                "lose": 2,
                "gd": 1,
                "points": 13
            },
            {
                "rank": 6,
                "team": "Alaves",
                "logo": "https://media.api-sports.io/football/teams/542.png",
                "played": 7,
                "win": 3,
                "draw": 2,
                "lose": 2,
                "gd": 5,
                "points": 11
            },
            {
                "rank": 7,
                "team": "Deportivo La Coruna",
                "logo": "https://media.api-sports.io/football/teams/544.png",
                "played": 7,
                "win": 2,
                "draw": 4,
                "lose": 1,
                "gd": 2,
                "points": 10
            },
            {
                "rank": 8,
                "team": "Real Sociedad",
                "logo": "https://media.api-sports.io/football/teams/548.png",
                "played": 7,
                "win": 3,
                "draw": 1,
                "lose": 3,
                "gd": -4,
                "points": 10
            },
            {
                "rank": 9,
                "team": "Villarreal",
                "logo": "https://media.api-sports.io/football/teams/533.png",
                "played": 7,
                "win": 2,
                "draw": 2,
                "lose": 3,
                "gd": 1,
                "points": 8
            },
            {
                "rank": 10,
                "team": "Athletic Club",
                "logo": "https://media.api-sports.io/football/teams/531.png",
                "played": 6,
                "win": 2,
                "draw": 2,
                "lose": 2,
                "gd": 1,
                "points": 8
            },
            {
                "rank": 11,
                "team": "Getafe",
                "logo": "https://media.api-sports.io/football/teams/546.png",
                "played": 7,
                "win": 2,
                "draw": 2,
                "lose": 3,
                "gd": -3,
                "points": 8
            },
            {
                "rank": 12,
                "team": "Rayo Vallecano",
                "logo": "https://media.api-sports.io/football/teams/728.png",
                "played": 7,
                "win": 2,
                "draw": 2,
                "lose": 3,
                "gd": -5,
                "points": 8
            },
            {
                "rank": 13,
                "team": "Osasuna",
                "logo": "https://media.api-sports.io/football/teams/727.png",
                "played": 7,
                "win": 2,
                "draw": 2,
                "lose": 3,
                "gd": -7,
                "points": 8
            },
            {
                "rank": 14,
                "team": "Celta Vigo",
                "logo": "https://media.api-sports.io/football/teams/538.png",
                "played": 7,
                "win": 1,
                "draw": 4,
                "lose": 2,
                "gd": 2,
                "points": 7
            },
            {
                "rank": 15,
                "team": "Espanyol",
                "logo": "https://media.api-sports.io/football/teams/540.png",
                "played": 7,
                "win": 2,
                "draw": 1,
                "lose": 4,
                "gd": 0,
                "points": 7
            },
            {
                "rank": 16,
                "team": "Racing Santander",
                "logo": "https://media.api-sports.io/football/teams/4665.png",
                "played": 7,
                "win": 2,
                "draw": 1,
                "lose": 4,
                "gd": -10,
                "points": 7
            },
            {
                "rank": 17,
                "team": "Levante",
                "logo": "https://media.api-sports.io/football/teams/539.png",
                "played": 6,
                "win": 1,
                "draw": 2,
                "lose": 3,
                "gd": -4,
                "points": 5
            },
            {
                "rank": 18,
                "team": "Elche",
                "logo": "https://media.api-sports.io/football/teams/797.png",
                "played": 7,
                "win": 1,
                "draw": 2,
                "lose": 4,
                "gd": -6,
                "points": 5
            },
            {
                "rank": 19,
                "team": "Valencia",
                "logo": "https://media.api-sports.io/football/teams/532.png",
                "played": 7,
                "win": 1,
                "draw": 1,
                "lose": 5,
                "gd": -9,
                "points": 4
            },
            {
                "rank": 20,
                "team": "Malaga",
                "logo": "https://media.api-sports.io/football/teams/535.png",
                "played": 7,
                "win": 0,
                "draw": 3,
                "lose": 4,
                "gd": -9,
                "points": 3
            }
        ],
        "Serie A": [
            {
                "rank": 1,
                "team": "AS Roma",
                "logo": "https://media.api-sports.io/football/teams/497.png",
                "played": 5,
                "win": 4,
                "draw": 1,
                "lose": 0,
                "gd": 11,
                "points": 13
            },
            {
                "rank": 2,
                "team": "Inter",
                "logo": "https://media.api-sports.io/football/teams/505.png",
                "played": 5,
                "win": 4,
                "draw": 1,
                "lose": 0,
                "gd": 7,
                "points": 13
            },
            {
                "rank": 3,
                "team": "Lazio",
                "logo": "https://media.api-sports.io/football/teams/487.png",
                "played": 5,
                "win": 4,
                "draw": 1,
                "lose": 0,
                "gd": 5,
                "points": 13
            },
            {
                "rank": 4,
                "team": "Cagliari",
                "logo": "https://media.api-sports.io/football/teams/490.png",
                "played": 5,
                "win": 4,
                "draw": 0,
                "lose": 1,
                "gd": 3,
                "points": 12
            },
            {
                "rank": 5,
                "team": "AC Milan",
                "logo": "https://media.api-sports.io/football/teams/489.png",
                "played": 5,
                "win": 3,
                "draw": 2,
                "lose": 0,
                "gd": 6,
                "points": 11
            },
            {
                "rank": 6,
                "team": "Frosinone",
                "logo": "https://media.api-sports.io/football/teams/512.png",
                "played": 5,
                "win": 3,
                "draw": 1,
                "lose": 1,
                "gd": 5,
                "points": 10
            },
            {
                "rank": 7,
                "team": "Juventus",
                "logo": "https://media.api-sports.io/football/teams/496.png",
                "played": 5,
                "win": 3,
                "draw": 1,
                "lose": 1,
                "gd": 4,
                "points": 10
            },
            {
                "rank": 8,
                "team": "Como",
                "logo": "https://media.api-sports.io/football/teams/895.png",
                "played": 5,
                "win": 3,
                "draw": 1,
                "lose": 1,
                "gd": 3,
                "points": 10
            },
            {
                "rank": 9,
                "team": "Napoli",
                "logo": "https://media.api-sports.io/football/teams/492.png",
                "played": 5,
                "win": 2,
                "draw": 1,
                "lose": 2,
                "gd": 1,
                "points": 7
            },
            {
                "rank": 10,
                "team": "Sassuolo",
                "logo": "https://media.api-sports.io/football/teams/488.png",
                "played": 5,
                "win": 2,
                "draw": 1,
                "lose": 2,
                "gd": 0,
                "points": 7
            },
            {
                "rank": 11,
                "team": "Atalanta",
                "logo": "https://media.api-sports.io/football/teams/499.png",
                "played": 5,
                "win": 2,
                "draw": 0,
                "lose": 3,
                "gd": -2,
                "points": 6
            },
            {
                "rank": 12,
                "team": "Lecce",
                "logo": "https://media.api-sports.io/football/teams/867.png",
                "played": 5,
                "win": 2,
                "draw": 0,
                "lose": 3,
                "gd": -5,
                "points": 6
            },
            {
                "rank": 13,
                "team": "Udinese",
                "logo": "https://media.api-sports.io/football/teams/494.png",
                "played": 5,
                "win": 1,
                "draw": 1,
                "lose": 3,
                "gd": -3,
                "points": 4
            },
            {
                "rank": 14,
                "team": "Torino",
                "logo": "https://media.api-sports.io/football/teams/503.png",
                "played": 5,
                "win": 1,
                "draw": 1,
                "lose": 3,
                "gd": -3,
                "points": 4
            },
            {
                "rank": 15,
                "team": "Parma",
                "logo": "https://media.api-sports.io/football/teams/523.png",
                "played": 5,
                "win": 1,
                "draw": 1,
                "lose": 3,
                "gd": -3,
                "points": 4
            },
            {
                "rank": 16,
                "team": "Monza",
                "logo": "https://media.api-sports.io/football/teams/1579.png",
                "played": 5,
                "win": 1,
                "draw": 1,
                "lose": 3,
                "gd": -4,
                "points": 4
            },
            {
                "rank": 17,
                "team": "Fiorentina",
                "logo": "https://media.api-sports.io/football/teams/502.png",
                "played": 5,
                "win": 1,
                "draw": 1,
                "lose": 3,
                "gd": -6,
                "points": 4
            },
            {
                "rank": 18,
                "team": "Bologna",
                "logo": "https://media.api-sports.io/football/teams/500.png",
                "played": 5,
                "win": 0,
                "draw": 2,
                "lose": 3,
                "gd": -3,
                "points": 2
            },
            {
                "rank": 19,
                "team": "Genoa",
                "logo": "https://media.api-sports.io/football/teams/495.png",
                "played": 5,
                "win": 0,
                "draw": 1,
                "lose": 4,
                "gd": -7,
                "points": 1
            },
            {
                "rank": 20,
                "team": "Venezia",
                "logo": "https://media.api-sports.io/football/teams/517.png",
                "played": 5,
                "win": 0,
                "draw": 0,
                "lose": 5,
                "gd": -9,
                "points": 0
            }
        ],
        "Bundesliga": [
            {
                "rank": 1,
                "team": "Borussia Dortmund",
                "logo": "https://media.api-sports.io/football/teams/165.png",
                "played": 4,
                "win": 4,
                "draw": 0,
                "lose": 0,
                "gd": 7,
                "points": 12
            },
            {
                "rank": 2,
                "team": "Bayern München",
                "logo": "https://media.api-sports.io/football/teams/157.png",
                "played": 4,
                "win": 3,
                "draw": 1,
                "lose": 0,
                "gd": 12,
                "points": 10
            },
            {
                "rank": 3,
                "team": "SC Freiburg",
                "logo": "https://media.api-sports.io/football/teams/160.png",
                "played": 4,
                "win": 3,
                "draw": 1,
                "lose": 0,
                "gd": 9,
                "points": 10
            },
            {
                "rank": 4,
                "team": "FC Augsburg",
                "logo": "https://media.api-sports.io/football/teams/170.png",
                "played": 4,
                "win": 2,
                "draw": 1,
                "lose": 1,
                "gd": 5,
                "points": 7
            },
            {
                "rank": 5,
                "team": "Bayer Leverkusen",
                "logo": "https://media.api-sports.io/football/teams/168.png",
                "played": 4,
                "win": 2,
                "draw": 1,
                "lose": 1,
                "gd": 5,
                "points": 7
            },
            {
                "rank": 6,
                "team": "FSV Mainz 05",
                "logo": "https://media.api-sports.io/football/teams/164.png",
                "played": 4,
                "win": 2,
                "draw": 1,
                "lose": 1,
                "gd": 4,
                "points": 7
            },
            {
                "rank": 7,
                "team": "SV Elversberg",
                "logo": "https://media.api-sports.io/football/teams/1660.png",
                "played": 4,
                "win": 2,
                "draw": 1,
                "lose": 1,
                "gd": 1,
                "points": 7
            },
            {
                "rank": 8,
                "team": "Werder Bremen",
                "logo": "https://media.api-sports.io/football/teams/162.png",
                "played": 4,
                "win": 2,
                "draw": 1,
                "lose": 1,
                "gd": 0,
                "points": 7
            },
            {
                "rank": 9,
                "team": "RB Leipzig",
                "logo": "https://media.api-sports.io/football/teams/173.png",
                "played": 4,
                "win": 2,
                "draw": 0,
                "lose": 2,
                "gd": 4,
                "points": 6
            },
            {
                "rank": 10,
                "team": "Eintracht Frankfurt",
                "logo": "https://media.api-sports.io/football/teams/169.png",
                "played": 4,
                "win": 1,
                "draw": 2,
                "lose": 1,
                "gd": -1,
                "points": 5
            },
            {
                "rank": 11,
                "team": "FC Schalke 04",
                "logo": "https://media.api-sports.io/football/teams/174.png",
                "played": 4,
                "win": 1,
                "draw": 2,
                "lose": 1,
                "gd": -1,
                "points": 5
            },
            {
                "rank": 12,
                "team": "SC Paderborn 07",
                "logo": "https://media.api-sports.io/football/teams/185.png",
                "played": 4,
                "win": 1,
                "draw": 1,
                "lose": 2,
                "gd": -2,
                "points": 4
            },
            {
                "rank": 13,
                "team": "1. FC Köln",
                "logo": "https://media.api-sports.io/football/teams/192.png",
                "played": 4,
                "win": 1,
                "draw": 1,
                "lose": 2,
                "gd": -3,
                "points": 4
            },
            {
                "rank": 14,
                "team": "1899 Hoffenheim",
                "logo": "https://media.api-sports.io/football/teams/167.png",
                "played": 4,
                "win": 1,
                "draw": 0,
                "lose": 3,
                "gd": -3,
                "points": 3
            },
            {
                "rank": 15,
                "team": "VfB Stuttgart",
                "logo": "https://media.api-sports.io/football/teams/172.png",
                "played": 4,
                "win": 1,
                "draw": 0,
                "lose": 3,
                "gd": -3,
                "points": 3
            },
            {
                "rank": 16,
                "team": "Hamburger SV",
                "logo": "https://media.api-sports.io/football/teams/175.png",
                "played": 4,
                "win": 1,
                "draw": 0,
                "lose": 3,
                "gd": -11,
                "points": 3
            },
            {
                "rank": 17,
                "team": "Union Berlin",
                "logo": "https://media.api-sports.io/football/teams/182.png",
                "played": 4,
                "win": 0,
                "draw": 1,
                "lose": 3,
                "gd": -13,
                "points": 1
            },
            {
                "rank": 18,
                "team": "Borussia Mönchengladbach",
                "logo": "https://media.api-sports.io/football/teams/163.png",
                "played": 4,
                "win": 0,
                "draw": 0,
                "lose": 4,
                "gd": -10,
                "points": 0
            }
        ],
        "Ligue 1": [
            {
                "rank": 1,
                "team": "Monaco",
                "logo": "https://media.api-sports.io/football/teams/91.png",
                "played": 5,
                "win": 4,
                "draw": 1,
                "lose": 0,
                "gd": 5,
                "points": 13
            },
            {
                "rank": 2,
                "team": "Lyon",
                "logo": "https://media.api-sports.io/football/teams/80.png",
                "played": 5,
                "win": 3,
                "draw": 2,
                "lose": 0,
                "gd": 8,
                "points": 11
            },
            {
                "rank": 3,
                "team": "Paris FC",
                "logo": "https://media.api-sports.io/football/teams/114.png",
                "played": 5,
                "win": 3,
                "draw": 2,
                "lose": 0,
                "gd": 5,
                "points": 11
            },
            {
                "rank": 4,
                "team": "Lille",
                "logo": "https://media.api-sports.io/football/teams/79.png",
                "played": 5,
                "win": 3,
                "draw": 1,
                "lose": 1,
                "gd": 4,
                "points": 10
            },
            {
                "rank": 5,
                "team": "Rennes",
                "logo": "https://media.api-sports.io/football/teams/94.png",
                "played": 5,
                "win": 3,
                "draw": 1,
                "lose": 1,
                "gd": -1,
                "points": 10
            },
            {
                "rank": 6,
                "team": "Paris Saint Germain",
                "logo": "https://media.api-sports.io/football/teams/85.png",
                "played": 5,
                "win": 2,
                "draw": 2,
                "lose": 1,
                "gd": 1,
                "points": 8
            },
            {
                "rank": 7,
                "team": "Angers",
                "logo": "https://media.api-sports.io/football/teams/77.png",
                "played": 5,
                "win": 2,
                "draw": 1,
                "lose": 2,
                "gd": 1,
                "points": 7
            },
            {
                "rank": 8,
                "team": "Strasbourg",
                "logo": "https://media.api-sports.io/football/teams/95.png",
                "played": 5,
                "win": 2,
                "draw": 1,
                "lose": 2,
                "gd": 0,
                "points": 7
            },
            {
                "rank": 9,
                "team": "Le Mans",
                "logo": "https://media.api-sports.io/football/teams/1298.png",
                "played": 5,
                "win": 1,
                "draw": 3,
                "lose": 1,
                "gd": 0,
                "points": 6
            },
            {
                "rank": 10,
                "team": "Auxerre",
                "logo": "https://media.api-sports.io/football/teams/108.png",
                "played": 5,
                "win": 2,
                "draw": 0,
                "lose": 3,
                "gd": -5,
                "points": 6
            },
            {
                "rank": 11,
                "team": "Stade Brestois 29",
                "logo": "https://media.api-sports.io/football/teams/106.png",
                "played": 5,
                "win": 1,
                "draw": 2,
                "lose": 2,
                "gd": -1,
                "points": 5
            },
            {
                "rank": 12,
                "team": "Lorient",
                "logo": "https://media.api-sports.io/football/teams/97.png",
                "played": 5,
                "win": 1,
                "draw": 2,
                "lose": 2,
                "gd": -1,
                "points": 5
            },
            {
                "rank": 13,
                "team": "Toulouse",
                "logo": "https://media.api-sports.io/football/teams/96.png",
                "played": 5,
                "win": 1,
                "draw": 2,
                "lose": 2,
                "gd": -2,
                "points": 5
            },
            {
                "rank": 14,
                "team": "Nice",
                "logo": "https://media.api-sports.io/football/teams/84.png",
                "played": 5,
                "win": 1,
                "draw": 2,
                "lose": 2,
                "gd": -3,
                "points": 5
            },
            {
                "rank": 15,
                "team": "Lens",
                "logo": "https://media.api-sports.io/football/teams/116.png",
                "played": 5,
                "win": 1,
                "draw": 1,
                "lose": 3,
                "gd": 0,
                "points": 4
            },
            {
                "rank": 16,
                "team": "Estac Troyes",
                "logo": "https://media.api-sports.io/football/teams/110.png",
                "played": 5,
                "win": 1,
                "draw": 1,
                "lose": 3,
                "gd": -7,
                "points": 4
            },
            {
                "rank": 17,
                "team": "Marseille",
                "logo": "https://media.api-sports.io/football/teams/81.png",
                "played": 5,
                "win": 1,
                "draw": 0,
                "lose": 4,
                "gd": -1,
                "points": 3
            },
            {
                "rank": 18,
                "team": "Le Havre",
                "logo": "https://media.api-sports.io/football/teams/111.png",
                "played": 5,
                "win": 0,
                "draw": 2,
                "lose": 3,
                "gd": -3,
                "points": 2
            }
        ],
        "Liga 1 (Indonesia)": [
            {
                "rank": 1,
                "team": "Dewa United",
                "logo": "https://media.api-sports.io/football/teams/17902.png",
                "played": 4,
                "win": 3,
                "draw": 1,
                "lose": 0,
                "gd": 4,
                "points": 10
            },
            {
                "rank": 2,
                "team": "Persepam Madura Utd",
                "logo": "https://media.api-sports.io/football/teams/2444.png",
                "played": 3,
                "win": 3,
                "draw": 0,
                "lose": 0,
                "gd": 5,
                "points": 9
            },
            {
                "rank": 3,
                "team": "Persija",
                "logo": "https://media.api-sports.io/football/teams/10134.png",
                "played": 3,
                "win": 3,
                "draw": 0,
                "lose": 0,
                "gd": 3,
                "points": 9
            },
            {
                "rank": 4,
                "team": "Bali United",
                "logo": "https://media.api-sports.io/football/teams/2448.png",
                "played": 3,
                "win": 2,
                "draw": 0,
                "lose": 1,
                "gd": 3,
                "points": 6
            },
            {
                "rank": 5,
                "team": "Persib Bandung",
                "logo": "https://media.api-sports.io/football/teams/2445.png",
                "played": 3,
                "win": 2,
                "draw": 0,
                "lose": 1,
                "gd": 2,
                "points": 6
            },
            {
                "rank": 6,
                "team": "Pusamania Borneo",
                "logo": "https://media.api-sports.io/football/teams/2442.png",
                "played": 4,
                "win": 2,
                "draw": 0,
                "lose": 2,
                "gd": -1,
                "points": 6
            },
            {
                "rank": 7,
                "team": "Arema FC",
                "logo": "https://media.api-sports.io/football/teams/2438.png",
                "played": 3,
                "win": 1,
                "draw": 2,
                "lose": 0,
                "gd": 4,
                "points": 5
            },
            {
                "rank": 8,
                "team": "Bhayangkara FC",
                "logo": "https://media.api-sports.io/football/teams/2443.png",
                "played": 3,
                "win": 1,
                "draw": 2,
                "lose": 0,
                "gd": 2,
                "points": 5
            },
            {
                "rank": 9,
                "team": "Persita",
                "logo": "https://media.api-sports.io/football/teams/4244.png",
                "played": 3,
                "win": 1,
                "draw": 2,
                "lose": 0,
                "gd": 1,
                "points": 5
            },
            {
                "rank": 10,
                "team": "Persebaya Surabaya",
                "logo": "https://media.api-sports.io/football/teams/2446.png",
                "played": 3,
                "win": 1,
                "draw": 2,
                "lose": 0,
                "gd": 1,
                "points": 5
            },
            {
                "rank": 11,
                "team": "Persik Kediri",
                "logo": "https://media.api-sports.io/football/teams/4241.png",
                "played": 3,
                "win": 1,
                "draw": 1,
                "lose": 1,
                "gd": 1,
                "points": 4
            },
            {
                "rank": 12,
                "team": "PSM Makassar",
                "logo": "https://media.api-sports.io/football/teams/2441.png",
                "played": 3,
                "win": 0,
                "draw": 2,
                "lose": 1,
                "gd": -2,
                "points": 2
            },
            {
                "rank": 13,
                "team": "Garudayaksa",
                "logo": "https://media.api-sports.io/football/teams/26645.png",
                "played": 3,
                "win": 0,
                "draw": 2,
                "lose": 1,
                "gd": -2,
                "points": 2
            },
            {
                "rank": 14,
                "team": "PSIM Yogyakarta",
                "logo": "https://media.api-sports.io/football/teams/4235.png",
                "played": 3,
                "win": 0,
                "draw": 1,
                "lose": 2,
                "gd": -2,
                "points": 1
            },
            {
                "rank": 15,
                "team": "PSS Sleman",
                "logo": "https://media.api-sports.io/football/teams/3882.png",
                "played": 3,
                "win": 0,
                "draw": 0,
                "lose": 3,
                "gd": -4,
                "points": 0
            },
            {
                "rank": 16,
                "team": "Persijap",
                "logo": "https://media.api-sports.io/football/teams/11132.png",
                "played": 3,
                "win": 0,
                "draw": 0,
                "lose": 3,
                "gd": -4,
                "points": 0
            },
            {
                "rank": 17,
                "team": "Java United",
                "logo": "https://media.api-sports.io/football/teams/22409.png",
                "played": 3,
                "win": 0,
                "draw": 1,
                "lose": 2,
                "gd": -2,
                "points": -1
            },
            {
                "rank": 18,
                "team": "Isenmulang Kalteng",
                "logo": "https://media.api-sports.io/football/teams/24993.png",
                "played": 3,
                "win": 0,
                "draw": 0,
                "lose": 3,
                "gd": -9,
                "points": -2
            }
        ]
    },
    "standingsUpdated": "09/10/2026 14:01 WIB",
    "topScorers": {
        "Premier League": [
            {
                "rank": 1,
                "name": "E. Haaland",
                "photo": "https://media.api-sports.io/football/players/1100.png",
                "team": "Manchester City",
                "teamLogo": "https://media.api-sports.io/football/teams/50.png",
                "value": 5
            },
            {
                "rank": 2,
                "name": "A. Isak",
                "photo": "https://media.api-sports.io/football/players/2864.png",
                "team": "Liverpool",
                "teamLogo": "https://media.api-sports.io/football/teams/40.png",
                "value": 4
            },
            {
                "rank": 3,
                "name": "João Pedro",
                "photo": "https://media.api-sports.io/football/players/10329.png",
                "team": "Chelsea",
                "teamLogo": "https://media.api-sports.io/football/teams/49.png",
                "value": 3
            },
            {
                "rank": 4,
                "name": "R. Cherki",
                "photo": "https://media.api-sports.io/football/players/156477.png",
                "team": "Manchester City",
                "teamLogo": "https://media.api-sports.io/football/teams/50.png",
                "value": 3
            },
            {
                "rank": 5,
                "name": "M. Rogers",
                "photo": "https://media.api-sports.io/football/players/19170.png",
                "team": "Chelsea",
                "teamLogo": "https://media.api-sports.io/football/teams/49.png",
                "value": 3
            },
            {
                "rank": 6,
                "name": "B. Brobbey",
                "photo": "https://media.api-sports.io/football/players/38750.png",
                "team": "Sunderland",
                "teamLogo": "https://media.api-sports.io/football/teams/746.png",
                "value": 3
            },
            {
                "rank": 7,
                "name": "D. Calvert-Lewin",
                "photo": "https://media.api-sports.io/football/players/18766.png",
                "team": "Leeds",
                "teamLogo": "https://media.api-sports.io/football/teams/63.png",
                "value": 3
            },
            {
                "rank": 8,
                "name": "M. Tavernier",
                "photo": "https://media.api-sports.io/football/players/19245.png",
                "team": "Bournemouth",
                "teamLogo": "https://media.api-sports.io/football/teams/35.png",
                "value": 3
            },
            {
                "rank": 9,
                "name": "K. Schade",
                "photo": "https://media.api-sports.io/football/players/178077.png",
                "team": "Brentford",
                "teamLogo": "https://media.api-sports.io/football/teams/55.png",
                "value": 3
            },
            {
                "rank": 10,
                "name": "P. Groß",
                "photo": "https://media.api-sports.io/football/players/18970.png",
                "team": "Brighton",
                "teamLogo": "https://media.api-sports.io/football/teams/51.png",
                "value": 3
            }
        ],
        "LaLiga": [
            {
                "rank": 1,
                "name": "Raphinha",
                "photo": "https://media.api-sports.io/football/players/1496.png",
                "team": "Barcelona",
                "teamLogo": "https://media.api-sports.io/football/teams/529.png",
                "value": 12
            },
            {
                "rank": 2,
                "name": "Sergio Camello",
                "photo": "https://media.api-sports.io/football/players/52.png",
                "team": "Rayo Vallecano",
                "teamLogo": "https://media.api-sports.io/football/teams/728.png",
                "value": 7
            },
            {
                "rank": 3,
                "name": "Lamine Yamal",
                "photo": "https://media.api-sports.io/football/players/386828.png",
                "team": "Barcelona",
                "teamLogo": "https://media.api-sports.io/football/teams/529.png",
                "value": 7
            },
            {
                "rank": 4,
                "name": "Kylian Mbappé",
                "photo": "https://media.api-sports.io/football/players/278.png",
                "team": "Real Madrid",
                "teamLogo": "https://media.api-sports.io/football/teams/541.png",
                "value": 7
            },
            {
                "rank": 5,
                "name": "M. Zabiri",
                "photo": "https://media.api-sports.io/football/players/457101.png",
                "team": "Racing Santander",
                "teamLogo": "https://media.api-sports.io/football/teams/4665.png",
                "value": 6
            },
            {
                "rank": 6,
                "name": "Roberto Fernández",
                "photo": "https://media.api-sports.io/football/players/312990.png",
                "team": "Espanyol",
                "teamLogo": "https://media.api-sports.io/football/teams/540.png",
                "value": 6
            },
            {
                "rank": 7,
                "name": "P. Aubameyang",
                "photo": "https://media.api-sports.io/football/players/1465.png",
                "team": "Deportivo La Coruna",
                "teamLogo": "https://media.api-sports.io/football/teams/544.png",
                "value": 5
            },
            {
                "rank": 8,
                "name": "Fer Niño",
                "photo": "https://media.api-sports.io/football/players/184277.png",
                "team": "Elche",
                "teamLogo": "https://media.api-sports.io/football/teams/797.png",
                "value": 5
            },
            {
                "rank": 9,
                "name": "A. Budimir",
                "photo": "https://media.api-sports.io/football/players/46746.png",
                "team": "Osasuna",
                "teamLogo": "https://media.api-sports.io/football/teams/727.png",
                "value": 5
            },
            {
                "rank": 10,
                "name": "Fermín",
                "photo": "https://media.api-sports.io/football/players/340626.png",
                "team": "Barcelona",
                "teamLogo": "https://media.api-sports.io/football/teams/529.png",
                "value": 4
            }
        ],
        "Serie A": [
            {
                "rank": 1,
                "name": "D. Malen",
                "photo": "https://media.api-sports.io/football/players/249.png",
                "team": "AS Roma",
                "teamLogo": "https://media.api-sports.io/football/teams/497.png",
                "value": 6
            },
            {
                "rank": 2,
                "name": "A. Raimondo",
                "photo": "https://media.api-sports.io/football/players/314254.png",
                "team": "Frosinone",
                "teamLogo": "https://media.api-sports.io/football/teams/512.png",
                "value": 4
            },
            {
                "rank": 3,
                "name": "Lautaro Martínez",
                "photo": "https://media.api-sports.io/football/players/217.png",
                "team": "Inter",
                "teamLogo": "https://media.api-sports.io/football/teams/505.png",
                "value": 4
            },
            {
                "rank": 4,
                "name": "Gustavo Varela",
                "photo": "https://media.api-sports.io/football/players/340547.png",
                "team": "Monza",
                "teamLogo": "https://media.api-sports.io/football/teams/1579.png",
                "value": 4
            },
            {
                "rank": 5,
                "name": "Vasilije Adžić",
                "photo": "https://media.api-sports.io/football/players/339872.png",
                "team": "Sassuolo",
                "teamLogo": "https://media.api-sports.io/football/teams/488.png",
                "value": 3
            },
            {
                "rank": 6,
                "name": "G. Kvernadze",
                "photo": "https://media.api-sports.io/football/players/311251.png",
                "team": "Frosinone",
                "teamLogo": "https://media.api-sports.io/football/teams/512.png",
                "value": 3
            },
            {
                "rank": 7,
                "name": "Franco Mastantuono",
                "photo": "https://media.api-sports.io/football/players/449249.png",
                "team": "Fiorentina",
                "teamLogo": "https://media.api-sports.io/football/teams/502.png",
                "value": 3
            },
            {
                "rank": 8,
                "name": "D. Frattesi",
                "photo": "https://media.api-sports.io/football/players/31173.png",
                "team": "Lazio",
                "teamLogo": "https://media.api-sports.io/football/teams/487.png",
                "value": 3
            },
            {
                "rank": 9,
                "name": "Diego Moreira",
                "photo": "https://media.api-sports.io/football/players/335056.png",
                "team": "AC Milan",
                "teamLogo": "https://media.api-sports.io/football/teams/489.png",
                "value": 3
            },
            {
                "rank": 10,
                "name": "D. Maldini",
                "photo": "https://media.api-sports.io/football/players/134926.png",
                "team": "Cagliari",
                "teamLogo": "https://media.api-sports.io/football/teams/490.png",
                "value": 3
            }
        ],
        "Ligue 1": [
            {
                "rank": 1,
                "name": "Ferran Torres",
                "photo": "https://media.api-sports.io/football/players/931.png",
                "team": "Paris Saint Germain",
                "teamLogo": "https://media.api-sports.io/football/teams/85.png",
                "value": 4
            },
            {
                "rank": 2,
                "name": "Paris Josua  Brunner",
                "photo": "https://media.api-sports.io/football/players/386276.png",
                "team": "Monaco",
                "teamLogo": "https://media.api-sports.io/football/teams/91.png",
                "value": 4
            },
            {
                "rank": 3,
                "name": "K. Doumbia",
                "photo": "https://media.api-sports.io/football/players/326068.png",
                "team": "Stade Brestois 29",
                "teamLogo": "https://media.api-sports.io/football/teams/106.png",
                "value": 4
            },
            {
                "rank": 4,
                "name": "A. Gouiri",
                "photo": "https://media.api-sports.io/football/players/85041.png",
                "team": "Marseille",
                "teamLogo": "https://media.api-sports.io/football/teams/81.png",
                "value": 4
            },
            {
                "rank": 5,
                "name": "L. Sinayoko",
                "photo": "https://media.api-sports.io/football/players/90617.png",
                "team": "Paris FC",
                "teamLogo": "https://media.api-sports.io/football/teams/114.png",
                "value": 4
            },
            {
                "rank": 6,
                "name": "A. Bourabaa",
                "photo": "https://media.api-sports.io/football/players/608142.png",
                "team": "Le Mans",
                "teamLogo": "https://media.api-sports.io/football/teams/1298.png",
                "value": 3
            },
            {
                "rank": 7,
                "name": "E. Nuamah",
                "photo": "https://media.api-sports.io/football/players/350856.png",
                "team": "Lyon",
                "teamLogo": "https://media.api-sports.io/football/teams/80.png",
                "value": 3
            },
            {
                "rank": 8,
                "name": "Marquinhos",
                "photo": "https://media.api-sports.io/football/players/257.png",
                "team": "Paris Saint Germain",
                "teamLogo": "https://media.api-sports.io/football/teams/85.png",
                "value": 3
            },
            {
                "rank": 9,
                "name": "C. Archer",
                "photo": "https://media.api-sports.io/football/players/137302.png",
                "team": "Auxerre",
                "teamLogo": "https://media.api-sports.io/football/teams/108.png",
                "value": 3
            },
            {
                "rank": 10,
                "name": "L. Mafouta",
                "photo": "https://media.api-sports.io/football/players/85558.png",
                "team": "Le Mans",
                "teamLogo": "https://media.api-sports.io/football/teams/1298.png",
                "value": 3
            }
        ],
        "Bundesliga": [
            {
                "rank": 1,
                "name": "P. Schick",
                "photo": "https://media.api-sports.io/football/players/794.png",
                "team": "Bayer Leverkusen",
                "teamLogo": "https://media.api-sports.io/football/teams/168.png",
                "value": 4
            },
            {
                "rank": 2,
                "name": "Y. Ebnoutalib",
                "photo": "https://media.api-sports.io/football/players/409190.png",
                "team": "Eintracht Frankfurt",
                "teamLogo": "https://media.api-sports.io/football/teams/169.png",
                "value": 4
            },
            {
                "rank": 3,
                "name": "M. Olise",
                "photo": "https://media.api-sports.io/football/players/19617.png",
                "team": "Bayern München",
                "teamLogo": "https://media.api-sports.io/football/teams/157.png",
                "value": 4
            },
            {
                "rank": 4,
                "name": "Y. Suzuki",
                "photo": "https://media.api-sports.io/football/players/199143.png",
                "team": "SC Freiburg",
                "teamLogo": "https://media.api-sports.io/football/teams/160.png",
                "value": 4
            },
            {
                "rank": 5,
                "name": "P. Tietz",
                "photo": "https://media.api-sports.io/football/players/26171.png",
                "team": "FSV Mainz 05",
                "teamLogo": "https://media.api-sports.io/football/teams/164.png",
                "value": 4
            },
            {
                "rank": 6,
                "name": "J. Burkardt",
                "photo": "https://media.api-sports.io/football/players/25926.png",
                "team": "Eintracht Frankfurt",
                "teamLogo": "https://media.api-sports.io/football/teams/169.png",
                "value": 3
            },
            {
                "rank": 7,
                "name": "I. Matanović",
                "photo": "https://media.api-sports.io/football/players/202696.png",
                "team": "SC Freiburg",
                "teamLogo": "https://media.api-sports.io/football/teams/160.png",
                "value": 3
            },
            {
                "rank": 8,
                "name": "M. Krattenmacher",
                "photo": "https://media.api-sports.io/football/players/342170.png",
                "team": "SV Elversberg",
                "teamLogo": "https://media.api-sports.io/football/teams/1660.png",
                "value": 3
            },
            {
                "rank": 9,
                "name": "M. Gregoritsch",
                "photo": "https://media.api-sports.io/football/players/25297.png",
                "team": "FC Augsburg",
                "teamLogo": "https://media.api-sports.io/football/teams/170.png",
                "value": 3
            },
            {
                "rank": 10,
                "name": "N. Füllkrug",
                "photo": "https://media.api-sports.io/football/players/25391.png",
                "team": "Werder Bremen",
                "teamLogo": "https://media.api-sports.io/football/teams/162.png",
                "value": 3
            }
        ]
    },
    "topAssists": {
        "Premier League": [
            {
                "rank": 1,
                "name": "João Pedro",
                "photo": "https://media.api-sports.io/football/players/10329.png",
                "team": "Chelsea",
                "teamLogo": "https://media.api-sports.io/football/teams/49.png",
                "value": 3
            },
            {
                "rank": 2,
                "name": "P. Groß",
                "photo": "https://media.api-sports.io/football/players/18970.png",
                "team": "Brighton",
                "teamLogo": "https://media.api-sports.io/football/teams/51.png",
                "value": 3
            },
            {
                "rank": 3,
                "name": "A. Semenyo",
                "photo": "https://media.api-sports.io/football/players/19281.png",
                "team": "Manchester City",
                "teamLogo": "https://media.api-sports.io/football/teams/50.png",
                "value": 3
            },
            {
                "rank": 4,
                "name": "C. Gakpo",
                "photo": "https://media.api-sports.io/football/players/247.png",
                "team": "Liverpool",
                "teamLogo": "https://media.api-sports.io/football/teams/40.png",
                "value": 3
            },
            {
                "rank": 5,
                "name": "Evanilson",
                "photo": "https://media.api-sports.io/football/players/152856.png",
                "team": "Bournemouth",
                "teamLogo": "https://media.api-sports.io/football/teams/35.png",
                "value": 3
            },
            {
                "rank": 6,
                "name": "D. Kamada",
                "photo": "https://media.api-sports.io/football/players/2601.png",
                "team": "Crystal Palace",
                "teamLogo": "https://media.api-sports.io/football/teams/52.png",
                "value": 3
            },
            {
                "rank": 7,
                "name": "R. Cherki",
                "photo": "https://media.api-sports.io/football/players/156477.png",
                "team": "Manchester City",
                "teamLogo": "https://media.api-sports.io/football/teams/50.png",
                "value": 2
            },
            {
                "rank": 8,
                "name": "M. Belloumi",
                "photo": "https://media.api-sports.io/football/players/299923.png",
                "team": "Hull City",
                "teamLogo": "https://media.api-sports.io/football/teams/64.png",
                "value": 2
            },
            {
                "rank": 9,
                "name": "C. Palmer",
                "photo": "https://media.api-sports.io/football/players/152982.png",
                "team": "Chelsea",
                "teamLogo": "https://media.api-sports.io/football/teams/49.png",
                "value": 2
            },
            {
                "rank": 10,
                "name": "M. De Cuyper",
                "photo": "https://media.api-sports.io/football/players/162007.png",
                "team": "Brighton",
                "teamLogo": "https://media.api-sports.io/football/teams/51.png",
                "value": 2
            }
        ],
        "LaLiga": [
            {
                "rank": 1,
                "name": "Lamine Yamal",
                "photo": "https://media.api-sports.io/football/players/386828.png",
                "team": "Barcelona",
                "teamLogo": "https://media.api-sports.io/football/teams/529.png",
                "value": 4
            },
            {
                "rank": 2,
                "name": "Javier Hernandez",
                "photo": "https://media.api-sports.io/football/players/388495.png",
                "team": "Espanyol",
                "teamLogo": "https://media.api-sports.io/football/teams/540.png",
                "value": 4
            },
            {
                "rank": 3,
                "name": "A. Gordon",
                "photo": "https://media.api-sports.io/football/players/138787.png",
                "team": "Barcelona",
                "teamLogo": "https://media.api-sports.io/football/teams/529.png",
                "value": 4
            },
            {
                "rank": 4,
                "name": "Raphinha",
                "photo": "https://media.api-sports.io/football/players/1496.png",
                "team": "Barcelona",
                "teamLogo": "https://media.api-sports.io/football/teams/529.png",
                "value": 3
            },
            {
                "rank": 5,
                "name": "M. Díaz",
                "photo": "https://media.api-sports.io/football/players/760.png",
                "team": "Alaves",
                "teamLogo": "https://media.api-sports.io/football/teams/542.png",
                "value": 3
            },
            {
                "rank": 6,
                "name": "Alberto Moleiro",
                "photo": "https://media.api-sports.io/football/players/182519.png",
                "team": "Villarreal",
                "teamLogo": "https://media.api-sports.io/football/teams/533.png",
                "value": 3
            },
            {
                "rank": 7,
                "name": "Vinícius Júnior",
                "photo": "https://media.api-sports.io/football/players/762.png",
                "team": "Real Madrid",
                "teamLogo": "https://media.api-sports.io/football/teams/541.png",
                "value": 3
            },
            {
                "rank": 8,
                "name": "J. Ochieng",
                "photo": "https://media.api-sports.io/football/players/387139.png",
                "team": "Real Sociedad",
                "teamLogo": "https://media.api-sports.io/football/teams/548.png",
                "value": 3
            },
            {
                "rank": 9,
                "name": "Dani Olmo",
                "photo": "https://media.api-sports.io/football/players/1323.png",
                "team": "Barcelona",
                "teamLogo": "https://media.api-sports.io/football/teams/529.png",
                "value": 3
            },
            {
                "rank": 10,
                "name": "Tete Morente",
                "photo": "https://media.api-sports.io/football/players/47182.png",
                "team": "Elche",
                "teamLogo": "https://media.api-sports.io/football/teams/797.png",
                "value": 3
            }
        ],
        "Serie A": [
            {
                "rank": 1,
                "name": "P. Dybala",
                "photo": "https://media.api-sports.io/football/players/875.png",
                "team": "AS Roma",
                "teamLogo": "https://media.api-sports.io/football/teams/497.png",
                "value": 4
            },
            {
                "rank": 2,
                "name": "R. Schmid",
                "photo": "https://media.api-sports.io/football/players/7562.png",
                "team": "Frosinone",
                "teamLogo": "https://media.api-sports.io/football/teams/512.png",
                "value": 3
            },
            {
                "rank": 3,
                "name": "A. Diouf",
                "photo": "https://media.api-sports.io/football/players/270509.png",
                "team": "Inter",
                "teamLogo": "https://media.api-sports.io/football/teams/505.png",
                "value": 3
            },
            {
                "rank": 4,
                "name": "A. Rabiot",
                "photo": "https://media.api-sports.io/football/players/272.png",
                "team": "AC Milan",
                "teamLogo": "https://media.api-sports.io/football/teams/489.png",
                "value": 2
            },
            {
                "rank": 5,
                "name": "M. Thuram",
                "photo": "https://media.api-sports.io/football/players/21509.png",
                "team": "Inter",
                "teamLogo": "https://media.api-sports.io/football/teams/505.png",
                "value": 2
            },
            {
                "rank": 6,
                "name": "Ricardo Mangas",
                "photo": "https://media.api-sports.io/football/players/41324.png",
                "team": "Monza",
                "teamLogo": "https://media.api-sports.io/football/teams/1579.png",
                "value": 2
            },
            {
                "rank": 7,
                "name": "M. Zaccagni",
                "photo": "https://media.api-sports.io/football/players/30937.png",
                "team": "Lazio",
                "teamLogo": "https://media.api-sports.io/football/teams/487.png",
                "value": 2
            },
            {
                "rank": 8,
                "name": "L. Colombo",
                "photo": "https://media.api-sports.io/football/players/263481.png",
                "team": "Genoa",
                "teamLogo": "https://media.api-sports.io/football/teams/495.png",
                "value": 2
            },
            {
                "rank": 9,
                "name": "Nuno Tavares",
                "photo": "https://media.api-sports.io/football/players/41577.png",
                "team": "Lazio",
                "teamLogo": "https://media.api-sports.io/football/teams/487.png",
                "value": 2
            },
            {
                "rank": 10,
                "name": "S. Chukwueze",
                "photo": "https://media.api-sports.io/football/players/1696.png",
                "team": "AC Milan",
                "teamLogo": "https://media.api-sports.io/football/teams/489.png",
                "value": 2
            }
        ],
        "Ligue 1": [
            {
                "rank": 1,
                "name": "C. Cásseres",
                "photo": "https://media.api-sports.io/football/players/50956.png",
                "team": "Toulouse",
                "teamLogo": "https://media.api-sports.io/football/teams/96.png",
                "value": 4
            },
            {
                "rank": 2,
                "name": "P. Katseris",
                "photo": "https://media.api-sports.io/football/players/384112.png",
                "team": "Lorient",
                "teamLogo": "https://media.api-sports.io/football/teams/97.png",
                "value": 3
            },
            {
                "rank": 3,
                "name": "P. Šulc",
                "photo": "https://media.api-sports.io/football/players/66387.png",
                "team": "Lyon",
                "teamLogo": "https://media.api-sports.io/football/teams/80.png",
                "value": 3
            },
            {
                "rank": 4,
                "name": "A. Bourabaa",
                "photo": "https://media.api-sports.io/football/players/608142.png",
                "team": "Le Mans",
                "teamLogo": "https://media.api-sports.io/football/teams/1298.png",
                "value": 2
            },
            {
                "rank": 5,
                "name": "F. Thauvin",
                "photo": "https://media.api-sports.io/football/players/1922.png",
                "team": "Lens",
                "teamLogo": "https://media.api-sports.io/football/teams/116.png",
                "value": 2
            },
            {
                "rank": 6,
                "name": "Z. Athekame",
                "photo": "https://media.api-sports.io/football/players/396380.png",
                "team": "Lyon",
                "teamLogo": "https://media.api-sports.io/football/teams/80.png",
                "value": 2
            },
            {
                "rank": 7,
                "name": "O. Giroud",
                "photo": "https://media.api-sports.io/football/players/2295.png",
                "team": "Lille",
                "teamLogo": "https://media.api-sports.io/football/teams/79.png",
                "value": 2
            },
            {
                "rank": 8,
                "name": "A. Thomasson",
                "photo": "https://media.api-sports.io/football/players/22261.png",
                "team": "Rennes",
                "teamLogo": "https://media.api-sports.io/football/teams/94.png",
                "value": 2
            },
            {
                "rank": 9,
                "name": "C. Tolisso",
                "photo": "https://media.api-sports.io/football/players/519.png",
                "team": "Lyon",
                "teamLogo": "https://media.api-sports.io/football/teams/80.png",
                "value": 2
            },
            {
                "rank": 10,
                "name": "A. El Ouazzani",
                "photo": "https://media.api-sports.io/football/players/193188.png",
                "team": "Angers",
                "teamLogo": "https://media.api-sports.io/football/teams/77.png",
                "value": 2
            }
        ],
        "Bundesliga": [
            {
                "rank": 1,
                "name": "S. Becker",
                "photo": "https://media.api-sports.io/football/players/37938.png",
                "team": "FSV Mainz 05",
                "teamLogo": "https://media.api-sports.io/football/teams/164.png",
                "value": 3
            },
            {
                "rank": 2,
                "name": "M. Grüll",
                "photo": "https://media.api-sports.io/football/players/7073.png",
                "team": "Werder Bremen",
                "teamLogo": "https://media.api-sports.io/football/teams/162.png",
                "value": 3
            },
            {
                "rank": 3,
                "name": "F. Rieder",
                "photo": "https://media.api-sports.io/football/players/163032.png",
                "team": "FC Augsburg",
                "teamLogo": "https://media.api-sports.io/football/teams/170.png",
                "value": 3
            },
            {
                "rank": 4,
                "name": "Miguel Gutiérrez",
                "photo": "https://media.api-sports.io/football/players/162032.png",
                "team": "Bayer Leverkusen",
                "teamLogo": "https://media.api-sports.io/football/teams/168.png",
                "value": 3
            },
            {
                "rank": 5,
                "name": "M. Ginter",
                "photo": "https://media.api-sports.io/football/players/2915.png",
                "team": "SC Freiburg",
                "teamLogo": "https://media.api-sports.io/football/teams/160.png",
                "value": 3
            },
            {
                "rank": 6,
                "name": "S. Guirassy",
                "photo": "https://media.api-sports.io/football/players/21393.png",
                "team": "Borussia Dortmund",
                "teamLogo": "https://media.api-sports.io/football/teams/165.png",
                "value": 2
            },
            {
                "rank": 7,
                "name": "A. Nusa",
                "photo": "https://media.api-sports.io/football/players/314511.png",
                "team": "RB Leipzig",
                "teamLogo": "https://media.api-sports.io/football/teams/173.png",
                "value": 2
            },
            {
                "rank": 8,
                "name": "A. Daghim",
                "photo": "https://media.api-sports.io/football/players/362564.png",
                "team": "1899 Hoffenheim",
                "teamLogo": "https://media.api-sports.io/football/teams/167.png",
                "value": 2
            },
            {
                "rank": 9,
                "name": "I. Saibari",
                "photo": "https://media.api-sports.io/football/players/161897.png",
                "team": "Bayern München",
                "teamLogo": "https://media.api-sports.io/football/teams/157.png",
                "value": 2
            },
            {
                "rank": 10,
                "name": "T. Gomis",
                "photo": "https://media.api-sports.io/football/players/383665.png",
                "team": "RB Leipzig",
                "teamLogo": "https://media.api-sports.io/football/teams/173.png",
                "value": 2
            }
        ]
    },
    "injuries": {
        "arsenal": [
            {
                "player": "Bruno Guimaraes",
                "photo": "https://media.api-sports.io/football/players/10135.png",
                "reason": "Thigh Injury",
                "since": "2026-08-21"
            },
            {
                "player": "W. Saliba",
                "photo": "https://media.api-sports.io/football/players/22090.png",
                "reason": "Back Injury",
                "since": "2026-10-10"
            },
            {
                "player": "J. Timber",
                "photo": "https://media.api-sports.io/football/players/38746.png",
                "reason": "Ankle Injury",
                "since": "2026-09-06"
            },
            {
                "player": "Gabriel Jesus",
                "photo": "https://media.api-sports.io/football/players/643.png",
                "reason": "Transfer negotiations",
                "since": "2026-08-31"
            },
            {
                "player": "G. Martinelli",
                "photo": "https://media.api-sports.io/football/players/127769.png",
                "reason": "Transfer negotiations",
                "since": "2026-08-31"
            },
            {
                "player": "C. Mosquera",
                "photo": "https://media.api-sports.io/football/players/333682.png",
                "reason": "Muscle Injury",
                "since": "2026-09-19"
            },
            {
                "player": "B. White",
                "photo": "https://media.api-sports.io/football/players/19959.png",
                "reason": "Groin Injury",
                "since": "2026-09-19"
            },
            {
                "player": "C. Tzolis",
                "photo": "https://media.api-sports.io/football/players/161800.png",
                "reason": "Hamstring Injury",
                "since": "2026-10-10"
            },
            {
                "player": "M. Dowman",
                "photo": "https://media.api-sports.io/football/players/442044.png",
                "reason": "Injury",
                "since": "2026-10-10"
            },
            {
                "player": "K. Havertz",
                "photo": "https://media.api-sports.io/football/players/978.png",
                "reason": "Muscle Injury",
                "since": "2026-10-10"
            },
            {
                "player": "E. Konsa",
                "photo": "https://media.api-sports.io/football/players/19354.png",
                "reason": "Muscle Injury",
                "since": "2026-10-10"
            }
        ],
        "coventry": [
            {
                "player": "L. Woolfenden",
                "photo": "https://media.api-sports.io/football/players/17714.png",
                "reason": "Knee Injury",
                "since": "2026-09-19"
            },
            {
                "player": "H. Wright",
                "photo": "https://media.api-sports.io/football/players/427.png",
                "reason": "Muscle Injury",
                "since": "2026-09-19"
            },
            {
                "player": "K. Kesler-Hayden",
                "photo": "https://media.api-sports.io/football/players/298128.png",
                "reason": "Muscle Injury",
                "since": "2026-09-19"
            },
            {
                "player": "Y. Gboho",
                "photo": "https://media.api-sports.io/football/players/84128.png",
                "reason": "Transfer negotiations",
                "since": "2026-09-05"
            },
            {
                "player": "S. Mfuni",
                "photo": "https://media.api-sports.io/football/players/382358.png",
                "reason": "Loan agreement",
                "since": "2026-09-05"
            },
            {
                "player": "A. Amenda",
                "photo": "https://media.api-sports.io/football/players/162414.png",
                "reason": "Calf Injury",
                "since": "2026-09-19"
            },
            {
                "player": "T. Awoniyi",
                "photo": "https://media.api-sports.io/football/players/8598.png",
                "reason": "Red Card",
                "since": "2026-09-19"
            },
            {
                "player": "J. Eccles",
                "photo": "https://media.api-sports.io/football/players/19984.png",
                "reason": "Injury",
                "since": "2026-09-19"
            }
        ],
        "hull-city": [
            {
                "player": "J. Butland",
                "photo": "https://media.api-sports.io/football/players/2930.png",
                "reason": "Arm Injury",
                "since": "2026-10-11"
            },
            {
                "player": "J. Gelhardt",
                "photo": "https://media.api-sports.io/football/players/19569.png",
                "reason": "Ankle Injury",
                "since": "2026-08-29"
            },
            {
                "player": "D. Gyabi",
                "photo": "https://media.api-sports.io/football/players/282124.png",
                "reason": "Groin Injury",
                "since": "2026-10-11"
            },
            {
                "player": "C. Hughes",
                "photo": "https://media.api-sports.io/football/players/331551.png",
                "reason": "Groin Injury",
                "since": "2026-10-11"
            },
            {
                "player": "M. Jacob",
                "photo": "https://media.api-sports.io/football/players/129713.png",
                "reason": "Hip Injury",
                "since": "2026-08-29"
            },
            {
                "player": "E. Matazo",
                "photo": "https://media.api-sports.io/football/players/162991.png",
                "reason": "Knee Injury",
                "since": "2026-10-11"
            },
            {
                "player": "H. Morita",
                "photo": "https://media.api-sports.io/football/players/32960.png",
                "reason": "Calf Injury",
                "since": "2026-10-11"
            },
            {
                "player": "O. Zambrano",
                "photo": "https://media.api-sports.io/football/players/338046.png",
                "reason": "Hamstring Injury",
                "since": "2026-09-05"
            },
            {
                "player": "T. Iroegbunam",
                "photo": "https://media.api-sports.io/football/players/284500.png",
                "reason": "Groin Injury",
                "since": "2026-10-11"
            },
            {
                "player": "I. Ansah",
                "photo": "https://media.api-sports.io/football/players/380873.png",
                "reason": "Back Injury",
                "since": "2026-10-11"
            },
            {
                "player": "M. Crooks",
                "photo": "https://media.api-sports.io/football/players/19666.png",
                "reason": "Muscle Injury",
                "since": "2026-09-05"
            },
            {
                "player": "P. McNair",
                "photo": "https://media.api-sports.io/football/players/19242.png",
                "reason": "Foot Injury",
                "since": "2026-09-05"
            },
            {
                "player": "N. Mendy",
                "photo": "https://media.api-sports.io/football/players/358431.png",
                "reason": "Concussion",
                "since": "2026-10-11"
            },
            {
                "player": "M. Targett",
                "photo": "https://media.api-sports.io/football/players/18941.png",
                "reason": "Ankle Injury",
                "since": "2026-10-11"
            },
            {
                "player": "B. Norton-Cuffy",
                "photo": "https://media.api-sports.io/football/players/284570.png",
                "reason": "Muscle Injury",
                "since": "2026-10-11"
            },
            {
                "player": "E. Stroud",
                "photo": "https://media.api-sports.io/football/players/226765.png",
                "reason": "Illness",
                "since": "2026-10-11"
            }
        ],
        "manchester-united": [
            {
                "player": "T. Heaton",
                "photo": "https://media.api-sports.io/football/players/2931.png",
                "reason": "Abdominal strain",
                "since": "2026-10-10"
            },
            {
                "player": "M. Mount",
                "photo": "https://media.api-sports.io/football/players/19220.png",
                "reason": "Foot Injury",
                "since": "2026-08-30"
            },
            {
                "player": "M. Ugarte",
                "photo": "https://media.api-sports.io/football/players/51494.png",
                "reason": "Knee Injury",
                "since": "2026-10-10"
            },
            {
                "player": "M. de Ligt",
                "photo": "https://media.api-sports.io/football/players/532.png",
                "reason": "Back Injury",
                "since": "2026-10-10"
            },
            {
                "player": "C. Baleba",
                "photo": "https://media.api-sports.io/football/players/356041.png",
                "reason": "Ankle Injury",
                "since": "2026-09-13"
            },
            {
                "player": "A. Diallo",
                "photo": "https://media.api-sports.io/football/players/157997.png",
                "reason": "Injury",
                "since": "2026-10-10"
            },
            {
                "player": "B. Sesko",
                "photo": "https://media.api-sports.io/football/players/115589.png",
                "reason": "Leg Injury",
                "since": "2026-10-10"
            },
            {
                "player": "L. Shaw",
                "photo": "https://media.api-sports.io/football/players/891.png",
                "reason": "Injury",
                "since": "2026-09-13"
            },
            {
                "player": "K. Darlow",
                "photo": "https://media.api-sports.io/football/players/18885.png",
                "reason": "Injury",
                "since": "2026-10-10"
            },
            {
                "player": "P. Dorgu",
                "photo": "https://media.api-sports.io/football/players/382452.png",
                "reason": "Hamstring Injury",
                "since": "2026-10-10"
            },
            {
                "player": "K. Mainoo",
                "photo": "https://media.api-sports.io/football/players/284322.png",
                "reason": "Injury",
                "since": "2026-10-10"
            },
            {
                "player": "N. Mazraoui",
                "photo": "https://media.api-sports.io/football/players/545.png",
                "reason": "Injury",
                "since": "2026-10-10"
            },
            {
                "player": "M. Rashford",
                "photo": "https://media.api-sports.io/football/players/909.png",
                "reason": "Health problems",
                "since": "2026-10-10"
            }
        ],
        "nottingham-forest": [
            {
                "player": "N. Savona",
                "photo": "https://media.api-sports.io/football/players/181806.png",
                "reason": "Knee Injury",
                "since": "2026-10-11"
            },
            {
                "player": "R. Yates",
                "photo": "https://media.api-sports.io/football/players/19305.png",
                "reason": "Injury",
                "since": "2026-08-22"
            },
            {
                "player": "I. Sangare",
                "photo": "https://media.api-sports.io/football/players/22149.png",
                "reason": "Calf Injury",
                "since": "2026-08-29"
            },
            {
                "player": "N. Milenkovic",
                "photo": "https://media.api-sports.io/football/players/2817.png",
                "reason": "Muscle Injury",
                "since": "2026-09-19"
            }
        ],
        "leeds": [
            {
                "player": "W. Gnonto",
                "photo": "https://media.api-sports.io/football/players/162128.png",
                "reason": "Hamstring Injury",
                "since": "2026-08-22"
            },
            {
                "player": "G. Gudmundsson",
                "photo": "https://media.api-sports.io/football/players/47969.png",
                "reason": "Hamstring Injury",
                "since": "2026-08-22"
            },
            {
                "player": "M. Joseph",
                "photo": "https://media.api-sports.io/football/players/313059.png",
                "reason": "Knee Injury",
                "since": "2026-10-10"
            },
            {
                "player": "I. Gruev",
                "photo": "https://media.api-sports.io/football/players/129142.png",
                "reason": "Knee Injury",
                "since": "2026-09-05"
            },
            {
                "player": "J. Rodon",
                "photo": "https://media.api-sports.io/football/players/19321.png",
                "reason": "Muscle Injury",
                "since": "2026-10-10"
            },
            {
                "player": "H. Wilson",
                "photo": "https://media.api-sports.io/football/players/19221.png",
                "reason": "Muscle Injury",
                "since": "2026-10-10"
            },
            {
                "player": "J. Bahoya",
                "photo": "https://media.api-sports.io/football/players/369674.png",
                "reason": "Ankle Injury",
                "since": "2026-10-10"
            }
        ],
        "newcastle": [
            {
                "player": "Joelinton",
                "photo": "https://media.api-sports.io/football/players/723.png",
                "reason": "Thigh Injury",
                "since": "2026-09-19"
            },
            {
                "player": "V. Livramento",
                "photo": "https://media.api-sports.io/football/players/158694.png",
                "reason": "Hamstring Injury",
                "since": "2026-08-29"
            },
            {
                "player": "D. Burn",
                "photo": "https://media.api-sports.io/football/players/18961.png",
                "reason": "Ankle Injury",
                "since": "2026-09-19"
            },
            {
                "player": "W. Osula",
                "photo": "https://media.api-sports.io/football/players/315237.png",
                "reason": "Foot Injury",
                "since": "2026-09-19"
            },
            {
                "player": "A. Dedic",
                "photo": "https://media.api-sports.io/football/players/7318.png",
                "reason": "Muscle Injury",
                "since": "2026-09-19"
            },
            {
                "player": "A. Elanga",
                "photo": "https://media.api-sports.io/football/players/153430.png",
                "reason": "Knee Injury",
                "since": "2026-09-19"
            },
            {
                "player": "E. Jaouen",
                "photo": "https://media.api-sports.io/football/players/329640.png",
                "reason": "Ankle Injury",
                "since": "2026-09-19"
            },
            {
                "player": "Nico",
                "photo": "https://media.api-sports.io/football/players/161933.png",
                "reason": "Injury",
                "since": "2026-09-19"
            },
            {
                "player": "J. Ramsey",
                "photo": "https://media.api-sports.io/football/players/19192.png",
                "reason": "Injury",
                "since": "2026-09-19"
            }
        ],
        "liverpool": [
            {
                "player": "C. Bradley",
                "photo": "https://media.api-sports.io/football/players/180317.png",
                "reason": "Knee Injury",
                "since": "2026-10-11"
            },
            {
                "player": "H. Ekitike",
                "photo": "https://media.api-sports.io/football/players/174565.png",
                "reason": "Achilles Tendon Injury",
                "since": "2026-10-11"
            },
            {
                "player": "J. Gomez",
                "photo": "https://media.api-sports.io/football/players/284.png",
                "reason": "Muscle Injury",
                "since": "2026-09-12"
            },
            {
                "player": "G. Leoni",
                "photo": "https://media.api-sports.io/football/players/409047.png",
                "reason": "Knee Injury",
                "since": "2026-10-11"
            },
            {
                "player": "S. Bajcetic",
                "photo": "https://media.api-sports.io/football/players/310187.png",
                "reason": "Hamstring Injury",
                "since": "2026-08-29"
            },
            {
                "player": "F. Chiesa",
                "photo": "https://media.api-sports.io/football/players/30410.png",
                "reason": "Back Injury",
                "since": "2026-10-11"
            },
            {
                "player": "H. Elliott",
                "photo": "https://media.api-sports.io/football/players/19035.png",
                "reason": "Coach's decision",
                "since": "2026-08-29"
            },
            {
                "player": "C. Gakpo",
                "photo": "https://media.api-sports.io/football/players/247.png",
                "reason": "Ankle Injury",
                "since": "2026-10-11"
            },
            {
                "player": "A. Isak",
                "photo": "https://media.api-sports.io/football/players/2864.png",
                "reason": "Thigh Injury",
                "since": "2026-10-11"
            },
            {
                "player": "J. Jacquet",
                "photo": "https://media.api-sports.io/football/players/367636.png",
                "reason": "Muscle Injury",
                "since": "2026-10-11"
            }
        ],
        "brighton": [
            {
                "player": "E. Ferguson",
                "photo": "https://media.api-sports.io/football/players/129643.png",
                "reason": "Ankle Injury",
                "since": "2026-10-10"
            },
            {
                "player": "Y. Minteh",
                "photo": "https://media.api-sports.io/football/players/383685.png",
                "reason": "Injury",
                "since": "2026-10-10"
            },
            {
                "player": "K. Mitoma",
                "photo": "https://media.api-sports.io/football/players/106835.png",
                "reason": "Hamstring Injury",
                "since": "2026-10-10"
            },
            {
                "player": "M. O'Riley",
                "photo": "https://media.api-sports.io/football/players/19030.png",
                "reason": "Illness",
                "since": "2026-08-23"
            },
            {
                "player": "S. Tzimas",
                "photo": "https://media.api-sports.io/football/players/343311.png",
                "reason": "Knee Injury",
                "since": "2026-10-10"
            },
            {
                "player": "J. Hinshelwood",
                "photo": "https://media.api-sports.io/football/players/305730.png",
                "reason": "Injury",
                "since": "2026-10-10"
            },
            {
                "player": "M. Orozco",
                "photo": "https://media.api-sports.io/football/players/528054.png",
                "reason": "Injury",
                "since": "2026-08-30"
            },
            {
                "player": "F. Azeez",
                "photo": "https://media.api-sports.io/football/players/282637.png",
                "reason": "Abdominal strain",
                "since": "2026-10-10"
            },
            {
                "player": "G. Rutter",
                "photo": "https://media.api-sports.io/football/players/90590.png",
                "reason": "Injury",
                "since": "2026-09-05"
            },
            {
                "player": "M. Svoboda",
                "photo": "https://media.api-sports.io/football/players/7090.png",
                "reason": "Injury",
                "since": "2026-09-13"
            },
            {
                "player": "M. Wieffer",
                "photo": "https://media.api-sports.io/football/players/92993.png",
                "reason": "Knee Injury",
                "since": "2026-10-10"
            },
            {
                "player": "Z. Yohanna",
                "photo": "https://media.api-sports.io/football/players/524411.png",
                "reason": "Lacking Match Fitness",
                "since": "2026-10-10"
            },
            {
                "player": "P. Struijk",
                "photo": "https://media.api-sports.io/football/players/64003.png",
                "reason": "Muscle Injury",
                "since": "2026-10-10"
            }
        ],
        "aston-villa": [
            {
                "player": "T. Abraham",
                "photo": "https://media.api-sports.io/football/players/19194.png",
                "reason": "Injury",
                "since": "2026-08-23"
            },
            {
                "player": "L. Bailey",
                "photo": "https://media.api-sports.io/football/players/983.png",
                "reason": "Muscle Injury",
                "since": "2026-08-31"
            },
            {
                "player": "B. Madjo",
                "photo": "https://media.api-sports.io/football/players/514519.png",
                "reason": "Ankle Injury",
                "since": "2026-09-19"
            },
            {
                "player": "J. Manzambi",
                "photo": "https://media.api-sports.io/football/players/406244.png",
                "reason": "Knee Injury",
                "since": "2026-09-05"
            },
            {
                "player": "E. Martinez",
                "photo": "https://media.api-sports.io/football/players/19599.png",
                "reason": "Finger Injury",
                "since": "2026-08-23"
            },
            {
                "player": "A. Onana",
                "photo": "https://media.api-sports.io/football/players/162714.png",
                "reason": "Knee Injury",
                "since": "2026-10-10"
            },
            {
                "player": "O. Watkins",
                "photo": "https://media.api-sports.io/football/players/19366.png",
                "reason": "Inactive",
                "since": "2026-08-23"
            },
            {
                "player": "Joao Gomes",
                "photo": "https://media.api-sports.io/football/players/195103.png",
                "reason": "Red Card",
                "since": "2026-09-12"
            },
            {
                "player": "Alysson",
                "photo": "https://media.api-sports.io/football/players/464004.png",
                "reason": "Injury",
                "since": "2026-09-19"
            },
            {
                "player": "M. Bizot",
                "photo": "https://media.api-sports.io/football/players/36878.png",
                "reason": "Back Injury",
                "since": "2026-09-19"
            },
            {
                "player": "L. Goretzka",
                "photo": "https://media.api-sports.io/football/players/511.png",
                "reason": "Knee Injury",
                "since": "2026-10-10"
            },
            {
                "player": "I. Maatsen",
                "photo": "https://media.api-sports.io/football/players/138816.png",
                "reason": "Ankle Injury",
                "since": "2026-10-10"
            },
            {
                "player": "P. Torres",
                "photo": "https://media.api-sports.io/football/players/46815.png",
                "reason": "Injury",
                "since": "2026-09-19"
            },
            {
                "player": "M. Cash",
                "photo": "https://media.api-sports.io/football/players/19298.png",
                "reason": "Muscle Injury",
                "since": "2026-09-12"
            }
        ],
        "manchester-city": [
            {
                "player": "J. Doku",
                "photo": "https://media.api-sports.io/football/players/1422.png",
                "reason": "Calf Injury",
                "since": "2026-09-13"
            },
            {
                "player": "Savinho",
                "photo": "https://media.api-sports.io/football/players/266657.png",
                "reason": "Transfer negotiations",
                "since": "2026-08-23"
            },
            {
                "player": "M. Nunes",
                "photo": "https://media.api-sports.io/football/players/41621.png",
                "reason": "Injury",
                "since": "2026-08-28"
            },
            {
                "player": "P. Foden",
                "photo": "https://media.api-sports.io/football/players/631.png",
                "reason": "Red Card",
                "since": "2026-10-11"
            },
            {
                "player": "N. O'Reilly",
                "photo": "https://media.api-sports.io/football/players/307123.png",
                "reason": "Injury",
                "since": "2026-10-11"
            }
        ],
        "bournemouth": [
            {
                "player": "A. Adli",
                "photo": "https://media.api-sports.io/football/players/129682.png",
                "reason": "Calf Injury",
                "since": "2026-10-10"
            },
            {
                "player": "J. Araujo",
                "photo": "https://media.api-sports.io/football/players/51051.png",
                "reason": "Thigh Injury",
                "since": "2026-10-10"
            },
            {
                "player": "R. Christie",
                "photo": "https://media.api-sports.io/football/players/1125.png",
                "reason": "Red Card",
                "since": "2026-08-23"
            },
            {
                "player": "E. J. Kroupi",
                "photo": "https://media.api-sports.io/football/players/368030.png",
                "reason": "Foot Injury",
                "since": "2026-10-10"
            },
            {
                "player": "V. Milosavljevic",
                "photo": "https://media.api-sports.io/football/players/412719.png",
                "reason": "Injury",
                "since": "2026-10-10"
            },
            {
                "player": "J. Soler",
                "photo": "https://media.api-sports.io/football/players/363333.png",
                "reason": "Lacking Match Fitness",
                "since": "2026-08-23"
            },
            {
                "player": "J. Kluivert",
                "photo": "https://media.api-sports.io/football/players/792.png",
                "reason": "Muscle Injury",
                "since": "2026-10-10"
            },
            {
                "player": "A. Scott",
                "photo": "https://media.api-sports.io/football/players/304853.png",
                "reason": "Thigh Injury",
                "since": "2026-10-10"
            },
            {
                "player": "D. Brooks",
                "photo": "https://media.api-sports.io/football/players/18870.png",
                "reason": "Injury",
                "since": "2026-10-10"
            }
        ],
        "brentford": [
            {
                "player": "A. Milambo",
                "photo": "https://media.api-sports.io/football/players/319517.png",
                "reason": "Knee Injury",
                "since": "2026-09-12"
            },
            {
                "player": "S. van den Berg",
                "photo": "https://media.api-sports.io/football/players/36922.png",
                "reason": "Injury",
                "since": "2026-10-10"
            },
            {
                "player": "J. Dasilva",
                "photo": "https://media.api-sports.io/football/players/19362.png",
                "reason": "Muscle Injury",
                "since": "2026-10-10"
            },
            {
                "player": "M. Jensen",
                "photo": "https://media.api-sports.io/football/players/47438.png",
                "reason": "Muscle Injury",
                "since": "2026-10-10"
            },
            {
                "player": "N. Collins",
                "photo": "https://media.api-sports.io/football/players/19495.png",
                "reason": "Calf Injury",
                "since": "2026-10-10"
            },
            {
                "player": "K. Furo",
                "photo": "https://media.api-sports.io/football/players/393193.png",
                "reason": "Surgery",
                "since": "2026-10-10"
            },
            {
                "player": "M. Damsgaard",
                "photo": "https://media.api-sports.io/football/players/15908.png",
                "reason": "Ankle Injury",
                "since": "2026-10-10"
            },
            {
                "player": "D. Ouattara",
                "photo": "https://media.api-sports.io/football/players/284797.png",
                "reason": "Illness",
                "since": "2026-10-10"
            }
        ],
        "tottenham": [
            {
                "player": "M. Kudus",
                "photo": "https://media.api-sports.io/football/players/15911.png",
                "reason": "Muscle Injury",
                "since": "2026-08-22"
            },
            {
                "player": "D. Kulusevski",
                "photo": "https://media.api-sports.io/football/players/30435.png",
                "reason": "Knee Injury",
                "since": "2026-10-10"
            },
            {
                "player": "W. Odobert",
                "photo": "https://media.api-sports.io/football/players/336564.png",
                "reason": "Knee Injury",
                "since": "2026-10-10"
            },
            {
                "player": "P. Porro",
                "photo": "https://media.api-sports.io/football/players/47519.png",
                "reason": "Muscle Injury",
                "since": "2026-10-10"
            },
            {
                "player": "X. Simons",
                "photo": "https://media.api-sports.io/football/players/162016.png",
                "reason": "Knee Injury",
                "since": "2026-10-10"
            },
            {
                "player": "M. van de Ven",
                "photo": "https://media.api-sports.io/football/players/152849.png",
                "reason": "Wrist Injury",
                "since": "2026-10-10"
            },
            {
                "player": "J. Maddison",
                "photo": "https://media.api-sports.io/football/players/18784.png",
                "reason": "Knock",
                "since": "2026-09-05"
            },
            {
                "player": "M. Mudryk",
                "photo": "https://media.api-sports.io/football/players/63577.png",
                "reason": "Ankle Injury",
                "since": "2026-10-10"
            },
            {
                "player": "Richarlison",
                "photo": "https://media.api-sports.io/football/players/2413.png",
                "reason": "Inactive",
                "since": "2026-09-19"
            }
        ],
        "juventus": [
            {
                "player": "P. M. Sarr",
                "photo": "https://media.api-sports.io/football/players/237129.png",
                "reason": "Muscle Injury",
                "since": "2026-09-06"
            },
            {
                "player": "M. Di Gregorio",
                "photo": "https://media.api-sports.io/football/players/30670.png",
                "reason": "Transfer negotiations",
                "since": "2026-08-23"
            },
            {
                "player": "J. Ekhator",
                "photo": "https://media.api-sports.io/football/players/451504.png",
                "reason": "Muscle Injury",
                "since": "2026-10-11"
            },
            {
                "player": "F. Gatti",
                "photo": "https://media.api-sports.io/football/players/268341.png",
                "reason": "Injury",
                "since": "2026-08-23"
            },
            {
                "player": "W. McKennie",
                "photo": "https://media.api-sports.io/football/players/415.png",
                "reason": "Muscle Injury",
                "since": "2026-09-13"
            },
            {
                "player": "E. Zhegrova",
                "photo": "https://media.api-sports.io/football/players/48392.png",
                "reason": "Muscle Injury",
                "since": "2026-08-29"
            },
            {
                "player": "A. Cambiaso",
                "photo": "https://media.api-sports.io/football/players/127011.png",
                "reason": "Ankle Injury",
                "since": "2026-09-20"
            },
            {
                "player": "A. Milik",
                "photo": "https://media.api-sports.io/football/players/333.png",
                "reason": "Inactive",
                "since": "2026-10-11"
            },
            {
                "player": "K. Yildiz",
                "photo": "https://media.api-sports.io/football/players/339883.png",
                "reason": "Foot Injury",
                "since": "2026-10-11"
            },
            {
                "player": "J. Cabal",
                "photo": "https://media.api-sports.io/football/players/125674.png",
                "reason": "Thigh Injury",
                "since": "2026-10-11"
            },
            {
                "player": "K. Thuram",
                "photo": "https://media.api-sports.io/football/players/116.png",
                "reason": "Knee Injury",
                "since": "2026-10-11"
            },
            {
                "player": "M. Locatelli",
                "photo": "https://media.api-sports.io/football/players/30533.png",
                "reason": "Knee Injury",
                "since": "2026-10-11"
            },
            {
                "player": "J. Boga",
                "photo": "https://media.api-sports.io/football/players/30531.png",
                "reason": "Muscle Injury",
                "since": "2026-10-11"
            },
            {
                "player": "K. Grabara",
                "photo": "https://media.api-sports.io/football/players/15573.png",
                "reason": "Knee Injury",
                "since": "2026-10-11"
            }
        ],
        "everton": [
            {
                "player": "C. Norgaard",
                "photo": "https://media.api-sports.io/football/players/30407.png",
                "reason": "Groin Injury",
                "since": "2026-10-11"
            },
            {
                "player": "M. Rohl",
                "photo": "https://media.api-sports.io/football/players/202854.png",
                "reason": "Injury",
                "since": "2026-10-11"
            }
        ],
        "ipswich": [
            {
                "player": "A. Matusiwa",
                "photo": "https://media.api-sports.io/football/players/37236.png",
                "reason": "Muscle Injury",
                "since": "2026-09-19"
            },
            {
                "player": "J. Taylor",
                "photo": "https://media.api-sports.io/football/players/18397.png",
                "reason": "Knee Injury",
                "since": "2026-09-19"
            },
            {
                "player": "Florentino",
                "photo": "https://media.api-sports.io/football/players/575.png",
                "reason": "Inactive",
                "since": "2026-08-30"
            },
            {
                "player": "J. Philogene",
                "photo": "https://media.api-sports.io/football/players/138931.png",
                "reason": "Ankle Injury",
                "since": "2026-09-04"
            },
            {
                "player": "I. Fatawu",
                "photo": "https://media.api-sports.io/football/players/303467.png",
                "reason": "Red Card",
                "since": "2026-10-10"
            }
        ],
        "sunderland": [
            {
                "player": "S. Adingra",
                "photo": "https://media.api-sports.io/football/players/301771.png",
                "reason": "Foot Injury",
                "since": "2026-08-30"
            },
            {
                "player": "D. Methalie",
                "photo": "https://media.api-sports.io/football/players/452697.png",
                "reason": "Yellow Cards",
                "since": "2026-08-30"
            },
            {
                "player": "H. Diarra",
                "photo": "https://media.api-sports.io/football/players/327631.png",
                "reason": "Hamstring Injury",
                "since": "2026-10-10"
            },
            {
                "player": "R. Mandava",
                "photo": "https://media.api-sports.io/football/players/22225.png",
                "reason": "Red Card",
                "since": "2026-09-20"
            },
            {
                "player": "R. Mundle",
                "photo": "https://media.api-sports.io/football/players/284414.png",
                "reason": "Knee Injury",
                "since": "2026-10-10"
            },
            {
                "player": "D. Ballard",
                "photo": "https://media.api-sports.io/football/players/55904.png",
                "reason": "Muscle Injury",
                "since": "2026-10-10"
            },
            {
                "player": "B. Brobbey",
                "photo": "https://media.api-sports.io/football/players/38750.png",
                "reason": "Muscle Injury",
                "since": "2026-10-10"
            }
        ],
        "fulham": [
            {
                "player": "J. Andersen",
                "photo": "https://media.api-sports.io/football/players/2729.png",
                "reason": "Red Card",
                "since": "2026-08-24"
            },
            {
                "player": "T. Cairney",
                "photo": "https://media.api-sports.io/football/players/19025.png",
                "reason": "Knee Injury",
                "since": "2026-10-10"
            },
            {
                "player": "L. De Fougerolles",
                "photo": "https://media.api-sports.io/football/players/327738.png",
                "reason": "Injury",
                "since": "2026-09-05"
            },
            {
                "player": "K. Tete",
                "photo": "https://media.api-sports.io/football/players/657.png",
                "reason": "Concussion",
                "since": "2026-10-10"
            }
        ],
        "chelsea": [
            {
                "player": "A. Anselmino",
                "photo": "https://media.api-sports.io/football/players/422780.png",
                "reason": "Inactive",
                "since": "2026-08-24"
            },
            {
                "player": "M. Caicedo",
                "photo": "https://media.api-sports.io/football/players/116117.png",
                "reason": "Calf Injury",
                "since": "2026-10-10"
            },
            {
                "player": "E. Emegha",
                "photo": "https://media.api-sports.io/football/players/203762.png",
                "reason": "Muscle Injury",
                "since": "2026-10-10"
            },
            {
                "player": "W. Fofana",
                "photo": "https://media.api-sports.io/football/players/22094.png",
                "reason": "Red Card",
                "since": "2026-08-24"
            },
            {
                "player": "J. Henderson",
                "photo": "https://media.api-sports.io/football/players/292.png",
                "reason": "Wrist Injury",
                "since": "2026-09-12"
            },
            {
                "player": "M. Sarr",
                "photo": "https://media.api-sports.io/football/players/276184.png",
                "reason": "Transfer negotiations",
                "since": "2026-08-24"
            },
            {
                "player": "E. Fernandez",
                "photo": "https://media.api-sports.io/football/players/5996.png",
                "reason": "Coach's decision",
                "since": "2026-08-30"
            },
            {
                "player": "M. Palestra",
                "photo": "https://media.api-sports.io/football/players/383018.png",
                "reason": "Thigh Injury",
                "since": "2026-10-10"
            },
            {
                "player": "Joao Pedro",
                "photo": "https://media.api-sports.io/football/players/10329.png",
                "reason": "Knee Injury",
                "since": "2026-10-10"
            },
            {
                "player": "J. Gittens",
                "photo": "https://media.api-sports.io/football/players/286894.png",
                "reason": "Ankle Injury",
                "since": "2026-10-10"
            }
        ],
        "crystal-palace": [
            {
                "player": "J. Mateta",
                "photo": "https://media.api-sports.io/football/players/25927.png",
                "reason": "Hamstring Injury",
                "since": "2026-10-11"
            },
            {
                "player": "C. Riad",
                "photo": "https://media.api-sports.io/football/players/278898.png",
                "reason": "Knee Injury",
                "since": "2026-10-11"
            },
            {
                "player": "I. Sarr",
                "photo": "https://media.api-sports.io/football/players/2218.png",
                "reason": "Groin Injury",
                "since": "2026-09-12"
            },
            {
                "player": "A. Disasi",
                "photo": "https://media.api-sports.io/football/players/21998.png",
                "reason": "Red Card",
                "since": "2026-10-11"
            },
            {
                "player": "D. Henderson",
                "photo": "https://media.api-sports.io/football/players/19088.png",
                "reason": "Foot Injury",
                "since": "2026-10-11"
            },
            {
                "player": "A. Khalaili",
                "photo": "https://media.api-sports.io/football/players/338735.png",
                "reason": "Muscle Injury",
                "since": "2026-10-11"
            },
            {
                "player": "T. Tomiyasu",
                "photo": "https://media.api-sports.io/football/players/2597.png",
                "reason": "Calf Injury",
                "since": "2026-10-11"
            },
            {
                "player": "E. Nketiah",
                "photo": "https://media.api-sports.io/football/players/1468.png",
                "reason": "Injury",
                "since": "2026-09-12"
            }
        ],
        "alaves": [
            {
                "player": "F. Garces",
                "photo": "https://media.api-sports.io/football/players/6638.png",
                "reason": "Suspended",
                "since": "2026-10-10"
            },
            {
                "player": "T. Mendes",
                "photo": "https://media.api-sports.io/football/players/311740.png",
                "reason": "Knee Injury",
                "since": "2026-08-20"
            },
            {
                "player": "N. Valentini",
                "photo": "https://media.api-sports.io/football/players/311071.png",
                "reason": "Red Card",
                "since": "2026-08-15"
            },
            {
                "player": "T. Martinez",
                "photo": "https://media.api-sports.io/football/players/47181.png",
                "reason": "Foot Injury",
                "since": "2026-09-06"
            },
            {
                "player": "M. Rodriguez",
                "photo": "https://media.api-sports.io/football/players/332645.png",
                "reason": "Ankle Injury",
                "since": "2026-10-10"
            },
            {
                "player": "A. Manas",
                "photo": "https://media.api-sports.io/football/players/330440.png",
                "reason": "Injury",
                "since": "2026-09-19"
            },
            {
                "player": "V. Koski",
                "photo": "https://media.api-sports.io/football/players/106759.png",
                "reason": "Muscle Injury",
                "since": "2026-10-10"
            }
        ],
        "getafe": [
            {
                "player": "Juanmi",
                "photo": "https://media.api-sports.io/football/players/47320.png",
                "reason": "Knee Injury",
                "since": "2026-10-10"
            },
            {
                "player": "C. Uche",
                "photo": "https://media.api-sports.io/football/players/403554.png",
                "reason": "Knee Injury",
                "since": "2026-10-10"
            },
            {
                "player": "Kiko Femenia",
                "photo": "https://media.api-sports.io/football/players/18794.png",
                "reason": "Hamstring Injury",
                "since": "2026-09-20"
            },
            {
                "player": "M. Martin",
                "photo": "https://media.api-sports.io/football/players/343205.png",
                "reason": "Red Card",
                "since": "2026-09-20"
            },
            {
                "player": "A. Abqar",
                "photo": "https://media.api-sports.io/football/players/46813.png",
                "reason": "Muscle Injury",
                "since": "2026-10-10"
            },
            {
                "player": "Francho",
                "photo": "https://media.api-sports.io/football/players/162249.png",
                "reason": "Injury",
                "since": "2026-09-07"
            },
            {
                "player": "A. Garcia",
                "photo": "https://media.api-sports.io/football/players/388013.png",
                "reason": "Injury",
                "since": "2026-09-13"
            },
            {
                "player": "Z. Romero",
                "photo": "https://media.api-sports.io/football/players/180927.png",
                "reason": "Red Card",
                "since": "2026-09-13"
            },
            {
                "player": "B. Mayoral",
                "photo": "https://media.api-sports.io/football/players/47472.png",
                "reason": "Injury",
                "since": "2026-09-17"
            },
            {
                "player": "R. Terrats",
                "photo": "https://media.api-sports.io/football/players/187987.png",
                "reason": "Inactive",
                "since": "2026-09-17"
            },
            {
                "player": "M. Satriano",
                "photo": "https://media.api-sports.io/football/players/195512.png",
                "reason": "Knee Injury",
                "since": "2026-10-10"
            }
        ],
        "sevilla": [
            {
                "player": "A. Gonzalez",
                "photo": "https://media.api-sports.io/football/players/119213.png",
                "reason": "Muscle Injury",
                "since": "2026-08-22"
            },
            {
                "player": "Marcao",
                "photo": "https://media.api-sports.io/football/players/433.png",
                "reason": "Foot Injury",
                "since": "2026-09-06"
            },
            {
                "player": "K. Salas",
                "photo": "https://media.api-sports.io/football/players/297311.png",
                "reason": "Red Card",
                "since": "2026-08-22"
            },
            {
                "player": "R. Vargas",
                "photo": "https://media.api-sports.io/football/players/48471.png",
                "reason": "Knee Injury",
                "since": "2026-09-19"
            },
            {
                "player": "A. Sangante",
                "photo": "https://media.api-sports.io/football/players/174927.png",
                "reason": "Ankle Injury",
                "since": "2026-09-16"
            },
            {
                "player": "L. Stassin",
                "photo": "https://media.api-sports.io/football/players/322560.png",
                "reason": "Muscle Injury",
                "since": "2026-09-19"
            }
        ],
        "rayo-vallecano": [
            {
                "player": "M. Kumbulla",
                "photo": "https://media.api-sports.io/football/players/30924.png",
                "reason": "Muscle Injury",
                "since": "2026-09-05"
            },
            {
                "player": "Luiz Felipe",
                "photo": "https://media.api-sports.io/football/players/1847.png",
                "reason": "Hamstring Injury",
                "since": "2026-10-10"
            },
            {
                "player": "D. Mendez",
                "photo": "https://media.api-sports.io/football/players/333378.png",
                "reason": "Knee Injury",
                "since": "2026-08-15"
            },
            {
                "player": "A. Batalla",
                "photo": "https://media.api-sports.io/football/players/11379.png",
                "reason": "Broken calfbone",
                "since": "2026-10-10"
            },
            {
                "player": "I. Palazon",
                "photo": "https://media.api-sports.io/football/players/131546.png",
                "reason": "Muscle Injury",
                "since": "2026-09-19"
            },
            {
                "player": "J. Vertrouwd",
                "photo": "https://media.api-sports.io/football/players/314006.png",
                "reason": "Muscle Injury",
                "since": "2026-09-19"
            },
            {
                "player": "R. Nteka",
                "photo": "https://media.api-sports.io/football/players/122657.png",
                "reason": "Muscle Injury",
                "since": "2026-09-19"
            },
            {
                "player": "F. Perez",
                "photo": "https://media.api-sports.io/football/players/162931.png",
                "reason": "Red Card",
                "since": "2026-09-12"
            },
            {
                "player": "J. de Frutos",
                "photo": "https://media.api-sports.io/football/players/128582.png",
                "reason": "Red Card",
                "since": "2026-09-15"
            },
            {
                "player": "I. Balliu",
                "photo": "https://media.api-sports.io/football/players/20520.png",
                "reason": "Ankle Injury",
                "since": "2026-10-10"
            }
        ],
        "racing-santander": [
            {
                "player": "G. Guliashvili",
                "photo": "https://media.api-sports.io/football/players/24567.png",
                "reason": "Leg Injury",
                "since": "2026-08-23"
            },
            {
                "player": "Pedro Felipe",
                "photo": "https://media.api-sports.io/football/players/415064.png",
                "reason": "Hamstring Injury",
                "since": "2026-08-28"
            },
            {
                "player": "I. Luque",
                "photo": "https://media.api-sports.io/football/players/441223.png",
                "reason": "Inactive",
                "since": "2026-09-05"
            },
            {
                "player": "A. Martin",
                "photo": "https://media.api-sports.io/football/players/47209.png",
                "reason": "Knee Injury",
                "since": "2026-09-19"
            },
            {
                "player": "S. Eriksson",
                "photo": "https://media.api-sports.io/football/players/408875.png",
                "reason": "Shoulder Injury",
                "since": "2026-10-11"
            },
            {
                "player": "A. Almeida",
                "photo": "https://media.api-sports.io/football/players/41157.png",
                "reason": "Red Card",
                "since": "2026-09-16"
            }
        ],
        "deportivo-la-coruna": [
            {
                "player": "N. Carrillo",
                "photo": "https://media.api-sports.io/football/players/628615.png",
                "reason": "Ankle Injury",
                "since": "2026-10-11"
            },
            {
                "player": "Y. Hernandez",
                "photo": "https://media.api-sports.io/football/players/295880.png",
                "reason": "Groin Injury",
                "since": "2026-08-17"
            },
            {
                "player": "M. Casado",
                "photo": "https://media.api-sports.io/football/players/329728.png",
                "reason": "Collarbone injury",
                "since": "2026-10-11"
            },
            {
                "player": "A. Traore",
                "photo": "https://media.api-sports.io/football/players/18753.png",
                "reason": "Muscle Injury",
                "since": "2026-08-30"
            },
            {
                "player": "A. Altimira",
                "photo": "https://media.api-sports.io/football/players/162122.png",
                "reason": "Red Card",
                "since": "2026-09-05"
            },
            {
                "player": "Angelino",
                "photo": "https://media.api-sports.io/football/players/227.png",
                "reason": "Red Card",
                "since": "2026-09-20"
            },
            {
                "player": "P. Aubameyang",
                "photo": "https://media.api-sports.io/football/players/1465.png",
                "reason": "Knee Injury",
                "since": "2026-10-11"
            },
            {
                "player": "L. Amatucci",
                "photo": "https://media.api-sports.io/football/players/346865.png",
                "reason": "Muscle Injury",
                "since": "2026-10-11"
            },
            {
                "player": "Z. Eddahchouri",
                "photo": "https://media.api-sports.io/football/players/37616.png",
                "reason": "Wrist Injury",
                "since": "2026-10-11"
            }
        ],
        "elche": [
            {
                "player": "A. Boayar",
                "photo": "https://media.api-sports.io/football/players/439293.png",
                "reason": "Muscle Injury",
                "since": "2026-08-28"
            },
            {
                "player": "G. Diangana",
                "photo": "https://media.api-sports.io/football/players/18821.png",
                "reason": "Knee Injury",
                "since": "2026-08-17"
            },
            {
                "player": "A. Osorio",
                "photo": "https://media.api-sports.io/football/players/358600.png",
                "reason": "Muscle Injury",
                "since": "2026-08-17"
            },
            {
                "player": "Y. Santiago",
                "photo": "https://media.api-sports.io/football/players/284415.png",
                "reason": "Knee Injury",
                "since": "2026-10-11"
            },
            {
                "player": "F. Redondo Solari",
                "photo": "https://media.api-sports.io/football/players/311345.png",
                "reason": "Red Card",
                "since": "2026-10-11"
            },
            {
                "player": "Buba Sangare",
                "photo": "https://media.api-sports.io/football/players/446067.png",
                "reason": "Muscle Injury",
                "since": "2026-10-11"
            }
        ],
        "espanyol": [
            {
                "player": "K. Garcia",
                "photo": "https://media.api-sports.io/football/players/47396.png",
                "reason": "Hamstring Injury",
                "since": "2026-10-09"
            },
            {
                "player": "J. Puado",
                "photo": "https://media.api-sports.io/football/players/47349.png",
                "reason": "Knee Injury",
                "since": "2026-09-18"
            },
            {
                "player": "A. Gorosabel",
                "photo": "https://media.api-sports.io/football/players/47299.png",
                "reason": "Injury",
                "since": "2026-09-15"
            },
            {
                "player": "L. Cabrera",
                "photo": "https://media.api-sports.io/football/players/47249.png",
                "reason": "Red Card",
                "since": "2026-08-29"
            },
            {
                "player": "B. Zaragoza",
                "photo": "https://media.api-sports.io/football/players/286639.png",
                "reason": "Knee Injury",
                "since": "2026-08-29"
            },
            {
                "player": "O. El Hilali",
                "photo": "https://media.api-sports.io/football/players/286601.png",
                "reason": "Red Card",
                "since": "2026-09-18"
            },
            {
                "player": "Jofre",
                "photo": "https://media.api-sports.io/football/players/182674.png",
                "reason": "Groin Injury",
                "since": "2026-10-09"
            }
        ],
        "levante": [
            {
                "player": "R. Brugue",
                "photo": "https://media.api-sports.io/football/players/47225.png",
                "reason": "Red Card",
                "since": "2026-08-16"
            },
            {
                "player": "A. Primo",
                "photo": "https://media.api-sports.io/football/players/338295.png",
                "reason": "Shoulder Injury",
                "since": "2026-09-20"
            },
            {
                "player": "K. Etta Eyong",
                "photo": "https://media.api-sports.io/football/players/378284.png",
                "reason": "Muscle Injury",
                "since": "2026-09-20"
            },
            {
                "player": "H. Sotelo",
                "photo": "https://media.api-sports.io/football/players/313651.png",
                "reason": "Knee Injury",
                "since": "2026-09-20"
            }
        ],
        "atletico-madrid": [
            {
                "player": "J. Alvarez",
                "photo": "https://media.api-sports.io/football/players/6009.png",
                "reason": "Muscle Injury",
                "since": "2026-09-16"
            },
            {
                "player": "T. Lemar",
                "photo": "https://media.api-sports.io/football/players/45.png",
                "reason": "Coach's decision",
                "since": "2026-08-29"
            },
            {
                "player": "C. Romero",
                "photo": "https://media.api-sports.io/football/players/30776.png",
                "reason": "Lacking Match Fitness",
                "since": "2026-08-23"
            },
            {
                "player": "A. Sorloth",
                "photo": "https://media.api-sports.io/football/players/8492.png",
                "reason": "Muscle Injury",
                "since": "2026-09-20"
            },
            {
                "player": "O. Vargas",
                "photo": "https://media.api-sports.io/football/players/313383.png",
                "reason": "Coach's decision",
                "since": "2026-09-05"
            },
            {
                "player": "R. Le Normand",
                "photo": "https://media.api-sports.io/football/players/47301.png",
                "reason": "Red Card",
                "since": "2026-08-29"
            },
            {
                "player": "P. Barrios",
                "photo": "https://media.api-sports.io/football/players/336594.png",
                "reason": "Muscle Injury",
                "since": "2026-09-20"
            }
        ],
        "malaga": [
            {
                "player": "F. Calero",
                "photo": "https://media.api-sports.io/football/players/47478.png",
                "reason": "Ribs Injury",
                "since": "2026-09-20"
            },
            {
                "player": "M. Diarra",
                "photo": "https://media.api-sports.io/football/players/328192.png",
                "reason": "Calf Injury",
                "since": "2026-10-09"
            },
            {
                "player": "Juanpe",
                "photo": "https://media.api-sports.io/football/players/182786.png",
                "reason": "Muscle Injury",
                "since": "2026-08-19"
            },
            {
                "player": "D. Murillo",
                "photo": "https://media.api-sports.io/football/players/185234.png",
                "reason": "Knee Injury",
                "since": "2026-10-09"
            },
            {
                "player": "A. Nino",
                "photo": "https://media.api-sports.io/football/players/386850.png",
                "reason": "Injury",
                "since": "2026-09-06"
            },
            {
                "player": "A. Ochoa",
                "photo": "https://media.api-sports.io/football/players/444451.png",
                "reason": "Knee Injury",
                "since": "2026-10-09"
            },
            {
                "player": "J. Lobete",
                "photo": "https://media.api-sports.io/football/players/182602.png",
                "reason": "Knee Injury",
                "since": "2026-10-09"
            },
            {
                "player": "A. Aznou",
                "photo": "https://media.api-sports.io/football/players/431921.png",
                "reason": "Muscle Injury",
                "since": "2026-09-20"
            },
            {
                "player": "C. Dotor",
                "photo": "https://media.api-sports.io/football/players/162034.png",
                "reason": "Illness",
                "since": "2026-09-13"
            },
            {
                "player": "A. Pastor",
                "photo": "https://media.api-sports.io/football/players/56670.png",
                "reason": "Illness",
                "since": "2026-09-13"
            },
            {
                "player": "H. Abaida",
                "photo": "https://media.api-sports.io/football/players/296695.png",
                "reason": "Inactive",
                "since": "2026-09-20"
            },
            {
                "player": "J. Cajuste",
                "photo": "https://media.api-sports.io/football/players/15797.png",
                "reason": "Injury",
                "since": "2026-10-09"
            },
            {
                "player": "J. Salinas",
                "photo": "https://media.api-sports.io/football/players/184407.png",
                "reason": "Loan agreement",
                "since": "2026-10-09"
            }
        ],
        "athletic-club": [
            {
                "player": "U. Egiluz",
                "photo": "https://media.api-sports.io/football/players/332305.png",
                "reason": "Knee Injury",
                "since": "2026-10-10"
            },
            {
                "player": "B. Prados Diaz",
                "photo": "https://media.api-sports.io/football/players/182617.png",
                "reason": "Thigh Injury",
                "since": "2026-08-30"
            },
            {
                "player": "N. Serrano",
                "photo": "https://media.api-sports.io/football/players/286593.png",
                "reason": "Coach's decision",
                "since": "2026-09-05"
            },
            {
                "player": "U. Vencedor",
                "photo": "https://media.api-sports.io/football/players/182639.png",
                "reason": "Inactive",
                "since": "2026-08-22"
            },
            {
                "player": "D. Vivian",
                "photo": "https://media.api-sports.io/football/players/47278.png",
                "reason": "Hamstring Injury",
                "since": "2026-09-19"
            },
            {
                "player": "P. Canales",
                "photo": "https://media.api-sports.io/football/players/437643.png",
                "reason": "Muscle Injury",
                "since": "2026-09-16"
            },
            {
                "player": "A. Djalo",
                "photo": "https://media.api-sports.io/football/players/190489.png",
                "reason": "Injury",
                "since": "2026-10-10"
            },
            {
                "player": "G. Guruzeta",
                "photo": "https://media.api-sports.io/football/players/47291.png",
                "reason": "Muscle Injury",
                "since": "2026-09-19"
            },
            {
                "player": "O. Sancet",
                "photo": "https://media.api-sports.io/football/players/128398.png",
                "reason": "Muscle Injury",
                "since": "2026-10-10"
            },
            {
                "player": "N. Williams",
                "photo": "https://media.api-sports.io/football/players/183799.png",
                "reason": "Thigh Injury",
                "since": "2026-10-10"
            }
        ],
        "real-betis": [
            {
                "player": "D. Conde",
                "photo": "https://media.api-sports.io/football/players/122956.png",
                "reason": "Shoulder Injury",
                "since": "2026-09-04"
            },
            {
                "player": "A. Ezzalzouli",
                "photo": "https://media.api-sports.io/football/players/181421.png",
                "reason": "Illness",
                "since": "2026-09-04"
            },
            {
                "player": "G. Lo Celso",
                "photo": "https://media.api-sports.io/football/players/1578.png",
                "reason": "Muscle Injury",
                "since": "2026-09-04"
            },
            {
                "player": "J. Morante",
                "photo": "https://media.api-sports.io/football/players/544644.png",
                "reason": "Coach's decision",
                "since": "2026-09-17"
            },
            {
                "player": "T. Parrott",
                "photo": "https://media.api-sports.io/football/players/149551.png",
                "reason": "Inactive",
                "since": "2026-08-21"
            },
            {
                "player": "G. Petit",
                "photo": "https://media.api-sports.io/football/players/414442.png",
                "reason": "Muscle Injury",
                "since": "2026-08-29"
            },
            {
                "player": "A. Ruibal",
                "photo": "https://media.api-sports.io/football/players/47119.png",
                "reason": "Knee Injury",
                "since": "2026-10-11"
            },
            {
                "player": "D. Ceballos",
                "photo": "https://media.api-sports.io/football/players/748.png",
                "reason": "Lacking Match Fitness",
                "since": "2026-09-04"
            },
            {
                "player": "D. Llorente",
                "photo": "https://media.api-sports.io/football/players/47302.png",
                "reason": "Broken nose",
                "since": "2026-09-20"
            },
            {
                "player": "I. Losada",
                "photo": "https://media.api-sports.io/football/players/128985.png",
                "reason": "Inactive",
                "since": "2026-09-20"
            },
            {
                "player": "J. Firpo",
                "photo": "https://media.api-sports.io/football/players/1564.png",
                "reason": "Groin Injury",
                "since": "2026-10-11"
            },
            {
                "player": "M. Bartra",
                "photo": "https://media.api-sports.io/football/players/1561.png",
                "reason": "Injury",
                "since": "2026-10-11"
            }
        ],
        "real-sociedad": [
            {
                "player": "J. Gorrotxategi",
                "photo": "https://media.api-sports.io/football/players/287654.png",
                "reason": "Groin Injury",
                "since": "2026-08-26"
            },
            {
                "player": "G. Guedes",
                "photo": "https://media.api-sports.io/football/players/925.png",
                "reason": "Injury",
                "since": "2026-08-21"
            },
            {
                "player": "P. Marin",
                "photo": "https://media.api-sports.io/football/players/290106.png",
                "reason": "Injury",
                "since": "2026-09-07"
            },
            {
                "player": "A. Odriozola",
                "photo": "https://media.api-sports.io/football/players/737.png",
                "reason": "Knee Injury",
                "since": "2026-10-11"
            },
            {
                "player": "H. Fort",
                "photo": "https://media.api-sports.io/football/players/386859.png",
                "reason": "Injury",
                "since": "2026-10-11"
            },
            {
                "player": "J. Pacheco",
                "photo": "https://media.api-sports.io/football/players/182546.png",
                "reason": "Coach's decision",
                "since": "2026-08-29"
            },
            {
                "player": "J. Martin",
                "photo": "https://media.api-sports.io/football/players/405073.png",
                "reason": "Red Card",
                "since": "2026-09-13"
            },
            {
                "player": "I. Zubeldia",
                "photo": "https://media.api-sports.io/football/players/47314.png",
                "reason": "Injury",
                "since": "2026-10-11"
            },
            {
                "player": "O. Oskarsson",
                "photo": "https://media.api-sports.io/football/players/61774.png",
                "reason": "Red Card",
                "since": "2026-10-11"
            }
        ],
        "real-madrid": [
            {
                "player": "R. Asencio",
                "photo": "https://media.api-sports.io/football/players/341640.png",
                "reason": "Broken Leg",
                "since": "2026-10-10"
            },
            {
                "player": "Eder Militao",
                "photo": "https://media.api-sports.io/football/players/372.png",
                "reason": "Hamstring Injury",
                "since": "2026-10-10"
            },
            {
                "player": "Endrick",
                "photo": "https://media.api-sports.io/football/players/377122.png",
                "reason": "Muscle Injury",
                "since": "2026-09-04"
            },
            {
                "player": "F. Mendy",
                "photo": "https://media.api-sports.io/football/players/653.png",
                "reason": "Hip Injury",
                "since": "2026-10-10"
            },
            {
                "player": "T. Pitarch",
                "photo": "https://media.api-sports.io/football/players/509470.png",
                "reason": "Knee Injury",
                "since": "2026-09-04"
            },
            {
                "player": "Rodrygo",
                "photo": "https://media.api-sports.io/football/players/10009.png",
                "reason": "Knee Injury",
                "since": "2026-10-10"
            },
            {
                "player": "A. Tchouameni",
                "photo": "https://media.api-sports.io/football/players/1271.png",
                "reason": "Muscle Injury",
                "since": "2026-09-04"
            },
            {
                "player": "D. Huijsen",
                "photo": "https://media.api-sports.io/football/players/361497.png",
                "reason": "Red Card",
                "since": "2026-10-10"
            },
            {
                "player": "F. Valverde",
                "photo": "https://media.api-sports.io/football/players/756.png",
                "reason": "Ankle Injury",
                "since": "2026-10-10"
            }
        ],
        "valencia": [
            {
                "player": "S. Canos",
                "photo": "https://media.api-sports.io/football/players/19352.png",
                "reason": "Knee Injury",
                "since": "2026-10-11"
            },
            {
                "player": "J. Copete",
                "photo": "https://media.api-sports.io/football/players/181582.png",
                "reason": "Ankle Injury",
                "since": "2026-10-11"
            },
            {
                "player": "D. Foulquier",
                "photo": "https://media.api-sports.io/football/players/47251.png",
                "reason": "Injury",
                "since": "2026-10-11"
            },
            {
                "player": "D. Lopez",
                "photo": "https://media.api-sports.io/football/players/162127.png",
                "reason": "Knee Injury",
                "since": "2026-10-11"
            },
            {
                "player": "A. Mari",
                "photo": "https://media.api-sports.io/football/players/288074.png",
                "reason": "Leg Injury",
                "since": "2026-08-25"
            },
            {
                "player": "L. Rioja",
                "photo": "https://media.api-sports.io/football/players/46933.png",
                "reason": "Injury",
                "since": "2026-09-11"
            },
            {
                "player": "J. De Haas",
                "photo": "https://media.api-sports.io/football/players/36884.png",
                "reason": "Ankle Injury",
                "since": "2026-09-06"
            },
            {
                "player": "P. Maffeo",
                "photo": "https://media.api-sports.io/football/players/26302.png",
                "reason": "Muscle Injury",
                "since": "2026-08-30"
            },
            {
                "player": "G. Rodriguez",
                "photo": "https://media.api-sports.io/football/players/2476.png",
                "reason": "Muscle Injury",
                "since": "2026-09-11"
            },
            {
                "player": "U. Sadiq",
                "photo": "https://media.api-sports.io/football/players/31406.png",
                "reason": "Muscle Injury",
                "since": "2026-10-11"
            },
            {
                "player": "M. Diakhaby",
                "photo": "https://media.api-sports.io/football/players/916.png",
                "reason": "Muscle Injury",
                "since": "2026-10-11"
            },
            {
                "player": "C. Tarrega",
                "photo": "https://media.api-sports.io/football/players/333672.png",
                "reason": "Hamstring Injury",
                "since": "2026-10-11"
            },
            {
                "player": "A. Danjuma",
                "photo": "https://media.api-sports.io/football/players/83.png",
                "reason": "Injury",
                "since": "2026-10-11"
            }
        ],
        "celta-vigo": [
            {
                "player": "C. Perez",
                "photo": "https://media.api-sports.io/football/players/67955.png",
                "reason": "Inactive",
                "since": "2026-08-22"
            },
            {
                "player": "M. Vecino",
                "photo": "https://media.api-sports.io/football/players/211.png",
                "reason": "Knee Injury",
                "since": "2026-08-22"
            },
            {
                "player": "B. Iglesias",
                "photo": "https://media.api-sports.io/football/players/47348.png",
                "reason": "Injury",
                "since": "2026-09-13"
            },
            {
                "player": "A. Febas",
                "photo": "https://media.api-sports.io/football/players/46711.png",
                "reason": "Ribs Injury",
                "since": "2026-09-13"
            },
            {
                "player": "M. Alonso",
                "photo": "https://media.api-sports.io/football/players/2278.png",
                "reason": "Red Card",
                "since": "2026-08-30"
            },
            {
                "player": "A. Antanon",
                "photo": "https://media.api-sports.io/football/players/481678.png",
                "reason": "Ankle Injury",
                "since": "2026-10-11"
            },
            {
                "player": "J. El Abdellaoui",
                "photo": "https://media.api-sports.io/football/players/351913.png",
                "reason": "Knee Injury",
                "since": "2026-10-11"
            },
            {
                "player": "I. Aspas",
                "photo": "https://media.api-sports.io/football/players/47445.png",
                "reason": "Muscle Injury",
                "since": "2026-09-19"
            },
            {
                "player": "M. Roman",
                "photo": "https://media.api-sports.io/football/players/333502.png",
                "reason": "Knee Injury",
                "since": "2026-10-11"
            },
            {
                "player": "C. Starfelt",
                "photo": "https://media.api-sports.io/football/players/47988.png",
                "reason": "Injury",
                "since": "2026-10-11"
            },
            {
                "player": "S. Caceres",
                "photo": "https://media.api-sports.io/football/players/51535.png",
                "reason": "Injury",
                "since": "2026-10-11"
            }
        ],
        "villarreal": [
            {
                "player": "A. Diatta",
                "photo": "https://media.api-sports.io/football/players/463280.png",
                "reason": "Red Card",
                "since": "2026-08-23"
            },
            {
                "player": "W. Kambwala",
                "photo": "https://media.api-sports.io/football/players/288112.png",
                "reason": "Transfer negotiations",
                "since": "2026-08-23"
            },
            {
                "player": "J. Foyth",
                "photo": "https://media.api-sports.io/football/players/166.png",
                "reason": "Achilles Tendon Injury",
                "since": "2026-09-17"
            },
            {
                "player": "S. Comesana",
                "photo": "https://media.api-sports.io/football/players/47541.png",
                "reason": "Injury",
                "since": "2026-09-20"
            },
            {
                "player": "T. Buchanan",
                "photo": "https://media.api-sports.io/football/players/51016.png",
                "reason": "Muscle Injury",
                "since": "2026-10-10"
            }
        ],
        "osasuna": [
            {
                "player": "V. Rosier",
                "photo": "https://media.api-sports.io/football/players/21701.png",
                "reason": "Hamstring Injury",
                "since": "2026-10-11"
            },
            {
                "player": "J. Herrando",
                "photo": "https://media.api-sports.io/football/players/182592.png",
                "reason": "Muscle Injury",
                "since": "2026-10-11"
            },
            {
                "player": "A. Oroz",
                "photo": "https://media.api-sports.io/football/players/67939.png",
                "reason": "Muscle Injury",
                "since": "2026-09-19"
            },
            {
                "player": "M. Gomez",
                "photo": "https://media.api-sports.io/football/players/47574.png",
                "reason": "Hamstring Injury",
                "since": "2026-09-19"
            },
            {
                "player": "R. Moro",
                "photo": "https://media.api-sports.io/football/players/264470.png",
                "reason": "Muscle Injury",
                "since": "2026-10-11"
            }
        ],
        "barcelona": [
            {
                "player": "A. Balde",
                "photo": "https://media.api-sports.io/football/players/161928.png",
                "reason": "Coach's decision",
                "since": "2026-08-23"
            },
            {
                "player": "R. Bardghji",
                "photo": "https://media.api-sports.io/football/players/338958.png",
                "reason": "Knee Injury",
                "since": "2026-10-10"
            },
            {
                "player": "J. Bisiwu",
                "photo": "https://media.api-sports.io/football/players/426446.png",
                "reason": "Ankle Injury",
                "since": "2026-09-06"
            },
            {
                "player": "Rodri",
                "photo": "https://media.api-sports.io/football/players/44.png",
                "reason": "Lacking Match Fitness",
                "since": "2026-08-23"
            },
            {
                "player": "F. de Jong",
                "photo": "https://media.api-sports.io/football/players/538.png",
                "reason": "Knee Injury",
                "since": "2026-10-10"
            },
            {
                "player": "Gavi",
                "photo": "https://media.api-sports.io/football/players/296667.png",
                "reason": "Knee Injury",
                "since": "2026-08-31"
            },
            {
                "player": "D. Livakovic",
                "photo": "https://media.api-sports.io/football/players/1305.png",
                "reason": "Inactive",
                "since": "2026-08-31"
            },
            {
                "player": "J. Garcia",
                "photo": "https://media.api-sports.io/football/players/182718.png",
                "reason": "Knee Injury",
                "since": "2026-10-10"
            },
            {
                "player": "A. Christensen",
                "photo": "https://media.api-sports.io/football/players/2282.png",
                "reason": "Muscle Injury",
                "since": "2026-10-10"
            },
            {
                "player": "Raphinha",
                "photo": "https://media.api-sports.io/football/players/1496.png",
                "reason": "Muscle Injury",
                "since": "2026-10-10"
            }
        ],
        "udinese": [
            {
                "player": "A. Buksa",
                "photo": "https://media.api-sports.io/football/players/40594.png",
                "reason": "Inactive",
                "since": "2026-08-22"
            },
            {
                "player": "G. Chakvetadze",
                "photo": "https://media.api-sports.io/football/players/8481.png",
                "reason": "Foot Injury",
                "since": "2026-08-29"
            },
            {
                "player": "C. Kabasele",
                "photo": "https://media.api-sports.io/football/players/18797.png",
                "reason": "Red Card",
                "since": "2026-08-29"
            },
            {
                "player": "A. Zanoli",
                "photo": "https://media.api-sports.io/football/players/162907.png",
                "reason": "Knee Injury",
                "since": "2026-09-14"
            },
            {
                "player": "N. Zaniolo",
                "photo": "https://media.api-sports.io/football/players/786.png",
                "reason": "Thigh Injury",
                "since": "2026-09-14"
            },
            {
                "player": "J. Piotrowski",
                "photo": "https://media.api-sports.io/football/players/1939.png",
                "reason": "Heart Problems",
                "since": "2026-09-19"
            },
            {
                "player": "J. Arizala",
                "photo": "https://media.api-sports.io/football/players/411171.png",
                "reason": "Thigh Problems",
                "since": "2026-10-12"
            },
            {
                "player": "M. Palma",
                "photo": "https://media.api-sports.io/football/players/422156.png",
                "reason": "Muscle Bruise",
                "since": "2026-10-12"
            },
            {
                "player": "O. Solet",
                "photo": "https://media.api-sports.io/football/players/656.png",
                "reason": "Injury",
                "since": "2026-09-19"
            }
        ],
        "como": [
            {
                "player": "J. Addai",
                "photo": "https://media.api-sports.io/football/players/354533.png",
                "reason": "Achilles Tendon Injury",
                "since": "2026-09-14"
            },
            {
                "player": "M. Kean",
                "photo": "https://media.api-sports.io/football/players/877.png",
                "reason": "Health problems",
                "since": "2026-10-11"
            },
            {
                "player": "I. Smolcic",
                "photo": "https://media.api-sports.io/football/players/14266.png",
                "reason": "Illness",
                "since": "2026-10-11"
            }
        ],
        "inter": [
            {
                "player": "H. Mkhitaryan",
                "photo": "https://media.api-sports.io/football/players/1457.png",
                "reason": "Suspended",
                "since": "2026-08-22"
            },
            {
                "player": "M. Spinacce",
                "photo": "https://media.api-sports.io/football/players/436238.png",
                "reason": "Inactive",
                "since": "2026-09-05"
            },
            {
                "player": "D. Spence",
                "photo": "https://media.api-sports.io/football/players/19235.png",
                "reason": "Injury",
                "since": "2026-09-19"
            },
            {
                "player": "H. Calhanoglu",
                "photo": "https://media.api-sports.io/football/players/1640.png",
                "reason": "Muscle Injury",
                "since": "2026-09-19"
            },
            {
                "player": "J. Stones",
                "photo": "https://media.api-sports.io/football/players/626.png",
                "reason": "Injury",
                "since": "2026-10-10"
            },
            {
                "player": "C. Jones",
                "photo": "https://media.api-sports.io/football/players/293.png",
                "reason": "Thigh Injury",
                "since": "2026-10-10"
            }
        ],
        "monza": [
            {
                "player": "E. Akinsanmiro",
                "photo": "https://media.api-sports.io/football/players/408635.png",
                "reason": "Muscle Injury",
                "since": "2026-08-22"
            },
            {
                "player": "L. Colombo",
                "photo": "https://media.api-sports.io/football/players/394438.png",
                "reason": "Injury",
                "since": "2026-08-22"
            },
            {
                "player": "D. Mota",
                "photo": "https://media.api-sports.io/football/players/30603.png",
                "reason": "Suspended",
                "since": "2026-08-22"
            },
            {
                "player": "D. Thiam",
                "photo": "https://media.api-sports.io/football/players/31191.png",
                "reason": "Yellow Cards",
                "since": "2026-08-22"
            },
            {
                "player": "I. Toure",
                "photo": "https://media.api-sports.io/football/players/56293.png",
                "reason": "Contusion",
                "since": "2026-10-11"
            },
            {
                "player": "G. Varela",
                "photo": "https://media.api-sports.io/football/players/340547.png",
                "reason": "Thigh Injury",
                "since": "2026-09-06"
            },
            {
                "player": "P. Ciurria",
                "photo": "https://media.api-sports.io/football/players/31532.png",
                "reason": "Muscle Injury",
                "since": "2026-09-18"
            },
            {
                "player": "J. Ziolkowski",
                "photo": "https://media.api-sports.io/football/players/384543.png",
                "reason": "Foot Injury",
                "since": "2026-10-11"
            },
            {
                "player": "M. Pessina",
                "photo": "https://media.api-sports.io/football/players/30436.png",
                "reason": "Knee Injury",
                "since": "2026-10-11"
            },
            {
                "player": "C. Ngonge",
                "photo": "https://media.api-sports.io/football/players/85.png",
                "reason": "Lacking Match Fitness",
                "since": "2026-09-13"
            }
        ],
        "venezia": [
            {
                "player": "A. Duncan",
                "photo": "https://media.api-sports.io/football/players/30532.png",
                "reason": "Injury",
                "since": "2026-08-23"
            },
            {
                "player": "M. Moreno",
                "photo": "https://media.api-sports.io/football/players/421807.png",
                "reason": "Health problems",
                "since": "2026-08-28"
            },
            {
                "player": "M. Dagasso",
                "photo": "https://media.api-sports.io/football/players/342025.png",
                "reason": "Inactive",
                "since": "2026-09-19"
            },
            {
                "player": "R. Haps",
                "photo": "https://media.api-sports.io/football/players/37144.png",
                "reason": "Injury",
                "since": "2026-09-19"
            },
            {
                "player": "B. Franjić",
                "photo": "https://media.api-sports.io/football/players/14704.png",
                "reason": "Wound",
                "since": "2026-10-12"
            },
            {
                "player": "A. Adorante",
                "photo": "https://media.api-sports.io/football/players/212.png",
                "reason": "Inguinal Hernia",
                "since": "2026-10-17"
            },
            {
                "player": "T. Bašić",
                "photo": "https://media.api-sports.io/football/players/1266.png",
                "reason": "Foot Injury",
                "since": "2026-10-12"
            },
            {
                "player": "A. Bella-Kotchap",
                "photo": "https://media.api-sports.io/football/players/25061.png",
                "reason": "Thigh Injury",
                "since": "2026-09-19"
            },
            {
                "player": "G. Busio",
                "photo": "https://media.api-sports.io/football/players/51266.png",
                "reason": "Thigh Injury",
                "since": "2026-09-19"
            },
            {
                "player": "M. Šverko",
                "photo": "https://media.api-sports.io/football/players/26095.png",
                "reason": "Hip Injury",
                "since": "2026-12-13"
            }
        ],
        "lecce": [
            {
                "player": "L. Banda",
                "photo": "https://media.api-sports.io/football/players/118956.png",
                "reason": "Inactive",
                "since": "2026-08-23"
            },
            {
                "player": "M. Berisha",
                "photo": "https://media.api-sports.io/football/players/335071.png",
                "reason": "Lacking Match Fitness",
                "since": "2026-10-11"
            },
            {
                "player": "W. Geubbels",
                "photo": "https://media.api-sports.io/football/players/120.png",
                "reason": "Ankle Injury",
                "since": "2026-09-20"
            },
            {
                "player": "O. Gandelman",
                "photo": "https://media.api-sports.io/football/players/126974.png",
                "reason": "Inactive",
                "since": "2026-09-20"
            },
            {
                "player": "Tiago Gabriel",
                "photo": "https://media.api-sports.io/football/players/455316.png",
                "reason": "Injury",
                "since": "2026-09-20"
            }
        ],
        "genoa": [
            {
                "player": "E. Havel",
                "photo": "https://media.api-sports.io/football/players/162561.png",
                "reason": "Ankle Injury",
                "since": "2026-10-10"
            },
            {
                "player": "H. J. Traore",
                "photo": "https://media.api-sports.io/football/players/31057.png",
                "reason": "Muscle Injury",
                "since": "2026-08-22"
            },
            {
                "player": "C. Drameh",
                "photo": "https://media.api-sports.io/football/players/153411.png",
                "reason": "Inactive",
                "since": "2026-09-04"
            },
            {
                "player": "L. Venturino",
                "photo": "https://media.api-sports.io/football/players/452033.png",
                "reason": "Jumpers Knee",
                "since": "2026-11-29"
            },
            {
                "player": "J. Vasquez",
                "photo": "https://media.api-sports.io/football/players/35544.png",
                "reason": "Red Card",
                "since": "2026-09-20"
            },
            {
                "player": "L. Colombo",
                "photo": "https://media.api-sports.io/football/players/263481.png",
                "reason": "Ankle Injury",
                "since": "2026-10-10"
            },
            {
                "player": "F. Meichtry",
                "photo": "https://media.api-sports.io/football/players/475672.png",
                "reason": "Muscle Injury",
                "since": "2026-10-10"
            },
            {
                "player": "D. Sow",
                "photo": "https://media.api-sports.io/football/players/957.png",
                "reason": "Injury",
                "since": "2026-10-10"
            }
        ],
        "napoli": [
            {
                "player": "M. Folorunsho",
                "photo": "https://media.api-sports.io/football/players/56851.png",
                "reason": "Inactive",
                "since": "2026-08-22"
            },
            {
                "player": "P. Mazzocchi",
                "photo": "https://media.api-sports.io/football/players/31390.png",
                "reason": "Knee Injury",
                "since": "2026-08-30"
            },
            {
                "player": "S. McTominay",
                "photo": "https://media.api-sports.io/football/players/903.png",
                "reason": "Heart Problems",
                "since": "2026-09-20"
            },
            {
                "player": "Giovane",
                "photo": "https://media.api-sports.io/football/players/312615.png",
                "reason": "Groin Injury",
                "since": "2026-10-10"
            },
            {
                "player": "L. Marianucci",
                "photo": "https://media.api-sports.io/football/players/388547.png",
                "reason": "Knee Injury",
                "since": "2026-10-10"
            },
            {
                "player": "A. Buongiorno",
                "photo": "https://media.api-sports.io/football/players/31226.png",
                "reason": "Jumpers Knee",
                "since": "2026-11-21"
            },
            {
                "player": "Alisson Santos",
                "photo": "https://media.api-sports.io/football/players/310943.png",
                "reason": "Muscle Injury",
                "since": "2026-10-10"
            },
            {
                "player": "A. Meret",
                "photo": "https://media.api-sports.io/football/players/312.png",
                "reason": "Muscle Injury",
                "since": "2026-10-10"
            },
            {
                "player": "L. Spinazzola",
                "photo": "https://media.api-sports.io/football/players/862.png",
                "reason": "Muscle Injury",
                "since": "2026-09-20"
            },
            {
                "player": "F. Anguissa",
                "photo": "https://media.api-sports.io/football/players/3406.png",
                "reason": "Groin Injury",
                "since": "2026-10-10"
            },
            {
                "player": "C. Favasuli",
                "photo": "https://media.api-sports.io/football/players/348532.png",
                "reason": "Thigh Injury",
                "since": "2026-10-10"
            },
            {
                "player": "A. Vergara",
                "photo": "https://media.api-sports.io/football/players/347395.png",
                "reason": "Calf Injury",
                "since": "2026-10-10"
            },
            {
                "player": "M. Olivera",
                "photo": "https://media.api-sports.io/football/players/47254.png",
                "reason": "Groin Injury",
                "since": "2026-10-10"
            }
        ],
        "parma": [
            {
                "player": "S. Britschgi",
                "photo": "https://media.api-sports.io/football/players/499380.png",
                "reason": "Yellow Cards",
                "since": "2026-08-22"
            },
            {
                "player": "A. Joujou",
                "photo": "https://media.api-sports.io/football/players/289304.png",
                "reason": "Inactive",
                "since": "2026-08-22"
            },
            {
                "player": "A. Bernabe",
                "photo": "https://media.api-sports.io/football/players/628.png",
                "reason": "Thigh Injury",
                "since": "2026-10-10"
            },
            {
                "player": "O. Diallo",
                "photo": "https://media.api-sports.io/football/players/432610.png",
                "reason": "Injury",
                "since": "2026-09-06"
            },
            {
                "player": "L. Valenti",
                "photo": "https://media.api-sports.io/football/players/6221.png",
                "reason": "Coach's decision",
                "since": "2026-09-20"
            },
            {
                "player": "H. Nicolussi Caviglia",
                "photo": "https://media.api-sports.io/football/players/881.png",
                "reason": "Groin Injury",
                "since": "2026-10-10"
            },
            {
                "player": "P. Almqvist",
                "photo": "https://media.api-sports.io/football/players/48193.png",
                "reason": "Calf Injury",
                "since": "2026-10-10"
            },
            {
                "player": "D. Drobnic",
                "photo": "https://media.api-sports.io/football/players/576948.png",
                "reason": "Arm Injury",
                "since": "2026-10-10"
            },
            {
                "player": "M. Frigan",
                "photo": "https://media.api-sports.io/football/players/292543.png",
                "reason": "Injury",
                "since": "2026-10-10"
            }
        ],
        "cagliari": [
            {
                "player": "A. Albarracin",
                "photo": "https://media.api-sports.io/football/players/404523.png",
                "reason": "Inactive",
                "since": "2026-08-22"
            },
            {
                "player": "S. Esposito",
                "photo": "https://media.api-sports.io/football/players/215.png",
                "reason": "Injury",
                "since": "2026-08-22"
            },
            {
                "player": "Kevin",
                "photo": "https://media.api-sports.io/football/players/188319.png",
                "reason": "Muscle Injury",
                "since": "2026-10-11"
            },
            {
                "player": "Y. Mina",
                "photo": "https://media.api-sports.io/football/players/2484.png",
                "reason": "Calf Injury",
                "since": "2026-09-07"
            },
            {
                "player": "Y. Sugawara",
                "photo": "https://media.api-sports.io/football/players/32887.png",
                "reason": "Inactive",
                "since": "2026-09-07"
            },
            {
                "player": "M. Nzola",
                "photo": "https://media.api-sports.io/football/players/31318.png",
                "reason": "Lacking Match Fitness",
                "since": "2026-09-19"
            },
            {
                "player": "Y. Trepy",
                "photo": "https://media.api-sports.io/football/players/584116.png",
                "reason": "Injury",
                "since": "2026-10-11"
            },
            {
                "player": "Riyad Idrissi",
                "photo": "https://media.api-sports.io/football/players/383026.png",
                "reason": "Jumpers Knee",
                "since": "2027-01-24"
            },
            {
                "player": "M. Felici",
                "photo": "https://media.api-sports.io/football/players/31734.png",
                "reason": "Knee Injury",
                "since": "2026-10-11"
            },
            {
                "player": "A. Deiola",
                "photo": "https://media.api-sports.io/football/players/30561.png",
                "reason": "Knee Injury",
                "since": "2026-10-11"
            }
        ],
        "torino": [
            {
                "player": "F. Anjorin",
                "photo": "https://media.api-sports.io/football/players/138777.png",
                "reason": "Hip Injury",
                "since": "2026-08-23"
            },
            {
                "player": "E. Comert",
                "photo": "https://media.api-sports.io/football/players/48372.png",
                "reason": "Red Card",
                "since": "2026-08-23"
            },
            {
                "player": "C. Biraghi",
                "photo": "https://media.api-sports.io/football/players/30396.png",
                "reason": "Illness",
                "since": "2026-08-29"
            },
            {
                "player": "F. Israel",
                "photo": "https://media.api-sports.io/football/players/56266.png",
                "reason": "Shoulder Injury",
                "since": "2026-11-01"
            },
            {
                "player": "C. Casadei",
                "photo": "https://media.api-sports.io/football/players/270507.png",
                "reason": "Rest",
                "since": "2026-10-12"
            },
            {
                "player": "P. Pellegri",
                "photo": "https://media.api-sports.io/football/players/123.png",
                "reason": "Jumpers Knee",
                "since": "2027-05-16"
            },
            {
                "player": "C. Adams",
                "photo": "https://media.api-sports.io/football/players/19524.png",
                "reason": "Muscle Injury",
                "since": "2026-09-19"
            }
        ],
        "ac-milan": [
            {
                "player": "Y. Fofana",
                "photo": "https://media.api-sports.io/football/players/22254.png",
                "reason": "Transfer negotiations",
                "since": "2026-08-28"
            },
            {
                "player": "S. Gimenez",
                "photo": "https://media.api-sports.io/football/players/94562.png",
                "reason": "Transfer negotiations",
                "since": "2026-08-28"
            },
            {
                "player": "R. Leao",
                "photo": "https://media.api-sports.io/football/players/22236.png",
                "reason": "Muscle Injury",
                "since": "2026-08-28"
            },
            {
                "player": "C. Nkunku",
                "photo": "https://media.api-sports.io/football/players/269.png",
                "reason": "Inactive",
                "since": "2026-08-23"
            },
            {
                "player": "F. Tomori",
                "photo": "https://media.api-sports.io/football/players/19209.png",
                "reason": "Transfer negotiations",
                "since": "2026-08-28"
            },
            {
                "player": "M. Gabbia",
                "photo": "https://media.api-sports.io/football/players/56473.png",
                "reason": "Ankle Injury",
                "since": "2026-09-06"
            },
            {
                "player": "A. Saelemaekers",
                "photo": "https://media.api-sports.io/football/players/1417.png",
                "reason": "Ankle Injury",
                "since": "2026-10-11"
            },
            {
                "player": "P. Estupinan",
                "photo": "https://media.api-sports.io/football/players/46731.png",
                "reason": "Knee Injury",
                "since": "2026-10-11"
            }
        ],
        "atalanta": [
            {
                "player": "H. Ahanor",
                "photo": "https://media.api-sports.io/football/players/453906.png",
                "reason": "Muscle Injury",
                "since": "2026-08-31"
            },
            {
                "player": "T. Kristensen",
                "photo": "https://media.api-sports.io/football/players/281495.png",
                "reason": "Ankle Injury",
                "since": "2026-08-31"
            },
            {
                "player": "K. Sulemana",
                "photo": "https://media.api-sports.io/football/players/199837.png",
                "reason": "Jumpers Knee",
                "since": "2026-10-25"
            },
            {
                "player": "I. Hien",
                "photo": "https://media.api-sports.io/football/players/137976.png",
                "reason": "Muscle Bruise",
                "since": "2026-11-08"
            },
            {
                "player": "O. Kossounou",
                "photo": "https://media.api-sports.io/football/players/48119.png",
                "reason": "Thigh Injury",
                "since": "2026-09-20"
            },
            {
                "player": "G. Gaetano",
                "photo": "https://media.api-sports.io/football/players/325.png",
                "reason": "Red Card",
                "since": "2026-09-12"
            }
        ],
        "sassuolo": [
            {
                "player": "D. Berardi",
                "photo": "https://media.api-sports.io/football/players/30537.png",
                "reason": "Ankle Injury",
                "since": "2026-08-23"
            },
            {
                "player": "A. Pinamonti",
                "photo": "https://media.api-sports.io/football/players/31094.png",
                "reason": "Injury",
                "since": "2026-08-23"
            },
            {
                "player": "I. Koné",
                "photo": "https://media.api-sports.io/football/players/328046.png",
                "reason": "Broken Leg",
                "since": "2026-11-29"
            },
            {
                "player": "C. Volpato",
                "photo": "https://media.api-sports.io/football/players/342035.png",
                "reason": "Thigh Injury",
                "since": "2026-10-11"
            },
            {
                "player": "E. Pieragnolo",
                "photo": "https://media.api-sports.io/football/players/342055.png",
                "reason": "Jumpers Knee",
                "since": "2027-05-30"
            },
            {
                "player": "S. Walukiewicz",
                "photo": "https://media.api-sports.io/football/players/40582.png",
                "reason": "Muscle Injury",
                "since": "2026-10-11"
            },
            {
                "player": "Fali Candé",
                "photo": "https://media.api-sports.io/football/players/41371.png",
                "reason": "Jumpers Knee",
                "since": "2027-04-18"
            },
            {
                "player": "D. Boloca",
                "photo": "https://media.api-sports.io/football/players/291780.png",
                "reason": "Muscle Bruise",
                "since": "2027-03-14"
            },
            {
                "player": "Y. Paz",
                "photo": "https://media.api-sports.io/football/players/59513.png",
                "reason": "Jumpers Knee",
                "since": "2027-03-14"
            },
            {
                "player": "J. Idzes",
                "photo": "https://media.api-sports.io/football/players/37651.png",
                "reason": "Muscle Injury",
                "since": "2026-10-11"
            }
        ],
        "bologna": [
            {
                "player": "N. Casale",
                "photo": "https://media.api-sports.io/football/players/31099.png",
                "reason": "Muscle Injury",
                "since": "2026-08-24"
            },
            {
                "player": "O. El Azzouzi",
                "photo": "https://media.api-sports.io/football/players/319919.png",
                "reason": "Thigh Injury",
                "since": "2026-09-13"
            },
            {
                "player": "J. Rowe",
                "photo": "https://media.api-sports.io/football/players/278095.png",
                "reason": "Inactive",
                "since": "2026-08-31"
            },
            {
                "player": "R. Orsolini",
                "photo": "https://media.api-sports.io/football/players/30488.png",
                "reason": "Injury",
                "since": "2026-09-13"
            },
            {
                "player": "A. Dovbyk",
                "photo": "https://media.api-sports.io/football/players/15811.png",
                "reason": "Muscle Injury",
                "since": "2026-10-11"
            },
            {
                "player": "N. Zortea",
                "photo": "https://media.api-sports.io/football/players/128461.png",
                "reason": "Hip Injury",
                "since": "2026-09-13"
            },
            {
                "player": "E. Holm",
                "photo": "https://media.api-sports.io/football/players/47985.png",
                "reason": "Thigh Injury",
                "since": "2026-10-11"
            },
            {
                "player": "J. Odgaard",
                "photo": "https://media.api-sports.io/football/players/30542.png",
                "reason": "Thigh Injury",
                "since": "2026-10-11"
            }
        ],
        "lazio": [
            {
                "player": "D. Cataldi",
                "photo": "https://media.api-sports.io/football/players/1852.png",
                "reason": "Groin Injury",
                "since": "2026-10-11"
            },
            {
                "player": "S. Gigot",
                "photo": "https://media.api-sports.io/football/players/1775.png",
                "reason": "Inactive",
                "since": "2026-08-30"
            },
            {
                "player": "N. Rovella",
                "photo": "https://media.api-sports.io/football/players/30784.png",
                "reason": "Calf Injury",
                "since": "2026-10-11"
            },
            {
                "player": "L. Pellegrini",
                "photo": "https://media.api-sports.io/football/players/30554.png",
                "reason": "Inactive",
                "since": "2026-10-11"
            },
            {
                "player": "A. Marusic",
                "photo": "https://media.api-sports.io/football/players/1844.png",
                "reason": "Muscle Injury",
                "since": "2026-10-11"
            },
            {
                "player": "Patric",
                "photo": "https://media.api-sports.io/football/players/1841.png",
                "reason": "Sprained Ankle",
                "since": "2026-11-21"
            },
            {
                "player": "A. Furlanetto",
                "photo": "https://media.api-sports.io/football/players/63934.png",
                "reason": "Jumpers Knee",
                "since": "2026-11-01"
            },
            {
                "player": "F. Dele-Bashiru",
                "photo": "https://media.api-sports.io/football/players/144740.png",
                "reason": "Muscle Injury",
                "since": "2026-09-19"
            },
            {
                "player": "A. Gudmundsson",
                "photo": "https://media.api-sports.io/football/players/2799.png",
                "reason": "Shoulder Injury",
                "since": "2026-10-11"
            },
            {
                "player": "D. Doekhi",
                "photo": "https://media.api-sports.io/football/players/37117.png",
                "reason": "Hand Injury",
                "since": "2026-09-12"
            }
        ],
        "as-roma": [
            {
                "player": "L. Pellegrini",
                "photo": "https://media.api-sports.io/football/players/782.png",
                "reason": "Thigh Injury",
                "since": "2026-09-05"
            },
            {
                "player": "D. Rensch",
                "photo": "https://media.api-sports.io/football/players/162452.png",
                "reason": "Muscle Injury",
                "since": "2026-08-31"
            },
            {
                "player": "M. Bah",
                "photo": "https://media.api-sports.io/football/players/626686.png",
                "reason": "Jumpers Knee",
                "since": "2026-10-27"
            },
            {
                "player": "E. Ndicka",
                "photo": "https://media.api-sports.io/football/players/1807.png",
                "reason": "Illness",
                "since": "2026-09-14"
            },
            {
                "player": "B. Cristante",
                "photo": "https://media.api-sports.io/football/players/778.png",
                "reason": "Injury",
                "since": "2026-10-11"
            }
        ],
        "frosinone": [
            {
                "player": "F. Ghedjemis",
                "photo": "https://media.api-sports.io/football/players/334915.png",
                "reason": "Calf Injury",
                "since": "2026-08-29"
            },
            {
                "player": "F. Grillitsch",
                "photo": "https://media.api-sports.io/football/players/719.png",
                "reason": "Thigh Injury",
                "since": "2026-10-10"
            },
            {
                "player": "D. Birligea",
                "photo": "https://media.api-sports.io/football/players/126892.png",
                "reason": "Muscle Injury",
                "since": "2026-10-10"
            },
            {
                "player": "A. Raimondo",
                "photo": "https://media.api-sports.io/football/players/314254.png",
                "reason": "Health problems",
                "since": "2026-10-10"
            }
        ],
        "fiorentina": [
            {
                "player": "R. Sottil",
                "photo": "https://media.api-sports.io/football/players/31507.png",
                "reason": "Back Injury",
                "since": "2027-03-07"
            },
            {
                "player": "F. Parisi",
                "photo": "https://media.api-sports.io/football/players/136087.png",
                "reason": "Knee Injury",
                "since": "2026-10-10"
            }
        ],
        "1-fc-koln": [
            {
                "player": "T. Hubers",
                "photo": "https://media.api-sports.io/football/players/90641.png",
                "reason": "Knee Injury",
                "since": "2026-10-11"
            },
            {
                "player": "S. Sebulonsen",
                "photo": "https://media.api-sports.io/football/players/191740.png",
                "reason": "Muscle Injury",
                "since": "2026-09-04"
            },
            {
                "player": "L. Waldschmidt",
                "photo": "https://media.api-sports.io/football/players/26260.png",
                "reason": "Muscle Injury",
                "since": "2026-09-04"
            },
            {
                "player": "T. Dallinga",
                "photo": "https://media.api-sports.io/football/players/93016.png",
                "reason": "Knee Injury",
                "since": "2026-10-11"
            },
            {
                "player": "S. El Mala",
                "photo": "https://media.api-sports.io/football/players/432310.png",
                "reason": "Illness",
                "since": "2026-09-04"
            },
            {
                "player": "P. Okon-Engstler",
                "photo": "https://media.api-sports.io/football/players/441269.png",
                "reason": "Injury",
                "since": "2026-09-19"
            },
            {
                "player": "A. Castro-Montes",
                "photo": "https://media.api-sports.io/football/players/8641.png",
                "reason": "Muscle Injury",
                "since": "2026-10-11"
            }
        ],
        "1899-hoffenheim": [
            {
                "player": "F. Asllani",
                "photo": "https://media.api-sports.io/football/players/202501.png",
                "reason": "Injury",
                "since": "2026-09-05"
            },
            {
                "player": "T. Lemperle",
                "photo": "https://media.api-sports.io/football/players/203040.png",
                "reason": "Red Card",
                "since": "2026-08-29"
            },
            {
                "player": "A. Prass",
                "photo": "https://media.api-sports.io/football/players/7327.png",
                "reason": "Muscle Injury",
                "since": "2026-09-12"
            },
            {
                "player": "Bernardo",
                "photo": "https://media.api-sports.io/football/players/18964.png",
                "reason": "Achilles Tendon Injury",
                "since": "2026-10-10"
            },
            {
                "player": "A. Hajdari",
                "photo": "https://media.api-sports.io/football/players/278453.png",
                "reason": "Muscle Injury",
                "since": "2026-10-10"
            }
        ],
        "fsv-mainz-05": [
            {
                "player": "B. Hollerbach",
                "photo": "https://media.api-sports.io/football/players/162946.png",
                "reason": "Lacking Match Fitness",
                "since": "2026-08-29"
            },
            {
                "player": "E. Martel",
                "photo": "https://media.api-sports.io/football/players/162480.png",
                "reason": "Knee Injury",
                "since": "2026-09-12"
            },
            {
                "player": "P. Nebel",
                "photo": "https://media.api-sports.io/football/players/202736.png",
                "reason": "Muscle Injury",
                "since": "2026-10-10"
            },
            {
                "player": "Silas",
                "photo": "https://media.api-sports.io/football/players/20617.png",
                "reason": "Broken shinbone",
                "since": "2026-10-10"
            },
            {
                "player": "D. Kohr",
                "photo": "https://media.api-sports.io/football/players/979.png",
                "reason": "Foot Injury",
                "since": "2026-10-10"
            },
            {
                "player": "S. Widmer",
                "photo": "https://media.api-sports.io/football/players/48378.png",
                "reason": "Knee Injury",
                "since": "2026-10-10"
            },
            {
                "player": "R. Zentner",
                "photo": "https://media.api-sports.io/football/players/25906.png",
                "reason": "Hand Injury",
                "since": "2026-10-10"
            },
            {
                "player": "O. Ruoppi",
                "photo": "https://media.api-sports.io/football/players/318083.png",
                "reason": "Knee Injury",
                "since": "2026-10-10"
            }
        ],
        "sc-paderborn-07": [
            {
                "player": "N. Awortwie-Grant",
                "photo": "https://media.api-sports.io/football/players/373443.png",
                "reason": "Knee Injury",
                "since": "2026-10-10"
            },
            {
                "player": "L. Eickel",
                "photo": "https://media.api-sports.io/football/players/606733.png",
                "reason": "Back Injury",
                "since": "2026-10-10"
            },
            {
                "player": "T. Gayret",
                "photo": "https://media.api-sports.io/football/players/108640.png",
                "reason": "Knee Injury",
                "since": "2026-10-10"
            },
            {
                "player": "S. Michel",
                "photo": "https://media.api-sports.io/football/players/24826.png",
                "reason": "Muscle Injury",
                "since": "2026-09-12"
            },
            {
                "player": "F. Gotze",
                "photo": "https://media.api-sports.io/football/players/25289.png",
                "reason": "Concussion",
                "since": "2026-09-05"
            },
            {
                "player": "S. Klaas",
                "photo": "https://media.api-sports.io/football/players/26333.png",
                "reason": "Muscle Injury",
                "since": "2026-10-10"
            },
            {
                "player": "M. Hoffmeier",
                "photo": "https://media.api-sports.io/football/players/119173.png",
                "reason": "Muscle Injury",
                "since": "2026-10-10"
            }
        ],
        "rb-leipzig": [
            {
                "player": "C. Baumgartner",
                "photo": "https://media.api-sports.io/football/players/715.png",
                "reason": "Thigh Injury",
                "since": "2026-10-10"
            },
            {
                "player": "O. Nyland",
                "photo": "https://media.api-sports.io/football/players/19172.png",
                "reason": "Foot Injury",
                "since": "2026-08-29"
            },
            {
                "player": "A. Ouedraogo",
                "photo": "https://media.api-sports.io/football/players/380978.png",
                "reason": "Shoulder Injury",
                "since": "2026-10-10"
            },
            {
                "player": "Romulo Cardoso",
                "photo": "https://media.api-sports.io/football/players/326102.png",
                "reason": "Knee Injury",
                "since": "2026-09-05"
            },
            {
                "player": "V. Gebel",
                "photo": "https://media.api-sports.io/football/players/469695.png",
                "reason": "Knee Injury",
                "since": "2026-09-05"
            },
            {
                "player": "B. Gruda",
                "photo": "https://media.api-sports.io/football/players/328225.png",
                "reason": "Muscle Injury",
                "since": "2026-10-10"
            },
            {
                "player": "R. Reitz",
                "photo": "https://media.api-sports.io/football/players/203007.png",
                "reason": "Muscle Injury",
                "since": "2026-10-10"
            },
            {
                "player": "M. Guiu",
                "photo": "https://media.api-sports.io/football/players/392270.png",
                "reason": "Hamstring Injury",
                "since": "2026-10-10"
            }
        ],
        "borussia-monchengladbach": [
            {
                "player": "J. Castrop",
                "photo": "https://media.api-sports.io/football/players/280358.png",
                "reason": "Shoulder Injury",
                "since": "2026-10-11"
            },
            {
                "player": "F. C. Chiarodia",
                "photo": "https://media.api-sports.io/football/players/322627.png",
                "reason": "Muscle Injury",
                "since": "2026-08-29"
            },
            {
                "player": "T. Cvancara",
                "photo": "https://media.api-sports.io/football/players/80434.png",
                "reason": "Groin Injury",
                "since": "2026-08-29"
            },
            {
                "player": "Y. Konoplya",
                "photo": "https://media.api-sports.io/football/players/125418.png",
                "reason": "Knee Injury",
                "since": "2026-09-19"
            },
            {
                "player": "Z. Uno",
                "photo": "https://media.api-sports.io/football/players/351084.png",
                "reason": "Lacking Match Fitness",
                "since": "2026-09-19"
            },
            {
                "player": "D. Hashioka",
                "photo": "https://media.api-sports.io/football/players/33095.png",
                "reason": "Neck Injury",
                "since": "2026-09-12"
            },
            {
                "player": "E. Leopold",
                "photo": "https://media.api-sports.io/football/players/178250.png",
                "reason": "Knee Injury",
                "since": "2026-10-11"
            },
            {
                "player": "T. Kleindienst",
                "photo": "https://media.api-sports.io/football/players/26256.png",
                "reason": "Red Card",
                "since": "2026-09-19"
            },
            {
                "player": "N. Kuhn",
                "photo": "https://media.api-sports.io/football/players/38753.png",
                "reason": "Muscle Injury",
                "since": "2026-10-11"
            },
            {
                "player": "F. Honorat",
                "photo": "https://media.api-sports.io/football/players/20784.png",
                "reason": "Muscle Injury",
                "since": "2026-10-11"
            }
        ],
        "union-berlin": [
            {
                "player": "O. Burke",
                "photo": "https://media.api-sports.io/football/players/1124.png",
                "reason": "Achilles Tendon Injury",
                "since": "2026-10-10"
            },
            {
                "player": "M. Friedrich",
                "photo": "https://media.api-sports.io/football/players/24839.png",
                "reason": "Knock",
                "since": "2026-10-10"
            },
            {
                "player": "A. Ilic",
                "photo": "https://media.api-sports.io/football/players/45892.png",
                "reason": "Illness",
                "since": "2026-10-10"
            },
            {
                "player": "A. Markgraf",
                "photo": "https://media.api-sports.io/football/players/413294.png",
                "reason": "Knee Injury",
                "since": "2026-10-10"
            },
            {
                "player": "S. Nsoki",
                "photo": "https://media.api-sports.io/football/players/270.png",
                "reason": "Muscle Injury",
                "since": "2026-10-10"
            },
            {
                "player": "F. Ronnow",
                "photo": "https://media.api-sports.io/football/players/1798.png",
                "reason": "Muscle Injury",
                "since": "2026-08-29"
            },
            {
                "player": "J. Juranovic",
                "photo": "https://media.api-sports.io/football/players/14330.png",
                "reason": "Illness",
                "since": "2026-09-18"
            },
            {
                "player": "K. Imeri",
                "photo": "https://media.api-sports.io/football/players/48612.png",
                "reason": "Thigh Injury",
                "since": "2026-09-11"
            }
        ],
        "eintracht-frankfurt": [
            {
                "player": "N. Collins",
                "photo": "https://media.api-sports.io/football/players/269531.png",
                "reason": "Back Injury",
                "since": "2026-09-06"
            },
            {
                "player": "R. Doan",
                "photo": "https://media.api-sports.io/football/players/2598.png",
                "reason": "Muscle Injury",
                "since": "2026-08-29"
            },
            {
                "player": "A. Knauff",
                "photo": "https://media.api-sports.io/football/players/161922.png",
                "reason": "Muscle Injury",
                "since": "2026-09-12"
            },
            {
                "player": "H. Larsson",
                "photo": "https://media.api-sports.io/football/players/335094.png",
                "reason": "Muscle Injury",
                "since": "2026-08-29"
            },
            {
                "player": "J. Ngankam",
                "photo": "https://media.api-sports.io/football/players/162771.png",
                "reason": "Hamstring Injury",
                "since": "2026-10-10"
            },
            {
                "player": "F. Chaibi",
                "photo": "https://media.api-sports.io/football/players/276670.png",
                "reason": "Lacking Match Fitness",
                "since": "2026-10-10"
            },
            {
                "player": "J. Maluze",
                "photo": "https://media.api-sports.io/football/players/585451.png",
                "reason": "Thigh Injury",
                "since": "2026-10-10"
            },
            {
                "player": "M. Pimpong",
                "photo": "https://media.api-sports.io/football/players/585850.png",
                "reason": "Injury",
                "since": "2026-10-10"
            }
        ],
        "bayern-munchen": [
            {
                "player": "T. Buchmann",
                "photo": "https://media.api-sports.io/football/players/330612.png",
                "reason": "Knee Injury",
                "since": "2026-10-10"
            },
            {
                "player": "S. Gnabry",
                "photo": "https://media.api-sports.io/football/players/510.png",
                "reason": "Muscle Injury",
                "since": "2026-09-05"
            },
            {
                "player": "J. Musiala",
                "photo": "https://media.api-sports.io/football/players/181812.png",
                "reason": "Muscle Injury",
                "since": "2026-10-10"
            }
        ],
        "vfb-stuttgart": [
            {
                "player": "J. Arevalo",
                "photo": "https://media.api-sports.io/football/players/350799.png",
                "reason": "Back Injury",
                "since": "2026-09-04"
            },
            {
                "player": "L. Assignon",
                "photo": "https://media.api-sports.io/football/players/180731.png",
                "reason": "Shoulder Injury",
                "since": "2026-09-19"
            },
            {
                "player": "J. Diehl",
                "photo": "https://media.api-sports.io/football/players/287927.png",
                "reason": "Muscle Injury",
                "since": "2026-10-10"
            },
            {
                "player": "C. Fuhrich",
                "photo": "https://media.api-sports.io/football/players/24798.png",
                "reason": "Muscle Injury",
                "since": "2026-08-28"
            },
            {
                "player": "L. Jaquez",
                "photo": "https://media.api-sports.io/football/players/349344.png",
                "reason": "Muscle Injury",
                "since": "2026-09-19"
            },
            {
                "player": "N. Nartey",
                "photo": "https://media.api-sports.io/football/players/24806.png",
                "reason": "Muscle Injury",
                "since": "2026-10-10"
            },
            {
                "player": "L. Sauer",
                "photo": "https://media.api-sports.io/football/players/342163.png",
                "reason": "Muscle Injury",
                "since": "2026-08-28"
            },
            {
                "player": "D. Seimen",
                "photo": "https://media.api-sports.io/football/players/327993.png",
                "reason": "Thigh Injury",
                "since": "2026-09-19"
            },
            {
                "player": "D. Zagadou",
                "photo": "https://media.api-sports.io/football/players/13.png",
                "reason": "Muscle Injury",
                "since": "2026-10-10"
            },
            {
                "player": "T. Tomas",
                "photo": "https://media.api-sports.io/football/players/265363.png",
                "reason": "Muscle Injury",
                "since": "2026-10-10"
            },
            {
                "player": "M. Herwerth",
                "photo": "https://media.api-sports.io/football/players/420353.png",
                "reason": "Injury",
                "since": "2026-09-19"
            },
            {
                "player": "A. Al Dakhil",
                "photo": "https://media.api-sports.io/football/players/323449.png",
                "reason": "Knee Injury",
                "since": "2026-10-10"
            }
        ],
        "sv-elversberg": [
            {
                "player": "L. Seifert",
                "photo": "https://media.api-sports.io/football/players/583807.png",
                "reason": "Ankle Injury",
                "since": "2026-10-10"
            },
            {
                "player": "T. Zimmerschied",
                "photo": "https://media.api-sports.io/football/players/177362.png",
                "reason": "Back Injury",
                "since": "2026-09-13"
            },
            {
                "player": "F. Onyeka",
                "photo": "https://media.api-sports.io/football/players/392254.png",
                "reason": "Foot Injury",
                "since": "2026-10-10"
            },
            {
                "player": "L. Schnellbacher",
                "photo": "https://media.api-sports.io/football/players/26642.png",
                "reason": "Injury",
                "since": "2026-10-10"
            }
        ],
        "bayer-leverkusen": [
            {
                "player": "E. Ben Seghir",
                "photo": "https://media.api-sports.io/football/players/343320.png",
                "reason": "Thigh Injury",
                "since": "2026-09-05"
            },
            {
                "player": "M. Culbreath",
                "photo": "https://media.api-sports.io/football/players/444961.png",
                "reason": "Foot Injury",
                "since": "2026-10-10"
            },
            {
                "player": "K. Eichhorn",
                "photo": "https://media.api-sports.io/football/players/503467.png",
                "reason": "Illness",
                "since": "2026-10-10"
            },
            {
                "player": "M. Terrier",
                "photo": "https://media.api-sports.io/football/players/663.png",
                "reason": "Muscle Injury",
                "since": "2026-09-05"
            },
            {
                "player": "G. Doue",
                "photo": "https://media.api-sports.io/football/players/161747.png",
                "reason": "Calf Injury",
                "since": "2026-10-10"
            },
            {
                "player": "N. Tella",
                "photo": "https://media.api-sports.io/football/players/231029.png",
                "reason": "Injury",
                "since": "2026-09-20"
            },
            {
                "player": "C. Kofane",
                "photo": "https://media.api-sports.io/football/players/505295.png",
                "reason": "Muscle Injury",
                "since": "2026-10-10"
            }
        ],
        "sc-freiburg": [
            {
                "player": "F. Muslija",
                "photo": "https://media.api-sports.io/football/players/25383.png",
                "reason": "Knee Injury",
                "since": "2026-08-30"
            },
            {
                "player": "P. Osterhage",
                "photo": "https://media.api-sports.io/football/players/163022.png",
                "reason": "Muscle Injury",
                "since": "2026-09-05"
            },
            {
                "player": "R. Yamamoto",
                "photo": "https://media.api-sports.io/football/players/33805.png",
                "reason": "Injury",
                "since": "2026-08-30"
            }
        ],
        "werder-bremen": [
            {
                "player": "F. Agu",
                "photo": "https://media.api-sports.io/football/players/26319.png",
                "reason": "Calf Injury",
                "since": "2026-10-09"
            },
            {
                "player": "K. Topp",
                "photo": "https://media.api-sports.io/football/players/334334.png",
                "reason": "Knee Injury",
                "since": "2026-10-09"
            },
            {
                "player": "M. Weiser",
                "photo": "https://media.api-sports.io/football/players/973.png",
                "reason": "Knee Injury",
                "since": "2026-09-05"
            },
            {
                "player": "O. Wojcik",
                "photo": "https://media.api-sports.io/football/players/270836.png",
                "reason": "Muscle Injury",
                "since": "2026-08-30"
            },
            {
                "player": "J. Njinmah",
                "photo": "https://media.api-sports.io/football/players/177807.png",
                "reason": "Thigh Injury",
                "since": "2026-10-09"
            },
            {
                "player": "J. Stage",
                "photo": "https://media.api-sports.io/football/players/15592.png",
                "reason": "Muscle Injury",
                "since": "2026-10-09"
            },
            {
                "player": "S. Lynen",
                "photo": "https://media.api-sports.io/football/players/38798.png",
                "reason": "Hip Injury",
                "since": "2026-10-09"
            },
            {
                "player": "M. N'Diaye",
                "photo": "https://media.api-sports.io/football/players/175415.png",
                "reason": "Groin Injury",
                "since": "2026-10-09"
            },
            {
                "player": "S. Alvero",
                "photo": "https://media.api-sports.io/football/players/193720.png",
                "reason": "Calf Injury",
                "since": "2026-10-09"
            },
            {
                "player": "S. Musah",
                "photo": "https://media.api-sports.io/football/players/432519.png",
                "reason": "Muscle Injury",
                "since": "2026-10-09"
            }
        ],
        "borussia-dortmund": [
            {
                "player": "R. Bensebaini",
                "photo": "https://media.api-sports.io/football/players/2194.png",
                "reason": "Ribs Injury",
                "since": "2026-09-05"
            },
            {
                "player": "E. Can",
                "photo": "https://media.api-sports.io/football/players/864.png",
                "reason": "Knee Injury",
                "since": "2026-10-09"
            },
            {
                "player": "M. Kaba",
                "photo": "https://media.api-sports.io/football/players/479116.png",
                "reason": "Injury",
                "since": "2026-09-19"
            },
            {
                "player": "N. Schlotterbeck",
                "photo": "https://media.api-sports.io/football/players/26243.png",
                "reason": "Ankle Injury",
                "since": "2026-09-05"
            },
            {
                "player": "S. Inacio",
                "photo": "https://media.api-sports.io/football/players/478991.png",
                "reason": "Red Card",
                "since": "2026-09-12"
            },
            {
                "player": "G. Konstantelias",
                "photo": "https://media.api-sports.io/football/players/162410.png",
                "reason": "Knee Injury",
                "since": "2026-10-09"
            },
            {
                "player": "J. Lerma",
                "photo": "https://media.api-sports.io/football/players/465666.png",
                "reason": "Muscle Injury",
                "since": "2026-10-09"
            },
            {
                "player": "F. Mane",
                "photo": "https://media.api-sports.io/football/players/341839.png",
                "reason": "Muscle Injury",
                "since": "2026-10-09"
            },
            {
                "player": "K. Karetsas",
                "photo": "https://media.api-sports.io/football/players/404891.png",
                "reason": "Illness",
                "since": "2026-10-09"
            },
            {
                "player": "C. Chukwuemeka",
                "photo": "https://media.api-sports.io/football/players/138935.png",
                "reason": "Muscle Injury",
                "since": "2026-10-09"
            },
            {
                "player": "J. Ryerson",
                "photo": "https://media.api-sports.io/football/players/24845.png",
                "reason": "Ribs Injury",
                "since": "2026-10-09"
            }
        ],
        "hamburger-sv": [
            {
                "player": "M. Muheim",
                "photo": "https://media.api-sports.io/football/players/48489.png",
                "reason": "Muscle Injury",
                "since": "2026-09-06"
            },
            {
                "player": "W. Omari",
                "photo": "https://media.api-sports.io/football/players/162265.png",
                "reason": "Personal Reasons",
                "since": "2026-09-06"
            },
            {
                "player": "A. Rossing-Lelesiit",
                "photo": "https://media.api-sports.io/football/players/470282.png",
                "reason": "Ankle Injury",
                "since": "2026-10-10"
            },
            {
                "player": "S. Bornauw",
                "photo": "https://media.api-sports.io/football/players/1408.png",
                "reason": "Muscle Injury",
                "since": "2026-09-19"
            },
            {
                "player": "M. Vuskovic",
                "photo": "https://media.api-sports.io/football/players/14335.png",
                "reason": "Doping",
                "since": "2026-10-10"
            },
            {
                "player": "K. Amoako",
                "photo": "https://media.api-sports.io/football/players/355176.png",
                "reason": "Illness",
                "since": "2026-09-13"
            },
            {
                "player": "P. Daka",
                "photo": "https://media.api-sports.io/football/players/1098.png",
                "reason": "Thigh Injury",
                "since": "2026-10-10"
            },
            {
                "player": "A. Gronbaek",
                "photo": "https://media.api-sports.io/football/players/263177.png",
                "reason": "Thigh Injury",
                "since": "2026-10-10"
            },
            {
                "player": "Z. El Ouahdi",
                "photo": "https://media.api-sports.io/football/players/283252.png",
                "reason": "Illness",
                "since": "2026-10-10"
            }
        ],
        "fc-augsburg": [
            {
                "player": "T. Breithaupt",
                "photo": "https://media.api-sports.io/football/players/202755.png",
                "reason": "Toe Injury",
                "since": "2026-10-10"
            },
            {
                "player": "S. Mounie",
                "photo": "https://media.api-sports.io/football/players/3395.png",
                "reason": "Injury",
                "since": "2026-10-10"
            },
            {
                "player": "A. Kade",
                "photo": "https://media.api-sports.io/football/players/279993.png",
                "reason": "Calf Injury",
                "since": "2026-09-19"
            },
            {
                "player": "F. Sakar",
                "photo": "https://media.api-sports.io/football/players/479269.png",
                "reason": "Ankle Injury",
                "since": "2026-09-19"
            },
            {
                "player": "T. Schnitzer",
                "photo": "https://media.api-sports.io/football/players/585671.png",
                "reason": "Injury",
                "since": "2026-09-19"
            },
            {
                "player": "S. Suso",
                "photo": "https://media.api-sports.io/football/players/343159.png",
                "reason": "Muscle Injury",
                "since": "2026-10-10"
            },
            {
                "player": "N. Banks",
                "photo": "https://media.api-sports.io/football/players/413065.png",
                "reason": "Knee Injury",
                "since": "2026-10-10"
            },
            {
                "player": "K. Jakic",
                "photo": "https://media.api-sports.io/football/players/14395.png",
                "reason": "Injury",
                "since": "2026-09-06"
            }
        ],
        "fc-schalke-04": [
            {
                "player": "E. Hojlund",
                "photo": "https://media.api-sports.io/football/players/339875.png",
                "reason": "Heel Injury",
                "since": "2026-09-05"
            },
            {
                "player": "T. Kalas",
                "photo": "https://media.api-sports.io/football/players/19262.png",
                "reason": "Lacking Match Fitness",
                "since": "2026-09-11"
            },
            {
                "player": "K. Karaman",
                "photo": "https://media.api-sports.io/football/players/25466.png",
                "reason": "Hip Injury",
                "since": "2026-08-30"
            },
            {
                "player": "A. Gantenbein",
                "photo": "https://media.api-sports.io/football/players/266192.png",
                "reason": "Ankle Injury",
                "since": "2026-09-05"
            },
            {
                "player": "B. Lasme",
                "photo": "https://media.api-sports.io/football/players/24228.png",
                "reason": "Calf Injury",
                "since": "2026-09-05"
            },
            {
                "player": "R. Schallenberg",
                "photo": "https://media.api-sports.io/football/players/88140.png",
                "reason": "Red Card",
                "since": "2026-09-11"
            },
            {
                "player": "D. Ljubicic",
                "photo": "https://media.api-sports.io/football/players/1725.png",
                "reason": "Knee Injury",
                "since": "2026-10-11"
            },
            {
                "player": "T. Becker",
                "photo": "https://media.api-sports.io/football/players/90977.png",
                "reason": "Ankle Injury",
                "since": "2026-10-11"
            }
        ],
        "lens": [
            {
                "player": "K. Antonio",
                "photo": "https://media.api-sports.io/football/players/441264.png",
                "reason": "Red Card",
                "since": "2026-08-29"
            },
            {
                "player": "S. Baidoo",
                "photo": "https://media.api-sports.io/football/players/322984.png",
                "reason": "Knee Injury",
                "since": "2026-09-18"
            },
            {
                "player": "N. Celik",
                "photo": "https://media.api-sports.io/football/players/395589.png",
                "reason": "Injury",
                "since": "2026-08-22"
            },
            {
                "player": "J. Chavez",
                "photo": "https://media.api-sports.io/football/players/237191.png",
                "reason": "Thigh Injury",
                "since": "2026-10-09"
            },
            {
                "player": "J. Gradit",
                "photo": "https://media.api-sports.io/football/players/21635.png",
                "reason": "Thigh Injury",
                "since": "2026-08-29"
            },
            {
                "player": "S. Abdulhamid",
                "photo": "https://media.api-sports.io/football/players/44594.png",
                "reason": "Contusion",
                "since": "2026-09-18"
            },
            {
                "player": "O. Edouard",
                "photo": "https://media.api-sports.io/football/players/1135.png",
                "reason": "Personal Reasons",
                "since": "2026-08-29"
            },
            {
                "player": "M. Nawrocki",
                "photo": "https://media.api-sports.io/football/players/178708.png",
                "reason": "Knee Injury",
                "since": "2026-10-09"
            },
            {
                "player": "Y. Titraoui",
                "photo": "https://media.api-sports.io/football/players/327599.png",
                "reason": "Injury",
                "since": "2026-09-18"
            },
            {
                "player": "S. Sagnan",
                "photo": "https://media.api-sports.io/football/players/437139.png",
                "reason": "Red Card",
                "since": "2026-09-13"
            },
            {
                "player": "T. Hazard",
                "photo": "https://media.api-sports.io/football/players/2929.png",
                "reason": "Inactive",
                "since": "2026-10-09"
            },
            {
                "player": "A. Sima",
                "photo": "https://media.api-sports.io/football/players/277191.png",
                "reason": "Muscle Injury",
                "since": "2026-10-09"
            },
            {
                "player": "J. Todibo",
                "photo": "https://media.api-sports.io/football/players/138.png",
                "reason": "Inactive",
                "since": "2026-10-09"
            }
        ],
        "auxerre": [
            {
                "player": "T. Bair",
                "photo": "https://media.api-sports.io/football/players/51293.png",
                "reason": "Suspended",
                "since": "2026-08-22"
            },
            {
                "player": "A. Diousse",
                "photo": "https://media.api-sports.io/football/players/30748.png",
                "reason": "Knee Injury",
                "since": "2026-10-11"
            },
            {
                "player": "S. Fofana",
                "photo": "https://media.api-sports.io/football/players/193505.png",
                "reason": "Groin Injury",
                "since": "2026-09-12"
            },
            {
                "player": "R. Labeau Lascary",
                "photo": "https://media.api-sports.io/football/players/326073.png",
                "reason": "Loan agreement",
                "since": "2026-08-22"
            },
            {
                "player": "B. Okoh",
                "photo": "https://media.api-sports.io/football/players/115588.png",
                "reason": "Knee Injury",
                "since": "2026-10-11"
            },
            {
                "player": "M. Senaya",
                "photo": "https://media.api-sports.io/football/players/191240.png",
                "reason": "Hamstring Injury",
                "since": "2026-10-11"
            },
            {
                "player": "F. Sierralta",
                "photo": "https://media.api-sports.io/football/players/31016.png",
                "reason": "Injury",
                "since": "2026-09-04"
            },
            {
                "player": "T. Siwe",
                "photo": "https://media.api-sports.io/football/players/402542.png",
                "reason": "Muscle Injury",
                "since": "2026-10-11"
            },
            {
                "player": "Wei Xiangxin",
                "photo": "https://media.api-sports.io/football/players/511151.png",
                "reason": "Inactive",
                "since": "2026-08-29"
            },
            {
                "player": "C. Makosso",
                "photo": "https://media.api-sports.io/football/players/412926.png",
                "reason": "Yellow Cards",
                "since": "2026-10-11"
            },
            {
                "player": "F. Oppegard",
                "photo": "https://media.api-sports.io/football/players/215827.png",
                "reason": "Illness",
                "since": "2026-09-04"
            },
            {
                "player": "A. Tuanzebe",
                "photo": "https://media.api-sports.io/football/players/19182.png",
                "reason": "Lacking Match Fitness",
                "since": "2026-09-04"
            }
        ],
        "marseille": [
            {
                "player": "L. Balerdi",
                "photo": "https://media.api-sports.io/football/players/6.png",
                "reason": "Calf Injury",
                "since": "2026-08-21"
            },
            {
                "player": "F. Moumbagna",
                "photo": "https://media.api-sports.io/football/players/102447.png",
                "reason": "Injury",
                "since": "2026-08-21"
            },
            {
                "player": "Q. Timber",
                "photo": "https://media.api-sports.io/football/players/38747.png",
                "reason": "Yellow Cards",
                "since": "2026-08-21"
            },
            {
                "player": "I. Paixao",
                "photo": "https://media.api-sports.io/football/players/9363.png",
                "reason": "Muscle Injury",
                "since": "2026-08-30"
            },
            {
                "player": "G. Kondogbia",
                "photo": "https://media.api-sports.io/football/players/926.png",
                "reason": "Thigh Injury",
                "since": "2026-10-11"
            },
            {
                "player": "T. Nnadi",
                "photo": "https://media.api-sports.io/football/players/354298.png",
                "reason": "Knee Injury",
                "since": "2026-09-20"
            },
            {
                "player": "D. Cornelius",
                "photo": "https://media.api-sports.io/football/players/51295.png",
                "reason": "Hip Injury",
                "since": "2026-10-11"
            },
            {
                "player": "T. Weah",
                "photo": "https://media.api-sports.io/football/players/1138.png",
                "reason": "Red Card",
                "since": "2026-10-11"
            },
            {
                "player": "A. Gouiri",
                "photo": "https://media.api-sports.io/football/players/85041.png",
                "reason": "Thigh Injury",
                "since": "2026-10-11"
            },
            {
                "player": "P. Hojbjerg",
                "photo": "https://media.api-sports.io/football/players/2735.png",
                "reason": "Muscle Injury",
                "since": "2026-10-11"
            },
            {
                "player": "A. Koum Mbondo",
                "photo": "https://media.api-sports.io/football/players/392683.png",
                "reason": "Inactive",
                "since": "2026-09-11"
            }
        ],
        "strasbourg": [
            {
                "player": "B. Chilwell",
                "photo": "https://media.api-sports.io/football/players/2933.png",
                "reason": "Hamstring Injury",
                "since": "2026-08-29"
            },
            {
                "player": "I. Doukoure",
                "photo": "https://media.api-sports.io/football/players/271542.png",
                "reason": "Inactive",
                "since": "2026-10-11"
            },
            {
                "player": "M. Godo",
                "photo": "https://media.api-sports.io/football/players/359386.png",
                "reason": "Muscle Injury",
                "since": "2026-10-11"
            },
            {
                "player": "J. Panichelli",
                "photo": "https://media.api-sports.io/football/players/390742.png",
                "reason": "Knee Injury",
                "since": "2026-10-11"
            },
            {
                "player": "S. El Mourabet",
                "photo": "https://media.api-sports.io/football/players/415431.png",
                "reason": "Red Card",
                "since": "2026-09-06"
            },
            {
                "player": "M. Oyedele",
                "photo": "https://media.api-sports.io/football/players/303016.png",
                "reason": "Injury",
                "since": "2026-09-06"
            },
            {
                "player": "Oso",
                "photo": "https://media.api-sports.io/football/players/341453.png",
                "reason": "Injury",
                "since": "2026-10-11"
            }
        ],
        "nice": [
            {
                "player": "L. Abergel",
                "photo": "https://media.api-sports.io/football/players/20917.png",
                "reason": "Knee Injury",
                "since": "2026-10-11"
            },
            {
                "player": "M. Bombito",
                "photo": "https://media.api-sports.io/football/players/407017.png",
                "reason": "Leg Injury",
                "since": "2026-10-11"
            },
            {
                "player": "T. Moffi",
                "photo": "https://media.api-sports.io/football/players/69971.png",
                "reason": "Inactive",
                "since": "2026-08-22"
            },
            {
                "player": "A. Witsel",
                "photo": "https://media.api-sports.io/football/players/20.png",
                "reason": "Inactive",
                "since": "2026-08-22"
            },
            {
                "player": "A. Abdi",
                "photo": "https://media.api-sports.io/football/players/49583.png",
                "reason": "Surgery",
                "since": "2026-08-30"
            },
            {
                "player": "M. Sanson",
                "photo": "https://media.api-sports.io/football/players/1914.png",
                "reason": "Surgery",
                "since": "2026-09-20"
            },
            {
                "player": "A. Mendy",
                "photo": "https://media.api-sports.io/football/players/313937.png",
                "reason": "Knee Injury",
                "since": "2026-10-11"
            }
        ],
        "lorient": [
            {
                "player": "M. Bamba",
                "photo": "https://media.api-sports.io/football/players/200873.png",
                "reason": "Lacking Match Fitness",
                "since": "2026-08-29"
            },
            {
                "player": "B. Fadiga",
                "photo": "https://media.api-sports.io/football/players/162018.png",
                "reason": "Ankle Injury",
                "since": "2026-10-10"
            },
            {
                "player": "N. Mbamba",
                "photo": "https://media.api-sports.io/football/players/298006.png",
                "reason": "Muscle Injury",
                "since": "2026-10-10"
            },
            {
                "player": "P. Katseris",
                "photo": "https://media.api-sports.io/football/players/384112.png",
                "reason": "Hamstring Injury",
                "since": "2026-10-10"
            }
        ],
        "toulouse": [
            {
                "player": "A. Donnum",
                "photo": "https://media.api-sports.io/football/players/39115.png",
                "reason": "Personal Reasons",
                "since": "2026-09-12"
            },
            {
                "player": "A. Francis",
                "photo": "https://media.api-sports.io/football/players/118345.png",
                "reason": "Muscle Injury",
                "since": "2026-09-19"
            },
            {
                "player": "A. Vossah",
                "photo": "https://media.api-sports.io/football/players/514464.png",
                "reason": "Yellow Cards",
                "since": "2026-08-22"
            },
            {
                "player": "R. Nicolaisen",
                "photo": "https://media.api-sports.io/football/players/15793.png",
                "reason": "Calf Injury",
                "since": "2026-10-10"
            },
            {
                "player": "G. Restes",
                "photo": "https://media.api-sports.io/football/players/325346.png",
                "reason": "Injury",
                "since": "2026-09-12"
            }
        ],
        "lyon": [
            {
                "player": "Abner Vinicius",
                "photo": "https://media.api-sports.io/football/players/9700.png",
                "reason": "Rest",
                "since": "2026-08-22"
            },
            {
                "player": "R. Kluivert",
                "photo": "https://media.api-sports.io/football/players/193293.png",
                "reason": "Inactive",
                "since": "2026-08-29"
            },
            {
                "player": "A. Maitland-Niles",
                "photo": "https://media.api-sports.io/football/players/1456.png",
                "reason": "Rest",
                "since": "2026-08-22"
            },
            {
                "player": "K. Merah",
                "photo": "https://media.api-sports.io/football/players/519664.png",
                "reason": "Ankle Injury",
                "since": "2026-08-22"
            },
            {
                "player": "M. Niakhate",
                "photo": "https://media.api-sports.io/football/players/25916.png",
                "reason": "Muscle Injury",
                "since": "2026-10-09"
            },
            {
                "player": "J. Duranville",
                "photo": "https://media.api-sports.io/football/players/368230.png",
                "reason": "Muscle Injury",
                "since": "2026-09-19"
            },
            {
                "player": "R. Himbert",
                "photo": "https://media.api-sports.io/football/players/497617.png",
                "reason": "Inactive",
                "since": "2026-10-09"
            },
            {
                "player": "N. Kamara",
                "photo": "https://media.api-sports.io/football/players/493026.png",
                "reason": "Inactive",
                "since": "2026-09-19"
            },
            {
                "player": "A. Gomes Rodriguez",
                "photo": "https://media.api-sports.io/football/players/409794.png",
                "reason": "Inactive",
                "since": "2026-09-04"
            },
            {
                "player": "A. Hamdani",
                "photo": "https://media.api-sports.io/football/players/623922.png",
                "reason": "Inactive",
                "since": "2026-09-12"
            },
            {
                "player": "S. Kango",
                "photo": "https://media.api-sports.io/football/players/645969.png",
                "reason": "Inactive",
                "since": "2026-09-04"
            },
            {
                "player": "K. Nakamura",
                "photo": "https://media.api-sports.io/football/players/33321.png",
                "reason": "Coach's decision",
                "since": "2026-09-04"
            },
            {
                "player": "M. Ouedraogo",
                "photo": "https://media.api-sports.io/football/players/412049.png",
                "reason": "Knee Injury",
                "since": "2026-10-09"
            },
            {
                "player": "M. de Carvalho",
                "photo": "https://media.api-sports.io/football/players/438692.png",
                "reason": "Inactive",
                "since": "2026-09-04"
            },
            {
                "player": "N. Tagliafico",
                "photo": "https://media.api-sports.io/football/players/529.png",
                "reason": "Rest",
                "since": "2026-10-09"
            }
        ],
        "estac-troyes": [
            {
                "player": "I. Boura",
                "photo": "https://media.api-sports.io/football/players/174596.png",
                "reason": "Hip Injury",
                "since": "2026-10-11"
            },
            {
                "player": "A. Fatah",
                "photo": "https://media.api-sports.io/football/players/345107.png",
                "reason": "Hamstring Injury",
                "since": "2026-08-29"
            },
            {
                "player": "Y. Titi",
                "photo": "https://media.api-sports.io/football/players/395810.png",
                "reason": "Leg Injury",
                "since": "2026-10-11"
            },
            {
                "player": "P. Gozzi",
                "photo": "https://media.api-sports.io/football/players/859.png",
                "reason": "Muscle Injury",
                "since": "2026-10-11"
            },
            {
                "player": "M. Ifnaoui",
                "photo": "https://media.api-sports.io/football/players/275478.png",
                "reason": "Calf Injury",
                "since": "2026-10-11"
            },
            {
                "player": "A. Phliponeau",
                "photo": "https://media.api-sports.io/football/players/1913.png",
                "reason": "Knee Injury",
                "since": "2026-09-19"
            },
            {
                "player": "Y. Kone",
                "photo": "https://media.api-sports.io/football/players/670620.png",
                "reason": "Injury",
                "since": "2026-10-11"
            }
        ],
        "paris-fc": [
            {
                "player": "J. Ikone",
                "photo": "https://media.api-sports.io/football/players/22229.png",
                "reason": "Hamstring Injury",
                "since": "2026-09-06"
            },
            {
                "player": "E. Mbemba",
                "photo": "https://media.api-sports.io/football/players/490981.png",
                "reason": "Leg Injury",
                "since": "2026-10-10"
            },
            {
                "player": "N. Sangui",
                "photo": "https://media.api-sports.io/football/players/389322.png",
                "reason": "Injury",
                "since": "2026-09-19"
            },
            {
                "player": "L. Koleosho",
                "photo": "https://media.api-sports.io/football/players/359603.png",
                "reason": "Injury",
                "since": "2026-08-30"
            },
            {
                "player": "Otavio",
                "photo": "https://media.api-sports.io/football/players/266013.png",
                "reason": "Injury",
                "since": "2026-09-19"
            },
            {
                "player": "T. De Smet",
                "photo": "https://media.api-sports.io/football/players/8474.png",
                "reason": "Inactive",
                "since": "2026-09-12"
            }
        ],
        "le-mans": [
            {
                "player": "H. Voyer",
                "photo": "https://media.api-sports.io/football/players/174605.png",
                "reason": "Yellow Cards",
                "since": "2026-08-22"
            },
            {
                "player": "R. Bamba",
                "photo": "https://media.api-sports.io/football/players/363226.png",
                "reason": "Loan agreement",
                "since": "2026-08-30"
            },
            {
                "player": "E. Colas",
                "photo": "https://media.api-sports.io/football/players/174939.png",
                "reason": "Injury",
                "since": "2026-10-10"
            },
            {
                "player": "Y. Larouci",
                "photo": "https://media.api-sports.io/football/players/138828.png",
                "reason": "Concussion",
                "since": "2026-08-30"
            },
            {
                "player": "S. Yohou",
                "photo": "https://media.api-sports.io/football/players/20602.png",
                "reason": "Thigh Injury",
                "since": "2026-08-30"
            },
            {
                "player": "T. Eyoum",
                "photo": "https://media.api-sports.io/football/players/270515.png",
                "reason": "Coach's decision",
                "since": "2026-09-19"
            },
            {
                "player": "W. Harhouz",
                "photo": "https://media.api-sports.io/football/players/381116.png",
                "reason": "Coach's decision",
                "since": "2026-09-13"
            },
            {
                "player": "N. Kocik",
                "photo": "https://media.api-sports.io/football/players/24189.png",
                "reason": "Ankle Injury",
                "since": "2026-09-05"
            },
            {
                "player": "E. Quarshie",
                "photo": "https://media.api-sports.io/football/players/24259.png",
                "reason": "Coach's decision",
                "since": "2026-09-19"
            },
            {
                "player": "D. Sidibe",
                "photo": "https://media.api-sports.io/football/players/102.png",
                "reason": "Yellow Cards",
                "since": "2026-10-10"
            },
            {
                "player": "L. Buades",
                "photo": "https://media.api-sports.io/football/players/21448.png",
                "reason": "Knock",
                "since": "2026-10-10"
            },
            {
                "player": "M. Rossignol",
                "photo": "https://media.api-sports.io/football/players/349631.png",
                "reason": "Coach's decision",
                "since": "2026-09-19"
            },
            {
                "player": "A. Bourabaa",
                "photo": "https://media.api-sports.io/football/players/608142.png",
                "reason": "Ankle Injury",
                "since": "2026-10-10"
            }
        ],
        "stade-brestois-29": [
            {
                "player": "B. Chardonnet",
                "photo": "https://media.api-sports.io/football/players/20546.png",
                "reason": "Calf Injury",
                "since": "2026-10-10"
            },
            {
                "player": "H. Magnetti",
                "photo": "https://media.api-sports.io/football/players/20558.png",
                "reason": "Muscle Injury",
                "since": "2026-08-22"
            },
            {
                "player": "J. Bourgault",
                "photo": "https://media.api-sports.io/football/players/369556.png",
                "reason": "Knee Injury",
                "since": "2026-08-29"
            },
            {
                "player": "R. Cagnon",
                "photo": "https://media.api-sports.io/football/players/158587.png",
                "reason": "Shoulder Injury",
                "since": "2026-10-10"
            },
            {
                "player": "M. Diambou",
                "photo": "https://media.api-sports.io/football/players/302915.png",
                "reason": "Ankle Injury",
                "since": "2026-10-10"
            },
            {
                "player": "N. Edjouma",
                "photo": "https://media.api-sports.io/football/players/430816.png",
                "reason": "Muscle Injury",
                "since": "2026-09-20"
            },
            {
                "player": "M. Balde",
                "photo": "https://media.api-sports.io/football/players/41323.png",
                "reason": "Injury",
                "since": "2026-09-13"
            },
            {
                "player": "R. Le Guen",
                "photo": "https://media.api-sports.io/football/players/498791.png",
                "reason": "Broken Leg",
                "since": "2026-10-10"
            },
            {
                "player": "G. Versini",
                "photo": "https://media.api-sports.io/football/players/327697.png",
                "reason": "Leg Injury",
                "since": "2026-10-10"
            }
        ],
        "angers": [
            {
                "player": "H. Belkebla",
                "photo": "https://media.api-sports.io/football/players/20554.png",
                "reason": "Thigh Injury",
                "since": "2026-09-12"
            },
            {
                "player": "L. Mouton",
                "photo": "https://media.api-sports.io/football/players/289555.png",
                "reason": "Inactive",
                "since": "2026-09-19"
            }
        ],
        "lille": [
            {
                "player": "B. Andre",
                "photo": "https://media.api-sports.io/football/players/2204.png",
                "reason": "Yellow Cards",
                "since": "2026-08-23"
            },
            {
                "player": "M. Fernandez-Pardo",
                "photo": "https://media.api-sports.io/football/players/340077.png",
                "reason": "Transfer negotiations",
                "since": "2026-08-28"
            },
            {
                "player": "H. Igamane",
                "photo": "https://media.api-sports.io/football/players/306979.png",
                "reason": "Knee Injury",
                "since": "2026-10-10"
            },
            {
                "player": "S. Diaoune",
                "photo": "https://media.api-sports.io/football/players/487381.png",
                "reason": "Inactive",
                "since": "2026-09-03"
            },
            {
                "player": "T. Nianzou",
                "photo": "https://media.api-sports.io/football/players/133110.png",
                "reason": "Knock",
                "since": "2026-09-20"
            },
            {
                "player": "L. Srdanovic",
                "photo": "https://media.api-sports.io/football/players/394211.png",
                "reason": "Inactive",
                "since": "2026-09-03"
            }
        ],
        "le-havre": [
            {
                "player": "F. Mambimbi",
                "photo": "https://media.api-sports.io/football/players/961.png",
                "reason": "Achilles Tendon Injury",
                "since": "2026-10-10"
            },
            {
                "player": "A. Toure",
                "photo": "https://media.api-sports.io/football/players/21103.png",
                "reason": "Knee Injury",
                "since": "2026-10-10"
            },
            {
                "player": "S. Zagadou",
                "photo": "https://media.api-sports.io/football/players/513415.png",
                "reason": "Knee Injury",
                "since": "2026-10-10"
            },
            {
                "player": "P. Argney",
                "photo": "https://media.api-sports.io/football/players/395808.png",
                "reason": "Injury",
                "since": "2026-09-19"
            },
            {
                "player": "L. Mpasi-Nzau",
                "photo": "https://media.api-sports.io/football/players/24012.png",
                "reason": "Achilles Tendon Injury",
                "since": "2026-10-10"
            },
            {
                "player": "T. Pembele",
                "photo": "https://media.api-sports.io/football/players/162067.png",
                "reason": "Muscle Injury",
                "since": "2026-10-10"
            },
            {
                "player": "J. Mwanga",
                "photo": "https://media.api-sports.io/football/players/282549.png",
                "reason": "Red Card",
                "since": "2026-09-12"
            },
            {
                "player": "R. Ndiaye",
                "photo": "https://media.api-sports.io/football/players/128342.png",
                "reason": "Groin Injury",
                "since": "2026-09-12"
            },
            {
                "player": "E. Jelert",
                "photo": "https://media.api-sports.io/football/players/341234.png",
                "reason": "Thigh Injury",
                "since": "2026-10-10"
            }
        ],
        "monaco": [
            {
                "player": "M. Abline",
                "photo": "https://media.api-sports.io/football/players/161622.png",
                "reason": "Foot Injury",
                "since": "2026-08-23"
            },
            {
                "player": "F. Balogun",
                "photo": "https://media.api-sports.io/football/players/138835.png",
                "reason": "Injury",
                "since": "2026-09-12"
            },
            {
                "player": "E. Diop",
                "photo": "https://media.api-sports.io/football/players/374361.png",
                "reason": "Injury",
                "since": "2026-09-04"
            },
            {
                "player": "A. Fati",
                "photo": "https://media.api-sports.io/football/players/135775.png",
                "reason": "Calf Injury",
                "since": "2026-10-10"
            },
            {
                "player": "C. Mawissa",
                "photo": "https://media.api-sports.io/football/players/371916.png",
                "reason": "Yellow Cards",
                "since": "2026-08-23"
            },
            {
                "player": "T. Minamino",
                "photo": "https://media.api-sports.io/football/players/1101.png",
                "reason": "Lacking Match Fitness",
                "since": "2026-09-12"
            },
            {
                "player": "M. Salisu",
                "photo": "https://media.api-sports.io/football/players/47480.png",
                "reason": "Knee Injury",
                "since": "2026-09-04"
            },
            {
                "player": "J. Teze",
                "photo": "https://media.api-sports.io/football/players/231.png",
                "reason": "Injury",
                "since": "2026-09-18"
            },
            {
                "player": "M. Biereth",
                "photo": "https://media.api-sports.io/football/players/283026.png",
                "reason": "Inactive",
                "since": "2026-09-18"
            },
            {
                "player": "M. Coulibaly",
                "photo": "https://media.api-sports.io/football/players/419035.png",
                "reason": "Muscle Injury",
                "since": "2026-10-10"
            },
            {
                "player": "S. Idumbo",
                "photo": "https://media.api-sports.io/football/players/340152.png",
                "reason": "Groin Injury",
                "since": "2026-10-10"
            },
            {
                "player": "A. Soubeir",
                "photo": "https://media.api-sports.io/football/players/671702.png",
                "reason": "Injury",
                "since": "2026-09-18"
            },
            {
                "player": "P. Brunner",
                "photo": "https://media.api-sports.io/football/players/386276.png",
                "reason": "Suspended",
                "since": "2026-10-10"
            }
        ],
        "rennes": [
            {
                "player": "M. Camara",
                "photo": "https://media.api-sports.io/football/players/24147.png",
                "reason": "Yellow Cards",
                "since": "2026-08-23"
            },
            {
                "player": "S. Fofana",
                "photo": "https://media.api-sports.io/football/players/30807.png",
                "reason": "Inactive",
                "since": "2026-08-23"
            },
            {
                "player": "B. Samba",
                "photo": "https://media.api-sports.io/football/players/21628.png",
                "reason": "Muscle Injury",
                "since": "2026-08-30"
            },
            {
                "player": "A. Ait Boudlal",
                "photo": "https://media.api-sports.io/football/players/417830.png",
                "reason": "Inactive",
                "since": "2026-09-06"
            },
            {
                "player": "D. Cisse",
                "photo": "https://media.api-sports.io/football/players/343792.png",
                "reason": "Inactive",
                "since": "2026-09-11"
            },
            {
                "player": "A. Nordin",
                "photo": "https://media.api-sports.io/football/players/22097.png",
                "reason": "Inactive",
                "since": "2026-09-11"
            },
            {
                "player": "G. Oliveira",
                "photo": "https://media.api-sports.io/football/players/400525.png",
                "reason": "Inactive",
                "since": "2026-09-11"
            }
        ],
        "paris-saint-germain": [
            {
                "player": "B. Barcola",
                "photo": "https://media.api-sports.io/football/players/161904.png",
                "reason": "Inactive",
                "since": "2026-08-28"
            },
            {
                "player": "I. Mbaye",
                "photo": "https://media.api-sports.io/football/players/446249.png",
                "reason": "Inactive",
                "since": "2026-08-28"
            },
            {
                "player": "N. Mendes",
                "photo": "https://media.api-sports.io/football/players/263482.png",
                "reason": "Rest",
                "since": "2026-10-10"
            },
            {
                "player": "O. Dembele",
                "photo": "https://media.api-sports.io/football/players/153.png",
                "reason": "Rest",
                "since": "2026-10-10"
            },
            {
                "player": "J. Neves",
                "photo": "https://media.api-sports.io/football/players/335051.png",
                "reason": "Illness",
                "since": "2026-08-28"
            },
            {
                "player": "L. Digne",
                "photo": "https://media.api-sports.io/football/players/2724.png",
                "reason": "Inactive",
                "since": "2026-09-04"
            },
            {
                "player": "A. Hakimi",
                "photo": "https://media.api-sports.io/football/players/9.png",
                "reason": "Thigh Injury",
                "since": "2026-09-20"
            },
            {
                "player": "Q. Ndjantou",
                "photo": "https://media.api-sports.io/football/players/471107.png",
                "reason": "Inactive",
                "since": "2026-09-20"
            },
            {
                "player": "S. Mayulu",
                "photo": "https://media.api-sports.io/football/players/409216.png",
                "reason": "Groin Injury",
                "since": "2026-10-10"
            },
            {
                "player": "I. Zabarnyi",
                "photo": "https://media.api-sports.io/football/players/161671.png",
                "reason": "Coach's decision",
                "since": "2026-09-13"
            },
            {
                "player": "F. Torres",
                "photo": "https://media.api-sports.io/football/players/931.png",
                "reason": "Ankle Injury",
                "since": "2026-10-10"
            },
            {
                "player": "W. Zaire-Emery",
                "photo": "https://media.api-sports.io/football/players/336657.png",
                "reason": "Thigh Injury",
                "since": "2026-10-10"
            }
        ]
    },
    "history": {
        "2026-09-19": [
            {
                "league": "Super Lig",
                "date": "2026-09-19",
                "time": "00:00",
                "home": "Kasımpaşa",
                "away": "Konyaspor",
                "stadium": "Recep Tayyip Erdogan Stadium",
                "round": "Pekan 6",
                "statusCode": "FT",
                "minuteDisplay": "FT",
                "homeScore": 0,
                "awayScore": 0,
                "homeLogo": "https://media.api-sports.io/football/teams/1004.png",
                "awayLogo": "https://media.api-sports.io/football/teams/607.png",
                "prediction": "2 - 1",
                "odds": {
                    "home": 45,
                    "draw": 45,
                    "away": 10
                },
                "advice": "Double chance : Kasımpaşa or draw",
                "comparison": {
                    "form": {
                        "home": 75,
                        "away": 25
                    },
                    "att": {
                        "home": 64,
                        "away": 36
                    },
                    "def": {
                        "home": 62,
                        "away": 38
                    },
                    "poisson": {
                        "home": 67,
                        "away": 33
                    },
                    "h2h": {
                        "home": 25,
                        "away": 75
                    },
                    "goals": {
                        "home": 41,
                        "away": 59
                    }
                },
                "cards": [
                    {
                        "minute": "24",
                        "player": "Matei Ilie",
                        "team": "home",
                        "type": "yellow"
                    },
                    {
                        "minute": "30",
                        "player": "Cláudio Winck",
                        "team": "home",
                        "type": "yellow"
                    },
                    {
                        "minute": "40",
                        "player": "Adil Demirbağ",
                        "team": "away",
                        "type": "yellow"
                    },
                    {
                        "minute": "53",
                        "player": "Marko Jevtović",
                        "team": "away",
                        "type": "yellow"
                    },
                    {
                        "minute": "58",
                        "player": "Rayyan Baniya",
                        "team": "away",
                        "type": "yellow"
                    },
                    {
                        "minute": "68",
                        "player": "Melih İbrahimoğlu",
                        "team": "away",
                        "type": "yellow"
                    },
                    {
                        "minute": "85",
                        "player": "Ayberk Karapo",
                        "team": "home",
                        "type": "yellow"
                    }
                ]
            },
            {
                "league": "Eredivisie",
                "date": "2026-09-19",
                "time": "01:00",
                "home": "Groningen",
                "away": "PEC Zwolle",
                "stadium": "Hitachi Capital Mobility Stadion",
                "round": "Pekan 7",
                "statusCode": "FT",
                "minuteDisplay": "FT",
                "homeScore": 3,
                "awayScore": 0,
                "homeLogo": "https://media.api-sports.io/football/teams/202.png",
                "awayLogo": "https://media.api-sports.io/football/teams/193.png",
                "prediction": "3 - 2",
                "odds": {
                    "home": 10,
                    "draw": 45,
                    "away": 45
                },
                "advice": "Combo Double chance : draw or PEC Zwolle and +1.5 goals",
                "comparison": {
                    "form": {
                        "home": 56,
                        "away": 44
                    },
                    "att": {
                        "home": 63,
                        "away": 38
                    },
                    "def": {
                        "home": 56,
                        "away": 44
                    },
                    "poisson": {
                        "home": 57,
                        "away": 43
                    },
                    "h2h": {
                        "home": 36,
                        "away": 64
                    },
                    "goals": {
                        "home": 38,
                        "away": 63
                    }
                },
                "goals": [
                    {
                        "minute": "20",
                        "player": "Thom Van Bergen",
                        "team": "home"
                    },
                    {
                        "minute": "43",
                        "player": "Jorg Schreuders",
                        "team": "home"
                    },
                    {
                        "minute": "68",
                        "player": "Tygo Land",
                        "team": "home"
                    }
                ],
                "cards": [
                    {
                        "minute": "79",
                        "player": "Sherel Floranus",
                        "team": "away",
                        "type": "yellow"
                    },
                    {
                        "minute": "79",
                        "player": "Koen Kostons",
                        "team": "away",
                        "type": "yellow"
                    }
                ]
            },
            {
                "league": "Bundesliga",
                "date": "2026-09-19",
                "time": "01:30",
                "home": "Bayern München",
                "away": "Union Berlin",
                "stadium": "Allianz Arena",
                "round": "Pekan 4",
                "statusCode": "FT",
                "minuteDisplay": "FT",
                "homeScore": 7,
                "awayScore": 0,
                "homeLogo": "https://media.api-sports.io/football/teams/157.png",
                "awayLogo": "https://media.api-sports.io/football/teams/182.png",
                "prediction": "3 - 1",
                "odds": {
                    "home": 50,
                    "draw": 50,
                    "away": 33
                },
                "advice": "Combo Winner : Bayern München and +2.5 goals",
                "comparison": {
                    "form": {
                        "home": 88,
                        "away": 13
                    },
                    "att": {
                        "home": 64,
                        "away": 36
                    },
                    "def": {
                        "home": 83,
                        "away": 17
                    },
                    "poisson": {
                        "home": 100,
                        "away": 0
                    },
                    "h2h": {
                        "home": 85,
                        "away": 15
                    },
                    "goals": {
                        "home": 72,
                        "away": 28
                    }
                },
                "goals": [
                    {
                        "minute": "18",
                        "player": "Jamal Musiala",
                        "team": "home"
                    },
                    {
                        "minute": "39",
                        "player": "Harry Kane",
                        "team": "home"
                    },
                    {
                        "minute": "43",
                        "player": "Michael Olise",
                        "team": "home"
                    },
                    {
                        "minute": "54",
                        "player": "Harry Kane",
                        "team": "home"
                    },
                    {
                        "minute": "70",
                        "player": "Ismael Saibari",
                        "team": "home"
                    },
                    {
                        "minute": "73",
                        "player": "Michael Olise",
                        "team": "home"
                    },
                    {
                        "minute": "76",
                        "player": "Michael Olise",
                        "team": "home"
                    }
                ],
                "cards": [
                    {
                        "minute": "38",
                        "player": "Felix Uduokhai",
                        "team": "away",
                        "type": "yellow"
                    },
                    {
                        "minute": "42",
                        "player": "Rani Khedira",
                        "team": "away",
                        "type": "yellow"
                    },
                    {
                        "minute": "45+2",
                        "player": "Dayot Upamecano",
                        "team": "home",
                        "type": "yellow"
                    },
                    {
                        "minute": "78",
                        "player": "Livan Burcu",
                        "team": "away",
                        "type": "yellow"
                    }
                ]
            },
            {
                "league": "Ligue 1",
                "date": "2026-09-19",
                "time": "01:45",
                "home": "Monaco",
                "away": "Lens",
                "stadium": "Stade Louis II",
                "round": "Pekan 5",
                "statusCode": "FT",
                "minuteDisplay": "FT",
                "homeScore": 2,
                "awayScore": 1,
                "homeLogo": "https://media.api-sports.io/football/teams/91.png",
                "awayLogo": "https://media.api-sports.io/football/teams/116.png",
                "prediction": "2 - 1",
                "odds": {
                    "home": 45,
                    "draw": 45,
                    "away": 10
                },
                "advice": "Double chance : Monaco or draw",
                "comparison": {
                    "form": {
                        "home": 71,
                        "away": 29
                    },
                    "att": {
                        "home": 43,
                        "away": 57
                    },
                    "def": {
                        "home": 78,
                        "away": 22
                    },
                    "poisson": {
                        "home": 100,
                        "away": 0
                    },
                    "h2h": {
                        "home": 50,
                        "away": 50
                    },
                    "goals": {
                        "home": 38,
                        "away": 62
                    }
                },
                "goals": [
                    {
                        "minute": "32",
                        "player": "Paris Brunner",
                        "team": "home"
                    },
                    {
                        "minute": "57",
                        "player": "Matthieu Udol",
                        "team": "away"
                    },
                    {
                        "minute": "84",
                        "player": "Jonathan Gradit",
                        "team": "away"
                    }
                ],
                "cards": [
                    {
                        "minute": "53",
                        "player": "Florian Thauvin",
                        "team": "away",
                        "type": "yellow"
                    },
                    {
                        "minute": "71",
                        "player": "Lamine Camara",
                        "team": "home",
                        "type": "yellow"
                    }
                ]
            },
            {
                "league": "Jupiler Pro League",
                "date": "2026-09-19",
                "time": "01:45",
                "home": "Gent",
                "away": "Standard Liege",
                "stadium": "Ghelamco Arena",
                "round": "Pekan 7",
                "statusCode": "FT",
                "minuteDisplay": "FT",
                "homeScore": 2,
                "awayScore": 1,
                "homeLogo": "https://media.api-sports.io/football/teams/631.png",
                "awayLogo": "https://media.api-sports.io/football/teams/733.png",
                "prediction": "2 - 1",
                "odds": {
                    "home": 45,
                    "draw": 45,
                    "away": 10
                },
                "advice": "Double chance : Gent or draw",
                "comparison": {
                    "form": {
                        "home": 57,
                        "away": 43
                    },
                    "att": {
                        "home": 47,
                        "away": 53
                    },
                    "def": {
                        "home": 73,
                        "away": 27
                    },
                    "poisson": {
                        "home": 81,
                        "away": 19
                    },
                    "h2h": {
                        "home": 100,
                        "away": 0
                    },
                    "goals": {
                        "home": 95,
                        "away": 5
                    }
                },
                "goals": [
                    {
                        "minute": "31",
                        "player": "Josue Vergara",
                        "team": "home"
                    },
                    {
                        "minute": "45+3",
                        "player": "Casper Nielsen",
                        "team": "away"
                    },
                    {
                        "minute": "83",
                        "player": "Christian Burgess",
                        "team": "home"
                    }
                ],
                "cards": [
                    {
                        "minute": "76",
                        "player": "Siebe Van Der Heyden",
                        "team": "home",
                        "type": "yellow"
                    }
                ]
            },
            {
                "league": "Serie A",
                "date": "2026-09-19",
                "time": "01:45",
                "home": "Monza",
                "away": "Sassuolo",
                "stadium": "U-Power Stadium",
                "round": "Pekan 5",
                "statusCode": "FT",
                "minuteDisplay": "FT",
                "homeScore": 2,
                "awayScore": 1,
                "homeLogo": "https://media.api-sports.io/football/teams/1579.png",
                "awayLogo": "https://media.api-sports.io/football/teams/488.png",
                "prediction": "2 - 2",
                "odds": {
                    "home": 35,
                    "draw": 35,
                    "away": 30
                },
                "advice": "Combo Double chance : Monza or draw and +1.5 goals",
                "comparison": {
                    "form": {
                        "home": 13,
                        "away": 88
                    },
                    "att": {
                        "home": 43,
                        "away": 57
                    },
                    "def": {
                        "home": 39,
                        "away": 61
                    },
                    "poisson": {
                        "home": 48,
                        "away": 52
                    },
                    "h2h": {
                        "home": 85,
                        "away": 15
                    },
                    "goals": {
                        "home": 64,
                        "away": 36
                    }
                },
                "goals": [
                    {
                        "minute": "51",
                        "player": "G. Varela",
                        "team": "home"
                    },
                    {
                        "minute": "63",
                        "player": "G. Varela",
                        "team": "home"
                    },
                    {
                        "minute": "88",
                        "player": "V. Adzic",
                        "team": "away"
                    }
                ],
                "cards": [
                    {
                        "minute": "30",
                        "player": "Eddy Kouadio",
                        "team": "home",
                        "type": "yellow"
                    },
                    {
                        "minute": "74",
                        "player": "Michael Folorunsho",
                        "team": "home",
                        "type": "yellow"
                    },
                    {
                        "minute": "85",
                        "player": "Samuele Birindelli",
                        "team": "home",
                        "type": "yellow"
                    },
                    {
                        "minute": "85",
                        "player": "Luca Lipani",
                        "team": "away",
                        "type": "yellow"
                    },
                    {
                        "minute": "90+2",
                        "player": "Gustavo Varela",
                        "team": "home",
                        "type": "yellow"
                    }
                ]
            },
            {
                "league": "Premier League",
                "date": "2026-09-19",
                "time": "02:00",
                "home": "Brentford",
                "away": "Chelsea",
                "stadium": "Gtech Community Stadium",
                "round": "Pekan 5",
                "statusCode": "FT",
                "minuteDisplay": "FT",
                "homeScore": 3,
                "awayScore": 0,
                "homeLogo": "https://media.api-sports.io/football/teams/55.png",
                "awayLogo": "https://media.api-sports.io/football/teams/49.png",
                "prediction": "2 - 3",
                "odds": {
                    "home": 10,
                    "draw": 45,
                    "away": 45
                },
                "advice": "Double chance : draw or Chelsea",
                "comparison": {
                    "form": {
                        "home": 46,
                        "away": 54
                    },
                    "att": {
                        "home": 41,
                        "away": 59
                    },
                    "def": {
                        "home": 69,
                        "away": 31
                    },
                    "poisson": {
                        "home": 79,
                        "away": 21
                    },
                    "h2h": {
                        "home": 25,
                        "away": 75
                    },
                    "goals": {
                        "home": 38,
                        "away": 62
                    }
                },
                "goals": [
                    {
                        "minute": "61",
                        "player": "Jaidon Anthony",
                        "team": "home"
                    },
                    {
                        "minute": "83",
                        "player": "Igor Thiago",
                        "team": "home"
                    },
                    {
                        "minute": "90+4",
                        "player": "Fabio Carvalho",
                        "team": "home"
                    }
                ],
                "cards": [
                    {
                        "minute": "84",
                        "player": "Igor Thiago",
                        "team": "home",
                        "type": "yellow"
                    },
                    {
                        "minute": "85",
                        "player": "Mamadou Sangare",
                        "team": "home",
                        "type": "yellow"
                    }
                ]
            },
            {
                "league": "LaLiga",
                "date": "2026-09-19",
                "time": "02:00",
                "home": "Espanyol",
                "away": "Elche",
                "stadium": "RCDE Stadium",
                "round": "Pekan 7",
                "statusCode": "FT",
                "minuteDisplay": "FT",
                "homeScore": 1,
                "awayScore": 3,
                "homeLogo": "https://media.api-sports.io/football/teams/540.png",
                "awayLogo": "https://media.api-sports.io/football/teams/797.png",
                "prediction": "2 - 1",
                "odds": {
                    "home": 45,
                    "draw": 45,
                    "away": 10
                },
                "advice": "Double chance : Espanyol or draw",
                "comparison": {
                    "form": {
                        "home": 80,
                        "away": 20
                    },
                    "att": {
                        "home": 46,
                        "away": 54
                    },
                    "def": {
                        "home": 68,
                        "away": 32
                    },
                    "poisson": {
                        "home": 62,
                        "away": 38
                    },
                    "h2h": {
                        "home": 85,
                        "away": 15
                    },
                    "goals": {
                        "home": 67,
                        "away": 33
                    }
                },
                "goals": [
                    {
                        "minute": "26",
                        "player": "Fernando Niño Rodríguez",
                        "team": "away"
                    },
                    {
                        "minute": "29",
                        "player": "Fernando Niño Rodríguez",
                        "team": "away"
                    },
                    {
                        "minute": "72",
                        "player": "Víctor Chust",
                        "team": "away"
                    },
                    {
                        "minute": "78",
                        "player": "Germán Valera",
                        "team": "away"
                    }
                ],
                "cards": [
                    {
                        "minute": "6",
                        "player": "Federico Redondo Solari",
                        "team": "away",
                        "type": "red"
                    },
                    {
                        "minute": "22",
                        "player": "Fernando Niño Rodríguez",
                        "team": "away",
                        "type": "yellow"
                    },
                    {
                        "minute": "45+4",
                        "player": "Eduardo Expósito Jaén",
                        "team": "home",
                        "type": "yellow"
                    },
                    {
                        "minute": "82",
                        "player": "Clemens Riedel",
                        "team": "home",
                        "type": "yellow"
                    },
                    {
                        "minute": "90+1",
                        "player": "Lucas Cepeda",
                        "team": "away",
                        "type": "yellow"
                    }
                ]
            },
            {
                "league": "MLS",
                "date": "2026-09-19",
                "time": "06:30",
                "home": "New York City FC",
                "away": "New York Red Bulls",
                "stadium": "Yankee Stadium",
                "round": "Pekan 26",
                "statusCode": "FT",
                "minuteDisplay": "FT",
                "homeScore": 0,
                "awayScore": 1,
                "homeLogo": "https://media.api-sports.io/football/teams/1604.png",
                "awayLogo": "https://media.api-sports.io/football/teams/1602.png",
                "prediction": "2 - 1",
                "odds": {
                    "home": 45,
                    "draw": 45,
                    "away": 10
                },
                "advice": "Double chance : New York City FC or draw",
                "comparison": {
                    "form": {
                        "home": 55,
                        "away": 45
                    },
                    "att": {
                        "home": 63,
                        "away": 38
                    },
                    "def": {
                        "home": 60,
                        "away": 40
                    },
                    "poisson": {
                        "home": 62,
                        "away": 38
                    },
                    "h2h": {
                        "home": 71,
                        "away": 29
                    },
                    "goals": {
                        "home": 60,
                        "away": 40
                    }
                },
                "goals": [
                    {
                        "minute": "57",
                        "player": "J. Hall",
                        "team": "away"
                    }
                ],
                "cards": [
                    {
                        "minute": "6",
                        "player": "A. Mehmeti",
                        "team": "away",
                        "type": "yellow"
                    },
                    {
                        "minute": "22",
                        "player": "C. Cowell",
                        "team": "away",
                        "type": "yellow"
                    },
                    {
                        "minute": "30",
                        "player": "N. Cavallo",
                        "team": "home",
                        "type": "yellow"
                    },
                    {
                        "minute": "40",
                        "player": "M. Sofo",
                        "team": "away",
                        "type": "yellow"
                    },
                    {
                        "minute": "55",
                        "player": "A. O'Neill",
                        "team": "home",
                        "type": "yellow"
                    }
                ]
            },
            {
                "league": "Liga MX",
                "date": "2026-09-19",
                "time": "08:00",
                "home": "Puebla",
                "away": "Atlante FC",
                "stadium": "Estadio Cuauhtémoc",
                "round": "Apertura - 9",
                "statusCode": "FT",
                "minuteDisplay": "FT",
                "homeScore": 1,
                "awayScore": 1,
                "homeLogo": "https://media.api-sports.io/football/teams/2291.png",
                "awayLogo": "https://media.api-sports.io/football/teams/2312.png",
                "prediction": "1 - 1",
                "odds": {
                    "home": 35,
                    "draw": 35,
                    "away": 30
                },
                "advice": "Double chance : Puebla or draw",
                "comparison": {
                    "form": {
                        "home": 75,
                        "away": 25
                    },
                    "att": {
                        "home": 78,
                        "away": 22
                    },
                    "def": {
                        "home": 50,
                        "away": 50
                    },
                    "poisson": {
                        "home": 56,
                        "away": 44
                    },
                    "h2h": {
                        "home": 0,
                        "away": 100
                    },
                    "goals": {
                        "home": 0,
                        "away": 100
                    }
                },
                "goals": [
                    {
                        "minute": "41",
                        "player": "Walter Portales",
                        "team": "away"
                    },
                    {
                        "minute": "53",
                        "player": "Mathías Adrián Tomás Borges",
                        "team": "home"
                    }
                ],
                "cards": [
                    {
                        "minute": "47",
                        "player": "Oscar Villa",
                        "team": "home",
                        "type": "yellow"
                    }
                ]
            },
            {
                "league": "Liga de Expansion MX",
                "date": "2026-09-19",
                "time": "08:00",
                "home": "Tepatitlán",
                "away": "Mineros de Zacatecas",
                "stadium": "",
                "round": "Apertura - 9",
                "statusCode": "FT",
                "minuteDisplay": "FT",
                "homeScore": 0,
                "awayScore": 1,
                "homeLogo": "https://media.api-sports.io/football/teams/14279.png",
                "awayLogo": "https://media.api-sports.io/football/teams/2299.png",
                "prediction": "1 - 3",
                "odds": {
                    "home": 10,
                    "draw": 45,
                    "away": 45
                },
                "advice": "Combo Double chance : draw or Mineros de Zacatecas and +1.5 goals",
                "comparison": {
                    "form": {
                        "home": 33,
                        "away": 67
                    },
                    "att": {
                        "home": 31,
                        "away": 69
                    },
                    "def": {
                        "home": 33,
                        "away": 67
                    },
                    "poisson": {
                        "home": 34,
                        "away": 66
                    },
                    "h2h": {
                        "home": 75,
                        "away": 25
                    },
                    "goals": {
                        "home": 65,
                        "away": 35
                    }
                },
                "goals": [
                    {
                        "minute": "69",
                        "player": "J. Avila",
                        "team": "away"
                    }
                ],
                "cards": [
                    {
                        "minute": "59",
                        "player": "O. Mazatan",
                        "team": "away",
                        "type": "yellow"
                    },
                    {
                        "minute": "80",
                        "player": "A. Cardenas",
                        "team": "home",
                        "type": "yellow"
                    },
                    {
                        "minute": "84",
                        "player": "T. Arevalo",
                        "team": "home",
                        "type": "yellow"
                    },
                    {
                        "minute": "90+6",
                        "player": "M. Cordero",
                        "team": "away",
                        "type": "red"
                    }
                ]
            },
            {
                "league": "Liga de Expansion MX",
                "date": "2026-09-19",
                "time": "08:00",
                "home": "Piratas",
                "away": "Venados FC",
                "stadium": "",
                "round": "Apertura - 9",
                "statusCode": "FT",
                "minuteDisplay": "FT",
                "homeScore": 2,
                "awayScore": 1,
                "homeLogo": "https://media.api-sports.io/football/teams/27935.png",
                "awayLogo": "https://media.api-sports.io/football/teams/2311.png",
                "prediction": "3 - 2",
                "odds": {
                    "home": 45,
                    "draw": 45,
                    "away": 10
                },
                "advice": "Combo Double chance : Piratas or draw and +1.5 goals",
                "comparison": {
                    "form": {
                        "home": 45,
                        "away": 55
                    },
                    "att": {
                        "home": 30,
                        "away": 70
                    },
                    "def": {
                        "home": 70,
                        "away": 30
                    },
                    "poisson": {
                        "home": 79,
                        "away": 21
                    },
                    "h2h": {
                        "home": 0,
                        "away": 0
                    },
                    "goals": {
                        "home": 0,
                        "away": 0
                    }
                },
                "goals": [
                    {
                        "minute": "36",
                        "player": "J. Gamboa",
                        "team": "home"
                    },
                    {
                        "minute": "54",
                        "player": "K. Y. Jaime Sanchez",
                        "team": "home"
                    },
                    {
                        "minute": "63",
                        "player": "J. Clemente",
                        "team": "home"
                    }
                ],
                "cards": [
                    {
                        "minute": "2",
                        "player": "Ochoa Brandon",
                        "team": "away",
                        "type": "yellow"
                    },
                    {
                        "minute": "24",
                        "player": "S. Lora",
                        "team": "away",
                        "type": "yellow"
                    },
                    {
                        "minute": "45+6",
                        "player": "S. Saucedo",
                        "team": "away",
                        "type": "yellow"
                    },
                    {
                        "minute": "46",
                        "player": "R. Gonzalez",
                        "team": "home",
                        "type": "yellow"
                    },
                    {
                        "minute": "52",
                        "player": "F. Garcia",
                        "team": "home",
                        "type": "yellow"
                    },
                    {
                        "minute": "64",
                        "player": "C. Fernandez",
                        "team": "home",
                        "type": "yellow"
                    },
                    {
                        "minute": "76",
                        "player": "O. Soto",
                        "team": "home",
                        "type": "yellow"
                    },
                    {
                        "minute": "80",
                        "player": "U. Garcia",
                        "team": "home",
                        "type": "yellow"
                    },
                    {
                        "minute": "87",
                        "player": "A. Dominguez",
                        "team": "away",
                        "type": "red"
                    }
                ]
            },
            {
                "league": "Liga MX",
                "date": "2026-09-19",
                "time": "10:00",
                "home": "FC Juarez",
                "away": "Tigres UANL",
                "stadium": "Estadio Olímpico Benito Juárez",
                "round": "Apertura - 9",
                "statusCode": "FT",
                "minuteDisplay": "FT",
                "homeScore": 2,
                "awayScore": 0,
                "homeLogo": "https://media.api-sports.io/football/teams/2298.png",
                "awayLogo": "https://media.api-sports.io/football/teams/2279.png",
                "prediction": "1 - 2",
                "odds": {
                    "home": 10,
                    "draw": 45,
                    "away": 45
                },
                "advice": "Double chance : draw or Tigres UANL",
                "comparison": {
                    "form": {
                        "home": 0,
                        "away": 100
                    },
                    "att": {
                        "home": 43,
                        "away": 57
                    },
                    "def": {
                        "home": 16,
                        "away": 84
                    },
                    "poisson": {
                        "home": 26,
                        "away": 74
                    },
                    "h2h": {
                        "home": 40,
                        "away": 60
                    },
                    "goals": {
                        "home": 43,
                        "away": 57
                    }
                },
                "goals": [
                    {
                        "minute": "66",
                        "player": "Oscar Estupiñan",
                        "team": "home"
                    },
                    {
                        "minute": "79",
                        "player": "Oscar Estupiñan",
                        "team": "home"
                    }
                ],
                "cards": [
                    {
                        "minute": "45",
                        "player": "Denzell Garcia",
                        "team": "home",
                        "type": "yellow"
                    },
                    {
                        "minute": "90+4",
                        "player": "Guillermo Martinez",
                        "team": "away",
                        "type": "yellow"
                    }
                ]
            },
            {
                "league": "Liga de Expansion MX",
                "date": "2026-09-19",
                "time": "10:00",
                "home": "CA La Paz",
                "away": "Correcaminos Uat",
                "stadium": "Estadio Guaycura",
                "round": "Apertura - 9",
                "statusCode": "FT",
                "minuteDisplay": "FT",
                "homeScore": 3,
                "awayScore": 1,
                "homeLogo": "https://media.api-sports.io/football/teams/19024.png",
                "awayLogo": "https://media.api-sports.io/football/teams/2313.png",
                "prediction": "2 - 1",
                "odds": {
                    "home": 45,
                    "draw": 45,
                    "away": 10
                },
                "advice": "Double chance : CA La Paz or draw",
                "comparison": {
                    "form": {
                        "home": 69,
                        "away": 31
                    },
                    "att": {
                        "home": 56,
                        "away": 44
                    },
                    "def": {
                        "home": 71,
                        "away": 29
                    },
                    "poisson": {
                        "home": 65,
                        "away": 35
                    },
                    "h2h": {
                        "home": 50,
                        "away": 50
                    },
                    "goals": {
                        "home": 47,
                        "away": 53
                    }
                },
                "goals": [
                    {
                        "minute": "16",
                        "player": "C. Robles",
                        "team": "home"
                    },
                    {
                        "minute": "18",
                        "player": "A. Robles",
                        "team": "home"
                    },
                    {
                        "minute": "52",
                        "player": "A. Robles",
                        "team": "home"
                    },
                    {
                        "minute": "64",
                        "player": "C. Robles",
                        "team": "home"
                    }
                ],
                "cards": [
                    {
                        "minute": "34",
                        "player": "M. Barragan",
                        "team": "home",
                        "type": "yellow"
                    },
                    {
                        "minute": "40",
                        "player": "O. Islas",
                        "team": "away",
                        "type": "yellow"
                    },
                    {
                        "minute": "53",
                        "player": "O. Perez",
                        "team": "away",
                        "type": "yellow"
                    },
                    {
                        "minute": "56",
                        "player": "E. Torres",
                        "team": "home",
                        "type": "yellow"
                    },
                    {
                        "minute": "59",
                        "player": "F. Illescas",
                        "team": "home",
                        "type": "yellow"
                    },
                    {
                        "minute": "60",
                        "player": "T. Sandoval",
                        "team": "away",
                        "type": "yellow"
                    }
                ]
            },
            {
                "league": "Liga 1 (Indonesia)",
                "date": "2026-09-19",
                "time": "15:30",
                "home": "PSM Makassar",
                "away": "Persita",
                "stadium": "Gelora BJ Habibie",
                "round": "Pekan 3",
                "statusCode": "FT",
                "minuteDisplay": "FT",
                "homeScore": 2,
                "awayScore": 2,
                "homeLogo": "https://media.api-sports.io/football/teams/2441.png",
                "awayLogo": "https://media.api-sports.io/football/teams/4244.png",
                "prediction": "2 - 3",
                "odds": {
                    "home": 10,
                    "draw": 45,
                    "away": 45
                },
                "advice": "Combo Double chance : draw or Persita and +1.5 goals",
                "comparison": {
                    "form": {
                        "home": 20,
                        "away": 80
                    },
                    "att": {
                        "home": 50,
                        "away": 50
                    },
                    "def": {
                        "home": 33,
                        "away": 67
                    },
                    "poisson": {
                        "home": 44,
                        "away": 56
                    },
                    "h2h": {
                        "home": 40,
                        "away": 60
                    },
                    "goals": {
                        "home": 53,
                        "away": 47
                    }
                },
                "goals": [
                    {
                        "minute": "17",
                        "player": "A. Andrejic",
                        "team": "away"
                    },
                    {
                        "minute": "72",
                        "player": "A. Raehan",
                        "team": "home"
                    },
                    {
                        "minute": "74",
                        "player": "Tyronne",
                        "team": "away"
                    },
                    {
                        "minute": "83",
                        "player": "S. Jevtoski",
                        "team": "home"
                    }
                ],
                "cards": [
                    {
                        "minute": "1",
                        "player": "A. Raehan",
                        "team": "home",
                        "type": "yellow"
                    },
                    {
                        "minute": "19",
                        "player": "S. Jevtoski",
                        "team": "home",
                        "type": "yellow"
                    },
                    {
                        "minute": "55",
                        "player": "R. Pratama",
                        "team": "home",
                        "type": "yellow"
                    },
                    {
                        "minute": "63",
                        "player": "D. Lagator",
                        "team": "home",
                        "type": "yellow"
                    }
                ]
            },
            {
                "league": "Liga 1 (Indonesia)",
                "date": "2026-09-19",
                "time": "15:30",
                "home": "Persebaya Surabaya",
                "away": "Garudayaksa",
                "stadium": "Gelora Bung Tomo Stadium",
                "round": "Pekan 3",
                "statusCode": "FT",
                "minuteDisplay": "FT",
                "homeScore": 1,
                "awayScore": 1,
                "homeLogo": "https://media.api-sports.io/football/teams/2446.png",
                "awayLogo": "https://media.api-sports.io/football/teams/26645.png",
                "prediction": "2 - 1",
                "odds": {
                    "home": 50,
                    "draw": 50,
                    "away": 33
                },
                "advice": "Combo Double chance : Persebaya Surabaya or draw and -3.5 goals",
                "comparison": {
                    "form": {
                        "home": 80,
                        "away": 20
                    },
                    "att": {
                        "home": 67,
                        "away": 33
                    },
                    "def": {
                        "home": 75,
                        "away": 25
                    },
                    "poisson": {
                        "home": 100,
                        "away": 0
                    },
                    "h2h": {
                        "home": 0,
                        "away": 0
                    },
                    "goals": {
                        "home": 0,
                        "away": 0
                    }
                },
                "goals": [
                    {
                        "minute": "85",
                        "player": "Alex",
                        "team": "home"
                    },
                    {
                        "minute": "89",
                        "player": "H. Hehanusa",
                        "team": "away"
                    }
                ],
                "cards": [
                    {
                        "minute": "38",
                        "player": "A. Setiawan",
                        "team": "away",
                        "type": "yellow"
                    },
                    {
                        "minute": "47",
                        "player": "A. Kaka",
                        "team": "away",
                        "type": "yellow"
                    },
                    {
                        "minute": "59",
                        "player": "F. Stamenkovic",
                        "team": "away",
                        "type": "yellow"
                    },
                    {
                        "minute": "70",
                        "player": "Y. Fernandes",
                        "team": "home",
                        "type": "yellow"
                    },
                    {
                        "minute": "80",
                        "player": "Jefferson",
                        "team": "home",
                        "type": "yellow"
                    },
                    {
                        "minute": "81",
                        "player": "B. Rubio",
                        "team": "away",
                        "type": "yellow"
                    }
                ]
            },
            {
                "league": "Premier League",
                "date": "2026-09-19",
                "time": "18:30",
                "home": "Tottenham",
                "away": "Aston Villa",
                "stadium": "Tottenham Hotspur Stadium",
                "round": "Pekan 5",
                "statusCode": "FT",
                "minuteDisplay": "FT",
                "homeScore": 2,
                "awayScore": 3,
                "homeLogo": "https://media.api-sports.io/football/teams/47.png",
                "awayLogo": "https://media.api-sports.io/football/teams/66.png",
                "prediction": "1 - 2",
                "odds": {
                    "home": 10,
                    "draw": 45,
                    "away": 45
                },
                "advice": "Combo Double chance : draw or Aston Villa and -3.5 goals",
                "comparison": {
                    "form": {
                        "home": 67,
                        "away": 33
                    },
                    "att": {
                        "home": 0,
                        "away": 100
                    },
                    "def": {
                        "home": 58,
                        "away": 42
                    },
                    "poisson": {
                        "home": 0,
                        "away": 0
                    },
                    "h2h": {
                        "home": 20,
                        "away": 80
                    },
                    "goals": {
                        "home": 36,
                        "away": 64
                    }
                },
                "goals": [
                    {
                        "minute": "45+4",
                        "player": "Johan Manzambi",
                        "team": "away"
                    },
                    {
                        "minute": "67",
                        "player": "Nicolas Jackson",
                        "team": "away"
                    },
                    {
                        "minute": "79",
                        "player": "Emiliano Buendía",
                        "team": "away"
                    },
                    {
                        "minute": "86",
                        "player": "Conor Gallagher",
                        "team": "home"
                    },
                    {
                        "minute": "90+8",
                        "player": "Jan Paul van Hecke",
                        "team": "home"
                    }
                ],
                "cards": [
                    {
                        "minute": "45+7",
                        "player": "Jan Paul van Hecke",
                        "team": "home",
                        "type": "yellow"
                    },
                    {
                        "minute": "46",
                        "player": "Nicolas Jackson",
                        "team": "away",
                        "type": "yellow"
                    },
                    {
                        "minute": "90+2",
                        "player": "Matty Cash",
                        "team": "away",
                        "type": "yellow"
                    },
                    {
                        "minute": "90+2",
                        "player": "Unai Emery Etxegoien",
                        "team": "away",
                        "type": "yellow"
                    }
                ]
            },
            {
                "league": "LaLiga",
                "date": "2026-09-19",
                "time": "19:00",
                "home": "Osasuna",
                "away": "Rayo Vallecano",
                "stadium": "Estadio El Sadar",
                "round": "Pekan 7",
                "statusCode": "FT",
                "minuteDisplay": "FT",
                "homeScore": 1,
                "awayScore": 1,
                "homeLogo": "https://media.api-sports.io/football/teams/727.png",
                "awayLogo": "https://media.api-sports.io/football/teams/728.png",
                "prediction": "2 - 3",
                "odds": {
                    "home": 10,
                    "draw": 45,
                    "away": 45
                },
                "advice": "Double chance : draw or Rayo Vallecano",
                "comparison": {
                    "form": {
                        "home": 46,
                        "away": 54
                    },
                    "att": {
                        "home": 36,
                        "away": 64
                    },
                    "def": {
                        "home": 52,
                        "away": 48
                    },
                    "poisson": {
                        "home": 53,
                        "away": 47
                    },
                    "h2h": {
                        "home": 50,
                        "away": 50
                    },
                    "goals": {
                        "home": 53,
                        "away": 47
                    }
                },
                "goals": [
                    {
                        "minute": "16",
                        "player": "Ante Budimir",
                        "team": "home"
                    },
                    {
                        "minute": "50",
                        "player": "Sergio Camello",
                        "team": "away"
                    }
                ],
                "cards": [
                    {
                        "minute": "21",
                        "player": "Asier Osambela",
                        "team": "home",
                        "type": "yellow"
                    },
                    {
                        "minute": "24",
                        "player": "Pathé Ciss",
                        "team": "away",
                        "type": "yellow"
                    },
                    {
                        "minute": "67",
                        "player": "Jon Moncayola",
                        "team": "home",
                        "type": "yellow"
                    },
                    {
                        "minute": "77",
                        "player": "Sergio Herrera",
                        "team": "home",
                        "type": "yellow"
                    },
                    {
                        "minute": "90+6",
                        "player": "Alexandre Zurawski",
                        "team": "away",
                        "type": "yellow"
                    }
                ]
            },
            {
                "league": "Liga 1 (Indonesia)",
                "date": "2026-09-19",
                "time": "19:00",
                "home": "Bhayangkara FC",
                "away": "Isenmulang Kalteng",
                "stadium": "Sumpah Pemuda",
                "round": "Pekan 3",
                "statusCode": "FT",
                "minuteDisplay": "FT",
                "homeScore": 2,
                "awayScore": 0,
                "homeLogo": "https://media.api-sports.io/football/teams/2443.png",
                "awayLogo": "https://media.api-sports.io/football/teams/24993.png",
                "prediction": "3 - 1",
                "odds": {
                    "home": 50,
                    "draw": 50,
                    "away": 33
                },
                "advice": "Double chance : Bhayangkara FC or draw",
                "comparison": {
                    "form": {
                        "home": 100,
                        "away": 0
                    },
                    "att": {
                        "home": 75,
                        "away": 25
                    },
                    "def": {
                        "home": 73,
                        "away": 27
                    },
                    "poisson": {
                        "home": 87,
                        "away": 13
                    },
                    "h2h": {
                        "home": 80,
                        "away": 20
                    },
                    "goals": {
                        "home": 67,
                        "away": 33
                    }
                },
                "goals": [
                    {
                        "minute": "55",
                        "player": "Allano",
                        "team": "home"
                    },
                    {
                        "minute": "90+5",
                        "player": "T. Ichsan",
                        "team": "home"
                    }
                ],
                "cards": [
                    {
                        "minute": "61",
                        "player": "Galuh Nata",
                        "team": "away",
                        "type": "yellow"
                    },
                    {
                        "minute": "65",
                        "player": "M. Ocampo",
                        "team": "home",
                        "type": "yellow"
                    },
                    {
                        "minute": "90+4",
                        "player": "T. Ichsan",
                        "team": "home",
                        "type": "yellow"
                    }
                ]
            },
            {
                "league": "Liga 1 (Indonesia)",
                "date": "2026-09-19",
                "time": "19:00",
                "home": "Persija",
                "away": "Java United",
                "stadium": "Bung Karno Stadium",
                "round": "Pekan 3",
                "statusCode": "FT",
                "minuteDisplay": "FT",
                "homeScore": 1,
                "awayScore": 0,
                "homeLogo": "https://media.api-sports.io/football/teams/10134.png",
                "awayLogo": "https://media.api-sports.io/football/teams/22409.png",
                "prediction": "2 - 1",
                "odds": {
                    "home": 45,
                    "draw": 45,
                    "away": 10
                },
                "advice": "Double chance : Persija or draw",
                "comparison": {
                    "form": {
                        "home": 86,
                        "away": 14
                    },
                    "att": {
                        "home": 50,
                        "away": 50
                    },
                    "def": {
                        "home": 80,
                        "away": 20
                    },
                    "poisson": {
                        "home": 70,
                        "away": 30
                    },
                    "h2h": {
                        "home": 80,
                        "away": 20
                    },
                    "goals": {
                        "home": 57,
                        "away": 43
                    }
                },
                "goals": [
                    {
                        "minute": "13",
                        "player": "A. Abdulmanan",
                        "team": "home"
                    }
                ],
                "cards": [
                    {
                        "minute": "28",
                        "player": "R. Pankov",
                        "team": "home",
                        "type": "yellow"
                    },
                    {
                        "minute": "50",
                        "player": "K. Yoshino",
                        "team": "home",
                        "type": "yellow"
                    },
                    {
                        "minute": "51",
                        "player": "T. Setiawan",
                        "team": "away",
                        "type": "yellow"
                    },
                    {
                        "minute": "52",
                        "player": "Gustavo",
                        "team": "away",
                        "type": "yellow"
                    },
                    {
                        "minute": "87",
                        "player": "R. Ridho",
                        "team": "home",
                        "type": "yellow"
                    }
                ]
            },
            {
                "league": "Serie A",
                "date": "2026-09-19",
                "time": "20:00",
                "home": "Udinese",
                "away": "Cagliari",
                "stadium": "Bluenergy Stadium",
                "round": "Pekan 5",
                "statusCode": "FT",
                "minuteDisplay": "FT",
                "homeScore": 0,
                "awayScore": 1,
                "homeLogo": "https://media.api-sports.io/football/teams/494.png",
                "awayLogo": "https://media.api-sports.io/football/teams/490.png",
                "prediction": "1 - 2",
                "odds": {
                    "home": 35,
                    "draw": 35,
                    "away": 30
                },
                "advice": "Double chance : Udinese or draw",
                "comparison": {
                    "form": {
                        "home": 31,
                        "away": 69
                    },
                    "att": {
                        "home": 67,
                        "away": 33
                    },
                    "def": {
                        "home": 17,
                        "away": 83
                    },
                    "poisson": {
                        "home": 19,
                        "away": 81
                    },
                    "h2h": {
                        "home": 85,
                        "away": 15
                    },
                    "goals": {
                        "home": 73,
                        "away": 27
                    }
                },
                "goals": [
                    {
                        "minute": "54",
                        "player": "D. Maldini",
                        "team": "away"
                    }
                ],
                "cards": [
                    {
                        "minute": "4",
                        "player": "N. Zaniolo",
                        "team": "home",
                        "type": "yellow"
                    },
                    {
                        "minute": "22",
                        "player": "J. Karlstrom",
                        "team": "home",
                        "type": "yellow"
                    }
                ]
            },
            {
                "league": "Serie A",
                "date": "2026-09-19",
                "time": "20:00",
                "home": "Bologna",
                "away": "Torino",
                "stadium": "Renato Dall'Ara",
                "round": "Pekan 5",
                "statusCode": "FT",
                "minuteDisplay": "FT",
                "homeScore": 1,
                "awayScore": 1,
                "homeLogo": "https://media.api-sports.io/football/teams/500.png",
                "awayLogo": "https://media.api-sports.io/football/teams/503.png",
                "prediction": "1 - 2",
                "odds": {
                    "home": 10,
                    "draw": 45,
                    "away": 45
                },
                "advice": "Double chance : draw or Torino",
                "comparison": {
                    "form": {
                        "home": 25,
                        "away": 75
                    },
                    "att": {
                        "home": 33,
                        "away": 67
                    },
                    "def": {
                        "home": 58,
                        "away": 42
                    },
                    "poisson": {
                        "home": 41,
                        "away": 59
                    },
                    "h2h": {
                        "home": 85,
                        "away": 15
                    },
                    "goals": {
                        "home": 70,
                        "away": 30
                    }
                },
                "goals": [
                    {
                        "minute": "14",
                        "player": "F. Bernardeschi",
                        "team": "home"
                    },
                    {
                        "minute": "77",
                        "player": "S. Kulenovic",
                        "team": "away"
                    }
                ],
                "cards": [
                    {
                        "minute": "30",
                        "player": "D. Braganca",
                        "team": "away",
                        "type": "yellow"
                    },
                    {
                        "minute": "74",
                        "player": "R. Belghali",
                        "team": "away",
                        "type": "yellow"
                    },
                    {
                        "minute": "78",
                        "player": "N. Patterson",
                        "team": "away",
                        "type": "yellow"
                    }
                ]
            },
            {
                "league": "Bundesliga",
                "date": "2026-09-19",
                "time": "20:30",
                "home": "Werder Bremen",
                "away": "FC Augsburg",
                "stadium": "Weser-Stadion",
                "round": "Pekan 4",
                "statusCode": "FT",
                "minuteDisplay": "FT",
                "homeScore": 3,
                "awayScore": 2,
                "homeLogo": "https://media.api-sports.io/football/teams/162.png",
                "awayLogo": "https://media.api-sports.io/football/teams/170.png",
                "prediction": "1 - 3",
                "odds": {
                    "home": 10,
                    "draw": 45,
                    "away": 45
                },
                "advice": "Combo Double chance : draw or FC Augsburg and +1.5 goals",
                "comparison": {
                    "form": {
                        "home": 36,
                        "away": 64
                    },
                    "att": {
                        "home": 36,
                        "away": 64
                    },
                    "def": {
                        "home": 33,
                        "away": 67
                    },
                    "poisson": {
                        "home": 30,
                        "away": 70
                    },
                    "h2h": {
                        "home": 38,
                        "away": 62
                    },
                    "goals": {
                        "home": 46,
                        "away": 54
                    }
                },
                "goals": [
                    {
                        "minute": "18",
                        "player": "Robin Fellhauer",
                        "team": "away"
                    },
                    {
                        "minute": "58",
                        "player": "Calvin Marc Brackelmann",
                        "team": "away"
                    },
                    {
                        "minute": "66",
                        "player": "Marco Grüll",
                        "team": "home"
                    },
                    {
                        "minute": "86",
                        "player": "Niclas Füllkrug",
                        "team": "home"
                    },
                    {
                        "minute": "90+3",
                        "player": "Mitchell Weiser",
                        "team": "home"
                    }
                ],
                "cards": [
                    {
                        "minute": "5",
                        "player": "Han-Noah Massengo",
                        "team": "away",
                        "type": "yellow"
                    },
                    {
                        "minute": "27",
                        "player": "Arthur Augusto De Matos Soares",
                        "team": "home",
                        "type": "yellow"
                    },
                    {
                        "minute": "60",
                        "player": "Marco Grüll",
                        "team": "home",
                        "type": "yellow"
                    },
                    {
                        "minute": "73",
                        "player": "M. Baum",
                        "team": "away",
                        "type": "yellow"
                    },
                    {
                        "minute": "77",
                        "player": "Hennes Behrens",
                        "team": "away",
                        "type": "yellow"
                    }
                ]
            },
            {
                "league": "Bundesliga",
                "date": "2026-09-19",
                "time": "20:30",
                "home": "Borussia Mönchengladbach",
                "away": "FSV Mainz 05",
                "stadium": "Borussia-Park",
                "round": "Pekan 4",
                "statusCode": "FT",
                "minuteDisplay": "FT",
                "homeScore": 3,
                "awayScore": 4,
                "homeLogo": "https://media.api-sports.io/football/teams/163.png",
                "awayLogo": "https://media.api-sports.io/football/teams/164.png",
                "prediction": "1 - 3",
                "odds": {
                    "home": 10,
                    "draw": 45,
                    "away": 45
                },
                "advice": "Combo Winner : FSV Mainz 05 and +3.5 goals",
                "comparison": {
                    "form": {
                        "home": 0,
                        "away": 100
                    },
                    "att": {
                        "home": 33,
                        "away": 67
                    },
                    "def": {
                        "home": 20,
                        "away": 80
                    },
                    "poisson": {
                        "home": 0,
                        "away": 100
                    },
                    "h2h": {
                        "home": 50,
                        "away": 50
                    },
                    "goals": {
                        "home": 45,
                        "away": 55
                    }
                },
                "goals": [
                    {
                        "minute": "11",
                        "player": "Florian Neuhaus",
                        "team": "home"
                    },
                    {
                        "minute": "18",
                        "player": "Phillip Tietz",
                        "team": "away"
                    },
                    {
                        "minute": "45+1",
                        "player": "Sheraldo Becker",
                        "team": "away"
                    },
                    {
                        "minute": "59",
                        "player": "Isac Lidberg",
                        "team": "home"
                    },
                    {
                        "minute": "78",
                        "player": "Eric Martel",
                        "team": "away"
                    },
                    {
                        "minute": "89",
                        "player": "Danny da Costa",
                        "team": "away"
                    },
                    {
                        "minute": "90+5",
                        "player": "Shuto Machino",
                        "team": "home"
                    }
                ],
                "cards": [
                    {
                        "minute": "19",
                        "player": "Lukas Ullrich",
                        "team": "home",
                        "type": "yellow"
                    },
                    {
                        "minute": "55",
                        "player": "Stefan Posch",
                        "team": "away",
                        "type": "yellow"
                    },
                    {
                        "minute": "55",
                        "player": "Philipp Sander",
                        "team": "home",
                        "type": "yellow"
                    },
                    {
                        "minute": "62",
                        "player": "Florian Neuhaus",
                        "team": "home",
                        "type": "yellow"
                    },
                    {
                        "minute": "73",
                        "player": "Phillipp Mwene",
                        "team": "away",
                        "type": "yellow"
                    },
                    {
                        "minute": "87",
                        "player": "Wael Mohya",
                        "team": "home",
                        "type": "yellow"
                    },
                    {
                        "minute": "87",
                        "player": "Kevin Stöger",
                        "team": "home",
                        "type": "yellow"
                    },
                    {
                        "minute": "90+3",
                        "player": "Kacper Potulski",
                        "team": "away",
                        "type": "yellow"
                    },
                    {
                        "minute": "90+3",
                        "player": "Shuto Machino",
                        "team": "home",
                        "type": "yellow"
                    },
                    {
                        "minute": "90+4",
                        "player": "Alexander Schwolow",
                        "team": "away",
                        "type": "yellow"
                    },
                    {
                        "minute": "90+7",
                        "player": "Ransford Konigsdorffer",
                        "team": "away",
                        "type": "yellow"
                    }
                ]
            },
            {
                "league": "Bundesliga",
                "date": "2026-09-19",
                "time": "20:30",
                "home": "Eintracht Frankfurt",
                "away": "SC Freiburg",
                "stadium": "Deutsche Bank Park",
                "round": "Pekan 4",
                "statusCode": "FT",
                "minuteDisplay": "FT",
                "homeScore": 2,
                "awayScore": 2,
                "homeLogo": "https://media.api-sports.io/football/teams/169.png",
                "awayLogo": "https://media.api-sports.io/football/teams/160.png",
                "prediction": "1 - 3",
                "odds": {
                    "home": 10,
                    "draw": 45,
                    "away": 45
                },
                "advice": "Combo Double chance : draw or SC Freiburg and +1.5 goals",
                "comparison": {
                    "form": {
                        "home": 31,
                        "away": 69
                    },
                    "att": {
                        "home": 41,
                        "away": 59
                    },
                    "def": {
                        "home": 11,
                        "away": 89
                    },
                    "poisson": {
                        "home": 0,
                        "away": 100
                    },
                    "h2h": {
                        "home": 85,
                        "away": 15
                    },
                    "goals": {
                        "home": 67,
                        "away": 33
                    }
                },
                "goals": [
                    {
                        "minute": "10",
                        "player": "Younes Ebnoutalib",
                        "team": "home"
                    },
                    {
                        "minute": "34",
                        "player": "Derry Lionel Scherhant",
                        "team": "away"
                    },
                    {
                        "minute": "36",
                        "player": "Jonathan Burkardt",
                        "team": "home"
                    },
                    {
                        "minute": "48",
                        "player": "Yuito Suzuki",
                        "team": "away"
                    }
                ],
                "cards": [
                    {
                        "minute": "9",
                        "player": "Raphael Onyedika Nwadike",
                        "team": "home",
                        "type": "yellow"
                    },
                    {
                        "minute": "37",
                        "player": "Mio Backhaus",
                        "team": "away",
                        "type": "yellow"
                    },
                    {
                        "minute": "56",
                        "player": "Oscar Winther Hojlund",
                        "team": "home",
                        "type": "yellow"
                    },
                    {
                        "minute": "88",
                        "player": "Lucas Höler",
                        "team": "away",
                        "type": "yellow"
                    }
                ]
            },
            {
                "league": "Bundesliga",
                "date": "2026-09-19",
                "time": "20:30",
                "home": "Hamburger SV",
                "away": "1. FC Köln",
                "stadium": "Volksparkstadion",
                "round": "Pekan 4",
                "statusCode": "FT",
                "minuteDisplay": "FT",
                "homeScore": 2,
                "awayScore": 1,
                "homeLogo": "https://media.api-sports.io/football/teams/175.png",
                "awayLogo": "https://media.api-sports.io/football/teams/192.png",
                "prediction": "1 - 3",
                "odds": {
                    "home": 10,
                    "draw": 45,
                    "away": 45
                },
                "advice": "Combo Winner : 1. FC Köln and +1.5 goals",
                "comparison": {
                    "form": {
                        "home": 0,
                        "away": 100
                    },
                    "att": {
                        "home": 0,
                        "away": 100
                    },
                    "def": {
                        "home": 37,
                        "away": 63
                    },
                    "poisson": {
                        "home": 0,
                        "away": 100
                    },
                    "h2h": {
                        "home": 50,
                        "away": 50
                    },
                    "goals": {
                        "home": 33,
                        "away": 67
                    }
                },
                "goals": [
                    {
                        "minute": "44",
                        "player": "Nicolás Capaldo",
                        "team": "home"
                    },
                    {
                        "minute": "49",
                        "player": "Yussuf Poulsen",
                        "team": "home"
                    },
                    {
                        "minute": "90",
                        "player": "Ragnar Ache",
                        "team": "away"
                    }
                ],
                "cards": [
                    {
                        "minute": "10",
                        "player": "Albert Grönbaek",
                        "team": "home",
                        "type": "yellow"
                    },
                    {
                        "minute": "54",
                        "player": "Gideon Mensah",
                        "team": "away",
                        "type": "yellow"
                    },
                    {
                        "minute": "77",
                        "player": "Ísak Bergmann Jóhannesson",
                        "team": "away",
                        "type": "yellow"
                    },
                    {
                        "minute": "84",
                        "player": "Ellyes Skhiri",
                        "team": "away",
                        "type": "yellow"
                    }
                ]
            },
            {
                "league": "Premier League",
                "date": "2026-09-19",
                "time": "21:00",
                "home": "Newcastle",
                "away": "Hull City",
                "stadium": "St James' Park",
                "round": "Pekan 5",
                "statusCode": "FT",
                "minuteDisplay": "FT",
                "homeScore": 2,
                "awayScore": 1,
                "homeLogo": "https://media.api-sports.io/football/teams/34.png",
                "awayLogo": "https://media.api-sports.io/football/teams/64.png",
                "prediction": "1 - 2",
                "odds": {
                    "home": 10,
                    "draw": 45,
                    "away": 45
                },
                "advice": "Double chance : draw or Hull City",
                "comparison": {
                    "form": {
                        "home": 38,
                        "away": 62
                    },
                    "att": {
                        "home": 58,
                        "away": 42
                    },
                    "def": {
                        "home": 20,
                        "away": 80
                    },
                    "poisson": {
                        "home": 37,
                        "away": 63
                    },
                    "h2h": {
                        "home": 85,
                        "away": 15
                    },
                    "goals": {
                        "home": 75,
                        "away": 25
                    }
                },
                "goals": [
                    {
                        "minute": "3",
                        "player": "Joe Willock",
                        "team": "home"
                    },
                    {
                        "minute": "7",
                        "player": "Lewis Hall",
                        "team": "home"
                    },
                    {
                        "minute": "67",
                        "player": "Mohamed Ali Cho",
                        "team": "away"
                    }
                ],
                "cards": [
                    {
                        "minute": "29",
                        "player": "Matt Crooks",
                        "team": "away",
                        "type": "yellow"
                    },
                    {
                        "minute": "39",
                        "player": "Mohamed Belloumi",
                        "team": "away",
                        "type": "yellow"
                    },
                    {
                        "minute": "45+2",
                        "player": "Konstantinos Tzolakis",
                        "team": "away",
                        "type": "yellow"
                    },
                    {
                        "minute": "45+3",
                        "player": "Jacob Murphy",
                        "team": "home",
                        "type": "yellow"
                    },
                    {
                        "minute": "49",
                        "player": "Ryan Giles",
                        "team": "away",
                        "type": "yellow"
                    }
                ]
            },
            {
                "league": "Premier League",
                "date": "2026-09-19",
                "time": "21:00",
                "home": "Everton",
                "away": "Ipswich",
                "stadium": "Hill Dickinson Stadium",
                "round": "Pekan 5",
                "statusCode": "FT",
                "minuteDisplay": "FT",
                "homeScore": 1,
                "awayScore": 0,
                "homeLogo": "https://media.api-sports.io/football/teams/45.png",
                "awayLogo": "https://media.api-sports.io/football/teams/57.png",
                "prediction": "2 - 1",
                "odds": {
                    "home": 45,
                    "draw": 45,
                    "away": 10
                },
                "advice": "Combo Double chance : Everton or draw and +1.5 goals",
                "comparison": {
                    "form": {
                        "home": 50,
                        "away": 50
                    },
                    "att": {
                        "home": 42,
                        "away": 58
                    },
                    "def": {
                        "home": 77,
                        "away": 23
                    },
                    "poisson": {
                        "home": 71,
                        "away": 29
                    },
                    "h2h": {
                        "home": 80,
                        "away": 20
                    },
                    "goals": {
                        "home": 67,
                        "away": 33
                    }
                },
                "goals": [
                    {
                        "minute": "11",
                        "player": "Thierno Barry",
                        "team": "home"
                    }
                ],
                "cards": [
                    {
                        "minute": "35",
                        "player": "Abdul Fatawu Issahaku",
                        "team": "away",
                        "type": "yellow"
                    },
                    {
                        "minute": "42",
                        "player": "Vitaliy Mykolenko",
                        "team": "home",
                        "type": "yellow"
                    },
                    {
                        "minute": "67",
                        "player": "Abdul Fatawu Issahaku",
                        "team": "away",
                        "type": "red"
                    },
                    {
                        "minute": "90+2",
                        "player": "Zian Flemming",
                        "team": "away",
                        "type": "yellow"
                    },
                    {
                        "minute": "90+6",
                        "player": "Harrison Armstrong",
                        "team": "home",
                        "type": "yellow"
                    }
                ]
            },
            {
                "league": "Premier League",
                "date": "2026-09-19",
                "time": "21:00",
                "home": "Brighton",
                "away": "Arsenal",
                "stadium": "American Express Stadium",
                "round": "Pekan 5",
                "statusCode": "FT",
                "minuteDisplay": "FT",
                "homeScore": 3,
                "awayScore": 0,
                "homeLogo": "https://media.api-sports.io/football/teams/51.png",
                "awayLogo": "https://media.api-sports.io/football/teams/42.png",
                "prediction": "2 - 3",
                "odds": {
                    "home": 10,
                    "draw": 45,
                    "away": 45
                },
                "advice": "Double chance : draw or Arsenal",
                "comparison": {
                    "form": {
                        "home": 37,
                        "away": 63
                    },
                    "att": {
                        "home": 62,
                        "away": 38
                    },
                    "def": {
                        "home": 17,
                        "away": 83
                    },
                    "poisson": {
                        "home": 0,
                        "away": 100
                    },
                    "h2h": {
                        "home": 15,
                        "away": 85
                    },
                    "goals": {
                        "home": 30,
                        "away": 70
                    }
                },
                "goals": [
                    {
                        "minute": "31",
                        "player": "Pascal Groß",
                        "team": "home"
                    },
                    {
                        "minute": "45",
                        "player": "Charalampos Kostoulas",
                        "team": "home"
                    },
                    {
                        "minute": "57",
                        "player": "Chema Andrés",
                        "team": "home"
                    }
                ],
                "cards": [
                    {
                        "minute": "33",
                        "player": "Charalampos Kostoulas",
                        "team": "home",
                        "type": "yellow"
                    },
                    {
                        "minute": "45+1",
                        "player": "Ferdi Kadıoğlu",
                        "team": "home",
                        "type": "yellow"
                    },
                    {
                        "minute": "71",
                        "player": "Pascal Struijk",
                        "team": "home",
                        "type": "yellow"
                    },
                    {
                        "minute": "90+1",
                        "player": "Maxim De Cuyper",
                        "team": "home",
                        "type": "yellow"
                    },
                    {
                        "minute": "90+7",
                        "player": "Declan Rice",
                        "team": "away",
                        "type": "yellow"
                    }
                ]
            },
            {
                "league": "Super Lig",
                "date": "2026-09-19",
                "time": "21:00",
                "home": "Çorum FK",
                "away": "Alanyaspor",
                "stadium": "Çorum Şehir Stadyumu",
                "round": "Pekan 6",
                "statusCode": "FT",
                "minuteDisplay": "FT",
                "homeScore": 1,
                "awayScore": 2,
                "homeLogo": "https://media.api-sports.io/football/teams/6343.png",
                "awayLogo": "https://media.api-sports.io/football/teams/996.png",
                "prediction": "2 - 3",
                "odds": {
                    "home": 10,
                    "draw": 45,
                    "away": 45
                },
                "advice": "Double chance : draw or Alanyaspor",
                "comparison": {
                    "form": {
                        "home": 47,
                        "away": 53
                    },
                    "att": {
                        "home": 67,
                        "away": 33
                    },
                    "def": {
                        "home": 33,
                        "away": 67
                    },
                    "poisson": {
                        "home": 71,
                        "away": 29
                    },
                    "h2h": {
                        "home": 0,
                        "away": 100
                    },
                    "goals": {
                        "home": 0,
                        "away": 100
                    }
                },
                "goals": [
                    {
                        "minute": "67",
                        "player": "G. Makouta",
                        "team": "away"
                    },
                    {
                        "minute": "76",
                        "player": "J. Ramirez",
                        "team": "home"
                    },
                    {
                        "minute": "79",
                        "player": "A. Usluoglu",
                        "team": "away"
                    }
                ],
                "cards": [
                    {
                        "minute": "28",
                        "player": "C. Under",
                        "team": "home",
                        "type": "yellow"
                    },
                    {
                        "minute": "40",
                        "player": "S. Saatci",
                        "team": "home",
                        "type": "yellow"
                    },
                    {
                        "minute": "56",
                        "player": "A. Borza",
                        "team": "home",
                        "type": "yellow"
                    },
                    {
                        "minute": "58",
                        "player": "A. Ildiz",
                        "team": "home",
                        "type": "yellow"
                    }
                ]
            },
            {
                "league": "Super Lig",
                "date": "2026-09-19",
                "time": "21:00",
                "home": "Kocaelispor",
                "away": "Gaziantep FK",
                "stadium": "Yildiz Entegre Kocaeli Stadyumu",
                "round": "Pekan 6",
                "statusCode": "FT",
                "minuteDisplay": "FT",
                "homeScore": 2,
                "awayScore": 0,
                "homeLogo": "https://media.api-sports.io/football/teams/7411.png",
                "awayLogo": "https://media.api-sports.io/football/teams/3573.png",
                "prediction": "1 - 1",
                "odds": {
                    "home": 35,
                    "draw": 35,
                    "away": 30
                },
                "advice": "Combo Double chance : Kocaelispor or draw and -3.5 goals",
                "comparison": {
                    "form": {
                        "home": 53,
                        "away": 47
                    },
                    "att": {
                        "home": 42,
                        "away": 58
                    },
                    "def": {
                        "home": 56,
                        "away": 44
                    },
                    "poisson": {
                        "home": 100,
                        "away": 0
                    },
                    "h2h": {
                        "home": 25,
                        "away": 75
                    },
                    "goals": {
                        "home": 45,
                        "away": 55
                    }
                },
                "goals": [
                    {
                        "minute": "56",
                        "player": "B. Kutlu",
                        "team": "home"
                    },
                    {
                        "minute": "76",
                        "player": "D. Agyei",
                        "team": "home"
                    }
                ],
                "cards": [
                    {
                        "minute": "37",
                        "player": "H. Dervisoglu",
                        "team": "away",
                        "type": "yellow"
                    },
                    {
                        "minute": "63",
                        "player": "G. Sousa",
                        "team": "home",
                        "type": "yellow"
                    },
                    {
                        "minute": "64",
                        "player": "K. Kozlowski",
                        "team": "away",
                        "type": "yellow"
                    }
                ]
            },
            {
                "league": "Jupiler Pro League",
                "date": "2026-09-19",
                "time": "21:00",
                "home": "OH Leuven",
                "away": "RAAL La Louvière",
                "stadium": "Den Dreef Stadium",
                "round": "Pekan 7",
                "statusCode": "FT",
                "minuteDisplay": "FT",
                "homeScore": 2,
                "awayScore": 0,
                "homeLogo": "https://media.api-sports.io/football/teams/260.png",
                "awayLogo": "https://media.api-sports.io/football/teams/5902.png",
                "prediction": "1 - 2",
                "odds": {
                    "home": 10,
                    "draw": 45,
                    "away": 45
                },
                "advice": "Double chance : draw or RAAL La Louvière",
                "comparison": {
                    "form": {
                        "home": 20,
                        "away": 80
                    },
                    "att": {
                        "home": 25,
                        "away": 75
                    },
                    "def": {
                        "home": 50,
                        "away": 50
                    },
                    "poisson": {
                        "home": 67,
                        "away": 33
                    },
                    "h2h": {
                        "home": 20,
                        "away": 80
                    },
                    "goals": {
                        "home": 33,
                        "away": 67
                    }
                },
                "goals": [
                    {
                        "minute": "32",
                        "player": "Wouter George",
                        "team": "home"
                    },
                    {
                        "minute": "89",
                        "player": "William Balikwisha",
                        "team": "home"
                    }
                ],
                "cards": [
                    {
                        "minute": "42",
                        "player": "Salomon Patrick Amougou Nkoa",
                        "team": "away",
                        "type": "yellow"
                    },
                    {
                        "minute": "51",
                        "player": "Wouter George",
                        "team": "home",
                        "type": "yellow"
                    },
                    {
                        "minute": "73",
                        "player": "Birger Verstraete",
                        "team": "home",
                        "type": "yellow"
                    },
                    {
                        "minute": "78",
                        "player": "Ewoud Pletinckx",
                        "team": "home",
                        "type": "yellow"
                    },
                    {
                        "minute": "82",
                        "player": "Marcos Peano",
                        "team": "away",
                        "type": "red"
                    },
                    {
                        "minute": "88",
                        "player": "Ismaila Cheick Coulibaly",
                        "team": "away",
                        "type": "yellow"
                    }
                ]
            },
            {
                "league": "Scottish Premiership",
                "date": "2026-09-19",
                "time": "21:00",
                "home": "Hibernian",
                "away": "Aberdeen",
                "stadium": "Easter Road",
                "round": "Pekan 7",
                "statusCode": "FT",
                "minuteDisplay": "FT",
                "homeScore": 1,
                "awayScore": 1,
                "homeLogo": "https://media.api-sports.io/football/teams/249.png",
                "awayLogo": "https://media.api-sports.io/football/teams/252.png",
                "prediction": "2 - 1",
                "odds": {
                    "home": 45,
                    "draw": 45,
                    "away": 10
                },
                "advice": "Double chance : Hibernian or draw",
                "comparison": {
                    "form": {
                        "home": 60,
                        "away": 40
                    },
                    "att": {
                        "home": 60,
                        "away": 40
                    },
                    "def": {
                        "home": 43,
                        "away": 57
                    },
                    "poisson": {
                        "home": 31,
                        "away": 69
                    },
                    "h2h": {
                        "home": 60,
                        "away": 40
                    },
                    "goals": {
                        "home": 60,
                        "away": 40
                    }
                },
                "goals": [
                    {
                        "minute": "17",
                        "player": "Kevin Nisbet",
                        "team": "away"
                    },
                    {
                        "minute": "62",
                        "player": "Martin Boyle",
                        "team": "home"
                    }
                ],
                "cards": [
                    {
                        "minute": "34",
                        "player": "Kevin Nisbet",
                        "team": "away",
                        "type": "yellow"
                    },
                    {
                        "minute": "59",
                        "player": "Jack Milne",
                        "team": "away",
                        "type": "yellow"
                    },
                    {
                        "minute": "70",
                        "player": "A. Major",
                        "team": "home",
                        "type": "yellow"
                    },
                    {
                        "minute": "84",
                        "player": "Miguel Changa Chaiwa",
                        "team": "home",
                        "type": "yellow"
                    }
                ]
            },
            {
                "league": "Scottish Premiership",
                "date": "2026-09-19",
                "time": "21:00",
                "home": "ST Mirren",
                "away": "Dundee Utd",
                "stadium": "The SMiSA Stadium",
                "round": "Pekan 7",
                "statusCode": "FT",
                "minuteDisplay": "FT",
                "homeScore": 0,
                "awayScore": 3,
                "homeLogo": "https://media.api-sports.io/football/teams/251.png",
                "awayLogo": "https://media.api-sports.io/football/teams/1386.png",
                "prediction": "2 - 1",
                "odds": {
                    "home": 45,
                    "draw": 45,
                    "away": 10
                },
                "advice": "Double chance : ST Mirren or draw",
                "comparison": {
                    "form": {
                        "home": 64,
                        "away": 36
                    },
                    "att": {
                        "home": 55,
                        "away": 45
                    },
                    "def": {
                        "home": 63,
                        "away": 38
                    },
                    "poisson": {
                        "home": 66,
                        "away": 34
                    },
                    "h2h": {
                        "home": 50,
                        "away": 50
                    },
                    "goals": {
                        "home": 54,
                        "away": 46
                    }
                },
                "goals": [
                    {
                        "minute": "6",
                        "player": "Jesse Randall",
                        "team": "away"
                    },
                    {
                        "minute": "12",
                        "player": "Lyall Cameron",
                        "team": "away"
                    },
                    {
                        "minute": "45",
                        "player": "Kevin Ciubotaru",
                        "team": "away"
                    }
                ],
                "cards": [
                    {
                        "minute": "43",
                        "player": "Daniel Bennie",
                        "team": "away",
                        "type": "yellow"
                    },
                    {
                        "minute": "70",
                        "player": "Jake Young",
                        "team": "home",
                        "type": "yellow"
                    },
                    {
                        "minute": "80",
                        "player": "Will Ferry",
                        "team": "away",
                        "type": "yellow"
                    },
                    {
                        "minute": "90+2",
                        "player": "Ryan Carr",
                        "team": "home",
                        "type": "yellow"
                    }
                ]
            },
            {
                "league": "Scottish Premiership",
                "date": "2026-09-19",
                "time": "21:00",
                "home": "Dundee",
                "away": "Motherwell",
                "stadium": "Dens Park",
                "round": "Pekan 7",
                "statusCode": "FT",
                "minuteDisplay": "FT",
                "homeScore": 2,
                "awayScore": 1,
                "homeLogo": "https://media.api-sports.io/football/teams/253.png",
                "awayLogo": "https://media.api-sports.io/football/teams/256.png",
                "prediction": "2 - 1",
                "odds": {
                    "home": 45,
                    "draw": 45,
                    "away": 10
                },
                "advice": "Double chance : Dundee or draw",
                "comparison": {
                    "form": {
                        "home": 58,
                        "away": 42
                    },
                    "att": {
                        "home": 54,
                        "away": 46
                    },
                    "def": {
                        "home": 62,
                        "away": 38
                    },
                    "poisson": {
                        "home": 59,
                        "away": 41
                    },
                    "h2h": {
                        "home": 29,
                        "away": 71
                    },
                    "goals": {
                        "home": 42,
                        "away": 58
                    }
                },
                "goals": [
                    {
                        "minute": "23",
                        "player": "Joe Westley",
                        "team": "home"
                    },
                    {
                        "minute": "40",
                        "player": "Bradley·Fink",
                        "team": "home"
                    },
                    {
                        "minute": "44",
                        "player": "Alex·Lowry",
                        "team": "away"
                    }
                ],
                "cards": [
                    {
                        "minute": "67",
                        "player": "Dylan Williams",
                        "team": "away",
                        "type": "yellow"
                    },
                    {
                        "minute": "90+3",
                        "player": "Owen Goodman",
                        "team": "home",
                        "type": "yellow"
                    }
                ]
            },
            {
                "league": "Scottish Premiership",
                "date": "2026-09-19",
                "time": "21:00",
                "home": "ST Johnstone",
                "away": "Falkirk",
                "stadium": "McDiarmid Park",
                "round": "Pekan 7",
                "statusCode": "FT",
                "minuteDisplay": "FT",
                "homeScore": 1,
                "awayScore": 1,
                "homeLogo": "https://media.api-sports.io/football/teams/258.png",
                "awayLogo": "https://media.api-sports.io/football/teams/1389.png",
                "prediction": "2 - 1",
                "odds": {
                    "home": 45,
                    "draw": 45,
                    "away": 10
                },
                "advice": "Double chance : ST Johnstone or draw",
                "comparison": {
                    "form": {
                        "home": 44,
                        "away": 56
                    },
                    "att": {
                        "home": 44,
                        "away": 56
                    },
                    "def": {
                        "home": 50,
                        "away": 50
                    },
                    "poisson": {
                        "home": 66,
                        "away": 34
                    },
                    "h2h": {
                        "home": 50,
                        "away": 50
                    },
                    "goals": {
                        "home": 50,
                        "away": 50
                    }
                },
                "goals": [
                    {
                        "minute": "60",
                        "player": "Ethan Ross",
                        "team": "away"
                    },
                    {
                        "minute": "90+6",
                        "player": "Enes Alic",
                        "team": "home"
                    }
                ],
                "cards": [
                    {
                        "minute": "45",
                        "player": "Cheick Diabate",
                        "team": "home",
                        "type": "yellow"
                    },
                    {
                        "minute": "53",
                        "player": "Cheick Diabate",
                        "team": "home",
                        "type": "red"
                    },
                    {
                        "minute": "90",
                        "player": "Ruari Paton",
                        "team": "home",
                        "type": "yellow"
                    },
                    {
                        "minute": "90+2",
                        "player": "Enes Alic",
                        "team": "home",
                        "type": "yellow"
                    }
                ]
            },
            {
                "league": "LaLiga",
                "date": "2026-09-19",
                "time": "21:15",
                "home": "Athletic Club",
                "away": "Alaves",
                "stadium": "San Mamés Stadium",
                "round": "Pekan 7",
                "statusCode": "2H",
                "minuteDisplay": "90+2'",
                "homeScore": 0,
                "awayScore": 0,
                "homeLogo": "https://media.api-sports.io/football/teams/531.png",
                "awayLogo": "https://media.api-sports.io/football/teams/542.png",
                "prediction": "2 - 1",
                "odds": {
                    "home": 45,
                    "draw": 45,
                    "away": 10
                },
                "advice": "Double chance : Athletic Club or draw",
                "comparison": {
                    "form": {
                        "home": 50,
                        "away": 50
                    },
                    "att": {
                        "home": 47,
                        "away": 53
                    },
                    "def": {
                        "home": 50,
                        "away": 50
                    },
                    "poisson": {
                        "home": 60,
                        "away": 40
                    },
                    "h2h": {
                        "home": 50,
                        "away": 50
                    },
                    "goals": {
                        "home": 55,
                        "away": 45
                    }
                },
                "cards": [
                    {
                        "minute": "71",
                        "player": "Iñigo Ruiz De Galarreta",
                        "team": "home",
                        "type": "yellow"
                    }
                ]
            },
            {
                "league": "Eredivisie",
                "date": "2026-09-19",
                "time": "21:30",
                "home": "ADO Den Haag",
                "away": "Cambuur",
                "stadium": "Bingoal Stadion",
                "round": "Pekan 7",
                "statusCode": "2H",
                "minuteDisplay": "73'",
                "homeScore": 0,
                "awayScore": 1,
                "homeLogo": "https://media.api-sports.io/football/teams/198.png",
                "awayLogo": "https://media.api-sports.io/football/teams/420.png",
                "prediction": "2 - 3",
                "odds": {
                    "home": 10,
                    "draw": 45,
                    "away": 45
                },
                "advice": "Combo Double chance : draw or Cambuur and +1.5 goals",
                "comparison": {
                    "form": {
                        "home": 20,
                        "away": 80
                    },
                    "att": {
                        "home": 40,
                        "away": 60
                    },
                    "def": {
                        "home": 50,
                        "away": 50
                    },
                    "poisson": {
                        "home": 48,
                        "away": 52
                    },
                    "h2h": {
                        "home": 0,
                        "away": 100
                    },
                    "goals": {
                        "home": 30,
                        "away": 70
                    }
                },
                "goals": [
                    {
                        "minute": "44",
                        "player": "Fabian Kvam",
                        "team": "away"
                    }
                ],
                "cards": [
                    {
                        "minute": "21",
                        "player": "Nigel Thomas",
                        "team": "home",
                        "type": "yellow"
                    },
                    {
                        "minute": "71",
                        "player": "Mathieu Maertens",
                        "team": "away",
                        "type": "yellow"
                    }
                ]
            },
            {
                "league": "Primeira Liga",
                "date": "2026-09-19",
                "time": "21:30",
                "home": "Nacional",
                "away": "Famalicao",
                "stadium": "Estádio da Madeira",
                "round": "Pekan 7",
                "statusCode": "2H",
                "minuteDisplay": "76'",
                "homeScore": 0,
                "awayScore": 4,
                "homeLogo": "https://media.api-sports.io/football/teams/225.png",
                "awayLogo": "https://media.api-sports.io/football/teams/242.png",
                "prediction": "1 - 2",
                "odds": {
                    "home": 10,
                    "draw": 45,
                    "away": 45
                },
                "advice": "Double chance : draw or Famalicao",
                "comparison": {
                    "form": {
                        "home": 50,
                        "away": 50
                    },
                    "att": {
                        "home": 56,
                        "away": 44
                    },
                    "def": {
                        "home": 40,
                        "away": 60
                    },
                    "poisson": {
                        "home": 53,
                        "away": 47
                    },
                    "h2h": {
                        "home": 29,
                        "away": 71
                    },
                    "goals": {
                        "home": 25,
                        "away": 75
                    }
                },
                "goals": [
                    {
                        "minute": "7",
                        "player": "Georgios Koutsias",
                        "team": "away"
                    },
                    {
                        "minute": "13",
                        "player": "Marcos Vinicios Lopes Moura",
                        "team": "away"
                    },
                    {
                        "minute": "40",
                        "player": "Georgios Koutsias",
                        "team": "away"
                    },
                    {
                        "minute": "67",
                        "player": "Marcos Vinicios Lopes Moura",
                        "team": "away"
                    }
                ],
                "cards": [
                    {
                        "minute": "28",
                        "player": "Víctor Rofino Gordo",
                        "team": "away",
                        "type": "yellow"
                    },
                    {
                        "minute": "63",
                        "player": "Pedro Bondo Francisco",
                        "team": "away",
                        "type": "yellow"
                    },
                    {
                        "minute": "71",
                        "player": "Williams Kokolo",
                        "team": "home",
                        "type": "yellow"
                    },
                    {
                        "minute": "74",
                        "player": "Matheus dos Santos Dias",
                        "team": "home",
                        "type": "yellow"
                    }
                ]
            },
            {
                "league": "Primeira Liga",
                "date": "2026-09-19",
                "time": "21:30",
                "home": "GIL Vicente",
                "away": "Maritimo",
                "stadium": "Estadio Cidade de Barcelos",
                "round": "Pekan 7",
                "statusCode": "2H",
                "minuteDisplay": "75'",
                "homeScore": 1,
                "awayScore": 0,
                "homeLogo": "https://media.api-sports.io/football/teams/762.png",
                "awayLogo": "https://media.api-sports.io/football/teams/214.png",
                "prediction": "2 - 1",
                "odds": {
                    "home": 45,
                    "draw": 45,
                    "away": 10
                },
                "advice": "Double chance : GIL Vicente or draw",
                "comparison": {
                    "form": {
                        "home": 64,
                        "away": 36
                    },
                    "att": {
                        "home": 40,
                        "away": 60
                    },
                    "def": {
                        "home": 73,
                        "away": 27
                    },
                    "poisson": {
                        "home": 82,
                        "away": 18
                    },
                    "h2h": {
                        "home": 93,
                        "away": 7
                    },
                    "goals": {
                        "home": 73,
                        "away": 27
                    }
                },
                "goals": [
                    {
                        "minute": "7",
                        "player": "Murilo Souza",
                        "team": "home"
                    }
                ],
                "cards": [
                    {
                        "minute": "54",
                        "player": "Santiago García González",
                        "team": "home",
                        "type": "yellow"
                    },
                    {
                        "minute": "56",
                        "player": "Rodri Andrade",
                        "team": "away",
                        "type": "yellow"
                    }
                ]
            },
            {
                "league": "Ligue 1",
                "date": "2026-09-19",
                "time": "22:15",
                "home": "Paris FC",
                "away": "Strasbourg",
                "stadium": "Stade Jean Bouin",
                "round": "Pekan 5",
                "statusCode": "HT",
                "minuteDisplay": "HT",
                "homeScore": 1,
                "awayScore": 0,
                "homeLogo": "https://media.api-sports.io/football/teams/114.png",
                "awayLogo": "https://media.api-sports.io/football/teams/95.png",
                "prediction": "2 - 1",
                "odds": {
                    "home": 35,
                    "draw": 35,
                    "away": 30
                },
                "advice": "Double chance : Paris FC or draw",
                "comparison": {
                    "form": {
                        "home": 53,
                        "away": 47
                    },
                    "att": {
                        "home": 40,
                        "away": 60
                    },
                    "def": {
                        "home": 80,
                        "away": 20
                    },
                    "poisson": {
                        "home": 100,
                        "away": 0
                    },
                    "h2h": {
                        "home": 38,
                        "away": 62
                    },
                    "goals": {
                        "home": 50,
                        "away": 50
                    }
                },
                "goals": [
                    {
                        "minute": "18",
                        "player": "Ilan Kebbal",
                        "team": "home"
                    }
                ],
                "cards": [
                    {
                        "minute": "40",
                        "player": "Maxime López",
                        "team": "home",
                        "type": "yellow"
                    }
                ]
            },
            {
                "league": "Serie A",
                "date": "2026-09-19",
                "time": "23:00",
                "home": "AS Roma",
                "away": "Inter",
                "stadium": "Stadio Olimpico",
                "round": "Pekan 5",
                "statusCode": "1H",
                "minuteDisplay": "2'",
                "homeScore": 0,
                "awayScore": 0,
                "homeLogo": "https://media.api-sports.io/football/teams/497.png",
                "awayLogo": "https://media.api-sports.io/football/teams/505.png",
                "prediction": "2 - 3",
                "odds": {
                    "home": 10,
                    "draw": 45,
                    "away": 45
                },
                "advice": "Double chance : draw or Inter",
                "comparison": {
                    "form": {
                        "home": 50,
                        "away": 50
                    },
                    "att": {
                        "home": 48,
                        "away": 52
                    },
                    "def": {
                        "home": 86,
                        "away": 14
                    },
                    "poisson": {
                        "home": 0,
                        "away": 100
                    },
                    "h2h": {
                        "home": 20,
                        "away": 80
                    },
                    "goals": {
                        "home": 31,
                        "away": 69
                    }
                }
            }
        ],
        "2026-09-20": [
            {
                "league": "Primeira Liga",
                "date": "2026-09-20",
                "time": "00:00",
                "home": "Alverca",
                "away": "Rio Ave",
                "stadium": "Complexo Desportivo FC Alverca",
                "round": "Pekan 7",
                "statusCode": "FT",
                "minuteDisplay": "FT",
                "homeScore": 1,
                "awayScore": 0,
                "homeLogo": "https://media.api-sports.io/football/teams/4724.png",
                "awayLogo": "https://media.api-sports.io/football/teams/226.png",
                "prediction": "2 - 1",
                "odds": {
                    "home": 45,
                    "draw": 45,
                    "away": 10
                },
                "advice": "Double chance : Alverca or draw",
                "comparison": {
                    "form": {
                        "home": 56,
                        "away": 44
                    },
                    "att": {
                        "home": 62,
                        "away": 38
                    },
                    "def": {
                        "home": 59,
                        "away": 41
                    },
                    "poisson": {
                        "home": 68,
                        "away": 32
                    },
                    "h2h": {
                        "home": 50,
                        "away": 50
                    },
                    "goals": {
                        "home": 50,
                        "away": 50
                    }
                },
                "goals": [
                    {
                        "minute": "3",
                        "player": "Dawda Camara Sankharé",
                        "team": "home"
                    }
                ],
                "cards": [
                    {
                        "minute": "87",
                        "player": "Simón García",
                        "team": "away",
                        "type": "yellow"
                    },
                    {
                        "minute": "88",
                        "player": "Davy Gui",
                        "team": "home",
                        "type": "yellow"
                    },
                    {
                        "minute": "90+3",
                        "player": "André Vidigal",
                        "team": "home",
                        "type": "yellow"
                    },
                    {
                        "minute": "90+5",
                        "player": "Francisco Petrasso",
                        "team": "away",
                        "type": "yellow"
                    }
                ]
            },
            {
                "league": "Super Lig",
                "date": "2026-09-20",
                "time": "00:00",
                "home": "Başakşehir",
                "away": "Gençlerbirliği S.K.",
                "stadium": "Basaksehir Fatih Terim Stadium",
                "round": "Pekan 6",
                "statusCode": "FT",
                "minuteDisplay": "FT",
                "homeScore": 4,
                "awayScore": 0,
                "homeLogo": "https://media.api-sports.io/football/teams/564.png",
                "awayLogo": "https://media.api-sports.io/football/teams/997.png",
                "prediction": "3 - 2",
                "odds": {
                    "home": 45,
                    "draw": 45,
                    "away": 10
                },
                "advice": "Double chance : Başakşehir or draw",
                "comparison": {
                    "form": {
                        "home": 36,
                        "away": 64
                    },
                    "att": {
                        "home": 55,
                        "away": 45
                    },
                    "def": {
                        "home": 45,
                        "away": 55
                    },
                    "poisson": {
                        "home": 83,
                        "away": 17
                    },
                    "h2h": {
                        "home": 80,
                        "away": 20
                    },
                    "goals": {
                        "home": 71,
                        "away": 29
                    }
                },
                "goals": [
                    {
                        "minute": "9",
                        "player": "A. Skov Olsen",
                        "team": "home"
                    },
                    {
                        "minute": "33",
                        "player": "E. Shomurodov",
                        "team": "home"
                    },
                    {
                        "minute": "53",
                        "player": "D. Selke",
                        "team": "home"
                    },
                    {
                        "minute": "65",
                        "player": "E. Shomurodov",
                        "team": "home"
                    }
                ],
                "cards": [
                    {
                        "minute": "26",
                        "player": "Abdurrahim Dursun",
                        "team": "away",
                        "type": "yellow"
                    },
                    {
                        "minute": "27",
                        "player": "Umut Güneş",
                        "team": "home",
                        "type": "yellow"
                    },
                    {
                        "minute": "57",
                        "player": "Olivier Kemen",
                        "team": "home",
                        "type": "yellow"
                    }
                ]
            },
            {
                "league": "Super Lig",
                "date": "2026-09-20",
                "time": "00:00",
                "home": "Trabzonspor",
                "away": "Galatasaray",
                "stadium": "Papara Park",
                "round": "Pekan 6",
                "statusCode": "FT",
                "minuteDisplay": "FT",
                "homeScore": 4,
                "awayScore": 0,
                "homeLogo": "https://media.api-sports.io/football/teams/998.png",
                "awayLogo": "https://media.api-sports.io/football/teams/645.png",
                "prediction": "2 - 3",
                "odds": {
                    "home": 10,
                    "draw": 45,
                    "away": 45
                },
                "advice": "Double chance : draw or Galatasaray",
                "comparison": {
                    "form": {
                        "home": 35,
                        "away": 65
                    },
                    "att": {
                        "home": 41,
                        "away": 59
                    },
                    "def": {
                        "home": 55,
                        "away": 45
                    },
                    "poisson": {
                        "home": 62,
                        "away": 38
                    },
                    "h2h": {
                        "home": 29,
                        "away": 71
                    },
                    "goals": {
                        "home": 23,
                        "away": 77
                    }
                },
                "goals": [
                    {
                        "minute": "4",
                        "player": "M. Salah",
                        "team": "home"
                    },
                    {
                        "minute": "39",
                        "player": "N. Saviolo",
                        "team": "home"
                    },
                    {
                        "minute": "44",
                        "player": "M. Salah",
                        "team": "home"
                    },
                    {
                        "minute": "80",
                        "player": "M. Salah",
                        "team": "home"
                    }
                ],
                "cards": [
                    {
                        "minute": "48",
                        "player": "Ernest Muçi",
                        "team": "home",
                        "type": "yellow"
                    },
                    {
                        "minute": "71",
                        "player": "Stefan Savić",
                        "team": "home",
                        "type": "yellow"
                    },
                    {
                        "minute": "82",
                        "player": "André Onana",
                        "team": "home",
                        "type": "yellow"
                    },
                    {
                        "minute": "82",
                        "player": "Mohamed Salah",
                        "team": "home",
                        "type": "yellow"
                    },
                    {
                        "minute": "87",
                        "player": "Lesley Ugochukwu",
                        "team": "away",
                        "type": "red"
                    },
                    {
                        "minute": "90+3",
                        "player": "Leroy Sané",
                        "team": "away",
                        "type": "yellow"
                    }
                ]
            },
            {
                "league": "Eredivisie",
                "date": "2026-09-20",
                "time": "01:00",
                "home": "Ajax",
                "away": "Excelsior",
                "stadium": "Johan Cruijff Arena",
                "round": "Pekan 7",
                "statusCode": "FT",
                "minuteDisplay": "FT",
                "homeScore": 2,
                "awayScore": 2,
                "homeLogo": "https://media.api-sports.io/football/teams/194.png",
                "awayLogo": "https://media.api-sports.io/football/teams/196.png",
                "prediction": "3 - 2",
                "odds": {
                    "home": 45,
                    "draw": 45,
                    "away": 10
                },
                "advice": "Combo Double chance : Ajax or draw and +1.5 goals",
                "comparison": {
                    "form": {
                        "home": 59,
                        "away": 41
                    },
                    "att": {
                        "home": 65,
                        "away": 35
                    },
                    "def": {
                        "home": 50,
                        "away": 50
                    },
                    "poisson": {
                        "home": 28,
                        "away": 72
                    },
                    "h2h": {
                        "home": 50,
                        "away": 50
                    },
                    "goals": {
                        "home": 55,
                        "away": 45
                    }
                },
                "goals": [
                    {
                        "minute": "32",
                        "player": "Julian Brandt",
                        "team": "home"
                    },
                    {
                        "minute": "45+1",
                        "player": "Lennard Hartjes",
                        "team": "away"
                    },
                    {
                        "minute": "62",
                        "player": "Aymen sliti",
                        "team": "away"
                    },
                    {
                        "minute": "64",
                        "player": "Tolu Arokodare",
                        "team": "home"
                    }
                ],
                "cards": [
                    {
                        "minute": "35",
                        "player": "Jan Plug",
                        "team": "away",
                        "type": "yellow"
                    },
                    {
                        "minute": "85",
                        "player": "Oscar Gloukh",
                        "team": "home",
                        "type": "yellow"
                    },
                    {
                        "minute": "85",
                        "player": "Irakli Yegoian",
                        "team": "away",
                        "type": "yellow"
                    }
                ]
            },
            {
                "league": "Serie A",
                "date": "2026-09-20",
                "time": "01:45",
                "home": "Venezia",
                "away": "Lazio",
                "stadium": "Stadio Pierluigi Penzo",
                "round": "Pekan 5",
                "statusCode": "FT",
                "minuteDisplay": "FT",
                "homeScore": 0,
                "awayScore": 2,
                "homeLogo": "https://media.api-sports.io/football/teams/517.png",
                "awayLogo": "https://media.api-sports.io/football/teams/487.png",
                "prediction": "1 - 2",
                "odds": {
                    "home": 34,
                    "draw": 50,
                    "away": 50
                },
                "advice": "Winner : Lazio",
                "comparison": {
                    "form": {
                        "home": 0,
                        "away": 100
                    },
                    "att": {
                        "home": 40,
                        "away": 60
                    },
                    "def": {
                        "home": 21,
                        "away": 79
                    },
                    "poisson": {
                        "home": 10,
                        "away": 90
                    },
                    "h2h": {
                        "home": 15,
                        "away": 85
                    },
                    "goals": {
                        "home": 22,
                        "away": 78
                    }
                },
                "goals": [
                    {
                        "minute": "51",
                        "player": "M. Zaccagni",
                        "team": "away"
                    },
                    {
                        "minute": "60",
                        "player": "T. Noslin",
                        "team": "away"
                    }
                ],
                "cards": [
                    {
                        "minute": "29",
                        "player": "Kike Pérez",
                        "team": "home",
                        "type": "yellow"
                    },
                    {
                        "minute": "59",
                        "player": "Juan Jesus",
                        "team": "home",
                        "type": "yellow"
                    },
                    {
                        "minute": "74",
                        "player": "Thierry Correia",
                        "team": "home",
                        "type": "yellow"
                    },
                    {
                        "minute": "90+2",
                        "player": "Matias Moreno",
                        "team": "home",
                        "type": "yellow"
                    },
                    {
                        "minute": "90+1",
                        "player": "Joel Schingtienne",
                        "team": "home",
                        "type": "yellow"
                    },
                    {
                        "minute": "90",
                        "player": "Toni Fernández",
                        "team": "home",
                        "type": "yellow"
                    }
                ]
            },
            {
                "league": "Ligue 1",
                "date": "2026-09-20",
                "time": "01:45",
                "home": "Angers",
                "away": "Estac Troyes",
                "stadium": "Stade Raymond Kopa",
                "round": "Pekan 5",
                "statusCode": "FT",
                "minuteDisplay": "FT",
                "homeScore": 2,
                "awayScore": 0,
                "homeLogo": "https://media.api-sports.io/football/teams/77.png",
                "awayLogo": "https://media.api-sports.io/football/teams/110.png",
                "prediction": "2 - 1",
                "odds": {
                    "home": 45,
                    "draw": 45,
                    "away": 10
                },
                "advice": "Double chance : Angers or draw",
                "comparison": {
                    "form": {
                        "home": 50,
                        "away": 50
                    },
                    "att": {
                        "home": 50,
                        "away": 50
                    },
                    "def": {
                        "home": 64,
                        "away": 36
                    },
                    "poisson": {
                        "home": 26,
                        "away": 74
                    },
                    "h2h": {
                        "home": 80,
                        "away": 20
                    },
                    "goals": {
                        "home": 61,
                        "away": 39
                    }
                },
                "goals": [
                    {
                        "minute": "42",
                        "player": "Prosper Peter",
                        "team": "home"
                    },
                    {
                        "minute": "57",
                        "player": "Amine Sbaï",
                        "team": "home"
                    }
                ],
                "cards": [
                    {
                        "minute": "35",
                        "player": "Iron Gomis",
                        "team": "away",
                        "type": "yellow"
                    },
                    {
                        "minute": "63",
                        "player": "Jim Allevinah",
                        "team": "home",
                        "type": "yellow"
                    },
                    {
                        "minute": "86",
                        "player": "Yassine Belkdim",
                        "team": "home",
                        "type": "yellow"
                    },
                    {
                        "minute": "89",
                        "player": "Antoine Mille",
                        "team": "away",
                        "type": "yellow"
                    },
                    {
                        "minute": "90+2",
                        "player": "Ousmane Camara",
                        "team": "home",
                        "type": "yellow"
                    }
                ]
            },
            {
                "league": "Ligue 1",
                "date": "2026-09-20",
                "time": "01:45",
                "home": "Lyon",
                "away": "Rennes",
                "stadium": "Groupama Stadium",
                "round": "Pekan 5",
                "statusCode": "FT",
                "minuteDisplay": "FT",
                "homeScore": 4,
                "awayScore": 0,
                "homeLogo": "https://media.api-sports.io/football/teams/80.png",
                "awayLogo": "https://media.api-sports.io/football/teams/94.png",
                "prediction": "1 - 1",
                "odds": {
                    "home": 35,
                    "draw": 35,
                    "away": 30
                },
                "advice": "Double chance : Lyon or draw",
                "comparison": {
                    "form": {
                        "home": 44,
                        "away": 56
                    },
                    "att": {
                        "home": 43,
                        "away": 57
                    },
                    "def": {
                        "home": 71,
                        "away": 29
                    },
                    "poisson": {
                        "home": 49,
                        "away": 51
                    },
                    "h2h": {
                        "home": 40,
                        "away": 60
                    },
                    "goals": {
                        "home": 48,
                        "away": 52
                    }
                },
                "goals": [
                    {
                        "minute": "7",
                        "player": "Ernest Nuamah",
                        "team": "home"
                    },
                    {
                        "minute": "30",
                        "player": "Ernest Nuamah",
                        "team": "home"
                    },
                    {
                        "minute": "48",
                        "player": "Zachary Athekame",
                        "team": "home"
                    },
                    {
                        "minute": "76",
                        "player": "Corentin Tolisso",
                        "team": "home"
                    }
                ],
                "cards": [
                    {
                        "minute": "2",
                        "player": "Moussa Niakhaté",
                        "team": "home",
                        "type": "yellow"
                    },
                    {
                        "minute": "16",
                        "player": "Quentin Merlin",
                        "team": "away",
                        "type": "yellow"
                    },
                    {
                        "minute": "60",
                        "player": "Pavel Šulc",
                        "team": "home",
                        "type": "yellow"
                    },
                    {
                        "minute": "81",
                        "player": "Valentin Rongier",
                        "team": "away",
                        "type": "yellow"
                    },
                    {
                        "minute": "86",
                        "player": "Zachary Athekame",
                        "team": "home",
                        "type": "yellow"
                    },
                    {
                        "minute": "90+2",
                        "player": "Noah Teye Nartey",
                        "team": "home",
                        "type": "yellow"
                    }
                ]
            },
            {
                "league": "Ligue 1",
                "date": "2026-09-20",
                "time": "01:45",
                "home": "Toulouse",
                "away": "Le Havre",
                "stadium": "Stadium Municipal",
                "round": "Pekan 5",
                "statusCode": "FT",
                "minuteDisplay": "FT",
                "homeScore": 3,
                "awayScore": 2,
                "homeLogo": "https://media.api-sports.io/football/teams/96.png",
                "awayLogo": "https://media.api-sports.io/football/teams/111.png",
                "prediction": "1 - 1",
                "odds": {
                    "home": 35,
                    "draw": 35,
                    "away": 30
                },
                "advice": "Combo Double chance : Toulouse or draw and -3.5 goals",
                "comparison": {
                    "form": {
                        "home": 50,
                        "away": 50
                    },
                    "att": {
                        "home": 67,
                        "away": 33
                    },
                    "def": {
                        "home": 36,
                        "away": 64
                    },
                    "poisson": {
                        "home": 0,
                        "away": 100
                    },
                    "h2h": {
                        "home": 50,
                        "away": 50
                    },
                    "goals": {
                        "home": 64,
                        "away": 36
                    }
                },
                "goals": [
                    {
                        "minute": "49",
                        "player": "Casper Tengstedt",
                        "team": "home"
                    },
                    {
                        "minute": "51",
                        "player": "Casper Tengstedt",
                        "team": "home"
                    },
                    {
                        "minute": "71",
                        "player": "Josh Maja",
                        "team": "away"
                    },
                    {
                        "minute": "79",
                        "player": "Thomas Jorgensen",
                        "team": "home"
                    },
                    {
                        "minute": "88",
                        "player": "Mbwana Ally Samatta",
                        "team": "away"
                    }
                ],
                "cards": [
                    {
                        "minute": "34",
                        "player": "Christ Tape",
                        "team": "home",
                        "type": "yellow"
                    },
                    {
                        "minute": "58",
                        "player": "Niko Sigur",
                        "team": "home",
                        "type": "yellow"
                    },
                    {
                        "minute": "74",
                        "player": "Seny Koumbassa",
                        "team": "home",
                        "type": "yellow"
                    },
                    {
                        "minute": "81",
                        "player": "Sota Nakamura",
                        "team": "away",
                        "type": "yellow"
                    }
                ]
            },
            {
                "league": "Ligue 1",
                "date": "2026-09-20",
                "time": "01:45",
                "home": "Le Mans",
                "away": "Lorient",
                "stadium": "MMArena",
                "round": "Pekan 5",
                "statusCode": "FT",
                "minuteDisplay": "FT",
                "homeScore": 2,
                "awayScore": 1,
                "homeLogo": "https://media.api-sports.io/football/teams/1298.png",
                "awayLogo": "https://media.api-sports.io/football/teams/97.png",
                "prediction": "1 - 2",
                "odds": {
                    "home": 10,
                    "draw": 45,
                    "away": 45
                },
                "advice": "Double chance : draw or Lorient",
                "comparison": {
                    "form": {
                        "home": 38,
                        "away": 63
                    },
                    "att": {
                        "home": 64,
                        "away": 36
                    },
                    "def": {
                        "home": 33,
                        "away": 67
                    },
                    "poisson": {
                        "home": 0,
                        "away": 100
                    },
                    "h2h": {
                        "home": 25,
                        "away": 75
                    },
                    "goals": {
                        "home": 38,
                        "away": 62
                    }
                },
                "goals": [
                    {
                        "minute": "3",
                        "player": "Adil Bourabaa",
                        "team": "home"
                    },
                    {
                        "minute": "57",
                        "player": "Habib Diallo",
                        "team": "home"
                    },
                    {
                        "minute": "78",
                        "player": "Isak Jensen",
                        "team": "away"
                    }
                ],
                "cards": [
                    {
                        "minute": "11",
                        "player": "Jean-Victor Makengo",
                        "team": "away",
                        "type": "yellow"
                    },
                    {
                        "minute": "19",
                        "player": "Arsène Kouassi",
                        "team": "away",
                        "type": "yellow"
                    },
                    {
                        "minute": "51",
                        "player": "Habib Diallo",
                        "team": "home",
                        "type": "yellow"
                    },
                    {
                        "minute": "61",
                        "player": "Arthur Avom",
                        "team": "away",
                        "type": "yellow"
                    },
                    {
                        "minute": "74",
                        "player": "Djibril Sidibé",
                        "team": "home",
                        "type": "yellow"
                    },
                    {
                        "minute": "78",
                        "player": "Adil Bourabaa",
                        "team": "home",
                        "type": "yellow"
                    }
                ]
            },
            {
                "league": "Jupiler Pro League",
                "date": "2026-09-20",
                "time": "01:45",
                "home": "Lommel United",
                "away": "KV Mechelen",
                "stadium": "Soeverein Stadion",
                "round": "Pekan 7",
                "statusCode": "FT",
                "minuteDisplay": "FT",
                "homeScore": 0,
                "awayScore": 0,
                "homeLogo": "https://media.api-sports.io/football/teams/259.png",
                "awayLogo": "https://media.api-sports.io/football/teams/266.png",
                "prediction": "2 - 1",
                "odds": {
                    "home": 45,
                    "draw": 45,
                    "away": 10
                },
                "advice": "Double chance : Lommel United or draw",
                "comparison": {
                    "form": {
                        "home": 75,
                        "away": 25
                    },
                    "att": {
                        "home": 50,
                        "away": 50
                    },
                    "def": {
                        "home": 63,
                        "away": 37
                    },
                    "poisson": {
                        "home": 82,
                        "away": 18
                    },
                    "h2h": {
                        "home": 50,
                        "away": 50
                    },
                    "goals": {
                        "home": 53,
                        "away": 47
                    }
                },
                "cards": [
                    {
                        "minute": "40",
                        "player": "Tom Reyners",
                        "team": "home",
                        "type": "yellow"
                    },
                    {
                        "minute": "45",
                        "player": "Dennis Praet",
                        "team": "away",
                        "type": "yellow"
                    },
                    {
                        "minute": "48",
                        "player": "Simion Michez",
                        "team": "away",
                        "type": "yellow"
                    },
                    {
                        "minute": "70",
                        "player": "Mike Eerdhuijzen",
                        "team": "away",
                        "type": "yellow"
                    },
                    {
                        "minute": "90+3",
                        "player": "Marco Decherf",
                        "team": "away",
                        "type": "yellow"
                    },
                    {
                        "minute": "90+4",
                        "player": "Jason Van Duiven",
                        "team": "home",
                        "type": "yellow"
                    }
                ]
            },
            {
                "league": "Jupiler Pro League",
                "date": "2026-09-20",
                "time": "01:45",
                "home": "Anderlecht",
                "away": "Zulte Waregem",
                "stadium": "Lotto Park",
                "round": "Pekan 7",
                "statusCode": "FT",
                "minuteDisplay": "FT",
                "homeScore": 3,
                "awayScore": 0,
                "homeLogo": "https://media.api-sports.io/football/teams/554.png",
                "awayLogo": "https://media.api-sports.io/football/teams/600.png",
                "prediction": "1 - 2",
                "odds": {
                    "home": 10,
                    "draw": 45,
                    "away": 45
                },
                "advice": "Combo Double chance : draw or Zulte Waregem and -3.5 goals",
                "comparison": {
                    "form": {
                        "home": 47,
                        "away": 53
                    },
                    "att": {
                        "home": 20,
                        "away": 80
                    },
                    "def": {
                        "home": 43,
                        "away": 57
                    },
                    "poisson": {
                        "home": 53,
                        "away": 47
                    },
                    "h2h": {
                        "home": 40,
                        "away": 60
                    },
                    "goals": {
                        "home": 50,
                        "away": 50
                    }
                },
                "goals": [
                    {
                        "minute": "40",
                        "player": "Tawfik Bentayeb",
                        "team": "home"
                    },
                    {
                        "minute": "48",
                        "player": "Marten Winkler",
                        "team": "home"
                    },
                    {
                        "minute": "54",
                        "player": "Marten Winkler",
                        "team": "home"
                    }
                ],
                "cards": [
                    {
                        "minute": "24",
                        "player": "Laurent Lemoine",
                        "team": "away",
                        "type": "yellow"
                    },
                    {
                        "minute": "34",
                        "player": "Lukas Ambros",
                        "team": "home",
                        "type": "yellow"
                    },
                    {
                        "minute": "80",
                        "player": "Marco Kana",
                        "team": "home",
                        "type": "yellow"
                    }
                ]
            },
            {
                "league": "LaLiga",
                "date": "2026-09-20",
                "time": "02:00",
                "home": "Sevilla",
                "away": "Barcelona",
                "stadium": "Estadio Ramón Sánchez-Pizjuán",
                "round": "Pekan 7",
                "statusCode": "FT",
                "minuteDisplay": "FT",
                "homeScore": 1,
                "awayScore": 3,
                "homeLogo": "https://media.api-sports.io/football/teams/536.png",
                "awayLogo": "https://media.api-sports.io/football/teams/529.png",
                "prediction": "1 - 3",
                "odds": {
                    "home": 10,
                    "draw": 45,
                    "away": 45
                },
                "advice": "Combo Winner : Barcelona and +1.5 goals",
                "comparison": {
                    "form": {
                        "home": 40,
                        "away": 60
                    },
                    "att": {
                        "home": 23,
                        "away": 77
                    },
                    "def": {
                        "home": 55,
                        "away": 45
                    },
                    "poisson": {
                        "home": 10,
                        "away": 90
                    },
                    "h2h": {
                        "home": 20,
                        "away": 80
                    },
                    "goals": {
                        "home": 35,
                        "away": 65
                    }
                },
                "goals": [
                    {
                        "minute": "19",
                        "player": "Youssouf Fofana",
                        "team": "home"
                    },
                    {
                        "minute": "22",
                        "player": "Raphael Dias Belloli",
                        "team": "away"
                    },
                    {
                        "minute": "52",
                        "player": "Raphael Dias Belloli",
                        "team": "away"
                    },
                    {
                        "minute": "69",
                        "player": "Raphael Dias Belloli",
                        "team": "away"
                    }
                ],
                "cards": [
                    {
                        "minute": "80",
                        "player": "Lucien Agoumé",
                        "team": "home",
                        "type": "yellow"
                    }
                ]
            },
            {
                "league": "Eredivisie",
                "date": "2026-09-20",
                "time": "02:00",
                "home": "Willem II",
                "away": "Fortuna Sittard",
                "stadium": "Koning Willem II Stadion",
                "round": "Pekan 7",
                "statusCode": "FT",
                "minuteDisplay": "FT",
                "homeScore": 0,
                "awayScore": 1,
                "homeLogo": "https://media.api-sports.io/football/teams/195.png",
                "awayLogo": "https://media.api-sports.io/football/teams/205.png",
                "prediction": "2 - 3",
                "odds": {
                    "home": 10,
                    "draw": 45,
                    "away": 45
                },
                "advice": "Combo Double chance : draw or Fortuna Sittard and +1.5 goals",
                "comparison": {
                    "form": {
                        "home": 18,
                        "away": 82
                    },
                    "att": {
                        "home": 33,
                        "away": 67
                    },
                    "def": {
                        "home": 44,
                        "away": 56
                    },
                    "poisson": {
                        "home": 25,
                        "away": 75
                    },
                    "h2h": {
                        "home": 38,
                        "away": 62
                    },
                    "goals": {
                        "home": 43,
                        "away": 57
                    }
                },
                "goals": [
                    {
                        "minute": "79",
                        "player": "Philip Brittijn",
                        "team": "away"
                    }
                ],
                "cards": [
                    {
                        "minute": "19",
                        "player": "Nathan Tjoe-A-On",
                        "team": "home",
                        "type": "yellow"
                    },
                    {
                        "minute": "64",
                        "player": "Uriël van Aalst",
                        "team": "home",
                        "type": "yellow"
                    },
                    {
                        "minute": "72",
                        "player": "Vito van Crooy",
                        "team": "home",
                        "type": "yellow"
                    },
                    {
                        "minute": "90+3",
                        "player": "Ivo Pinto",
                        "team": "away",
                        "type": "yellow"
                    }
                ]
            },
            {
                "league": "Primeira Liga",
                "date": "2026-09-20",
                "time": "02:30",
                "home": "Sporting CP",
                "away": "Arouca",
                "stadium": "Estádio José Alvalade",
                "round": "Pekan 7",
                "statusCode": "FT",
                "minuteDisplay": "FT",
                "homeScore": 2,
                "awayScore": 2,
                "homeLogo": "https://media.api-sports.io/football/teams/228.png",
                "awayLogo": "https://media.api-sports.io/football/teams/240.png",
                "prediction": "2 - 1",
                "odds": {
                    "home": 45,
                    "draw": 45,
                    "away": 10
                },
                "advice": "Double chance : Sporting CP or draw",
                "comparison": {
                    "form": {
                        "home": 65,
                        "away": 35
                    },
                    "att": {
                        "home": 65,
                        "away": 35
                    },
                    "def": {
                        "home": 56,
                        "away": 44
                    },
                    "poisson": {
                        "home": 85,
                        "away": 15
                    },
                    "h2h": {
                        "home": 93,
                        "away": 7
                    },
                    "goals": {
                        "home": 84,
                        "away": 16
                    }
                },
                "goals": [
                    {
                        "minute": "3",
                        "player": "Gonçalo Inácio",
                        "team": "home"
                    },
                    {
                        "minute": "17",
                        "player": "Luis Suárez",
                        "team": "home"
                    },
                    {
                        "minute": "81",
                        "player": "Jose Fontán",
                        "team": "away"
                    },
                    {
                        "minute": "87",
                        "player": "Dylan Nandín",
                        "team": "away"
                    }
                ],
                "cards": [
                    {
                        "minute": "36",
                        "player": "Espen van Ee",
                        "team": "away",
                        "type": "yellow"
                    },
                    {
                        "minute": "44",
                        "player": "Javi Sánchez",
                        "team": "away",
                        "type": "yellow"
                    },
                    {
                        "minute": "51",
                        "player": "Jose Fontán",
                        "team": "away",
                        "type": "yellow"
                    },
                    {
                        "minute": "54",
                        "player": "Zeno Debast",
                        "team": "home",
                        "type": "red"
                    },
                    {
                        "minute": "61",
                        "player": "Luis Suárez",
                        "team": "home",
                        "type": "yellow"
                    },
                    {
                        "minute": "61",
                        "player": "Pedro Santos",
                        "team": "away",
                        "type": "yellow"
                    },
                    {
                        "minute": "80",
                        "player": "Eduardo Quaresma",
                        "team": "home",
                        "type": "yellow"
                    },
                    {
                        "minute": "90+2",
                        "player": "Brian Mansilla",
                        "team": "away",
                        "type": "yellow"
                    },
                    {
                        "minute": "90+4",
                        "player": "Maximiliano Araujo",
                        "team": "home",
                        "type": "yellow"
                    },
                    {
                        "minute": "90+8",
                        "player": "Gonçalo Inácio",
                        "team": "home",
                        "type": "yellow"
                    }
                ]
            },
            {
                "league": "Liga MX",
                "date": "2026-09-20",
                "time": "06:00",
                "home": "Atlas",
                "away": "U.N.A.M. - Pumas",
                "stadium": "Estadio Jalisco",
                "round": "Apertura - 9",
                "statusCode": "FT",
                "minuteDisplay": "FT",
                "homeScore": 1,
                "awayScore": 1,
                "homeLogo": "https://media.api-sports.io/football/teams/2283.png",
                "awayLogo": "https://media.api-sports.io/football/teams/2286.png",
                "prediction": "2 - 1",
                "odds": {
                    "home": 10,
                    "draw": 45,
                    "away": 45
                },
                "advice": "Double chance : draw or U.N.A.M. - Pumas",
                "comparison": {
                    "form": {
                        "home": 58,
                        "away": 42
                    },
                    "att": {
                        "home": 67,
                        "away": 33
                    },
                    "def": {
                        "home": 41,
                        "away": 59
                    },
                    "poisson": {
                        "home": 33,
                        "away": 67
                    },
                    "h2h": {
                        "home": 50,
                        "away": 50
                    },
                    "goals": {
                        "home": 50,
                        "away": 50
                    }
                },
                "goals": [
                    {
                        "minute": "23",
                        "player": "Ángel Azuaje",
                        "team": "away"
                    },
                    {
                        "minute": "45+6",
                        "player": "Luís André Leite Esteves",
                        "team": "home"
                    }
                ],
                "cards": [
                    {
                        "minute": "87",
                        "player": "Adalberto Carrasquilla",
                        "team": "away",
                        "type": "red"
                    }
                ]
            },
            {
                "league": "Liga MX",
                "date": "2026-09-20",
                "time": "06:00",
                "home": "Atletico San Luis",
                "away": "Necaxa",
                "stadium": "Estadio Libertad Financiera",
                "round": "Apertura - 9",
                "statusCode": "FT",
                "minuteDisplay": "FT",
                "homeScore": 3,
                "awayScore": 1,
                "homeLogo": "https://media.api-sports.io/football/teams/2314.png",
                "awayLogo": "https://media.api-sports.io/football/teams/2288.png",
                "prediction": "1 - 2",
                "odds": {
                    "home": 10,
                    "draw": 45,
                    "away": 45
                },
                "advice": "Double chance : draw or Necaxa",
                "comparison": {
                    "form": {
                        "home": 67,
                        "away": 33
                    },
                    "att": {
                        "home": 50,
                        "away": 50
                    },
                    "def": {
                        "home": 44,
                        "away": 56
                    },
                    "poisson": {
                        "home": 39,
                        "away": 61
                    },
                    "h2h": {
                        "home": 7,
                        "away": 93
                    },
                    "goals": {
                        "home": 26,
                        "away": 74
                    }
                },
                "goals": [
                    {
                        "minute": "10",
                        "player": "Julián Carranza",
                        "team": "away"
                    },
                    {
                        "minute": "27",
                        "player": "Felipe Mora",
                        "team": "home"
                    },
                    {
                        "minute": "54",
                        "player": "Christopher Andrade",
                        "team": "away"
                    },
                    {
                        "minute": "81",
                        "player": "Eduardo Aguila",
                        "team": "home"
                    }
                ],
                "cards": [
                    {
                        "minute": "80",
                        "player": "Pedro Pedraza",
                        "team": "away",
                        "type": "yellow"
                    },
                    {
                        "minute": "90+5",
                        "player": "Aldo Cruz",
                        "team": "home",
                        "type": "yellow"
                    }
                ]
            },
            {
                "league": "MLS",
                "date": "2026-09-20",
                "time": "06:30",
                "home": "San Jose Earthquakes",
                "away": "Los Angeles FC",
                "stadium": "PayPal Park",
                "round": "Pekan 26",
                "statusCode": "FT",
                "minuteDisplay": "FT",
                "homeScore": 2,
                "awayScore": 2,
                "homeLogo": "https://media.api-sports.io/football/teams/1596.png",
                "awayLogo": "https://media.api-sports.io/football/teams/1616.png",
                "prediction": "1 - 2",
                "odds": {
                    "home": 10,
                    "draw": 45,
                    "away": 45
                },
                "advice": "Double chance : draw or Los Angeles FC",
                "comparison": {
                    "form": {
                        "home": 57,
                        "away": 43
                    },
                    "att": {
                        "home": 50,
                        "away": 50
                    },
                    "def": {
                        "home": 43,
                        "away": 57
                    },
                    "poisson": {
                        "home": 44,
                        "away": 56
                    },
                    "h2h": {
                        "home": 38,
                        "away": 62
                    },
                    "goals": {
                        "home": 50,
                        "away": 50
                    }
                },
                "goals": [
                    {
                        "minute": "34",
                        "player": "Son Heung-Min",
                        "team": "away"
                    },
                    {
                        "minute": "53",
                        "player": "D. Bouanga",
                        "team": "away"
                    },
                    {
                        "minute": "70",
                        "player": "P. Judd",
                        "team": "home"
                    },
                    {
                        "minute": "90+8",
                        "player": "R. Roberts",
                        "team": "home"
                    }
                ],
                "cards": [
                    {
                        "minute": "37",
                        "player": "A. Long",
                        "team": "away",
                        "type": "red"
                    },
                    {
                        "minute": "66",
                        "player": "P. Judd",
                        "team": "home",
                        "type": "yellow"
                    },
                    {
                        "minute": "73",
                        "player": "M. Delgado",
                        "team": "away",
                        "type": "yellow"
                    },
                    {
                        "minute": "75",
                        "player": "S. Palencia",
                        "team": "away",
                        "type": "yellow"
                    },
                    {
                        "minute": "90+6",
                        "player": "N. Tsakiris",
                        "team": "home",
                        "type": "yellow"
                    }
                ]
            },
            {
                "league": "MLS",
                "date": "2026-09-20",
                "time": "06:30",
                "home": "New England Revolution",
                "away": "Orlando City SC",
                "stadium": "Gillette Stadium",
                "round": "Pekan 26",
                "statusCode": "FT",
                "minuteDisplay": "FT",
                "homeScore": 4,
                "awayScore": 2,
                "homeLogo": "https://media.api-sports.io/football/teams/1609.png",
                "awayLogo": "https://media.api-sports.io/football/teams/1598.png",
                "prediction": "2 - 3",
                "odds": {
                    "home": 10,
                    "draw": 45,
                    "away": 45
                },
                "advice": "Double chance : draw or Orlando City SC",
                "comparison": {
                    "form": {
                        "home": 43,
                        "away": 57
                    },
                    "att": {
                        "home": 43,
                        "away": 57
                    },
                    "def": {
                        "home": 50,
                        "away": 50
                    },
                    "poisson": {
                        "home": 74,
                        "away": 26
                    },
                    "h2h": {
                        "home": 7,
                        "away": 93
                    },
                    "goals": {
                        "home": 35,
                        "away": 65
                    }
                },
                "goals": [
                    {
                        "minute": "19",
                        "player": "C. Gil",
                        "team": "home"
                    },
                    {
                        "minute": "59",
                        "player": "P. Miller",
                        "team": "home"
                    },
                    {
                        "minute": "62",
                        "player": "I. Angulo",
                        "team": "away"
                    },
                    {
                        "minute": "88",
                        "player": "M. Ojeda",
                        "team": "away"
                    },
                    {
                        "minute": "90+3",
                        "player": "P. Miller",
                        "team": "home"
                    },
                    {
                        "minute": "90+6",
                        "player": "C. Gil",
                        "team": "home"
                    }
                ],
                "cards": [
                    {
                        "minute": "14",
                        "player": "B. Raines",
                        "team": "home",
                        "type": "yellow"
                    },
                    {
                        "minute": "47",
                        "player": "W. Sands",
                        "team": "home",
                        "type": "yellow"
                    },
                    {
                        "minute": "80",
                        "player": "I. Feingold",
                        "team": "home",
                        "type": "yellow"
                    },
                    {
                        "minute": "90+4",
                        "player": "P. Miller",
                        "team": "home",
                        "type": "yellow"
                    }
                ]
            },
            {
                "league": "MLS",
                "date": "2026-09-20",
                "time": "06:30",
                "home": "CF Montreal",
                "away": "Columbus Crew",
                "stadium": "Saputo Stadium",
                "round": "Pekan 26",
                "statusCode": "FT",
                "minuteDisplay": "FT",
                "homeScore": 0,
                "awayScore": 2,
                "homeLogo": "https://media.api-sports.io/football/teams/1614.png",
                "awayLogo": "https://media.api-sports.io/football/teams/1613.png",
                "prediction": "1 - 2",
                "odds": {
                    "home": 10,
                    "draw": 45,
                    "away": 45
                },
                "advice": "Double chance : draw or Columbus Crew",
                "comparison": {
                    "form": {
                        "home": 25,
                        "away": 75
                    },
                    "att": {
                        "home": 36,
                        "away": 64
                    },
                    "def": {
                        "home": 39,
                        "away": 61
                    },
                    "poisson": {
                        "home": 55,
                        "away": 45
                    },
                    "h2h": {
                        "home": 38,
                        "away": 62
                    },
                    "goals": {
                        "home": 42,
                        "away": 58
                    }
                },
                "goals": [
                    {
                        "minute": "57",
                        "player": "M. Farsi",
                        "team": "away"
                    },
                    {
                        "minute": "68",
                        "player": "B. Mendez",
                        "team": "away"
                    }
                ],
                "cards": [
                    {
                        "minute": "2",
                        "player": "B. Ceballos",
                        "team": "home",
                        "type": "yellow"
                    },
                    {
                        "minute": "32",
                        "player": "S. Moreira",
                        "team": "away",
                        "type": "yellow"
                    },
                    {
                        "minute": "84",
                        "player": "S. Piette",
                        "team": "home",
                        "type": "yellow"
                    }
                ]
            },
            {
                "league": "MLS",
                "date": "2026-09-20",
                "time": "06:30",
                "home": "DC United",
                "away": "Charlotte",
                "stadium": "Audi Field",
                "round": "Pekan 26",
                "statusCode": "FT",
                "minuteDisplay": "FT",
                "homeScore": 1,
                "awayScore": 2,
                "homeLogo": "https://media.api-sports.io/football/teams/1615.png",
                "awayLogo": "https://media.api-sports.io/football/teams/18310.png",
                "prediction": "1 - 2",
                "odds": {
                    "home": 10,
                    "draw": 45,
                    "away": 45
                },
                "advice": "Winner : Charlotte",
                "comparison": {
                    "form": {
                        "home": 31,
                        "away": 69
                    },
                    "att": {
                        "home": 23,
                        "away": 77
                    },
                    "def": {
                        "home": 42,
                        "away": 58
                    },
                    "poisson": {
                        "home": 40,
                        "away": 60
                    },
                    "h2h": {
                        "home": 20,
                        "away": 80
                    },
                    "goals": {
                        "home": 33,
                        "away": 67
                    }
                },
                "goals": [
                    {
                        "minute": "22",
                        "player": "A. Westwood",
                        "team": "away"
                    },
                    {
                        "minute": "47",
                        "player": "L. Bartlett",
                        "team": "home"
                    },
                    {
                        "minute": "71",
                        "player": "A. Saint-Maximin",
                        "team": "away"
                    }
                ],
                "cards": [
                    {
                        "minute": "3",
                        "player": "Peglow",
                        "team": "home",
                        "type": "yellow"
                    },
                    {
                        "minute": "47",
                        "player": "D. Schnegg",
                        "team": "away",
                        "type": "yellow"
                    },
                    {
                        "minute": "57",
                        "player": "A. Dozzell",
                        "team": "home",
                        "type": "yellow"
                    },
                    {
                        "minute": "82",
                        "player": "A. Westwood",
                        "team": "away",
                        "type": "yellow"
                    }
                ]
            },
            {
                "league": "MLS",
                "date": "2026-09-20",
                "time": "07:30",
                "home": "FC Dallas",
                "away": "Austin",
                "stadium": "Toyota Stadium",
                "round": "Pekan 26",
                "statusCode": "FT",
                "minuteDisplay": "FT",
                "homeScore": 0,
                "awayScore": 0,
                "homeLogo": "https://media.api-sports.io/football/teams/1597.png",
                "awayLogo": "https://media.api-sports.io/football/teams/16489.png",
                "prediction": "3 - 2",
                "odds": {
                    "home": 45,
                    "draw": 45,
                    "away": 10
                },
                "advice": "Combo Double chance : FC Dallas or draw and +1.5 goals",
                "comparison": {
                    "form": {
                        "home": 53,
                        "away": 47
                    },
                    "att": {
                        "home": 61,
                        "away": 39
                    },
                    "def": {
                        "home": 28,
                        "away": 72
                    },
                    "poisson": {
                        "home": 64,
                        "away": 36
                    },
                    "h2h": {
                        "home": 93,
                        "away": 7
                    },
                    "goals": {
                        "home": 71,
                        "away": 29
                    }
                },
                "cards": [
                    {
                        "minute": "3",
                        "player": "M. Desler",
                        "team": "away",
                        "type": "yellow"
                    },
                    {
                        "minute": "35",
                        "player": "S. Moore",
                        "team": "home",
                        "type": "yellow"
                    },
                    {
                        "minute": "48",
                        "player": "J. Rosales",
                        "team": "away",
                        "type": "yellow"
                    },
                    {
                        "minute": "90+7",
                        "player": "Ramiro",
                        "team": "home",
                        "type": "yellow"
                    }
                ]
            },
            {
                "league": "MLS",
                "date": "2026-09-20",
                "time": "07:30",
                "home": "Houston Dynamo",
                "away": "FC Cincinnati",
                "stadium": "Shell Energy Stadium",
                "round": "Pekan 26",
                "statusCode": "FT",
                "minuteDisplay": "FT",
                "homeScore": 2,
                "awayScore": 2,
                "homeLogo": "https://media.api-sports.io/football/teams/1600.png",
                "awayLogo": "https://media.api-sports.io/football/teams/2242.png",
                "prediction": "2 - 1",
                "odds": {
                    "home": 35,
                    "draw": 35,
                    "away": 30
                },
                "advice": "Double chance : Houston Dynamo or draw",
                "comparison": {
                    "form": {
                        "home": 50,
                        "away": 50
                    },
                    "att": {
                        "home": 33,
                        "away": 67
                    },
                    "def": {
                        "home": 78,
                        "away": 22
                    },
                    "poisson": {
                        "home": 73,
                        "away": 27
                    },
                    "h2h": {
                        "home": 25,
                        "away": 75
                    },
                    "goals": {
                        "home": 43,
                        "away": 57
                    }
                },
                "goals": [
                    {
                        "minute": "38",
                        "player": "Guilherme",
                        "team": "home"
                    },
                    {
                        "minute": "50",
                        "player": "M. Bogusz",
                        "team": "home"
                    },
                    {
                        "minute": "73",
                        "player": "B. J. Ramirez Leon",
                        "team": "away"
                    },
                    {
                        "minute": "90+7",
                        "player": "K. Denkey",
                        "team": "away"
                    }
                ]
            },
            {
                "league": "MLS",
                "date": "2026-09-20",
                "time": "07:30",
                "home": "Sporting Kansas City",
                "away": "Philadelphia Union",
                "stadium": "Children's Mercy Park",
                "round": "Pekan 26",
                "statusCode": "FT",
                "minuteDisplay": "FT",
                "homeScore": 3,
                "awayScore": 4,
                "homeLogo": "https://media.api-sports.io/football/teams/1611.png",
                "awayLogo": "https://media.api-sports.io/football/teams/1599.png",
                "prediction": "1 - 3",
                "odds": {
                    "home": 34,
                    "draw": 50,
                    "away": 50
                },
                "advice": "Combo Double chance : draw or Philadelphia Union and +1.5 goals",
                "comparison": {
                    "form": {
                        "home": 24,
                        "away": 76
                    },
                    "att": {
                        "home": 33,
                        "away": 67
                    },
                    "def": {
                        "home": 15,
                        "away": 85
                    },
                    "poisson": {
                        "home": 35,
                        "away": 65
                    },
                    "h2h": {
                        "home": 38,
                        "away": 62
                    },
                    "goals": {
                        "home": 40,
                        "away": 60
                    }
                },
                "goals": [
                    {
                        "minute": "5",
                        "player": "Andre Luiz",
                        "team": "home"
                    },
                    {
                        "minute": "10",
                        "player": "Andre Luiz",
                        "team": "home"
                    },
                    {
                        "minute": "16",
                        "player": "W. Meyer",
                        "team": "home"
                    },
                    {
                        "minute": "64",
                        "player": "B. Damiani",
                        "team": "away"
                    },
                    {
                        "minute": "66",
                        "player": "C. Sullivan",
                        "team": "away"
                    },
                    {
                        "minute": "68",
                        "player": "M. Iloski",
                        "team": "away"
                    },
                    {
                        "minute": "73",
                        "player": "Z. Bassong",
                        "team": "home"
                    }
                ],
                "cards": [
                    {
                        "minute": "45",
                        "player": "K. Agyabeng",
                        "team": "home",
                        "type": "yellow"
                    },
                    {
                        "minute": "45+7",
                        "player": "J. Bueno",
                        "team": "away",
                        "type": "yellow"
                    },
                    {
                        "minute": "53",
                        "player": "L. Johnsen",
                        "team": "home",
                        "type": "yellow"
                    },
                    {
                        "minute": "70",
                        "player": "C. Sullivan",
                        "team": "away",
                        "type": "yellow"
                    },
                    {
                        "minute": "80",
                        "player": "K. Wagner",
                        "team": "away",
                        "type": "yellow"
                    },
                    {
                        "minute": "90+6",
                        "player": "D. Jean Jacques",
                        "team": "away",
                        "type": "yellow"
                    },
                    {
                        "minute": "90+8",
                        "player": "Z. Bassong",
                        "team": "home",
                        "type": "yellow"
                    }
                ]
            },
            {
                "league": "MLS",
                "date": "2026-09-20",
                "time": "07:30",
                "home": "Minnesota United FC",
                "away": "Los Angeles Galaxy",
                "stadium": "Allianz Field",
                "round": "Pekan 26",
                "statusCode": "FT",
                "minuteDisplay": "FT",
                "homeScore": 2,
                "awayScore": 3,
                "homeLogo": "https://media.api-sports.io/football/teams/1612.png",
                "awayLogo": "https://media.api-sports.io/football/teams/1605.png",
                "prediction": "3 - 2",
                "odds": {
                    "home": 10,
                    "draw": 45,
                    "away": 45
                },
                "advice": "Double chance : draw or Los Angeles Galaxy",
                "comparison": {
                    "form": {
                        "home": 44,
                        "away": 56
                    },
                    "att": {
                        "home": 71,
                        "away": 29
                    },
                    "def": {
                        "home": 40,
                        "away": 60
                    },
                    "poisson": {
                        "home": 51,
                        "away": 49
                    },
                    "h2h": {
                        "home": 29,
                        "away": 71
                    },
                    "goals": {
                        "home": 38,
                        "away": 62
                    }
                },
                "goals": [
                    {
                        "minute": "12",
                        "player": "P. Ruiz",
                        "team": "away"
                    },
                    {
                        "minute": "23",
                        "player": "M. Caldeira",
                        "team": "home"
                    },
                    {
                        "minute": "28",
                        "player": "K. Yeboah",
                        "team": "home"
                    },
                    {
                        "minute": "76",
                        "player": "Joao Klauss",
                        "team": "away"
                    },
                    {
                        "minute": "80",
                        "player": "M. Reus",
                        "team": "away"
                    }
                ],
                "cards": [
                    {
                        "minute": "26",
                        "player": "R. Taylor",
                        "team": "away",
                        "type": "yellow"
                    },
                    {
                        "minute": "69",
                        "player": "C. Harvey",
                        "team": "home",
                        "type": "yellow"
                    }
                ]
            },
            {
                "league": "MLS",
                "date": "2026-09-20",
                "time": "07:30",
                "home": "St. Louis City",
                "away": "Toronto FC",
                "stadium": "CITYPARK",
                "round": "Pekan 26",
                "statusCode": "FT",
                "minuteDisplay": "FT",
                "homeScore": 3,
                "awayScore": 1,
                "homeLogo": "https://media.api-sports.io/football/teams/20787.png",
                "awayLogo": "https://media.api-sports.io/football/teams/1601.png",
                "prediction": "3 - 2",
                "odds": {
                    "home": 45,
                    "draw": 45,
                    "away": 10
                },
                "advice": "Double chance : St. Louis City or draw",
                "comparison": {
                    "form": {
                        "home": 58,
                        "away": 42
                    },
                    "att": {
                        "home": 61,
                        "away": 39
                    },
                    "def": {
                        "home": 53,
                        "away": 47
                    },
                    "poisson": {
                        "home": 70,
                        "away": 30
                    },
                    "h2h": {
                        "home": 100,
                        "away": 0
                    },
                    "goals": {
                        "home": 100,
                        "away": 0
                    }
                },
                "goals": [
                    {
                        "minute": "41",
                        "player": "C. Holse",
                        "team": "home"
                    },
                    {
                        "minute": "54",
                        "player": "T. Totland",
                        "team": "home"
                    },
                    {
                        "minute": "68",
                        "player": "S. Becher",
                        "team": "home"
                    },
                    {
                        "minute": "90+7",
                        "player": "T. Corbeanu",
                        "team": "away"
                    }
                ],
                "cards": [
                    {
                        "minute": "23",
                        "player": "W. Zimmerman",
                        "team": "away",
                        "type": "yellow"
                    },
                    {
                        "minute": "28",
                        "player": "C. Wallem",
                        "team": "home",
                        "type": "yellow"
                    },
                    {
                        "minute": "73",
                        "player": "F. Fall",
                        "team": "home",
                        "type": "yellow"
                    },
                    {
                        "minute": "74",
                        "player": "A. Coello",
                        "team": "away",
                        "type": "yellow"
                    }
                ]
            },
            {
                "league": "Liga de Expansion MX",
                "date": "2026-09-20",
                "time": "08:00",
                "home": "Monarcas",
                "away": "Leones Negros UDG",
                "stadium": "Estadio Morelos",
                "round": "Apertura - 9",
                "statusCode": "FT",
                "minuteDisplay": "FT",
                "homeScore": 2,
                "awayScore": 0,
                "homeLogo": "https://media.api-sports.io/football/teams/2284.png",
                "awayLogo": "https://media.api-sports.io/football/teams/2307.png",
                "prediction": "1 - 2",
                "odds": {
                    "home": 10,
                    "draw": 45,
                    "away": 45
                },
                "advice": "Combo Winner : Leones Negros UDG and +1.5 goals",
                "comparison": {
                    "form": {
                        "home": 52,
                        "away": 48
                    },
                    "att": {
                        "home": 43,
                        "away": 57
                    },
                    "def": {
                        "home": 50,
                        "away": 50
                    },
                    "poisson": {
                        "home": 31,
                        "away": 69
                    },
                    "h2h": {
                        "home": 20,
                        "away": 80
                    },
                    "goals": {
                        "home": 36,
                        "away": 64
                    }
                },
                "goals": [
                    {
                        "minute": "23",
                        "player": "R. del Campo",
                        "team": "home"
                    },
                    {
                        "minute": "59",
                        "player": "D. Zamora",
                        "team": "home"
                    }
                ],
                "cards": [
                    {
                        "minute": "40",
                        "player": "D. Aguilar",
                        "team": "home",
                        "type": "yellow"
                    },
                    {
                        "minute": "41",
                        "player": "U. Torres",
                        "team": "away",
                        "type": "yellow"
                    },
                    {
                        "minute": "44",
                        "player": "R. del Campo",
                        "team": "home",
                        "type": "yellow"
                    },
                    {
                        "minute": "45+2",
                        "player": "J. Aguayo",
                        "team": "away",
                        "type": "yellow"
                    },
                    {
                        "minute": "73",
                        "player": "M. Nambo",
                        "team": "home",
                        "type": "yellow"
                    },
                    {
                        "minute": "79",
                        "player": "M. Valenzuela",
                        "team": "away",
                        "type": "yellow"
                    },
                    {
                        "minute": "83",
                        "player": "J. Martinez",
                        "team": "home",
                        "type": "yellow"
                    },
                    {
                        "minute": "88",
                        "player": "O. Gonzalez",
                        "team": "away",
                        "type": "red"
                    }
                ]
            },
            {
                "league": "Liga de Expansion MX",
                "date": "2026-09-20",
                "time": "08:00",
                "home": "Cancún",
                "away": "Alebrijes de Oaxaca",
                "stadium": "",
                "round": "Apertura - 9",
                "statusCode": "FT",
                "minuteDisplay": "FT",
                "homeScore": 3,
                "awayScore": 0,
                "homeLogo": "https://media.api-sports.io/football/teams/14276.png",
                "awayLogo": "https://media.api-sports.io/football/teams/2300.png",
                "prediction": "2 - 1",
                "odds": {
                    "home": 45,
                    "draw": 45,
                    "away": 10
                },
                "advice": "Winner : Cancún",
                "comparison": {
                    "form": {
                        "home": 53,
                        "away": 47
                    },
                    "att": {
                        "home": 69,
                        "away": 31
                    },
                    "def": {
                        "home": 58,
                        "away": 42
                    },
                    "poisson": {
                        "home": 77,
                        "away": 23
                    },
                    "h2h": {
                        "home": 93,
                        "away": 7
                    },
                    "goals": {
                        "home": 89,
                        "away": 11
                    }
                },
                "goals": [
                    {
                        "minute": "71",
                        "player": "K. Campos",
                        "team": "home"
                    },
                    {
                        "minute": "72",
                        "player": "J. Rodriguez",
                        "team": "home"
                    },
                    {
                        "minute": "81",
                        "player": "C. Trejo",
                        "team": "home"
                    }
                ],
                "cards": [
                    {
                        "minute": "17",
                        "player": "A. Tecpanecatl",
                        "team": "away",
                        "type": "yellow"
                    },
                    {
                        "minute": "29",
                        "player": "J. Bustos",
                        "team": "away",
                        "type": "yellow"
                    },
                    {
                        "minute": "29",
                        "player": "K. Alvarez",
                        "team": "away",
                        "type": "yellow"
                    },
                    {
                        "minute": "37",
                        "player": "C. Trejo",
                        "team": "home",
                        "type": "yellow"
                    },
                    {
                        "minute": "38",
                        "player": "D. Guillen",
                        "team": "home",
                        "type": "yellow"
                    },
                    {
                        "minute": "45+5",
                        "player": "P. Villa",
                        "team": "away",
                        "type": "yellow"
                    },
                    {
                        "minute": "54",
                        "player": "F. Melendre",
                        "team": "home",
                        "type": "yellow"
                    },
                    {
                        "minute": "56",
                        "player": "D. Martinez",
                        "team": "away",
                        "type": "yellow"
                    },
                    {
                        "minute": "77",
                        "player": "A. Arellano",
                        "team": "away",
                        "type": "red"
                    }
                ]
            },
            {
                "league": "Liga de Expansion MX",
                "date": "2026-09-20",
                "time": "08:00",
                "home": "CDS Tampico Madero",
                "away": "Dorados",
                "stadium": "Estadio Tamaulipas",
                "round": "Apertura - 9",
                "statusCode": "FT",
                "minuteDisplay": "FT",
                "homeScore": 1,
                "awayScore": 1,
                "homeLogo": "https://media.api-sports.io/football/teams/19905.png",
                "awayLogo": "https://media.api-sports.io/football/teams/2297.png",
                "prediction": "2 - 2",
                "odds": {
                    "home": 35,
                    "draw": 35,
                    "away": 30
                },
                "advice": "Combo Double chance : CDS Tampico Madero or draw and +1.5 goals",
                "comparison": {
                    "form": {
                        "home": 46,
                        "away": 54
                    },
                    "att": {
                        "home": 41,
                        "away": 59
                    },
                    "def": {
                        "home": 38,
                        "away": 62
                    },
                    "poisson": {
                        "home": 49,
                        "away": 51
                    },
                    "h2h": {
                        "home": 100,
                        "away": 0
                    },
                    "goals": {
                        "home": 67,
                        "away": 33
                    }
                },
                "goals": [
                    {
                        "minute": "50",
                        "player": "J. A. Ocejo Zazueta",
                        "team": "home"
                    },
                    {
                        "minute": "90+7",
                        "player": "F. Pena",
                        "team": "away"
                    }
                ],
                "cards": [
                    {
                        "minute": "10",
                        "player": "I. Ochoa",
                        "team": "home",
                        "type": "yellow"
                    },
                    {
                        "minute": "22",
                        "player": "A. Flores",
                        "team": "away",
                        "type": "yellow"
                    },
                    {
                        "minute": "45+4",
                        "player": "R. Franco",
                        "team": "away",
                        "type": "yellow"
                    },
                    {
                        "minute": "54",
                        "player": "J. A. Ocejo Zazueta",
                        "team": "home",
                        "type": "yellow"
                    },
                    {
                        "minute": "62",
                        "player": "O. Manzanarez",
                        "team": "home",
                        "type": "yellow"
                    },
                    {
                        "minute": "87",
                        "player": "F. Lopez",
                        "team": "home",
                        "type": "yellow"
                    },
                    {
                        "minute": "90+1",
                        "player": "D. Alcantar",
                        "team": "home",
                        "type": "red"
                    },
                    {
                        "minute": "90+7",
                        "player": "O. Coronel",
                        "team": "away",
                        "type": "yellow"
                    }
                ]
            },
            {
                "league": "Liga MX",
                "date": "2026-09-20",
                "time": "08:10",
                "home": "Monterrey",
                "away": "Cruz Azul",
                "stadium": "Estadio BBVA",
                "round": "Apertura - 9",
                "statusCode": "FT",
                "minuteDisplay": "FT",
                "homeScore": 1,
                "awayScore": 0,
                "homeLogo": "https://media.api-sports.io/football/teams/2282.png",
                "awayLogo": "https://media.api-sports.io/football/teams/2295.png",
                "prediction": "2 - 3",
                "odds": {
                    "home": 10,
                    "draw": 45,
                    "away": 45
                },
                "advice": "Combo Double chance : draw or Cruz Azul and +1.5 goals",
                "comparison": {
                    "form": {
                        "home": 44,
                        "away": 56
                    },
                    "att": {
                        "home": 50,
                        "away": 50
                    },
                    "def": {
                        "home": 57,
                        "away": 43
                    },
                    "poisson": {
                        "home": 51,
                        "away": 49
                    },
                    "h2h": {
                        "home": 15,
                        "away": 85
                    },
                    "goals": {
                        "home": 31,
                        "away": 69
                    }
                },
                "goals": [
                    {
                        "minute": "7",
                        "player": "César Garza",
                        "team": "home"
                    }
                ],
                "cards": [
                    {
                        "minute": "58",
                        "player": "César Garza",
                        "team": "home",
                        "type": "yellow"
                    },
                    {
                        "minute": "58",
                        "player": "Gabriel Fernández",
                        "team": "away",
                        "type": "yellow"
                    },
                    {
                        "minute": "60",
                        "player": "Gonzalo Piovi",
                        "team": "away",
                        "type": "yellow"
                    }
                ]
            },
            {
                "league": "MLS",
                "date": "2026-09-20",
                "time": "08:30",
                "home": "Real Salt Lake",
                "away": "Vancouver Whitecaps",
                "stadium": "America First Field",
                "round": "Pekan 26",
                "statusCode": "FT",
                "minuteDisplay": "FT",
                "homeScore": 0,
                "awayScore": 3,
                "homeLogo": "https://media.api-sports.io/football/teams/1606.png",
                "awayLogo": "https://media.api-sports.io/football/teams/1603.png",
                "prediction": "1 - 2",
                "odds": {
                    "home": 10,
                    "draw": 45,
                    "away": 45
                },
                "advice": "Double chance : draw or Vancouver Whitecaps",
                "comparison": {
                    "form": {
                        "home": 10,
                        "away": 90
                    },
                    "att": {
                        "home": 24,
                        "away": 76
                    },
                    "def": {
                        "home": 36,
                        "away": 64
                    },
                    "poisson": {
                        "home": 38,
                        "away": 62
                    },
                    "h2h": {
                        "home": 40,
                        "away": 60
                    },
                    "goals": {
                        "home": 47,
                        "away": 53
                    }
                },
                "goals": [
                    {
                        "minute": "9",
                        "player": "B. White",
                        "team": "away"
                    },
                    {
                        "minute": "29",
                        "player": "T. Muller",
                        "team": "away"
                    },
                    {
                        "minute": "64",
                        "player": "Y. Diaby",
                        "team": "away"
                    }
                ],
                "cards": [
                    {
                        "minute": "49",
                        "player": "T. Johnson",
                        "team": "away",
                        "type": "yellow"
                    },
                    {
                        "minute": "52",
                        "player": "J. Badwal",
                        "team": "away",
                        "type": "yellow"
                    },
                    {
                        "minute": "59",
                        "player": "N. Caliskan",
                        "team": "home",
                        "type": "yellow"
                    },
                    {
                        "minute": "66",
                        "player": "T. Blackmon",
                        "team": "away",
                        "type": "yellow"
                    },
                    {
                        "minute": "72",
                        "player": "M. Guilavogui",
                        "team": "home",
                        "type": "yellow"
                    },
                    {
                        "minute": "81",
                        "player": "Y. Diaby",
                        "team": "away",
                        "type": "yellow"
                    },
                    {
                        "minute": "90+1",
                        "player": "E. Ocampo",
                        "team": "away",
                        "type": "yellow"
                    }
                ]
            },
            {
                "league": "MLS",
                "date": "2026-09-20",
                "time": "08:30",
                "home": "Colorado Rapids",
                "away": "Seattle Sounders",
                "stadium": "Dick's Sporting Goods Park",
                "round": "Pekan 26",
                "statusCode": "FT",
                "minuteDisplay": "FT",
                "homeScore": 3,
                "awayScore": 3,
                "homeLogo": "https://media.api-sports.io/football/teams/1610.png",
                "awayLogo": "https://media.api-sports.io/football/teams/1595.png",
                "prediction": "1 - 2",
                "odds": {
                    "home": 10,
                    "draw": 45,
                    "away": 45
                },
                "advice": "Combo Double chance : draw or Seattle Sounders and -3.5 goals",
                "comparison": {
                    "form": {
                        "home": 64,
                        "away": 36
                    },
                    "att": {
                        "home": 38,
                        "away": 63
                    },
                    "def": {
                        "home": 46,
                        "away": 54
                    },
                    "poisson": {
                        "home": 71,
                        "away": 29
                    },
                    "h2h": {
                        "home": 25,
                        "away": 75
                    },
                    "goals": {
                        "home": 38,
                        "away": 62
                    }
                },
                "goals": [
                    {
                        "minute": "28",
                        "player": "M. Whittaker",
                        "team": "home"
                    },
                    {
                        "minute": "49",
                        "player": "C. Roldan",
                        "team": "away"
                    },
                    {
                        "minute": "56",
                        "player": "D. Phillip",
                        "team": "home"
                    },
                    {
                        "minute": "76",
                        "player": "M. Whittaker",
                        "team": "home"
                    },
                    {
                        "minute": "79",
                        "player": "D. Joveljic",
                        "team": "away"
                    },
                    {
                        "minute": "90+3",
                        "player": "C. Clark",
                        "team": "away"
                    }
                ],
                "cards": [
                    {
                        "minute": "69",
                        "player": "D. Phillip",
                        "team": "home",
                        "type": "yellow"
                    },
                    {
                        "minute": "79",
                        "player": "D. Yapi",
                        "team": "home",
                        "type": "yellow"
                    }
                ]
            },
            {
                "league": "MLS",
                "date": "2026-09-20",
                "time": "08:30",
                "home": "Nashville SC",
                "away": "Chicago Fire",
                "stadium": "Geodis Park",
                "round": "Pekan 26",
                "statusCode": "FT",
                "minuteDisplay": "FT",
                "homeScore": 3,
                "awayScore": 0,
                "homeLogo": "https://media.api-sports.io/football/teams/9569.png",
                "awayLogo": "https://media.api-sports.io/football/teams/1607.png",
                "prediction": "3 - 2",
                "odds": {
                    "home": 45,
                    "draw": 45,
                    "away": 10
                },
                "advice": "Combo Double chance : Nashville SC or draw and +1.5 goals",
                "comparison": {
                    "form": {
                        "home": 67,
                        "away": 33
                    },
                    "att": {
                        "home": 53,
                        "away": 47
                    },
                    "def": {
                        "home": 63,
                        "away": 38
                    },
                    "poisson": {
                        "home": 67,
                        "away": 33
                    },
                    "h2h": {
                        "home": 80,
                        "away": 20
                    },
                    "goals": {
                        "home": 81,
                        "away": 19
                    }
                },
                "goals": [
                    {
                        "minute": "33",
                        "player": "S. Surridge",
                        "team": "home"
                    },
                    {
                        "minute": "78",
                        "player": "C. Espinoza",
                        "team": "home"
                    },
                    {
                        "minute": "87",
                        "player": "H. Mukhtar",
                        "team": "home"
                    }
                ],
                "cards": [
                    {
                        "minute": "35",
                        "player": "H. Mukhtar",
                        "team": "home",
                        "type": "yellow"
                    },
                    {
                        "minute": "57",
                        "player": "J. Elliott",
                        "team": "away",
                        "type": "yellow"
                    }
                ]
            },
            {
                "league": "MLS",
                "date": "2026-09-20",
                "time": "09:30",
                "home": "Portland Timbers",
                "away": "Atlanta United FC",
                "stadium": "Providence Park",
                "round": "Pekan 26",
                "statusCode": "FT",
                "minuteDisplay": "FT",
                "homeScore": 0,
                "awayScore": 1,
                "homeLogo": "https://media.api-sports.io/football/teams/1617.png",
                "awayLogo": "https://media.api-sports.io/football/teams/1608.png",
                "prediction": "2 - 2",
                "odds": {
                    "home": 35,
                    "draw": 35,
                    "away": 30
                },
                "advice": "Double chance : Portland Timbers or draw",
                "comparison": {
                    "form": {
                        "home": 50,
                        "away": 50
                    },
                    "att": {
                        "home": 63,
                        "away": 38
                    },
                    "def": {
                        "home": 42,
                        "away": 58
                    },
                    "poisson": {
                        "home": 64,
                        "away": 36
                    },
                    "h2h": {
                        "home": 29,
                        "away": 71
                    },
                    "goals": {
                        "home": 27,
                        "away": 73
                    }
                },
                "goals": [
                    {
                        "minute": "28",
                        "player": "A. Miranchuk",
                        "team": "away"
                    }
                ],
                "cards": [
                    {
                        "minute": "25",
                        "player": "D. Chara",
                        "team": "home",
                        "type": "yellow"
                    },
                    {
                        "minute": "45+2",
                        "player": "J. Waterman",
                        "team": "home",
                        "type": "yellow"
                    },
                    {
                        "minute": "45+2",
                        "player": "Giuliano Galoppo",
                        "team": "away",
                        "type": "yellow"
                    },
                    {
                        "minute": "65",
                        "player": "T. Muyumba",
                        "team": "away",
                        "type": "yellow"
                    }
                ]
            },
            {
                "league": "Liga MX",
                "date": "2026-09-20",
                "time": "10:25",
                "home": "Club America",
                "away": "Guadalajara Chivas",
                "stadium": "Estadio Banorte",
                "round": "Apertura - 9",
                "statusCode": "FT",
                "minuteDisplay": "FT",
                "homeScore": 2,
                "awayScore": 2,
                "homeLogo": "https://media.api-sports.io/football/teams/2287.png",
                "awayLogo": "https://media.api-sports.io/football/teams/2278.png",
                "prediction": "2 - 2",
                "odds": {
                    "home": 35,
                    "draw": 35,
                    "away": 30
                },
                "advice": "Double chance : Club America or draw",
                "comparison": {
                    "form": {
                        "home": 48,
                        "away": 52
                    },
                    "att": {
                        "home": 50,
                        "away": 50
                    },
                    "def": {
                        "home": 38,
                        "away": 63
                    },
                    "poisson": {
                        "home": 100,
                        "away": 0
                    },
                    "h2h": {
                        "home": 38,
                        "away": 62
                    },
                    "goals": {
                        "home": 60,
                        "away": 40
                    }
                },
                "goals": [
                    {
                        "minute": "32",
                        "player": "Bryan Gonzalez",
                        "team": "away"
                    },
                    {
                        "minute": "45+2",
                        "player": "Miguel Vazquez",
                        "team": "home"
                    },
                    {
                        "minute": "71",
                        "player": "Miguel Borja",
                        "team": "home"
                    },
                    {
                        "minute": "74",
                        "player": "Miguel Borja",
                        "team": "home"
                    }
                ],
                "cards": [
                    {
                        "minute": "50",
                        "player": "Daniel Aguirre",
                        "team": "away",
                        "type": "yellow"
                    },
                    {
                        "minute": "85",
                        "player": "Hugo Camberos",
                        "team": "away",
                        "type": "yellow"
                    },
                    {
                        "minute": "90",
                        "player": "Cristian Borja",
                        "team": "home",
                        "type": "yellow"
                    },
                    {
                        "minute": "90",
                        "player": "Fernando González",
                        "team": "away",
                        "type": "yellow"
                    }
                ]
            },
            {
                "league": "Liga 1 (Indonesia)",
                "date": "2026-09-20",
                "time": "15:30",
                "home": "Pusamania Borneo",
                "away": "Bali United",
                "stadium": "Stadion Batakan",
                "round": "Pekan 3",
                "statusCode": "FT",
                "minuteDisplay": "FT",
                "homeScore": 1,
                "awayScore": 0,
                "homeLogo": "https://media.api-sports.io/football/teams/2442.png",
                "awayLogo": "https://media.api-sports.io/football/teams/2448.png",
                "prediction": "1 - 2",
                "odds": {
                    "home": 10,
                    "draw": 45,
                    "away": 45
                },
                "advice": "Winner : Bali United",
                "comparison": {
                    "form": {
                        "home": 33,
                        "away": 67
                    },
                    "att": {
                        "home": 25,
                        "away": 75
                    },
                    "def": {
                        "home": 33,
                        "away": 67
                    },
                    "poisson": {
                        "home": 0,
                        "away": 0
                    },
                    "h2h": {
                        "home": 60,
                        "away": 40
                    },
                    "goals": {
                        "home": 58,
                        "away": 42
                    }
                },
                "goals": [
                    {
                        "minute": "52",
                        "player": "J. Villa",
                        "team": "home"
                    }
                ],
                "cards": [
                    {
                        "minute": "32",
                        "player": "B. Wilson",
                        "team": "away",
                        "type": "yellow"
                    },
                    {
                        "minute": "35",
                        "player": "M. Marasabessy",
                        "team": "home",
                        "type": "red"
                    },
                    {
                        "minute": "35",
                        "player": "R. Arjuna",
                        "team": "away",
                        "type": "red"
                    },
                    {
                        "minute": "70",
                        "player": "T. Receveur",
                        "team": "away",
                        "type": "red"
                    }
                ]
            },
            {
                "league": "Liga 1 (Indonesia)",
                "date": "2026-09-20",
                "time": "15:30",
                "home": "Dewa United",
                "away": "PSS Sleman",
                "stadium": "Indomilk Arena",
                "round": "Pekan 3",
                "statusCode": "FT",
                "minuteDisplay": "FT",
                "homeScore": 2,
                "awayScore": 1,
                "homeLogo": "https://media.api-sports.io/football/teams/17902.png",
                "awayLogo": "https://media.api-sports.io/football/teams/3882.png",
                "prediction": "2 - 1",
                "odds": {
                    "home": 50,
                    "draw": 50,
                    "away": 33
                },
                "advice": "Double chance : Dewa United or draw",
                "comparison": {
                    "form": {
                        "home": 100,
                        "away": 0
                    },
                    "att": {
                        "home": 75,
                        "away": 25
                    },
                    "def": {
                        "home": 63,
                        "away": 38
                    },
                    "poisson": {
                        "home": 60,
                        "away": 40
                    },
                    "h2h": {
                        "home": 100,
                        "away": 0
                    },
                    "goals": {
                        "home": 71,
                        "away": 29
                    }
                },
                "goals": [
                    {
                        "minute": "49",
                        "player": "T. Marukawa",
                        "team": "home"
                    },
                    {
                        "minute": "58",
                        "player": "C. Iury",
                        "team": "home"
                    },
                    {
                        "minute": "72",
                        "player": "C. Nduwarugira",
                        "team": "away"
                    }
                ],
                "cards": [
                    {
                        "minute": "27",
                        "player": "D. Lowe",
                        "team": "home",
                        "type": "yellow"
                    },
                    {
                        "minute": "27",
                        "player": "Matheus Fornazari",
                        "team": "away",
                        "type": "yellow"
                    },
                    {
                        "minute": "40",
                        "player": "R. Struick",
                        "team": "home",
                        "type": "yellow"
                    },
                    {
                        "minute": "90+1",
                        "player": "M. Lorenzen",
                        "team": "away",
                        "type": "yellow"
                    },
                    {
                        "minute": "90+4",
                        "player": "R. Simanjuntak",
                        "team": "away",
                        "type": "yellow"
                    }
                ]
            },
            {
                "league": "Eredivisie",
                "date": "2026-09-20",
                "time": "17:15",
                "home": "Feyenoord",
                "away": "Utrecht",
                "stadium": "Stadion Feijenoord",
                "round": "Pekan 7",
                "statusCode": "FT",
                "minuteDisplay": "FT",
                "homeScore": 5,
                "awayScore": 0,
                "homeLogo": "https://media.api-sports.io/football/teams/209.png",
                "awayLogo": "https://media.api-sports.io/football/teams/207.png",
                "prediction": "4 - 2",
                "odds": {
                    "home": 45,
                    "draw": 45,
                    "away": 10
                },
                "advice": "Combo Winner : Feyenoord and +1.5 goals",
                "comparison": {
                    "form": {
                        "home": 69,
                        "away": 31
                    },
                    "att": {
                        "home": 66,
                        "away": 34
                    },
                    "def": {
                        "home": 71,
                        "away": 29
                    },
                    "poisson": {
                        "home": 57,
                        "away": 43
                    },
                    "h2h": {
                        "home": 80,
                        "away": 20
                    },
                    "goals": {
                        "home": 65,
                        "away": 35
                    }
                },
                "goals": [
                    {
                        "minute": "6",
                        "player": "Anis Hadj Moussa",
                        "team": "home"
                    },
                    {
                        "minute": "9",
                        "player": "Nacho Ferri",
                        "team": "home"
                    },
                    {
                        "minute": "33",
                        "player": "Anis Hadj Moussa",
                        "team": "home"
                    },
                    {
                        "minute": "53",
                        "player": "Luciano Valente",
                        "team": "home"
                    },
                    {
                        "minute": "64",
                        "player": "Gaoussou Kyassou Diarra",
                        "team": "home"
                    }
                ],
                "cards": [
                    {
                        "minute": "62",
                        "player": "Marius Broholm",
                        "team": "away",
                        "type": "yellow"
                    },
                    {
                        "minute": "70",
                        "player": "Javi López",
                        "team": "home",
                        "type": "yellow"
                    },
                    {
                        "minute": "73",
                        "player": "Gaoussou Kyassou Diarra",
                        "team": "home",
                        "type": "yellow"
                    },
                    {
                        "minute": "80",
                        "player": "Nikolas Panagiotou",
                        "team": "away",
                        "type": "yellow"
                    }
                ]
            },
            {
                "league": "Serie A",
                "date": "2026-09-20",
                "time": "17:30",
                "home": "Fiorentina",
                "away": "Napoli",
                "stadium": "Stadio Artemio Franchi",
                "round": "Pekan 5",
                "statusCode": "FT",
                "minuteDisplay": "FT",
                "homeScore": 1,
                "awayScore": 1,
                "homeLogo": "https://media.api-sports.io/football/teams/502.png",
                "awayLogo": "https://media.api-sports.io/football/teams/492.png",
                "prediction": "1 - 2",
                "odds": {
                    "home": 10,
                    "draw": 45,
                    "away": 45
                },
                "advice": "Winner : Napoli",
                "comparison": {
                    "form": {
                        "home": 33,
                        "away": 67
                    },
                    "att": {
                        "home": 45,
                        "away": 55
                    },
                    "def": {
                        "home": 31,
                        "away": 69
                    },
                    "poisson": {
                        "home": 14,
                        "away": 86
                    },
                    "h2h": {
                        "home": 7,
                        "away": 93
                    },
                    "goals": {
                        "home": 29,
                        "away": 71
                    }
                },
                "goals": [
                    {
                        "minute": "23",
                        "player": "B. Gilmour",
                        "team": "away"
                    },
                    {
                        "minute": "51",
                        "player": "A. Jimenez",
                        "team": "home"
                    }
                ],
                "cards": [
                    {
                        "minute": "42",
                        "player": "F. Mastantuono",
                        "team": "home",
                        "type": "yellow"
                    },
                    {
                        "minute": "62",
                        "player": "L. Ranieri",
                        "team": "home",
                        "type": "yellow"
                    },
                    {
                        "minute": "83",
                        "player": "D. de Gea",
                        "team": "home",
                        "type": "yellow"
                    }
                ]
            },
            {
                "league": "Scottish Premiership",
                "date": "2026-09-20",
                "time": "18:00",
                "home": "Celtic",
                "away": "Rangers",
                "stadium": "Celtic Park",
                "round": "Pekan 7",
                "statusCode": "FT",
                "minuteDisplay": "FT",
                "homeScore": 0,
                "awayScore": 1,
                "homeLogo": "https://media.api-sports.io/football/teams/247.png",
                "awayLogo": "https://media.api-sports.io/football/teams/257.png",
                "prediction": "2 - 1",
                "odds": {
                    "home": 45,
                    "draw": 45,
                    "away": 10
                },
                "advice": "Double chance : Celtic or draw",
                "comparison": {
                    "form": {
                        "home": 56,
                        "away": 44
                    },
                    "att": {
                        "home": 68,
                        "away": 32
                    },
                    "def": {
                        "home": 50,
                        "away": 50
                    },
                    "poisson": {
                        "home": 77,
                        "away": 23
                    },
                    "h2h": {
                        "home": 50,
                        "away": 50
                    },
                    "goals": {
                        "home": 44,
                        "away": 56
                    }
                },
                "goals": [
                    {
                        "minute": "33",
                        "player": "Ryan Naderi",
                        "team": "away"
                    }
                ],
                "cards": [
                    {
                        "minute": "4",
                        "player": "Emmanuel Fernandez",
                        "team": "away",
                        "type": "yellow"
                    },
                    {
                        "minute": "5",
                        "player": "Derek McInnes",
                        "team": "away",
                        "type": "yellow"
                    },
                    {
                        "minute": "57",
                        "player": "Min-su Kim",
                        "team": "away",
                        "type": "yellow"
                    },
                    {
                        "minute": "73",
                        "player": "Callum McGregor",
                        "team": "home",
                        "type": "yellow"
                    },
                    {
                        "minute": "74",
                        "player": "Sebastian Tounekti",
                        "team": "home",
                        "type": "yellow"
                    },
                    {
                        "minute": "88",
                        "player": "Badredine Bouanani",
                        "team": "away",
                        "type": "yellow"
                    }
                ]
            },
            {
                "league": "Jupiler Pro League",
                "date": "2026-09-20",
                "time": "18:30",
                "home": "Antwerp",
                "away": "Union St. Gilloise",
                "stadium": "Bosuilstadion",
                "round": "Pekan 7",
                "statusCode": "FT",
                "minuteDisplay": "FT",
                "homeScore": 0,
                "awayScore": 2,
                "homeLogo": "https://media.api-sports.io/football/teams/740.png",
                "awayLogo": "https://media.api-sports.io/football/teams/1393.png",
                "prediction": "1 - 3",
                "odds": {
                    "home": 34,
                    "draw": 50,
                    "away": 50
                },
                "advice": "Combo Winner : Union St. Gilloise and +2.5 goals",
                "comparison": {
                    "form": {
                        "home": 24,
                        "away": 76
                    },
                    "att": {
                        "home": 39,
                        "away": 61
                    },
                    "def": {
                        "home": 14,
                        "away": 86
                    },
                    "poisson": {
                        "home": 14,
                        "away": 86
                    },
                    "h2h": {
                        "home": 29,
                        "away": 71
                    },
                    "goals": {
                        "home": 38,
                        "away": 62
                    }
                },
                "goals": [
                    {
                        "minute": "51",
                        "player": "Mateo Biondic",
                        "team": "away"
                    },
                    {
                        "minute": "78",
                        "player": "Denzel De Roeve",
                        "team": "away"
                    }
                ],
                "cards": [
                    {
                        "minute": "18",
                        "player": "Michael Frey",
                        "team": "home",
                        "type": "yellow"
                    },
                    {
                        "minute": "18",
                        "player": "Adem Zorgane",
                        "team": "away",
                        "type": "yellow"
                    },
                    {
                        "minute": "25",
                        "player": "Arthur Vermeeren",
                        "team": "home",
                        "type": "yellow"
                    },
                    {
                        "minute": "67",
                        "player": "Bahmed Deuff",
                        "team": "home",
                        "type": "yellow"
                    },
                    {
                        "minute": "69",
                        "player": "Bahmed Deuff",
                        "team": "home",
                        "type": "red"
                    },
                    {
                        "minute": "75",
                        "player": "Snayder Porozo",
                        "team": "home",
                        "type": "yellow"
                    },
                    {
                        "minute": "75",
                        "player": "Hervé Koffi",
                        "team": "away",
                        "type": "yellow"
                    }
                ]
            },
            {
                "league": "LaLiga",
                "date": "2026-09-20",
                "time": "19:00",
                "home": "Getafe",
                "away": "Malaga",
                "stadium": "Coliseum Alfonso Pérez",
                "round": "Pekan 7",
                "statusCode": "FT",
                "minuteDisplay": "FT",
                "homeScore": 1,
                "awayScore": 0,
                "homeLogo": "https://media.api-sports.io/football/teams/546.png",
                "awayLogo": "https://media.api-sports.io/football/teams/535.png",
                "prediction": "2 - 1",
                "odds": {
                    "home": 45,
                    "draw": 45,
                    "away": 10
                },
                "advice": "Combo Double chance : Getafe or draw and -3.5 goals",
                "comparison": {
                    "form": {
                        "home": 63,
                        "away": 38
                    },
                    "att": {
                        "home": 50,
                        "away": 50
                    },
                    "def": {
                        "home": 69,
                        "away": 31
                    },
                    "poisson": {
                        "home": 89,
                        "away": 11
                    },
                    "h2h": {
                        "home": 60,
                        "away": 40
                    },
                    "goals": {
                        "home": 45,
                        "away": 55
                    }
                },
                "goals": [
                    {
                        "minute": "85",
                        "player": "Iván Azón",
                        "team": "home"
                    }
                ],
                "cards": [
                    {
                        "minute": "21",
                        "player": "Johan Mojica",
                        "team": "home",
                        "type": "yellow"
                    },
                    {
                        "minute": "39",
                        "player": "Eneko Jauregi",
                        "team": "away",
                        "type": "yellow"
                    },
                    {
                        "minute": "45+5",
                        "player": "David Larrubia",
                        "team": "away",
                        "type": "yellow"
                    },
                    {
                        "minute": "54",
                        "player": "Nemanja Gudelj",
                        "team": "home",
                        "type": "yellow"
                    },
                    {
                        "minute": "58",
                        "player": "Francho Serrano Gracia",
                        "team": "home",
                        "type": "yellow"
                    },
                    {
                        "minute": "68",
                        "player": "Ramón Terrats",
                        "team": "home",
                        "type": "yellow"
                    }
                ]
            },
            {
                "league": "Liga 1 (Indonesia)",
                "date": "2026-09-20",
                "time": "19:00",
                "home": "Persijap",
                "away": "Persib Bandung",
                "stadium": "Gelora Bumi Kartini Stadium",
                "round": "Pekan 3",
                "statusCode": "FT",
                "minuteDisplay": "FT",
                "homeScore": 1,
                "awayScore": 2,
                "homeLogo": "https://media.api-sports.io/football/teams/11132.png",
                "awayLogo": "https://media.api-sports.io/football/teams/2445.png",
                "prediction": "1 - 2",
                "odds": {
                    "home": 10,
                    "draw": 45,
                    "away": 45
                },
                "advice": "Combo Winner : Persib Bandung and -3.5 goals",
                "comparison": {
                    "form": {
                        "home": 0,
                        "away": 100
                    },
                    "att": {
                        "home": 0,
                        "away": 100
                    },
                    "def": {
                        "home": 50,
                        "away": 50
                    },
                    "poisson": {
                        "home": 0,
                        "away": 100
                    },
                    "h2h": {
                        "home": 80,
                        "away": 20
                    },
                    "goals": {
                        "home": 67,
                        "away": 33
                    }
                },
                "goals": [
                    {
                        "minute": "13",
                        "player": "Pirulo",
                        "team": "home"
                    },
                    {
                        "minute": "21",
                        "player": "T. Haye",
                        "team": "away"
                    },
                    {
                        "minute": "55",
                        "player": "Uilliam",
                        "team": "away"
                    }
                ],
                "cards": [
                    {
                        "minute": "16",
                        "player": "N. Yakubu",
                        "team": "home",
                        "type": "yellow"
                    },
                    {
                        "minute": "39",
                        "player": "T. Haye",
                        "team": "away",
                        "type": "yellow"
                    },
                    {
                        "minute": "42",
                        "player": "B. Putra",
                        "team": "away",
                        "type": "yellow"
                    },
                    {
                        "minute": "76",
                        "player": "P. Matricardi",
                        "team": "away",
                        "type": "yellow"
                    }
                ]
            },
            {
                "league": "Eredivisie",
                "date": "2026-09-20",
                "time": "19:30",
                "home": "AZ Alkmaar",
                "away": "Telstar",
                "stadium": "AFAS Stadion（Alkmaar）",
                "round": "Pekan 7",
                "statusCode": "FT",
                "minuteDisplay": "FT",
                "homeScore": 1,
                "awayScore": 0,
                "homeLogo": "https://media.api-sports.io/football/teams/201.png",
                "awayLogo": "https://media.api-sports.io/football/teams/427.png",
                "prediction": "3 - 1",
                "odds": {
                    "home": 50,
                    "draw": 50,
                    "away": 33
                },
                "advice": "Winner : AZ Alkmaar",
                "comparison": {
                    "form": {
                        "home": 87,
                        "away": 13
                    },
                    "att": {
                        "home": 83,
                        "away": 17
                    },
                    "def": {
                        "home": 63,
                        "away": 38
                    },
                    "poisson": {
                        "home": 78,
                        "away": 22
                    },
                    "h2h": {
                        "home": 100,
                        "away": 0
                    },
                    "goals": {
                        "home": 71,
                        "away": 29
                    }
                },
                "goals": [
                    {
                        "minute": "19",
                        "player": "Mexx Meerdink",
                        "team": "home"
                    }
                ],
                "cards": [
                    {
                        "minute": "41",
                        "player": "Gerald Alders",
                        "team": "away",
                        "type": "yellow"
                    },
                    {
                        "minute": "88",
                        "player": "Wouter Goes",
                        "team": "home",
                        "type": "yellow"
                    }
                ]
            },
            {
                "league": "Eredivisie",
                "date": "2026-09-20",
                "time": "19:30",
                "home": "Twente",
                "away": "PSV Eindhoven",
                "stadium": "De Grolsch Veste",
                "round": "Pekan 7",
                "statusCode": "FT",
                "minuteDisplay": "FT",
                "homeScore": 3,
                "awayScore": 2,
                "homeLogo": "https://media.api-sports.io/football/teams/415.png",
                "awayLogo": "https://media.api-sports.io/football/teams/197.png",
                "prediction": "2 - 3",
                "odds": {
                    "home": 10,
                    "draw": 45,
                    "away": 45
                },
                "advice": "Double chance : draw or PSV Eindhoven",
                "comparison": {
                    "form": {
                        "home": 46,
                        "away": 54
                    },
                    "att": {
                        "home": 38,
                        "away": 63
                    },
                    "def": {
                        "home": 56,
                        "away": 44
                    },
                    "poisson": {
                        "home": 67,
                        "away": 33
                    },
                    "h2h": {
                        "home": 0,
                        "away": 100
                    },
                    "goals": {
                        "home": 15,
                        "away": 85
                    }
                },
                "goals": [
                    {
                        "minute": "14",
                        "player": "Younes Taha El Idrissi",
                        "team": "home"
                    },
                    {
                        "minute": "26",
                        "player": "Guus Til",
                        "team": "away"
                    },
                    {
                        "minute": "29",
                        "player": "Guus Til",
                        "team": "away"
                    },
                    {
                        "minute": "79",
                        "player": "Wout Weghorst",
                        "team": "home"
                    },
                    {
                        "minute": "83",
                        "player": "Daouda Weidmann",
                        "team": "home"
                    }
                ],
                "cards": [
                    {
                        "minute": "43",
                        "player": "Wout Weghorst",
                        "team": "home",
                        "type": "yellow"
                    },
                    {
                        "minute": "60",
                        "player": "Ruben van Bommel",
                        "team": "away",
                        "type": "yellow"
                    },
                    {
                        "minute": "66",
                        "player": "Ivan Perišić",
                        "team": "away",
                        "type": "yellow"
                    }
                ]
            },
            {
                "league": "Premier League",
                "date": "2026-09-20",
                "time": "20:00",
                "home": "Bournemouth",
                "away": "Liverpool",
                "stadium": "Vitality Stadium",
                "round": "Pekan 5",
                "statusCode": "FT",
                "minuteDisplay": "FT",
                "homeScore": 0,
                "awayScore": 1,
                "homeLogo": "https://media.api-sports.io/football/teams/35.png",
                "awayLogo": "https://media.api-sports.io/football/teams/40.png",
                "prediction": "1 - 2",
                "odds": {
                    "home": 10,
                    "draw": 45,
                    "away": 45
                },
                "advice": "Double chance : draw or Liverpool",
                "comparison": {
                    "form": {
                        "home": 33,
                        "away": 67
                    },
                    "att": {
                        "home": 50,
                        "away": 50
                    },
                    "def": {
                        "home": 36,
                        "away": 64
                    },
                    "poisson": {
                        "home": 30,
                        "away": 70
                    },
                    "h2h": {
                        "home": 20,
                        "away": 80
                    },
                    "goals": {
                        "home": 25,
                        "away": 75
                    }
                },
                "goals": [
                    {
                        "minute": "57",
                        "player": "Alexander Isak",
                        "team": "away"
                    }
                ],
                "cards": [
                    {
                        "minute": "46",
                        "player": "Dominik Szoboszlai",
                        "team": "away",
                        "type": "yellow"
                    },
                    {
                        "minute": "58",
                        "player": "Alexander Isak",
                        "team": "away",
                        "type": "yellow"
                    },
                    {
                        "minute": "81",
                        "player": "Antonio Silva",
                        "team": "home",
                        "type": "yellow"
                    }
                ]
            },
            {
                "league": "Premier League",
                "date": "2026-09-20",
                "time": "20:00",
                "home": "Manchester City",
                "away": "Sunderland",
                "stadium": "Etihad Stadium",
                "round": "Pekan 5",
                "statusCode": "FT",
                "minuteDisplay": "FT",
                "homeScore": 5,
                "awayScore": 3,
                "homeLogo": "https://media.api-sports.io/football/teams/50.png",
                "awayLogo": "https://media.api-sports.io/football/teams/746.png",
                "prediction": "2 - 1",
                "odds": {
                    "home": 50,
                    "draw": 50,
                    "away": 33
                },
                "advice": "Double chance : Manchester City or draw",
                "comparison": {
                    "form": {
                        "home": 75,
                        "away": 25
                    },
                    "att": {
                        "home": 73,
                        "away": 27
                    },
                    "def": {
                        "home": 71,
                        "away": 29
                    },
                    "poisson": {
                        "home": 79,
                        "away": 21
                    },
                    "h2h": {
                        "home": 93,
                        "away": 7
                    },
                    "goals": {
                        "home": 89,
                        "away": 11
                    }
                },
                "goals": [
                    {
                        "minute": "9",
                        "player": "Enzo Fernández",
                        "team": "home"
                    },
                    {
                        "minute": "12",
                        "player": "Brian Brobbey",
                        "team": "away"
                    },
                    {
                        "minute": "29",
                        "player": "Rayan Cherki",
                        "team": "home"
                    },
                    {
                        "minute": "33",
                        "player": "Brian Brobbey",
                        "team": "away"
                    },
                    {
                        "minute": "43",
                        "player": "Antoine Semenyo",
                        "team": "home"
                    },
                    {
                        "minute": "57",
                        "player": "Antoine Semenyo",
                        "team": "home"
                    },
                    {
                        "minute": "59",
                        "player": "Brian Brobbey",
                        "team": "away"
                    },
                    {
                        "minute": "81",
                        "player": "Erling Haaland",
                        "team": "home"
                    }
                ],
                "cards": [
                    {
                        "minute": "8",
                        "player": "Dayann Methalie",
                        "team": "away",
                        "type": "yellow"
                    }
                ]
            },
            {
                "league": "Premier League",
                "date": "2026-09-20",
                "time": "20:00",
                "home": "Leeds",
                "away": "Crystal Palace",
                "stadium": "Elland Road",
                "round": "Pekan 5",
                "statusCode": "FT",
                "minuteDisplay": "FT",
                "homeScore": 0,
                "awayScore": 0,
                "homeLogo": "https://media.api-sports.io/football/teams/63.png",
                "awayLogo": "https://media.api-sports.io/football/teams/52.png",
                "prediction": "2 - 1",
                "odds": {
                    "home": 45,
                    "draw": 45,
                    "away": 10
                },
                "advice": "Double chance : Leeds or draw",
                "comparison": {
                    "form": {
                        "home": 73,
                        "away": 27
                    },
                    "att": {
                        "home": 54,
                        "away": 46
                    },
                    "def": {
                        "home": 79,
                        "away": 21
                    },
                    "poisson": {
                        "home": 74,
                        "away": 26
                    },
                    "h2h": {
                        "home": 38,
                        "away": 62
                    },
                    "goals": {
                        "home": 44,
                        "away": 56
                    }
                },
                "cards": [
                    {
                        "minute": "38",
                        "player": "Jayden Bogle",
                        "team": "home",
                        "type": "yellow"
                    },
                    {
                        "minute": "62",
                        "player": "Ao Tanaka",
                        "team": "home",
                        "type": "yellow"
                    },
                    {
                        "minute": "64",
                        "player": "Adam Wharton",
                        "team": "away",
                        "type": "yellow"
                    },
                    {
                        "minute": "81",
                        "player": "Yeremy Pino",
                        "team": "away",
                        "type": "yellow"
                    },
                    {
                        "minute": "90+3",
                        "player": "Jefferson Lerma",
                        "team": "away",
                        "type": "yellow"
                    }
                ]
            },
            {
                "league": "Serie A",
                "date": "2026-09-20",
                "time": "20:00",
                "home": "Frosinone",
                "away": "Como",
                "stadium": "Stadio Benito Stirpe",
                "round": "Pekan 5",
                "statusCode": "FT",
                "minuteDisplay": "FT",
                "homeScore": 2,
                "awayScore": 0,
                "homeLogo": "https://media.api-sports.io/football/teams/512.png",
                "awayLogo": "https://media.api-sports.io/football/teams/895.png",
                "prediction": "1 - 2",
                "odds": {
                    "home": 35,
                    "draw": 35,
                    "away": 30
                },
                "advice": "Double chance : Frosinone or draw",
                "comparison": {
                    "form": {
                        "home": 41,
                        "away": 59
                    },
                    "att": {
                        "home": 44,
                        "away": 56
                    },
                    "def": {
                        "home": 50,
                        "away": 50
                    },
                    "poisson": {
                        "home": 32,
                        "away": 68
                    },
                    "h2h": {
                        "home": 80,
                        "away": 20
                    },
                    "goals": {
                        "home": 83,
                        "away": 17
                    }
                },
                "goals": [
                    {
                        "minute": "14",
                        "player": "G. Calo",
                        "team": "home"
                    },
                    {
                        "minute": "45+3",
                        "player": "G. Kvernadze",
                        "team": "home"
                    }
                ],
                "cards": [
                    {
                        "minute": "34",
                        "player": "Y. Couto",
                        "team": "away",
                        "type": "yellow"
                    },
                    {
                        "minute": "45+1",
                        "player": "G. Kvernadze",
                        "team": "home",
                        "type": "yellow"
                    },
                    {
                        "minute": "56",
                        "player": "G. Bracaglia",
                        "team": "home",
                        "type": "yellow"
                    },
                    {
                        "minute": "90+2",
                        "player": "A. Raimondo",
                        "team": "home",
                        "type": "yellow"
                    },
                    {
                        "minute": "90+5",
                        "player": "A. Diao",
                        "team": "away",
                        "type": "yellow"
                    }
                ]
            },
            {
                "league": "Serie A",
                "date": "2026-09-20",
                "time": "20:00",
                "home": "Parma",
                "away": "Genoa",
                "stadium": "Stadio Ennio Tardini",
                "round": "Pekan 5",
                "statusCode": "FT",
                "minuteDisplay": "FT",
                "homeScore": 2,
                "awayScore": 1,
                "homeLogo": "https://media.api-sports.io/football/teams/523.png",
                "awayLogo": "https://media.api-sports.io/football/teams/495.png",
                "prediction": "1 - 1",
                "odds": {
                    "home": 35,
                    "draw": 35,
                    "away": 30
                },
                "advice": "Combo Double chance : Parma or draw and -3.5 goals",
                "comparison": {
                    "form": {
                        "home": 50,
                        "away": 50
                    },
                    "att": {
                        "home": 50,
                        "away": 50
                    },
                    "def": {
                        "home": 57,
                        "away": 43
                    },
                    "poisson": {
                        "home": 100,
                        "away": 0
                    },
                    "h2h": {
                        "home": 38,
                        "away": 62
                    },
                    "goals": {
                        "home": 50,
                        "away": 50
                    }
                },
                "goals": [
                    {
                        "minute": "38",
                        "player": "D. Romero",
                        "team": "home"
                    },
                    {
                        "minute": "70",
                        "player": "M. Osmajic",
                        "team": "away"
                    },
                    {
                        "minute": "80",
                        "player": "P. Almqvist",
                        "team": "home"
                    }
                ],
                "cards": [
                    {
                        "minute": "9",
                        "player": "D. Drobnic",
                        "team": "home",
                        "type": "yellow"
                    },
                    {
                        "minute": "14",
                        "player": "S. Otoa",
                        "team": "away",
                        "type": "yellow"
                    },
                    {
                        "minute": "44",
                        "player": "A. Marcandalli",
                        "team": "away",
                        "type": "yellow"
                    },
                    {
                        "minute": "85",
                        "player": "E. Delprato",
                        "team": "home",
                        "type": "yellow"
                    },
                    {
                        "minute": "90+2",
                        "player": "M. E. Ellertsson",
                        "team": "away",
                        "type": "yellow"
                    },
                    {
                        "minute": "90+3",
                        "player": "M. Troilo",
                        "team": "home",
                        "type": "yellow"
                    }
                ]
            },
            {
                "league": "Ligue 1",
                "date": "2026-09-20",
                "time": "20:00",
                "home": "Auxerre",
                "away": "Stade Brestois 29",
                "stadium": "Stade de l'Abbé-Deschamps",
                "round": "Pekan 5",
                "statusCode": "FT",
                "minuteDisplay": "FT",
                "homeScore": 2,
                "awayScore": 1,
                "homeLogo": "https://media.api-sports.io/football/teams/108.png",
                "awayLogo": "https://media.api-sports.io/football/teams/106.png",
                "prediction": "1 - 2",
                "odds": {
                    "home": 10,
                    "draw": 45,
                    "away": 45
                },
                "advice": "Double chance : draw or Stade Brestois 29",
                "comparison": {
                    "form": {
                        "home": 38,
                        "away": 63
                    },
                    "att": {
                        "home": 45,
                        "away": 55
                    },
                    "def": {
                        "home": 35,
                        "away": 65
                    },
                    "poisson": {
                        "home": 29,
                        "away": 71
                    },
                    "h2h": {
                        "home": 50,
                        "away": 50
                    },
                    "goals": {
                        "home": 62,
                        "away": 38
                    }
                },
                "goals": [
                    {
                        "minute": "23",
                        "player": "Pathé Mboup",
                        "team": "away"
                    },
                    {
                        "minute": "46",
                        "player": "Cameron Archer",
                        "team": "home"
                    },
                    {
                        "minute": "83",
                        "player": "Raphaël Le Guen",
                        "team": "away"
                    }
                ],
                "cards": [
                    {
                        "minute": "73",
                        "player": "Christ Makosso",
                        "team": "home",
                        "type": "yellow"
                    },
                    {
                        "minute": "82",
                        "player": "Kenny Lala",
                        "team": "away",
                        "type": "yellow"
                    }
                ]
            },
            {
                "league": "Bundesliga",
                "date": "2026-09-20",
                "time": "20:30",
                "home": "Bayer Leverkusen",
                "away": "RB Leipzig",
                "stadium": "BayArena",
                "round": "Pekan 4",
                "statusCode": "FT",
                "minuteDisplay": "FT",
                "homeScore": 2,
                "awayScore": 0,
                "homeLogo": "https://media.api-sports.io/football/teams/168.png",
                "awayLogo": "https://media.api-sports.io/football/teams/173.png",
                "prediction": "3 - 2",
                "odds": {
                    "home": 45,
                    "draw": 45,
                    "away": 10
                },
                "advice": "Combo Double chance : Bayer Leverkusen or draw and +1.5 goals",
                "comparison": {
                    "form": {
                        "home": 40,
                        "away": 60
                    },
                    "att": {
                        "home": 47,
                        "away": 53
                    },
                    "def": {
                        "home": 38,
                        "away": 63
                    },
                    "poisson": {
                        "home": 100,
                        "away": 0
                    },
                    "h2h": {
                        "home": 71,
                        "away": 29
                    },
                    "goals": {
                        "home": 61,
                        "away": 39
                    }
                },
                "goals": [
                    {
                        "minute": "44",
                        "player": "Patrik Schick",
                        "team": "home"
                    },
                    {
                        "minute": "57",
                        "player": "Miguel Gutiérrez",
                        "team": "home"
                    }
                ],
                "cards": [
                    {
                        "minute": "11",
                        "player": "Antonio Nusa",
                        "team": "away",
                        "type": "yellow"
                    },
                    {
                        "minute": "74",
                        "player": "Neil El Aynaoui",
                        "team": "away",
                        "type": "yellow"
                    },
                    {
                        "minute": "82",
                        "player": "Edmond Tapsoba",
                        "team": "home",
                        "type": "yellow"
                    },
                    {
                        "minute": "90+1",
                        "player": "Benjamin Henrichs",
                        "team": "away",
                        "type": "yellow"
                    },
                    {
                        "minute": "90+1",
                        "player": "Afonso Moreira",
                        "team": "home",
                        "type": "yellow"
                    }
                ]
            },
            {
                "league": "Super Lig",
                "date": "2026-09-20",
                "time": "21:00",
                "home": "Fenerbahçe",
                "away": "Eyüpspor",
                "stadium": "Chobani Stadium",
                "round": "Pekan 6",
                "statusCode": "FT",
                "minuteDisplay": "FT",
                "homeScore": 8,
                "awayScore": 0,
                "homeLogo": "https://media.api-sports.io/football/teams/611.png",
                "awayLogo": "https://media.api-sports.io/football/teams/3588.png",
                "prediction": "2 - 1",
                "odds": {
                    "home": 45,
                    "draw": 45,
                    "away": 10
                },
                "advice": "Winner : Fenerbahçe",
                "comparison": {
                    "form": {
                        "home": 70,
                        "away": 30
                    },
                    "att": {
                        "home": 80,
                        "away": 20
                    },
                    "def": {
                        "home": 57,
                        "away": 43
                    },
                    "poisson": {
                        "home": 100,
                        "away": 0
                    },
                    "h2h": {
                        "home": 80,
                        "away": 20
                    },
                    "goals": {
                        "home": 64,
                        "away": 36
                    }
                },
                "goals": [
                    {
                        "minute": "4",
                        "player": "M. Greenwood",
                        "team": "home"
                    },
                    {
                        "minute": "7",
                        "player": "V. Muriqi",
                        "team": "home"
                    },
                    {
                        "minute": "21",
                        "player": "V. Muriqi",
                        "team": "home"
                    },
                    {
                        "minute": "38",
                        "player": "M. Guendouzi",
                        "team": "home"
                    },
                    {
                        "minute": "45+1",
                        "player": "I. Kahveci",
                        "team": "home"
                    },
                    {
                        "minute": "47",
                        "player": "V. Muriqi",
                        "team": "home"
                    },
                    {
                        "minute": "55",
                        "player": "V. Muriqi",
                        "team": "home"
                    },
                    {
                        "minute": "80",
                        "player": "M. Greenwood",
                        "team": "home"
                    }
                ],
                "cards": [
                    {
                        "minute": "89",
                        "player": "R. Lukaku",
                        "team": "home",
                        "type": "yellow"
                    },
                    {
                        "minute": "89",
                        "player": "A. Yasar",
                        "team": "away",
                        "type": "yellow"
                    }
                ]
            },
            {
                "league": "Super Lig",
                "date": "2026-09-20",
                "time": "21:00",
                "home": "Erzurumspor FK",
                "away": "Samsunspor",
                "stadium": "Kazim Karabekir Stadyumu",
                "round": "Pekan 6",
                "statusCode": "FT",
                "minuteDisplay": "FT",
                "homeScore": 1,
                "awayScore": 0,
                "homeLogo": "https://media.api-sports.io/football/teams/1009.png",
                "awayLogo": "https://media.api-sports.io/football/teams/3603.png",
                "prediction": "1 - 2",
                "odds": {
                    "home": 10,
                    "draw": 45,
                    "away": 45
                },
                "advice": "Double chance : draw or Samsunspor",
                "comparison": {
                    "form": {
                        "home": 50,
                        "away": 50
                    },
                    "att": {
                        "home": 25,
                        "away": 75
                    },
                    "def": {
                        "home": 50,
                        "away": 50
                    },
                    "poisson": {
                        "home": 8,
                        "away": 92
                    },
                    "h2h": {
                        "home": 15,
                        "away": 85
                    },
                    "goals": {
                        "home": 36,
                        "away": 64
                    }
                },
                "goals": [
                    {
                        "minute": "45",
                        "player": "M. Cardoso",
                        "team": "home"
                    }
                ],
                "cards": [
                    {
                        "minute": "18",
                        "player": "M. Cardoso",
                        "team": "home",
                        "type": "yellow"
                    },
                    {
                        "minute": "33",
                        "player": "E. Owusu",
                        "team": "home",
                        "type": "yellow"
                    },
                    {
                        "minute": "64",
                        "player": "S. Onur",
                        "team": "away",
                        "type": "yellow"
                    },
                    {
                        "minute": "77",
                        "player": "B. Baiye",
                        "team": "home",
                        "type": "yellow"
                    },
                    {
                        "minute": "86",
                        "player": "E. Kilinc",
                        "team": "away",
                        "type": "yellow"
                    }
                ]
            },
            {
                "league": "Jupiler Pro League",
                "date": "2026-09-20",
                "time": "21:00",
                "home": "St. Truiden",
                "away": "KVC Westerlo",
                "stadium": "Stayen",
                "round": "Pekan 7",
                "statusCode": "FT",
                "minuteDisplay": "FT",
                "homeScore": 0,
                "awayScore": 2,
                "homeLogo": "https://media.api-sports.io/football/teams/735.png",
                "awayLogo": "https://media.api-sports.io/football/teams/261.png",
                "prediction": "3 - 2",
                "odds": {
                    "home": 45,
                    "draw": 45,
                    "away": 10
                },
                "advice": "Combo Double chance : St. Truiden or draw and +1.5 goals",
                "comparison": {
                    "form": {
                        "home": 50,
                        "away": 50
                    },
                    "att": {
                        "home": 48,
                        "away": 52
                    },
                    "def": {
                        "home": 55,
                        "away": 45
                    },
                    "poisson": {
                        "home": 52,
                        "away": 48
                    },
                    "h2h": {
                        "home": 80,
                        "away": 20
                    },
                    "goals": {
                        "home": 69,
                        "away": 31
                    }
                },
                "goals": [
                    {
                        "minute": "36",
                        "player": "Norman Bassette",
                        "team": "away"
                    },
                    {
                        "minute": "46",
                        "player": "Cisse Sandra",
                        "team": "away"
                    }
                ],
                "cards": [
                    {
                        "minute": "73",
                        "player": "Norman Bassette",
                        "team": "away",
                        "type": "yellow"
                    },
                    {
                        "minute": "73",
                        "player": "Visar Musliu",
                        "team": "home",
                        "type": "yellow"
                    }
                ]
            },
            {
                "league": "LaLiga",
                "date": "2026-09-20",
                "time": "21:15",
                "home": "Atletico Madrid",
                "away": "Real Madrid",
                "stadium": "Riyadh Air Metropolitano",
                "round": "Pekan 7",
                "statusCode": "2H",
                "minuteDisplay": "86'",
                "homeScore": 2,
                "awayScore": 0,
                "homeLogo": "https://media.api-sports.io/football/teams/530.png",
                "awayLogo": "https://media.api-sports.io/football/teams/541.png",
                "prediction": "2 - 2",
                "odds": {
                    "home": 35,
                    "draw": 35,
                    "away": 30
                },
                "advice": "Double chance : Atletico Madrid or draw",
                "comparison": {
                    "form": {
                        "home": 45,
                        "away": 55
                    },
                    "att": {
                        "home": 44,
                        "away": 56
                    },
                    "def": {
                        "home": 45,
                        "away": 55
                    },
                    "poisson": {
                        "home": 72,
                        "away": 28
                    },
                    "h2h": {
                        "home": 40,
                        "away": 60
                    },
                    "goals": {
                        "home": 53,
                        "away": 47
                    }
                },
                "goals": [
                    {
                        "minute": "53",
                        "player": "Alejandro Grimaldo",
                        "team": "home"
                    },
                    {
                        "minute": "59",
                        "player": "Jonathan David",
                        "team": "home"
                    }
                ],
                "cards": [
                    {
                        "minute": "6",
                        "player": "Diego Pablo Simeone",
                        "team": "home",
                        "type": "yellow"
                    },
                    {
                        "minute": "35",
                        "player": "Marc Pubill",
                        "team": "home",
                        "type": "yellow"
                    },
                    {
                        "minute": "38",
                        "player": "Cristian Romero",
                        "team": "home",
                        "type": "yellow"
                    },
                    {
                        "minute": "49",
                        "player": "Denzel Dumfries",
                        "team": "away",
                        "type": "yellow"
                    },
                    {
                        "minute": "52",
                        "player": "Dean Huijsen",
                        "team": "away",
                        "type": "red"
                    },
                    {
                        "minute": "78",
                        "player": "Jude Bellingham",
                        "team": "away",
                        "type": "yellow"
                    }
                ]
            },
            {
                "league": "Primeira Liga",
                "date": "2026-09-20",
                "time": "21:30",
                "home": "Vitória SC",
                "away": "Moreirense",
                "stadium": "Estádio D. Afonso Henriques",
                "round": "Pekan 7",
                "statusCode": "2H",
                "minuteDisplay": "72'",
                "homeScore": 0,
                "awayScore": 1,
                "homeLogo": "https://media.api-sports.io/football/teams/224.png",
                "awayLogo": "https://media.api-sports.io/football/teams/215.png",
                "prediction": "2 - 1",
                "odds": {
                    "home": 45,
                    "draw": 45,
                    "away": 10
                },
                "advice": "Combo Double chance : Vitória SC or draw and -3.5 goals",
                "comparison": {
                    "form": {
                        "home": 40,
                        "away": 60
                    },
                    "att": {
                        "home": 44,
                        "away": 56
                    },
                    "def": {
                        "home": 65,
                        "away": 35
                    },
                    "poisson": {
                        "home": 76,
                        "away": 24
                    },
                    "h2h": {
                        "home": 71,
                        "away": 29
                    },
                    "goals": {
                        "home": 56,
                        "away": 44
                    }
                },
                "goals": [
                    {
                        "minute": "52",
                        "player": "Tiago Andrade",
                        "team": "away"
                    }
                ]
            },
            {
                "league": "Primeira Liga",
                "date": "2026-09-20",
                "time": "21:30",
                "home": "Estrela",
                "away": "Academico Viseu",
                "stadium": "Estadio Jose Gomes",
                "round": "Pekan 7",
                "statusCode": "2H",
                "minuteDisplay": "77'",
                "homeScore": 0,
                "awayScore": 2,
                "homeLogo": "https://media.api-sports.io/football/teams/15130.png",
                "awayLogo": "https://media.api-sports.io/football/teams/238.png",
                "prediction": "3 - 2",
                "odds": {
                    "home": 45,
                    "draw": 45,
                    "away": 10
                },
                "advice": "Double chance : Estrela or draw",
                "comparison": {
                    "form": {
                        "home": 56,
                        "away": 44
                    },
                    "att": {
                        "home": 71,
                        "away": 29
                    },
                    "def": {
                        "home": 41,
                        "away": 59
                    },
                    "poisson": {
                        "home": 51,
                        "away": 49
                    },
                    "h2h": {
                        "home": 91,
                        "away": 9
                    },
                    "goals": {
                        "home": 85,
                        "away": 15
                    }
                },
                "goals": [
                    {
                        "minute": "10",
                        "player": "André Clóvis",
                        "team": "away"
                    },
                    {
                        "minute": "24",
                        "player": "André Clóvis",
                        "team": "away"
                    }
                ],
                "cards": [
                    {
                        "minute": "30",
                        "player": "Eddy Doué",
                        "team": "home",
                        "type": "yellow"
                    },
                    {
                        "minute": "45+1",
                        "player": "Gustavo Costa",
                        "team": "away",
                        "type": "yellow"
                    },
                    {
                        "minute": "68",
                        "player": "Joan Jordan",
                        "team": "home",
                        "type": "yellow"
                    },
                    {
                        "minute": "73",
                        "player": "Luis Silva",
                        "team": "away",
                        "type": "yellow"
                    },
                    {
                        "minute": "73",
                        "player": "Soufiane Messeguem",
                        "team": "away",
                        "type": "yellow"
                    }
                ]
            },
            {
                "league": "Eredivisie",
                "date": "2026-09-20",
                "time": "21:45",
                "home": "NEC Nijmegen",
                "away": "GO Ahead Eagles",
                "stadium": "Stadion de Goffert",
                "round": "Pekan 7",
                "statusCode": "2H",
                "minuteDisplay": "64'",
                "homeScore": 1,
                "awayScore": 1,
                "homeLogo": "https://media.api-sports.io/football/teams/413.png",
                "awayLogo": "https://media.api-sports.io/football/teams/410.png",
                "prediction": "2 - 3",
                "odds": {
                    "home": 10,
                    "draw": 45,
                    "away": 45
                },
                "advice": "Combo Double chance : draw or GO Ahead Eagles and +1.5 goals",
                "comparison": {
                    "form": {
                        "home": 54,
                        "away": 46
                    },
                    "att": {
                        "home": 48,
                        "away": 52
                    },
                    "def": {
                        "home": 55,
                        "away": 45
                    },
                    "poisson": {
                        "home": 52,
                        "away": 48
                    },
                    "h2h": {
                        "home": 29,
                        "away": 71
                    },
                    "goals": {
                        "home": 33,
                        "away": 67
                    }
                },
                "goals": [
                    {
                        "minute": "2",
                        "player": "Perr Schuurs",
                        "team": "home"
                    },
                    {
                        "minute": "10",
                        "player": "Stefán Ingi Sigurdarson",
                        "team": "away"
                    }
                ],
                "cards": [
                    {
                        "minute": "31",
                        "player": "Søren Tengstedt",
                        "team": "away",
                        "type": "yellow"
                    }
                ]
            },
            {
                "league": "Ligue 1",
                "date": "2026-09-20",
                "time": "22:15",
                "home": "Nice",
                "away": "Lille",
                "stadium": "Allianz Riviera",
                "round": "Pekan 5",
                "statusCode": "HT",
                "minuteDisplay": "HT",
                "homeScore": 1,
                "awayScore": 0,
                "homeLogo": "https://media.api-sports.io/football/teams/84.png",
                "awayLogo": "https://media.api-sports.io/football/teams/79.png",
                "prediction": "0 - 2",
                "odds": {
                    "home": 10,
                    "draw": 45,
                    "away": 45
                },
                "advice": "Combo Double chance : draw or Lille and -3.5 goals",
                "comparison": {
                    "form": {
                        "home": 17,
                        "away": 83
                    },
                    "att": {
                        "home": 13,
                        "away": 88
                    },
                    "def": {
                        "home": 29,
                        "away": 71
                    },
                    "poisson": {
                        "home": 0,
                        "away": 100
                    },
                    "h2h": {
                        "home": 50,
                        "away": 50
                    },
                    "goals": {
                        "home": 54,
                        "away": 46
                    }
                },
                "goals": [
                    {
                        "minute": "22",
                        "player": "Nathan Ngoy",
                        "team": "away"
                    }
                ],
                "cards": [
                    {
                        "minute": "5",
                        "player": "Mohamed Abdelmoneim",
                        "team": "home",
                        "type": "yellow"
                    },
                    {
                        "minute": "45+1",
                        "player": "Xavier Mandza",
                        "team": "home",
                        "type": "yellow"
                    }
                ]
            },
            {
                "league": "Premier League",
                "date": "2026-09-20",
                "time": "22:30",
                "home": "Fulham",
                "away": "Manchester United",
                "stadium": "Craven Cottage",
                "round": "Pekan 5",
                "statusCode": "1H",
                "minuteDisplay": "35'",
                "homeScore": 0,
                "awayScore": 0,
                "homeLogo": "https://media.api-sports.io/football/teams/36.png",
                "awayLogo": "https://media.api-sports.io/football/teams/33.png",
                "prediction": "1 - 2",
                "odds": {
                    "home": 10,
                    "draw": 45,
                    "away": 45
                },
                "advice": "Double chance : draw or Manchester United",
                "comparison": {
                    "form": {
                        "home": 20,
                        "away": 80
                    },
                    "att": {
                        "home": 36,
                        "away": 64
                    },
                    "def": {
                        "home": 50,
                        "away": 50
                    },
                    "poisson": {
                        "home": 53,
                        "away": 47
                    },
                    "h2h": {
                        "home": 15,
                        "away": 85
                    },
                    "goals": {
                        "home": 36,
                        "away": 64
                    }
                }
            },
            {
                "league": "Bundesliga",
                "date": "2026-09-20",
                "time": "22:30",
                "home": "FC Schalke 04",
                "away": "SV Elversberg",
                "stadium": "VELTINS-Arena",
                "round": "Pekan 4",
                "statusCode": "1H",
                "minuteDisplay": "35'",
                "homeScore": 0,
                "awayScore": 0,
                "homeLogo": "https://media.api-sports.io/football/teams/174.png",
                "awayLogo": "https://media.api-sports.io/football/teams/1660.png",
                "prediction": "3 - 2",
                "odds": {
                    "home": 45,
                    "draw": 45,
                    "away": 10
                },
                "advice": "Double chance : FC Schalke 04 or draw",
                "comparison": {
                    "form": {
                        "home": 40,
                        "away": 60
                    },
                    "att": {
                        "home": 27,
                        "away": 73
                    },
                    "def": {
                        "home": 64,
                        "away": 36
                    },
                    "poisson": {
                        "home": 0,
                        "away": 0
                    },
                    "h2h": {
                        "home": 71,
                        "away": 29
                    },
                    "goals": {
                        "home": 64,
                        "away": 36
                    }
                },
                "cards": [
                    {
                        "minute": "26",
                        "player": "Felix Keidel",
                        "team": "away",
                        "type": "yellow"
                    }
                ]
            },
            {
                "league": "Serie A",
                "date": "2026-09-20",
                "time": "23:00",
                "home": "Juventus",
                "away": "Atalanta",
                "stadium": "Allianz Stadium",
                "round": "Pekan 5",
                "statusCode": "1H",
                "minuteDisplay": "3'",
                "homeScore": 0,
                "awayScore": 0,
                "homeLogo": "https://media.api-sports.io/football/teams/496.png",
                "awayLogo": "https://media.api-sports.io/football/teams/499.png",
                "prediction": "1 - 1",
                "odds": {
                    "home": 35,
                    "draw": 35,
                    "away": 30
                },
                "advice": "Double chance : Juventus or draw",
                "comparison": {
                    "form": {
                        "home": 54,
                        "away": 46
                    },
                    "att": {
                        "home": 55,
                        "away": 45
                    },
                    "def": {
                        "home": 56,
                        "away": 44
                    },
                    "poisson": {
                        "home": 87,
                        "away": 13
                    },
                    "h2h": {
                        "home": 50,
                        "away": 50
                    },
                    "goals": {
                        "home": 31,
                        "away": 69
                    }
                }
            }
        ],
        "2026-09-21": [
            {
                "league": "Super Lig",
                "date": "2026-09-21",
                "time": "00:00",
                "home": "Göztepe",
                "away": "Rizespor",
                "stadium": "Gursel Aksel Stadium",
                "round": "Pekan 6",
                "statusCode": "FT",
                "minuteDisplay": "FT",
                "homeScore": 2,
                "awayScore": 2,
                "homeLogo": "https://media.api-sports.io/football/teams/994.png",
                "awayLogo": "https://media.api-sports.io/football/teams/1007.png",
                "prediction": "1 - 2",
                "odds": {
                    "home": 35,
                    "draw": 35,
                    "away": 30
                },
                "advice": "Double chance : Göztepe or draw",
                "comparison": {
                    "form": {
                        "home": 18,
                        "away": 82
                    },
                    "att": {
                        "home": 64,
                        "away": 36
                    },
                    "def": {
                        "home": 24,
                        "away": 76
                    },
                    "poisson": {
                        "home": 5,
                        "away": 95
                    },
                    "h2h": {
                        "home": 71,
                        "away": 29
                    },
                    "goals": {
                        "home": 60,
                        "away": 40
                    }
                },
                "goals": [
                    {
                        "minute": "2",
                        "player": "Arda Kurtulan",
                        "team": "home"
                    },
                    {
                        "minute": "70",
                        "player": "Ibrahim Olawoyin",
                        "team": "away"
                    },
                    {
                        "minute": "80",
                        "player": "Iustin Doicaru",
                        "team": "away"
                    },
                    {
                        "minute": "90+4",
                        "player": "Efkan Bekiroğlu",
                        "team": "home"
                    }
                ],
                "cards": [
                    {
                        "minute": "16",
                        "player": "Arda Kurtulan",
                        "team": "home",
                        "type": "yellow"
                    },
                    {
                        "minute": "18",
                        "player": "Alex Matos",
                        "team": "home",
                        "type": "yellow"
                    },
                    {
                        "minute": "69",
                        "player": "Rhaldney",
                        "team": "home",
                        "type": "yellow"
                    },
                    {
                        "minute": "79",
                        "player": "Bekir Turaç Böke",
                        "team": "home",
                        "type": "yellow"
                    },
                    {
                        "minute": "85",
                        "player": "Taha Altıkardeş",
                        "team": "home",
                        "type": "yellow"
                    },
                    {
                        "minute": "89",
                        "player": "Zakaria Ariss",
                        "team": "away",
                        "type": "yellow"
                    }
                ]
            },
            {
                "league": "Super Lig",
                "date": "2026-09-21",
                "time": "00:00",
                "home": "Amed",
                "away": "Beşiktaş",
                "stadium": "Diyarbakir Stadium",
                "round": "Pekan 6",
                "statusCode": "FT",
                "minuteDisplay": "FT",
                "homeScore": 3,
                "awayScore": 2,
                "homeLogo": "https://media.api-sports.io/football/teams/3579.png",
                "awayLogo": "https://media.api-sports.io/football/teams/549.png",
                "prediction": "3 - 2",
                "odds": {
                    "home": 45,
                    "draw": 45,
                    "away": 10
                },
                "advice": "Double chance : Amed or draw",
                "comparison": {
                    "form": {
                        "home": 45,
                        "away": 55
                    },
                    "att": {
                        "home": 50,
                        "away": 50
                    },
                    "def": {
                        "home": 44,
                        "away": 56
                    },
                    "poisson": {
                        "home": 87,
                        "away": 13
                    },
                    "h2h": {
                        "home": 0,
                        "away": 0
                    },
                    "goals": {
                        "home": 0,
                        "away": 0
                    }
                },
                "goals": [
                    {
                        "minute": "13",
                        "player": "G. Orban",
                        "team": "home"
                    },
                    {
                        "minute": "22",
                        "player": "D. Saba",
                        "team": "home"
                    },
                    {
                        "minute": "55",
                        "player": "D. Vlahovic",
                        "team": "away"
                    },
                    {
                        "minute": "59",
                        "player": "F. Soyalp",
                        "team": "home"
                    },
                    {
                        "minute": "90+8",
                        "player": "O. Kokcu",
                        "team": "away"
                    }
                ],
                "cards": [
                    {
                        "minute": "26",
                        "player": "M. Khalil",
                        "team": "home",
                        "type": "yellow"
                    },
                    {
                        "minute": "33",
                        "player": "E. Krasniqi",
                        "team": "home",
                        "type": "yellow"
                    },
                    {
                        "minute": "38",
                        "player": "I. Fakili",
                        "team": "away",
                        "type": "yellow"
                    },
                    {
                        "minute": "45+1",
                        "player": "D. Bates",
                        "team": "home",
                        "type": "yellow"
                    },
                    {
                        "minute": "46",
                        "player": "M. Murillo",
                        "team": "away",
                        "type": "yellow"
                    },
                    {
                        "minute": "58",
                        "player": "E. Agbadou",
                        "team": "away",
                        "type": "yellow"
                    },
                    {
                        "minute": "64",
                        "player": "L. Dellova",
                        "team": "home",
                        "type": "yellow"
                    },
                    {
                        "minute": "78",
                        "player": "A. Cisse",
                        "team": "home",
                        "type": "yellow"
                    },
                    {
                        "minute": "84",
                        "player": "A. Cisse",
                        "team": "home",
                        "type": "yellow"
                    },
                    {
                        "minute": "84",
                        "player": "A. Cisse",
                        "team": "home",
                        "type": "red"
                    },
                    {
                        "minute": "90+2",
                        "player": "A. Lafont",
                        "team": "home",
                        "type": "yellow"
                    },
                    {
                        "minute": "90+8",
                        "player": "E. Topcu",
                        "team": "away",
                        "type": "yellow"
                    },
                    {
                        "minute": "90+8",
                        "player": "M. Yesil",
                        "team": "home",
                        "type": "yellow"
                    },
                    {
                        "minute": "90+8",
                        "player": "O. Kokcu",
                        "team": "away",
                        "type": "yellow"
                    },
                    {
                        "minute": "90+10",
                        "player": "R. Raveloson",
                        "team": "home",
                        "type": "yellow"
                    }
                ]
            },
            {
                "league": "Primeira Liga",
                "date": "2026-09-21",
                "time": "00:00",
                "home": "Santa Clara",
                "away": "SC Braga",
                "stadium": "Estádio de São Miguel",
                "round": "Pekan 7",
                "statusCode": "FT",
                "minuteDisplay": "FT",
                "homeScore": 0,
                "awayScore": 0,
                "homeLogo": "https://media.api-sports.io/football/teams/227.png",
                "awayLogo": "https://media.api-sports.io/football/teams/217.png",
                "prediction": "1 - 1",
                "odds": {
                    "home": 35,
                    "draw": 35,
                    "away": 30
                },
                "advice": "Double chance : Santa Clara or draw",
                "comparison": {
                    "form": {
                        "home": 57,
                        "away": 43
                    },
                    "att": {
                        "home": 56,
                        "away": 44
                    },
                    "def": {
                        "home": 71,
                        "away": 29
                    },
                    "poisson": {
                        "home": 79,
                        "away": 21
                    },
                    "h2h": {
                        "home": 29,
                        "away": 71
                    },
                    "goals": {
                        "home": 23,
                        "away": 77
                    }
                },
                "cards": [
                    {
                        "minute": "29",
                        "player": "Tiago Ribeiro",
                        "team": "home",
                        "type": "yellow"
                    },
                    {
                        "minute": "36",
                        "player": "Adrian Bajrami",
                        "team": "away",
                        "type": "yellow"
                    },
                    {
                        "minute": "56",
                        "player": "João Moutinho",
                        "team": "away",
                        "type": "yellow"
                    },
                    {
                        "minute": "69",
                        "player": "Lucas Soares",
                        "team": "home",
                        "type": "yellow"
                    },
                    {
                        "minute": "73",
                        "player": "Lucas França",
                        "team": "home",
                        "type": "yellow"
                    },
                    {
                        "minute": "77",
                        "player": "Dani Borges",
                        "team": "home",
                        "type": "yellow"
                    },
                    {
                        "minute": "81",
                        "player": "Jean-Baptiste Gorby",
                        "team": "away",
                        "type": "yellow"
                    }
                ]
            },
            {
                "league": "Primeira Liga",
                "date": "2026-09-21",
                "time": "00:00",
                "home": "Estoril",
                "away": "Casa Pia",
                "stadium": "Estádio António Coimbra da Mota",
                "round": "Pekan 7",
                "statusCode": "FT",
                "minuteDisplay": "FT",
                "homeScore": 1,
                "awayScore": 2,
                "homeLogo": "https://media.api-sports.io/football/teams/230.png",
                "awayLogo": "https://media.api-sports.io/football/teams/4716.png",
                "prediction": "2 - 1",
                "odds": {
                    "home": 45,
                    "draw": 45,
                    "away": 10
                },
                "advice": "Combo Double chance : Estoril or draw and -3.5 goals",
                "comparison": {
                    "form": {
                        "home": 50,
                        "away": 50
                    },
                    "att": {
                        "home": 50,
                        "away": 50
                    },
                    "def": {
                        "home": 67,
                        "away": 33
                    },
                    "poisson": {
                        "home": 100,
                        "away": 0
                    },
                    "h2h": {
                        "home": 50,
                        "away": 50
                    },
                    "goals": {
                        "home": 50,
                        "away": 50
                    }
                },
                "goals": [
                    {
                        "minute": "70",
                        "player": "Ricard Sanchez Sendra",
                        "team": "home"
                    },
                    {
                        "minute": "72",
                        "player": "Selvi Clua",
                        "team": "away"
                    },
                    {
                        "minute": "89",
                        "player": "Benjamin Pauwels",
                        "team": "away"
                    }
                ],
                "cards": [
                    {
                        "minute": "41",
                        "player": "Ismael Sierra",
                        "team": "home",
                        "type": "yellow"
                    },
                    {
                        "minute": "62",
                        "player": "David Sousa",
                        "team": "away",
                        "type": "yellow"
                    },
                    {
                        "minute": "82",
                        "player": "Yanis Begraoui",
                        "team": "home",
                        "type": "yellow"
                    },
                    {
                        "minute": "85",
                        "player": "Jordan Arnolin",
                        "team": "home",
                        "type": "yellow"
                    },
                    {
                        "minute": "90+5",
                        "player": "Alassana Jatta",
                        "team": "away",
                        "type": "yellow"
                    }
                ]
            },
            {
                "league": "Jupiler Pro League",
                "date": "2026-09-21",
                "time": "00:15",
                "home": "Kortrijk",
                "away": "SK Beveren",
                "stadium": "Guldensporen Stadion",
                "round": "Pekan 7",
                "statusCode": "FT",
                "minuteDisplay": "FT",
                "homeScore": 1,
                "awayScore": 0,
                "homeLogo": "https://media.api-sports.io/football/teams/734.png",
                "awayLogo": "https://media.api-sports.io/football/teams/738.png",
                "prediction": "1 - 2",
                "odds": {
                    "home": 10,
                    "draw": 45,
                    "away": 45
                },
                "advice": "Double chance : draw or SK Beveren",
                "comparison": {
                    "form": {
                        "home": 0,
                        "away": 100
                    },
                    "att": {
                        "home": 14,
                        "away": 86
                    },
                    "def": {
                        "home": 40,
                        "away": 60
                    },
                    "poisson": {
                        "home": 48,
                        "away": 52
                    },
                    "h2h": {
                        "home": 7,
                        "away": 93
                    },
                    "goals": {
                        "home": 11,
                        "away": 89
                    }
                },
                "goals": [
                    {
                        "minute": "52",
                        "player": "Jamie Roche",
                        "team": "home"
                    }
                ],
                "cards": [
                    {
                        "minute": "32",
                        "player": "Johannes Schenk",
                        "team": "away",
                        "type": "red"
                    },
                    {
                        "minute": "57",
                        "player": "James Willy Ndjeungoue",
                        "team": "home",
                        "type": "yellow"
                    },
                    {
                        "minute": "58",
                        "player": "Thierry Ambrose",
                        "team": "home",
                        "type": "yellow"
                    },
                    {
                        "minute": "73",
                        "player": "Brecht Dejaegere",
                        "team": "home",
                        "type": "yellow"
                    },
                    {
                        "minute": "73",
                        "player": "Christophe Janssens",
                        "team": "away",
                        "type": "yellow"
                    },
                    {
                        "minute": "83",
                        "player": "Jamie Roche",
                        "team": "home",
                        "type": "yellow"
                    }
                ]
            },
            {
                "league": "Bundesliga",
                "date": "2026-09-21",
                "time": "00:30",
                "home": "SC Paderborn 07",
                "away": "1899 Hoffenheim",
                "stadium": "Home Deluxe Arena",
                "round": "Pekan 4",
                "statusCode": "FT",
                "minuteDisplay": "FT",
                "homeScore": 3,
                "awayScore": 1,
                "homeLogo": "https://media.api-sports.io/football/teams/185.png",
                "awayLogo": "https://media.api-sports.io/football/teams/167.png",
                "prediction": "1 - 2",
                "odds": {
                    "home": 10,
                    "draw": 45,
                    "away": 45
                },
                "advice": "Winner : 1899 Hoffenheim",
                "comparison": {
                    "form": {
                        "home": 25,
                        "away": 75
                    },
                    "att": {
                        "home": 0,
                        "away": 100
                    },
                    "def": {
                        "home": 64,
                        "away": 36
                    },
                    "poisson": {
                        "home": 0,
                        "away": 100
                    },
                    "h2h": {
                        "home": 20,
                        "away": 80
                    },
                    "goals": {
                        "home": 17,
                        "away": 83
                    }
                },
                "goals": [
                    {
                        "minute": "29",
                        "player": "Santiago Castaneda",
                        "team": "home"
                    },
                    {
                        "minute": "42",
                        "player": "Stefano Marino",
                        "team": "home"
                    },
                    {
                        "minute": "50",
                        "player": "Adam Daghim",
                        "team": "away"
                    },
                    {
                        "minute": "69",
                        "player": "Steffen Tigges",
                        "team": "home"
                    }
                ],
                "cards": [
                    {
                        "minute": "45",
                        "player": "Wouter Burger",
                        "team": "away",
                        "type": "yellow"
                    }
                ]
            },
            {
                "league": "Serie A",
                "date": "2026-09-21",
                "time": "01:45",
                "home": "AC Milan",
                "away": "Lecce",
                "stadium": "San Siro/Giuseppe Meazza",
                "round": "Pekan 5",
                "statusCode": "FT",
                "minuteDisplay": "FT",
                "homeScore": 3,
                "awayScore": 0,
                "homeLogo": "https://media.api-sports.io/football/teams/489.png",
                "awayLogo": "https://media.api-sports.io/football/teams/867.png",
                "prediction": "2 - 1",
                "odds": {
                    "home": 45,
                    "draw": 45,
                    "away": 10
                },
                "advice": "Double chance : AC Milan or draw",
                "comparison": {
                    "form": {
                        "home": 57,
                        "away": 43
                    },
                    "att": {
                        "home": 58,
                        "away": 42
                    },
                    "def": {
                        "home": 64,
                        "away": 36
                    },
                    "poisson": {
                        "home": 100,
                        "away": 0
                    },
                    "h2h": {
                        "home": 100,
                        "away": 0
                    },
                    "goals": {
                        "home": 86,
                        "away": 14
                    }
                },
                "goals": [
                    {
                        "minute": "14",
                        "player": "C. Pulisic",
                        "team": "home"
                    },
                    {
                        "minute": "61",
                        "player": "A. Rabiot",
                        "team": "home"
                    },
                    {
                        "minute": "73",
                        "player": "D. Moreira",
                        "team": "home"
                    }
                ],
                "cards": [
                    {
                        "minute": "58",
                        "player": "D. Veiga",
                        "team": "away",
                        "type": "yellow"
                    }
                ]
            },
            {
                "league": "Ligue 1",
                "date": "2026-09-21",
                "time": "01:45",
                "home": "Marseille",
                "away": "Paris Saint Germain",
                "stadium": "Orange Vélodrome",
                "round": "Pekan 5",
                "statusCode": "FT",
                "minuteDisplay": "FT",
                "homeScore": 1,
                "awayScore": 2,
                "homeLogo": "https://media.api-sports.io/football/teams/81.png",
                "awayLogo": "https://media.api-sports.io/football/teams/85.png",
                "prediction": "2 - 3",
                "odds": {
                    "home": 10,
                    "draw": 45,
                    "away": 45
                },
                "advice": "Double chance : draw or Paris Saint Germain",
                "comparison": {
                    "form": {
                        "home": 38,
                        "away": 63
                    },
                    "att": {
                        "home": 50,
                        "away": 50
                    },
                    "def": {
                        "home": 50,
                        "away": 50
                    },
                    "poisson": {
                        "home": 56,
                        "away": 44
                    },
                    "h2h": {
                        "home": 20,
                        "away": 80
                    },
                    "goals": {
                        "home": 22,
                        "away": 78
                    }
                },
                "goals": [
                    {
                        "minute": "66",
                        "player": "Ferrán Torres",
                        "team": "away"
                    },
                    {
                        "minute": "72",
                        "player": "Angel Gomes",
                        "team": "home"
                    },
                    {
                        "minute": "74",
                        "player": "Marcos Aoás Corrêa",
                        "team": "away"
                    }
                ],
                "cards": [
                    {
                        "minute": "32",
                        "player": "Timothy Weah",
                        "team": "home",
                        "type": "yellow"
                    },
                    {
                        "minute": "39",
                        "player": "Nuno Mendes",
                        "team": "away",
                        "type": "yellow"
                    },
                    {
                        "minute": "77",
                        "player": "Timothy Weah",
                        "team": "home",
                        "type": "red"
                    },
                    {
                        "minute": "81",
                        "player": "Keyliane Abdallah",
                        "team": "home",
                        "type": "yellow"
                    },
                    {
                        "minute": "90",
                        "player": "Angel Gomes",
                        "team": "home",
                        "type": "yellow"
                    }
                ]
            },
            {
                "league": "LaLiga",
                "date": "2026-09-21",
                "time": "02:00",
                "home": "Valencia",
                "away": "Real Sociedad",
                "stadium": "Estadio de Mestalla",
                "round": "Pekan 7",
                "statusCode": "FT",
                "minuteDisplay": "FT",
                "homeScore": 2,
                "awayScore": 3,
                "homeLogo": "https://media.api-sports.io/football/teams/532.png",
                "awayLogo": "https://media.api-sports.io/football/teams/548.png",
                "prediction": "1 - 2",
                "odds": {
                    "home": 10,
                    "draw": 45,
                    "away": 45
                },
                "advice": "Double chance : draw or Real Sociedad",
                "comparison": {
                    "form": {
                        "home": 30,
                        "away": 70
                    },
                    "att": {
                        "home": 25,
                        "away": 75
                    },
                    "def": {
                        "home": 50,
                        "away": 50
                    },
                    "poisson": {
                        "home": 0,
                        "away": 100
                    },
                    "h2h": {
                        "home": 50,
                        "away": 50
                    },
                    "goals": {
                        "home": 43,
                        "away": 57
                    }
                },
                "goals": [
                    {
                        "minute": "26",
                        "player": "Luka Sučić",
                        "team": "away"
                    },
                    {
                        "minute": "57",
                        "player": "Aaron Mayol",
                        "team": "home"
                    },
                    {
                        "minute": "75",
                        "player": "Carlos Soler",
                        "team": "away"
                    },
                    {
                        "minute": "84",
                        "player": "Luken Beitia Aguirregomezcorta",
                        "team": "away"
                    },
                    {
                        "minute": "90+1",
                        "player": "Ander Barrenetxea",
                        "team": "away"
                    }
                ],
                "cards": [
                    {
                        "minute": "11",
                        "player": "Justin De Haas",
                        "team": "home",
                        "type": "yellow"
                    },
                    {
                        "minute": "12",
                        "player": "José Gayà",
                        "team": "home",
                        "type": "yellow"
                    },
                    {
                        "minute": "54",
                        "player": "Luka Sučić",
                        "team": "away",
                        "type": "yellow"
                    },
                    {
                        "minute": "90+6",
                        "player": "Orri Steinn Óskarsson",
                        "team": "away",
                        "type": "yellow"
                    },
                    {
                        "minute": "90+6",
                        "player": "Orri Steinn Óskarsson",
                        "team": "away",
                        "type": "red"
                    }
                ]
            },
            {
                "league": "Primeira Liga",
                "date": "2026-09-21",
                "time": "02:30",
                "home": "FC Porto",
                "away": "Benfica",
                "stadium": "Estádio do Dragão",
                "round": "Pekan 7",
                "statusCode": "FT",
                "minuteDisplay": "FT",
                "homeScore": 3,
                "awayScore": 1,
                "homeLogo": "https://media.api-sports.io/football/teams/212.png",
                "awayLogo": "https://media.api-sports.io/football/teams/211.png",
                "prediction": "2 - 3",
                "odds": {
                    "home": 10,
                    "draw": 45,
                    "away": 45
                },
                "advice": "Double chance : draw or Benfica",
                "comparison": {
                    "form": {
                        "home": 50,
                        "away": 50
                    },
                    "att": {
                        "home": 41,
                        "away": 59
                    },
                    "def": {
                        "home": 50,
                        "away": 50
                    },
                    "poisson": {
                        "home": 0,
                        "away": 100
                    },
                    "h2h": {
                        "home": 38,
                        "away": 62
                    },
                    "goals": {
                        "home": 33,
                        "away": 67
                    }
                },
                "goals": [
                    {
                        "minute": "31",
                        "player": "Gabri Veiga",
                        "team": "home"
                    },
                    {
                        "minute": "51",
                        "player": "Alexander Bah",
                        "team": "away"
                    },
                    {
                        "minute": "54",
                        "player": "Victor Froholdt",
                        "team": "home"
                    },
                    {
                        "minute": "60",
                        "player": "Hwang In-Beom",
                        "team": "home"
                    }
                ],
                "cards": [
                    {
                        "minute": "5",
                        "player": "Gabri Veiga",
                        "team": "home",
                        "type": "yellow"
                    },
                    {
                        "minute": "25",
                        "player": "Clément Lenglet",
                        "team": "away",
                        "type": "yellow"
                    },
                    {
                        "minute": "34",
                        "player": "Gianluca Prestianni",
                        "team": "away",
                        "type": "yellow"
                    },
                    {
                        "minute": "35",
                        "player": "Clément Lenglet",
                        "team": "away",
                        "type": "red"
                    },
                    {
                        "minute": "80",
                        "player": "Hwang In-Beom",
                        "team": "home",
                        "type": "yellow"
                    },
                    {
                        "minute": "90+2",
                        "player": "Oskar Pietuszewski",
                        "team": "home",
                        "type": "yellow"
                    },
                    {
                        "minute": "90+3",
                        "player": "Tomás Araújo",
                        "team": "away",
                        "type": "yellow"
                    },
                    {
                        "minute": "90+3",
                        "player": "Alexander Bah",
                        "team": "away",
                        "type": "yellow"
                    }
                ]
            },
            {
                "league": "MLS",
                "date": "2026-09-21",
                "time": "06:00",
                "home": "Inter Miami",
                "away": "San Diego",
                "stadium": "Nu Stadium",
                "round": "Pekan 26",
                "statusCode": "FT",
                "minuteDisplay": "FT",
                "homeScore": 2,
                "awayScore": 2,
                "homeLogo": "https://media.api-sports.io/football/teams/9568.png",
                "awayLogo": "https://media.api-sports.io/football/teams/25484.png",
                "prediction": "3 - 2",
                "odds": {
                    "home": 45,
                    "draw": 45,
                    "away": 10
                },
                "advice": "Combo Double chance : Inter Miami or draw and +1.5 goals",
                "comparison": {
                    "form": {
                        "home": 50,
                        "away": 50
                    },
                    "att": {
                        "home": 62,
                        "away": 38
                    },
                    "def": {
                        "home": 56,
                        "away": 44
                    },
                    "poisson": {
                        "home": 65,
                        "away": 35
                    },
                    "h2h": {
                        "home": 0,
                        "away": 0
                    },
                    "goals": {
                        "home": 0,
                        "away": 0
                    }
                },
                "goals": [
                    {
                        "minute": "12",
                        "player": "A. Dreyer",
                        "team": "away"
                    },
                    {
                        "minute": "23",
                        "player": "L. Messi",
                        "team": "home"
                    },
                    {
                        "minute": "75",
                        "player": "L. Suarez",
                        "team": "home"
                    },
                    {
                        "minute": "82",
                        "player": "A. Dreyer",
                        "team": "away"
                    }
                ],
                "cards": [
                    {
                        "minute": "33",
                        "player": "I. Murphy",
                        "team": "away",
                        "type": "yellow"
                    },
                    {
                        "minute": "65",
                        "player": "Y. Bright",
                        "team": "home",
                        "type": "yellow"
                    },
                    {
                        "minute": "82",
                        "player": "A. Shaw",
                        "team": "home",
                        "type": "yellow"
                    }
                ]
            },
            {
                "league": "Liga de Expansion MX",
                "date": "2026-09-21",
                "time": "06:00",
                "home": "Tapatío",
                "away": "Tlaxcala",
                "stadium": "Estadio Akron",
                "round": "Apertura - 9",
                "statusCode": "FT",
                "minuteDisplay": "FT",
                "homeScore": 4,
                "awayScore": 0,
                "homeLogo": "https://media.api-sports.io/football/teams/14278.png",
                "awayLogo": "https://media.api-sports.io/football/teams/14280.png",
                "prediction": "3 - 2",
                "odds": {
                    "home": 45,
                    "draw": 45,
                    "away": 10
                },
                "advice": "Double chance : Tapatío or draw",
                "comparison": {
                    "form": {
                        "home": 47,
                        "away": 53
                    },
                    "att": {
                        "home": 48,
                        "away": 52
                    },
                    "def": {
                        "home": 42,
                        "away": 58
                    },
                    "poisson": {
                        "home": 54,
                        "away": 46
                    },
                    "h2h": {
                        "home": 80,
                        "away": 20
                    },
                    "goals": {
                        "home": 77,
                        "away": 23
                    }
                },
                "goals": [
                    {
                        "minute": "13",
                        "player": "G. Garcia",
                        "team": "home"
                    },
                    {
                        "minute": "54",
                        "player": "V. Moragrega",
                        "team": "home"
                    },
                    {
                        "minute": "60",
                        "player": "V. Moragrega",
                        "team": "home"
                    },
                    {
                        "minute": "61",
                        "player": "J. Hernandez",
                        "team": "home"
                    }
                ],
                "cards": [
                    {
                        "minute": "7",
                        "player": "G. Garcia",
                        "team": "home",
                        "type": "yellow"
                    },
                    {
                        "minute": "30",
                        "player": "C. Soldati",
                        "team": "home",
                        "type": "yellow"
                    },
                    {
                        "minute": "87",
                        "player": "F. Plascencia",
                        "team": "away",
                        "type": "red"
                    },
                    {
                        "minute": "90",
                        "player": "S. Esparza",
                        "team": "home",
                        "type": "yellow"
                    }
                ]
            },
            {
                "league": "Liga MX",
                "date": "2026-09-21",
                "time": "07:00",
                "home": "Toluca",
                "away": "Santos Laguna",
                "stadium": "Estadio Nemesio Diez",
                "round": "Apertura - 9",
                "statusCode": "FT",
                "minuteDisplay": "FT",
                "homeScore": 2,
                "awayScore": 3,
                "homeLogo": "https://media.api-sports.io/football/teams/2281.png",
                "awayLogo": "https://media.api-sports.io/football/teams/2285.png",
                "prediction": "2 - 1",
                "odds": {
                    "home": 50,
                    "draw": 50,
                    "away": 33
                },
                "advice": "Combo Winner : Toluca and +1.5 goals",
                "comparison": {
                    "form": {
                        "home": 76,
                        "away": 24
                    },
                    "att": {
                        "home": 75,
                        "away": 25
                    },
                    "def": {
                        "home": 67,
                        "away": 33
                    },
                    "poisson": {
                        "home": 85,
                        "away": 15
                    },
                    "h2h": {
                        "home": 80,
                        "away": 20
                    },
                    "goals": {
                        "home": 63,
                        "away": 38
                    }
                },
                "goals": [
                    {
                        "minute": "25",
                        "player": "Federico Viñas",
                        "team": "home"
                    },
                    {
                        "minute": "43",
                        "player": "João Paulo Dias Fernandes",
                        "team": "home"
                    },
                    {
                        "minute": "45+1",
                        "player": "Ezequiel Bullaude",
                        "team": "away"
                    },
                    {
                        "minute": "86",
                        "player": "Kevin Palacios",
                        "team": "away"
                    },
                    {
                        "minute": "90+5",
                        "player": "Francisco Villalba",
                        "team": "away"
                    }
                ],
                "cards": [
                    {
                        "minute": "38",
                        "player": "Nicolás Castro",
                        "team": "home",
                        "type": "yellow"
                    },
                    {
                        "minute": "45+4",
                        "player": "Antonio Ricardo Mohamed Matijevich",
                        "team": "home",
                        "type": "yellow"
                    },
                    {
                        "minute": "45+7",
                        "player": "Everardo Lopez",
                        "team": "home",
                        "type": "red"
                    },
                    {
                        "minute": "45+8",
                        "player": "Facundo Cáseres",
                        "team": "away",
                        "type": "yellow"
                    }
                ]
            },
            {
                "league": "Liga MX",
                "date": "2026-09-21",
                "time": "07:00",
                "home": "CF Pachuca",
                "away": "Club Tijuana",
                "stadium": "Estadio Hidalgo",
                "round": "Apertura - 9",
                "statusCode": "FT",
                "minuteDisplay": "FT",
                "homeScore": 2,
                "awayScore": 2,
                "homeLogo": "https://media.api-sports.io/football/teams/2292.png",
                "awayLogo": "https://media.api-sports.io/football/teams/2280.png",
                "prediction": "2 - 1",
                "odds": {
                    "home": 45,
                    "draw": 45,
                    "away": 10
                },
                "advice": "Double chance : CF Pachuca or draw",
                "comparison": {
                    "form": {
                        "home": 53,
                        "away": 47
                    },
                    "att": {
                        "home": 60,
                        "away": 40
                    },
                    "def": {
                        "home": 58,
                        "away": 42
                    },
                    "poisson": {
                        "home": 59,
                        "away": 41
                    },
                    "h2h": {
                        "home": 40,
                        "away": 60
                    },
                    "goals": {
                        "home": 47,
                        "away": 53
                    }
                },
                "goals": [
                    {
                        "minute": "17",
                        "player": "Gilberto Mora",
                        "team": "away"
                    },
                    {
                        "minute": "42",
                        "player": "Jesus Gomez",
                        "team": "away"
                    },
                    {
                        "minute": "55",
                        "player": "Salomón Rondón",
                        "team": "home"
                    },
                    {
                        "minute": "90",
                        "player": "Salomón Rondón",
                        "team": "home"
                    }
                ],
                "cards": [
                    {
                        "minute": "33",
                        "player": "Ivan Tona",
                        "team": "away",
                        "type": "yellow"
                    },
                    {
                        "minute": "33",
                        "player": "Oussama Idrissi",
                        "team": "home",
                        "type": "yellow"
                    },
                    {
                        "minute": "74",
                        "player": "Yael Padilla",
                        "team": "away",
                        "type": "yellow"
                    },
                    {
                        "minute": "90+1",
                        "player": "Benjamín Mora Mendívil",
                        "team": "home",
                        "type": "red"
                    },
                    {
                        "minute": "90+3",
                        "player": "Diego Fernando Abreu Firenze",
                        "team": "away",
                        "type": "yellow"
                    }
                ]
            },
            {
                "league": "Liga MX",
                "date": "2026-09-21",
                "time": "09:10",
                "home": "Club Queretaro",
                "away": "Leon",
                "stadium": "Estadio La Corregidora",
                "round": "Apertura - 9",
                "statusCode": "FT",
                "minuteDisplay": "FT",
                "homeScore": 1,
                "awayScore": 1,
                "homeLogo": "https://media.api-sports.io/football/teams/2290.png",
                "awayLogo": "https://media.api-sports.io/football/teams/2289.png",
                "prediction": "1 - 2",
                "odds": {
                    "home": 10,
                    "draw": 45,
                    "away": 45
                },
                "advice": "Double chance : draw or Leon",
                "comparison": {
                    "form": {
                        "home": 50,
                        "away": 50
                    },
                    "att": {
                        "home": 50,
                        "away": 50
                    },
                    "def": {
                        "home": 50,
                        "away": 50
                    },
                    "poisson": {
                        "home": 51,
                        "away": 49
                    },
                    "h2h": {
                        "home": 50,
                        "away": 50
                    },
                    "goals": {
                        "home": 38,
                        "away": 62
                    }
                },
                "goals": [
                    {
                        "minute": "54",
                        "player": "Daniel Arcila",
                        "team": "away"
                    },
                    {
                        "minute": "60",
                        "player": "Iker Benito Sánchez",
                        "team": "home"
                    }
                ],
                "cards": [
                    {
                        "minute": "44",
                        "player": "Bayron Duarte",
                        "team": "home",
                        "type": "yellow"
                    },
                    {
                        "minute": "52",
                        "player": "Lucas Abascia",
                        "team": "home",
                        "type": "yellow"
                    },
                    {
                        "minute": "58",
                        "player": "Daniel Parra",
                        "team": "home",
                        "type": "yellow"
                    },
                    {
                        "minute": "62",
                        "player": "Ali Ávila",
                        "team": "home",
                        "type": "yellow"
                    },
                    {
                        "minute": "63",
                        "player": "Ivan Moreno",
                        "team": "away",
                        "type": "yellow"
                    },
                    {
                        "minute": "90",
                        "player": "Santiago Londono",
                        "team": "away",
                        "type": "yellow"
                    },
                    {
                        "minute": "90",
                        "player": "Daniel Arcila",
                        "team": "away",
                        "type": "yellow"
                    }
                ]
            }
        ],
        "2026-09-24": [
            {
                "league": "MLS",
                "date": "2026-09-24",
                "time": "08:30",
                "home": "Seattle Sounders",
                "away": "Real Salt Lake",
                "stadium": "Lumen Field",
                "round": "Pekan 7",
                "statusCode": "FT",
                "minuteDisplay": "FT",
                "homeScore": 2,
                "awayScore": 0,
                "homeLogo": "https://media.api-sports.io/football/teams/1595.png",
                "awayLogo": "https://media.api-sports.io/football/teams/1606.png",
                "prediction": "2 - 1",
                "odds": {
                    "home": 45,
                    "draw": 45,
                    "away": 10
                },
                "advice": "Double chance : Seattle Sounders or draw",
                "comparison": {
                    "form": {
                        "home": 83,
                        "away": 17
                    },
                    "att": {
                        "home": 70,
                        "away": 30
                    },
                    "def": {
                        "home": 59,
                        "away": 41
                    },
                    "poisson": {
                        "home": 54,
                        "away": 46
                    },
                    "h2h": {
                        "home": 29,
                        "away": 71
                    },
                    "goals": {
                        "home": 30,
                        "away": 70
                    }
                },
                "goals": [
                    {
                        "minute": "48",
                        "player": "D. Musovski",
                        "team": "home"
                    },
                    {
                        "minute": "73",
                        "player": "A. Rusnak",
                        "team": "home"
                    }
                ],
                "cards": [
                    {
                        "minute": "10",
                        "player": "K. Kossa-Rienzi",
                        "team": "home",
                        "type": "yellow"
                    },
                    {
                        "minute": "41",
                        "player": "P. Arriola",
                        "team": "home",
                        "type": "yellow"
                    },
                    {
                        "minute": "52",
                        "player": "P. Kingston",
                        "team": "home",
                        "type": "yellow"
                    },
                    {
                        "minute": "55",
                        "player": "S. Brunell",
                        "team": "home",
                        "type": "yellow"
                    },
                    {
                        "minute": "57",
                        "player": "K. Henry",
                        "team": "away",
                        "type": "yellow"
                    },
                    {
                        "minute": "87",
                        "player": "D. Yedlin",
                        "team": "away",
                        "type": "yellow"
                    }
                ]
            }
        ],
        "2026-09-25": [
            {
                "league": "Liga de Expansion MX",
                "date": "2026-09-25",
                "time": "08:00",
                "home": "Mineros de Zacatecas",
                "away": "Piratas",
                "stadium": "Estadio Carlos Vega Villalba",
                "round": "Apertura - 10",
                "statusCode": "FT",
                "minuteDisplay": "FT",
                "homeScore": 3,
                "awayScore": 0,
                "homeLogo": "https://media.api-sports.io/football/teams/2299.png",
                "awayLogo": "https://media.api-sports.io/football/teams/27935.png",
                "prediction": "1 - 2",
                "odds": {
                    "home": 10,
                    "draw": 45,
                    "away": 45
                },
                "advice": "Double chance : draw or Piratas",
                "comparison": {
                    "form": {
                        "home": 43,
                        "away": 57
                    },
                    "att": {
                        "home": 38,
                        "away": 62
                    },
                    "def": {
                        "home": 38,
                        "away": 62
                    },
                    "poisson": {
                        "home": 52,
                        "away": 48
                    },
                    "h2h": {
                        "home": 0,
                        "away": 0
                    },
                    "goals": {
                        "home": 0,
                        "away": 0
                    }
                },
                "goals": [
                    {
                        "minute": "23",
                        "player": "U. Garcia",
                        "team": "away"
                    },
                    {
                        "minute": "28",
                        "player": "L. Sandoval",
                        "team": "home"
                    },
                    {
                        "minute": "49",
                        "player": "L. Sandoval",
                        "team": "home"
                    }
                ],
                "cards": [
                    {
                        "minute": "13",
                        "player": "O. Soto",
                        "team": "away",
                        "type": "yellow"
                    },
                    {
                        "minute": "44",
                        "player": "A. Garcia",
                        "team": "home",
                        "type": "yellow"
                    },
                    {
                        "minute": "45+2",
                        "player": "E. Carballo",
                        "team": "home",
                        "type": "red"
                    },
                    {
                        "minute": "45+6",
                        "player": "J. Avila",
                        "team": "home",
                        "type": "yellow"
                    },
                    {
                        "minute": "51",
                        "player": "O. Soto",
                        "team": "away",
                        "type": "yellow"
                    },
                    {
                        "minute": "51",
                        "player": "O. Soto",
                        "team": "away",
                        "type": "red"
                    },
                    {
                        "minute": "72",
                        "player": "D. Cruz",
                        "team": "away",
                        "type": "yellow"
                    },
                    {
                        "minute": "83",
                        "player": "U. Garcia",
                        "team": "away",
                        "type": "yellow"
                    },
                    {
                        "minute": "89",
                        "player": "D. Cruz",
                        "team": "away",
                        "type": "yellow"
                    },
                    {
                        "minute": "89",
                        "player": "D. Cruz",
                        "team": "away",
                        "type": "red"
                    },
                    {
                        "minute": "90+1",
                        "player": "J. Machado",
                        "team": "home",
                        "type": "yellow"
                    }
                ]
            },
            {
                "league": "Liga de Expansion MX",
                "date": "2026-09-25",
                "time": "08:00",
                "home": "Alebrijes de Oaxaca",
                "away": "CA La Paz",
                "stadium": "",
                "round": "Apertura - 10",
                "statusCode": "FT",
                "minuteDisplay": "FT",
                "homeScore": 1,
                "awayScore": 3,
                "homeLogo": "https://media.api-sports.io/football/teams/2300.png",
                "awayLogo": "https://media.api-sports.io/football/teams/19024.png",
                "prediction": "1 - 2",
                "odds": {
                    "home": 34,
                    "draw": 50,
                    "away": 50
                },
                "advice": "Double chance : draw or CA La Paz",
                "comparison": {
                    "form": {
                        "home": 27,
                        "away": 73
                    },
                    "att": {
                        "home": 27,
                        "away": 73
                    },
                    "def": {
                        "home": 33,
                        "away": 67
                    },
                    "poisson": {
                        "home": 29,
                        "away": 71
                    },
                    "h2h": {
                        "home": 15,
                        "away": 85
                    },
                    "goals": {
                        "home": 33,
                        "away": 67
                    }
                },
                "goals": [
                    {
                        "minute": "3",
                        "player": "A. Robles",
                        "team": "away"
                    },
                    {
                        "minute": "79",
                        "player": "U. Zurita Jimenez",
                        "team": "away"
                    },
                    {
                        "minute": "83",
                        "player": "B. Fadika",
                        "team": "home"
                    },
                    {
                        "minute": "84",
                        "player": "J. Ferrer",
                        "team": "away"
                    }
                ],
                "cards": [
                    {
                        "minute": "33",
                        "player": "A. Tecpanecatl",
                        "team": "home",
                        "type": "yellow"
                    },
                    {
                        "minute": "35",
                        "player": "U. Zurita Jimenez",
                        "team": "away",
                        "type": "yellow"
                    },
                    {
                        "minute": "37",
                        "player": "Andrey Marcos",
                        "team": "home",
                        "type": "yellow"
                    },
                    {
                        "minute": "44",
                        "player": "E. Torres",
                        "team": "away",
                        "type": "yellow"
                    },
                    {
                        "minute": "54",
                        "player": "K. Alvarez",
                        "team": "home",
                        "type": "yellow"
                    },
                    {
                        "minute": "90+6",
                        "player": "O. Millan",
                        "team": "away",
                        "type": "yellow"
                    }
                ]
            }
        ],
        "2026-09-26": [
            {
                "league": "Liga MX",
                "date": "2026-09-26",
                "time": "08:00",
                "home": "Atlante FC",
                "away": "Monterrey",
                "stadium": "Estadio Azul",
                "round": "Apertura - 10",
                "statusCode": "FT",
                "minuteDisplay": "FT",
                "homeScore": 4,
                "awayScore": 2,
                "homeLogo": "https://media.api-sports.io/football/teams/2312.png",
                "awayLogo": "https://media.api-sports.io/football/teams/2282.png",
                "prediction": "1 - 2",
                "odds": {
                    "home": 10,
                    "draw": 45,
                    "away": 45
                },
                "advice": "Double chance : draw or Monterrey",
                "comparison": {
                    "form": {
                        "home": 30,
                        "away": 70
                    },
                    "att": {
                        "home": 27,
                        "away": 73
                    },
                    "def": {
                        "home": 43,
                        "away": 57
                    },
                    "poisson": {
                        "home": 32,
                        "away": 68
                    },
                    "h2h": {
                        "home": 50,
                        "away": 50
                    },
                    "goals": {
                        "home": 50,
                        "away": 50
                    }
                },
                "goals": [
                    {
                        "minute": "11",
                        "player": "Luis Puente",
                        "team": "home"
                    },
                    {
                        "minute": "18",
                        "player": "Hugo Cuypers",
                        "team": "away"
                    },
                    {
                        "minute": "53",
                        "player": "Luis Calzadilla",
                        "team": "home"
                    },
                    {
                        "minute": "64",
                        "player": "Eduardo Tercero",
                        "team": "home"
                    },
                    {
                        "minute": "82",
                        "player": "Roberto de la Rosa",
                        "team": "away"
                    },
                    {
                        "minute": "90+6",
                        "player": "Jhojan Julio",
                        "team": "home"
                    }
                ],
                "cards": [
                    {
                        "minute": "16",
                        "player": "Juan Carrera",
                        "team": "home",
                        "type": "yellow"
                    },
                    {
                        "minute": "58",
                        "player": "Jesús Corona",
                        "team": "away",
                        "type": "yellow"
                    },
                    {
                        "minute": "90+3",
                        "player": "Óliver Torres",
                        "team": "away",
                        "type": "yellow"
                    },
                    {
                        "minute": "90+7",
                        "player": "Jhojan Julio",
                        "team": "home",
                        "type": "yellow"
                    }
                ]
            },
            {
                "league": "Liga de Expansion MX",
                "date": "2026-09-26",
                "time": "08:00",
                "home": "Correcaminos Uat",
                "away": "CDS Tampico Madero",
                "stadium": "",
                "round": "Apertura - 10",
                "statusCode": "FT",
                "minuteDisplay": "FT",
                "homeScore": 1,
                "awayScore": 0,
                "homeLogo": "https://media.api-sports.io/football/teams/2313.png",
                "awayLogo": "https://media.api-sports.io/football/teams/19905.png",
                "prediction": "2 - 3",
                "odds": {
                    "home": 10,
                    "draw": 45,
                    "away": 45
                },
                "advice": "Double chance : draw or CDS Tampico Madero",
                "comparison": {
                    "form": {
                        "home": 42,
                        "away": 58
                    },
                    "att": {
                        "home": 47,
                        "away": 53
                    },
                    "def": {
                        "home": 50,
                        "away": 50
                    },
                    "poisson": {
                        "home": 88,
                        "away": 12
                    },
                    "h2h": {
                        "home": 36,
                        "away": 64
                    },
                    "goals": {
                        "home": 40,
                        "away": 60
                    }
                },
                "goals": [
                    {
                        "minute": "55",
                        "player": "O. Islas",
                        "team": "home"
                    }
                ],
                "cards": [
                    {
                        "minute": "34",
                        "player": "O. Manzanarez",
                        "team": "away",
                        "type": "yellow"
                    },
                    {
                        "minute": "72",
                        "player": "N. Arriaga",
                        "team": "away",
                        "type": "yellow"
                    },
                    {
                        "minute": "72",
                        "player": "W. Ortega",
                        "team": "home",
                        "type": "yellow"
                    },
                    {
                        "minute": "75",
                        "player": "O. Manzanarez",
                        "team": "away",
                        "type": "yellow"
                    },
                    {
                        "minute": "75",
                        "player": "O. Manzanarez",
                        "team": "away",
                        "type": "red"
                    },
                    {
                        "minute": "84",
                        "player": "I. Ramirez",
                        "team": "away",
                        "type": "yellow"
                    },
                    {
                        "minute": "88",
                        "player": "R. Gonzalez",
                        "team": "away",
                        "type": "yellow"
                    },
                    {
                        "minute": "90+2",
                        "player": "E. Escalante",
                        "team": "away",
                        "type": "yellow"
                    }
                ]
            },
            {
                "league": "Liga MX",
                "date": "2026-09-26",
                "time": "10:00",
                "home": "Club Tijuana",
                "away": "Atlas",
                "stadium": "Estadio Caliente ",
                "round": "Apertura - 10",
                "statusCode": "FT",
                "minuteDisplay": "FT",
                "homeScore": 2,
                "awayScore": 3,
                "homeLogo": "https://media.api-sports.io/football/teams/2280.png",
                "awayLogo": "https://media.api-sports.io/football/teams/2283.png",
                "prediction": "3 - 2",
                "odds": {
                    "home": 45,
                    "draw": 45,
                    "away": 10
                },
                "advice": "Double chance : Club Tijuana or draw",
                "comparison": {
                    "form": {
                        "home": 58,
                        "away": 42
                    },
                    "att": {
                        "home": 53,
                        "away": 47
                    },
                    "def": {
                        "home": 53,
                        "away": 47
                    },
                    "poisson": {
                        "home": 67,
                        "away": 33
                    },
                    "h2h": {
                        "home": 50,
                        "away": 50
                    },
                    "goals": {
                        "home": 60,
                        "away": 40
                    }
                },
                "goals": [
                    {
                        "minute": "15",
                        "player": "Ryan Mmaee",
                        "team": "away"
                    },
                    {
                        "minute": "21",
                        "player": "Mourad El Ghezouani",
                        "team": "home"
                    },
                    {
                        "minute": "37",
                        "player": "José Rivero",
                        "team": "home"
                    },
                    {
                        "minute": "87",
                        "player": "Luís André Leite Esteves",
                        "team": "away"
                    },
                    {
                        "minute": "90+1",
                        "player": "Florián Monzón",
                        "team": "away"
                    }
                ],
                "cards": [
                    {
                        "minute": "54",
                        "player": "Juan Sánchez",
                        "team": "away",
                        "type": "yellow"
                    },
                    {
                        "minute": "71",
                        "player": "Ramiro Árciga",
                        "team": "home",
                        "type": "yellow"
                    },
                    {
                        "minute": "79",
                        "player": "Sergio Hernández",
                        "team": "away",
                        "type": "yellow"
                    },
                    {
                        "minute": "83",
                        "player": "Yael Padilla",
                        "team": "home",
                        "type": "yellow"
                    }
                ]
            }
        ],
        "2026-09-27": [
            {
                "league": "Liga de Expansion MX",
                "date": "2026-09-27",
                "time": "01:00",
                "home": "Cruz Azul Hidalgo",
                "away": "Leones Negros UDG",
                "stadium": "Estadio 10 de Diciembre",
                "round": "Apertura - 10",
                "statusCode": "FT",
                "minuteDisplay": "FT",
                "homeScore": 1,
                "awayScore": 2,
                "homeLogo": "https://media.api-sports.io/football/teams/15928.png",
                "awayLogo": "https://media.api-sports.io/football/teams/2307.png",
                "prediction": "2 - 3",
                "odds": {
                    "home": 10,
                    "draw": 45,
                    "away": 45
                },
                "advice": "Double chance : draw or Leones Negros UDG",
                "comparison": {
                    "form": {
                        "home": 38,
                        "away": 62
                    },
                    "att": {
                        "home": 50,
                        "away": 50
                    },
                    "def": {
                        "home": 41,
                        "away": 59
                    },
                    "poisson": {
                        "home": 44,
                        "away": 56
                    },
                    "h2h": {
                        "home": 0,
                        "away": 0
                    },
                    "goals": {
                        "home": 0,
                        "away": 0
                    }
                },
                "goals": [
                    {
                        "minute": "23",
                        "player": "I. Ramirez",
                        "team": "home"
                    },
                    {
                        "minute": "56",
                        "player": "L. Razo",
                        "team": "away"
                    },
                    {
                        "minute": "90+2",
                        "player": "L. Razo",
                        "team": "away"
                    }
                ],
                "cards": [
                    {
                        "minute": "34",
                        "player": "O. Gil",
                        "team": "away",
                        "type": "yellow"
                    },
                    {
                        "minute": "37",
                        "player": "R. Rubio",
                        "team": "home",
                        "type": "yellow"
                    },
                    {
                        "minute": "46",
                        "player": "I. Ramirez",
                        "team": "home",
                        "type": "yellow"
                    },
                    {
                        "minute": "78",
                        "player": "S. De Los Rios",
                        "team": "home",
                        "type": "yellow"
                    },
                    {
                        "minute": "86",
                        "player": "J. Escalante",
                        "team": "away",
                        "type": "yellow"
                    }
                ]
            },
            {
                "league": "Liga de Expansion MX",
                "date": "2026-09-27",
                "time": "05:00",
                "home": "Tlaxcala",
                "away": "Cancún",
                "stadium": "Estadio Tlahuicole",
                "round": "Apertura - 10",
                "statusCode": "FT",
                "minuteDisplay": "FT",
                "homeScore": 4,
                "awayScore": 1,
                "homeLogo": "https://media.api-sports.io/football/teams/14280.png",
                "awayLogo": "https://media.api-sports.io/football/teams/14276.png",
                "prediction": "1 - 2",
                "odds": {
                    "home": 10,
                    "draw": 45,
                    "away": 45
                },
                "advice": "Double chance : draw or Cancún",
                "comparison": {
                    "form": {
                        "home": 47,
                        "away": 53
                    },
                    "att": {
                        "home": 41,
                        "away": 59
                    },
                    "def": {
                        "home": 33,
                        "away": 67
                    },
                    "poisson": {
                        "home": 47,
                        "away": 53
                    },
                    "h2h": {
                        "home": 50,
                        "away": 50
                    },
                    "goals": {
                        "home": 36,
                        "away": 64
                    }
                },
                "goals": [
                    {
                        "minute": "23",
                        "player": "C. Trejo",
                        "team": "away"
                    },
                    {
                        "minute": "33",
                        "player": "D. Alvarez",
                        "team": "home"
                    },
                    {
                        "minute": "68",
                        "player": "E. Robles",
                        "team": "home"
                    },
                    {
                        "minute": "87",
                        "player": "M. Ramirez",
                        "team": "home"
                    },
                    {
                        "minute": "90+8",
                        "player": "E. Robles",
                        "team": "home"
                    }
                ],
                "cards": [
                    {
                        "minute": "16",
                        "player": "L. Ruiz",
                        "team": "away",
                        "type": "yellow"
                    },
                    {
                        "minute": "19",
                        "player": "E. Santos",
                        "team": "home",
                        "type": "yellow"
                    },
                    {
                        "minute": "38",
                        "player": "C. Trejo",
                        "team": "away",
                        "type": "yellow"
                    },
                    {
                        "minute": "58",
                        "player": "E. Robles",
                        "team": "home",
                        "type": "yellow"
                    },
                    {
                        "minute": "81",
                        "player": "E. Garcia",
                        "team": "home",
                        "type": "red"
                    },
                    {
                        "minute": "85",
                        "player": "R. Reyes",
                        "team": "away",
                        "type": "yellow"
                    }
                ]
            },
            {
                "league": "Liga MX",
                "date": "2026-09-27",
                "time": "05:50",
                "home": "Cruz Azul",
                "away": "Toluca",
                "stadium": "Estadio Banorte",
                "round": "Apertura - 10",
                "statusCode": "FT",
                "minuteDisplay": "FT",
                "homeScore": 3,
                "awayScore": 3,
                "homeLogo": "https://media.api-sports.io/football/teams/2295.png",
                "awayLogo": "https://media.api-sports.io/football/teams/2281.png",
                "prediction": "1 - 2",
                "odds": {
                    "home": 35,
                    "draw": 35,
                    "away": 30
                },
                "advice": "Double chance : Cruz Azul or draw",
                "comparison": {
                    "form": {
                        "home": 43,
                        "away": 57
                    },
                    "att": {
                        "home": 36,
                        "away": 64
                    },
                    "def": {
                        "home": 46,
                        "away": 54
                    },
                    "poisson": {
                        "home": 15,
                        "away": 85
                    },
                    "h2h": {
                        "home": 75,
                        "away": 25
                    },
                    "goals": {
                        "home": 62,
                        "away": 38
                    }
                },
                "goals": [
                    {
                        "minute": "7",
                        "player": "Nicolás Ibañez",
                        "team": "home"
                    },
                    {
                        "minute": "38",
                        "player": "Gabriel Fernández",
                        "team": "home"
                    },
                    {
                        "minute": "55",
                        "player": "Hélio Júnio Nunes de Castro",
                        "team": "away"
                    },
                    {
                        "minute": "56",
                        "player": "Alexis Vega",
                        "team": "away"
                    },
                    {
                        "minute": "78",
                        "player": "Alexis Vega",
                        "team": "away"
                    },
                    {
                        "minute": "90+5",
                        "player": "Gabriel Fernández",
                        "team": "home"
                    }
                ],
                "cards": [
                    {
                        "minute": "37",
                        "player": "Diego Barbosa",
                        "team": "away",
                        "type": "yellow"
                    },
                    {
                        "minute": "45+2",
                        "player": "Agustín Palavecino",
                        "team": "home",
                        "type": "yellow"
                    },
                    {
                        "minute": "45+2",
                        "player": "Antonio Ricardo Mohamed Matijevich",
                        "team": "away",
                        "type": "yellow"
                    },
                    {
                        "minute": "52",
                        "player": "Willer Ditta",
                        "team": "home",
                        "type": "yellow"
                    },
                    {
                        "minute": "57",
                        "player": "Gonzalo Piovi",
                        "team": "home",
                        "type": "yellow"
                    },
                    {
                        "minute": "90+9",
                        "player": "Andrés Montaño",
                        "team": "home",
                        "type": "yellow"
                    }
                ]
            },
            {
                "league": "Liga de Expansion MX",
                "date": "2026-09-27",
                "time": "06:00",
                "home": "Venados FC",
                "away": "Monarcas",
                "stadium": "Estadio Carlos Iturralde Rivero",
                "round": "Apertura - 10",
                "statusCode": "FT",
                "minuteDisplay": "FT",
                "homeScore": 2,
                "awayScore": 1,
                "homeLogo": "https://media.api-sports.io/football/teams/2311.png",
                "awayLogo": "https://media.api-sports.io/football/teams/2284.png",
                "prediction": "2 - 3",
                "odds": {
                    "home": 10,
                    "draw": 45,
                    "away": 45
                },
                "advice": "Double chance : draw or Monarcas",
                "comparison": {
                    "form": {
                        "home": 33,
                        "away": 67
                    },
                    "att": {
                        "home": 61,
                        "away": 39
                    },
                    "def": {
                        "home": 27,
                        "away": 73
                    },
                    "poisson": {
                        "home": 54,
                        "away": 46
                    },
                    "h2h": {
                        "home": 50,
                        "away": 50
                    },
                    "goals": {
                        "home": 50,
                        "away": 50
                    }
                },
                "goals": [
                    {
                        "minute": "45",
                        "player": "S. Lora",
                        "team": "home"
                    },
                    {
                        "minute": "60",
                        "player": "A. Flores",
                        "team": "away"
                    },
                    {
                        "minute": "64",
                        "player": "S. Lora",
                        "team": "home"
                    }
                ],
                "cards": [
                    {
                        "minute": "35",
                        "player": "I. Dominguez",
                        "team": "home",
                        "type": "yellow"
                    },
                    {
                        "minute": "57",
                        "player": "D. Aguilar",
                        "team": "away",
                        "type": "yellow"
                    },
                    {
                        "minute": "59",
                        "player": "S. Naveda",
                        "team": "home",
                        "type": "yellow"
                    },
                    {
                        "minute": "83",
                        "player": "J. Van Rankin",
                        "team": "away",
                        "type": "yellow"
                    },
                    {
                        "minute": "89",
                        "player": "L. Arroyo",
                        "team": "home",
                        "type": "yellow"
                    },
                    {
                        "minute": "90",
                        "player": "S. Perez",
                        "team": "home",
                        "type": "yellow"
                    },
                    {
                        "minute": "90+5",
                        "player": "Ochoa Brandon",
                        "team": "home",
                        "type": "yellow"
                    }
                ]
            },
            {
                "league": "Liga MX",
                "date": "2026-09-27",
                "time": "06:07",
                "home": "Guadalajara Chivas",
                "away": "Club Queretaro",
                "stadium": "Estadio Akron",
                "round": "Apertura - 10",
                "statusCode": "FT",
                "minuteDisplay": "FT",
                "homeScore": 0,
                "awayScore": 2,
                "homeLogo": "https://media.api-sports.io/football/teams/2278.png",
                "awayLogo": "https://media.api-sports.io/football/teams/2290.png",
                "prediction": "2 - 1",
                "odds": {
                    "home": 45,
                    "draw": 45,
                    "away": 10
                },
                "advice": "Double chance : Guadalajara Chivas or draw",
                "comparison": {
                    "form": {
                        "home": 58,
                        "away": 42
                    },
                    "att": {
                        "home": 70,
                        "away": 30
                    },
                    "def": {
                        "home": 44,
                        "away": 56
                    },
                    "poisson": {
                        "home": 40,
                        "away": 60
                    },
                    "h2h": {
                        "home": 71,
                        "away": 29
                    },
                    "goals": {
                        "home": 70,
                        "away": 30
                    }
                },
                "goals": [
                    {
                        "minute": "12",
                        "player": "Ali Ávila",
                        "team": "away"
                    },
                    {
                        "minute": "68",
                        "player": "Mateo Coronel",
                        "team": "away"
                    }
                ],
                "cards": [
                    {
                        "minute": "41",
                        "player": "Bayron Duarte",
                        "team": "away",
                        "type": "yellow"
                    },
                    {
                        "minute": "87",
                        "player": "Lucas Abascia",
                        "team": "away",
                        "type": "yellow"
                    },
                    {
                        "minute": "90",
                        "player": "Omar Govea",
                        "team": "home",
                        "type": "red"
                    }
                ]
            },
            {
                "league": "MLS",
                "date": "2026-09-27",
                "time": "06:30",
                "home": "Philadelphia Union",
                "away": "Orlando City SC",
                "stadium": "Talen Energy Stadium",
                "round": "Pekan 27",
                "statusCode": "FT",
                "minuteDisplay": "FT",
                "homeScore": 4,
                "awayScore": 2,
                "homeLogo": "https://media.api-sports.io/football/teams/1599.png",
                "awayLogo": "https://media.api-sports.io/football/teams/1598.png",
                "prediction": "3 - 2",
                "odds": {
                    "home": 45,
                    "draw": 45,
                    "away": 10
                },
                "advice": "Combo Winner : Philadelphia Union and +1.5 goals",
                "comparison": {
                    "form": {
                        "home": 60,
                        "away": 40
                    },
                    "att": {
                        "home": 61,
                        "away": 39
                    },
                    "def": {
                        "home": 69,
                        "away": 31
                    },
                    "poisson": {
                        "home": 71,
                        "away": 29
                    },
                    "h2h": {
                        "home": 29,
                        "away": 71
                    },
                    "goals": {
                        "home": 48,
                        "away": 52
                    }
                },
                "goals": [
                    {
                        "minute": "11",
                        "player": "Milan Iloski",
                        "team": "home"
                    },
                    {
                        "minute": "19",
                        "player": "Milan Iloski",
                        "team": "home"
                    },
                    {
                        "minute": "47",
                        "player": "Indiana Vassilev",
                        "team": "home"
                    },
                    {
                        "minute": "51",
                        "player": "Milan Iloski",
                        "team": "home"
                    },
                    {
                        "minute": "78",
                        "player": "Iván Angulo",
                        "team": "away"
                    },
                    {
                        "minute": "90",
                        "player": "Martin Ojeda",
                        "team": "away"
                    }
                ],
                "cards": [
                    {
                        "minute": "12",
                        "player": "Eduard Atuesta",
                        "team": "away",
                        "type": "yellow"
                    },
                    {
                        "minute": "37",
                        "player": "Iago Teodoro",
                        "team": "away",
                        "type": "yellow"
                    },
                    {
                        "minute": "43",
                        "player": "Joran Gerbet",
                        "team": "away",
                        "type": "yellow"
                    },
                    {
                        "minute": "62",
                        "player": "Quinn Sullivan",
                        "team": "home",
                        "type": "yellow"
                    },
                    {
                        "minute": "77",
                        "player": "Japhet Sery Larsen",
                        "team": "home",
                        "type": "yellow"
                    },
                    {
                        "minute": "84",
                        "player": "Iván Angulo",
                        "team": "away",
                        "type": "yellow"
                    }
                ]
            },
            {
                "league": "MLS",
                "date": "2026-09-27",
                "time": "06:30",
                "home": "Atlanta United FC",
                "away": "New York City FC",
                "stadium": "Atlanta Stadium",
                "round": "Pekan 27",
                "statusCode": "FT",
                "minuteDisplay": "FT",
                "homeScore": 2,
                "awayScore": 2,
                "homeLogo": "https://media.api-sports.io/football/teams/1608.png",
                "awayLogo": "https://media.api-sports.io/football/teams/1604.png",
                "prediction": "1 - 2",
                "odds": {
                    "home": 10,
                    "draw": 45,
                    "away": 45
                },
                "advice": "Double chance : draw or New York City FC",
                "comparison": {
                    "form": {
                        "home": 50,
                        "away": 50
                    },
                    "att": {
                        "home": 56,
                        "away": 44
                    },
                    "def": {
                        "home": 36,
                        "away": 64
                    },
                    "poisson": {
                        "home": 38,
                        "away": 62
                    },
                    "h2h": {
                        "home": 50,
                        "away": 50
                    },
                    "goals": {
                        "home": 43,
                        "away": 57
                    }
                },
                "goals": [
                    {
                        "minute": "5",
                        "player": "Matthew Edwards",
                        "team": "home"
                    },
                    {
                        "minute": "10",
                        "player": "Giuliano Galoppo",
                        "team": "home"
                    },
                    {
                        "minute": "56",
                        "player": "Andrés Perea",
                        "team": "away"
                    },
                    {
                        "minute": "74",
                        "player": "Ajani Fortune",
                        "team": "home"
                    }
                ],
                "cards": [
                    {
                        "minute": "43",
                        "player": "Luke Brennan",
                        "team": "home",
                        "type": "yellow"
                    },
                    {
                        "minute": "68",
                        "player": "Gerardo Daniel Martino",
                        "team": "home",
                        "type": "yellow"
                    },
                    {
                        "minute": "90+5",
                        "player": "Raul Bicalho",
                        "team": "away",
                        "type": "yellow"
                    }
                ]
            },
            {
                "league": "MLS",
                "date": "2026-09-27",
                "time": "06:30",
                "home": "CF Montreal",
                "away": "FC Cincinnati",
                "stadium": "Saputo Stadium",
                "round": "Pekan 27",
                "statusCode": "FT",
                "minuteDisplay": "FT",
                "homeScore": 3,
                "awayScore": 1,
                "homeLogo": "https://media.api-sports.io/football/teams/1614.png",
                "awayLogo": "https://media.api-sports.io/football/teams/2242.png",
                "prediction": "2 - 3",
                "odds": {
                    "home": 10,
                    "draw": 45,
                    "away": 45
                },
                "advice": "Double chance : draw or FC Cincinnati",
                "comparison": {
                    "form": {
                        "home": 0,
                        "away": 100
                    },
                    "att": {
                        "home": 25,
                        "away": 75
                    },
                    "def": {
                        "home": 52,
                        "away": 48
                    },
                    "poisson": {
                        "home": 57,
                        "away": 43
                    },
                    "h2h": {
                        "home": 0,
                        "away": 100
                    },
                    "goals": {
                        "home": 25,
                        "away": 75
                    }
                },
                "goals": [
                    {
                        "minute": "25",
                        "player": "Daniel Rios",
                        "team": "home"
                    },
                    {
                        "minute": "64",
                        "player": "Tom Barlow",
                        "team": "away"
                    },
                    {
                        "minute": "72",
                        "player": "Prince-Osei Owusu",
                        "team": "home"
                    },
                    {
                        "minute": "75",
                        "player": "Prince-Osei Owusu",
                        "team": "home"
                    }
                ],
                "cards": [
                    {
                        "minute": "33",
                        "player": "Matthew Longstaff",
                        "team": "home",
                        "type": "yellow"
                    },
                    {
                        "minute": "47",
                        "player": "Fabian Herbers",
                        "team": "home",
                        "type": "yellow"
                    },
                    {
                        "minute": "71",
                        "player": "Roman Celentano",
                        "team": "away",
                        "type": "yellow"
                    },
                    {
                        "minute": "86",
                        "player": "Teenage Hadebe",
                        "team": "away",
                        "type": "yellow"
                    }
                ]
            },
            {
                "league": "MLS",
                "date": "2026-09-27",
                "time": "06:30",
                "home": "Charlotte",
                "away": "Chicago Fire",
                "stadium": "Bank of America Stadium",
                "round": "Pekan 27",
                "statusCode": "FT",
                "minuteDisplay": "FT",
                "homeScore": 0,
                "awayScore": 1,
                "homeLogo": "https://media.api-sports.io/football/teams/18310.png",
                "awayLogo": "https://media.api-sports.io/football/teams/1607.png",
                "prediction": "2 - 1",
                "odds": {
                    "home": 45,
                    "draw": 45,
                    "away": 10
                },
                "advice": "Double chance : Charlotte or draw",
                "comparison": {
                    "form": {
                        "home": 79,
                        "away": 21
                    },
                    "att": {
                        "home": 53,
                        "away": 47
                    },
                    "def": {
                        "home": 71,
                        "away": 29
                    },
                    "poisson": {
                        "home": 61,
                        "away": 39
                    },
                    "h2h": {
                        "home": 40,
                        "away": 60
                    },
                    "goals": {
                        "home": 43,
                        "away": 57
                    }
                },
                "goals": [
                    {
                        "minute": "58",
                        "player": "Johan Arath Gomez",
                        "team": "away"
                    }
                ],
                "cards": [
                    {
                        "minute": "23",
                        "player": "Sergio Oregel",
                        "team": "away",
                        "type": "yellow"
                    },
                    {
                        "minute": "34",
                        "player": "Djibril Diani",
                        "team": "home",
                        "type": "yellow"
                    },
                    {
                        "minute": "38",
                        "player": "Allan Saint-Maximin",
                        "team": "home",
                        "type": "yellow"
                    },
                    {
                        "minute": "74",
                        "player": "Pep Biel",
                        "team": "home",
                        "type": "yellow"
                    },
                    {
                        "minute": "81",
                        "player": "David Poreba",
                        "team": "away",
                        "type": "yellow"
                    },
                    {
                        "minute": "82",
                        "player": "Ashley Westwood",
                        "team": "home",
                        "type": "yellow"
                    },
                    {
                        "minute": "90+8",
                        "player": "Tim Ream",
                        "team": "home",
                        "type": "yellow"
                    },
                    {
                        "minute": "90+8",
                        "player": "Tim Ream",
                        "team": "home",
                        "type": "red"
                    }
                ]
            },
            {
                "league": "MLS",
                "date": "2026-09-27",
                "time": "07:30",
                "home": "Seattle Sounders",
                "away": "Minnesota United FC",
                "stadium": "Lumen Field",
                "round": "Pekan 27",
                "statusCode": "FT",
                "minuteDisplay": "FT",
                "homeScore": 3,
                "awayScore": 1,
                "homeLogo": "https://media.api-sports.io/football/teams/1595.png",
                "awayLogo": "https://media.api-sports.io/football/teams/1612.png",
                "prediction": "3 - 2",
                "odds": {
                    "home": 35,
                    "draw": 35,
                    "away": 30
                },
                "advice": "Combo Double chance : Seattle Sounders or draw and +1.5 goals",
                "comparison": {
                    "form": {
                        "home": 88,
                        "away": 13
                    },
                    "att": {
                        "home": 40,
                        "away": 60
                    },
                    "def": {
                        "home": 74,
                        "away": 26
                    },
                    "poisson": {
                        "home": 48,
                        "away": 52
                    },
                    "h2h": {
                        "home": 29,
                        "away": 71
                    },
                    "goals": {
                        "home": 47,
                        "away": 53
                    }
                },
                "goals": [
                    {
                        "minute": "16",
                        "player": "Jordan Morris",
                        "team": "home"
                    },
                    {
                        "minute": "35",
                        "player": "Hassani Dotson",
                        "team": "home"
                    },
                    {
                        "minute": "57",
                        "player": "Anthony Markanich",
                        "team": "away"
                    },
                    {
                        "minute": "83",
                        "player": "Paul Arriola",
                        "team": "home"
                    }
                ],
                "cards": [
                    {
                        "minute": "28",
                        "player": "Jefferson Abel Díaz Beleño",
                        "team": "away",
                        "type": "yellow"
                    },
                    {
                        "minute": "58",
                        "player": "Owen Gene",
                        "team": "away",
                        "type": "yellow"
                    },
                    {
                        "minute": "71",
                        "player": "Hassani Dotson",
                        "team": "home",
                        "type": "yellow"
                    },
                    {
                        "minute": "86",
                        "player": "stuar hawkins",
                        "team": "home",
                        "type": "yellow"
                    }
                ]
            },
            {
                "league": "MLS",
                "date": "2026-09-27",
                "time": "07:30",
                "home": "FC Dallas",
                "away": "Los Angeles FC",
                "stadium": "Toyota Stadium(Texas)",
                "round": "Pekan 27",
                "statusCode": "FT",
                "minuteDisplay": "FT",
                "homeScore": 1,
                "awayScore": 0,
                "homeLogo": "https://media.api-sports.io/football/teams/1597.png",
                "awayLogo": "https://media.api-sports.io/football/teams/1616.png",
                "prediction": "2 - 2",
                "odds": {
                    "home": 35,
                    "draw": 35,
                    "away": 30
                },
                "advice": "Double chance : FC Dallas or draw",
                "comparison": {
                    "form": {
                        "home": 65,
                        "away": 35
                    },
                    "att": {
                        "home": 61,
                        "away": 39
                    },
                    "def": {
                        "home": 47,
                        "away": 53
                    },
                    "poisson": {
                        "home": 48,
                        "away": 52
                    },
                    "h2h": {
                        "home": 29,
                        "away": 71
                    },
                    "goals": {
                        "home": 40,
                        "away": 60
                    }
                },
                "goals": [
                    {
                        "minute": "34",
                        "player": "Osaze Urhoghide",
                        "team": "home"
                    }
                ],
                "cards": [
                    {
                        "minute": "23",
                        "player": "Armindo Sieb",
                        "team": "away",
                        "type": "yellow"
                    },
                    {
                        "minute": "44",
                        "player": "Ryan Porteous",
                        "team": "away",
                        "type": "yellow"
                    },
                    {
                        "minute": "71",
                        "player": "Herman Johansson",
                        "team": "home",
                        "type": "yellow"
                    },
                    {
                        "minute": "84",
                        "player": "Marky Delgado",
                        "team": "away",
                        "type": "yellow"
                    },
                    {
                        "minute": "90+2",
                        "player": "nolan norris",
                        "team": "home",
                        "type": "yellow"
                    },
                    {
                        "minute": "90+3",
                        "player": "Ryan Raposo",
                        "team": "away",
                        "type": "yellow"
                    }
                ]
            },
            {
                "league": "MLS",
                "date": "2026-09-27",
                "time": "07:30",
                "home": "Houston Dynamo",
                "away": "Sporting Kansas City",
                "stadium": "BBVA Compass Stadium",
                "round": "Pekan 27",
                "statusCode": "FT",
                "minuteDisplay": "FT",
                "homeScore": 0,
                "awayScore": 2,
                "homeLogo": "https://media.api-sports.io/football/teams/1600.png",
                "awayLogo": "https://media.api-sports.io/football/teams/1611.png",
                "prediction": "2 - 1",
                "odds": {
                    "home": 45,
                    "draw": 45,
                    "away": 10
                },
                "advice": "Double chance : Houston Dynamo or draw",
                "comparison": {
                    "form": {
                        "home": 67,
                        "away": 33
                    },
                    "att": {
                        "home": 29,
                        "away": 71
                    },
                    "def": {
                        "home": 78,
                        "away": 22
                    },
                    "poisson": {
                        "home": 81,
                        "away": 19
                    },
                    "h2h": {
                        "home": 62,
                        "away": 38
                    },
                    "goals": {
                        "home": 55,
                        "away": 45
                    }
                },
                "goals": [
                    {
                        "minute": "27",
                        "player": "André Luiz",
                        "team": "away"
                    },
                    {
                        "minute": "45",
                        "player": "Calvin Harris",
                        "team": "away"
                    }
                ],
                "cards": [
                    {
                        "minute": "1",
                        "player": "Justin Reynolds",
                        "team": "away",
                        "type": "yellow"
                    },
                    {
                        "minute": "45+3",
                        "player": "Héctor Herrera",
                        "team": "home",
                        "type": "red"
                    },
                    {
                        "minute": "45+4",
                        "player": "Taylor Calheira",
                        "team": "away",
                        "type": "yellow"
                    },
                    {
                        "minute": "45+6",
                        "player": "André Luiz",
                        "team": "away",
                        "type": "yellow"
                    },
                    {
                        "minute": "54",
                        "player": "Antônio Carlos",
                        "team": "home",
                        "type": "yellow"
                    },
                    {
                        "minute": "68",
                        "player": "Stephen Afrifa",
                        "team": "away",
                        "type": "yellow"
                    }
                ]
            },
            {
                "league": "MLS",
                "date": "2026-09-27",
                "time": "07:30",
                "home": "Nashville SC",
                "away": "Toronto FC",
                "stadium": "Geodis Park",
                "round": "Pekan 27",
                "statusCode": "FT",
                "minuteDisplay": "FT",
                "homeScore": 2,
                "awayScore": 0,
                "homeLogo": "https://media.api-sports.io/football/teams/9569.png",
                "awayLogo": "https://media.api-sports.io/football/teams/1601.png",
                "prediction": "2 - 1",
                "odds": {
                    "home": 45,
                    "draw": 45,
                    "away": 10
                },
                "advice": "Double chance : Nashville SC or draw",
                "comparison": {
                    "form": {
                        "home": 62,
                        "away": 38
                    },
                    "att": {
                        "home": 56,
                        "away": 44
                    },
                    "def": {
                        "home": 75,
                        "away": 25
                    },
                    "poisson": {
                        "home": 84,
                        "away": 16
                    },
                    "h2h": {
                        "home": 80,
                        "away": 20
                    },
                    "goals": {
                        "home": 67,
                        "away": 33
                    }
                },
                "goals": [
                    {
                        "minute": "16",
                        "player": "Hany Mukhtar",
                        "team": "home"
                    },
                    {
                        "minute": "43",
                        "player": "Hany Mukhtar",
                        "team": "home"
                    }
                ],
                "cards": [
                    {
                        "minute": "81",
                        "player": "Sam Surridge",
                        "team": "home",
                        "type": "yellow"
                    }
                ]
            },
            {
                "league": "MLS",
                "date": "2026-09-27",
                "time": "07:30",
                "home": "Austin",
                "away": "San Diego",
                "stadium": "Q2 Stadium",
                "round": "Pekan 27",
                "statusCode": "FT",
                "minuteDisplay": "FT",
                "homeScore": 3,
                "awayScore": 3,
                "homeLogo": "https://media.api-sports.io/football/teams/16489.png",
                "awayLogo": "https://media.api-sports.io/football/teams/25484.png",
                "prediction": "2 - 1",
                "odds": {
                    "home": 45,
                    "draw": 45,
                    "away": 10
                },
                "advice": "Double chance : Austin or draw",
                "comparison": {
                    "form": {
                        "home": 69,
                        "away": 31
                    },
                    "att": {
                        "home": 46,
                        "away": 54
                    },
                    "def": {
                        "home": 75,
                        "away": 25
                    },
                    "poisson": {
                        "home": 63,
                        "away": 37
                    },
                    "h2h": {
                        "home": 33,
                        "away": 67
                    },
                    "goals": {
                        "home": 20,
                        "away": 80
                    }
                },
                "goals": [
                    {
                        "minute": "50",
                        "player": "Aníbal Godoy",
                        "team": "away"
                    },
                    {
                        "minute": "57",
                        "player": "Mikkel Desler",
                        "team": "home"
                    },
                    {
                        "minute": "64",
                        "player": "Marcus  Ingvartsen",
                        "team": "away"
                    },
                    {
                        "minute": "73",
                        "player": "Brandon Vazquez",
                        "team": "home"
                    },
                    {
                        "minute": "82",
                        "player": "Christian Ramirez",
                        "team": "home"
                    },
                    {
                        "minute": "86",
                        "player": "Christian Ramirez",
                        "team": "home"
                    }
                ],
                "cards": [
                    {
                        "minute": "87",
                        "player": "Christian Ramirez",
                        "team": "home",
                        "type": "yellow"
                    }
                ]
            },
            {
                "league": "Liga de Expansion MX",
                "date": "2026-09-27",
                "time": "08:00",
                "home": "Dorados",
                "away": "Durango",
                "stadium": "Estadio El Encanto",
                "round": "Apertura - 10",
                "statusCode": "FT",
                "minuteDisplay": "FT",
                "homeScore": 0,
                "awayScore": 1,
                "homeLogo": "https://media.api-sports.io/football/teams/2297.png",
                "awayLogo": "https://media.api-sports.io/football/teams/15941.png",
                "prediction": "1 - 1",
                "odds": {
                    "home": 35,
                    "draw": 35,
                    "away": 30
                },
                "advice": "Combo Double chance : Dorados or draw and -3.5 goals",
                "comparison": {
                    "form": {
                        "home": 62,
                        "away": 38
                    },
                    "att": {
                        "home": 69,
                        "away": 31
                    },
                    "def": {
                        "home": 44,
                        "away": 56
                    },
                    "poisson": {
                        "home": 52,
                        "away": 48
                    },
                    "h2h": {
                        "home": 13,
                        "away": 88
                    },
                    "goals": {
                        "home": 27,
                        "away": 73
                    }
                },
                "goals": [
                    {
                        "minute": "63",
                        "player": "J. I. Reyes Olguin",
                        "team": "away"
                    }
                ],
                "cards": [
                    {
                        "minute": "44",
                        "player": "O. Coronel",
                        "team": "home",
                        "type": "yellow"
                    },
                    {
                        "minute": "50",
                        "player": "D. Guajardo",
                        "team": "home",
                        "type": "yellow"
                    },
                    {
                        "minute": "57",
                        "player": "L. Gutierrez",
                        "team": "away",
                        "type": "yellow"
                    },
                    {
                        "minute": "62",
                        "player": "A. Garcia",
                        "team": "away",
                        "type": "yellow"
                    },
                    {
                        "minute": "64",
                        "player": "J. I. Reyes Olguin",
                        "team": "away",
                        "type": "yellow"
                    },
                    {
                        "minute": "65",
                        "player": "S. Flores",
                        "team": "away",
                        "type": "yellow"
                    },
                    {
                        "minute": "68",
                        "player": "H. Real",
                        "team": "away",
                        "type": "yellow"
                    },
                    {
                        "minute": "76",
                        "player": "C. Castro",
                        "team": "home",
                        "type": "yellow"
                    },
                    {
                        "minute": "82",
                        "player": "B. Ordorica",
                        "team": "home",
                        "type": "yellow"
                    }
                ]
            },
            {
                "league": "MLS",
                "date": "2026-09-27",
                "time": "08:30",
                "home": "Real Salt Lake",
                "away": "New England Revolution",
                "stadium": "Rio Tinto Stadium",
                "round": "Pekan 27",
                "statusCode": "FT",
                "minuteDisplay": "FT",
                "homeScore": 3,
                "awayScore": 0,
                "homeLogo": "https://media.api-sports.io/football/teams/1606.png",
                "awayLogo": "https://media.api-sports.io/football/teams/1609.png",
                "prediction": "1 - 2",
                "odds": {
                    "home": 10,
                    "draw": 45,
                    "away": 45
                },
                "advice": "Double chance : draw or New England Revolution",
                "comparison": {
                    "form": {
                        "home": 8,
                        "away": 92
                    },
                    "att": {
                        "home": 20,
                        "away": 80
                    },
                    "def": {
                        "home": 39,
                        "away": 61
                    },
                    "poisson": {
                        "home": 49,
                        "away": 51
                    },
                    "h2h": {
                        "home": 71,
                        "away": 29
                    },
                    "goals": {
                        "home": 56,
                        "away": 44
                    }
                },
                "goals": [
                    {
                        "minute": "2",
                        "player": "Aiden Hezarkhani",
                        "team": "home"
                    },
                    {
                        "minute": "62",
                        "player": "Sergi Solans",
                        "team": "home"
                    },
                    {
                        "minute": "80",
                        "player": "Sergi Solans",
                        "team": "home"
                    }
                ],
                "cards": [
                    {
                        "minute": "45+2",
                        "player": "Carles Gil",
                        "team": "away",
                        "type": "yellow"
                    },
                    {
                        "minute": "46",
                        "player": "Morgan Guilavogui",
                        "team": "home",
                        "type": "yellow"
                    },
                    {
                        "minute": "61",
                        "player": "Joshua Wynder",
                        "team": "away",
                        "type": "yellow"
                    },
                    {
                        "minute": "75",
                        "player": "Rafael",
                        "team": "home",
                        "type": "yellow"
                    }
                ]
            },
            {
                "league": "MLS",
                "date": "2026-09-27",
                "time": "09:30",
                "home": "San Jose Earthquakes",
                "away": "Portland Timbers",
                "stadium": "Avaya Stadium",
                "round": "Pekan 27",
                "statusCode": "FT",
                "minuteDisplay": "FT",
                "homeScore": 3,
                "awayScore": 1,
                "homeLogo": "https://media.api-sports.io/football/teams/1596.png",
                "awayLogo": "https://media.api-sports.io/football/teams/1617.png",
                "prediction": "2 - 1",
                "odds": {
                    "home": 45,
                    "draw": 45,
                    "away": 10
                },
                "advice": "Double chance : San Jose Earthquakes or draw",
                "comparison": {
                    "form": {
                        "home": 69,
                        "away": 31
                    },
                    "att": {
                        "home": 44,
                        "away": 56
                    },
                    "def": {
                        "home": 69,
                        "away": 31
                    },
                    "poisson": {
                        "home": 53,
                        "away": 47
                    },
                    "h2h": {
                        "home": 93,
                        "away": 7
                    },
                    "goals": {
                        "home": 71,
                        "away": 29
                    }
                },
                "goals": [
                    {
                        "minute": "4",
                        "player": "Preston Judd",
                        "team": "home"
                    },
                    {
                        "minute": "24",
                        "player": "Eduard Löwen",
                        "team": "home"
                    },
                    {
                        "minute": "29",
                        "player": "Preston Judd",
                        "team": "home"
                    },
                    {
                        "minute": "86",
                        "player": "David Da Costa",
                        "team": "away"
                    }
                ],
                "cards": [
                    {
                        "minute": "30",
                        "player": "Preston Judd",
                        "team": "home",
                        "type": "yellow"
                    },
                    {
                        "minute": "40",
                        "player": "Reid Roberts",
                        "team": "home",
                        "type": "yellow"
                    },
                    {
                        "minute": "76",
                        "player": "Eric Miller",
                        "team": "away",
                        "type": "yellow"
                    }
                ]
            },
            {
                "league": "MLS",
                "date": "2026-09-27",
                "time": "09:30",
                "home": "Vancouver Whitecaps",
                "away": "DC United",
                "stadium": "BC Place",
                "round": "Pekan 27",
                "statusCode": "FT",
                "minuteDisplay": "FT",
                "homeScore": 3,
                "awayScore": 3,
                "homeLogo": "https://media.api-sports.io/football/teams/1603.png",
                "awayLogo": "https://media.api-sports.io/football/teams/1615.png",
                "prediction": "2 - 1",
                "odds": {
                    "home": 45,
                    "draw": 45,
                    "away": 10
                },
                "advice": "Double chance : Vancouver Whitecaps or draw",
                "comparison": {
                    "form": {
                        "home": 64,
                        "away": 36
                    },
                    "att": {
                        "home": 73,
                        "away": 27
                    },
                    "def": {
                        "home": 55,
                        "away": 45
                    },
                    "poisson": {
                        "home": 71,
                        "away": 29
                    },
                    "h2h": {
                        "home": 50,
                        "away": 50
                    },
                    "goals": {
                        "home": 45,
                        "away": 55
                    }
                },
                "goals": [
                    {
                        "minute": "16",
                        "player": "Kimito Nono",
                        "team": "away"
                    },
                    {
                        "minute": "25",
                        "player": "Brian White",
                        "team": "home"
                    },
                    {
                        "minute": "45+3",
                        "player": "Bruno Caicedo",
                        "team": "home"
                    },
                    {
                        "minute": "65",
                        "player": "Lucas Bartlett",
                        "team": "away"
                    },
                    {
                        "minute": "72",
                        "player": "Thomas Müller",
                        "team": "home"
                    },
                    {
                        "minute": "80",
                        "player": "Kimito Nono",
                        "team": "away"
                    }
                ],
                "cards": [
                    {
                        "minute": "23",
                        "player": "Kye Rowles",
                        "team": "away",
                        "type": "yellow"
                    }
                ]
            },
            {
                "league": "MLS",
                "date": "2026-09-27",
                "time": "09:30",
                "home": "Los Angeles Galaxy",
                "away": "Colorado Rapids",
                "stadium": "Dignity Health Sports Park",
                "round": "Pekan 27",
                "statusCode": "FT",
                "minuteDisplay": "FT",
                "homeScore": 3,
                "awayScore": 2,
                "homeLogo": "https://media.api-sports.io/football/teams/1605.png",
                "awayLogo": "https://media.api-sports.io/football/teams/1610.png",
                "prediction": "1 - 2",
                "odds": {
                    "home": 35,
                    "draw": 35,
                    "away": 30
                },
                "advice": "Double chance : Los Angeles Galaxy or draw",
                "comparison": {
                    "form": {
                        "home": 47,
                        "away": 53
                    },
                    "att": {
                        "home": 54,
                        "away": 46
                    },
                    "def": {
                        "home": 41,
                        "away": 59
                    },
                    "poisson": {
                        "home": 60,
                        "away": 40
                    },
                    "h2h": {
                        "home": 50,
                        "away": 50
                    },
                    "goals": {
                        "home": 53,
                        "away": 47
                    }
                },
                "goals": [
                    {
                        "minute": "4",
                        "player": "Donavan Phillip",
                        "team": "away"
                    },
                    {
                        "minute": "39",
                        "player": "Paxten Aaronson",
                        "team": "away"
                    },
                    {
                        "minute": "53",
                        "player": "Reggie Cannon",
                        "team": "away"
                    },
                    {
                        "minute": "66",
                        "player": "Klauss",
                        "team": "home"
                    },
                    {
                        "minute": "74",
                        "player": "Justin Haak",
                        "team": "home"
                    }
                ],
                "cards": [
                    {
                        "minute": "10",
                        "player": "Keegan Rosenberry",
                        "team": "away",
                        "type": "yellow"
                    },
                    {
                        "minute": "31",
                        "player": "Rob Holding",
                        "team": "away",
                        "type": "yellow"
                    },
                    {
                        "minute": "46",
                        "player": "Pablo Ruiz",
                        "team": "home",
                        "type": "yellow"
                    },
                    {
                        "minute": "53",
                        "player": "Joshua Atencio",
                        "team": "away",
                        "type": "yellow"
                    }
                ]
            },
            {
                "league": "Liga MX",
                "date": "2026-09-27",
                "time": "10:05",
                "home": "Santos Laguna",
                "away": "CF Pachuca",
                "stadium": "Estadio TSM Corona",
                "round": "Apertura - 10",
                "statusCode": "FT",
                "minuteDisplay": "FT",
                "homeScore": 1,
                "awayScore": 0,
                "homeLogo": "https://media.api-sports.io/football/teams/2285.png",
                "awayLogo": "https://media.api-sports.io/football/teams/2292.png",
                "prediction": "1 - 2",
                "odds": {
                    "home": 10,
                    "draw": 45,
                    "away": 45
                },
                "advice": "Double chance : draw or CF Pachuca",
                "comparison": {
                    "form": {
                        "home": 44,
                        "away": 56
                    },
                    "att": {
                        "home": 44,
                        "away": 56
                    },
                    "def": {
                        "home": 36,
                        "away": 64
                    },
                    "poisson": {
                        "home": 11,
                        "away": 89
                    },
                    "h2h": {
                        "home": 29,
                        "away": 71
                    },
                    "goals": {
                        "home": 36,
                        "away": 64
                    }
                },
                "goals": [
                    {
                        "minute": "45+3",
                        "player": "Francisco Villalba",
                        "team": "home"
                    }
                ],
                "cards": [
                    {
                        "minute": "45+2",
                        "player": "Francisco Venegas",
                        "team": "away",
                        "type": "yellow"
                    },
                    {
                        "minute": "47",
                        "player": "Facundo Cáseres",
                        "team": "home",
                        "type": "yellow"
                    },
                    {
                        "minute": "89",
                        "player": "Diego González",
                        "team": "home",
                        "type": "yellow"
                    },
                    {
                        "minute": "90+4",
                        "player": "Sergio Barreto",
                        "team": "away",
                        "type": "yellow"
                    },
                    {
                        "minute": "90+6",
                        "player": "Carlos Sánchez",
                        "team": "away",
                        "type": "yellow"
                    }
                ]
            },
            {
                "league": "Liga MX",
                "date": "2026-09-27",
                "time": "10:10",
                "home": "Tigres UANL",
                "away": "Puebla",
                "stadium": "Estadio Universitario",
                "round": "Apertura - 10",
                "statusCode": "FT",
                "minuteDisplay": "FT",
                "homeScore": 1,
                "awayScore": 0,
                "homeLogo": "https://media.api-sports.io/football/teams/2279.png",
                "awayLogo": "https://media.api-sports.io/football/teams/2291.png",
                "prediction": "2 - 1",
                "odds": {
                    "home": 45,
                    "draw": 45,
                    "away": 10
                },
                "advice": "Combo Double chance : Tigres UANL or draw and -3.5 goals",
                "comparison": {
                    "form": {
                        "home": 46,
                        "away": 54
                    },
                    "att": {
                        "home": 38,
                        "away": 63
                    },
                    "def": {
                        "home": 67,
                        "away": 33
                    },
                    "poisson": {
                        "home": 59,
                        "away": 41
                    },
                    "h2h": {
                        "home": 71,
                        "away": 29
                    },
                    "goals": {
                        "home": 73,
                        "away": 27
                    }
                },
                "goals": [
                    {
                        "minute": "54",
                        "player": "Juan Brunetta",
                        "team": "home"
                    }
                ],
                "cards": [
                    {
                        "minute": "18",
                        "player": "Alejandro Organista",
                        "team": "away",
                        "type": "yellow"
                    }
                ]
            }
        ],
        "2026-09-28": [
            {
                "league": "Liga MX",
                "date": "2026-09-28",
                "time": "01:00",
                "home": "U.N.A.M. - Pumas",
                "away": "Atletico San Luis",
                "stadium": "Estadio Olímpico Universitario",
                "round": "Apertura - 10",
                "statusCode": "FT",
                "minuteDisplay": "FT",
                "homeScore": 2,
                "awayScore": 3,
                "homeLogo": "https://media.api-sports.io/football/teams/2286.png",
                "awayLogo": "https://media.api-sports.io/football/teams/2314.png",
                "prediction": "1 - 2",
                "odds": {
                    "home": 45,
                    "draw": 45,
                    "away": 10
                },
                "advice": "Double chance : U.N.A.M. - Pumas or draw",
                "comparison": {
                    "form": {
                        "home": 42,
                        "away": 58
                    },
                    "att": {
                        "home": 42,
                        "away": 58
                    },
                    "def": {
                        "home": 50,
                        "away": 50
                    },
                    "poisson": {
                        "home": 53,
                        "away": 47
                    },
                    "h2h": {
                        "home": 60,
                        "away": 40
                    },
                    "goals": {
                        "home": 60,
                        "away": 40
                    }
                },
                "goals": [
                    {
                        "minute": "23",
                        "player": "Sebastien Salles-lamonge",
                        "team": "away"
                    },
                    {
                        "minute": "52",
                        "player": "Rodrigo López",
                        "team": "home"
                    },
                    {
                        "minute": "55",
                        "player": "David Rodriguez",
                        "team": "away"
                    },
                    {
                        "minute": "79",
                        "player": "Sebastien Salles-lamonge",
                        "team": "away"
                    },
                    {
                        "minute": "90",
                        "player": "Olávio Vieira dos Santos Júnio",
                        "team": "home"
                    }
                ],
                "cards": [
                    {
                        "minute": "45+1",
                        "player": "Oscar Macias",
                        "team": "away",
                        "type": "yellow"
                    },
                    {
                        "minute": "45+1",
                        "player": "Cesar Huerta",
                        "team": "home",
                        "type": "yellow"
                    },
                    {
                        "minute": "85",
                        "player": "Román Torres",
                        "team": "away",
                        "type": "yellow"
                    }
                ]
            },
            {
                "league": "MLS",
                "date": "2026-09-28",
                "time": "06:00",
                "home": "Columbus Crew",
                "away": "Inter Miami",
                "stadium": "ScottsMiracle-Gro Field",
                "round": "Pekan 27",
                "statusCode": "FT",
                "minuteDisplay": "FT",
                "homeScore": 2,
                "awayScore": 1,
                "homeLogo": "https://media.api-sports.io/football/teams/1613.png",
                "awayLogo": "https://media.api-sports.io/football/teams/9568.png",
                "prediction": "2 - 3",
                "odds": {
                    "home": 10,
                    "draw": 45,
                    "away": 45
                },
                "advice": "Double chance : draw or Inter Miami",
                "comparison": {
                    "form": {
                        "home": 46,
                        "away": 54
                    },
                    "att": {
                        "home": 33,
                        "away": 67
                    },
                    "def": {
                        "home": 57,
                        "away": 43
                    },
                    "poisson": {
                        "home": 40,
                        "away": 60
                    },
                    "h2h": {
                        "home": 29,
                        "away": 71
                    },
                    "goals": {
                        "home": 38,
                        "away": 62
                    }
                },
                "goals": [
                    {
                        "minute": "28",
                        "player": "Josef Martínez",
                        "team": "home"
                    },
                    {
                        "minute": "33",
                        "player": "Lionel Messi",
                        "team": "away"
                    },
                    {
                        "minute": "90+8",
                        "player": "Jamal Thiare",
                        "team": "home"
                    }
                ],
                "cards": [
                    {
                        "minute": "27",
                        "player": "Carlos Henrique Casimiro",
                        "team": "away",
                        "type": "yellow"
                    },
                    {
                        "minute": "38",
                        "player": "Dylan Chambost",
                        "team": "home",
                        "type": "yellow"
                    },
                    {
                        "minute": "67",
                        "player": "Micael dos Santos Silva",
                        "team": "away",
                        "type": "yellow"
                    },
                    {
                        "minute": "75",
                        "player": "Brais Méndez",
                        "team": "home",
                        "type": "yellow"
                    },
                    {
                        "minute": "78",
                        "player": "Eric Bailly",
                        "team": "home",
                        "type": "yellow"
                    },
                    {
                        "minute": "80",
                        "player": "Daniel Pinter",
                        "team": "away",
                        "type": "yellow"
                    },
                    {
                        "minute": "83",
                        "player": "Sekou Tidiany Bangoura",
                        "team": "home",
                        "type": "yellow"
                    },
                    {
                        "minute": "90+2",
                        "player": "Gonzalo Lujan",
                        "team": "away",
                        "type": "yellow"
                    },
                    {
                        "minute": "90+3",
                        "player": "Santiago Morales",
                        "team": "away",
                        "type": "yellow"
                    },
                    {
                        "minute": "90+6",
                        "player": "Santiago Morales",
                        "team": "away",
                        "type": "red"
                    },
                    {
                        "minute": "90+10",
                        "player": "Luis Barraza",
                        "team": "away",
                        "type": "yellow"
                    }
                ]
            },
            {
                "league": "Liga MX",
                "date": "2026-09-28",
                "time": "08:00",
                "home": "Leon",
                "away": "FC Juarez",
                "stadium": "Estadio León",
                "round": "Apertura - 10",
                "statusCode": "FT",
                "minuteDisplay": "FT",
                "homeScore": 2,
                "awayScore": 1,
                "homeLogo": "https://media.api-sports.io/football/teams/2289.png",
                "awayLogo": "https://media.api-sports.io/football/teams/2298.png",
                "prediction": "2 - 1",
                "odds": {
                    "home": 45,
                    "draw": 45,
                    "away": 10
                },
                "advice": "Winner : Leon",
                "comparison": {
                    "form": {
                        "home": 73,
                        "away": 27
                    },
                    "att": {
                        "home": 64,
                        "away": 36
                    },
                    "def": {
                        "home": 67,
                        "away": 33
                    },
                    "poisson": {
                        "home": 93,
                        "away": 7
                    },
                    "h2h": {
                        "home": 71,
                        "away": 29
                    },
                    "goals": {
                        "home": 57,
                        "away": 43
                    }
                },
                "goals": [
                    {
                        "minute": "76",
                        "player": "Francisco Nevarez",
                        "team": "away"
                    },
                    {
                        "minute": "90+4",
                        "player": "Oscar Estupiñan",
                        "team": "away"
                    },
                    {
                        "minute": "90+9",
                        "player": "Jose Alvarado",
                        "team": "home"
                    }
                ],
                "cards": [
                    {
                        "minute": "3",
                        "player": "Sebastián Vegas",
                        "team": "home",
                        "type": "yellow"
                    },
                    {
                        "minute": "53",
                        "player": "Juan Guevara",
                        "team": "home",
                        "type": "yellow"
                    },
                    {
                        "minute": "79",
                        "player": "Jesus Murillo",
                        "team": "away",
                        "type": "yellow"
                    },
                    {
                        "minute": "83",
                        "player": "Francisco Nevarez",
                        "team": "away",
                        "type": "yellow"
                    }
                ]
            },
            {
                "league": "Liga MX",
                "date": "2026-09-28",
                "time": "10:10",
                "home": "Necaxa",
                "away": "Club America",
                "stadium": "Estadio Victoria",
                "round": "Apertura - 10",
                "statusCode": "FT",
                "minuteDisplay": "FT",
                "homeScore": 2,
                "awayScore": 4,
                "homeLogo": "https://media.api-sports.io/football/teams/2288.png",
                "awayLogo": "https://media.api-sports.io/football/teams/2287.png",
                "prediction": "1 - 2",
                "odds": {
                    "home": 10,
                    "draw": 45,
                    "away": 45
                },
                "advice": "Winner : Club America",
                "comparison": {
                    "form": {
                        "home": 17,
                        "away": 83
                    },
                    "att": {
                        "home": 25,
                        "away": 75
                    },
                    "def": {
                        "home": 44,
                        "away": 56
                    },
                    "poisson": {
                        "home": 36,
                        "away": 64
                    },
                    "h2h": {
                        "home": 50,
                        "away": 50
                    },
                    "goals": {
                        "home": 45,
                        "away": 55
                    }
                },
                "goals": [
                    {
                        "minute": "37",
                        "player": "Owen González",
                        "team": "home"
                    },
                    {
                        "minute": "39",
                        "player": "Henry Martin",
                        "team": "away"
                    },
                    {
                        "minute": "43",
                        "player": "Julián Carranza",
                        "team": "home"
                    },
                    {
                        "minute": "45+10",
                        "player": "Henry Martin",
                        "team": "away"
                    },
                    {
                        "minute": "56",
                        "player": "Miguel Borja",
                        "team": "away"
                    },
                    {
                        "minute": "75",
                        "player": "Henry Martin",
                        "team": "away"
                    }
                ],
                "cards": [
                    {
                        "minute": "33",
                        "player": "Erick Sánchez",
                        "team": "away",
                        "type": "yellow"
                    },
                    {
                        "minute": "62",
                        "player": "Raúl Martínez",
                        "team": "home",
                        "type": "yellow"
                    },
                    {
                        "minute": "87",
                        "player": "Diego Ochoa",
                        "team": "home",
                        "type": "yellow"
                    },
                    {
                        "minute": "90",
                        "player": "Javier Ruiz",
                        "team": "home",
                        "type": "yellow"
                    },
                    {
                        "minute": "90+5",
                        "player": "Cristian Borja",
                        "team": "away",
                        "type": "yellow"
                    }
                ]
            }
        ],
        "2026-10-01": [
            {
                "league": "MLS",
                "date": "2026-10-01",
                "time": "06:30",
                "home": "New York Red Bulls",
                "away": "St. Louis City",
                "stadium": "Sports Illustrated Stadium",
                "round": "Pekan 27",
                "statusCode": "FT",
                "minuteDisplay": "FT",
                "homeScore": 0,
                "awayScore": 3,
                "homeLogo": "https://media.api-sports.io/football/teams/1602.png",
                "awayLogo": "https://media.api-sports.io/football/teams/20787.png",
                "prediction": "1 - 2",
                "odds": {
                    "home": 10,
                    "draw": 45,
                    "away": 45
                },
                "advice": "Winner : St. Louis City",
                "comparison": {
                    "form": {
                        "home": 39,
                        "away": 61
                    },
                    "att": {
                        "home": 17,
                        "away": 83
                    },
                    "def": {
                        "home": 64,
                        "away": 36
                    },
                    "poisson": {
                        "home": 40,
                        "away": 60
                    },
                    "h2h": {
                        "home": 50,
                        "away": 50
                    },
                    "goals": {
                        "home": 56,
                        "away": 44
                    }
                },
                "goals": [
                    {
                        "minute": "5",
                        "player": "Rafael Navarro Leal",
                        "team": "away"
                    },
                    {
                        "minute": "87",
                        "player": "Simon Becher",
                        "team": "away"
                    },
                    {
                        "minute": "90+1",
                        "player": "Tomas Ostrak",
                        "team": "away"
                    }
                ],
                "cards": [
                    {
                        "minute": "35",
                        "player": "Timo Baumgartl",
                        "team": "away",
                        "type": "yellow"
                    },
                    {
                        "minute": "86",
                        "player": "Emil Forsberg",
                        "team": "home",
                        "type": "yellow"
                    }
                ]
            }
        ],
        "2026-10-02": [
            {
                "league": "MLS",
                "date": "2026-10-02",
                "time": "08:30",
                "home": "Seattle Sounders",
                "away": "Sporting Kansas City",
                "stadium": "Lumen Field",
                "round": "Pekan 24",
                "statusCode": "FT",
                "minuteDisplay": "FT",
                "homeScore": 2,
                "awayScore": 1,
                "homeLogo": "https://media.api-sports.io/football/teams/1595.png",
                "awayLogo": "https://media.api-sports.io/football/teams/1611.png",
                "prediction": "3 - 2",
                "odds": {
                    "home": 45,
                    "draw": 45,
                    "away": 10
                },
                "advice": "Double chance : Seattle Sounders or draw",
                "comparison": {
                    "form": {
                        "home": 60,
                        "away": 40
                    },
                    "att": {
                        "home": 45,
                        "away": 55
                    },
                    "def": {
                        "home": 71,
                        "away": 29
                    },
                    "poisson": {
                        "home": 71,
                        "away": 29
                    },
                    "h2h": {
                        "home": 71,
                        "away": 29
                    },
                    "goals": {
                        "home": 63,
                        "away": 37
                    }
                },
                "goals": [
                    {
                        "minute": "44",
                        "player": "André Luiz",
                        "team": "away"
                    },
                    {
                        "minute": "51",
                        "player": "Sebastian Gomez",
                        "team": "home"
                    },
                    {
                        "minute": "90",
                        "player": "Cristian Roldán",
                        "team": "home"
                    }
                ],
                "cards": [
                    {
                        "minute": "61",
                        "player": "Nouhou Tolo",
                        "team": "home",
                        "type": "yellow"
                    },
                    {
                        "minute": "89+1",
                        "player": "Jacob Bartlett",
                        "team": "away",
                        "type": "yellow"
                    }
                ]
            }
        ],
        "2026-10-03": [
            {
                "league": "Liga de Expansion MX",
                "date": "2026-10-03",
                "time": "08:00",
                "home": "Correcaminos Uat",
                "away": "Cruz Azul Hidalgo",
                "stadium": "",
                "round": "Apertura - 11",
                "statusCode": "FT",
                "minuteDisplay": "FT",
                "homeScore": 0,
                "awayScore": 0,
                "homeLogo": "https://media.api-sports.io/football/teams/2313.png",
                "awayLogo": "https://media.api-sports.io/football/teams/15928.png",
                "prediction": "2 - 2",
                "odds": {
                    "home": 35,
                    "draw": 35,
                    "away": 30
                },
                "advice": "Double chance : Correcaminos Uat or draw",
                "comparison": {
                    "form": {
                        "home": 56,
                        "away": 44
                    },
                    "att": {
                        "home": 38,
                        "away": 62
                    },
                    "def": {
                        "home": 55,
                        "away": 45
                    },
                    "poisson": {
                        "home": 91,
                        "away": 9
                    },
                    "h2h": {
                        "home": 0,
                        "away": 0
                    },
                    "goals": {
                        "home": 0,
                        "away": 0
                    }
                },
                "cards": [
                    {
                        "minute": "4",
                        "player": "E. Torres",
                        "team": "home",
                        "type": "yellow"
                    },
                    {
                        "minute": "9",
                        "player": "K. Gonzalez",
                        "team": "away",
                        "type": "yellow"
                    },
                    {
                        "minute": "23",
                        "player": "O. Perez",
                        "team": "home",
                        "type": "yellow"
                    },
                    {
                        "minute": "29",
                        "player": "J. Mendoza",
                        "team": "away",
                        "type": "yellow"
                    },
                    {
                        "minute": "42",
                        "player": "S. De Los Rios",
                        "team": "away",
                        "type": "yellow"
                    },
                    {
                        "minute": "70",
                        "player": "R. Rubio",
                        "team": "away",
                        "type": "red"
                    },
                    {
                        "minute": "88",
                        "player": "J. Duran Islas",
                        "team": "away",
                        "type": "yellow"
                    },
                    {
                        "minute": "89",
                        "player": "J. Duran Islas",
                        "team": "away",
                        "type": "yellow"
                    },
                    {
                        "minute": "89",
                        "player": "J. Duran Islas",
                        "team": "away",
                        "type": "red"
                    }
                ]
            },
            {
                "league": "Liga de Expansion MX",
                "date": "2026-10-03",
                "time": "08:00",
                "home": "Tepatitlán",
                "away": "CDS Tampico Madero",
                "stadium": "",
                "round": "Apertura - 11",
                "statusCode": "FT",
                "minuteDisplay": "FT",
                "homeScore": 3,
                "awayScore": 1,
                "homeLogo": "https://media.api-sports.io/football/teams/14279.png",
                "awayLogo": "https://media.api-sports.io/football/teams/19905.png",
                "prediction": "1 - 2",
                "odds": {
                    "home": 45,
                    "draw": 45,
                    "away": 10
                },
                "advice": "Double chance : Tepatitlán or draw",
                "comparison": {
                    "form": {
                        "home": 43,
                        "away": 57
                    },
                    "att": {
                        "home": 40,
                        "away": 60
                    },
                    "def": {
                        "home": 36,
                        "away": 64
                    },
                    "poisson": {
                        "home": 68,
                        "away": 32
                    },
                    "h2h": {
                        "home": 71,
                        "away": 29
                    },
                    "goals": {
                        "home": 62,
                        "away": 38
                    }
                },
                "goals": [
                    {
                        "minute": "47",
                        "player": "L. Egurrola",
                        "team": "home"
                    },
                    {
                        "minute": "57",
                        "player": "I. Ochoa",
                        "team": "away"
                    },
                    {
                        "minute": "59",
                        "player": "J. Sanchez",
                        "team": "home"
                    },
                    {
                        "minute": "77",
                        "player": "I. Ochoa",
                        "team": "away"
                    }
                ],
                "cards": [
                    {
                        "minute": "6",
                        "player": "J. Sanchez",
                        "team": "home",
                        "type": "yellow"
                    },
                    {
                        "minute": "8",
                        "player": "R. Gonzalez",
                        "team": "away",
                        "type": "red"
                    },
                    {
                        "minute": "41",
                        "player": "D. Magana",
                        "team": "away",
                        "type": "yellow"
                    },
                    {
                        "minute": "55",
                        "player": "I. Ramirez",
                        "team": "away",
                        "type": "yellow"
                    },
                    {
                        "minute": "61",
                        "player": "G. Olvera",
                        "team": "home",
                        "type": "red"
                    },
                    {
                        "minute": "72",
                        "player": "G. Baez",
                        "team": "home",
                        "type": "yellow"
                    }
                ]
            },
            {
                "league": "Liga de Expansion MX",
                "date": "2026-10-03",
                "time": "10:00",
                "home": "CA La Paz",
                "away": "Venados FC",
                "stadium": "Estadio Guaycura",
                "round": "Apertura - 11",
                "statusCode": "FT",
                "minuteDisplay": "FT",
                "homeScore": 1,
                "awayScore": 2,
                "homeLogo": "https://media.api-sports.io/football/teams/19024.png",
                "awayLogo": "https://media.api-sports.io/football/teams/2311.png",
                "prediction": "3 - 2",
                "odds": {
                    "home": 45,
                    "draw": 45,
                    "away": 10
                },
                "advice": "Combo Double chance : CA La Paz or draw and +1.5 goals",
                "comparison": {
                    "form": {
                        "home": 68,
                        "away": 32
                    },
                    "att": {
                        "home": 52,
                        "away": 48
                    },
                    "def": {
                        "home": 67,
                        "away": 33
                    },
                    "poisson": {
                        "home": 80,
                        "away": 20
                    },
                    "h2h": {
                        "home": 62,
                        "away": 38
                    },
                    "goals": {
                        "home": 53,
                        "away": 47
                    }
                },
                "goals": [
                    {
                        "minute": "21",
                        "player": "S. Lora",
                        "team": "away"
                    },
                    {
                        "minute": "34",
                        "player": "J. Reyes",
                        "team": "away"
                    },
                    {
                        "minute": "43",
                        "player": "M. Barragan",
                        "team": "home"
                    }
                ],
                "cards": [
                    {
                        "minute": "17",
                        "player": "S. Lora",
                        "team": "away",
                        "type": "yellow"
                    },
                    {
                        "minute": "29",
                        "player": "D. Hernandez",
                        "team": "home",
                        "type": "yellow"
                    },
                    {
                        "minute": "50",
                        "player": "C. Robles",
                        "team": "home",
                        "type": "yellow"
                    },
                    {
                        "minute": "75",
                        "player": "S. Saucedo",
                        "team": "away",
                        "type": "yellow"
                    },
                    {
                        "minute": "90+4",
                        "player": "R. Renteria",
                        "team": "home",
                        "type": "yellow"
                    }
                ]
            }
        ],
        "2026-10-04": [
            {
                "league": "Liga de Expansion MX",
                "date": "2026-10-04",
                "time": "08:00",
                "home": "Monarcas",
                "away": "Tlaxcala",
                "stadium": "Estadio Morelos",
                "round": "Apertura - 11",
                "statusCode": "FT",
                "minuteDisplay": "FT",
                "homeScore": 1,
                "awayScore": 1,
                "homeLogo": "https://media.api-sports.io/football/teams/2284.png",
                "awayLogo": "https://media.api-sports.io/football/teams/14280.png",
                "prediction": "2 - 1",
                "odds": {
                    "home": 45,
                    "draw": 45,
                    "away": 10
                },
                "advice": "Combo Double chance : Monarcas or draw and +1.5 goals",
                "comparison": {
                    "form": {
                        "home": 55,
                        "away": 45
                    },
                    "att": {
                        "home": 45,
                        "away": 55
                    },
                    "def": {
                        "home": 73,
                        "away": 27
                    },
                    "poisson": {
                        "home": 75,
                        "away": 25
                    },
                    "h2h": {
                        "home": 85,
                        "away": 15
                    },
                    "goals": {
                        "home": 70,
                        "away": 30
                    }
                },
                "goals": [
                    {
                        "minute": "7",
                        "player": "D. Zamora",
                        "team": "home"
                    },
                    {
                        "minute": "89",
                        "player": "E. Robles",
                        "team": "away"
                    }
                ],
                "cards": [
                    {
                        "minute": "9",
                        "player": "J. Freyfeld",
                        "team": "away",
                        "type": "yellow"
                    },
                    {
                        "minute": "30",
                        "player": "M. Ramirez",
                        "team": "away",
                        "type": "yellow"
                    },
                    {
                        "minute": "39",
                        "player": "B. Flores",
                        "team": "away",
                        "type": "yellow"
                    },
                    {
                        "minute": "41",
                        "player": "P. Gonzalez",
                        "team": "away",
                        "type": "red"
                    },
                    {
                        "minute": "45+1",
                        "player": "J. Martinez",
                        "team": "home",
                        "type": "yellow"
                    },
                    {
                        "minute": "46",
                        "player": "D. Zamora",
                        "team": "home",
                        "type": "yellow"
                    },
                    {
                        "minute": "54",
                        "player": "D. Aguilar",
                        "team": "home",
                        "type": "yellow"
                    },
                    {
                        "minute": "66",
                        "player": "M. A. Trejo Castro",
                        "team": "away",
                        "type": "yellow"
                    }
                ]
            },
            {
                "league": "Liga de Expansion MX",
                "date": "2026-10-04",
                "time": "08:00",
                "home": "Cancún",
                "away": "Tapatío",
                "stadium": "",
                "round": "Apertura - 11",
                "statusCode": "FT",
                "minuteDisplay": "FT",
                "homeScore": 1,
                "awayScore": 0,
                "homeLogo": "https://media.api-sports.io/football/teams/14276.png",
                "awayLogo": "https://media.api-sports.io/football/teams/14278.png",
                "prediction": "3 - 2",
                "odds": {
                    "home": 45,
                    "draw": 45,
                    "away": 10
                },
                "advice": "Combo Double chance : Cancún or draw and +1.5 goals",
                "comparison": {
                    "form": {
                        "home": 53,
                        "away": 47
                    },
                    "att": {
                        "home": 54,
                        "away": 46
                    },
                    "def": {
                        "home": 56,
                        "away": 44
                    },
                    "poisson": {
                        "home": 71,
                        "away": 29
                    },
                    "h2h": {
                        "home": 71,
                        "away": 29
                    },
                    "goals": {
                        "home": 60,
                        "away": 40
                    }
                },
                "goals": [
                    {
                        "minute": "75",
                        "player": "T. Gigena",
                        "team": "home"
                    }
                ],
                "cards": [
                    {
                        "minute": "3",
                        "player": "L. Jimenez",
                        "team": "away",
                        "type": "yellow"
                    },
                    {
                        "minute": "17",
                        "player": "M. Cendejas",
                        "team": "away",
                        "type": "yellow"
                    },
                    {
                        "minute": "25",
                        "player": "R. Reyes",
                        "team": "home",
                        "type": "yellow"
                    },
                    {
                        "minute": "51",
                        "player": "J. Hernandez",
                        "team": "home",
                        "type": "yellow"
                    },
                    {
                        "minute": "59",
                        "player": "L. Ruiz",
                        "team": "home",
                        "type": "yellow"
                    },
                    {
                        "minute": "76",
                        "player": "T. Gigena",
                        "team": "home",
                        "type": "yellow"
                    }
                ]
            },
            {
                "league": "Liga de Expansion MX",
                "date": "2026-10-04",
                "time": "08:00",
                "home": "Durango",
                "away": "Mineros de Zacatecas",
                "stadium": "Estadio Francisco Zarco",
                "round": "Apertura - 11",
                "statusCode": "FT",
                "minuteDisplay": "FT",
                "homeScore": 4,
                "awayScore": 2,
                "homeLogo": "https://media.api-sports.io/football/teams/15941.png",
                "awayLogo": "https://media.api-sports.io/football/teams/2299.png",
                "prediction": "2 - 1",
                "odds": {
                    "home": 45,
                    "draw": 45,
                    "away": 10
                },
                "advice": "Combo Double chance : Durango or draw and -3.5 goals",
                "comparison": {
                    "form": {
                        "home": 47,
                        "away": 53
                    },
                    "att": {
                        "home": 40,
                        "away": 60
                    },
                    "def": {
                        "home": 67,
                        "away": 33
                    },
                    "poisson": {
                        "home": 43,
                        "away": 57
                    },
                    "h2h": {
                        "home": 100,
                        "away": 0
                    },
                    "goals": {
                        "home": 75,
                        "away": 25
                    }
                },
                "goals": [
                    {
                        "minute": "3",
                        "player": "A. Escoboza",
                        "team": "home"
                    },
                    {
                        "minute": "17",
                        "player": "J. I. Reyes Olguin",
                        "team": "home"
                    },
                    {
                        "minute": "62",
                        "player": "A. Escoboza",
                        "team": "home"
                    },
                    {
                        "minute": "70",
                        "player": "M. Lozano",
                        "team": "home"
                    },
                    {
                        "minute": "74",
                        "player": "W. D. Castro Garcia",
                        "team": "away"
                    },
                    {
                        "minute": "83",
                        "player": "L. Sandoval",
                        "team": "away"
                    }
                ],
                "cards": [
                    {
                        "minute": "35",
                        "player": "J. Angulo",
                        "team": "home",
                        "type": "yellow"
                    },
                    {
                        "minute": "60",
                        "player": "L. Duran",
                        "team": "away",
                        "type": "red"
                    },
                    {
                        "minute": "65",
                        "player": "O. Mazatan",
                        "team": "away",
                        "type": "yellow"
                    },
                    {
                        "minute": "68",
                        "player": "M. Lozano",
                        "team": "home",
                        "type": "yellow"
                    },
                    {
                        "minute": "90+5",
                        "player": "W. D. Castro Garcia",
                        "team": "away",
                        "type": "yellow"
                    },
                    {
                        "minute": "90+5",
                        "player": "P. Padilla",
                        "team": "away",
                        "type": "red"
                    }
                ]
            },
            {
                "league": "Liga de Expansion MX",
                "date": "2026-10-04",
                "time": "08:00",
                "home": "Piratas",
                "away": "Alebrijes de Oaxaca",
                "stadium": "",
                "round": "Apertura - 11",
                "statusCode": "FT",
                "minuteDisplay": "FT",
                "homeScore": 4,
                "awayScore": 0,
                "homeLogo": "https://media.api-sports.io/football/teams/27935.png",
                "awayLogo": "https://media.api-sports.io/football/teams/2300.png",
                "prediction": "2 - 1",
                "odds": {
                    "home": 50,
                    "draw": 50,
                    "away": 33
                },
                "advice": "Double chance : Piratas or draw",
                "comparison": {
                    "form": {
                        "home": 67,
                        "away": 33
                    },
                    "att": {
                        "home": 67,
                        "away": 33
                    },
                    "def": {
                        "home": 61,
                        "away": 39
                    },
                    "poisson": {
                        "home": 82,
                        "away": 18
                    },
                    "h2h": {
                        "home": 0,
                        "away": 0
                    },
                    "goals": {
                        "home": 0,
                        "away": 0
                    }
                },
                "goals": [
                    {
                        "minute": "20",
                        "player": "D. Lajud Martinez",
                        "team": "home"
                    },
                    {
                        "minute": "74",
                        "player": "D. Lajud Martinez",
                        "team": "home"
                    },
                    {
                        "minute": "79",
                        "player": "G. Lopez",
                        "team": "home"
                    },
                    {
                        "minute": "90+6",
                        "player": "U. Garcia",
                        "team": "home"
                    }
                ],
                "cards": [
                    {
                        "minute": "19",
                        "player": "A. Hernandez",
                        "team": "away",
                        "type": "yellow"
                    },
                    {
                        "minute": "37",
                        "player": "A. Tecpanecatl",
                        "team": "away",
                        "type": "red"
                    },
                    {
                        "minute": "45+3",
                        "player": "K. Alvarez",
                        "team": "away",
                        "type": "yellow"
                    },
                    {
                        "minute": "47",
                        "player": "J. Alaniz",
                        "team": "away",
                        "type": "yellow"
                    }
                ]
            }
        ],
        "2026-10-05": [
            {
                "league": "Liga de Expansion MX",
                "date": "2026-10-05",
                "time": "01:00",
                "home": "Leones Negros UDG",
                "away": "Dorados",
                "stadium": "Estadio Jalisco",
                "round": "Apertura - 11",
                "statusCode": "FT",
                "minuteDisplay": "FT",
                "homeScore": 6,
                "awayScore": 3,
                "homeLogo": "https://media.api-sports.io/football/teams/2307.png",
                "awayLogo": "https://media.api-sports.io/football/teams/2297.png",
                "prediction": "1 - 2",
                "odds": {
                    "home": 45,
                    "draw": 45,
                    "away": 10
                },
                "advice": "Double chance : Leones Negros UDG or draw",
                "comparison": {
                    "form": {
                        "home": 50,
                        "away": 50
                    },
                    "att": {
                        "home": 47,
                        "away": 53
                    },
                    "def": {
                        "home": 42,
                        "away": 58
                    },
                    "poisson": {
                        "home": 35,
                        "away": 65
                    },
                    "h2h": {
                        "home": 93,
                        "away": 7
                    },
                    "goals": {
                        "home": 83,
                        "away": 17
                    }
                },
                "goals": [
                    {
                        "minute": "4",
                        "player": "L. Razo",
                        "team": "home"
                    },
                    {
                        "minute": "22",
                        "player": "A. De Jesus Bravo Santiago",
                        "team": "home"
                    },
                    {
                        "minute": "37",
                        "player": "L. Razo",
                        "team": "home"
                    },
                    {
                        "minute": "61",
                        "player": "D. Osuna",
                        "team": "away"
                    },
                    {
                        "minute": "68",
                        "player": "S. A. Hernandez",
                        "team": "home"
                    },
                    {
                        "minute": "77",
                        "player": "J. Marchand",
                        "team": "home"
                    },
                    {
                        "minute": "83",
                        "player": "O. Coronel",
                        "team": "away"
                    },
                    {
                        "minute": "88",
                        "player": "O. Coronel",
                        "team": "away"
                    },
                    {
                        "minute": "90",
                        "player": "O. Gil",
                        "team": "home"
                    }
                ],
                "cards": [
                    {
                        "minute": "37",
                        "player": "G. Padilla",
                        "team": "away",
                        "type": "yellow"
                    },
                    {
                        "minute": "90+5",
                        "player": "J. Aguayo",
                        "team": "home",
                        "type": "yellow"
                    }
                ]
            }
        ],
        "2026-10-07": [
            {
                "league": "MLS",
                "date": "2026-10-07",
                "time": "07:30",
                "home": "Chicago Fire",
                "away": "Vancouver Whitecaps",
                "stadium": "Soldier Field",
                "round": "Pekan 16",
                "statusCode": "FT",
                "minuteDisplay": "FT",
                "homeScore": 3,
                "awayScore": 1,
                "homeLogo": "https://media.api-sports.io/football/teams/1607.png",
                "awayLogo": "https://media.api-sports.io/football/teams/1603.png",
                "prediction": "2 - 3",
                "odds": {
                    "home": 10,
                    "draw": 45,
                    "away": 45
                },
                "advice": "Double chance : draw or Vancouver Whitecaps",
                "comparison": {
                    "form": {
                        "home": 42,
                        "away": 58
                    },
                    "att": {
                        "home": 39,
                        "away": 61
                    },
                    "def": {
                        "home": 44,
                        "away": 56
                    },
                    "poisson": {
                        "home": 37,
                        "away": 63
                    },
                    "h2h": {
                        "home": 40,
                        "away": 60
                    },
                    "goals": {
                        "home": 50,
                        "away": 50
                    }
                },
                "goals": [
                    {
                        "minute": "9",
                        "player": "Jonathan Bamba",
                        "team": "home"
                    },
                    {
                        "minute": "50",
                        "player": "Philip Zinckernagel",
                        "team": "home"
                    },
                    {
                        "minute": "73",
                        "player": "Mathías Laborda",
                        "team": "away"
                    },
                    {
                        "minute": "88",
                        "player": "Maren Haile-Selassie",
                        "team": "home"
                    }
                ],
                "cards": [
                    {
                        "minute": "19",
                        "player": "Philip Zinckernagel",
                        "team": "home",
                        "type": "yellow"
                    },
                    {
                        "minute": "55",
                        "player": "Jonathan Dean",
                        "team": "home",
                        "type": "yellow"
                    },
                    {
                        "minute": "61",
                        "player": "Tate Johnson",
                        "team": "away",
                        "type": "yellow"
                    }
                ]
            }
        ]
    },
    "upcoming": {
        "2026-10-10": [
            {
                "league": "Super Lig",
                "date": "2026-10-10",
                "time": "00:00",
                "home": "Galatasaray",
                "away": "Kasımpaşa",
                "stadium": "Rams Park",
                "round": "Pekan 7",
                "statusCode": "NS",
                "homeLogo": "https://media.api-sports.io/football/teams/645.png",
                "awayLogo": "https://media.api-sports.io/football/teams/1004.png",
                "prediction": "2 - 1",
                "odds": {
                    "home": 35,
                    "draw": 35,
                    "away": 30
                },
                "advice": "Double chance : Galatasaray or draw",
                "comparison": {
                    "form": {
                        "home": 57,
                        "away": 43
                    },
                    "att": {
                        "home": 65,
                        "away": 35
                    },
                    "def": {
                        "home": 33,
                        "away": 67
                    },
                    "poisson": {
                        "home": 33,
                        "away": 67
                    },
                    "h2h": {
                        "home": 62,
                        "away": 38
                    },
                    "goals": {
                        "home": 57,
                        "away": 43
                    }
                }
            },
            {
                "league": "Primeira Liga",
                "date": "2026-10-10",
                "time": "00:45",
                "home": "Moreirense",
                "away": "GIL Vicente",
                "stadium": "Parque Joaquim Almeida Freitas",
                "round": "Pekan 8",
                "statusCode": "NS",
                "homeLogo": "https://media.api-sports.io/football/teams/215.png",
                "awayLogo": "https://media.api-sports.io/football/teams/762.png",
                "prediction": "1 - 2",
                "odds": {
                    "home": 10,
                    "draw": 45,
                    "away": 45
                },
                "advice": "Double chance : draw or GIL Vicente",
                "comparison": {
                    "form": {
                        "home": 58,
                        "away": 42
                    },
                    "att": {
                        "home": 60,
                        "away": 40
                    },
                    "def": {
                        "home": 38,
                        "away": 62
                    },
                    "poisson": {
                        "home": 70,
                        "away": 30
                    },
                    "h2h": {
                        "home": 29,
                        "away": 71
                    },
                    "goals": {
                        "home": 36,
                        "away": 64
                    }
                }
            },
            {
                "league": "Eredivisie",
                "date": "2026-10-10",
                "time": "01:00",
                "home": "PSV Eindhoven",
                "away": "Heerenveen",
                "stadium": "Philips Stadion",
                "round": "Pekan 8",
                "statusCode": "NS",
                "homeLogo": "https://media.api-sports.io/football/teams/197.png",
                "awayLogo": "https://media.api-sports.io/football/teams/210.png",
                "prediction": "3 - 2",
                "odds": {
                    "home": 45,
                    "draw": 45,
                    "away": 10
                },
                "advice": "Combo Winner : PSV Eindhoven and +1.5 goals",
                "comparison": {
                    "form": {
                        "home": 71,
                        "away": 29
                    },
                    "att": {
                        "home": 71,
                        "away": 29
                    },
                    "def": {
                        "home": 50,
                        "away": 50
                    },
                    "poisson": {
                        "home": 63,
                        "away": 37
                    },
                    "h2h": {
                        "home": 80,
                        "away": 20
                    },
                    "goals": {
                        "home": 73,
                        "away": 27
                    }
                }
            },
            {
                "league": "Bundesliga",
                "date": "2026-10-10",
                "time": "01:30",
                "home": "Borussia Dortmund",
                "away": "Werder Bremen",
                "stadium": "Signal Iduna Park",
                "round": "Pekan 5",
                "statusCode": "NS",
                "homeLogo": "https://media.api-sports.io/football/teams/165.png",
                "awayLogo": "https://media.api-sports.io/football/teams/162.png",
                "prediction": "2 - 1",
                "odds": {
                    "home": 45,
                    "draw": 45,
                    "away": 10
                },
                "advice": "Double chance : Borussia Dortmund or draw",
                "comparison": {
                    "form": {
                        "home": 63,
                        "away": 37
                    },
                    "att": {
                        "home": 53,
                        "away": 47
                    },
                    "def": {
                        "home": 80,
                        "away": 20
                    },
                    "poisson": {
                        "home": 100,
                        "away": 0
                    },
                    "h2h": {
                        "home": 85,
                        "away": 15
                    },
                    "goals": {
                        "home": 75,
                        "away": 25
                    }
                }
            },
            {
                "league": "Ligue 1",
                "date": "2026-10-10",
                "time": "01:45",
                "home": "Lens",
                "away": "Lyon",
                "stadium": "Stade Bollaert-Delelis",
                "round": "Pekan 6",
                "statusCode": "NS",
                "homeLogo": "https://media.api-sports.io/football/teams/116.png",
                "awayLogo": "https://media.api-sports.io/football/teams/80.png",
                "prediction": "1 - 2",
                "odds": {
                    "home": 10,
                    "draw": 45,
                    "away": 45
                },
                "advice": "Double chance : draw or Lyon",
                "comparison": {
                    "form": {
                        "home": 27,
                        "away": 73
                    },
                    "att": {
                        "home": 47,
                        "away": 53
                    },
                    "def": {
                        "home": 18,
                        "away": 82
                    },
                    "poisson": {
                        "home": 0,
                        "away": 100
                    },
                    "h2h": {
                        "home": 71,
                        "away": 29
                    },
                    "goals": {
                        "home": 69,
                        "away": 31
                    }
                }
            },
            {
                "league": "Jupiler Pro League",
                "date": "2026-10-10",
                "time": "01:45",
                "home": "SK Beveren",
                "away": "Lommel United",
                "stadium": "Freethiel Stadion",
                "round": "Pekan 8",
                "statusCode": "NS",
                "homeLogo": "https://media.api-sports.io/football/teams/738.png",
                "awayLogo": "https://media.api-sports.io/football/teams/259.png",
                "prediction": "2 - 1",
                "odds": {
                    "home": 45,
                    "draw": 45,
                    "away": 10
                },
                "advice": "Double chance : SK Beveren or draw",
                "comparison": {
                    "form": {
                        "home": 46,
                        "away": 54
                    },
                    "att": {
                        "home": 50,
                        "away": 50
                    },
                    "def": {
                        "home": 40,
                        "away": 60
                    },
                    "poisson": {
                        "home": 100,
                        "away": 0
                    },
                    "h2h": {
                        "home": 71,
                        "away": 29
                    },
                    "goals": {
                        "home": 56,
                        "away": 44
                    }
                }
            },
            {
                "league": "LaLiga",
                "date": "2026-10-10",
                "time": "02:00",
                "home": "Malaga",
                "away": "Espanyol",
                "stadium": "La Rosaleda",
                "round": "Pekan 8",
                "statusCode": "NS",
                "homeLogo": "https://media.api-sports.io/football/teams/535.png",
                "awayLogo": "https://media.api-sports.io/football/teams/540.png",
                "prediction": "1 - 2",
                "odds": {
                    "home": 10,
                    "draw": 45,
                    "away": 45
                },
                "advice": "Double chance : draw or Espanyol",
                "comparison": {
                    "form": {
                        "home": 33,
                        "away": 67
                    },
                    "att": {
                        "home": 25,
                        "away": 75
                    },
                    "def": {
                        "home": 47,
                        "away": 53
                    },
                    "poisson": {
                        "home": 28,
                        "away": 72
                    },
                    "h2h": {
                        "home": 7,
                        "away": 93
                    },
                    "goals": {
                        "home": 7,
                        "away": 93
                    }
                }
            },
            {
                "league": "Primeira Liga",
                "date": "2026-10-10",
                "time": "02:15",
                "home": "SC Braga",
                "away": "Sporting CP",
                "stadium": "Estádio Municipal de Braga",
                "round": "Pekan 8",
                "statusCode": "NS",
                "homeLogo": "https://media.api-sports.io/football/teams/217.png",
                "awayLogo": "https://media.api-sports.io/football/teams/228.png",
                "prediction": "1 - 2",
                "odds": {
                    "home": 10,
                    "draw": 45,
                    "away": 45
                },
                "advice": "Combo Winner : Sporting CP and -3.5 goals",
                "comparison": {
                    "form": {
                        "home": 48,
                        "away": 52
                    },
                    "att": {
                        "home": 29,
                        "away": 71
                    },
                    "def": {
                        "home": 57,
                        "away": 43
                    },
                    "poisson": {
                        "home": 100,
                        "away": 0
                    },
                    "h2h": {
                        "home": 25,
                        "away": 75
                    },
                    "goals": {
                        "home": 32,
                        "away": 68
                    }
                }
            },
            {
                "league": "Liga de Expansion MX",
                "date": "2026-10-10",
                "time": "06:00",
                "home": "Tapatío",
                "away": "CA La Paz",
                "stadium": "Estadio Akron",
                "round": "Apertura - 12",
                "statusCode": "NS",
                "homeLogo": "https://media.api-sports.io/football/teams/14278.png",
                "awayLogo": "https://media.api-sports.io/football/teams/19024.png",
                "prediction": "1 - 2",
                "odds": {
                    "home": 10,
                    "draw": 45,
                    "away": 45
                },
                "advice": "Double chance : draw or CA La Paz",
                "comparison": {
                    "form": {
                        "home": 29,
                        "away": 71
                    },
                    "att": {
                        "home": 37,
                        "away": 63
                    },
                    "def": {
                        "home": 43,
                        "away": 57
                    },
                    "poisson": {
                        "home": 41,
                        "away": 59
                    },
                    "h2h": {
                        "home": 50,
                        "away": 50
                    },
                    "goals": {
                        "home": 43,
                        "away": 57
                    }
                }
            },
            {
                "league": "Liga MX",
                "date": "2026-10-10",
                "time": "08:00",
                "home": "Puebla",
                "away": "Leon",
                "stadium": "Estadio Cuauhtémoc",
                "round": "Apertura - 11",
                "statusCode": "NS",
                "homeLogo": "https://media.api-sports.io/football/teams/2291.png",
                "awayLogo": "https://media.api-sports.io/football/teams/2289.png",
                "prediction": "1 - 2",
                "odds": {
                    "home": 10,
                    "draw": 45,
                    "away": 45
                },
                "advice": "Double chance : draw or Leon",
                "comparison": {
                    "form": {
                        "home": 33,
                        "away": 67
                    },
                    "att": {
                        "home": 22,
                        "away": 78
                    },
                    "def": {
                        "home": 55,
                        "away": 45
                    },
                    "poisson": {
                        "home": 56,
                        "away": 44
                    },
                    "h2h": {
                        "home": 29,
                        "away": 71
                    },
                    "goals": {
                        "home": 42,
                        "away": 58
                    }
                }
            },
            {
                "league": "Liga de Expansion MX",
                "date": "2026-10-10",
                "time": "08:00",
                "home": "Tepatitlán",
                "away": "Monarcas",
                "stadium": "",
                "round": "Apertura - 12",
                "statusCode": "NS",
                "homeLogo": "https://media.api-sports.io/football/teams/14279.png",
                "awayLogo": "https://media.api-sports.io/football/teams/2284.png",
                "prediction": "1 - 3",
                "odds": {
                    "home": 10,
                    "draw": 45,
                    "away": 45
                },
                "advice": "Double chance : draw or Monarcas",
                "comparison": {
                    "form": {
                        "home": 23,
                        "away": 77
                    },
                    "att": {
                        "home": 31,
                        "away": 69
                    },
                    "def": {
                        "home": 19,
                        "away": 81
                    },
                    "poisson": {
                        "home": 20,
                        "away": 80
                    },
                    "h2h": {
                        "home": 60,
                        "away": 40
                    },
                    "goals": {
                        "home": 55,
                        "away": 45
                    }
                }
            },
            {
                "league": "Liga MX",
                "date": "2026-10-10",
                "time": "10:00",
                "home": "Tigres UANL",
                "away": "Toluca",
                "stadium": "Estadio Universitario",
                "round": "Apertura - 11",
                "statusCode": "NS",
                "homeLogo": "https://media.api-sports.io/football/teams/2279.png",
                "awayLogo": "https://media.api-sports.io/football/teams/2281.png",
                "prediction": "1 - 2",
                "odds": {
                    "home": 10,
                    "draw": 45,
                    "away": 45
                },
                "advice": "Double chance : draw or Toluca",
                "comparison": {
                    "form": {
                        "home": 38,
                        "away": 63
                    },
                    "att": {
                        "home": 12,
                        "away": 88
                    },
                    "def": {
                        "home": 73,
                        "away": 27
                    },
                    "poisson": {
                        "home": 47,
                        "away": 53
                    },
                    "h2h": {
                        "home": 50,
                        "away": 50
                    },
                    "goals": {
                        "home": 47,
                        "away": 53
                    }
                }
            },
            {
                "league": "Liga 1 (Indonesia)",
                "date": "2026-10-10",
                "time": "15:30",
                "home": "Arema FC",
                "away": "Bhayangkara FC",
                "stadium": "Kanjuruhan Stadium",
                "round": "Pekan 4",
                "statusCode": "NS",
                "homeLogo": "https://media.api-sports.io/football/teams/2438.png",
                "awayLogo": "https://media.api-sports.io/football/teams/2443.png",
                "prediction": "3 - 2",
                "odds": {
                    "home": 45,
                    "draw": 45,
                    "away": 10
                },
                "advice": "Double chance : Arema FC or draw",
                "comparison": {
                    "form": {
                        "home": 50,
                        "away": 50
                    },
                    "att": {
                        "home": 62,
                        "away": 38
                    },
                    "def": {
                        "home": 43,
                        "away": 57
                    },
                    "poisson": {
                        "home": 79,
                        "away": 21
                    },
                    "h2h": {
                        "home": 50,
                        "away": 50
                    },
                    "goals": {
                        "home": 45,
                        "away": 55
                    }
                }
            },
            {
                "league": "Liga 1 (Indonesia)",
                "date": "2026-10-10",
                "time": "15:30",
                "home": "PSIM Yogyakarta",
                "away": "Persija",
                "stadium": "Mandala Krida Stadium",
                "round": "Pekan 4",
                "statusCode": "NS",
                "homeLogo": "https://media.api-sports.io/football/teams/4235.png",
                "awayLogo": "https://media.api-sports.io/football/teams/10134.png",
                "prediction": "1 - 2",
                "odds": {
                    "home": 34,
                    "draw": 50,
                    "away": 50
                },
                "advice": "Combo Double chance : draw or Persija and -3.5 goals",
                "comparison": {
                    "form": {
                        "home": 10,
                        "away": 90
                    },
                    "att": {
                        "home": 33,
                        "away": 67
                    },
                    "def": {
                        "home": 20,
                        "away": 80
                    },
                    "poisson": {
                        "home": 0,
                        "away": 100
                    },
                    "h2h": {
                        "home": 20,
                        "away": 80
                    },
                    "goals": {
                        "home": 25,
                        "away": 75
                    }
                }
            },
            {
                "league": "Liga 1 (Indonesia)",
                "date": "2026-10-10",
                "time": "15:30",
                "home": "Persita",
                "away": "Garudayaksa",
                "stadium": "Utama Sport Center Kelapa Dua",
                "round": "Pekan 4",
                "statusCode": "NS",
                "homeLogo": "https://media.api-sports.io/football/teams/4244.png",
                "awayLogo": "https://media.api-sports.io/football/teams/26645.png",
                "prediction": "2 - 1",
                "odds": {
                    "home": 45,
                    "draw": 45,
                    "away": 10
                },
                "advice": "Double chance : Persita or draw",
                "comparison": {
                    "form": {
                        "home": 71,
                        "away": 29
                    },
                    "att": {
                        "home": 75,
                        "away": 25
                    },
                    "def": {
                        "home": 44,
                        "away": 56
                    },
                    "poisson": {
                        "home": 53,
                        "away": 47
                    },
                    "h2h": {
                        "home": 0,
                        "away": 0
                    },
                    "goals": {
                        "home": 0,
                        "away": 0
                    }
                }
            },
            {
                "league": "Super Lig",
                "date": "2026-10-10",
                "time": "17:30",
                "home": "Gençlerbirliği S.K.",
                "away": "Amed",
                "stadium": "Eryaman Stadium",
                "round": "Pekan 7",
                "statusCode": "NS",
                "homeLogo": "https://media.api-sports.io/football/teams/997.png",
                "awayLogo": "https://media.api-sports.io/football/teams/3579.png",
                "prediction": "1 - 2",
                "odds": {
                    "home": 10,
                    "draw": 45,
                    "away": 45
                },
                "advice": "Double chance : draw or Amed",
                "comparison": {
                    "form": {
                        "home": 29,
                        "away": 71
                    },
                    "att": {
                        "home": 20,
                        "away": 80
                    },
                    "def": {
                        "home": 37,
                        "away": 63
                    },
                    "poisson": {
                        "home": 57,
                        "away": 43
                    },
                    "h2h": {
                        "home": 80,
                        "away": 20
                    },
                    "goals": {
                        "home": 87,
                        "away": 13
                    }
                }
            },
            {
                "league": "Premier League",
                "date": "2026-10-10",
                "time": "18:30",
                "home": "Arsenal",
                "away": "Leeds",
                "stadium": "Emirates Stadium",
                "round": "Pekan 6",
                "statusCode": "NS",
                "homeLogo": "https://media.api-sports.io/football/teams/42.png",
                "awayLogo": "https://media.api-sports.io/football/teams/63.png",
                "prediction": "2 - 1",
                "odds": {
                    "home": 45,
                    "draw": 45,
                    "away": 10
                },
                "advice": "Combo Double chance : Arsenal or draw and -3.5 goals",
                "comparison": {
                    "form": {
                        "home": 57,
                        "away": 43
                    },
                    "att": {
                        "home": 53,
                        "away": 47
                    },
                    "def": {
                        "home": 43,
                        "away": 57
                    },
                    "poisson": {
                        "home": 68,
                        "away": 32
                    },
                    "h2h": {
                        "home": 100,
                        "away": 0
                    },
                    "goals": {
                        "home": 89,
                        "away": 11
                    }
                }
            },
            {
                "league": "LaLiga",
                "date": "2026-10-10",
                "time": "19:00",
                "home": "Rayo Vallecano",
                "away": "Athletic Club",
                "stadium": "Estadio de Vallecas",
                "round": "Pekan 8",
                "statusCode": "NS",
                "homeLogo": "https://media.api-sports.io/football/teams/728.png",
                "awayLogo": "https://media.api-sports.io/football/teams/531.png",
                "prediction": "1 - 2",
                "odds": {
                    "home": 10,
                    "draw": 45,
                    "away": 45
                },
                "advice": "Double chance : draw or Athletic Club",
                "comparison": {
                    "form": {
                        "home": 47,
                        "away": 53
                    },
                    "att": {
                        "home": 60,
                        "away": 40
                    },
                    "def": {
                        "home": 19,
                        "away": 81
                    },
                    "poisson": {
                        "home": 54,
                        "away": 46
                    },
                    "h2h": {
                        "home": 7,
                        "away": 93
                    },
                    "goals": {
                        "home": 27,
                        "away": 73
                    }
                }
            },
            {
                "league": "Liga 1 (Indonesia)",
                "date": "2026-10-10",
                "time": "19:00",
                "home": "Bali United",
                "away": "Persijap",
                "stadium": "Kapten I Wayan Dipta Stadium",
                "round": "Pekan 4",
                "statusCode": "NS",
                "homeLogo": "https://media.api-sports.io/football/teams/2448.png",
                "awayLogo": "https://media.api-sports.io/football/teams/11132.png",
                "prediction": "2 - 1",
                "odds": {
                    "home": 50,
                    "draw": 50,
                    "away": 33
                },
                "advice": "Winner : Bali United",
                "comparison": {
                    "form": {
                        "home": 100,
                        "away": 0
                    },
                    "att": {
                        "home": 86,
                        "away": 14
                    },
                    "def": {
                        "home": 63,
                        "away": 38
                    },
                    "poisson": {
                        "home": 100,
                        "away": 0
                    },
                    "h2h": {
                        "home": 80,
                        "away": 20
                    },
                    "goals": {
                        "home": 67,
                        "away": 33
                    }
                }
            },
            {
                "league": "Serie A",
                "date": "2026-10-10",
                "time": "20:00",
                "home": "Genoa",
                "away": "Fiorentina",
                "stadium": "Luigi Ferraris",
                "round": "Pekan 6",
                "statusCode": "NS",
                "homeLogo": "https://media.api-sports.io/football/teams/495.png",
                "awayLogo": "https://media.api-sports.io/football/teams/502.png",
                "prediction": "2 - 3",
                "odds": {
                    "home": 10,
                    "draw": 45,
                    "away": 45
                },
                "advice": "Winner : Fiorentina",
                "comparison": {
                    "form": {
                        "home": 20,
                        "away": 80
                    },
                    "att": {
                        "home": 33,
                        "away": 67
                    },
                    "def": {
                        "home": 55,
                        "away": 45
                    },
                    "poisson": {
                        "home": 29,
                        "away": 71
                    },
                    "h2h": {
                        "home": 25,
                        "away": 75
                    },
                    "goals": {
                        "home": 40,
                        "away": 60
                    }
                }
            },
            {
                "league": "Super Lig",
                "date": "2026-10-10",
                "time": "20:00",
                "home": "Alanyaspor",
                "away": "Erzurumspor FK",
                "stadium": "Alanya Oba Stadium",
                "round": "Pekan 7",
                "statusCode": "NS",
                "homeLogo": "https://media.api-sports.io/football/teams/996.png",
                "awayLogo": "https://media.api-sports.io/football/teams/1009.png",
                "prediction": "2 - 1",
                "odds": {
                    "home": 45,
                    "draw": 45,
                    "away": 10
                },
                "advice": "Double chance : Alanyaspor or draw",
                "comparison": {
                    "form": {
                        "home": 59,
                        "away": 41
                    },
                    "att": {
                        "home": 70,
                        "away": 30
                    },
                    "def": {
                        "home": 62,
                        "away": 38
                    },
                    "poisson": {
                        "home": 87,
                        "away": 13
                    },
                    "h2h": {
                        "home": 50,
                        "away": 50
                    },
                    "goals": {
                        "home": 56,
                        "away": 44
                    }
                }
            },
            {
                "league": "Super Lig",
                "date": "2026-10-10",
                "time": "20:00",
                "home": "Samsunspor",
                "away": "Trabzonspor",
                "stadium": "Samsun 19 Mayis Stadyumu",
                "round": "Pekan 7",
                "statusCode": "NS",
                "homeLogo": "https://media.api-sports.io/football/teams/3603.png",
                "awayLogo": "https://media.api-sports.io/football/teams/998.png",
                "prediction": "1 - 2",
                "odds": {
                    "home": 34,
                    "draw": 50,
                    "away": 50
                },
                "advice": "Winner : Trabzonspor",
                "comparison": {
                    "form": {
                        "home": 25,
                        "away": 75
                    },
                    "att": {
                        "home": 20,
                        "away": 80
                    },
                    "def": {
                        "home": 31,
                        "away": 69
                    },
                    "poisson": {
                        "home": 35,
                        "away": 65
                    },
                    "h2h": {
                        "home": 38,
                        "away": 62
                    },
                    "goals": {
                        "home": 38,
                        "away": 62
                    }
                }
            },
            {
                "league": "Bundesliga",
                "date": "2026-10-10",
                "time": "20:30",
                "home": "FSV Mainz 05",
                "away": "Bayer Leverkusen",
                "stadium": "MEWA Arena",
                "round": "Pekan 5",
                "statusCode": "NS",
                "homeLogo": "https://media.api-sports.io/football/teams/164.png",
                "awayLogo": "https://media.api-sports.io/football/teams/168.png",
                "prediction": "2 - 3",
                "odds": {
                    "home": 10,
                    "draw": 45,
                    "away": 45
                },
                "advice": "Double chance : draw or Bayer Leverkusen",
                "comparison": {
                    "form": {
                        "home": 50,
                        "away": 50
                    },
                    "att": {
                        "home": 50,
                        "away": 50
                    },
                    "def": {
                        "home": 45,
                        "away": 55
                    },
                    "poisson": {
                        "home": 20,
                        "away": 80
                    },
                    "h2h": {
                        "home": 15,
                        "away": 85
                    },
                    "goals": {
                        "home": 41,
                        "away": 59
                    }
                }
            },
            {
                "league": "Bundesliga",
                "date": "2026-10-10",
                "time": "20:30",
                "home": "1899 Hoffenheim",
                "away": "Hamburger SV",
                "stadium": "Prezero Arena",
                "round": "Pekan 5",
                "statusCode": "NS",
                "homeLogo": "https://media.api-sports.io/football/teams/167.png",
                "awayLogo": "https://media.api-sports.io/football/teams/175.png",
                "prediction": "3 - 2",
                "odds": {
                    "home": 45,
                    "draw": 45,
                    "away": 10
                },
                "advice": "Winner : 1899 Hoffenheim",
                "comparison": {
                    "form": {
                        "home": 50,
                        "away": 50
                    },
                    "att": {
                        "home": 78,
                        "away": 22
                    },
                    "def": {
                        "home": 57,
                        "away": 43
                    },
                    "poisson": {
                        "home": 100,
                        "away": 0
                    },
                    "h2h": {
                        "home": 60,
                        "away": 40
                    },
                    "goals": {
                        "home": 56,
                        "away": 44
                    }
                }
            },
            {
                "league": "Bundesliga",
                "date": "2026-10-10",
                "time": "20:30",
                "home": "FC Augsburg",
                "away": "Bayern München",
                "stadium": "WWK Arena",
                "round": "Pekan 5",
                "statusCode": "NS",
                "homeLogo": "https://media.api-sports.io/football/teams/170.png",
                "awayLogo": "https://media.api-sports.io/football/teams/157.png",
                "prediction": "2 - 3",
                "odds": {
                    "home": 10,
                    "draw": 45,
                    "away": 45
                },
                "advice": "Double chance : draw or Bayern München",
                "comparison": {
                    "form": {
                        "home": 41,
                        "away": 59
                    },
                    "att": {
                        "home": 44,
                        "away": 56
                    },
                    "def": {
                        "home": 25,
                        "away": 75
                    },
                    "poisson": {
                        "home": 43,
                        "away": 57
                    },
                    "h2h": {
                        "home": 20,
                        "away": 80
                    },
                    "goals": {
                        "home": 35,
                        "away": 65
                    }
                }
            },
            {
                "league": "Bundesliga",
                "date": "2026-10-10",
                "time": "20:30",
                "home": "Union Berlin",
                "away": "SV Elversberg",
                "stadium": "An der Alten Försterei",
                "round": "Pekan 5",
                "statusCode": "NS",
                "homeLogo": "https://media.api-sports.io/football/teams/182.png",
                "awayLogo": "https://media.api-sports.io/football/teams/1660.png",
                "prediction": "1 - 3",
                "odds": {
                    "home": 34,
                    "draw": 50,
                    "away": 50
                },
                "advice": "Combo Winner : SV Elversberg and +1.5 goals",
                "comparison": {
                    "form": {
                        "home": 13,
                        "away": 88
                    },
                    "att": {
                        "home": 33,
                        "away": 67
                    },
                    "def": {
                        "home": 29,
                        "away": 71
                    },
                    "poisson": {
                        "home": 23,
                        "away": 77
                    },
                    "h2h": {
                        "home": 0,
                        "away": 0
                    },
                    "goals": {
                        "home": 0,
                        "away": 0
                    }
                }
            },
            {
                "league": "Bundesliga",
                "date": "2026-10-10",
                "time": "20:30",
                "home": "SC Paderborn 07",
                "away": "VfB Stuttgart",
                "stadium": "Home Deluxe Arena",
                "round": "Pekan 5",
                "statusCode": "NS",
                "homeLogo": "https://media.api-sports.io/football/teams/185.png",
                "awayLogo": "https://media.api-sports.io/football/teams/172.png",
                "prediction": "2 - 1",
                "odds": {
                    "home": 10,
                    "draw": 45,
                    "away": 45
                },
                "advice": "Double chance : draw or VfB Stuttgart",
                "comparison": {
                    "form": {
                        "home": 57,
                        "away": 43
                    },
                    "att": {
                        "home": 33,
                        "away": 67
                    },
                    "def": {
                        "home": 64,
                        "away": 36
                    },
                    "poisson": {
                        "home": 76,
                        "away": 24
                    },
                    "h2h": {
                        "home": 13,
                        "away": 88
                    },
                    "goals": {
                        "home": 33,
                        "away": 67
                    }
                }
            },
            {
                "league": "Premier League",
                "date": "2026-10-10",
                "time": "21:00",
                "home": "Chelsea",
                "away": "Bournemouth",
                "stadium": "Stamford Bridge",
                "round": "Pekan 6",
                "statusCode": "NS",
                "homeLogo": "https://media.api-sports.io/football/teams/49.png",
                "awayLogo": "https://media.api-sports.io/football/teams/35.png",
                "prediction": "3 - 2",
                "odds": {
                    "home": 45,
                    "draw": 45,
                    "away": 10
                },
                "advice": "Combo Double chance : Chelsea or draw and +1.5 goals",
                "comparison": {
                    "form": {
                        "home": 70,
                        "away": 30
                    },
                    "att": {
                        "home": 63,
                        "away": 38
                    },
                    "def": {
                        "home": 40,
                        "away": 60
                    },
                    "poisson": {
                        "home": 58,
                        "away": 42
                    },
                    "h2h": {
                        "home": 75,
                        "away": 25
                    },
                    "goals": {
                        "home": 58,
                        "away": 42
                    }
                }
            },
            {
                "league": "Premier League",
                "date": "2026-10-10",
                "time": "21:00",
                "home": "Ipswich",
                "away": "Fulham",
                "stadium": "Portman Road Stadium",
                "round": "Pekan 6",
                "statusCode": "NS",
                "homeLogo": "https://media.api-sports.io/football/teams/57.png",
                "awayLogo": "https://media.api-sports.io/football/teams/36.png",
                "prediction": "2 - 2",
                "odds": {
                    "home": 35,
                    "draw": 35,
                    "away": 30
                },
                "advice": "Double chance : Ipswich or draw",
                "comparison": {
                    "form": {
                        "home": 75,
                        "away": 25
                    },
                    "att": {
                        "home": 58,
                        "away": 42
                    },
                    "def": {
                        "home": 42,
                        "away": 58
                    },
                    "poisson": {
                        "home": 100,
                        "away": 0
                    },
                    "h2h": {
                        "home": 15,
                        "away": 85
                    },
                    "goals": {
                        "home": 31,
                        "away": 69
                    }
                }
            },
            {
                "league": "Premier League",
                "date": "2026-10-10",
                "time": "21:00",
                "home": "Aston Villa",
                "away": "Brentford",
                "stadium": "Villa Park",
                "round": "Pekan 6",
                "statusCode": "NS",
                "homeLogo": "https://media.api-sports.io/football/teams/66.png",
                "awayLogo": "https://media.api-sports.io/football/teams/55.png",
                "prediction": "1 - 2",
                "odds": {
                    "home": 10,
                    "draw": 45,
                    "away": 45
                },
                "advice": "Double chance : draw or Brentford",
                "comparison": {
                    "form": {
                        "home": 31,
                        "away": 69
                    },
                    "att": {
                        "home": 29,
                        "away": 71
                    },
                    "def": {
                        "home": 31,
                        "away": 69
                    },
                    "poisson": {
                        "home": 22,
                        "away": 78
                    },
                    "h2h": {
                        "home": 40,
                        "away": 60
                    },
                    "goals": {
                        "home": 50,
                        "away": 50
                    }
                }
            },
            {
                "league": "Premier League",
                "date": "2026-10-10",
                "time": "21:00",
                "home": "Sunderland",
                "away": "Brighton",
                "stadium": "Stadium of Light",
                "round": "Pekan 6",
                "statusCode": "NS",
                "homeLogo": "https://media.api-sports.io/football/teams/746.png",
                "awayLogo": "https://media.api-sports.io/football/teams/51.png",
                "prediction": "1 - 3",
                "odds": {
                    "home": 34,
                    "draw": 50,
                    "away": 50
                },
                "advice": "Winner : Brighton",
                "comparison": {
                    "form": {
                        "home": 29,
                        "away": 71
                    },
                    "att": {
                        "home": 27,
                        "away": 73
                    },
                    "def": {
                        "home": 33,
                        "away": 67
                    },
                    "poisson": {
                        "home": 18,
                        "away": 82
                    },
                    "h2h": {
                        "home": 13,
                        "away": 88
                    },
                    "goals": {
                        "home": 0,
                        "away": 100
                    }
                }
            },
            {
                "league": "Jupiler Pro League",
                "date": "2026-10-10",
                "time": "21:00",
                "home": "Cercle Brugge",
                "away": "Anderlecht",
                "stadium": "Jan Breydel Stadion",
                "round": "Pekan 8",
                "statusCode": "NS",
                "homeLogo": "https://media.api-sports.io/football/teams/741.png",
                "awayLogo": "https://media.api-sports.io/football/teams/554.png",
                "prediction": "1 - 2",
                "odds": {
                    "home": 10,
                    "draw": 45,
                    "away": 45
                },
                "advice": "Combo Double chance : draw or Anderlecht and -3.5 goals",
                "comparison": {
                    "form": {
                        "home": 9,
                        "away": 91
                    },
                    "att": {
                        "home": 38,
                        "away": 63
                    },
                    "def": {
                        "home": 25,
                        "away": 75
                    },
                    "poisson": {
                        "home": 56,
                        "away": 44
                    },
                    "h2h": {
                        "home": 29,
                        "away": 71
                    },
                    "goals": {
                        "home": 24,
                        "away": 76
                    }
                }
            },
            {
                "league": "Scottish Premiership",
                "date": "2026-10-10",
                "time": "21:00",
                "home": "Heart Of Midlothian",
                "away": "ST Mirren",
                "stadium": "Tynecastle Park",
                "round": "Pekan 8",
                "statusCode": "NS",
                "homeLogo": "https://media.api-sports.io/football/teams/254.png",
                "awayLogo": "https://media.api-sports.io/football/teams/251.png",
                "prediction": "2 - 1",
                "odds": {
                    "home": 45,
                    "draw": 45,
                    "away": 10
                },
                "advice": "Double chance : Heart Of Midlothian or draw",
                "comparison": {
                    "form": {
                        "home": 71,
                        "away": 29
                    },
                    "att": {
                        "home": 64,
                        "away": 36
                    },
                    "def": {
                        "home": 60,
                        "away": 40
                    },
                    "poisson": {
                        "home": 60,
                        "away": 40
                    },
                    "h2h": {
                        "home": 50,
                        "away": 50
                    },
                    "goals": {
                        "home": 57,
                        "away": 43
                    }
                }
            },
            {
                "league": "Scottish Premiership",
                "date": "2026-10-10",
                "time": "21:00",
                "home": "Rangers",
                "away": "Kilmarnock",
                "stadium": "Ibrox Stadium",
                "round": "Pekan 8",
                "statusCode": "NS",
                "homeLogo": "https://media.api-sports.io/football/teams/257.png",
                "awayLogo": "https://media.api-sports.io/football/teams/250.png",
                "prediction": "1 - 0",
                "odds": {
                    "home": 50,
                    "draw": 50,
                    "away": 33
                },
                "advice": "Combo Double chance : Rangers or draw and -3.5 goals",
                "comparison": {
                    "form": {
                        "home": 75,
                        "away": 25
                    },
                    "att": {
                        "home": 75,
                        "away": 25
                    },
                    "def": {
                        "home": 86,
                        "away": 14
                    },
                    "poisson": {
                        "home": 63,
                        "away": 37
                    },
                    "h2h": {
                        "home": 100,
                        "away": 0
                    },
                    "goals": {
                        "home": 84,
                        "away": 16
                    }
                }
            },
            {
                "league": "Scottish Premiership",
                "date": "2026-10-10",
                "time": "21:00",
                "home": "Dundee Utd",
                "away": "Hibernian",
                "stadium": "CalForth Construction Arena",
                "round": "Pekan 8",
                "statusCode": "NS",
                "homeLogo": "https://media.api-sports.io/football/teams/1386.png",
                "awayLogo": "https://media.api-sports.io/football/teams/249.png",
                "prediction": "2 - 1",
                "odds": {
                    "home": 10,
                    "draw": 45,
                    "away": 45
                },
                "advice": "Double chance : draw or Hibernian",
                "comparison": {
                    "form": {
                        "home": 64,
                        "away": 36
                    },
                    "att": {
                        "home": 62,
                        "away": 38
                    },
                    "def": {
                        "home": 57,
                        "away": 43
                    },
                    "poisson": {
                        "home": 31,
                        "away": 69
                    },
                    "h2h": {
                        "home": 15,
                        "away": 85
                    },
                    "goals": {
                        "home": 38,
                        "away": 62
                    }
                }
            },
            {
                "league": "Scottish Premiership",
                "date": "2026-10-10",
                "time": "21:00",
                "home": "Falkirk",
                "away": "Dundee",
                "stadium": "Falkirk Stadium",
                "round": "Pekan 8",
                "statusCode": "NS",
                "homeLogo": "https://media.api-sports.io/football/teams/1389.png",
                "awayLogo": "https://media.api-sports.io/football/teams/253.png",
                "prediction": "1 - 2",
                "odds": {
                    "home": 10,
                    "draw": 45,
                    "away": 45
                },
                "advice": "Double chance : draw or Dundee",
                "comparison": {
                    "form": {
                        "home": 42,
                        "away": 58
                    },
                    "att": {
                        "home": 46,
                        "away": 54
                    },
                    "def": {
                        "home": 46,
                        "away": 54
                    },
                    "poisson": {
                        "home": 41,
                        "away": 59
                    },
                    "h2h": {
                        "home": 40,
                        "away": 60
                    },
                    "goals": {
                        "home": 27,
                        "away": 73
                    }
                }
            },
            {
                "league": "LaLiga",
                "date": "2026-10-10",
                "time": "21:15",
                "home": "Alaves",
                "away": "Atletico Madrid",
                "stadium": "Estadio de Mendizorroza",
                "round": "Pekan 8",
                "statusCode": "NS",
                "homeLogo": "https://media.api-sports.io/football/teams/542.png",
                "awayLogo": "https://media.api-sports.io/football/teams/530.png",
                "prediction": "1 - 2",
                "odds": {
                    "home": 10,
                    "draw": 45,
                    "away": 45
                },
                "advice": "Double chance : draw or Atletico Madrid",
                "comparison": {
                    "form": {
                        "home": 37,
                        "away": 63
                    },
                    "att": {
                        "home": 37,
                        "away": 63
                    },
                    "def": {
                        "home": 50,
                        "away": 50
                    },
                    "poisson": {
                        "home": 61,
                        "away": 39
                    },
                    "h2h": {
                        "home": 38,
                        "away": 62
                    },
                    "goals": {
                        "home": 50,
                        "away": 50
                    }
                }
            },
            {
                "league": "Primeira Liga",
                "date": "2026-10-10",
                "time": "21:30",
                "home": "Casa Pia",
                "away": "Santa Clara",
                "stadium": "Estadio Municipal de Rio Maior",
                "round": "Pekan 8",
                "statusCode": "NS",
                "homeLogo": "https://media.api-sports.io/football/teams/4716.png",
                "awayLogo": "https://media.api-sports.io/football/teams/227.png",
                "prediction": "1 - 2",
                "odds": {
                    "home": 34,
                    "draw": 50,
                    "away": 50
                },
                "advice": "Winner : Santa Clara",
                "comparison": {
                    "form": {
                        "home": 27,
                        "away": 73
                    },
                    "att": {
                        "home": 27,
                        "away": 73
                    },
                    "def": {
                        "home": 20,
                        "away": 80
                    },
                    "poisson": {
                        "home": 4,
                        "away": 96
                    },
                    "h2h": {
                        "home": 29,
                        "away": 71
                    },
                    "goals": {
                        "home": 33,
                        "away": 67
                    }
                }
            },
            {
                "league": "Eredivisie",
                "date": "2026-10-10",
                "time": "21:30",
                "home": "GO Ahead Eagles",
                "away": "Sparta Rotterdam",
                "stadium": "De Adelaarshorst",
                "round": "Pekan 8",
                "statusCode": "NS",
                "homeLogo": "https://media.api-sports.io/football/teams/410.png",
                "awayLogo": "https://media.api-sports.io/football/teams/426.png",
                "prediction": "3 - 2",
                "odds": {
                    "home": 45,
                    "draw": 45,
                    "away": 10
                },
                "advice": "Combo Double chance : GO Ahead Eagles or draw and +1.5 goals",
                "comparison": {
                    "form": {
                        "home": 75,
                        "away": 25
                    },
                    "att": {
                        "home": 59,
                        "away": 41
                    },
                    "def": {
                        "home": 58,
                        "away": 42
                    },
                    "poisson": {
                        "home": 82,
                        "away": 18
                    },
                    "h2h": {
                        "home": 62,
                        "away": 38
                    },
                    "goals": {
                        "home": 46,
                        "away": 54
                    }
                }
            },
            {
                "league": "Ligue 1",
                "date": "2026-10-10",
                "time": "22:15",
                "home": "Lille",
                "away": "Le Havre",
                "stadium": "Stade Pierre-Mauroy",
                "round": "Pekan 6",
                "statusCode": "NS",
                "homeLogo": "https://media.api-sports.io/football/teams/79.png",
                "awayLogo": "https://media.api-sports.io/football/teams/111.png",
                "prediction": "2 - 1",
                "odds": {
                    "home": 50,
                    "draw": 50,
                    "away": 33
                },
                "advice": "Winner : Lille",
                "comparison": {
                    "form": {
                        "home": 83,
                        "away": 17
                    },
                    "att": {
                        "home": 67,
                        "away": 33
                    },
                    "def": {
                        "home": 64,
                        "away": 36
                    },
                    "poisson": {
                        "home": 69,
                        "away": 31
                    },
                    "h2h": {
                        "home": 71,
                        "away": 29
                    },
                    "goals": {
                        "home": 75,
                        "away": 25
                    }
                }
            },
            {
                "league": "Serie A",
                "date": "2026-10-10",
                "time": "23:00",
                "home": "Inter",
                "away": "Parma",
                "stadium": "San Siro/Giuseppe Meazza",
                "round": "Pekan 6",
                "statusCode": "NS",
                "homeLogo": "https://media.api-sports.io/football/teams/505.png",
                "awayLogo": "https://media.api-sports.io/football/teams/523.png",
                "prediction": "2 - 1",
                "odds": {
                    "home": 45,
                    "draw": 45,
                    "away": 10
                },
                "advice": "Combo Winner : Inter and +1.5 goals",
                "comparison": {
                    "form": {
                        "home": 76,
                        "away": 24
                    },
                    "att": {
                        "home": 79,
                        "away": 21
                    },
                    "def": {
                        "home": 47,
                        "away": 53
                    },
                    "poisson": {
                        "home": 88,
                        "away": 12
                    },
                    "h2h": {
                        "home": 93,
                        "away": 7
                    },
                    "goals": {
                        "home": 73,
                        "away": 27
                    }
                }
            },
            {
                "league": "Super Lig",
                "date": "2026-10-10",
                "time": "23:00",
                "home": "Rizespor",
                "away": "Fenerbahçe",
                "stadium": "",
                "round": "Pekan 7",
                "statusCode": "NS",
                "homeLogo": "https://media.api-sports.io/football/teams/1007.png",
                "awayLogo": "https://media.api-sports.io/football/teams/611.png",
                "prediction": "1 - 2",
                "odds": {
                    "home": 34,
                    "draw": 50,
                    "away": 50
                },
                "advice": "Double chance : draw or Fenerbahçe",
                "comparison": {
                    "form": {
                        "home": 41,
                        "away": 59
                    },
                    "att": {
                        "home": 29,
                        "away": 71
                    },
                    "def": {
                        "home": 40,
                        "away": 60
                    },
                    "poisson": {
                        "home": 0,
                        "away": 100
                    },
                    "h2h": {
                        "home": 7,
                        "away": 93
                    },
                    "goals": {
                        "home": 28,
                        "away": 72
                    }
                }
            },
            {
                "league": "Jupiler Pro League",
                "date": "2026-10-10",
                "time": "23:15",
                "home": "RAAL La Louvière",
                "away": "Club Brugge KV",
                "stadium": "Easi Arena",
                "round": "Pekan 8",
                "statusCode": "NS",
                "homeLogo": "https://media.api-sports.io/football/teams/5902.png",
                "awayLogo": "https://media.api-sports.io/football/teams/569.png",
                "prediction": "1 - 2",
                "odds": {
                    "home": 10,
                    "draw": 45,
                    "away": 45
                },
                "advice": "Double chance : draw or Club Brugge KV",
                "comparison": {
                    "form": {
                        "home": 25,
                        "away": 75
                    },
                    "att": {
                        "home": 36,
                        "away": 64
                    },
                    "def": {
                        "home": 23,
                        "away": 77
                    },
                    "poisson": {
                        "home": 30,
                        "away": 70
                    },
                    "h2h": {
                        "home": 100,
                        "away": 0
                    },
                    "goals": {
                        "home": 67,
                        "away": 33
                    }
                }
            },
            {
                "league": "Premier League",
                "date": "2026-10-10",
                "time": "23:30",
                "home": "Manchester United",
                "away": "Tottenham",
                "stadium": "Old Trafford",
                "round": "Pekan 6",
                "statusCode": "NS",
                "homeLogo": "https://media.api-sports.io/football/teams/33.png",
                "awayLogo": "https://media.api-sports.io/football/teams/47.png",
                "prediction": "2 - 1",
                "odds": {
                    "home": 45,
                    "draw": 45,
                    "away": 10
                },
                "advice": "Winner : Manchester United",
                "comparison": {
                    "form": {
                        "home": 71,
                        "away": 29
                    },
                    "att": {
                        "home": 80,
                        "away": 20
                    },
                    "def": {
                        "home": 50,
                        "away": 50
                    },
                    "poisson": {
                        "home": 100,
                        "away": 0
                    },
                    "h2h": {
                        "home": 29,
                        "away": 71
                    },
                    "goals": {
                        "home": 47,
                        "away": 53
                    }
                }
            },
            {
                "league": "LaLiga",
                "date": "2026-10-10",
                "time": "23:30",
                "home": "Barcelona",
                "away": "Getafe",
                "stadium": "Spotify Camp Nou",
                "round": "Pekan 8",
                "statusCode": "NS",
                "homeLogo": "https://media.api-sports.io/football/teams/529.png",
                "awayLogo": "https://media.api-sports.io/football/teams/546.png",
                "prediction": "3 - 1",
                "odds": {
                    "home": 45,
                    "draw": 45,
                    "away": 10
                },
                "advice": "Combo Winner : Barcelona and +1.5 goals",
                "comparison": {
                    "form": {
                        "home": 75,
                        "away": 25
                    },
                    "att": {
                        "home": 89,
                        "away": 11
                    },
                    "def": {
                        "home": 36,
                        "away": 64
                    },
                    "poisson": {
                        "home": 100,
                        "away": 0
                    },
                    "h2h": {
                        "home": 93,
                        "away": 7
                    },
                    "goals": {
                        "home": 92,
                        "away": 8
                    }
                }
            },
            {
                "league": "Bundesliga",
                "date": "2026-10-10",
                "time": "23:30",
                "home": "RB Leipzig",
                "away": "Eintracht Frankfurt",
                "stadium": "Leipzig Red Bull Arena",
                "round": "Pekan 5",
                "statusCode": "NS",
                "homeLogo": "https://media.api-sports.io/football/teams/173.png",
                "awayLogo": "https://media.api-sports.io/football/teams/169.png",
                "prediction": "3 - 2",
                "odds": {
                    "home": 45,
                    "draw": 45,
                    "away": 10
                },
                "advice": "Combo Double chance : RB Leipzig or draw and +1.5 goals",
                "comparison": {
                    "form": {
                        "home": 55,
                        "away": 45
                    },
                    "att": {
                        "home": 50,
                        "away": 50
                    },
                    "def": {
                        "home": 67,
                        "away": 33
                    },
                    "poisson": {
                        "home": 100,
                        "away": 0
                    },
                    "h2h": {
                        "home": 80,
                        "away": 20
                    },
                    "goals": {
                        "home": 70,
                        "away": 30
                    }
                }
            },
            {
                "league": "Eredivisie",
                "date": "2026-10-10",
                "time": "23:45",
                "home": "Feyenoord",
                "away": "AZ Alkmaar",
                "stadium": "Stadion Feijenoord",
                "round": "Pekan 8",
                "statusCode": "NS",
                "homeLogo": "https://media.api-sports.io/football/teams/209.png",
                "awayLogo": "https://media.api-sports.io/football/teams/201.png",
                "prediction": "3 - 2",
                "odds": {
                    "home": 45,
                    "draw": 45,
                    "away": 10
                },
                "advice": "Combo Double chance : Feyenoord or draw and +1.5 goals",
                "comparison": {
                    "form": {
                        "home": 50,
                        "away": 50
                    },
                    "att": {
                        "home": 65,
                        "away": 35
                    },
                    "def": {
                        "home": 50,
                        "away": 50
                    },
                    "poisson": {
                        "home": 48,
                        "away": 52
                    },
                    "h2h": {
                        "home": 85,
                        "away": 15
                    },
                    "goals": {
                        "home": 63,
                        "away": 38
                    }
                }
            }
        ],
        "2026-10-11": [
            {
                "league": "MLS",
                "date": "2026-10-11",
                "time": "00:00",
                "home": "Toronto FC",
                "away": "CF Montreal",
                "stadium": "BMO Field",
                "round": "Pekan 28",
                "statusCode": "NS",
                "homeLogo": "https://media.api-sports.io/football/teams/1601.png",
                "awayLogo": "https://media.api-sports.io/football/teams/1614.png",
                "prediction": "3 - 2",
                "odds": {
                    "home": 45,
                    "draw": 45,
                    "away": 10
                },
                "advice": "Double chance : Toronto FC or draw",
                "comparison": {
                    "form": {
                        "home": 57,
                        "away": 43
                    },
                    "att": {
                        "home": 64,
                        "away": 36
                    },
                    "def": {
                        "home": 38,
                        "away": 62
                    },
                    "poisson": {
                        "home": 65,
                        "away": 35
                    },
                    "h2h": {
                        "home": 75,
                        "away": 25
                    },
                    "goals": {
                        "home": 71,
                        "away": 29
                    }
                }
            },
            {
                "league": "Primeira Liga",
                "date": "2026-10-11",
                "time": "00:00",
                "home": "Maritimo",
                "away": "FC Porto",
                "stadium": "Estádio do Marítimo",
                "round": "Pekan 8",
                "statusCode": "NS",
                "homeLogo": "https://media.api-sports.io/football/teams/214.png",
                "awayLogo": "https://media.api-sports.io/football/teams/212.png",
                "prediction": "1 - 3",
                "odds": {
                    "home": 34,
                    "draw": 50,
                    "away": 50
                },
                "advice": "Winner : FC Porto",
                "comparison": {
                    "form": {
                        "home": 12,
                        "away": 88
                    },
                    "att": {
                        "home": 26,
                        "away": 74
                    },
                    "def": {
                        "home": 21,
                        "away": 79
                    },
                    "poisson": {
                        "home": 7,
                        "away": 93
                    },
                    "h2h": {
                        "home": 7,
                        "away": 93
                    },
                    "goals": {
                        "home": 25,
                        "away": 75
                    }
                }
            },
            {
                "league": "Eredivisie",
                "date": "2026-10-11",
                "time": "01:00",
                "home": "Fortuna Sittard",
                "away": "Twente",
                "stadium": "Fortuna Sittard Stadion",
                "round": "Pekan 8",
                "statusCode": "NS",
                "homeLogo": "https://media.api-sports.io/football/teams/205.png",
                "awayLogo": "https://media.api-sports.io/football/teams/415.png",
                "prediction": "1 - 2",
                "odds": {
                    "home": 34,
                    "draw": 50,
                    "away": 50
                },
                "advice": "Double chance : draw or Twente",
                "comparison": {
                    "form": {
                        "home": 41,
                        "away": 59
                    },
                    "att": {
                        "home": 40,
                        "away": 60
                    },
                    "def": {
                        "home": 31,
                        "away": 69
                    },
                    "poisson": {
                        "home": 29,
                        "away": 71
                    },
                    "h2h": {
                        "home": 7,
                        "away": 93
                    },
                    "goals": {
                        "home": 33,
                        "away": 67
                    }
                }
            },
            {
                "league": "MLS",
                "date": "2026-10-11",
                "time": "01:30",
                "home": "Chicago Fire",
                "away": "New York City FC",
                "stadium": "Soldier Field",
                "round": "Pekan 28",
                "statusCode": "NS",
                "homeLogo": "https://media.api-sports.io/football/teams/1607.png",
                "awayLogo": "https://media.api-sports.io/football/teams/1604.png",
                "prediction": "1 - 2",
                "odds": {
                    "home": 10,
                    "draw": 45,
                    "away": 45
                },
                "advice": "Double chance : draw or New York City FC",
                "comparison": {
                    "form": {
                        "home": 58,
                        "away": 42
                    },
                    "att": {
                        "home": 55,
                        "away": 45
                    },
                    "def": {
                        "home": 42,
                        "away": 58
                    },
                    "poisson": {
                        "home": 56,
                        "away": 44
                    },
                    "h2h": {
                        "home": 15,
                        "away": 85
                    },
                    "goals": {
                        "home": 31,
                        "away": 69
                    }
                }
            },
            {
                "league": "Ligue 1",
                "date": "2026-10-11",
                "time": "01:45",
                "home": "Paris Saint Germain",
                "away": "Le Mans",
                "stadium": "Parc des Princes",
                "round": "Pekan 6",
                "statusCode": "NS",
                "homeLogo": "https://media.api-sports.io/football/teams/85.png",
                "awayLogo": "https://media.api-sports.io/football/teams/1298.png",
                "prediction": "3 - 2",
                "odds": {
                    "home": 45,
                    "draw": 45,
                    "away": 10
                },
                "advice": "Double chance : Paris Saint Germain or draw",
                "comparison": {
                    "form": {
                        "home": 57,
                        "away": 43
                    },
                    "att": {
                        "home": 47,
                        "away": 53
                    },
                    "def": {
                        "home": 56,
                        "away": 44
                    },
                    "poisson": {
                        "home": 36,
                        "away": 64
                    },
                    "h2h": {
                        "home": 100,
                        "away": 0
                    },
                    "goals": {
                        "home": 91,
                        "away": 9
                    }
                }
            },
            {
                "league": "Ligue 1",
                "date": "2026-10-11",
                "time": "01:45",
                "home": "Monaco",
                "away": "Toulouse",
                "stadium": "Stade Louis II",
                "round": "Pekan 6",
                "statusCode": "NS",
                "homeLogo": "https://media.api-sports.io/football/teams/91.png",
                "awayLogo": "https://media.api-sports.io/football/teams/96.png",
                "prediction": "2 - 1",
                "odds": {
                    "home": 45,
                    "draw": 45,
                    "away": 10
                },
                "advice": "Double chance : Monaco or draw",
                "comparison": {
                    "form": {
                        "home": 72,
                        "away": 28
                    },
                    "att": {
                        "home": 53,
                        "away": 47
                    },
                    "def": {
                        "home": 75,
                        "away": 25
                    },
                    "poisson": {
                        "home": 77,
                        "away": 23
                    },
                    "h2h": {
                        "home": 62,
                        "away": 38
                    },
                    "goals": {
                        "home": 58,
                        "away": 42
                    }
                }
            },
            {
                "league": "Ligue 1",
                "date": "2026-10-11",
                "time": "01:45",
                "home": "Lorient",
                "away": "Paris FC",
                "stadium": "Stade du Moustoir",
                "round": "Pekan 6",
                "statusCode": "NS",
                "homeLogo": "https://media.api-sports.io/football/teams/97.png",
                "awayLogo": "https://media.api-sports.io/football/teams/114.png",
                "prediction": "1 - 2",
                "odds": {
                    "home": 10,
                    "draw": 45,
                    "away": 45
                },
                "advice": "Double chance : draw or Paris FC",
                "comparison": {
                    "form": {
                        "home": 31,
                        "away": 69
                    },
                    "att": {
                        "home": 38,
                        "away": 62
                    },
                    "def": {
                        "home": 33,
                        "away": 67
                    },
                    "poisson": {
                        "home": 29,
                        "away": 71
                    },
                    "h2h": {
                        "home": 50,
                        "away": 50
                    },
                    "goals": {
                        "home": 54,
                        "away": 46
                    }
                }
            },
            {
                "league": "Ligue 1",
                "date": "2026-10-11",
                "time": "01:45",
                "home": "Stade Brestois 29",
                "away": "Angers",
                "stadium": "Stade Francis-Le-Blé",
                "round": "Pekan 6",
                "statusCode": "NS",
                "homeLogo": "https://media.api-sports.io/football/teams/106.png",
                "awayLogo": "https://media.api-sports.io/football/teams/77.png",
                "prediction": "1 - 1",
                "odds": {
                    "home": 35,
                    "draw": 35,
                    "away": 30
                },
                "advice": "Double chance : Stade Brestois 29 or draw",
                "comparison": {
                    "form": {
                        "home": 42,
                        "away": 58
                    },
                    "att": {
                        "home": 54,
                        "away": 46
                    },
                    "def": {
                        "home": 38,
                        "away": 62
                    },
                    "poisson": {
                        "home": 16,
                        "away": 84
                    },
                    "h2h": {
                        "home": 71,
                        "away": 29
                    },
                    "goals": {
                        "home": 67,
                        "away": 33
                    }
                }
            },
            {
                "league": "Serie A",
                "date": "2026-10-11",
                "time": "01:45",
                "home": "Napoli",
                "away": "Frosinone",
                "stadium": "Maradona Stadium",
                "round": "Pekan 6",
                "statusCode": "NS",
                "homeLogo": "https://media.api-sports.io/football/teams/492.png",
                "awayLogo": "https://media.api-sports.io/football/teams/512.png",
                "prediction": "1 - 2",
                "odds": {
                    "home": 10,
                    "draw": 45,
                    "away": 45
                },
                "advice": "Double chance : draw or Frosinone",
                "comparison": {
                    "form": {
                        "home": 41,
                        "away": 59
                    },
                    "att": {
                        "home": 44,
                        "away": 56
                    },
                    "def": {
                        "home": 40,
                        "away": 60
                    },
                    "poisson": {
                        "home": 19,
                        "away": 81
                    },
                    "h2h": {
                        "home": 71,
                        "away": 29
                    },
                    "goals": {
                        "home": 61,
                        "away": 39
                    }
                }
            },
            {
                "league": "Jupiler Pro League",
                "date": "2026-10-11",
                "time": "01:45",
                "home": "Zulte Waregem",
                "away": "Gent",
                "stadium": "Elindus Arena",
                "round": "Pekan 8",
                "statusCode": "NS",
                "homeLogo": "https://media.api-sports.io/football/teams/600.png",
                "awayLogo": "https://media.api-sports.io/football/teams/631.png",
                "prediction": "1 - 2",
                "odds": {
                    "home": 10,
                    "draw": 45,
                    "away": 45
                },
                "advice": "Double chance : draw or Gent",
                "comparison": {
                    "form": {
                        "home": 35,
                        "away": 65
                    },
                    "att": {
                        "home": 47,
                        "away": 53
                    },
                    "def": {
                        "home": 33,
                        "away": 67
                    },
                    "poisson": {
                        "home": 42,
                        "away": 58
                    },
                    "h2h": {
                        "home": 40,
                        "away": 60
                    },
                    "goals": {
                        "home": 43,
                        "away": 57
                    }
                }
            },
            {
                "league": "Jupiler Pro League",
                "date": "2026-10-11",
                "time": "01:45",
                "home": "Genk",
                "away": "Kortrijk",
                "stadium": "Cegeka Arena",
                "round": "Pekan 8",
                "statusCode": "NS",
                "homeLogo": "https://media.api-sports.io/football/teams/742.png",
                "awayLogo": "https://media.api-sports.io/football/teams/734.png",
                "prediction": "2 - 1",
                "odds": {
                    "home": 45,
                    "draw": 45,
                    "away": 10
                },
                "advice": "Winner : Genk",
                "comparison": {
                    "form": {
                        "home": 67,
                        "away": 33
                    },
                    "att": {
                        "home": 82,
                        "away": 18
                    },
                    "def": {
                        "home": 53,
                        "away": 47
                    },
                    "poisson": {
                        "home": 100,
                        "away": 0
                    },
                    "h2h": {
                        "home": 60,
                        "away": 40
                    },
                    "goals": {
                        "home": 69,
                        "away": 31
                    }
                }
            },
            {
                "league": "LaLiga",
                "date": "2026-10-11",
                "time": "02:00",
                "home": "Real Madrid",
                "away": "Villarreal",
                "stadium": "Santiago Bernabéu Stadium",
                "round": "Pekan 8",
                "statusCode": "NS",
                "homeLogo": "https://media.api-sports.io/football/teams/541.png",
                "awayLogo": "https://media.api-sports.io/football/teams/533.png",
                "prediction": "3 - 2",
                "odds": {
                    "home": 45,
                    "draw": 45,
                    "away": 10
                },
                "advice": "Combo Double chance : Real Madrid or draw and +1.5 goals",
                "comparison": {
                    "form": {
                        "home": 60,
                        "away": 40
                    },
                    "att": {
                        "home": 57,
                        "away": 43
                    },
                    "def": {
                        "home": 57,
                        "away": 43
                    },
                    "poisson": {
                        "home": 80,
                        "away": 20
                    },
                    "h2h": {
                        "home": 93,
                        "away": 7
                    },
                    "goals": {
                        "home": 68,
                        "away": 32
                    }
                }
            },
            {
                "league": "Eredivisie",
                "date": "2026-10-11",
                "time": "02:00",
                "home": "Ajax",
                "away": "NEC Nijmegen",
                "stadium": "Johan Cruijff Arena",
                "round": "Pekan 8",
                "statusCode": "NS",
                "homeLogo": "https://media.api-sports.io/football/teams/194.png",
                "awayLogo": "https://media.api-sports.io/football/teams/413.png",
                "prediction": "3 - 1",
                "odds": {
                    "home": 45,
                    "draw": 45,
                    "away": 10
                },
                "advice": "Combo Double chance : Ajax or draw and +1.5 goals",
                "comparison": {
                    "form": {
                        "home": 67,
                        "away": 33
                    },
                    "att": {
                        "home": 71,
                        "away": 29
                    },
                    "def": {
                        "home": 59,
                        "away": 41
                    },
                    "poisson": {
                        "home": 52,
                        "away": 48
                    },
                    "h2h": {
                        "home": 50,
                        "away": 50
                    },
                    "goals": {
                        "home": 44,
                        "away": 56
                    }
                }
            },
            {
                "league": "Primeira Liga",
                "date": "2026-10-11",
                "time": "02:30",
                "home": "Academico Viseu",
                "away": "Estoril",
                "stadium": "Estadio do Fontelo",
                "round": "Pekan 8",
                "statusCode": "NS",
                "homeLogo": "https://media.api-sports.io/football/teams/238.png",
                "awayLogo": "https://media.api-sports.io/football/teams/230.png",
                "prediction": "2 - 1",
                "odds": {
                    "home": 45,
                    "draw": 45,
                    "away": 10
                },
                "advice": "Combo Double chance : Academico Viseu or draw and -3.5 goals",
                "comparison": {
                    "form": {
                        "home": 91,
                        "away": 9
                    },
                    "att": {
                        "home": 78,
                        "away": 22
                    },
                    "def": {
                        "home": 54,
                        "away": 46
                    },
                    "poisson": {
                        "home": 68,
                        "away": 32
                    },
                    "h2h": {
                        "home": 29,
                        "away": 71
                    },
                    "goals": {
                        "home": 29,
                        "away": 71
                    }
                }
            },
            {
                "league": "Liga de Expansion MX",
                "date": "2026-10-11",
                "time": "05:00",
                "home": "Tlaxcala",
                "away": "Piratas",
                "stadium": "Estadio Tlahuicole",
                "round": "Apertura - 12",
                "statusCode": "NS",
                "homeLogo": "https://media.api-sports.io/football/teams/14280.png",
                "awayLogo": "https://media.api-sports.io/football/teams/27935.png",
                "prediction": "2 - 2",
                "odds": {
                    "home": 33,
                    "draw": 33,
                    "away": 33
                },
                "advice": "No predictions available",
                "comparison": {
                    "form": {
                        "home": 44,
                        "away": 56
                    },
                    "att": {
                        "home": 45,
                        "away": 55
                    },
                    "def": {
                        "home": 43,
                        "away": 57
                    },
                    "poisson": {
                        "home": 53,
                        "away": 47
                    },
                    "h2h": {
                        "home": 0,
                        "away": 0
                    },
                    "goals": {
                        "home": 0,
                        "away": 0
                    }
                }
            },
            {
                "league": "Liga MX",
                "date": "2026-10-11",
                "time": "06:00",
                "home": "Club Queretaro",
                "away": "Atlante FC",
                "stadium": "Estadio La Corregidora",
                "round": "Apertura - 11",
                "statusCode": "NS",
                "homeLogo": "https://media.api-sports.io/football/teams/2290.png",
                "awayLogo": "https://media.api-sports.io/football/teams/2312.png",
                "prediction": "2 - 1",
                "odds": {
                    "home": 45,
                    "draw": 45,
                    "away": 10
                },
                "advice": "Double chance : Club Queretaro or draw",
                "comparison": {
                    "form": {
                        "home": 63,
                        "away": 38
                    },
                    "att": {
                        "home": 53,
                        "away": 47
                    },
                    "def": {
                        "home": 67,
                        "away": 33
                    },
                    "poisson": {
                        "home": 50,
                        "away": 50
                    },
                    "h2h": {
                        "home": 0,
                        "away": 0
                    },
                    "goals": {
                        "home": 0,
                        "away": 0
                    }
                }
            },
            {
                "league": "Liga MX",
                "date": "2026-10-11",
                "time": "06:00",
                "home": "FC Juarez",
                "away": "Club Tijuana",
                "stadium": "Estadio Olímpico Benito Juárez",
                "round": "Apertura - 11",
                "statusCode": "NS",
                "homeLogo": "https://media.api-sports.io/football/teams/2298.png",
                "awayLogo": "https://media.api-sports.io/football/teams/2280.png",
                "prediction": "2 - 3",
                "odds": {
                    "home": 10,
                    "draw": 45,
                    "away": 45
                },
                "advice": "Double chance : draw or Club Tijuana",
                "comparison": {
                    "form": {
                        "home": 43,
                        "away": 57
                    },
                    "att": {
                        "home": 33,
                        "away": 67
                    },
                    "def": {
                        "home": 52,
                        "away": 48
                    },
                    "poisson": {
                        "home": 39,
                        "away": 61
                    },
                    "h2h": {
                        "home": 38,
                        "away": 62
                    },
                    "goals": {
                        "home": 43,
                        "away": 57
                    }
                }
            },
            {
                "league": "Liga de Expansion MX",
                "date": "2026-10-11",
                "time": "06:00",
                "home": "Venados FC",
                "away": "Leones Negros UDG",
                "stadium": "Estadio Carlos Iturralde Rivero",
                "round": "Apertura - 12",
                "statusCode": "NS",
                "homeLogo": "https://media.api-sports.io/football/teams/2311.png",
                "awayLogo": "https://media.api-sports.io/football/teams/2307.png",
                "prediction": "2 - 2",
                "odds": {
                    "home": 33,
                    "draw": 33,
                    "away": 33
                },
                "advice": "No predictions available",
                "comparison": {
                    "form": {
                        "home": 47,
                        "away": 53
                    },
                    "att": {
                        "home": 50,
                        "away": 50
                    },
                    "def": {
                        "home": 53,
                        "away": 47
                    },
                    "poisson": {
                        "home": 53,
                        "away": 47
                    },
                    "h2h": {
                        "home": 50,
                        "away": 50
                    },
                    "goals": {
                        "home": 54,
                        "away": 46
                    }
                }
            },
            {
                "league": "MLS",
                "date": "2026-10-11",
                "time": "06:30",
                "home": "Orlando City SC",
                "away": "Columbus Crew",
                "stadium": "Exploria Stadium",
                "round": "Pekan 28",
                "statusCode": "NS",
                "homeLogo": "https://media.api-sports.io/football/teams/1598.png",
                "awayLogo": "https://media.api-sports.io/football/teams/1613.png",
                "prediction": "2 - 3",
                "odds": {
                    "home": 10,
                    "draw": 45,
                    "away": 45
                },
                "advice": "Double chance : draw or Columbus Crew",
                "comparison": {
                    "form": {
                        "home": 50,
                        "away": 50
                    },
                    "att": {
                        "home": 58,
                        "away": 42
                    },
                    "def": {
                        "home": 29,
                        "away": 71
                    },
                    "poisson": {
                        "home": 58,
                        "away": 42
                    },
                    "h2h": {
                        "home": 38,
                        "away": 62
                    },
                    "goals": {
                        "home": 50,
                        "away": 50
                    }
                }
            },
            {
                "league": "MLS",
                "date": "2026-10-11",
                "time": "06:30",
                "home": "Philadelphia Union",
                "away": "Real Salt Lake",
                "stadium": "Talen Energy Stadium",
                "round": "Pekan 28",
                "statusCode": "NS",
                "homeLogo": "https://media.api-sports.io/football/teams/1599.png",
                "awayLogo": "https://media.api-sports.io/football/teams/1606.png",
                "prediction": "3 - 1",
                "odds": {
                    "home": 45,
                    "draw": 45,
                    "away": 10
                },
                "advice": "Winner : Philadelphia Union",
                "comparison": {
                    "form": {
                        "home": 83,
                        "away": 17
                    },
                    "att": {
                        "home": 83,
                        "away": 17
                    },
                    "def": {
                        "home": 64,
                        "away": 36
                    },
                    "poisson": {
                        "home": 71,
                        "away": 29
                    },
                    "h2h": {
                        "home": 20,
                        "away": 80
                    },
                    "goals": {
                        "home": 38,
                        "away": 63
                    }
                }
            },
            {
                "league": "MLS",
                "date": "2026-10-11",
                "time": "06:30",
                "home": "New York Red Bulls",
                "away": "San Diego",
                "stadium": "Sports Illustrated Stadium",
                "round": "Pekan 28",
                "statusCode": "NS",
                "homeLogo": "https://media.api-sports.io/football/teams/1602.png",
                "awayLogo": "https://media.api-sports.io/football/teams/25484.png",
                "prediction": "2 - 1",
                "odds": {
                    "home": 10,
                    "draw": 45,
                    "away": 45
                },
                "advice": "Double chance : draw or San Diego",
                "comparison": {
                    "form": {
                        "home": 78,
                        "away": 22
                    },
                    "att": {
                        "home": 22,
                        "away": 78
                    },
                    "def": {
                        "home": 74,
                        "away": 26
                    },
                    "poisson": {
                        "home": 45,
                        "away": 55
                    },
                    "h2h": {
                        "home": 0,
                        "away": 100
                    },
                    "goals": {
                        "home": 0,
                        "away": 100
                    }
                }
            },
            {
                "league": "MLS",
                "date": "2026-10-11",
                "time": "06:30",
                "home": "Atlanta United FC",
                "away": "FC Cincinnati",
                "stadium": "Atlanta Stadium",
                "round": "Pekan 28",
                "statusCode": "NS",
                "homeLogo": "https://media.api-sports.io/football/teams/1608.png",
                "awayLogo": "https://media.api-sports.io/football/teams/2242.png",
                "prediction": "2 - 1",
                "odds": {
                    "home": 45,
                    "draw": 45,
                    "away": 10
                },
                "advice": "Combo Double chance : Atlanta United FC or draw and +1.5 goals",
                "comparison": {
                    "form": {
                        "home": 75,
                        "away": 25
                    },
                    "att": {
                        "home": 54,
                        "away": 46
                    },
                    "def": {
                        "home": 71,
                        "away": 29
                    },
                    "poisson": {
                        "home": 54,
                        "away": 46
                    },
                    "h2h": {
                        "home": 38,
                        "away": 62
                    },
                    "goals": {
                        "home": 47,
                        "away": 53
                    }
                }
            },
            {
                "league": "MLS",
                "date": "2026-10-11",
                "time": "06:30",
                "home": "New England Revolution",
                "away": "Seattle Sounders",
                "stadium": "Boston Stadium",
                "round": "Pekan 28",
                "statusCode": "NS",
                "homeLogo": "https://media.api-sports.io/football/teams/1609.png",
                "awayLogo": "https://media.api-sports.io/football/teams/1595.png",
                "prediction": "2 - 3",
                "odds": {
                    "home": 10,
                    "draw": 45,
                    "away": 45
                },
                "advice": "Double chance : draw or Seattle Sounders",
                "comparison": {
                    "form": {
                        "home": 45,
                        "away": 55
                    },
                    "att": {
                        "home": 45,
                        "away": 55
                    },
                    "def": {
                        "home": 40,
                        "away": 60
                    },
                    "poisson": {
                        "home": 65,
                        "away": 35
                    },
                    "h2h": {
                        "home": 36,
                        "away": 64
                    },
                    "goals": {
                        "home": 43,
                        "away": 57
                    }
                }
            },
            {
                "league": "MLS",
                "date": "2026-10-11",
                "time": "06:30",
                "home": "Inter Miami",
                "away": "DC United",
                "stadium": "Nu Stadium",
                "round": "Pekan 28",
                "statusCode": "NS",
                "homeLogo": "https://media.api-sports.io/football/teams/9568.png",
                "awayLogo": "https://media.api-sports.io/football/teams/1615.png",
                "prediction": "1 - 2",
                "odds": {
                    "home": 35,
                    "draw": 35,
                    "away": 30
                },
                "advice": "Double chance : Inter Miami or draw",
                "comparison": {
                    "form": {
                        "home": 40,
                        "away": 60
                    },
                    "att": {
                        "home": 57,
                        "away": 43
                    },
                    "def": {
                        "home": 40,
                        "away": 60
                    },
                    "poisson": {
                        "home": 52,
                        "away": 48
                    },
                    "h2h": {
                        "home": 93,
                        "away": 7
                    },
                    "goals": {
                        "home": 67,
                        "away": 33
                    }
                }
            },
            {
                "league": "MLS",
                "date": "2026-10-11",
                "time": "06:30",
                "home": "Charlotte",
                "away": "FC Dallas",
                "stadium": "Bank of America Stadium",
                "round": "Pekan 28",
                "statusCode": "NS",
                "homeLogo": "https://media.api-sports.io/football/teams/18310.png",
                "awayLogo": "https://media.api-sports.io/football/teams/1597.png",
                "prediction": "1 - 2",
                "odds": {
                    "home": 10,
                    "draw": 45,
                    "away": 45
                },
                "advice": "Double chance : draw or FC Dallas",
                "comparison": {
                    "form": {
                        "home": 38,
                        "away": 62
                    },
                    "att": {
                        "home": 44,
                        "away": 56
                    },
                    "def": {
                        "home": 45,
                        "away": 55
                    },
                    "poisson": {
                        "home": 55,
                        "away": 45
                    },
                    "h2h": {
                        "home": 50,
                        "away": 50
                    },
                    "goals": {
                        "home": 50,
                        "away": 50
                    }
                }
            },
            {
                "league": "MLS",
                "date": "2026-10-11",
                "time": "07:30",
                "home": "Sporting Kansas City",
                "away": "Portland Timbers",
                "stadium": "Children's Mercy Park",
                "round": "Pekan 28",
                "statusCode": "NS",
                "homeLogo": "https://media.api-sports.io/football/teams/1611.png",
                "awayLogo": "https://media.api-sports.io/football/teams/1617.png",
                "prediction": "2 - 3",
                "odds": {
                    "home": 10,
                    "draw": 45,
                    "away": 45
                },
                "advice": "Combo Double chance : draw or Portland Timbers and +1.5 goals",
                "comparison": {
                    "form": {
                        "home": 60,
                        "away": 40
                    },
                    "att": {
                        "home": 57,
                        "away": 43
                    },
                    "def": {
                        "home": 52,
                        "away": 48
                    },
                    "poisson": {
                        "home": 45,
                        "away": 55
                    },
                    "h2h": {
                        "home": 7,
                        "away": 93
                    },
                    "goals": {
                        "home": 27,
                        "away": 73
                    }
                }
            },
            {
                "league": "MLS",
                "date": "2026-10-11",
                "time": "07:30",
                "home": "Minnesota United FC",
                "away": "Houston Dynamo",
                "stadium": "Allianz Field",
                "round": "Pekan 28",
                "statusCode": "NS",
                "homeLogo": "https://media.api-sports.io/football/teams/1612.png",
                "awayLogo": "https://media.api-sports.io/football/teams/1600.png",
                "prediction": "2 - 3",
                "odds": {
                    "home": 10,
                    "draw": 45,
                    "away": 45
                },
                "advice": "Double chance : draw or Houston Dynamo",
                "comparison": {
                    "form": {
                        "home": 0,
                        "away": 100
                    },
                    "att": {
                        "home": 71,
                        "away": 29
                    },
                    "def": {
                        "home": 26,
                        "away": 74
                    },
                    "poisson": {
                        "home": 44,
                        "away": 56
                    },
                    "h2h": {
                        "home": 50,
                        "away": 50
                    },
                    "goals": {
                        "home": 57,
                        "away": 43
                    }
                }
            },
            {
                "league": "MLS",
                "date": "2026-10-11",
                "time": "07:30",
                "home": "Austin",
                "away": "Nashville SC",
                "stadium": "Q2 Stadium",
                "round": "Pekan 28",
                "statusCode": "NS",
                "homeLogo": "https://media.api-sports.io/football/teams/16489.png",
                "awayLogo": "https://media.api-sports.io/football/teams/9569.png",
                "prediction": "1 - 2",
                "odds": {
                    "home": 10,
                    "draw": 45,
                    "away": 45
                },
                "advice": "Double chance : draw or Nashville SC",
                "comparison": {
                    "form": {
                        "home": 47,
                        "away": 53
                    },
                    "att": {
                        "home": 47,
                        "away": 53
                    },
                    "def": {
                        "home": 40,
                        "away": 60
                    },
                    "poisson": {
                        "home": 38,
                        "away": 62
                    },
                    "h2h": {
                        "home": 50,
                        "away": 50
                    },
                    "goals": {
                        "home": 46,
                        "away": 54
                    }
                }
            },
            {
                "league": "Liga MX",
                "date": "2026-10-11",
                "time": "08:00",
                "home": "Atlas",
                "away": "Guadalajara Chivas",
                "stadium": "Estadio Jalisco",
                "round": "Apertura - 11",
                "statusCode": "NS",
                "homeLogo": "https://media.api-sports.io/football/teams/2283.png",
                "awayLogo": "https://media.api-sports.io/football/teams/2278.png",
                "prediction": "1 - 2",
                "odds": {
                    "home": 10,
                    "draw": 45,
                    "away": 45
                },
                "advice": "Double chance : draw or Guadalajara Chivas",
                "comparison": {
                    "form": {
                        "home": 38,
                        "away": 62
                    },
                    "att": {
                        "home": 47,
                        "away": 53
                    },
                    "def": {
                        "home": 29,
                        "away": 71
                    },
                    "poisson": {
                        "home": 22,
                        "away": 78
                    },
                    "h2h": {
                        "home": 15,
                        "away": 85
                    },
                    "goals": {
                        "home": 27,
                        "away": 73
                    }
                }
            },
            {
                "league": "Liga de Expansion MX",
                "date": "2026-10-11",
                "time": "08:00",
                "home": "Dorados",
                "away": "Cruz Azul Hidalgo",
                "stadium": "Estadio El Encanto",
                "round": "Apertura - 12",
                "statusCode": "NS",
                "homeLogo": "https://media.api-sports.io/football/teams/2297.png",
                "awayLogo": "https://media.api-sports.io/football/teams/15928.png",
                "prediction": "2 - 1",
                "odds": {
                    "home": 45,
                    "draw": 45,
                    "away": 10
                },
                "advice": "Double chance : Dorados or draw",
                "comparison": {
                    "form": {
                        "home": 71,
                        "away": 29
                    },
                    "att": {
                        "home": 80,
                        "away": 20
                    },
                    "def": {
                        "home": 52,
                        "away": 48
                    },
                    "poisson": {
                        "home": 88,
                        "away": 12
                    },
                    "h2h": {
                        "home": 0,
                        "away": 0
                    },
                    "goals": {
                        "home": 0,
                        "away": 0
                    }
                }
            },
            {
                "league": "Liga de Expansion MX",
                "date": "2026-10-11",
                "time": "08:00",
                "home": "Mineros de Zacatecas",
                "away": "Cancún",
                "stadium": "Estadio Carlos Vega Villalba",
                "round": "Apertura - 12",
                "statusCode": "NS",
                "homeLogo": "https://media.api-sports.io/football/teams/2299.png",
                "awayLogo": "https://media.api-sports.io/football/teams/14276.png",
                "prediction": "1 - 2",
                "odds": {
                    "home": 10,
                    "draw": 45,
                    "away": 45
                },
                "advice": "Double chance : draw or Cancún",
                "comparison": {
                    "form": {
                        "home": 43,
                        "away": 57
                    },
                    "att": {
                        "home": 43,
                        "away": 57
                    },
                    "def": {
                        "home": 47,
                        "away": 53
                    },
                    "poisson": {
                        "home": 75,
                        "away": 25
                    },
                    "h2h": {
                        "home": 25,
                        "away": 75
                    },
                    "goals": {
                        "home": 22,
                        "away": 78
                    }
                }
            },
            {
                "league": "Liga de Expansion MX",
                "date": "2026-10-11",
                "time": "08:00",
                "home": "CDS Tampico Madero",
                "away": "Durango",
                "stadium": "Estadio Tamaulipas",
                "round": "Apertura - 12",
                "statusCode": "NS",
                "homeLogo": "https://media.api-sports.io/football/teams/19905.png",
                "awayLogo": "https://media.api-sports.io/football/teams/15941.png",
                "prediction": "1 - 2",
                "odds": {
                    "home": 10,
                    "draw": 45,
                    "away": 45
                },
                "advice": "Double chance : draw or Durango",
                "comparison": {
                    "form": {
                        "home": 29,
                        "away": 71
                    },
                    "att": {
                        "home": 47,
                        "away": 53
                    },
                    "def": {
                        "home": 27,
                        "away": 73
                    },
                    "poisson": {
                        "home": 55,
                        "away": 45
                    },
                    "h2h": {
                        "home": 0,
                        "away": 0
                    },
                    "goals": {
                        "home": 0,
                        "away": 0
                    }
                }
            },
            {
                "league": "MLS",
                "date": "2026-10-11",
                "time": "08:30",
                "home": "Colorado Rapids",
                "away": "San Jose Earthquakes",
                "stadium": "Dick's Sporting Goods Park",
                "round": "Pekan 28",
                "statusCode": "NS",
                "homeLogo": "https://media.api-sports.io/football/teams/1610.png",
                "awayLogo": "https://media.api-sports.io/football/teams/1596.png",
                "prediction": "1 - 2",
                "odds": {
                    "home": 10,
                    "draw": 45,
                    "away": 45
                },
                "advice": "Double chance : draw or San Jose Earthquakes",
                "comparison": {
                    "form": {
                        "home": 31,
                        "away": 69
                    },
                    "att": {
                        "home": 41,
                        "away": 59
                    },
                    "def": {
                        "home": 38,
                        "away": 63
                    },
                    "poisson": {
                        "home": 53,
                        "away": 47
                    },
                    "h2h": {
                        "home": 60,
                        "away": 40
                    },
                    "goals": {
                        "home": 60,
                        "away": 40
                    }
                }
            },
            {
                "league": "MLS",
                "date": "2026-10-11",
                "time": "09:30",
                "home": "Los Angeles FC",
                "away": "Vancouver Whitecaps",
                "stadium": "Banc of California Stadium",
                "round": "Pekan 28",
                "statusCode": "NS",
                "homeLogo": "https://media.api-sports.io/football/teams/1616.png",
                "awayLogo": "https://media.api-sports.io/football/teams/1603.png",
                "prediction": "2 - 3",
                "odds": {
                    "home": 10,
                    "draw": 45,
                    "away": 45
                },
                "advice": "Double chance : draw or Vancouver Whitecaps",
                "comparison": {
                    "form": {
                        "home": 42,
                        "away": 58
                    },
                    "att": {
                        "home": 39,
                        "away": 61
                    },
                    "def": {
                        "home": 50,
                        "away": 50
                    },
                    "poisson": {
                        "home": 51,
                        "away": 49
                    },
                    "h2h": {
                        "home": 38,
                        "away": 62
                    },
                    "goals": {
                        "home": 46,
                        "away": 54
                    }
                }
            },
            {
                "league": "Liga MX",
                "date": "2026-10-11",
                "time": "10:10",
                "home": "Club America",
                "away": "Monterrey",
                "stadium": "Estadio Banorte",
                "round": "Apertura - 11",
                "statusCode": "NS",
                "homeLogo": "https://media.api-sports.io/football/teams/2287.png",
                "awayLogo": "https://media.api-sports.io/football/teams/2282.png",
                "prediction": "2 - 1",
                "odds": {
                    "home": 45,
                    "draw": 45,
                    "away": 10
                },
                "advice": "Winner : Club America",
                "comparison": {
                    "form": {
                        "home": 71,
                        "away": 29
                    },
                    "att": {
                        "home": 76,
                        "away": 24
                    },
                    "def": {
                        "home": 50,
                        "away": 50
                    },
                    "poisson": {
                        "home": 88,
                        "away": 12
                    },
                    "h2h": {
                        "home": 62,
                        "away": 38
                    },
                    "goals": {
                        "home": 50,
                        "away": 50
                    }
                }
            },
            {
                "league": "Liga 1 (Indonesia)",
                "date": "2026-10-11",
                "time": "15:30",
                "home": "PSS Sleman",
                "away": "PSM Makassar",
                "stadium": "Maguwoharjo Stadium",
                "round": "Pekan 4",
                "statusCode": "NS",
                "homeLogo": "https://media.api-sports.io/football/teams/3882.png",
                "awayLogo": "https://media.api-sports.io/football/teams/2441.png",
                "prediction": "2 - 3",
                "odds": {
                    "home": 10,
                    "draw": 45,
                    "away": 45
                },
                "advice": "Combo Double chance : draw or PSM Makassar and +1.5 goals",
                "comparison": {
                    "form": {
                        "home": 0,
                        "away": 100
                    },
                    "att": {
                        "home": 33,
                        "away": 67
                    },
                    "def": {
                        "home": 53,
                        "away": 47
                    },
                    "poisson": {
                        "home": 43,
                        "away": 57
                    },
                    "h2h": {
                        "home": 38,
                        "away": 62
                    },
                    "goals": {
                        "home": 40,
                        "away": 60
                    }
                }
            },
            {
                "league": "Liga 1 (Indonesia)",
                "date": "2026-10-11",
                "time": "15:30",
                "home": "Java United",
                "away": "Pusamania Borneo",
                "stadium": "Gelora Kie Raha Stadium",
                "round": "Pekan 4",
                "statusCode": "NS",
                "homeLogo": "https://media.api-sports.io/football/teams/22409.png",
                "awayLogo": "https://media.api-sports.io/football/teams/2442.png",
                "prediction": "1 - 2",
                "odds": {
                    "home": 10,
                    "draw": 45,
                    "away": 45
                },
                "advice": "Combo Double chance : draw or Pusamania Borneo and -3.5 goals",
                "comparison": {
                    "form": {
                        "home": 14,
                        "away": 86
                    },
                    "att": {
                        "home": 50,
                        "away": 50
                    },
                    "def": {
                        "home": 44,
                        "away": 56
                    },
                    "poisson": {
                        "home": 0,
                        "away": 100
                    },
                    "h2h": {
                        "home": 50,
                        "away": 50
                    },
                    "goals": {
                        "home": 41,
                        "away": 59
                    }
                }
            },
            {
                "league": "Eredivisie",
                "date": "2026-10-11",
                "time": "17:15",
                "home": "Utrecht",
                "away": "Willem II",
                "stadium": "Stadion Galgenwaard",
                "round": "Pekan 8",
                "statusCode": "NS",
                "homeLogo": "https://media.api-sports.io/football/teams/207.png",
                "awayLogo": "https://media.api-sports.io/football/teams/195.png",
                "prediction": "3 - 2",
                "odds": {
                    "home": 45,
                    "draw": 45,
                    "away": 10
                },
                "advice": "Combo Double chance : Utrecht or draw and +1.5 goals",
                "comparison": {
                    "form": {
                        "home": 71,
                        "away": 29
                    },
                    "att": {
                        "home": 69,
                        "away": 31
                    },
                    "def": {
                        "home": 40,
                        "away": 60
                    },
                    "poisson": {
                        "home": 61,
                        "away": 39
                    },
                    "h2h": {
                        "home": 80,
                        "away": 20
                    },
                    "goals": {
                        "home": 58,
                        "away": 42
                    }
                }
            },
            {
                "league": "Serie A",
                "date": "2026-10-11",
                "time": "17:30",
                "home": "Como",
                "away": "AS Roma",
                "stadium": "Stadio Giuseppe Sinigaglia",
                "round": "Pekan 6",
                "statusCode": "NS",
                "homeLogo": "https://media.api-sports.io/football/teams/895.png",
                "awayLogo": "https://media.api-sports.io/football/teams/497.png",
                "prediction": "1 - 2",
                "odds": {
                    "home": 10,
                    "draw": 45,
                    "away": 45
                },
                "advice": "Double chance : draw or AS Roma",
                "comparison": {
                    "form": {
                        "home": 43,
                        "away": 57
                    },
                    "att": {
                        "home": 39,
                        "away": 61
                    },
                    "def": {
                        "home": 33,
                        "away": 67
                    },
                    "poisson": {
                        "home": 0,
                        "away": 100
                    },
                    "h2h": {
                        "home": 50,
                        "away": 50
                    },
                    "goals": {
                        "home": 56,
                        "away": 44
                    }
                }
            },
            {
                "league": "Super Lig",
                "date": "2026-10-11",
                "time": "17:30",
                "home": "Konyaspor",
                "away": "Başakşehir",
                "stadium": "Konya Buyuksehir Belediye Stadium",
                "round": "Pekan 7",
                "statusCode": "NS",
                "homeLogo": "https://media.api-sports.io/football/teams/607.png",
                "awayLogo": "https://media.api-sports.io/football/teams/564.png",
                "prediction": "2 - 2",
                "odds": {
                    "home": 35,
                    "draw": 35,
                    "away": 30
                },
                "advice": "Double chance : Konyaspor or draw",
                "comparison": {
                    "form": {
                        "home": 50,
                        "away": 50
                    },
                    "att": {
                        "home": 33,
                        "away": 67
                    },
                    "def": {
                        "home": 61,
                        "away": 39
                    },
                    "poisson": {
                        "home": 75,
                        "away": 25
                    },
                    "h2h": {
                        "home": 40,
                        "away": 60
                    },
                    "goals": {
                        "home": 44,
                        "away": 56
                    }
                }
            },
            {
                "league": "Scottish Premiership",
                "date": "2026-10-11",
                "time": "18:00",
                "home": "Motherwell",
                "away": "Celtic",
                "stadium": "Fir Park",
                "round": "Pekan 8",
                "statusCode": "NS",
                "homeLogo": "https://media.api-sports.io/football/teams/256.png",
                "awayLogo": "https://media.api-sports.io/football/teams/247.png",
                "prediction": "1 - 2",
                "odds": {
                    "home": 10,
                    "draw": 45,
                    "away": 45
                },
                "advice": "Winner : Celtic",
                "comparison": {
                    "form": {
                        "home": 25,
                        "away": 75
                    },
                    "att": {
                        "home": 47,
                        "away": 53
                    },
                    "def": {
                        "home": 23,
                        "away": 77
                    },
                    "poisson": {
                        "home": 18,
                        "away": 82
                    },
                    "h2h": {
                        "home": 20,
                        "away": 80
                    },
                    "goals": {
                        "home": 40,
                        "away": 60
                    }
                }
            },
            {
                "league": "Jupiler Pro League",
                "date": "2026-10-11",
                "time": "18:30",
                "home": "Standard Liege",
                "away": "Charleroi",
                "stadium": "Maurice Dufrasnestadion",
                "round": "Pekan 8",
                "statusCode": "NS",
                "homeLogo": "https://media.api-sports.io/football/teams/733.png",
                "awayLogo": "https://media.api-sports.io/football/teams/736.png",
                "prediction": "1 - 2",
                "odds": {
                    "home": 10,
                    "draw": 45,
                    "away": 45
                },
                "advice": "Double chance : draw or Charleroi",
                "comparison": {
                    "form": {
                        "home": 43,
                        "away": 57
                    },
                    "att": {
                        "home": 42,
                        "away": 58
                    },
                    "def": {
                        "home": 46,
                        "away": 54
                    },
                    "poisson": {
                        "home": 27,
                        "away": 73
                    },
                    "h2h": {
                        "home": 40,
                        "away": 60
                    },
                    "goals": {
                        "home": 42,
                        "away": 58
                    }
                }
            },
            {
                "league": "LaLiga",
                "date": "2026-10-11",
                "time": "19:00",
                "home": "Elche",
                "away": "Celta Vigo",
                "stadium": "Estadio Manuel Martínez Valero",
                "round": "Pekan 8",
                "statusCode": "NS",
                "homeLogo": "https://media.api-sports.io/football/teams/797.png",
                "awayLogo": "https://media.api-sports.io/football/teams/538.png",
                "prediction": "1 - 2",
                "odds": {
                    "home": 10,
                    "draw": 45,
                    "away": 45
                },
                "advice": "Double chance : draw or Celta Vigo",
                "comparison": {
                    "form": {
                        "home": 40,
                        "away": 60
                    },
                    "att": {
                        "home": 59,
                        "away": 41
                    },
                    "def": {
                        "home": 27,
                        "away": 73
                    },
                    "poisson": {
                        "home": 22,
                        "away": 78
                    },
                    "h2h": {
                        "home": 20,
                        "away": 80
                    },
                    "goals": {
                        "home": 30,
                        "away": 70
                    }
                }
            },
            {
                "league": "Liga 1 (Indonesia)",
                "date": "2026-10-11",
                "time": "19:00",
                "home": "Persib Bandung",
                "away": "Dewa United",
                "stadium": "Gelora Bandung Lautan Api Stadium",
                "round": "Pekan 4",
                "statusCode": "NS",
                "homeLogo": "https://media.api-sports.io/football/teams/2445.png",
                "awayLogo": "https://media.api-sports.io/football/teams/17902.png",
                "prediction": "2 - 3",
                "odds": {
                    "home": 10,
                    "draw": 45,
                    "away": 45
                },
                "advice": "Double chance : draw or Dewa United",
                "comparison": {
                    "form": {
                        "home": 38,
                        "away": 63
                    },
                    "att": {
                        "home": 43,
                        "away": 57
                    },
                    "def": {
                        "home": 50,
                        "away": 50
                    },
                    "poisson": {
                        "home": 36,
                        "away": 64
                    },
                    "h2h": {
                        "home": 50,
                        "away": 50
                    },
                    "goals": {
                        "home": 46,
                        "away": 54
                    }
                }
            },
            {
                "league": "Eredivisie",
                "date": "2026-10-11",
                "time": "19:30",
                "home": "PEC Zwolle",
                "away": "Cambuur",
                "stadium": "MAC³PARK Stadion",
                "round": "Pekan 8",
                "statusCode": "NS",
                "homeLogo": "https://media.api-sports.io/football/teams/193.png",
                "awayLogo": "https://media.api-sports.io/football/teams/420.png",
                "prediction": "2 - 3",
                "odds": {
                    "home": 10,
                    "draw": 45,
                    "away": 45
                },
                "advice": "Winner : Cambuur",
                "comparison": {
                    "form": {
                        "home": 44,
                        "away": 56
                    },
                    "att": {
                        "home": 36,
                        "away": 64
                    },
                    "def": {
                        "home": 44,
                        "away": 56
                    },
                    "poisson": {
                        "home": 13,
                        "away": 87
                    },
                    "h2h": {
                        "home": 60,
                        "away": 40
                    },
                    "goals": {
                        "home": 53,
                        "away": 47
                    }
                }
            },
            {
                "league": "Eredivisie",
                "date": "2026-10-11",
                "time": "19:30",
                "home": "Telstar",
                "away": "ADO Den Haag",
                "stadium": "Sportpark Schoonenberg",
                "round": "Pekan 8",
                "statusCode": "NS",
                "homeLogo": "https://media.api-sports.io/football/teams/427.png",
                "awayLogo": "https://media.api-sports.io/football/teams/198.png",
                "prediction": "2 - 1",
                "odds": {
                    "home": 45,
                    "draw": 45,
                    "away": 10
                },
                "advice": "Double chance : Telstar or draw",
                "comparison": {
                    "form": {
                        "home": 50,
                        "away": 50
                    },
                    "att": {
                        "home": 25,
                        "away": 75
                    },
                    "def": {
                        "home": 58,
                        "away": 42
                    },
                    "poisson": {
                        "home": 55,
                        "away": 45
                    },
                    "h2h": {
                        "home": 85,
                        "away": 15
                    },
                    "goals": {
                        "home": 73,
                        "away": 27
                    }
                }
            },
            {
                "league": "Premier League",
                "date": "2026-10-11",
                "time": "20:00",
                "home": "Crystal Palace",
                "away": "Nottingham Forest",
                "stadium": "Selhurst Park",
                "round": "Pekan 6",
                "statusCode": "NS",
                "homeLogo": "https://media.api-sports.io/football/teams/52.png",
                "awayLogo": "https://media.api-sports.io/football/teams/65.png",
                "prediction": "1 - 2",
                "odds": {
                    "home": 10,
                    "draw": 45,
                    "away": 45
                },
                "advice": "Combo Winner : Nottingham Forest and +1.5 goals",
                "comparison": {
                    "form": {
                        "home": 44,
                        "away": 56
                    },
                    "att": {
                        "home": 60,
                        "away": 40
                    },
                    "def": {
                        "home": 31,
                        "away": 69
                    },
                    "poisson": {
                        "home": 22,
                        "away": 78
                    },
                    "h2h": {
                        "home": 36,
                        "away": 64
                    },
                    "goals": {
                        "home": 44,
                        "away": 56
                    }
                }
            },
            {
                "league": "Premier League",
                "date": "2026-10-11",
                "time": "20:00",
                "home": "Hull City",
                "away": "Everton",
                "stadium": "MKM Stadium",
                "round": "Pekan 6",
                "statusCode": "NS",
                "homeLogo": "https://media.api-sports.io/football/teams/64.png",
                "awayLogo": "https://media.api-sports.io/football/teams/45.png",
                "prediction": "1 - 2",
                "odds": {
                    "home": 10,
                    "draw": 45,
                    "away": 45
                },
                "advice": "Combo Double chance : draw or Everton and -3.5 goals",
                "comparison": {
                    "form": {
                        "home": 47,
                        "away": 53
                    },
                    "att": {
                        "home": 50,
                        "away": 50
                    },
                    "def": {
                        "home": 43,
                        "away": 57
                    },
                    "poisson": {
                        "home": 100,
                        "away": 0
                    },
                    "h2h": {
                        "home": 38,
                        "away": 62
                    },
                    "goals": {
                        "home": 41,
                        "away": 59
                    }
                }
            },
            {
                "league": "Ligue 1",
                "date": "2026-10-11",
                "time": "20:00",
                "home": "Nice",
                "away": "Strasbourg",
                "stadium": "Allianz Riviera",
                "round": "Pekan 6",
                "statusCode": "NS",
                "homeLogo": "https://media.api-sports.io/football/teams/84.png",
                "awayLogo": "https://media.api-sports.io/football/teams/95.png",
                "prediction": "1 - 2",
                "odds": {
                    "home": 45,
                    "draw": 45,
                    "away": 10
                },
                "advice": "Double chance : Nice or draw",
                "comparison": {
                    "form": {
                        "home": 42,
                        "away": 58
                    },
                    "att": {
                        "home": 23,
                        "away": 77
                    },
                    "def": {
                        "home": 63,
                        "away": 38
                    },
                    "poisson": {
                        "home": 59,
                        "away": 41
                    },
                    "h2h": {
                        "home": 62,
                        "away": 38
                    },
                    "goals": {
                        "home": 53,
                        "away": 47
                    }
                }
            },
            {
                "league": "Serie A",
                "date": "2026-10-11",
                "time": "20:00",
                "home": "Lazio",
                "away": "Monza",
                "stadium": "Stadio Olimpico",
                "round": "Pekan 6",
                "statusCode": "NS",
                "homeLogo": "https://media.api-sports.io/football/teams/487.png",
                "awayLogo": "https://media.api-sports.io/football/teams/1579.png",
                "prediction": "2 - 1",
                "odds": {
                    "home": 45,
                    "draw": 45,
                    "away": 10
                },
                "advice": "Double chance : Lazio or draw",
                "comparison": {
                    "form": {
                        "home": 76,
                        "away": 24
                    },
                    "att": {
                        "home": 50,
                        "away": 50
                    },
                    "def": {
                        "home": 80,
                        "away": 20
                    },
                    "poisson": {
                        "home": 74,
                        "away": 26
                    },
                    "h2h": {
                        "home": 85,
                        "away": 15
                    },
                    "goals": {
                        "home": 73,
                        "away": 27
                    }
                }
            },
            {
                "league": "Serie A",
                "date": "2026-10-11",
                "time": "20:00",
                "home": "Lecce",
                "away": "Bologna",
                "stadium": "Stadio Via del Mare",
                "round": "Pekan 6",
                "statusCode": "NS",
                "homeLogo": "https://media.api-sports.io/football/teams/867.png",
                "awayLogo": "https://media.api-sports.io/football/teams/500.png",
                "prediction": "1 - 1",
                "odds": {
                    "home": 35,
                    "draw": 35,
                    "away": 30
                },
                "advice": "Combo Double chance : Lecce or draw and -3.5 goals",
                "comparison": {
                    "form": {
                        "home": 75,
                        "away": 25
                    },
                    "att": {
                        "home": 63,
                        "away": 38
                    },
                    "def": {
                        "home": 38,
                        "away": 63
                    },
                    "poisson": {
                        "home": 100,
                        "away": 0
                    },
                    "h2h": {
                        "home": 15,
                        "away": 85
                    },
                    "goals": {
                        "home": 18,
                        "away": 82
                    }
                }
            },
            {
                "league": "Super Lig",
                "date": "2026-10-11",
                "time": "20:00",
                "home": "Gaziantep FK",
                "away": "Çorum FK",
                "stadium": "Gaziantep Stadyumu",
                "round": "Pekan 7",
                "statusCode": "NS",
                "homeLogo": "https://media.api-sports.io/football/teams/3573.png",
                "awayLogo": "https://media.api-sports.io/football/teams/6343.png",
                "prediction": "2 - 3",
                "odds": {
                    "home": 10,
                    "draw": 45,
                    "away": 45
                },
                "advice": "Double chance : draw or Çorum FK",
                "comparison": {
                    "form": {
                        "home": 54,
                        "away": 46
                    },
                    "att": {
                        "home": 35,
                        "away": 65
                    },
                    "def": {
                        "home": 63,
                        "away": 38
                    },
                    "poisson": {
                        "home": 31,
                        "away": 69
                    },
                    "h2h": {
                        "home": 0,
                        "away": 0
                    },
                    "goals": {
                        "home": 0,
                        "away": 0
                    }
                }
            },
            {
                "league": "Scottish Premiership",
                "date": "2026-10-11",
                "time": "20:00",
                "home": "Aberdeen",
                "away": "ST Johnstone",
                "stadium": "Pittodrie Stadium",
                "round": "Pekan 8",
                "statusCode": "NS",
                "homeLogo": "https://media.api-sports.io/football/teams/252.png",
                "awayLogo": "https://media.api-sports.io/football/teams/258.png",
                "prediction": "2 - 1",
                "odds": {
                    "home": 45,
                    "draw": 45,
                    "away": 10
                },
                "advice": "Combo Double chance : Aberdeen or draw and -3.5 goals",
                "comparison": {
                    "form": {
                        "home": 50,
                        "away": 50
                    },
                    "att": {
                        "home": 50,
                        "away": 50
                    },
                    "def": {
                        "home": 55,
                        "away": 45
                    },
                    "poisson": {
                        "home": 70,
                        "away": 30
                    },
                    "h2h": {
                        "home": 62,
                        "away": 38
                    },
                    "goals": {
                        "home": 50,
                        "away": 50
                    }
                }
            },
            {
                "league": "Bundesliga",
                "date": "2026-10-11",
                "time": "20:30",
                "home": "1. FC Köln",
                "away": "Borussia Mönchengladbach",
                "stadium": "RheinEnergieStadion",
                "round": "Pekan 5",
                "statusCode": "NS",
                "homeLogo": "https://media.api-sports.io/football/teams/192.png",
                "awayLogo": "https://media.api-sports.io/football/teams/163.png",
                "prediction": "3 - 2",
                "odds": {
                    "home": 45,
                    "draw": 45,
                    "away": 10
                },
                "advice": "Combo Double chance : 1. FC Köln or draw and +1.5 goals",
                "comparison": {
                    "form": {
                        "home": 100,
                        "away": 0
                    },
                    "att": {
                        "home": 50,
                        "away": 50
                    },
                    "def": {
                        "home": 64,
                        "away": 36
                    },
                    "poisson": {
                        "home": 100,
                        "away": 0
                    },
                    "h2h": {
                        "home": 50,
                        "away": 50
                    },
                    "goals": {
                        "home": 50,
                        "away": 50
                    }
                }
            },
            {
                "league": "Jupiler Pro League",
                "date": "2026-10-11",
                "time": "21:00",
                "home": "Union St. Gilloise",
                "away": "OH Leuven",
                "stadium": "Stade Joseph Marien",
                "round": "Pekan 8",
                "statusCode": "NS",
                "homeLogo": "https://media.api-sports.io/football/teams/1393.png",
                "awayLogo": "https://media.api-sports.io/football/teams/260.png",
                "prediction": "2 - 1",
                "odds": {
                    "home": 50,
                    "draw": 50,
                    "away": 33
                },
                "advice": "Winner : Union St. Gilloise",
                "comparison": {
                    "form": {
                        "home": 79,
                        "away": 21
                    },
                    "att": {
                        "home": 80,
                        "away": 20
                    },
                    "def": {
                        "home": 78,
                        "away": 22
                    },
                    "poisson": {
                        "home": 100,
                        "away": 0
                    },
                    "h2h": {
                        "home": 85,
                        "away": 15
                    },
                    "goals": {
                        "home": 90,
                        "away": 10
                    }
                }
            },
            {
                "league": "LaLiga",
                "date": "2026-10-11",
                "time": "21:15",
                "home": "Real Sociedad",
                "away": "Deportivo La Coruna",
                "stadium": "Anoeta Stadium",
                "round": "Pekan 8",
                "statusCode": "NS",
                "homeLogo": "https://media.api-sports.io/football/teams/548.png",
                "awayLogo": "https://media.api-sports.io/football/teams/544.png",
                "prediction": "1 - 2",
                "odds": {
                    "home": 45,
                    "draw": 45,
                    "away": 10
                },
                "advice": "Double chance : Real Sociedad or draw",
                "comparison": {
                    "form": {
                        "home": 56,
                        "away": 44
                    },
                    "att": {
                        "home": 50,
                        "away": 50
                    },
                    "def": {
                        "home": 43,
                        "away": 57
                    },
                    "poisson": {
                        "home": 24,
                        "away": 76
                    },
                    "h2h": {
                        "home": 71,
                        "away": 29
                    },
                    "goals": {
                        "home": 60,
                        "away": 40
                    }
                }
            },
            {
                "league": "Primeira Liga",
                "date": "2026-10-11",
                "time": "21:30",
                "home": "Rio Ave",
                "away": "Nacional",
                "stadium": "Estádio dos Arcos",
                "round": "Pekan 8",
                "statusCode": "NS",
                "homeLogo": "https://media.api-sports.io/football/teams/226.png",
                "awayLogo": "https://media.api-sports.io/football/teams/225.png",
                "prediction": "3 - 2",
                "odds": {
                    "home": 45,
                    "draw": 45,
                    "away": 10
                },
                "advice": "Double chance : Rio Ave or draw",
                "comparison": {
                    "form": {
                        "home": 100,
                        "away": 0
                    },
                    "att": {
                        "home": 63,
                        "away": 38
                    },
                    "def": {
                        "home": 52,
                        "away": 48
                    },
                    "poisson": {
                        "home": 47,
                        "away": 53
                    },
                    "h2h": {
                        "home": 50,
                        "away": 50
                    },
                    "goals": {
                        "home": 41,
                        "away": 59
                    }
                }
            },
            {
                "league": "Eredivisie",
                "date": "2026-10-11",
                "time": "21:45",
                "home": "Excelsior",
                "away": "Groningen",
                "stadium": "Van Donge & De Roo Stadion",
                "round": "Pekan 8",
                "statusCode": "NS",
                "homeLogo": "https://media.api-sports.io/football/teams/196.png",
                "awayLogo": "https://media.api-sports.io/football/teams/202.png",
                "prediction": "2 - 2",
                "odds": {
                    "home": 35,
                    "draw": 35,
                    "away": 30
                },
                "advice": "Double chance : Excelsior or draw",
                "comparison": {
                    "form": {
                        "home": 62,
                        "away": 38
                    },
                    "att": {
                        "home": 53,
                        "away": 47
                    },
                    "def": {
                        "home": 61,
                        "away": 39
                    },
                    "poisson": {
                        "home": 53,
                        "away": 47
                    },
                    "h2h": {
                        "home": 40,
                        "away": 60
                    },
                    "goals": {
                        "home": 31,
                        "away": 69
                    }
                }
            },
            {
                "league": "Ligue 1",
                "date": "2026-10-11",
                "time": "22:15",
                "home": "Rennes",
                "away": "Auxerre",
                "stadium": "Roazhon Park",
                "round": "Pekan 6",
                "statusCode": "NS",
                "homeLogo": "https://media.api-sports.io/football/teams/94.png",
                "awayLogo": "https://media.api-sports.io/football/teams/108.png",
                "prediction": "3 - 2",
                "odds": {
                    "home": 45,
                    "draw": 45,
                    "away": 10
                },
                "advice": "Combo Winner : Rennes and +1.5 goals",
                "comparison": {
                    "form": {
                        "home": 63,
                        "away": 38
                    },
                    "att": {
                        "home": 53,
                        "away": 47
                    },
                    "def": {
                        "home": 57,
                        "away": 43
                    },
                    "poisson": {
                        "home": 77,
                        "away": 23
                    },
                    "h2h": {
                        "home": 38,
                        "away": 62
                    },
                    "goals": {
                        "home": 42,
                        "away": 58
                    }
                }
            },
            {
                "league": "Premier League",
                "date": "2026-10-11",
                "time": "22:30",
                "home": "Liverpool",
                "away": "Manchester City",
                "stadium": "Anfield",
                "round": "Pekan 6",
                "statusCode": "NS",
                "homeLogo": "https://media.api-sports.io/football/teams/40.png",
                "awayLogo": "https://media.api-sports.io/football/teams/50.png",
                "prediction": "1 - 2",
                "odds": {
                    "home": 10,
                    "draw": 45,
                    "away": 45
                },
                "advice": "Winner : Manchester City",
                "comparison": {
                    "form": {
                        "home": 38,
                        "away": 63
                    },
                    "att": {
                        "home": 35,
                        "away": 65
                    },
                    "def": {
                        "home": 56,
                        "away": 44
                    },
                    "poisson": {
                        "home": 15,
                        "away": 85
                    },
                    "h2h": {
                        "home": 40,
                        "away": 60
                    },
                    "goals": {
                        "home": 36,
                        "away": 64
                    }
                }
            },
            {
                "league": "Bundesliga",
                "date": "2026-10-11",
                "time": "22:30",
                "home": "SC Freiburg",
                "away": "FC Schalke 04",
                "stadium": "Europa-Park-Stadion",
                "round": "Pekan 5",
                "statusCode": "NS",
                "homeLogo": "https://media.api-sports.io/football/teams/160.png",
                "awayLogo": "https://media.api-sports.io/football/teams/174.png",
                "prediction": "2 - 1",
                "odds": {
                    "home": 45,
                    "draw": 45,
                    "away": 10
                },
                "advice": "Winner : SC Freiburg",
                "comparison": {
                    "form": {
                        "home": 67,
                        "away": 33
                    },
                    "att": {
                        "home": 80,
                        "away": 20
                    },
                    "def": {
                        "home": 57,
                        "away": 43
                    },
                    "poisson": {
                        "home": 88,
                        "away": 12
                    },
                    "h2h": {
                        "home": 100,
                        "away": 0
                    },
                    "goals": {
                        "home": 100,
                        "away": 0
                    }
                }
            },
            {
                "league": "Serie A",
                "date": "2026-10-11",
                "time": "23:00",
                "home": "Sassuolo",
                "away": "AC Milan",
                "stadium": "Mapei Stadium – Città del Tricolore",
                "round": "Pekan 6",
                "statusCode": "NS",
                "homeLogo": "https://media.api-sports.io/football/teams/488.png",
                "awayLogo": "https://media.api-sports.io/football/teams/489.png",
                "prediction": "1 - 2",
                "odds": {
                    "home": 10,
                    "draw": 45,
                    "away": 45
                },
                "advice": "Double chance : draw or AC Milan",
                "comparison": {
                    "form": {
                        "home": 39,
                        "away": 61
                    },
                    "att": {
                        "home": 47,
                        "away": 53
                    },
                    "def": {
                        "home": 31,
                        "away": 69
                    },
                    "poisson": {
                        "home": 56,
                        "away": 44
                    },
                    "h2h": {
                        "home": 38,
                        "away": 62
                    },
                    "goals": {
                        "home": 40,
                        "away": 60
                    }
                }
            },
            {
                "league": "Super Lig",
                "date": "2026-10-11",
                "time": "23:00",
                "home": "Beşiktaş",
                "away": "Kocaelispor",
                "stadium": "Tupras Stadium",
                "round": "Pekan 7",
                "statusCode": "NS",
                "homeLogo": "https://media.api-sports.io/football/teams/549.png",
                "awayLogo": "https://media.api-sports.io/football/teams/7411.png",
                "prediction": "2 - 1",
                "odds": {
                    "home": 45,
                    "draw": 45,
                    "away": 10
                },
                "advice": "Winner : Beşiktaş",
                "comparison": {
                    "form": {
                        "home": 43,
                        "away": 57
                    },
                    "att": {
                        "home": 65,
                        "away": 35
                    },
                    "def": {
                        "home": 22,
                        "away": 78
                    },
                    "poisson": {
                        "home": 87,
                        "away": 13
                    },
                    "h2h": {
                        "home": 88,
                        "away": 13
                    },
                    "goals": {
                        "home": 71,
                        "away": 29
                    }
                }
            },
            {
                "league": "LaLiga",
                "date": "2026-10-11",
                "time": "23:30",
                "home": "Real Betis",
                "away": "Osasuna",
                "stadium": "Estadio de la Cartuja",
                "round": "Pekan 8",
                "statusCode": "NS",
                "homeLogo": "https://media.api-sports.io/football/teams/543.png",
                "awayLogo": "https://media.api-sports.io/football/teams/727.png",
                "prediction": "2 - 1",
                "odds": {
                    "home": 50,
                    "draw": 50,
                    "away": 33
                },
                "advice": "Double chance : Real Betis or draw",
                "comparison": {
                    "form": {
                        "home": 71,
                        "away": 29
                    },
                    "att": {
                        "home": 64,
                        "away": 36
                    },
                    "def": {
                        "home": 63,
                        "away": 37
                    },
                    "poisson": {
                        "home": 100,
                        "away": 0
                    },
                    "h2h": {
                        "home": 85,
                        "away": 15
                    },
                    "goals": {
                        "home": 73,
                        "away": 27
                    }
                }
            },
            {
                "league": "Jupiler Pro League",
                "date": "2026-10-11",
                "time": "23:30",
                "home": "KVC Westerlo",
                "away": "Antwerp",
                "stadium": "Het Kuipje",
                "round": "Pekan 8",
                "statusCode": "NS",
                "homeLogo": "https://media.api-sports.io/football/teams/261.png",
                "awayLogo": "https://media.api-sports.io/football/teams/740.png",
                "prediction": "3 - 1",
                "odds": {
                    "home": 45,
                    "draw": 45,
                    "away": 10
                },
                "advice": "Combo Double chance : KVC Westerlo or draw and +1.5 goals",
                "comparison": {
                    "form": {
                        "home": 91,
                        "away": 9
                    },
                    "att": {
                        "home": 67,
                        "away": 33
                    },
                    "def": {
                        "home": 64,
                        "away": 36
                    },
                    "poisson": {
                        "home": 36,
                        "away": 64
                    },
                    "h2h": {
                        "home": 40,
                        "away": 60
                    },
                    "goals": {
                        "home": 47,
                        "away": 53
                    }
                }
            }
        ]
    },
    "predictionStats": {
        "thisMonth": 15,
        "correctScore": 81,
        "correctWinner": 411,
        "winnerAccuracy": 44,
        "ouAccuracy": 56,
        "month": "2026-10",
        "totalEvaluated": 943,
        "ouEvaluated": 943,
        "ouCorrect": 525
    },
    "recentPredictions": [
        {
            "key": "Chicago Fire|Vancouver Whitecaps|07:30",
            "match": "Chicago Fire vs Vancouver Whitecaps",
            "predicted": "2 - 3",
            "result": "3 - 1",
            "correct": false
        },
        {
            "key": "Leones Negros UDG|Dorados|01:00",
            "match": "Leones Negros UDG vs Dorados",
            "predicted": "1 - 2",
            "result": "6 - 3",
            "correct": false
        },
        {
            "key": "Piratas|Alebrijes de Oaxaca|08:00",
            "match": "Piratas vs Alebrijes de Oaxaca",
            "predicted": "2 - 1",
            "result": "4 - 0",
            "correct": true
        },
        {
            "key": "Durango|Mineros de Zacatecas|08:00",
            "match": "Durango vs Mineros de Zacatecas",
            "predicted": "2 - 1",
            "result": "4 - 2",
            "correct": true
        },
        {
            "key": "Cancún|Tapatío|08:00",
            "match": "Cancún vs Tapatío",
            "predicted": "3 - 2",
            "result": "1 - 0",
            "correct": true
        },
        {
            "key": "Monarcas|Tlaxcala|08:00",
            "match": "Monarcas vs Tlaxcala",
            "predicted": "2 - 1",
            "result": "1 - 1",
            "correct": false
        },
        {
            "key": "CA La Paz|Venados FC|10:00",
            "match": "CA La Paz vs Venados FC",
            "predicted": "3 - 2",
            "result": "1 - 2",
            "correct": false
        },
        {
            "key": "Tepatitlán|CDS Tampico Madero|08:00",
            "match": "Tepatitlán vs CDS Tampico Madero",
            "predicted": "1 - 2",
            "result": "3 - 1",
            "correct": false
        },
        {
            "key": "Correcaminos Uat|Cruz Azul Hidalgo|08:00",
            "match": "Correcaminos Uat vs Cruz Azul Hidalgo",
            "predicted": "2 - 2",
            "result": "0 - 0",
            "correct": true
        },
        {
            "key": "Seattle Sounders|Sporting Kansas City|08:30",
            "match": "Seattle Sounders vs Sporting Kansas City",
            "predicted": "3 - 2",
            "result": "2 - 1",
            "correct": true
        },
        {
            "key": "New York Red Bulls|St. Louis City|06:30",
            "match": "New York Red Bulls vs St. Louis City",
            "predicted": "1 - 2",
            "result": "0 - 3",
            "correct": true
        },
        {
            "key": "Necaxa|Club America|10:10",
            "match": "Necaxa vs Club America",
            "predicted": "1 - 2",
            "result": "2 - 4",
            "correct": true
        },
        {
            "key": "Leon|FC Juarez|08:00",
            "match": "Leon vs FC Juarez",
            "predicted": "2 - 1",
            "result": "2 - 1",
            "correct": true
        },
        {
            "key": "Columbus Crew|Inter Miami|06:00",
            "match": "Columbus Crew vs Inter Miami",
            "predicted": "2 - 3",
            "result": "2 - 1",
            "correct": false
        },
        {
            "key": "U.N.A.M. - Pumas|Atletico San Luis|01:00",
            "match": "U.N.A.M. - Pumas vs Atletico San Luis",
            "predicted": "1 - 2",
            "result": "2 - 3",
            "correct": true
        },
        {
            "key": "Tigres UANL|Puebla|10:10",
            "match": "Tigres UANL vs Puebla",
            "predicted": "2 - 1",
            "result": "1 - 0",
            "correct": true
        },
        {
            "key": "Santos Laguna|CF Pachuca|10:05",
            "match": "Santos Laguna vs CF Pachuca",
            "predicted": "1 - 2",
            "result": "1 - 0",
            "correct": false
        },
        {
            "key": "Los Angeles Galaxy|Colorado Rapids|09:30",
            "match": "Los Angeles Galaxy vs Colorado Rapids",
            "predicted": "1 - 2",
            "result": "3 - 2",
            "correct": false
        },
        {
            "key": "Vancouver Whitecaps|DC United|09:30",
            "match": "Vancouver Whitecaps vs DC United",
            "predicted": "2 - 1",
            "result": "3 - 3",
            "correct": false
        },
        {
            "key": "San Jose Earthquakes|Portland Timbers|09:30",
            "match": "San Jose Earthquakes vs Portland Timbers",
            "predicted": "2 - 1",
            "result": "3 - 1",
            "correct": true
        }
    ]
};
