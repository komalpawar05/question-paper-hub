import React, { useState, useEffect } from "react";
import BaseModal from "./BaseModal";

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
    <BaseModal
      isOpen={isOpen}
      onClose={onClose}
      title={title}
      footer={
        <>
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
        </>
      }
    >
      {/* Form Fields */}
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
              className="w-full border px-3 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>
        ))}
      </div>
    </BaseModal>
  );
}

export default CrudModal;