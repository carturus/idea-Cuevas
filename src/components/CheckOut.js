
import React, { useState, useEffect } from 'react';
import {Order} from './Order'
import {Form} from './Form'

export const CheckOut=()=> {
  const [buyer, setBuyer] = useState({
    name: '',
    surname: '',
    phone: '',
    email: ''
  });
  const [isDisabledButton, setIsDisabledButton] = useState(true);
  const [showOrder,setShowOrder]=useState(false);
  const [showForm,setShowForm]=useState(true);

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


  const handleForm = (id, value) => {
   
    const newBuyer= { ...buyer, [id]: value };
    setBuyer(newBuyer);
  };

  const handleSubmit = () => {
    
    setShowOrder(true)
    setShowForm(false)    
  };

  useEffect(() => {

    const requiredFields = formFields.filter(({ required }) => required);
    const isSomeRequiredFieldEmpty = requiredFields.some(({ value }) => !value);
    setIsDisabledButton(isSomeRequiredFieldEmpty);
  }, [buyer]);

 

  return (
    <div>{
     showForm?<Form buyer={buyer} handleForm={handleForm} isDisabledButton={isDisabledButton} handleSubmit={handleSubmit}/>:null
    }
      {
         showOrder?<Order buyer={buyer}/>:null
      }
    </div>
  );
}
