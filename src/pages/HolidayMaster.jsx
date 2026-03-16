import React, { useState } from 'react';
import { 
  ChevronLeft, 
  ChevronRight, 
  Plus, 
  Calendar as CalendarIcon, 
  List,
  Edit2, 
  Trash2,
  MapPin,
  Clock
} from "lucide-react";

const HolidayMaster = () => {
  const [viewType, setViewType] = useState('calendar'); // 'calendar' or 'list'
  const [currentDate, setCurrentDate] = useState(new Date(2025, 5, 1)); // June 2025

  const holidays = [
    { id: 1, title: "Bakri ID", date: "2025-06-15", status: "Active", type: "Public" },
    { id: 2, title: "Summer Vacation Begins", date: "2025-06-01", status: "Active", type: "Academic" },
    { id: 3, title: "Staff Training", date: "2025-06-25", status: "Inactive", type: "Staff" },
  ];

  // Helper to render calendar days
  const renderCalendar = () => {
    const days = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0).getDate();
    const firstDay = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1).getDay();
    const cells = [];

    for (let i = 0; i < firstDay; i++) cells.push(<div key={`empty-${i}`} className="h-24 bg-gray-50/50 border-b border-r border-gray-100" />);
    
    for (let d = 1; d <= days; d++) {
      const dateStr = `${currentDate.getFullYear()}-${String(currentDate.getMonth() + 1).padStart(2, '0')}-${String(d).padStart(2, '0')}`;
      const dayHolidays = holidays.filter(h => h.date === dateStr);
      
      cells.push(
        <div key={d} className="h-24 border-b border-r border-gray-100 p-2 hover:bg-blue-50/30 transition-all group">
          <span className="text-xs font-black text-gray-400">{d}</span>
          <div className="mt-1 space-y-1">
            {dayHolidays.map(h => (
              <div key={h.id} className="bg-blue-600 text-white text-[9px] font-bold px-1.5 py-0.5 rounded shadow-sm truncate">
                {h.title}
              </div>
            ))}
          </div>
        </div>
      );
    }
    return cells;
  };

  return (
    <div className="space-y-6">
      {/* --- HEADER --- */}
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 bg-white p-6 rounded-3xl border border-gray-100 shadow-sm">
        <div className="flex items-center gap-4">
          <div className="p-3 bg-blue-50 text-blue-600 rounded-2xl">
            <CalendarIcon size={24} />
          </div>
          <div>
            <h2 className="text-2xl font-black text-gray-900">
              {currentDate.toLocaleString('default', { month: 'long' })} {currentDate.getFullYear()}
            </h2>
            <div className="flex gap-2 mt-1">
              <button onClick={() => setCurrentDate(new Date(currentDate.setMonth(currentDate.getMonth() - 1)))} className="p-1 hover:bg-gray-100 rounded-lg"><ChevronLeft size={18}/></button>
              <button onClick={() => setCurrentDate(new Date(currentDate.setMonth(currentDate.getMonth() + 1)))} className="p-1 hover:bg-gray-100 rounded-lg"><ChevronRight size={18}/></button>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-2 bg-gray-100 p-1 rounded-xl">
          <button 
            onClick={() => setViewType('calendar')}
            className={`flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-bold transition-all ${viewType === 'calendar' ? 'bg-white text-blue-600 shadow-sm' : 'text-gray-500'}`}
          >
            <CalendarIcon size={14} /> Calendar
          </button>
          <button 
            onClick={() => setViewType('list')}
            className={`flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-bold transition-all ${viewType === 'list' ? 'bg-white text-blue-600 shadow-sm' : 'text-gray-500'}`}
          >
            <List size={14} /> List View
          </button>
        </div>

        <button className="flex items-center gap-2 px-6 py-3 bg-[#4F46E5] text-white font-bold rounded-xl hover:shadow-lg transition-all text-sm">
          <Plus size={18} strokeWidth={3} /> Add Holiday
        </button>
      </div>

      {/* --- CONTENT AREA --- */}
      {viewType === 'calendar' ? (
        <div className="bg-white rounded-[2.5rem] border border-gray-100 shadow-sm overflow-hidden">
          <div className="grid grid-cols-7 bg-gray-50 border-b border-gray-100 text-[10px] font-black text-gray-400 uppercase tracking-widest text-center py-3">
            {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map(d => <div key={d}>{d}</div>)}
          </div>
          <div className="grid grid-cols-7 border-l border-gray-100">
            {renderCalendar()}
          </div>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {holidays.map((h, idx) => (
            <div key={h.id} className="bg-white p-6 rounded-[2rem] border border-gray-100 shadow-sm hover:shadow-xl transition-all flex flex-col h-full">
              <div className="flex justify-between items-start mb-4">
                <span className="text-[10px] font-black text-gray-300">0{idx + 1}</span>
                <span className={`px-2 py-0.5 rounded-full text-[9px] font-black ${h.status === 'Active' ? 'bg-green-50 text-green-600' : 'bg-gray-100 text-gray-400'}`}>
                  {h.status.toUpperCase()}
                </span>
              </div>
              <div className="flex-grow">
                <h3 className="text-xl font-black text-gray-800 mb-2">{h.title}</h3>
                <div className="flex items-center gap-2 text-gray-400 mb-4">
                  <Clock size={14} />
                  <span className="text-xs font-bold">{h.date}</span>
                </div>
              </div>
              <div className="flex gap-2 border-t border-gray-50 pt-4 mt-auto">
                <button className="flex-1 py-3 bg-gray-50 text-gray-600 rounded-xl font-bold text-xs hover:bg-blue-600 hover:text-white transition-all">Edit</button>
                <button className="p-3 bg-rose-50 text-rose-500 rounded-xl hover:bg-rose-500 hover:text-white transition-all"><Trash2 size={16}/></button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default HolidayMaster;