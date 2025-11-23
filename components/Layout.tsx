import React from 'react';
import { Navbar } from './Navbar';
import { Footer } from './Footer';

export const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col bg-[#050507] text-white overflow-hidden relative selection:bg-indigo-500/30">
      
      {/* Dynamic Background Gradients */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] bg-violet-900/20 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-indigo-900/20 rounded-full blur-[120px]" />
        <div className="absolute top-[40%] left-[20%] w-[30%] h-[30%] bg-pink-900/10 rounded-full blur-[100px]" />
      </div>

      <Navbar />
      
      <main className="flex-grow z-10 pt-24 relative">
        {children}
      </main>
      
      <Footer />
    </div>
  );
};