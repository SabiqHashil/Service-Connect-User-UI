import { useState } from "react";
import PropTypes from "prop-types";

const InputComp = ({
  type,
  placeholder,
  value,
  onChange,
  name,
  className,
  icon: Icon,
}) => {
  const [isFocused, setIsFocused] = useState(false);
  return (
    <div className={`relative ${className}`}>
      {Icon && (
        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
          <Icon className="text-white text-xl" />
        </div>
      )}

      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        name={name}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        className={`border rounded-md w-full h-[60px]  pr-4 focus:outline-none focus:ring-2 ${
          isFocused ? "bg-blue-500" : "bg-custom-gray"
        } text-white placeholder-white focus:ring-blue-500 ${
          Icon ? "pl-12" : "pl-4"
        }`}
      />
    </div>
  );
};

InputComp.propTypes = {
  type: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  name: PropTypes.string,
  className: PropTypes.string,
  icon: PropTypes.elementType,
};

export default InputComp;
