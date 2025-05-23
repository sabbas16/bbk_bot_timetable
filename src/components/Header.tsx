
import React from 'react';
import { GraduationCap, Bot } from 'lucide-react';

const Header = () => {
  return (
    <header className="bg-white/80 backdrop-blur-sm border-b border-gray-200 sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-2 rounded-lg">
              <GraduationCap className="h-6 w-6 text-white" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-gray-900">Birkbeck University</h1>
              <p className="text-sm text-gray-600">Student Timetable Assistant</p>
            </div>
          </div>
          <div className="flex items-center space-x-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-2 rounded-full">
            <Bot className="h-4 w-4" />
            <span className="font-medium">BBK BOT</span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
