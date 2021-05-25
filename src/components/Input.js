import React from 'react';

export const Input= ({ id, label, value, onChange, required }) => {
  return (
    <div className="input">
      <label className="label">
        {label} {required ? '*' : ''}
      </label>
      <input
        type="text"
        onChange={({ target }) => onChange(id, target.value)}
        value={value}
      />
    </div>
  );
};
