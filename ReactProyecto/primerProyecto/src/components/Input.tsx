import type { InputProps } from "../Types/InputProps";

const Input: React.FC<InputProps> = ({
  label,
  value,
  name,
  type = "text",
  placeholder,
  onChange,
}) => {
  return (
    <div className="p-4 bg-white border border-gray-100 shadow-lg rounded-xl transition duration-300">
      <label className="block text-lg font-bold text-gray-700 mb-2">
        {label}
      </label>

      <input
        type={type}
        value={value}
        name={name}
        placeholder={placeholder}
        onChange={(e) => onChange(name, e.target.value)}
        className="w-full border-2 rounded-lg p-3 text-lg font-semibold transition duration-150 border-blue-300 focus:border-blue-500 focus:ring-blue-500 text-gray-800"
      />
    </div>
  );
};

export default Input;