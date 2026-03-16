import React, { useState } from 'react';
import { 
  Search, 
  Globe, 
  Plus, 
  Edit2, 
  Trash2, 
  Download, 
  Filter,
  MoreVertical,
  CheckCircle2,
  ChevronRight
} from "lucide-react";

const CountryMaster = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [countries, setCountries] = useState([
    { id: 1, name: "India", code: "IN", phoneCode: "+91", status: "Active" },
    { id: 2, name: "United States", code: "US", phoneCode: "+1", status: "Active" },
    { id: 3, name: "United Kingdom", code: "GB", phoneCode: "+44", status: "Active" },
    { id: 4, name: "United Arab Emirates", code: "AE", phoneCode: "+971", status: "Inactive" },
    { id: 5, name: "Canada", code: "CA", phoneCode: "+1", status: "Active" },
  ]);

  const filteredCountries = countries.filter(c => 
    c.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
    c.code.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="bg-white rounded-3xl border border-gray-100 shadow-sm overflow-hidden min-h-[600px] flex flex-col">
      
      {/* --- HEADER SECTION --- */}
      <div className="p-6 border-b border-gray-50 bg-white">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
          <div>
            <h2 className="text-2xl font-black text-gray-900 tracking-tight">Country Master</h2>
            <p className="text-sm text-gray-500 font-medium">Manage international zones and dial codes</p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            {/* Search Input */}
            <div className="relative group">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-[#4F46E5] transition-colors" size={18} />
              <input 
                type="text" 
                placeholder="Search country..." 
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full md:w-64 pl-10 pr-4 py-2.5 bg-gray-50 border border-gray-200 rounded-xl outline-none focus:ring-4 focus:ring-[#4F46E5]/10 focus:border-[#4F46E5] transition-all text-sm shadow-sm"
              />
            </div>
            
            {/* Toolbar Buttons */}
            <div className="flex gap-2">
              <button className="p-2.5 text-gray-500 hover:bg-gray-50 rounded-xl border border-gray-200 transition-colors">
                <Download size={18} />
              </button>
              <button className="p-2.5 text-gray-500 hover:bg-gray-50 rounded-xl border border-gray-200 transition-colors">
                <Filter size={18} />
              </button>
            </div>

            {/* Add Button */}
            <button className="flex items-center gap-2 px-6 py-2.5 bg-[#4F46E5] text-white font-bold rounded-xl hover:shadow-lg hover:shadow-blue-200 transition-all active:scale-95 text-sm">
              <Plus size={18} strokeWidth={3} /> Add Country
            </button>
          </div>
        </div>
      </div>

      {/* --- COLUMN LABELS (Table Header Style) --- */}
      <div className="px-10 py-4 bg-gray-50/50 flex items-center text-[10px] font-black text-gray-400 uppercase tracking-[0.2em] border-b border-gray-50">
        <span className="w-12 text-center">#</span>
        <span className="flex-1 ml-4">Country Information</span>
        <span className="w-40 text-center">ISO Code</span>
        <span className="w-40 text-center">Dial Code</span>
        <span className="w-40 text-center">Status</span>
        <span className="w-28 text-right">Actions</span>
      </div>

      {/* --- MODERN LIST BODY --- */}
      <div className="flex-1 overflow-y-auto p-4 space-y-2 custom-scrollbar">
        {filteredCountries.length > 0 ? (
          filteredCountries.map((country, index) => (
            <div 
              key={country.id} 
              className="flex items-center px-6 py-4 bg-white hover:bg-blue-50/40 rounded-2xl transition-all duration-300 border border-transparent hover:border-blue-100 group cursor-default"
            >
              {/* SR NO */}
              <span className="text-xs font-bold text-gray-300 w-8 text-center">
                {index + 1 < 10 ? `0${index + 1}` : index + 1}
              </span>

              {/* COUNTRY NAME & ICON */}
              <div className="flex-1 flex items-center gap-4 ml-4">
                <div className="p-3 bg-blue-50 text-[#4F46E5] rounded-2xl group-hover:bg-[#4F46E5] group-hover:text-white transition-all duration-300 shadow-sm">
                  <Globe size={20} />
                </div>
                <h4 className="font-bold text-gray-800 text-base tracking-tight">
                  {country.name}
                </h4>
              </div>

              {/* ISO CODE */}
              <div className="w-40 flex justify-center">
                <span className="px-3 py-1 bg-gray-100 text-gray-600 rounded-lg text-xs font-black tracking-widest uppercase border border-gray-200">
                  {country.code}
                </span>
              </div>

              {/* PHONE CODE */}
              <div className="w-40 flex justify-center">
                <span className="text-sm font-bold text-gray-500 group-hover:text-[#4F46E5] transition-colors">
                  {country.phoneCode}
                </span>
              </div>

              {/* STATUS */}
              <div className="w-40 flex justify-center">
                <div className={`flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-black tracking-widest border ${
                  country.status === 'Active' 
                  ? 'bg-green-50 text-green-600 border-green-100' 
                  : 'bg-gray-50 text-gray-400 border-gray-100'
                }`}>
                  <div className={`w-1.5 h-1.5 rounded-full ${country.status === 'Active' ? 'bg-green-500 animate-pulse' : 'bg-gray-300'}`}></div>
                  {country.status.toUpperCase()}
                </div>
              </div>

              {/* ACTIONS */}
              <div className="w-28 flex items-center justify-end gap-1 transition-all duration-300">
                <button title="Edit" className="p-2 text-gray-400 hover:text-[#4F46E5] hover:bg-white rounded-lg shadow-sm border border-transparent hover:border-blue-100 transition-all">
                  <Edit2 size={16} />
                </button>
                <button title="Delete" className="p-2 text-gray-400 hover:text-rose-500 hover:bg-white rounded-lg shadow-sm border border-transparent hover:border-rose-100 transition-all">
                  <Trash2 size={16} />
                </button>
              </div>
            </div>
          ))
        ) : (
          /* EMPTY STATE */
          <div className="flex flex-col items-center justify-center py-20 text-center">
            <div className="w-20 h-20 bg-gray-50 rounded-full flex items-center justify-center mb-4 text-gray-300">
              <Globe size={40} />
            </div>
            <h3 className="text-lg font-bold text-gray-800">No countries found</h3>
            <p className="text-sm text-gray-400 max-w-[200px] mx-auto">Try adjusting your search or add a new country.</p>
          </div>
        )}
      </div>

      {/* --- FOOTER / PAGINATION --- */}
      <div className="p-6 border-t border-gray-50 bg-gray-50/30 flex items-center justify-between">
        <span className="text-[11px] font-black text-gray-400 uppercase tracking-widest">
          Showing {filteredCountries.length} of {countries.length} Records
        </span>
        <div className="flex gap-2">
          <button className="px-4 py-2 text-xs font-bold text-gray-500 bg-white border border-gray-200 rounded-xl hover:bg-gray-50 transition-all disabled:opacity-50" disabled>Previous</button>
          <button className="px-4 py-2 text-xs font-bold text-gray-500 bg-white border border-gray-200 rounded-xl hover:bg-gray-50 transition-all">Next</button>
        </div>
      </div>
    </div>
  );
};

export default CountryMaster;