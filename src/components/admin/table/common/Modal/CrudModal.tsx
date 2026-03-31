import React, { useState, useEffect } from "react";

export type Field = {
  name: string;
  label: string;
  type?: "text" | "number" | "email" | "select";
  options?: { label: string; value: string }[];
  required?: boolean;
};

type Props<T> = {
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
}: Props<T>) {
  const [formData, setFormData] = useState<Partial<T>>({});
  const [errors, setErrors] = useState<Record<string, string>>({});

  useEffect(() => {
    setFormData(initialData);
    setErrors({});
  }, [initialData]);

  if (!isOpen) return null;

  const handleChange = (name: string, value: any) => {
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // ✅ Validation
  const validate = () => {
    let newErrors: Record<string, string> = {};

    fields.forEach((field) => {
      if (field.required && !formData[field.name]) {
        newErrors[field.name] = `${field.label} is required`;
      }
    });

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = () => {
    if (!validate()) return;

    onSubmit(formData as T);
    onClose();
  };


 return (
  <div className="fixed inset-0 z-50 flex items-center justify-center">

  {/* Overlay */}
  <div
    className="absolute inset-0 bg-black/40"
    onClick={onClose}
  />

  {/* Modal Box */}
  <div className="relative w-[90%] max-w-lg bg-white rounded-2xl shadow-2xl">

    {/* Header */}
    <div className="px-6 py-4 border-b">
      <h2 className="text-lg font-semibold">{title}</h2>
    </div>

    {/* Body */}
    <div className="p-6 max-h-[400px] overflow-y-auto">
      {fields.map((field) => (
        <input
          key={field.name}
          placeholder={field.label}
          className="w-full mb-3 p-3 border rounded-lg"
        />
      ))}
    </div>

    {/* Footer */}
    <div className="flex justify-end gap-3 p-4 border-t">
      <button onClick={onClose}>Cancel</button>
      <button onClick={handleSubmit}>Save</button>
    </div>

  </div>
</div>
);
}

export default CrudModal;