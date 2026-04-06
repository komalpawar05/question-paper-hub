import React, { useState } from "react";
import { IoMdAddCircle } from "react-icons/io";
import { FiSearch, FiFilter, FiX } from "react-icons/fi";
import useIsMobile from "../../../hooks/useIsMobile";

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
  const isMobile = useIsMobile();

  const [internalSearch, setInternalSearch] = useState("");
  const [internalStatus, setInternalStatus] = useState("all");
  const [internalDate, setInternalDate] = useState("all");

  const [showFilters, setShowFilters] = useState(!isMobile);

  const search = searchValue ?? internalSearch;
  const status = statusValue ?? internalStatus;
  const date = dateValue ?? internalDate;

  return (
    <div className="bg-white p-4 rounded-xl shadow-sm border space-y-4 overflow-visible">

      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">

        <div className="flex items-center justify-between w-full">
          <h2 className="text-base font-semibold text-gray-700">
            {title}
          </h2>
   
        </div>

        {showAddButton && (
          <button
            onClick={onAddClick}
            className="flex items-center justify-center gap-2 px-4 py-2 text-sm font-medium 
            bg-blue-500 text-white rounded-md hover:bg-blue-600 transition w-full sm:w-auto"
          >
            <IoMdAddCircle size={18} />
            Add
          </button>
        )}
      </div>

      {/* Filters */}
      {showFilters && (
        <div
          className={`
            grid gap-3
            ${isMobile ? "grid-cols-1" : "grid-cols-2 lg:grid-cols-3"}
          `}
        >

          {/* 🔍 Search */}
          {showSearch && (
            <div className="relative">
              <FiSearch className="absolute left-3 top-2.5 text-gray-400" />
              <input
                value={search}
                placeholder={searchPlaceholder}
                onChange={(e) => {
                  const val = e.target.value;
                  if (searchValue === undefined) setInternalSearch(val);
                  onSearch?.(val);
                }}
                className="w-full pl-9 pr-3 py-2 text-sm border border-gray-200 rounded-md focus:ring-2 focus:ring-blue-400 outline-none"
              />
            </div>
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
              className="w-full px-3 py-2 text-sm border border-gray-200 rounded-md focus:ring-2 focus:ring-blue-400 outline-none"
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
              className="w-full px-3 py-2 text-sm border border-gray-200 rounded-md focus:ring-2 focus:ring-blue-400 outline-none"
            >
              <option value="all">All Time</option>
              <option value="today">Today</option>
              <option value="7days">Last 7 Days</option>
              <option value="30days">Last 30 Days</option>
            </select>
          )}
        </div>
      )}
    </div>
  );
};

export default GlobalFilter;