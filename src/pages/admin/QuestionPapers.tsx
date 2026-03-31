import React, { useState } from "react";
import Topbar from "../../components/admin/layouts/Topbar";
import Table from "../../components/admin/table/tablelayout";
import { FaEdit, FaTrash } from "react-icons/fa";

// ✅ Fix import path if needed
import CrudModal from "../../components/admin/Modal/CrudModal";
import DeleteModal from "../../components/admin/Modal/DeleteModal";

// ✅ Type
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
  const [search, setSearch] = useState<string>("");
  const [showModal, setShowModal] = useState<boolean>(false);
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

  // 🔍 Search
  const filtered = papers.filter((p) =>
    p.title.toLowerCase().includes(search.toLowerCase())
  );

  // ➕ Add
  const handleAdd = (data: Paper) => {
    setPapers((prev) => [...prev, data]);
  };

  // ✏️ Edit
  const handleEdit = (row: Paper) => {
    setEditData(row);
    setShowModal(true);
  };

  // 🔄 Update
  const handleUpdate = (updated: Paper) => {
    setPapers((prev) =>
      prev.map((p) => (p.id === updated.id ? updated : p))
    );
  };

  // 🗑 Delete
  const confirmDelete = () => {
    if (!deleteId) return;
    setPapers((prev) => prev.filter((p) => p.id !== deleteId));
    setDeleteId(null);
  };

  // 📊 Table Columns (fix typing)
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
          className={`px-3 py-1 text-xs rounded-full ${
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
        <div className="flex gap-3">
          <button
            onClick={() => handleEdit(row)}
            className="p-2 bg-blue-50 text-blue-600 rounded-lg"
          >
            <FaEdit />
          </button>

          <button
            onClick={() => setDeleteId(row.id)}
            className="p-2 bg-red-50 text-red-500 rounded-lg"
          >
            <FaTrash />
          </button>
        </div>
      ),
    },
  ];

  return (
    <div className="flex-1 flex flex-col bg-gray-100 min-h-screen">

      <Topbar title="Question Papers" openSidebar={() => {}} />

      <div className="p-6 space-y-5">

        {/* Search + Add */}
        <div className="flex justify-between">
          <input
            type="text"
            placeholder="Search..."
            className="border px-4 py-2 rounded"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />

          <button
            onClick={() => {
              setEditData(null);
              setShowModal(true);
            }}
            className="bg-blue-600 text-white px-4 py-2 rounded"
          >
            + Add Paper
          </button>
        </div>

        {/* Table */}
        <Table title="All Papers" data={filtered} columns={columns} />
      </div>

      {/* ✅ CRUD Modal */}
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

      // 🔥 DROPDOWN
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

          {/* ✅ Delete Modal */}
          <DeleteModal
            isOpen={Boolean(deleteId)}
            onClose={() => setDeleteId(null)}
            onDelete={confirmDelete}
          />

        </div>
      );
};

export default QuestionPaper;