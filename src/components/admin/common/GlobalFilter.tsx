import React, { useState } from "react";
import { IoMdAddCircle } from "react-icons/io";

type Option = {
  label: string;
  value: string;
};

type Props = {
  title?: string;

  showSearch?: boolean;
  showStatus?: boolean;
  showDate?: boolean;
  showAddButton?: boolean;

  searchPlaceholder?: string;
  statusOptions?: Option[];

  searchValue?: string;
  statusValue?: string;
  dateValue?: string;

  onSearch?: (val: string) => void;
  onStatusChange?: (val: string) => void;
  onDateChange?: (val: string) => void;
  onAddClick?: () => void;
};

const GlobalFilter: React.FC<Props> = ({
  title = "Filters",

  showSearch = true,
  showStatus = true,
  showDate = true,
  showAddButton = true,

  searchPlaceholder = "Search...",
  statusOptions = [{ label: "All", value: "all" }],

  searchValue,
  statusValue,
  dateValue,

  onSearch,
  onStatusChange,
  onDateChange,
  onAddClick
}) => {

  const [internalSearch, setInternalSearch] = useState("");
  const [internalStatus, setInternalStatus] = useState("all");
  const [internalDate, setInternalDate] = useState("all");

  const search = searchValue ?? internalSearch;
  const status = statusValue ?? internalStatus;
  const date = dateValue ?? internalDate;

  return (
    <div className="bg-white p-4 rounded-xl shadow-sm border space-y-4">

      {/* ✅ Header with Button */}
      <div className="flex justify-between items-center">
        <h2 className="text-base font-semibold text-gray-700">{title}</h2>

        {showAddButton && (
          <button
            onClick={onAddClick}
            className="flex items-center gap-2 px-4 py-1.5 text-sm font-medium 
            bg-blue-500 text-white rounded-md shadow-sm 
            hover:bg-blue-600 hover:shadow-md 
            transition-all duration-200"
          >
            <IoMdAddCircle size={18} />
            Add
          </button>
        )}
      </div>

      {/* ✅ Filters */}
      <div className="grid sm:grid-cols-3 gap-3">

        {/* 🔍 Search */}
        {showSearch && (
          <input
            value={search}
            placeholder={searchPlaceholder}
            onChange={(e) => {
              const val = e.target.value;
              if (searchValue === undefined) setInternalSearch(val);
              onSearch?.(val);
            }}
            className="px-3 py-2 text-sm border border-gray-200 rounded-md focus:ring-2 focus:ring-blue-400 outline-none"
          />
        )}

        {/* 📊 Status */}
        {showStatus && (
          <select
            value={status}
            onChange={(e) => {
              const val = e.target.value;
              if (statusValue === undefined) setInternalStatus(val);
              onStatusChange?.(val);
            }}
            className="px-3 py-2 text-sm border border-gray-200 rounded-md focus:ring-2 focus:ring-blue-400 outline-none"
          >
            {statusOptions.map((opt, i) => (
              <option key={i} value={opt.value}>
                {opt.label}
              </option>
            ))}
          </select>
        )}

        {/* 📅 Date */}
        {showDate && (
          <select
            value={date}
            onChange={(e) => {
              const val = e.target.value;
              if (dateValue === undefined) setInternalDate(val);
              onDateChange?.(val);
            }}
            className="px-3 py-2 text-sm border border-gray-200 rounded-md focus:ring-2 focus:ring-blue-400 outline-none"
          >
            <option value="all">All Time</option>
            <option value="today">Today</option>
            <option value="7days">Last 7 Days</option>
            <option value="30days">Last 30 Days</option>
          </select>
        )}

      </div>
    </div>
  );
};

export default GlobalFilter;