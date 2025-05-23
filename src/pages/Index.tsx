
import React from 'react';
import ChatInterface from '@/components/ChatInterface';
import TimetableDisplay from '@/components/TimetableDisplay';
import ParticlesBackground from '@/components/ParticlesBackground';

const Index = () => {
  return (
    <div className="min-h-screen bg-dark text-gray-100 font-inter relative overflow-hidden">
      <ParticlesBackground />
      
      {/* Content Layer */}
      <div className="relative z-10">
        {/* Header Section */}
        <div className="flex flex-col items-center pt-16 pb-12">
          <div className="mb-8">
            <h1 className="text-5xl md:text-6xl font-bold mb-4 text-center tracking-tight bg-gradient-to-r from-blue-accent via-pink-accent to-teal-accent bg-clip-text text-transparent" 
                style={{
                  textShadow: '0 0 2px rgba(138, 180, 248, 0.3)',
                  filter: 'drop-shadow(0 0 1px rgba(138, 180, 248, 0.2))'
                }}>
              BBK Bot
            </h1>
            <p className="text-xl text-gray-400 text-center font-light">
              Your intelligent university timetable assistant
            </p>
          </div>
        </div>

        {/* Main Content */}
        <div className="container mx-auto px-6 pb-12">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-8">
              <div className="order-2 lg:order-1">
                <div 
                  className="rounded-2xl p-1 shadow-2xl hover:shadow-blue-accent/20 transition-all duration-300"
                  style={{
                    background: 'rgba(20, 20, 30, 0.4)',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                    backdropFilter: 'blur(12px)',
                    WebkitBackdropFilter: 'blur(12px)'
                  }}
                >
                  <TimetableDisplay />
                </div>
              </div>
              <div className="order-1 lg:order-2">
                <div 
                  className="rounded-2xl p-1 shadow-2xl hover:shadow-pink-accent/20 transition-all duration-300"
                  style={{
                    background: 'rgba(20, 20, 30, 0.4)',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                    backdropFilter: 'blur(12px)',
                    WebkitBackdropFilter: 'blur(12px)'
                  }}
                >
                  <ChatInterface />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
