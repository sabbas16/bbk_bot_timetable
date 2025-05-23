import { Course } from '@/data/timetableData';
import { findTutorInfo } from '@/data/tutorData';

export const processQuery = (query: string, timetableData: Course[]): string => {
  const lowerQuery = query.toLowerCase();
  
  // Check for tutor-related queries first
  const tutorKeywords = ['who teaches', 'who is the tutor', 'tutor for', 'teacher for', 'instructor for', 'who runs', 'module leader', 'convenor'];
  const isTutorQuery = tutorKeywords.some(keyword => lowerQuery.includes(keyword));
  
  if (isTutorQuery) {
    const tutorInfo = findTutorInfo(query);
    if (tutorInfo) {
      const courseList = tutorInfo.courseNames.length > 1 
        ? tutorInfo.courseNames.slice(0, -1).join(', ') + ' and ' + tutorInfo.courseNames.slice(-1)
        : tutorInfo.courseNames[0];
      
      return `👨‍🏫 **${tutorInfo.tutorName}** teaches ${courseList}${tutorInfo.moduleCode ? ` (${tutorInfo.moduleCode})` : ''}
📧 Email: ${tutorInfo.email}
🎓 Role: ${tutorInfo.role}`;
    } else {
      return "I don't have tutor information for that course yet. Please check with the university or your course handbook for the most up-to-date contact details.";
    }
  }
  
  // Days of the week
  const days = ['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday'];
  const foundDay = days.find(day => lowerQuery.includes(day));
  
  // Course names (partial matching)
  const courseKeywords = [
    { keywords: ['database', 'db'], name: 'Database Management' },
    { keywords: ['security', 'infosec'], name: 'Information Security' },
    { keywords: ['project', 'briefing'], name: 'BSc Computing Project' },
    { keywords: ['software engineering', 'se ii'], name: 'Software Engineering II' },
    { keywords: ['data analytics', 'r programming', 'analytics'], name: 'Data Analytics' },
    { keywords: ['software programming', 'programming iii', 'sp iii'], name: 'Software and Programming III' },
    { keywords: ['help session', 'help'], name: 'Help Session' }
  ];
  
  // Time-related queries
  const timeQueries = ['time', 'when', 'schedule', 'hour'];
  const locationQueries = ['where', 'location', 'room', 'building'];
  const isTimeQuery = timeQueries.some(keyword => lowerQuery.includes(keyword));
  const isLocationQuery = locationQueries.some(keyword => lowerQuery.includes(keyword));
  
  // Find matching courses
  let matchingCourses: Course[] = [];
  
  if (foundDay) {
    matchingCourses = timetableData.filter(course => 
      course.day.toLowerCase() === foundDay
    );
  }
  
  // Check for specific course queries
  const foundCourse = courseKeywords.find(courseKeyword => 
    courseKeyword.keywords.some(keyword => lowerQuery.includes(keyword))
  );
  
  if (foundCourse) {
    matchingCourses = timetableData.filter(course =>
      course.name.toLowerCase().includes(foundCourse.keywords[0]) ||
      foundCourse.keywords.some(keyword => course.name.toLowerCase().includes(keyword))
    );
  }
  
  // Handle specific queries
  if (lowerQuery.includes('today')) {
    const today = new Date().toLocaleDateString('en-US', { weekday: 'long' }).toLowerCase();
    matchingCourses = timetableData.filter(course => 
      course.day.toLowerCase() === today
    );
  }
  
  if (lowerQuery.includes('this week')) {
    const today = new Date();
    const currentWeekCourses = timetableData.filter(course => {
      const startDate = new Date(course.startDate);
      const endDate = new Date(course.endDate);
      return startDate <= today && endDate >= today;
    });
    return formatWeeklySchedule(currentWeekCourses);
  }
  
  if (lowerQuery.includes('next week')) {
    const nextWeek = new Date();
    nextWeek.setDate(nextWeek.getDate() + 7);
    const nextWeekCourses = timetableData.filter(course => {
      const startDate = new Date(course.startDate);
      const endDate = new Date(course.endDate);
      return startDate <= nextWeek && endDate >= nextWeek;
    });
    return formatWeeklySchedule(nextWeekCourses);
  }
  
  // Format response based on query type and matches
  if (matchingCourses.length === 0) {
    if (foundDay) {
      return `You don't have any classes scheduled for ${foundDay.charAt(0).toUpperCase() + foundDay.slice(1)}s.`;
    }
    if (foundCourse) {
      return `I couldn't find any courses matching "${foundCourse.name}" in your timetable.`;
    }
    return "I couldn't find any matching classes. You can ask me about specific days (e.g., 'Monday classes'), course names (e.g., 'Database Management'), tutors (e.g., 'Who teaches Software Engineering?'), or general questions about your schedule.";
  }
  
  if (matchingCourses.length === 1) {
    const course = matchingCourses[0];
    return formatSingleCourseResponse(course, isTimeQuery, isLocationQuery);
  }
  
  return formatMultipleCourseResponse(matchingCourses, foundDay, foundCourse?.name);
};

const formatSingleCourseResponse = (course: Course, isTimeQuery: boolean, isLocationQuery: boolean): string => {
  if (isTimeQuery) {
    return `${course.name} is scheduled for ${course.day}s from ${course.time}.`;
  }
  
  if (isLocationQuery) {
    return `${course.name} takes place at ${course.location}.`;
  }
  
  return `📚 **${course.name}**
📅 ${course.day}s from ${new Date(course.startDate).toLocaleDateString()} to ${new Date(course.endDate).toLocaleDateString()}
🕐 ${course.time}
📍 ${course.location}
${course.type ? `🔗 ${course.type}` : ''}`;
};

const formatMultipleCourseResponse = (courses: Course[], day?: string, courseName?: string): string => {
  const header = day 
    ? `Here are your classes for ${day.charAt(0).toUpperCase() + day.slice(1)}s:`
    : courseName
    ? `Here are your ${courseName} related courses:`
    : 'Here are your matching courses:';
  
  const courseList = courses.map(course => 
    `📚 **${course.name}**
🕐 ${course.time}
📍 ${course.location}
${course.type ? `🔗 ${course.type}` : ''}`
  ).join('\n\n');
  
  return `${header}\n\n${courseList}`;
};

const formatWeeklySchedule = (courses: Course[]): string => {
  if (courses.length === 0) {
    return "You don't have any classes scheduled for this period.";
  }
  
  const groupedByDay = courses.reduce((acc, course) => {
    if (!acc[course.day]) acc[course.day] = [];
    acc[course.day].push(course);
    return acc;
  }, {} as Record<string, Course[]>);
  
  const dayOrder = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
  
  let schedule = "📅 **Your weekly schedule:**\n\n";
  
  dayOrder.forEach(day => {
    if (groupedByDay[day]) {
      schedule += `**${day}:**\n`;
      groupedByDay[day].forEach(course => {
        schedule += `• ${course.name} (${course.time}) - ${course.location}\n`;
      });
      schedule += '\n';
    }
  });
  
  return schedule;
};
