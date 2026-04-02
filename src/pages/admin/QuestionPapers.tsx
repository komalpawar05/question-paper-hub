import React, { useState } from "react";
import Topbar from "../../components/admin/layouts/Topbar";
import GlobalFilter from "../../components/admin/common/GlobalFilter";
import Table from "../../components/admin/table/tablelayout";
import { FaEdit, FaTrash } from "react-icons/fa";

import CrudModal from "../../components/admin/Modal/CrudModal";
import DeleteModal from "../../components/admin/Modal/DeleteModal";

type Paper = {
  id: string;
  title: string;
  subject: string;
  university: string;
  year: number;
  price: number;
  pages: number;
  status: string;
};

const QuestionPaper: React.FC = () => {

  const [search, setSearch] = useState("");
  const [status, setStatus] = useState("all"); // ✅ FIXED
  const [showModal, setShowModal] = useState(false);
  const [editData, setEditData] = useState<Paper | null>(null);
  const [deleteId, setDeleteId] = useState<string | null>(null);

  const [papers, setPapers] = useState<Paper[]>([
    {
      id: "MATH301",
      title: "Advanced Mathematics Final Exam",
      subject: "Mathematics",
      university: "Pune University",
      year: 2025,
      price: 199,
      pages: 45,
      status: "Published",
    },
    {
      id: "PHYS401",
      title: "Quantum Physics Midterm",
      subject: "Physics",
      university: "Mumbai University",
      year: 2024,
      price: 149,
      pages: 30,
      status: "Draft",
    },
  ]);

  // ✅ FIXED FILTER (Search + Status)
  const filtered = papers.filter((p) => {
    const matchSearch =
      p.title.toLowerCase().includes(search.toLowerCase()) ||
      p.subject.toLowerCase().includes(search.toLowerCase());

    const matchStatus =
      status === "all" || p.status === status;

    return matchSearch && matchStatus;
  });

  const handleEdit = (row: Paper) => {
    setEditData(row);
    setShowModal(true);
  };

  const confirmDelete = () => {
    if (!deleteId) return;
    setPapers((prev) => prev.filter((p) => p.id !== deleteId));
    setDeleteId(null);
  };

  const columns = [
    { header: "Code", accessor: "id" },
    { header: "Title", accessor: "title" },
    { header: "Subject", accessor: "subject" },
    { header: "University", accessor: "university" },
    { header: "Year", accessor: "year" },
    {
      header: "Price",
      accessor: "price",
      render: (value: number) => (
        <span className="text-green-600 font-medium">₹{value}</span>
      ),
    },
    { header: "Pages", accessor: "pages" },
    {
      header: "Status",
      accessor: "status",
      render: (value: string) => (
        <span
          className={`px-2 py-1 text-xs rounded-full ${
            value === "Published"
              ? "bg-green-100 text-green-600"
              : "bg-yellow-100 text-yellow-600"
          }`}
        >
          {value}
        </span>
      ),
    },
    {
      header: "Actions",
      accessor: "id",
      render: (_: unknown, row: Paper) => (
        <div className="flex gap-2">
          <button
            onClick={() => handleEdit(row)}
            className="p-2 bg-blue-50 text-blue-600 rounded-md hover:bg-blue-100"
          >
            <FaEdit />
          </button>

          <button
            onClick={() => setDeleteId(row.id)}
            className="p-2 bg-red-50 text-red-500 rounded-md hover:bg-red-100"
          >
            <FaTrash />
          </button>
        </div>
      ),
    },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-gray-100">

      <Topbar title="Question Papers" openSidebar={() => {}} />

      <div className="p-4 space-y-4">

        {/* ✅ FILTER */}
        <GlobalFilter
          title="Question Papers"
          showSearch
          showStatus
          showDate={false}
          showAddButton

          searchPlaceholder="Search papers..."

          statusOptions={[
            { label: "All", value: "all" },
            { label: "Published", value: "Published" },
            { label: "Draft", value: "Draft" }
          ]}

          searchValue={search}
          statusValue={status}

          onSearch={setSearch}
          onStatusChange={setStatus}

          onAddClick={() => {
            setEditData(null);
            setShowModal(true);
          }}
        />

        {/* ✅ TABLE CARD UI */}
          <Table title="All Papers" data={filtered} columns={columns} />
      </div>

      {/* MODALS */}
      <CrudModal<Paper>
        isOpen={showModal}
        onClose={() => setShowModal(false)}
        title={editData ? "Edit Paper" : "Add Paper"}
        initialData={editData || {}}
        fields={[
          { name: "title", label: "Title", required: true },
          { name: "subject", label: "Subject", required: true },
          { name: "university", label: "University", required: true },
          { name: "year", label: "Year", type: "number", required: true },
          { name: "price", label: "Price", type: "number", required: true },
          { name: "pages", label: "Pages", type: "number", required: true },
          {
            name: "status",
            label: "Status",
            type: "select",
            required: true,
            options: [
              { label: "Draft", value: "Draft" },
              { label: "Published", value: "Published" },
            ],
          },
        ]}
      />

      <DeleteModal
        isOpen={Boolean(deleteId)}
        onClose={() => setDeleteId(null)}
        onDelete={confirmDelete}
      />

    </div>
  );
};

export default QuestionPaper;