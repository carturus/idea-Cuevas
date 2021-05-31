import React from 'react';

<<<<<<< HEAD
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
=======
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
>>>>>>> 1231b86 (Desafio 11-item collection 2)
      />
    </div>
  );
};
