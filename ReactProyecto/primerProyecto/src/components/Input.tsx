import type { InputProps } from "../types/InputProps";

const Input: React.FC<InputProps> = ({ label, value, name, onChange }) => {
  return (
    <div className="p-4 bg-white border border-gray-100 shadow-lg rounded-xl transition duration-300">
      <label className="block text-lg font-bold text-gray-700 mb-2">
        {label}
      </label>

      <input
        type="number"
        value={value}
        onChange={(e) => onChange(name, e.target.value)}
        min={0}
        placeholder="Ingrese el precio"
        className="w-full border-2 rounded-lg p-3 text-3xl font-extrabold text-center font-mono transition duration-150 border-blue-300 focus:border-blue-500 focus:ring-blue-500 text-gray-800"
      />
    </div>
  );
};

export default Input;