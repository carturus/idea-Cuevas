
import React, { useState, useEffect } from 'react';
import {Order} from './Order'
import {Form} from './Form'

export const CheckOut=()=> {
  const [buyer, setBuyer] = useState({
    name: '',
    surname: '',
    phone: '',
<<<<<<< HEAD
    email: '',
    remail: '',
=======
    email: ''
>>>>>>> 1231b86 (Desafio 11-item collection 2)
  });
  const [isDisabledButton, setIsDisabledButton] = useState(true);
  const [showOrder,setShowOrder]=useState(false);
  const [showForm,setShowForm]=useState(true);
<<<<<<< HEAD
  const formFields=[
        {
          id:'name',
          label:'Nombre',
          value:buyer.name,
          required:true,
          type:'text'
        },

        {
          id:'phone',
          label:'phone',
          value:buyer.phone,
          required:true,
          type:'number'
        },
            {
          id:'email',
          label:'Email',
          value:buyer.email,
          required:true,
          type:'email'
        },
        {
          id:'remail',
          label:'Repite Email',
          value:buyer.remail,
          required:true,
          type:'email'
        }
    
      ]
 
=======

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
>>>>>>> 1231b86 (Desafio 11-item collection 2)


  const handleForm = (id, value) => {
   
    const newBuyer= { ...buyer, [id]: value };
<<<<<<< HEAD

    setBuyer(newBuyer);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if(buyer.email.includes('@'))
    if(buyer.email===buyer.remail){
    setShowOrder(true)
    setShowForm(false)    
}else{
  alert('Los correos no coinciden')
}
else{
  alert('Correo invalido')
}
  };

  useEffect(() => {
=======
    setBuyer(newBuyer);
  };

  const handleSubmit = () => {
    
    setShowOrder(true)
    setShowForm(false)    
  };

  useEffect(() => {

>>>>>>> 1231b86 (Desafio 11-item collection 2)
    const requiredFields = formFields.filter(({ required }) => required);
    const isSomeRequiredFieldEmpty = requiredFields.some(({ value }) => !value);
    setIsDisabledButton(isSomeRequiredFieldEmpty);
  }, [buyer]);

 

  return (
    <div>{
<<<<<<< HEAD
     showForm?<Form buyer={buyer} formFields={formFields} handleForm={handleForm} isDisabledButton={isDisabledButton} handleSubmit={handleSubmit}/>:null
=======
     showForm?<Form buyer={buyer} handleForm={handleForm} isDisabledButton={isDisabledButton} handleSubmit={handleSubmit}/>:null
>>>>>>> 1231b86 (Desafio 11-item collection 2)
    }
      {
         showOrder?<Order buyer={buyer}/>:null
      }
    </div>
  );
}
