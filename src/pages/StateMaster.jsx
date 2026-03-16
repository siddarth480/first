import React, { useState } from 'react';
import { 
  Search, 
  MapPin, 
  Plus, 
  Edit2, 
  Trash2, 
  Globe, 
  Navigation,
  Download,
  Filter
} from "lucide-react";

const StateMaster = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [states] = useState([
    { id: 1, name: "Maharashtra", country: "India", code: "MH", zone: "West", status: "Active" },
    { id: 2, name: "California", country: "United States", code: "CA", zone: "West Coast", status: "Active" },
    { id: 3, name: "Karnataka", country: "India", code: "KA", zone: "South", status: "Active" },
    { id: 4, name: "Ontario", country: "Canada", code: "ON", zone: "North", status: "Inactive" },
    { id: 5, name: "Gujarat", country: "India", code: "GJ", zone: "West", status: "Active" },
    { id: 6, name: "Texas", country: "United States", code: "TX", zone: "South", status: "Active" },
  ]);

  const filteredStates = states.filter(s => 
    s.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
    s.country.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="space-y-6 min-h-screen bg-[#F8FAFC]">
      
      {/* --- TOP ACTION BAR --- */}
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 bg-white p-4 rounded-2xl border border-gray-100 shadow-sm">
        <div className="relative flex-1 max-w-md">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-[#4F46E5] transition-colors" size={18} />
          <input 
            type="text" 
            placeholder="Search state or country..." 
            className="w-full pl-10 pr-4 py-2.5 bg-gray-50 border border-gray-200 rounded-xl outline-none focus:ring-4 focus:ring-[#4F46E5]/10 focus:border-[#4F46E5] transition-all text-sm shadow-sm"
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        
        <div className="flex items-center gap-2">
          <button className="p-2.5 text-gray-500 hover:bg-gray-50 rounded-xl border border-gray-200 transition-colors">
            <Filter size={18} />
          </button>
          <button className="flex items-center gap-2 px-6 py-2.5 bg-[#4F46E5] text-white font-bold rounded-xl hover:shadow-lg hover:shadow-blue-200 transition-all active:scale-95 text-sm">
            <Plus size={18} strokeWidth={3} /> Add New State
          </button>
        </div>
      </div>

      {/* --- GRID OF STATE CARDS --- */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {filteredStates.map((state) => (
          <div key={state.id} className="bg-white rounded-[2rem] border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group overflow-hidden">
            
            <div className="p-6">
              {/* Top Row: Icon & Code */}
              <div className="flex justify-between items-start mb-6">
                <div className="p-3 bg-blue-50 text-[#4F46E5] rounded-2xl group-hover:bg-[#4F46E5] group-hover:text-white transition-all duration-300 shadow-sm">
                  <MapPin size={24} />
                </div>
                <span className="text-[10px] font-black bg-gray-100 text-gray-500 px-2.5 py-1 rounded-lg tracking-widest uppercase border border-gray-200">
                  {state.code}
                </span>
              </div>

              {/* Center: Name & Country Badge */}
              <div className="mb-6">
                <h3 className="text-xl font-bold text-gray-800 tracking-tight group-hover:text-[#4F46E5] transition-colors">
                  {state.name}
                </h3>
                <div className="flex items-center gap-2 mt-2">
                  <div className="flex items-center gap-1.5 px-2 py-1 bg-gray-50 border border-gray-100 rounded-md">
                    <Globe size={12} className="text-gray-400" />
                    <span className="text-[10px] font-bold text-gray-500 uppercase tracking-wider">{state.country}</span>
                  </div>
                </div>
              </div>

              {/* Bottom: Zone & Status */}
              <div className="pt-4 border-t border-gray-50 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Navigation size={14} className="text-blue-500" />
                  <span className="text-xs font-bold text-gray-600 uppercase tracking-tighter">{state.zone} Zone</span>
                </div>
                <div className={`w-2 h-2 rounded-full ${state.status === 'Active' ? 'bg-green-500 shadow-[0_0_8px_rgba(34,197,94,0.6)]' : 'bg-gray-300'}`}></div>
              </div>
            </div>

            {/* Action Bar (Always Visible as per your request) */}
            <div className="flex border-t border-gray-50 bg-gray-50/50">
              <button className="flex-1 flex items-center justify-center gap-2 py-3 text-xs font-bold text-gray-500 hover:text-[#4F46E5] hover:bg-white transition-all border-r border-gray-100">
                <Edit2 size={14} /> Edit
              </button>
              <button className="flex-1 flex items-center justify-center gap-2 py-3 text-xs font-bold text-gray-500 hover:text-rose-500 hover:bg-white transition-all">
                <Trash2 size={14} /> Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StateMaster;