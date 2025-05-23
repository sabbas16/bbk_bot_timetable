
import React, { useState } from 'react';
import { Calendar, Clock, MapPin, Monitor, Users } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { timetableData } from '@/data/timetableData';

const TimetableDisplay = () => {
  const [filter, setFilter] = useState<'all' | 'current' | 'upcoming'>('all');

  const getFilteredCourses = () => {
    const now = new Date();
    const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
    
    return timetableData.filter(course => {
      if (filter === 'all') return true;
      
      const endDate = new Date(course.endDate);
      if (filter === 'current') {
        const startDate = new Date(course.startDate);
        return startDate <= today && endDate >= today;
      }
      if (filter === 'upcoming') {
        const startDate = new Date(course.startDate);
        return startDate > today;
      }
      return true;
    });
  };

  const filteredCourses = getFilteredCourses();

  const getStatusBadge = (course: any) => {
    const now = new Date();
    const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
    const startDate = new Date(course.startDate);
    const endDate = new Date(course.endDate);

    if (startDate > today) {
      return <Badge variant="outline" className="bg-blue-accent/20 text-blue-accent border-blue-accent/30">Upcoming</Badge>;
    } else if (startDate <= today && endDate >= today) {
      return <Badge className="bg-teal-accent/20 text-teal-accent border-teal-accent/30">Current</Badge>;
    } else {
      return <Badge variant="secondary" className="bg-gray-700 text-gray-300">Completed</Badge>;
    }
  };

  return (
    <div className="p-6 h-full bg-transparent">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-2xl font-bold bg-gradient-to-r from-blue-accent via-pink-accent to-teal-accent bg-clip-text text-transparent">Your Timetable</h2>
        </div>
        <div className="flex space-x-2">
          <Button
            variant={filter === 'all' ? 'default' : 'outline'}
            size="sm"
            onClick={() => setFilter('all')}
            className={filter === 'all' 
              ? 'bg-gradient-to-r from-blue-accent to-teal-accent text-dark font-semibold shadow-lg shadow-blue-accent/30 border-none hover:shadow-blue-accent/40' 
              : 'bg-gray-700/80 border-gray-500 text-gray-200 hover:bg-gray-600 hover:border-blue-accent/60 hover:text-white transition-all duration-200 shadow-md hover:shadow-blue-accent/20'
            }
          >
            All
          </Button>
          <Button
            variant={filter === 'current' ? 'default' : 'outline'}
            size="sm"
            onClick={() => setFilter('current')}
            className={filter === 'current' 
              ? 'bg-gradient-to-r from-blue-accent to-teal-accent text-dark font-semibold shadow-lg shadow-blue-accent/30 border-none hover:shadow-blue-accent/40' 
              : 'bg-gray-700/80 border-gray-500 text-gray-200 hover:bg-gray-600 hover:border-blue-accent/60 hover:text-white transition-all duration-200 shadow-md hover:shadow-blue-accent/20'
            }
          >
            Current
          </Button>
          <Button
            variant={filter === 'upcoming' ? 'default' : 'outline'}
            size="sm"
            onClick={() => setFilter('upcoming')}
            className={filter === 'upcoming' 
              ? 'bg-gradient-to-r from-blue-accent to-teal-accent text-dark font-semibold shadow-lg shadow-blue-accent/30 border-none hover:shadow-blue-accent/40' 
              : 'bg-gray-700/80 border-gray-500 text-gray-200 hover:bg-gray-600 hover:border-blue-accent/60 hover:text-white transition-all duration-200 shadow-md hover:shadow-blue-accent/20'
            }
          >
            Upcoming
          </Button>
        </div>
      </div>

      <div className="space-y-4 max-h-[500px] overflow-y-auto scrollbar-thin scrollbar-thumb-gray-600 scrollbar-track-transparent">
        {filteredCourses.length === 0 ? (
          <div className="text-center py-8">
            <p className="text-gray-400 text-lg">No courses found</p>
          </div>
        ) : (
          filteredCourses.map((course, index) => (
            <Card 
              key={index} 
              className="border-gray-600/30 hover:shadow-lg hover:shadow-blue-accent/10 hover:border-blue-accent/40 transition-all duration-300"
              style={{
                background: 'rgba(30, 30, 40, 0.6)',
                backdropFilter: 'blur(8px)',
                WebkitBackdropFilter: 'blur(8px)'
              }}
            >
              <CardHeader className="pb-3">
                <div className="flex items-start justify-between">
                  <CardTitle className="text-lg font-semibold text-white">
                    {course.name}
                  </CardTitle>
                  {getStatusBadge(course)}
                </div>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center space-x-2 text-gray-300">
                  <Calendar className="h-4 w-4 text-blue-accent" />
                  <span className="text-sm">
                    {course.day}s • {new Date(course.startDate).toLocaleDateString()} - {new Date(course.endDate).toLocaleDateString()}
                  </span>
                </div>
                
                <div className="flex items-center space-x-2 text-gray-300">
                  <Clock className="h-4 w-4 text-pink-accent" />
                  <span className="text-sm">{course.time}</span>
                </div>
                
                <div className="flex items-center space-x-2 text-gray-300">
                  <MapPin className="h-4 w-4 text-teal-accent" />
                  <span className="text-sm">{course.location}</span>
                </div>
                
                {course.type && (
                  <div className="flex items-center space-x-2">
                    {course.type === 'HyFlex' && (
                      <>
                        <Monitor className="h-4 w-4 text-blue-accent" />
                        <Badge variant="outline" className="bg-blue-accent/20 text-blue-accent border-blue-accent/30">
                          HyFlex
                        </Badge>
                      </>
                    )}
                    {course.type === 'Online' && (
                      <>
                        <Monitor className="h-4 w-4 text-teal-accent" />
                        <Badge variant="outline" className="bg-teal-accent/20 text-teal-accent border-teal-accent/30">
                          Online Only
                        </Badge>
                      </>
                    )}
                    {course.type === 'In-Person' && (
                      <>
                        <Users className="h-4 w-4 text-pink-accent" />
                        <Badge variant="outline" className="bg-pink-accent/20 text-pink-accent border-pink-accent/30">
                          In-Person
                        </Badge>
                      </>
                    )}
                  </div>
                )}
              </CardContent>
            </Card>
          ))
        )}
      </div>
    </div>
  );
};

export default TimetableDisplay;
