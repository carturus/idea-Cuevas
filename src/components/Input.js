import React from 'react';

export const Input= ({ id, label, value, onChange, required,type }) => {
  return (
    <div >
      <label className="label">
        {label} {required ? '*' : ''}
      </label>
      <input 
        type={type}
        onChange={({ target }) => onChange(id, target.value)}
        value={value}
        className="form-control"
      />
    </div>
  );
};
