import React from "react";

type Column<T> = {
  header: string;
  accessor: keyof T;
  render?: (value: any, row: T) => React.ReactNode;
};

type Props<T> = {
  title?: string;
  data: T[];
  columns: Column<T>[];
  actionButton?: React.ReactNode;
};

function Table<T extends { id: number }>({
  title,
  data,
  columns,
  actionButton,
}: Props<T>) {
  return (
    <div className="bg-white rounded-2xl shadow-md p-5">

      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-5 gap-3">

        <h2 className="text-lg font-semibold text-gray-800">
          {title}
        </h2>

        {actionButton}
      </div>

      {/* Table */}
      <div className="overflow-x-auto">

        <table className="w-full border-separate border-spacing-y-2">

          <thead>
            <tr className="text-left text-gray-500 text-sm">
              {columns.map((col, i) => (
                <th key={i} className="px-4 py-2 font-medium">
                  {col.header}
                </th>
              ))}
            </tr>
          </thead>

          <tbody>
            {data.length === 0 ? (
              <tr>
                <td
                  colSpan={columns.length}
                  className="text-center py-6 text-gray-400"
                >
                  No data found
                </td>
              </tr>
            ) : (
              data.map((row) => (
                <tr
                  key={row.id}
                  className="bg-gray-50 hover:bg-gray-100 transition rounded-xl shadow-sm"
                >
                  {columns.map((col, i) => {
                    const value = row[col.accessor];
                    return (
                      <td key={i} className="px-4 py-3">
                        {col.render
                          ? col.render(value, row)
                          : (value as React.ReactNode)}
                      </td>
                    );
                  })}
                </tr>
              ))
            )}
          </tbody>

        </table>

      </div>
    </div>
  );
}

export default Table;