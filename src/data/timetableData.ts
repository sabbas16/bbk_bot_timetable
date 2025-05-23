
export interface Course {
  name: string;
  day: string;
  startDate: string;
  endDate: string;
  time: string;
  location: string;
  type?: 'HyFlex' | 'Online' | 'In-Person';
  description?: string;
  code?: string;
}

export const timetableData: Course[] = [
  // January 2025
  {
    name: "Software and Programming III - Seminar",
    day: "Wednesday",
    startDate: "2025-01-29",
    endDate: "2025-01-29",
    time: "18:00 - 21:00",
    location: "Clore MC CLO 101 and Online (Teams)",
    type: "HyFlex",
    description: "Software and Programming III seminar session",
    code: "BUCI056H6"
  },
  {
    name: "Software and Programming III - Help Session",
    day: "Friday",
    startDate: "2025-01-31",
    endDate: "2025-01-31",
    time: "18:00 - 19:00",
    location: "Online (Teams only)",
    type: "Online",
    description: "Optional help session for Software and Programming III",
    code: "BUCI056H6"
  },

  // February 2025
  {
    name: "Software and Programming III - Help Session",
    day: "Sunday",
    startDate: "2025-02-02",
    endDate: "2025-02-02",
    time: "11:00 - 12:00",
    location: "Online (Teams only)",
    type: "Online",
    description: "Optional help session for Software and Programming III"
  },
  {
    name: "Software and Programming III - Help Session",
    day: "Friday",
    startDate: "2025-02-07",
    endDate: "2025-02-07",
    time: "18:00 - 19:00",
    location: "Online (Teams only)",
    type: "Online",
    description: "Optional help session for Software and Programming III"
  },
  {
    name: "Software and Programming III - Help Session",
    day: "Sunday",
    startDate: "2025-02-09",
    endDate: "2025-02-09",
    time: "11:00 - 12:00",
    location: "Online (Teams only)",
    type: "Online",
    description: "Optional help session for Software and Programming III"
  },
  {
    name: "Software Engineering II - Seminar",
    day: "Monday",
    startDate: "2025-02-10",
    endDate: "2025-02-10",
    time: "18:00 - 21:00",
    location: "Malet St MAL B36 and Online (Teams)",
    type: "HyFlex",
    description: "Software Engineering II seminar session",
    code: "BUCI067H6"
  },
  {
    name: "Data Analytics Using R - IT Lab",
    day: "Tuesday",
    startDate: "2025-02-11",
    endDate: "2025-02-11",
    time: "18:00 - 21:00",
    location: "Malet St MAL 414 (ITS) and Online (Teams)",
    type: "HyFlex",
    description: "Data analytics laboratory session with R programming",
    code: "BUCI045H6"
  },
  {
    name: "Software and Programming III - Seminar",
    day: "Wednesday",
    startDate: "2025-02-12",
    endDate: "2025-02-12",
    time: "18:00 - 21:00",
    location: "Clore MC CLO 101 and Online (Teams)",
    type: "HyFlex",
    description: "Software and Programming III seminar session"
  },
  {
    name: "Software and Programming III - Help Session",
    day: "Friday",
    startDate: "2025-02-14",
    endDate: "2025-02-14",
    time: "18:00 - 19:00",
    location: "Online (Teams only)",
    type: "Online",
    description: "Optional help session for Software and Programming III"
  },
  {
    name: "Software and Programming III - Help Session",
    day: "Sunday",
    startDate: "2025-02-16",
    endDate: "2025-02-16",
    time: "11:00 - 12:00",
    location: "Online (Teams only)",
    type: "Online",
    description: "Optional help session for Software and Programming III"
  },
  {
    name: "Software Engineering II - Seminar",
    day: "Monday",
    startDate: "2025-02-17",
    endDate: "2025-02-17",
    time: "18:00 - 21:00",
    location: "Malet St MAL B36 and Online (Teams)",
    type: "HyFlex",
    description: "Software Engineering II seminar session"
  },
  {
    name: "Data Analytics Using R - IT Lab",
    day: "Tuesday",
    startDate: "2025-02-18",
    endDate: "2025-02-18",
    time: "18:00 - 21:00",
    location: "Malet St MAL 414 (ITS) and Online (Teams)",
    type: "HyFlex",
    description: "Data analytics laboratory session with R programming"
  },
  {
    name: "Software and Programming III - Seminar",
    day: "Wednesday",
    startDate: "2025-02-19",
    endDate: "2025-02-19",
    time: "18:00 - 21:00",
    location: "Clore MC CLO 101 and Online (Teams)",
    type: "HyFlex",
    description: "Software and Programming III seminar session"
  },
  {
    name: "Software and Programming III - Help Session",
    day: "Friday",
    startDate: "2025-02-21",
    endDate: "2025-02-21",
    time: "18:00 - 19:00",
    location: "Online (Teams only)",
    type: "Online",
    description: "Optional help session for Software and Programming III"
  },
  {
    name: "Software and Programming III - Help Session",
    day: "Sunday",
    startDate: "2025-02-23",
    endDate: "2025-02-23",
    time: "11:00 - 12:00",
    location: "Online (Teams only)",
    type: "Online",
    description: "Optional help session for Software and Programming III"
  },
  {
    name: "Software Engineering II - Seminar",
    day: "Monday",
    startDate: "2025-02-24",
    endDate: "2025-02-24",
    time: "18:00 - 21:00",
    location: "Malet St MAL B36 and Online (Teams)",
    type: "HyFlex",
    description: "Software Engineering II seminar session"
  },
  {
    name: "Data Analytics Using R - IT Lab",
    day: "Tuesday",
    startDate: "2025-02-25",
    endDate: "2025-02-25",
    time: "18:00 - 21:00",
    location: "Malet St MAL 414 (ITS) and Online (Teams)",
    type: "HyFlex",
    description: "Data analytics laboratory session with R programming"
  },
  {
    name: "Software and Programming III - Seminar",
    day: "Wednesday",
    startDate: "2025-02-26",
    endDate: "2025-02-26",
    time: "18:00 - 21:00",
    location: "Clore MC CLO 101 and Online (Teams)",
    type: "HyFlex",
    description: "Software and Programming III seminar session"
  },
  {
    name: "Software and Programming III - Help Session",
    day: "Friday",
    startDate: "2025-02-28",
    endDate: "2025-02-28",
    time: "18:00 - 19:00",
    location: "Online (Teams only)",
    type: "Online",
    description: "Optional help session for Software and Programming III"
  },

  // March 2025
  {
    name: "Software and Programming III - Help Session",
    day: "Sunday",
    startDate: "2025-03-02",
    endDate: "2025-03-02",
    time: "11:00 - 12:00",
    location: "Online (Teams only)",
    type: "Online",
    description: "Optional help session for Software and Programming III"
  },
  {
    name: "Software Engineering II - Seminar",
    day: "Monday",
    startDate: "2025-03-03",
    endDate: "2025-03-03",
    time: "18:00 - 21:00",
    location: "Malet St MAL B36 and Online (Teams)",
    type: "HyFlex",
    description: "Software Engineering II seminar session"
  },
  {
    name: "Data Analytics Using R - IT Lab",
    day: "Tuesday",
    startDate: "2025-03-04",
    endDate: "2025-03-04",
    time: "18:00 - 21:00",
    location: "Malet St MAL 414 (ITS) and Online (Teams)",
    type: "HyFlex",
    description: "Data analytics laboratory session with R programming"
  },
  {
    name: "Software and Programming III - Seminar",
    day: "Wednesday",
    startDate: "2025-03-05",
    endDate: "2025-03-05",
    time: "18:00 - 21:00",
    location: "Clore MC CLO 101 and Online (Teams)",
    type: "HyFlex",
    description: "Software and Programming III seminar session"
  },
  {
    name: "Software and Programming III - Help Session",
    day: "Friday",
    startDate: "2025-03-07",
    endDate: "2025-03-07",
    time: "18:00 - 19:00",
    location: "Online (Teams only)",
    type: "Online",
    description: "Optional help session for Software and Programming III"
  },
  {
    name: "Software and Programming III - Help Session",
    day: "Sunday",
    startDate: "2025-03-09",
    endDate: "2025-03-09",
    time: "11:00 - 12:00",
    location: "Online (Teams only)",
    type: "Online",
    description: "Optional help session for Software and Programming III"
  },
  {
    name: "Software Engineering II - Seminar",
    day: "Monday",
    startDate: "2025-03-10",
    endDate: "2025-03-10",
    time: "18:00 - 21:00",
    location: "Malet St MAL B36 and Online (Teams)",
    type: "HyFlex",
    description: "Software Engineering II seminar session"
  },
  {
    name: "Data Analytics Using R - IT Lab",
    day: "Tuesday",
    startDate: "2025-03-11",
    endDate: "2025-03-11",
    time: "18:00 - 21:00",
    location: "Malet St MAL 414 (ITS) and Online (Teams)",
    type: "HyFlex",
    description: "Data analytics laboratory session with R programming"
  },
  {
    name: "Software and Programming III - Seminar",
    day: "Wednesday",
    startDate: "2025-03-12",
    endDate: "2025-03-12",
    time: "18:00 - 21:00",
    location: "Clore MC CLO 101 and Online (Teams)",
    type: "HyFlex",
    description: "Software and Programming III seminar session"
  },
  {
    name: "Software and Programming III - Help Session",
    day: "Friday",
    startDate: "2025-03-14",
    endDate: "2025-03-14",
    time: "18:00 - 19:00",
    location: "Online (Teams only)",
    type: "Online",
    description: "Optional help session for Software and Programming III"
  },
  {
    name: "BSc Computing Project - Briefing Session",
    day: "Friday",
    startDate: "2025-03-14",
    endDate: "2025-03-14",
    time: "18:00 - 19:30",
    location: "Birkbeck Central BCB 307 and Online (Teams)",
    type: "HyFlex",
    description: "BSc Computing Project briefing session seminar",
    code: "BUCI027S6"
  },
  {
    name: "Software and Programming III - Help Session",
    day: "Sunday",
    startDate: "2025-03-16",
    endDate: "2025-03-16",
    time: "11:00 - 12:00",
    location: "Online (Teams only)",
    type: "Online",
    description: "Optional help session for Software and Programming III"
  },
  {
    name: "Software Engineering II - Seminar",
    day: "Monday",
    startDate: "2025-03-17",
    endDate: "2025-03-17",
    time: "18:00 - 21:00",
    location: "Malet St MAL B36 and Online (Teams)",
    type: "HyFlex",
    description: "Software Engineering II seminar session"
  },
  {
    name: "Data Analytics Using R - IT Lab",
    day: "Tuesday",
    startDate: "2025-03-18",
    endDate: "2025-03-18",
    time: "18:00 - 21:00",
    location: "Malet St MAL 414 (ITS) and Online (Teams)",
    type: "HyFlex",
    description: "Data analytics laboratory session with R programming"
  },
  {
    name: "Software and Programming III - Seminar",
    day: "Wednesday",
    startDate: "2025-03-19",
    endDate: "2025-03-19",
    time: "18:00 - 21:00",
    location: "Clore MC CLO 101 and Online (Teams)",
    type: "HyFlex",
    description: "Software and Programming III seminar session"
  },
  {
    name: "Software and Programming III - Help Session",
    day: "Friday",
    startDate: "2025-03-21",
    endDate: "2025-03-21",
    time: "18:00 - 19:00",
    location: "Online (Teams only)",
    type: "Online",
    description: "Optional help session for Software and Programming III"
  },
  {
    name: "Software and Programming III - Help Session",
    day: "Sunday",
    startDate: "2025-03-23",
    endDate: "2025-03-23",
    time: "11:00 - 12:00",
    location: "Online (Teams only)",
    type: "Online",
    description: "Optional help session for Software and Programming III"
  },
  {
    name: "Software and Programming III - Seminar",
    day: "Wednesday",
    startDate: "2025-03-26",
    endDate: "2025-03-26",
    time: "18:00 - 21:00",
    location: "Clore MC CLO 101 and Online (Teams)",
    type: "HyFlex",
    description: "Software and Programming III seminar session"
  },

  // April-July 2025 - Mobile Computing IT Lab (recurring Tuesdays)
  {
    name: "Mobile Computing - IT Lab",
    day: "Tuesday",
    startDate: "2025-04-29",
    endDate: "2025-04-29",
    time: "18:00 - 21:00",
    location: "Malet St MAL 403 (CSC) and Online (Teams)",
    type: "HyFlex",
    description: "Mobile Computing laboratory session",
    code: "BUCI046H6"
  },
  {
    name: "Mobile Computing - IT Lab",
    day: "Tuesday",
    startDate: "2025-05-06",
    endDate: "2025-05-06",
    time: "18:00 - 21:00",
    location: "Malet St MAL 403 (CSC) and Online (Teams)",
    type: "HyFlex",
    description: "Mobile Computing laboratory session",
    code: "BUCI046H6"
  },
  {
    name: "Mobile Computing - IT Lab",
    day: "Tuesday",
    startDate: "2025-05-13",
    endDate: "2025-05-13",
    time: "18:00 - 21:00",
    location: "Malet St MAL 403 (CSC) and Online (Teams)",
    type: "HyFlex",
    description: "Mobile Computing laboratory session",
    code: "BUCI046H6"
  },
  {
    name: "Mobile Computing - IT Lab",
    day: "Tuesday",
    startDate: "2025-05-20",
    endDate: "2025-05-20",
    time: "18:00 - 21:00",
    location: "Malet St MAL 403 (CSC) and Online (Teams)",
    type: "HyFlex",
    description: "Mobile Computing laboratory session",
    code: "BUCI046H6"
  },
  {
    name: "Mobile Computing - IT Lab",
    day: "Tuesday",
    startDate: "2025-05-27",
    endDate: "2025-05-27",
    time: "18:00 - 21:00",
    location: "Malet St MAL 403 (CSC) and Online (Teams)",
    type: "HyFlex",
    description: "Mobile Computing laboratory session",
    code: "BUCI046H6"
  },
  {
    name: "Mobile Computing - IT Lab",
    day: "Tuesday",
    startDate: "2025-06-03",
    endDate: "2025-06-03",
    time: "18:00 - 21:00",
    location: "Malet St MAL 403 (CSC) and Online (Teams)",
    type: "HyFlex",
    description: "Mobile Computing laboratory session",
    code: "BUCI046H6"
  },
  {
    name: "Mobile Computing - IT Lab",
    day: "Tuesday",
    startDate: "2025-06-10",
    endDate: "2025-06-10",
    time: "18:00 - 21:00",
    location: "Malet St MAL 403 (CSC) and Online (Teams)",
    type: "HyFlex",
    description: "Mobile Computing laboratory session",
    code: "BUCI046H6"
  },
  {
    name: "Mobile Computing - IT Lab",
    day: "Tuesday",
    startDate: "2025-06-17",
    endDate: "2025-06-17",
    time: "18:00 - 21:00",
    location: "Malet St MAL 403 (CSC) and Online (Teams)",
    type: "HyFlex",
    description: "Mobile Computing laboratory session",
    code: "BUCI046H6"
  },
  {
    name: "Mobile Computing - IT Lab",
    day: "Tuesday",
    startDate: "2025-06-24",
    endDate: "2025-06-24",
    time: "18:00 - 21:00",
    location: "Malet St MAL 403 (CSC) and Online (Teams)",
    type: "HyFlex",
    description: "Mobile Computing laboratory session",
    code: "BUCI046H6"
  },
  {
    name: "Mobile Computing - IT Lab",
    day: "Tuesday",
    startDate: "2025-07-01",
    endDate: "2025-07-01",
    time: "18:00 - 21:00",
    location: "Malet St MAL 403 (CSC) and Online (Teams)",
    type: "HyFlex",
    description: "Mobile Computing laboratory session",
    code: "BUCI046H6"
  }
];
