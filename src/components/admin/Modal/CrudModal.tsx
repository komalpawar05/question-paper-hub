import React, { useState, useEffect } from "react";

export type Field = {
  name: string;
  label: string;
  type?: "text" | "number" | "email";
};

type CrudModalProps<T> = {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (data: T) => void;
  title: string;
  fields: Field[];
  initialData?: Partial<T>;
};

function CrudModal<T extends Record<string, any>>({
  isOpen,
  onClose,
  onSubmit,
  title,
  fields,
  initialData = {},
}: CrudModalProps<T>) {
  const [formData, setFormData] = useState<Partial<T>>({});

  useEffect(() => {
    setFormData(initialData);
  }, [initialData]);

  if (!isOpen) return null;

  const handleChange = (name: string, value: any) => {
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = () => {
    onSubmit(formData as T);
    onClose();
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">

      {/* Overlay */}
      <div
        className="absolute inset-0 bg-black/40"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="relative bg-white w-full max-w-lg rounded-xl shadow-xl p-6">

        <h2 className="text-xl font-semibold mb-4">{title}</h2>

        <div className="space-y-4">
          {fields.map((field) => (
            <div key={field.name}>
              <label className="block text-sm mb-1">
                {field.label}
              </label>

              <input
                type={field.type || "text"}
                value={(formData[field.name as keyof T] as any) || ""}
                onChange={(e) =>
                  handleChange(field.name, e.target.value)
                }
                className="w-full border px-3 py-2 rounded-lg"
              />
            </div>
          ))}
        </div>

        <div className="flex justify-end gap-3 mt-6">
          <button
            onClick={onClose}
            className="px-4 py-2 bg-gray-200 rounded-lg"
          >
            Cancel
          </button>

          <button
            onClick={handleSubmit}
            className="px-4 py-2 bg-blue-600 text-white rounded-lg"
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
}

export default CrudModal;