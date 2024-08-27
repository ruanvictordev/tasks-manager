import React from "react";

export default function Form({ children, onSubmit }) {
  return (
    <div className="max-w-sm mx-auto mt-10 p-4 border border-gray-300 rounded-sm">
      <form onSubmit={onSubmit} className="flex flex-col gap-4">
        {children}
      </form>
    </div>
  );
}
