import { Input } from './Input';

export const Form=({formFields,handleForm,handleSubmit,isDisabledButton})=>{


    return(
        <div className=" container form-group col-md-6">
     {formFields.map(({ id, label, value, required,type }) => (
        <Input
          key={id}
          id={id}
          label={label}
          value={value}
          onChange={handleForm}
          required={required}
          type={type}
        />
      ))}
      <p>Los campos marcados con * son obligatorios</p>
          
      {

        <button  className="btn btn-primary" disabled={isDisabledButton} onClick={(e)=>{handleSubmit(e)}}>
          Crear orden
        </button>
       
      }

        </div>

    )
}