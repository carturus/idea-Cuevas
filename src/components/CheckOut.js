
import React, { useState, useEffect, useMemo } from 'react';
import {Order} from './Order'
import {Form} from './Form'

export const CheckOut=()=> {
  const [buyer, setBuyer] = useState({
    name: '',
    surname: '',
    phone: '',
    email: '',
    remail: '',
  });
  const [isDisabledButton, setIsDisabledButton] = useState(true);
  const [showOrder,setShowOrder]=useState(false);
  const [showForm,setShowForm]=useState(true);

  const formFields = useMemo(() => ([
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

  ]), [buyer.email, buyer.name, buyer.phone, buyer.remail])
 
  const handleForm = (id, value) => {
   
    const newBuyer= { ...buyer, [id]: value };

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
    const requiredFields = formFields.filter(({ required }) => required);
    const isSomeRequiredFieldEmpty = requiredFields.some(({ value }) => !value);
    setIsDisabledButton(isSomeRequiredFieldEmpty);
  }, [buyer, formFields]);

 

  return (
    <div>{
     showForm?<Form buyer={buyer} formFields={formFields} handleForm={handleForm} isDisabledButton={isDisabledButton} handleSubmit={handleSubmit}/>:null
    }
      {
         showOrder?<Order buyer={buyer}/>:null
      }
    </div>
  );
}
