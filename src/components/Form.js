import { Input } from './Input';

<<<<<<< HEAD
export const Form=({formFields,handleForm,handleSubmit,isDisabledButton})=>{


    return(
        <div className=" container form-group col-md-6">
     {formFields.map(({ id, label, value, required,type }) => (
=======
export const Form=({buyer,handleForm,handleSubmit,isDisabledButton})=>{

    const formFields=[
        {
          id:'name',
          label:'Nombre',
          value:buyer.name,
          required:true
        },
        {
          id:'surname',
          label:'Apellido',
          value:buyer.surname,
          required:true
        },
        {
          id:'phone',
          label:'phone',
          value:buyer.phone,
          required:true
        },
            {
          id:'email',
          label:'Email',
          value:buyer.email,
          required:true
        }
    
      ]

    return(
        <div>
     {formFields.map(({ id, label, value, required }) => (
>>>>>>> 1231b86 (Desafio 11-item collection 2)
        <Input
          key={id}
          id={id}
          label={label}
          value={value}
          onChange={handleForm}
          required={required}
<<<<<<< HEAD
          type={type}
        />
      ))}
      <p>Los campos marcados con * son obligatorios</p>
          
      {

        <button  className="btn btn-primary" disabled={isDisabledButton} onClick={(e)=>{handleSubmit(e)}}>
          Crear orden
        </button>
       
=======
        />
      ))}
          <p>Los campos marcados con * son obligatorios</p>
      {
        <button disabled={isDisabledButton} onClick={handleSubmit}>
          Crear orden
        </button>
>>>>>>> 1231b86 (Desafio 11-item collection 2)
      }

        </div>

    )
}