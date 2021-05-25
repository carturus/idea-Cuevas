import { Input } from './Input';

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
        <Input
          key={id}
          id={id}
          label={label}
          value={value}
          onChange={handleForm}
          required={required}
        />
      ))}
          <p>Los campos marcados con * son obligatorios</p>
      {
        <button disabled={isDisabledButton} onClick={handleSubmit}>
          Crear orden
        </button>
      }

        </div>

    )
}