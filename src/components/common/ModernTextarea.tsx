import React, { useState } from 'react';
import { motion } from 'framer-motion';

interface ModernTextareaProps {
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  placeholder?: string;
  label?: string;
  required?: boolean;
  error?: string;
  rows?: number;
  className?: string;
  disabled?: boolean;
  maxLength?: number;
}

const ModernTextarea: React.FC<ModernTextareaProps> = ({
  name,
  value,
  onChange,
  placeholder,
  label,
  required = false,
  error,
  rows = 4,
  className = '',
  disabled = false,
  maxLength,
}) => {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <div className={`relative ${className}`}>
      {label && (
        <label className="block text-sm font-semibold text-gray-700 mb-3">
          {label}
          {required && <span className="text-red-500 ml-1">*</span>}
        </label>
      )}
      
      <div className="relative">
        <textarea
          name={name}
          value={value}
          onChange={onChange}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          required={required}
          disabled={disabled}
          placeholder={placeholder}
          rows={rows}
          maxLength={maxLength}
          className={`
            w-full px-4 py-4 bg-gray-50 border border-gray-200 rounded-xl
            focus:ring-2 focus:ring-blue-500 focus:border-blue-500 focus:bg-white
            transition-all duration-300 text-gray-900 placeholder-gray-500 text-base
            resize-none disabled:bg-gray-100 disabled:cursor-not-allowed
            ${error ? 'border-red-300 focus:border-red-500 focus:ring-red-500' : ''}
            ${isFocused ? 'shadow-lg' : 'shadow-sm'}
          `}
        />
        
        {maxLength && (
          <div className="absolute bottom-3 right-4 text-sm text-gray-400">
            {value.length}/{maxLength}
          </div>
        )}
      </div>
      
      {error && (
        <motion.p
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="mt-2 text-sm text-red-600 flex items-center gap-1"
        >
          <span className="w-1 h-1 bg-red-500 rounded-full"></span>
          {error}
        </motion.p>
      )}
    </div>
  );
};

export default ModernTextarea;
