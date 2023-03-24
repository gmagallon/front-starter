import * as React from "react";

type ButtonProps = {
  onClick: () => void;
  label: string;
  testId: string;
};

export const Button = ({ onClick, label, testId }: ButtonProps) => {
  return (
    <button
      data-test-id={testId}
      onClick={onClick}
      className="w-60 px-3 py-2 rounded drop-shadow-2xl text-white font-bold bg-gradient-to-r from-indigo-400 to-fuchsia-600 hover:bg-gradient-to-r hover:from-indigo-500 hover:to-fuchsia-700 focus:ring-indigo-400 focus:ring-4 focus:ring-offset-2 transition-all duration-200"
    >
      {label}
    </button>
  );
};
