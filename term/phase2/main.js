"use strict"
/*
Music Personality Data
Author: Qing Dan
Phase 2 – Term Project
Description:
Each object below represents one listening session,
including participant info, time, music genres, and mood/focus/stress ratings.
*/


let musicSessions = [
  //  2025/10/17 
  {
    date: "2025-10-17",
    sessionID: "FANG_01",
    startTime: "10:18",
    personalityType: "INFP",
    duration_min: 28, // listening duration in minutes
    genres: ["Hardstyle", "EDM"], // list of genre of music listened to
    mood: 4, // 0–5 scale (5 = very positive)
    focus: 2, // 0–5 scale (5 = highly focused)
    perceivedStress: 1 // 0–5 scale (5 = highly stressed)
  }, // Fang's 1st session on Oct 17

  {
    date: "2025-10-17",
    sessionID: "FANG_02",
    startTime: "11:20",
    personalityType: "INFP",
    duration_min: 75,
    genres: ["Hardstyle", "C-POP", "DJ"],
    mood: 4,
    focus: 5,
    perceivedStress: 1
  }, // Fang's 2nd session on Oct 17

  {
    date: "2025-10-17",
    sessionID: "MANDY_01",
    startTime: "07:42",
    personalityType: "INFJ",
    duration_min: 18,
    genres: ["AcousticPop"],
    mood: 4,
    focus: 4,
    perceivedStress: 2
  }, // Mandy’s 1st session on Oct 17

  {
    date: "2025-10-17",
    sessionID: "MANDY_02",
    startTime: "13:12",
    personalityType: "INFJ",
    duration_min: 33,
    genres: ["Lo-fi", "Chill beats"],
    mood: 3,
    focus: 4,
    perceivedStress: 3
  }, // Mandy’s 2nd session on Oct 17

  {
    date: "2025-10-17",
    sessionID: "MANDY_03",
    startTime: "22:18",
    personalityType: "INFJ",
    duration_min: 26,
    genres: ["Soft pop", "Ballad"],
    mood: 4,
    focus: 4,
    perceivedStress: 1
  }, // Mandy’s 3rd session on Oct 17

  {
    date: "2025-10-17",
    sessionID: "XIAO_01",
    startTime: "10:08",
    personalityType: "ESTJ",
    duration_min: 40,
    genres: ["EDM"],
    mood: 4,
    focus: 5,
    perceivedStress: 2
  }, // Xiao’s 1st session on Oct 17

  {
    date: "2025-10-17",
    sessionID: "ERIN_01",
    startTime: "08:05",
    personalityType: "ENFP",
    duration_min: 20,
    genres: ["R&B", "Rap"],
    mood: 4,
    focus: 3,
    perceivedStress: 2
  }, // Erin’s first session on Oct 17

  {
    date: "2025-10-17",
    sessionID: "ERIN_02",
    startTime: "11:30",
    personalityType: "ENFP",
    duration_min: 30,
    genres: ["R&B"],
    mood: 4,
    focus: 5,
    perceivedStress: 4
  }, // Erin’s second session on Oct 17

  {
    date: "2025-10-17",
    sessionID: "ERIN_03",
    startTime: "15:10",
    personalityType: "ENFP",
    duration_min: 25,
    genres: ["R&B", "Rap"],
    mood: 4,
    focus: 5,
    perceivedStress: 2
  }, // Erin’s third session on Oct 17

  {
    date: "2025-10-17",
    sessionID: "ZACK_01",
    startTime: "07:30",
    personalityType: "ISFJ",
    duration_min: 22,
    genres: ["C-Oldies"],
    mood: 5,
    focus: 3,
    perceivedStress: 2
  }, // Zack’s first session on Oct 17

  {
    date: "2025-10-17",
    sessionID: "ZACK_02",
    startTime: "14:40",
    personalityType: "ISFJ",
    duration_min: 60,
    genres: ["Rap"],
    mood: 4,
    focus: 5,
    perceivedStress: 2
  }, // Zack’s second session on Oct 17

  {
    date: "2025-10-17",
    sessionID: "ZACK_03",
    startTime: "19:05",
    personalityType: "ISFJ",
    duration_min: 35,
    genres: ["C-Oldies"],
    mood: 5,
    focus: 3,
    perceivedStress: 1
  }, // Zack’s third session on Oct 17

  //  2025/10/18 
  {
    date: "2025-10-18",
    sessionID: "FANG_03",
    startTime: "10:18",
    personalityType: "INFP",
    duration_min: 28,
    genres: ["Hardstyle", "House"],
    mood: 4,
    focus: 2,
    perceivedStress: 1
  }, // Fang’s first session on Oct 18

  {
    date: "2025-10-18",
    sessionID: "FANG_04",
    startTime: "11:10",
    personalityType: "INFP",
    duration_min: 90,
    genres: ["C-POP", "DJ", "K-POP"],
    mood: 4,
    focus: 5,
    perceivedStress: 1
  }, // Fang’s second session on Oct 18

  {
    date: "2025-10-18",
    sessionID: "FANG_05",
    startTime: "17:03",
    personalityType: "INFP",
    duration_min: 73,
    genres: ["Jazz"],
    mood: 3,
    focus: 5,
    perceivedStress: 3
  }, // Fang’s third session on Oct 18

  {
    date: "2025-10-18",
    sessionID: "MANDY_04",
    startTime: "23:12",
    personalityType: "INFJ",
    duration_min: 30,
    genres: ["Lo-fi", "Piano"],
    mood: 4,
    focus: 3,
    perceivedStress: 1
  }, // Mandy’s fourth session on Oct 18

  {
    date: "2025-10-18",
    sessionID: "MANDY_05",
    startTime: "08:20",
    personalityType: "INFJ",
    duration_min: 20,
    genres: ["Indie Pop"],
    mood: 5,
    focus: 4,
    perceivedStress: 2
  }, // Mandy’s fifth session on Oct 18

  {
    date: "2025-10-18",
    sessionID: "MANDY_06",
    startTime: "12:28",
    personalityType: "INFJ",
    duration_min: 38,
    genres: ["Chill Mix", "Jazz"],
    mood: 5,
    focus: 3,
    perceivedStress: 1
  }, // Mandy’s sixth session on Oct 18

  {
    date: "2025-10-18",
    sessionID: "XIAO_02",
    startTime: "10:03",
    personalityType: "ESTJ",
    duration_min: 50,
    genres: ["EDM"],
    mood: 4,
    focus: 5,
    perceivedStress: 2
  }, // Xiao’s second session on Oct 18

  {
    date: "2025-10-18",
    sessionID: "ERIN_04",
    startTime: "09:10",
    personalityType: "ENFP",
    duration_min: 7,
    genres: ["R&B"],
    mood: 4,
    focus: 5,
    perceivedStress: 2
  }, // Erin’s fourth session on Oct 18

  {
    date: "2025-10-18",
    sessionID: "ERIN_05",
    startTime: "14:30",
    personalityType: "ENFP",
    duration_min: 35,
    genres: ["R&B", "Rap"],
    mood: 4,
    focus: 3,
    perceivedStress: 2
  }, // Erin’s fifth session on Oct 18

  {
    date: "2025-10-18",
    sessionID: "ZACK_04",
    startTime: "07:32",
    personalityType: "ISFJ",
    duration_min: 20,
    genres: ["C-Oldies"],
    mood: 5,
    focus: 3,
    perceivedStress: 2
  }, // Zack’s fourth session on Oct 18

  {
    date: "2025-10-18",
    sessionID: "ZACK_05",
    startTime: "15:20",
    personalityType: "ISFJ",
    duration_min: 55,
    genres: ["Rap"],
    mood: 4,
    focus: 5,
    perceivedStress: 2
  }, // Zack’s fifth session on Oct 18

  {
    date: "2025-10-18",
    sessionID: "ZACK_06",
    startTime: "20:00",
    personalityType: "ISFJ",
    duration_min: 38,
    genres: ["C-Oldies"],
    mood: 5,
    focus: 3,
    perceivedStress: 1
  },// Zack’s sixth session on Oct 18


  //  2025/10/19 
  {
    date: "2025-10-19",
    sessionID: "FANG_05",
    startTime: "10:02",
    personalityType: "INFP",
    duration_min: 32,
    genres: ["Hardstyle"],
    mood: 4,
    focus: 2,
    perceivedStress: 1
  }, // Fang’s session on Oct 19

  {
    date: "2025-10-19",
    sessionID: "FANG_06",
    startTime: "11:25",
    personalityType: "INFP",
    duration_min: 80,
    genres: ["K-POP", "C-POP", "DJ"],
    mood: 4,
    focus: 5,
    perceivedStress: 1
  }, // Fang’s session on Oct 19

  {
    date: "2025-10-19",
    sessionID: "MANDY_07",
    startTime: "07:56",
    personalityType: "INFJ",
    duration_min: 15,
    genres: ["Acoustic", "Pop"],
    mood: 4,
    focus: 4,
    perceivedStress: 2
  }, // Mandy’s first session on Oct 19

  {
    date: "2025-10-19",
    sessionID: "MANDY_08",
    startTime: "14:08",
    personalityType: "INFJ",
    duration_min: 45,
    genres: ["Piano", "Chill Mix"],
    mood: 3,
    focus: 5,
    perceivedStress: 4
  }, // Mandy’s second session on Oct 19

  {
    date: "2025-10-19",
    sessionID: "MANDY_09",
    startTime: "22:46",
    personalityType: "INFJ",
    duration_min: 34,
    genres: ["Ballad", "Lo-fi"],
    mood: 5,
    focus: 3,
    perceivedStress: 2
  }, // Mandy’s third session on Oct 19

  {
    date: "2025-10-19",
    sessionID: "XIAO_03",
    startTime: "10:12",
    personalityType: "ESTJ",
    duration_min: 45,
    genres: ["EDM"],
    mood: 4,
    focus: 5,
    perceivedStress: 2
  }, // Xiao’s session on Oct 19

  {
    date: "2025-10-19",
    sessionID: "ERIN_06",
    startTime: "08:18",
    personalityType: "ENFP",
    duration_min: 20,
    genres: ["R&B"],
    mood: 4,
    focus: 3,
    perceivedStress: 3
  }, // Erin’s first session on Oct 19

  {
    date: "2025-10-19",
    sessionID: "ERIN_07",
    startTime: "13:10",
    personalityType: "ENFP",
    duration_min: 28,
    genres: ["R&B", "Rap"],
    mood: 4,
    focus: 5,
    perceivedStress: 2
  }, // Erin’s second session on Oct 19

  {
    date: "2025-10-19",
    sessionID: "ZACK_07",
    startTime: "07:29",
    personalityType: "ISFJ",
    duration_min: 21,
    genres: ["C-Oldies"],
    mood: 5,
    focus: 3,
    perceivedStress: 2
  }, // Zack’s first session on Oct 19

  {
    date: "2025-10-19",
    sessionID: "ZACK_08",
    startTime: "13:55",
    personalityType: "ISFJ",
    duration_min: 65,
    genres: ["Rap"],
    mood: 4,
    focus: 5,
    perceivedStress: 2
  }, // Zack’s second session on Oct 19

  {
    date: "2025-10-19",
    sessionID: "ZACK_09",
    startTime: "19:22",
    personalityType: "ISFJ",
    duration_min: 26,
    genres: ["C-Oldies"],
    mood: 5,
    focus: 3,
    perceivedStress: 1
  }, // Zack’s third session on Oct 19

  //  2025/10/20 
  {
    date: "2025-10-20",
    sessionID: "FANG_07",
    startTime: "10:14",
    personalityType: "INFP",
    duration_min: 29,
    genres: ["Hardstyle", "House"],
    mood: 4,
    focus: 5,
    perceivedStress: 2
  }, // Fang’s session on Oct 20

  {
    date: "2025-10-20",
    sessionID: "FANG_08",
    startTime: "11:05",
    personalityType: "INFP",
    duration_min: 85,
    genres: ["C-Pop", "DJ", "K-Pop"],
    mood: 4,
    focus: 2,
    perceivedStress: 1
  }, // Fang’s session on Oct 20

  {
    date: "2025-10-20",
    sessionID: "MANDY_10",
    startTime: "08:06",
    personalityType: "INFJ",
    duration_min: 24,
    genres: ["Jazz", "Acoustic"],
    mood: 4,
    focus: 5,
    perceivedStress: 1
  }, // Mandy’s first session on Oct 20

  {
    date: "2025-10-20",
    sessionID: "MANDY_11",
    startTime: "13:38",
    personalityType: "INFJ",
    duration_min: 32,
    genres: ["Chill Mix", "Lo-fi"],
    mood: 5,
    focus: 4,
    perceivedStress: 2
  }, // Mandy’s second session on Oct 20

  {
    date: "2025-10-20",
    sessionID: "MANDY_12",
    startTime: "23:04",
    personalityType: "INFJ",
    duration_min: 21,
    genres: ["Lo-fi", "Piano"],
    mood: 4,
    focus: 5,
    perceivedStress: 2
  }, // Mandy’s third session on Oct 20

  {
    date: "2025-10-20",
    sessionID: "XIAO_04",
    startTime: "08:02",
    personalityType: "ESTJ",
    duration_min: 20,
    genres: ["C-Rap"],
    mood: 4,
    focus: 5,
    perceivedStress: 2
  }, // Xiao’s first session on Oct 20

  {
    date: "2025-10-20",
    sessionID: "XIAO_05",
    startTime: "10:06",
    personalityType: "ESTJ",
    duration_min: 50,
    genres: ["EDM"],
    mood: 4,
    focus: 3,
    perceivedStress: 2
  }, // Xiao’s second session on Oct 20

  {
    date: "2025-10-20",
    sessionID: "ERIN_08",
    startTime: "08:03",
    personalityType: "ENFP",
    duration_min: 20,
    genres: ["R&B", "Rap"],
    mood: 4,
    focus: 5,
    perceivedStress: 3
  }, // Erin’s first session on Oct 20

  {
    date: "2025-10-20",
    sessionID: "ERIN_09",
    startTime: "11:25",
    personalityType: "ENFP",
    duration_min: 30,
    genres: ["R&B"],
    mood: 4,
    focus: 5,
    perceivedStress: 3
  }, // Erin’s second session on Oct 20

  {
    date: "2025-10-20",
    sessionID: "ERIN_10",
    startTime: "15:05",
    personalityType: "ENFP",
    duration_min: 27,
    genres: ["R&B", "Rap"],
    mood: 4,
    focus: 5,
    perceivedStress: 4
  }, // Erin’s third session on Oct 20

  {
    date: "2025-10-20",
    sessionID: "ZACK_10",
    startTime: "07:31",
    personalityType: "ISFJ",
    duration_min: 20,
    genres: ["C-Oldies"],
    mood: 4,
    focus: 3,
    perceivedStress: 2
  }, // Zack’s first session on Oct 20

  {
    date: "2025-10-20",
    sessionID: "ZACK_11",
    startTime: "12:40",
    personalityType: "ISFJ",
    duration_min: 70,
    genres: ["Rap"],
    mood: 4,
    focus: 5,
    perceivedStress: 2
  }, // Zack’s second session on Oct 20

  {
    date: "2025-10-20",
    sessionID: "ZACK_12",
    startTime: "19:10",
    personalityType: "ISFJ",
    duration_min: 34,
    genres: ["C-Oldies"],
    mood: 5,
    focus: 3,
    perceivedStress: 1
  } ,// Zack’s third session on Oct 20


  // 2025/10/21 
  {
    date: "2025-10-21",
    sessionID: "FANG_09",
    startTime: "10:11",
    personalityType: "INFP",
    duration_min: 31,
    genres: ["Hardstyle"],
    mood: 4,
    focus: 3,
    perceivedStress: 1
  }, // Fang’s first session on Oct 21

  {
    date: "2025-10-21",
    sessionID: "FANG_10",
    startTime: "11:15",
    personalityType: "INFP",
    duration_min: 70,
    genres: ["K-Pop", "C-Pop", "DJ"],
    mood: 4,
    focus: 5,
    perceivedStress: 1
  }, // Fang’s second session on Oct 21

  {
    date: "2025-10-21",
    sessionID: "FANG_11",
    startTime: "15:02",
    personalityType: "INFP",
    duration_min: 20,
    genres: ["C-Oldies"],
    mood: 4,
    focus: 4,
    perceivedStress: 2
  }, // Fang’s third session on Oct 21

  {
    date: "2025-10-21",
    sessionID: "MANDY_13",
    startTime: "07:52",
    personalityType: "INFJ",
    duration_min: 12,
    genres: ["Acoustic", "Pop"],
    mood: 3,
    focus: 5,
    perceivedStress: 3
  }, // Mandy’s first session on Oct 21

  {
    date: "2025-10-21",
    sessionID: "MANDY_14",
    startTime: "15:02",
    personalityType: "INFJ",
    duration_min: 40,
    genres: ["Chill Beats", "Study Mix"],
    mood: 4,
    focus: 3,
    perceivedStress: 1
  }, // Mandy’s second session on Oct 21

  {
    date: "2025-10-21",
    sessionID: "MANDY_15",
    startTime: "20:52",
    personalityType: "INFJ",
    duration_min: 55,
    genres: ["R&B", "Jazz"],
    mood: 5,
    focus: 3,
    perceivedStress: 3
  }, // Mandy’s third session on Oct 21

  {
    date: "2025-10-21",
    sessionID: "XIAO_06",
    startTime: "10:04",
    personalityType: "ESTI",
    duration_min: 45,
    genres: ["EDM"],
    mood: 4,
    focus: 5,
    perceivedStress: 2
  }, // Xiao’s session on Oct 21

  {
    date: "2025-10-21",
    sessionID: "ERIN_11",
    startTime: "08:07",
    personalityType: "ENFP",
    duration_min: 20,
    genres: ["R&B"],
    mood: 4,
    focus: 2,
    perceivedStress: 3
  }, // Erin’s first session on Oct 21

  {
    date: "2025-10-21",
    sessionID: "ERIN_12",
    startTime: "11:10",
    personalityType: "ENFP",
    duration_min: 28,
    genres: ["R&B", "Rap"],
    mood: 4,
    focus: 5,
    perceivedStress: 2
  }, // Erin’s second session on Oct 21

  {
    date: "2025-10-21",
    sessionID: "ERIN_13",
    startTime: "16:00",
    personalityType: "ENFP",
    duration_min: 26,
    genres: ["R&B"],
    mood: 4,
    focus: 5,
    perceivedStress: 3
  }, // Erin’s third session on Oct 21

  {
    date: "2025-10-21",
    sessionID: "ZACK_13",
    startTime: "07:29",
    personalityType: "ISFJ",
    duration_min: 21,
    genres: ["C-Oldies"],
    mood: 5,
    focus: 3,
    perceivedStress: 1
  }, // Zack’s first session on Oct 21

  {
    date: "2025-10-21",
    sessionID: "ZACK_14",
    startTime: "13:35",
    personalityType: "ISFJ",
    duration_min: 62,
    genres: ["Rap"],
    mood: 4,
    focus: 5,
    perceivedStress: 2
  }, // Zack’s second session on Oct 21

  {
    date: "2025-10-21",
    sessionID: "ZACK_15",
    startTime: "19:18",
    personalityType: "ISFJ",
    duration_min: 37,
    genres: ["C-Oldies"],
    mood: 5,
    focus: 3,
    perceivedStress: 1
  }, // Zack’s third session on Oct 21

  // 2025/10/22 
  {
    date: "2025-10-22",
    sessionID: "FANG_12",
    startTime: "10:09",
    personalityType: "INFP",
    duration_min: 30,
    genres: ["Hardstyle"],
    mood: 4,
    focus: 2,
    perceivedStress: 1
  }, // Fang’s first session on Oct 22

  {
    date: "2025-10-22",
    sessionID: "FANG_13",
    startTime: "11:12",
    personalityType: "INFP",
    duration_min: 78,
    genres: ["C-Pop", "DJ", "K-Pop"],
    mood: 4,
    focus: 5,
    perceivedStress: 1
  }, // Fang’s second session on Oct 22

  {
    date: "2025-10-22",
    sessionID: "MANDY_16",
    startTime: "08:29",
    personalityType: "INFJ",
    duration_min: 35,
    genres: ["Soft Pop", "Ballad"],
    mood: 4,
    focus: 4,
    perceivedStress: 3
  }, // Mandy’s first session on Oct 22

  {
    date: "2025-10-22",
    sessionID: "MANDY_17",
    startTime: "12:46",
    personalityType: "INFJ",
    duration_min: 31,
    genres: ["Chill Mix", "Piano"],
    mood: 4,
    focus: 5,
    perceivedStress: 1
  }, // Mandy’s second session on Oct 22

  {
    date: "2025-10-22",
    sessionID: "MANDY_18",
    startTime: "19:16",
    personalityType: "INFJ",
    duration_min: 50,
    genres: ["R&B", "Soul"],
    mood: 5,
    focus: 3,
    perceivedStress: 1
  }, // Mandy’s third session on Oct 22

  {
    date: "2025-10-22",
    sessionID: "MANDY_19",
    startTime: "23:06",
    personalityType: "INFJ",
    duration_min: 24,
    genres: ["Lo-fi", "Jazz"],
    mood: 4,
    focus: 3,
    perceivedStress: 2
  }, // Mandy’s fourth session on Oct 22

  {
    date: "2025-10-22",
    sessionID: "XIAO_07",
    startTime: "10:02",
    personalityType: "ESTI",
    duration_min: 48,
    genres: ["EDM"],
    mood: 4,
    focus: 5,
    perceivedStress: 2
  }, // Xiao’s session on Oct 22

  {
    date: "2025-10-22",
    sessionID: "ERIN_14",
    startTime: "08:01",
    personalityType: "ENFP",
    duration_min: 20,
    genres: ["R&B"],
    mood: 4,
    focus: 5,
    perceivedStress: 2
  }, // Erin’s first session on Oct 22

  {
    date: "2025-10-22",
    sessionID: "ERIN_15",
    startTime: "11:35",
    personalityType: "ENFP",
    duration_min: 29,
    genres: ["R&B", "Rap"],
    mood: 4,
    focus: 5,
    perceivedStress: 5
  }, // Erin’s second session on Oct 22

  {
    date: "2025-10-22",
    sessionID: "ERIN_16",
    startTime: "15:20",
    personalityType: "ENFP",
    duration_min: 24,
    genres: ["R&B"],
    mood: 4,
    focus: 5,
    perceivedStress: 5
  }, // Erin’s third session on Oct 22

  {
    date: "2025-10-22",
    sessionID: "ZACK_16",
    startTime: "07:31",
    personalityType: "ISFJ",
    duration_min: 20,
    genres: ["C-Oldies"],
    mood: 5,
    focus: 3,
    perceivedStress: 2
  }, // Zack’s first session on Oct 22

  {
    date: "2025-10-22",
    sessionID: "ZACK_17",
    startTime: "12:55",
    personalityType: "ISFJ",
    duration_min: 72,
    genres: ["Rap"],
    mood: 4,
    focus: 5,
    perceivedStress: 1
  }, // Zack’s second session on Oct 22

  {
    date: "2025-10-22",
    sessionID: "ZACK_18",
    startTime: "19:12",
    personalityType: "ISFJ",
    duration_min: 33,
    genres: ["C-Oldies"],
    mood: 5,
    focus: 3,
    perceivedStress: 2
  } // Zack’s third session on Oct 22
  
];



// console.log(JSON.stringify(musicSessions));
showData(musicSessions);
