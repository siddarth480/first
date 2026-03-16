import React, { useState } from "react";
import {
  Calendar,
  CheckCircle2,
  Edit2,
  Trash2,
  Plus,
  Search,
  Filter,
  AlertCircle,
  Clock,
} from "lucide-react";

// --- SUB-COMPONENT: The Modern Card ---
const AcademicYearCard = ({ data, onDelete, onStatusToggle }) => {
  return (
    <div className="relative p-6 bg-white border border-gray-100 rounded-2xl shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-500 group overflow-hidden">
      {/* Decorative Background Accent */}
      <div
        className={`absolute top-0 right-0 w-24 h-24 -mr-8 -mt-8 rounded-full opacity-5 transition-transform group-hover:scale-150 duration-700 ${data.isCurrent ? "bg-green-500" : "bg-indigo-500"}`}
      />

      {/* Header Section */}
      <div className="flex justify-between items-start mb-6 relative z-10">
        <div className="space-y-1">
          <div className="flex items-center gap-2">
            <span className="px-2 py-0.5 bg-slate-100 text-slate-500 text-[10px] font-bold rounded uppercase tracking-wider">
              ID: {data.srNo}
            </span>
            {data.isCurrent && (
              <span className="flex items-center gap-1 text-[10px] font-bold text-green-600 animate-pulse">
                • LIVE NOW
              </span>
            )}
          </div>
          <h3 className="text-xl font-black text-slate-800 tracking-tight leading-tight">
            {data.year}
          </h3>
        </div>

        <button
          onClick={() => onStatusToggle(data.srNo)}
          className={`px-3 py-1.5 rounded-xl text-[10px] font-black transition-all cursor-pointer border ${
            data.status === "Active"
              ? "bg-emerald-50 text-emerald-600 border-emerald-100 hover:bg-emerald-100"
              : "bg-rose-50 text-rose-500 border-rose-100 hover:bg-rose-100"
          }`}
        >
          {data.status.toUpperCase()}
        </button>
      </div>

      {/* Date Range Section */}
      <div className="space-y-4 mb-6 relative z-10">
        <div className="flex items-center justify-between p-3 bg-slate-50 rounded-xl border border-slate-100/50">
          <div className="flex flex-col">
            <span className="text-[10px] font-bold text-slate-400 uppercase tracking-tighter">
              Start Date
            </span>
            <span className="text-sm font-bold text-slate-700">
              {data.startDate}
            </span>
          </div>
          <div className="h-8 w-[1px] bg-slate-200" />
          <div className="flex flex-col text-right">
            <span className="text-[10px] font-bold text-slate-400 uppercase tracking-tighter">
              End Date
            </span>
            <span className="text-sm font-bold text-slate-700">
              {data.endDate}
            </span>
          </div>
        </div>
      </div>

      {/* Action Footer */}
      <div className="flex items-center gap-2 relative z-10">
        <button className="flex-1 flex items-center justify-center gap-2 py-2.5 text-xs font-black text-white bg-indigo-600 rounded-xl hover:bg-indigo-700 hover:shadow-lg hover:shadow-indigo-200 transition-all cursor-pointer">
          <Edit2 size={14} strokeWidth={3} />
          Edit Details
        </button>
        <button
          onClick={() => onDelete(data.srNo)}
          className="p-2.5 text-slate-400 hover:text-rose-500 hover:bg-rose-50 border border-transparent hover:border-rose-100 rounded-xl transition-all cursor-pointer"
        >
          <Trash2 size={18} />
        </button>
      </div>
    </div>
  );
};

// --- MAIN COMPONENT: Academic Year Master ---
const AcademicYearMaster = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [academicYears, setAcademicYears] = useState([
    {
      srNo: 1,
      year: "2024 - 2025",
      startDate: "01 June 2024",
      endDate: "30 April 2025",
      isCurrent: true,
      status: "Active",
    },
    {
      srNo: 2,
      year: "2023 - 2024",
      startDate: "01 June 2023",
      endDate: "30 April 2024",
      isCurrent: false,
      status: "Active",
    },
    {
      srNo: 3,
      year: "2025 - 2026",
      startDate: "01 June 2025",
      endDate: "30 April 2026",
      isCurrent: false,
      status: "Inactive",
    },
  ]);

  // Handle Status Toggle
  const handleStatusToggle = (id) => {
    setAcademicYears((prev) =>
      prev.map((item) =>
        item.srNo === id
          ? {
              ...item,
              status: item.status === "Active" ? "Inactive" : "Active",
            }
          : item,
      ),
    );
  };

  // Handle Delete
  const handleDelete = (id) => {
    if (
      window.confirm(
        "Are you sure you want to delete this record? This action cannot be undone.",
      )
    ) {
      setAcademicYears((prev) => prev.filter((item) => item.srNo !== id));
    }
  };

  const filteredData = academicYears.filter((item) =>
    (item?.year ?? "").toLowerCase().includes(searchTerm.toLowerCase()),
  );

  return (
    <div className="p-6 md:p-12 bg-[#F1F5F9] min-h-screen font-sans selection:bg-indigo-100 selection:text-indigo-700">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="flex flex-col xl:flex-row xl:items-end justify-between mb-12 gap-8">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-white rounded-full border border-slate-200 shadow-sm mb-2">
              <Clock size={12} className="text-indigo-500" />
              <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">
                System Master
              </span>
            </div>
            <h1 className="text-4xl font-black text-slate-900 tracking-tight">
              Academic Year <span className="text-indigo-600">Master</span>
            </h1>
            <p className="text-slate-500 font-medium">
              Create and manage your organization's operational sessions.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-4">
            <div className="relative group min-w-[280px]">
              <Search
                className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-indigo-500 transition-colors"
                size={18}
              />
              <input
                type="text"
                placeholder="Search session..."
                className="pl-12 pr-4 py-3 bg-white border-0 rounded-2xl outline-none ring-1 ring-slate-200 focus:ring-2 focus:ring-indigo-500 transition-all w-full shadow-sm"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <button className="flex items-center justify-center gap-2 px-8 py-3 bg-slate-900 text-white font-bold rounded-2xl hover:bg-slate-800 shadow-xl shadow-slate-200 transition-all active:scale-95 cursor-pointer">
              <Plus size={20} strokeWidth={3} />
              Add Session
            </button>
          </div>
        </div>

        {/* Dynamic Stats Row */}
        <div className="flex flex-wrap gap-4 mb-10">
          <div className="flex-1 min-w-[200px] bg-white p-6 rounded-3xl border border-slate-100 shadow-sm flex items-center gap-5">
            <div className="p-4 bg-indigo-50 text-indigo-600 rounded-2xl font-black text-xl">
              {academicYears.length}
            </div>
            <div>
              <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">
                Total Sessions
              </p>
              <p className="text-sm font-bold text-slate-600 tracking-tight">
                System Records
              </p>
            </div>
          </div>

          <div className="flex-1 min-w-[200px] bg-white p-6 rounded-3xl border border-slate-100 shadow-sm flex items-center gap-5">
            <div className="p-4 bg-emerald-50 text-emerald-600 rounded-2xl font-black text-xl">
              {academicYears.filter((y) => y.status === "Active").length}
            </div>
            <div>
              <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">
                Active Now
              </p>
              <p className="text-sm font-bold text-slate-600 tracking-tight">
                Operating Years
              </p>
            </div>
          </div>

          {/* Added a spacer for visual balance on large screens */}
          <div className="hidden lg:block lg:flex-[2]" />
        </div>

        {/* Content Grid */}
        {/* Main Content Grid - Adjusted for 3 columns on desktop */}
        {filteredData.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredData.map((data) => (
              <AcademicYearCard
                key={data.srNo}
                data={data}
                onDelete={handleDelete}
                onStatusToggle={handleStatusToggle}
              />
            ))}
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center py-24 bg-white/50 backdrop-blur-sm rounded-[40px] border-2 border-dashed border-slate-200">
            <div className="p-6 bg-white rounded-full shadow-inner mb-6">
              <AlertCircle
                size={48}
                className="text-slate-300"
                strokeWidth={1.5}
              />
            </div>
            <h3 className="text-xl font-black text-slate-800 tracking-tight">
              No Matching Sessions
            </h3>
            <p className="text-slate-500 font-medium mt-1">
              Refine your search parameters to find the record.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default AcademicYearMaster;
