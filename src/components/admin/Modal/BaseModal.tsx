import React from "react";
import useIsMobile from "../../../hooks/useIsMobile";

type BaseModalProps = {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  children: React.ReactNode;
  footer?: React.ReactNode; // optional buttons
};

const BaseModal: React.FC<BaseModalProps> = ({
  isOpen,
  onClose,
  title,
  children,
  footer,
}) => {
  const isMobile = useIsMobile();

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-end md:items-center justify-center">

      {/* Overlay */}
      <div
        className="absolute inset-0 bg-black/40"
        onClick={onClose}
      />

      {/* Modal / Drawer */}
      <div
        className={`
          relative bg-white w-full shadow-xl flex flex-col
          ${isMobile
            ? "rounded-t-2xl p-4 max-h-[85vh]"
            : "max-w-lg rounded-xl p-6 max-h-[90vh]"
          }
        `}
      >
        {/* Header */}
        {title && (
          <div className="mb-4">
            <h2 className="text-lg md:text-xl font-semibold">
              {title}
            </h2>
          </div>
        )}

        {/* Body (Scrollable) */}
        <div className="flex-1 overflow-y-auto">
          {children}
        </div>

        {/* Footer */}
        {footer && (
          <div className="mt-4 pt-4 border-t flex justify-end gap-3">
            {footer}
          </div>
        )}
      </div>
    </div>
  );
};

export default BaseModal;