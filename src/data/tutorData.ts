
export interface TutorInfo {
  courseNames: string[];
  moduleCode: string;
  tutorName: string;
  role: string;
  email: string;
}

export const tutorData: TutorInfo[] = [
  {
    courseNames: ['Software and Programming III', 'Software Programming III', 'SP III'],
    moduleCode: 'BUCI056H6',
    tutorName: 'Dr. Keith L. Mannock',
    role: 'Module Leader',
    email: 'k.mannock@bbk.ac.uk'
  },
  {
    courseNames: ['Software Engineering II', 'SE II'],
    moduleCode: 'BUCI067H6',
    tutorName: 'Dr. Jan Hidders',
    role: 'Module Convenor',
    email: 'j.hidders@bbk.ac.uk'
  },
  {
    courseNames: ['Data Analytics Using R', 'Data Analytics', 'R Programming'],
    moduleCode: 'BUCI045H6',
    tutorName: 'Jeremy Smallwood',
    role: 'Module Convenor',
    email: 'jeremy.smallwood@bbk.ac.uk'
  },
  {
    courseNames: ['Data Management and Analysis'],
    moduleCode: '',
    tutorName: 'Jeremy Smallwood',
    role: 'Module Convenor',
    email: 'jeremy.smallwood@bbk.ac.uk'
  },
  {
    courseNames: ['Mobile Computing'],
    moduleCode: 'BUCI046H6',
    tutorName: 'George Kortsaridis',
    role: 'Module Convenor',
    email: 'g.kortsaridis@bbk.ac.uk'
  },
  {
    courseNames: ['BSc Computing Project', 'Computing Project'],
    moduleCode: 'BUCI027S6',
    tutorName: 'Steve Morgan',
    role: 'Programme Administrator',
    email: 'cs-ug@bbk.ac.uk'
  }
];

export const findTutorInfo = (query: string): TutorInfo | null => {
  const lowerQuery = query.toLowerCase().replace(/[^\w\s]/g, '').trim();
  
  // Check for module codes first
  const foundByCode = tutorData.find(tutor => 
    tutor.moduleCode && lowerQuery.includes(tutor.moduleCode.toLowerCase())
  );
  
  if (foundByCode) return foundByCode;
  
  // Check for course names with improved partial matching
  const foundByName = tutorData.find(tutor =>
    tutor.courseNames.some(courseName => {
      const cleanCourseName = courseName.toLowerCase().replace(/[^\w\s]/g, '').trim();
      const courseWords = cleanCourseName.split(/\s+/);
      const queryWords = lowerQuery.split(/\s+/);
      
      // Direct substring matching (both directions)
      if (cleanCourseName.includes(lowerQuery) || lowerQuery.includes(cleanCourseName)) {
        return true;
      }
      
      // For partial matches, check if query words match course words
      // This handles "Software Engineering" matching "Software Engineering II"
      if (queryWords.length >= 2) {
        const matchingWords = queryWords.filter(queryWord => 
          queryWord.length > 2 && courseWords.some(courseWord => 
            courseWord.startsWith(queryWord) || queryWord.startsWith(courseWord) ||
            courseWord === queryWord
          )
        );
        // If most of the query words match, consider it a match
        return matchingWords.length >= queryWords.length;
      }
      
      // For single word queries, be more flexible
      if (queryWords.length === 1 && queryWords[0].length > 3) {
        return courseWords.some(courseWord => 
          courseWord.includes(queryWords[0]) || queryWords[0].includes(courseWord)
        );
      }
      
      return false;
    })
  );
  
  return foundByName || null;
};
