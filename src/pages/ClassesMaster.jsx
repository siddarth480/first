import React, { useState } from 'react';
import { 
  Search, Plus, Edit2, Trash2, 
  DoorOpen, Layers, Users, 
  AlertTriangle, CheckCircle2, Info
} from "lucide-react";

const ClassesMaster = () => {
  const [searchTerm, setSearchTerm] = useState("");
  
  const classrooms = [
    { id: 1, name: "Room 101", block: "A-Block", floor: "1st Floor", capacity: 40, occupied: 38, type: "Theory" },
    { id: 2, name: "Room 102", block: "A-Block", floor: "1st Floor", capacity: 40, occupied: 20, type: "Theory" },
    { id: 3, name: "Physics Lab", block: "C-Block", floor: "Ground Floor", capacity: 30, occupied: 28, type: "Lab" },
    { id: 4, name: "Room 305", block: "B-Block", floor: "3rd Floor", capacity: 50, occupied: 10, type: "Theory" },
    { id: 5, name: "Computer Lab 1", block: "C-Block", floor: "2nd Floor", capacity: 25, occupied: 25, type: "Lab" },
  ];

  return (
    <div className="space-y-6 min-h-screen bg-[#F8FAFC]">
      
      {/* --- HEADER --- */}
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 bg-white p-4 rounded-2xl border border-gray-100 shadow-sm">
        <div className="relative flex-1 max-w-md">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-[#4F46E5] transition-colors" size={18} />
          <input 
            type="text" 
            placeholder="Search room, floor or block..." 
            className="w-full pl-10 pr-4 py-2.5 bg-gray-50 border border-gray-200 rounded-xl outline-none focus:ring-4 focus:ring-[#4F46E5]/10 focus:border-[#4F46E5] transition-all text-sm shadow-sm"
          />
        </div>
        
        <button className="flex items-center gap-2 px-6 py-2.5 bg-[#4F46E5] text-white font-bold rounded-xl hover:shadow-lg transition-all active:scale-95 text-sm">
          <Plus size={18} strokeWidth={3} /> Add Classroom
        </button>
      </div>

      {/* --- CLASSROOM GRID --- */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
        {classrooms.map((room) => {
          const occupancyRate = (room.occupied / room.capacity) * 100;
          const isFull = occupancyRate >= 90;

          return (
            <div key={room.id} className="bg-white rounded-4xl border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 group">
              <div className="p-6">
                
                {/* Header: Room Name & Type */}
                <div className="flex justify-between items-start mb-6">
                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-blue-50 text-[#4F46E5] rounded-2xl group-hover:bg-[#4F46E5] group-hover:text-white transition-all">
                      <DoorOpen size={24} />
                    </div>
                    <div>
                      <h3 className="text-xl font-black text-gray-800 tracking-tight">{room.name}</h3>
                      <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">{room.type}</span>
                    </div>
                  </div>
                  <div className="flex gap-1">
                    <button className="p-2 text-gray-400 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-all"><Edit2 size={14}/></button>
                    <button className="p-2 text-gray-400 hover:text-rose-500 hover:bg-rose-50 rounded-lg transition-all"><Trash2 size={14}/></button>
                  </div>
                </div>

                {/* Floor & Block Info */}
                <div className="grid grid-cols-2 gap-4 mb-8">
                  <div className="flex items-center gap-2 px-3 py-2 bg-gray-50 rounded-xl border border-gray-100">
                    <Layers size={14} className="text-gray-400" />
                    <span className="text-xs font-bold text-gray-600 truncate">{room.floor}</span>
                  </div>
                  <div className="flex items-center gap-2 px-3 py-2 bg-gray-50 rounded-xl border border-gray-100">
                    <Info size={14} className="text-gray-400" />
                    <span className="text-xs font-bold text-gray-600 truncate">{room.block}</span>
                  </div>
                </div>

                {/* OCCUPANCY PROGRESS BAR */}
                <div className="space-y-3">
                  <div className="flex justify-between items-end">
                    <div className="flex items-center gap-2">
                      <Users size={16} className={isFull ? "text-rose-500" : "text-blue-500"} />
                      <span className="text-xs font-black text-gray-700 uppercase tracking-tighter">Capacity Status</span>
                    </div>
                    <span className={`text-xs font-black ${isFull ? "text-rose-600" : "text-gray-500"}`}>
                      {room.occupied} / {room.capacity} Seats
                    </span>
                  </div>

                  {/* The Progress Bar */}
                  <div className="h-3 w-full bg-gray-100 rounded-full overflow-hidden border border-gray-50 p-0.5">
                    <div 
                      className={`h-full rounded-full transition-all duration-1000 ${
                        occupancyRate > 90 ? 'bg-rose-500 shadow-[0_0_10px_rgba(244,63,94,0.4)]' : 
                        occupancyRate > 50 ? 'bg-amber-400' : 'bg-emerald-500'
                      }`}
                      style={{ width: `${occupancyRate}%` }}
                    ></div>
                  </div>

                  {/* Occupancy Alert */}
                  {isFull && (
                    <div className="flex items-center gap-2 text-[10px] font-bold text-rose-500 mt-2 animate-pulse">
                      <AlertTriangle size={12} /> NEAR MAXIMUM CAPACITY
                    </div>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ClassesMaster;