import React, { useState } from "react";
import {
  Search,
  Plus,
  Edit2,
  Trash2,
  Filter,
  ArrowDownAZ,
  Calculator,
  Beaker,
  Languages,
  Book,
  Globe2,
  Binary,
  Shapes,
  FlaskConical,
} from "lucide-react";

const SubjectMaster = () => {
  const [searchTerm, setSearchTerm] = useState("");

  // Example Data with Type and Status
  const [subjects] = useState([
    {
      id: 1,
      name: "Mathematics",
      code: "MATH-101",
      type: "Theory",
      status: "Active",
      icon: <Calculator size={28} />,
      color: "text-blue-600",
      bg: "bg-blue-50",
    },
    {
      id: 2,
      name: "Chemistry",
      code: "CHEM-202",
      type: "Practical",
      status: "Active",
      icon: <FlaskConical size={28} />,
      color: "text-emerald-600",
      bg: "bg-emerald-50",
    },
    {
      id: 3,
      name: "English Literature",
      code: "ENG-303",
      type: "Theory",
      status: "Active",
      icon: <Languages size={28} />,
      color: "text-indigo-600",
      bg: "bg-indigo-50",
    },
    {
      id: 4,
      name: "Physics",
      code: "PHY-404",
      type: "Both",
      status: "Active",
      icon: <Shapes size={28} />,
      color: "text-rose-600",
      bg: "bg-rose-50",
    },
    {
      id: 5,
      name: "Computer Science",
      code: "CS-505",
      type: "Practical",
      status: "Inactive",
      icon: <Binary size={28} />,
      color: "text-slate-600",
      bg: "bg-slate-50",
    },
  ]);

  // Sort A-Z Logic
  const sortedSubjects = [...subjects].sort((a, b) =>
    a.name.localeCompare(b.name),
  );

  return (
    <div className="space-y-6 min-h-screen bg-[#F8FAFC]">
      {/* --- TOP ACTION BAR --- */}
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 bg-white p-4 rounded-2xl border border-gray-100 shadow-sm">
        <div className="flex flex-1 items-center gap-3 max-w-2xl">
          <div className="relative flex-1">
            <Search
              className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-[#4F46E5] transition-colors"
              size={18}
            />
            <input
              type="text"
              placeholder="Search subject name or code..."
              className="w-full pl-10 pr-4 py-2.5 bg-gray-50 border border-gray-200 rounded-xl outline-none focus:ring-4 focus:ring-[#4F46E5]/10 focus:border-[#4F46E5] transition-all text-sm shadow-sm"
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <button className="flex items-center gap-2 px-4 py-2.5 bg-gray-50 text-gray-600 border border-gray-200 rounded-xl hover:bg-white transition-all text-sm font-bold">
            <ArrowDownAZ size={18} /> Sort A-Z
          </button>
        </div>

        <button className="flex items-center gap-2 px-6 py-2.5 bg-[#4F46E5] text-white font-bold rounded-xl hover:shadow-lg transition-all active:scale-95 text-sm">
          <Plus size={18} strokeWidth={3} /> Add New Subject
        </button>
      </div>

      {/* --- SUBJECT CARD GRID --- */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {sortedSubjects.map((sub, index) => (
          <div
            key={sub.id}
            className="bg-white rounded-[2.5rem] border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group overflow-hidden"
          >
            <div className="p-6">
              {/* Header: SR No & Status */}
              <div className="flex justify-between items-start mb-4">
                <span className="text-[10px] font-black text-gray-300 bg-gray-50 px-2 py-1 rounded-md tracking-widest">
                  #{index + 1 < 10 ? `0${index + 1}` : index + 1}
                </span>
                <div
                  className={`flex items-center gap-1 px-2 py-1 rounded-full text-[9px] font-black tracking-widest ${
                    sub.status === "Active"
                      ? "bg-green-50 text-green-600"
                      : "bg-gray-100 text-gray-400"
                  }`}
                >
                  {sub.status.toUpperCase()}
                </div>
              </div>

              {/* Large Subject Icon */}
              <div className="flex justify-center mb-6">
                <div
                  className={`p-6 ${sub.bg} ${sub.color} rounded-4xl group-hover:scale-110 transition-transform duration-300 shadow-sm`}
                >
                  {sub.icon}
                </div>
              </div>

              {/* Subject Info */}
              <div className="text-center mb-6">
                <p className="text-[10px] font-black text-[#4F46E5] tracking-[0.2em] uppercase mb-1">
                  {sub.code}
                </p>
                <h3 className="text-xl font-black text-gray-800 tracking-tight">
                  {sub.name}
                </h3>

                {/* Type Badge */}
                <div className="mt-3 inline-flex items-center gap-1.5 px-3 py-1 bg-gray-50 border border-gray-100 rounded-lg">
                  <Book size={12} className="text-gray-400" />
                  <span className="text-[10px] font-bold text-gray-500 uppercase tracking-widest">
                    {sub.type}
                  </span>
                </div>
              </div>

              {/* Actions - Permanently Visible */}
              <div className="flex gap-2 pt-2">
                <button className="flex-1 flex items-center justify-center gap-2 py-3 bg-gray-50 text-gray-600 rounded-2xl font-bold text-xs hover:bg-[#4F46E5] hover:text-white transition-all shadow-sm">
                  <Edit2 size={14} /> Edit
                </button>
                <button className="p-3 bg-rose-50 text-rose-500 rounded-2xl font-bold hover:bg-rose-500 hover:text-white transition-all">
                  <Trash2 size={16} />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SubjectMaster;
