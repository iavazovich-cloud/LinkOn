import React from 'react';
import { Link } from 'lucide-react';

export const Logo: React.FC<{ className?: string }> = ({ className = "" }) => {
  return (
    <div className={`flex items-center gap-2 font-bold text-2xl tracking-tight select-none ${className}`}>
      <div className="relative flex items-center justify-center w-8 h-8 rounded-lg bg-gradient-to-tr from-indigo-500 to-pink-500 text-white shadow-lg shadow-indigo-500/20">
        <Link size={18} strokeWidth={3} className="transform -rotate-45" />
      </div>
      <span className="text-white">
        Link<span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-pink-400">On</span>
      </span>
    </div>
  );
};