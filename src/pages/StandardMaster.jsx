import React, { useState } from 'react';
import { 
  Search, 
  Plus, 
  Edit2, 
  Trash2, 
  Users, 
  BookOpen, 
  Layers,
  Filter,
  ArrowRight
} from "lucide-react";

const StandardMaster = () => {
  const [searchTerm, setSearchTerm] = useState("");
  
  // Data including Stream Colors for visual recognition
  const [standards] = useState([
    { id: 1, name: "10th Standard", code: "STD-10", students: 240, subjects: 8, stream: "General", color: "bg-blue-500" },
    { id: 2, name: "11th Science", code: "STD-11-SCI", students: 120, subjects: 6, stream: "Science", color: "bg-indigo-500" },
    { id: 3, name: "11th Commerce", code: "STD-11-COM", students: 150, subjects: 7, stream: "Commerce", color: "bg-emerald-500" },
    { id: 4, name: "12th Science", code: "STD-12-SCI", students: 115, subjects: 6, stream: "Science", color: "bg-indigo-600" },
    { id: 5, name: "12th Arts", code: "STD-12-ART", students: 90, subjects: 9, stream: "Arts", color: "bg-rose-500" },
  ]);

  const filteredData = standards.filter(std => 
    std.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    std.stream.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="space-y-6 min-h-screen bg-[#F8FAFC] p-2">
      
      {/* --- TOP ACTION BAR --- */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 bg-white p-4 rounded-2xl border border-gray-100 shadow-sm">
        <div className="relative flex-1 max-w-md">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-[#4F46E5] transition-colors" size={18} />
          <input 
            type="text" 
            placeholder="Search standard or stream..." 
            className="w-full pl-10 pr-4 py-2.5 bg-gray-50 border border-gray-200 rounded-xl outline-none focus:ring-4 focus:ring-blue-500/10 focus:border-blue-500 transition-all text-sm shadow-sm"
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        
        <div className="flex items-center gap-2">
          <button className="p-2.5 text-gray-500 hover:bg-gray-50 rounded-xl border border-gray-200 transition-colors">
            <Filter size={18} />
          </button>
          <button className="flex items-center gap-2 px-6 py-2.5 bg-[#4F46E5] text-white font-bold rounded-xl hover:shadow-lg transition-all active:scale-95 text-sm">
            <Plus size={18} strokeWidth={3} /> Add Standard
          </button>
        </div>
      </div>

      {/* --- STANDARD CARD GRID --- */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {filteredData.map((std) => (
          <div key={std.id} className="bg-white rounded-4xl border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col h-full overflow-hidden group">
            
            {/* Stream Color Accent Bar */}
            <div className={`h-2 w-full ${std.color}`}></div>

            <div className="p-6 grow">
              {/* Header: Icon & Code */}
              <div className="flex justify-between items-start mb-6">
                <div className="p-3 bg-gray-50 text-gray-400 group-hover:bg-blue-50 group-hover:text-[#4F46E5] rounded-2xl transition-all duration-300">
                  <Layers size={24} />
                </div>
                <span className="text-[10px] font-black text-gray-400 bg-gray-50 px-2 py-1 rounded-lg tracking-widest uppercase">
                  {std.code}
                </span>
              </div>

              {/* Standard Name & Stream Info */}
              <div className="mb-8">
                <h3 className="text-2xl font-black text-gray-800 tracking-tight group-hover:text-[#4F46E5] transition-colors">
                  {std.name}
                </h3>
                <span className="text-xs font-bold text-gray-400 uppercase tracking-widest">{std.stream} Stream</span>
              </div>

              {/* Bird's Eye Stats Section */}
              <div className="grid grid-cols-2 gap-4">
                <div className="p-4 bg-gray-50 rounded-3xl border border-gray-100 group-hover:bg-white transition-all">
                  <div className="flex items-center gap-2 mb-1">
                    <Users size={14} className="text-blue-500" />
                    <span className="text-[10px] font-black text-gray-400 uppercase tracking-tighter">Students</span>
                  </div>
                  <p className="text-xl font-black text-gray-800">{std.students}</p>
                </div>

                <div className="p-4 bg-gray-50 rounded-3xl border border-gray-100 group-hover:bg-white transition-all">
                  <div className="flex items-center gap-2 mb-1">
                    <BookOpen size={14} className="text-emerald-500" />
                    <span className="text-[10px] font-black text-gray-400 uppercase tracking-tighter">Subjects</span>
                  </div>
                  <p className="text-xl font-black text-gray-800">{std.subjects}</p>
                </div>
              </div>
            </div>

            {/* Action Footer (Permanently Visible) */}
            <div className="flex border-t border-gray-50 bg-gray-50/30 mt-auto">
              <button className="flex-1 flex items-center justify-center gap-2 py-4 text-xs font-bold text-gray-500 hover:text-[#4F46E5] hover:bg-white transition-all border-r border-gray-100">
                <Edit2 size={14} /> Edit
              </button>
              <button className="flex-1 flex items-center justify-center gap-2 py-4 text-xs font-bold text-gray-500 hover:text-rose-500 hover:bg-white transition-all">
                <Trash2 size={14} /> Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StandardMaster;