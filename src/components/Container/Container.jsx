import './Container.css';
import React, { useState, useEffect, useRef } from 'react'
// components
import View from '../View/View';
import ButtonForm from '../ButtonForm/ButtonForm';
// icons
import { AiOutlinePlus, AiOutlineSearch } from 'react-icons/ai';
// api
import axios from 'axios';
// url
const baseURL = process.env.REACT_APP_API_URL;

const Container = () => {

  const [ isPending, setIsPending ] = useState(false);
  const [ id, setId ] = useState(0);
  const [ inputSearch, setInputSearch ] = useState('');

  const nameRef = useRef();
  const supplierRef = useRef();
  const priceRef = useRef();
  const statusAtRef = useRef('Ativo');
  const statusInRef = useRef('Inativo');

  const handleEdit = async (e, index, inputForm) => {
    
    e.preventDefault();
    // select Form
    const { id, name, price, status, supplier } = inputForm;
    setId(id);
    nameRef.current.value = name;
    priceRef.current.value = price;
    supplierRef.current.value = supplier;

    if( status === statusInRef.current.valueOf().value ){
      
      statusInRef.current.valueOf().checked = status; 
      statusAtRef.current.valueOf().defaultChecked = ''; 
    }
    else{
      statusAtRef.current.valueOf().checked = status; 
      statusInRef.current.valueOf().defaultChecked = '';
    }

    // modificar o valor do input
    const newValueInput = {
      name: nameRef.current.value,
      price: parseFloat(priceRef.current.value).toFixed(2),
      supplier: supplierRef.current.value,
      status: statusInRef.current.checked
      ? statusInRef.current.valueOf().value : statusAtRef.current.valueOf().value
    }

    // update com novos values do InputForm
    await axios.put(`${baseURL}/${index}`, newValueInput);

    setIsPending(true);
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    const valueInput = {
      name: nameRef.current.value,
      price: parseFloat(priceRef.current.value).toFixed(2),
      supplier: supplierRef.current.value,
      status: statusInRef.current.checked
      ? statusInRef.current.valueOf().value : statusAtRef.current.valueOf().value
    }

    await axios.post(`${baseURL}`, valueInput);

    setIsPending(true);
    
    nameRef.current.value = '';
    priceRef.current.value = '';
    supplierRef.current.value = '';
    statusAtRef.current.checked = 'Ativo'
  }

  useEffect(() => {
    if( isPending ){
      setIsPending(false);
    }
    
  }, [isPending]);



  return (
    <div className="max-width"> 
      <div className='container-form'>
        <form onSubmit={handleSubmit}>
          <div id="input-group">
            <label>Nome
              <input type="text" 
              name="name"
              placeholder="Digite o nome" 
              ref={nameRef}
              defaultValue=''
              required />
            </label>
            <label>Preço
                <input type="number" 
                name="price"
                placeholder="Digite o preço"
                ref={priceRef}
                defaultValue=''
                required />
            </label>
            <label>Fornecedor
              <input type="text" name="supplier"
              placeholder="Digite o fornecedor" 
              ref={supplierRef}
              defaultValue=''
              required />
            </label>
            <div>
              <label>
                <input type="radio" id="rStock" 
                  name="group1" 
                  value='Ativo'
                  defaultChecked='Ativo'
                  ref={statusAtRef}
                  />
                Ativo
              </label>
              <label>
                <input type="radio" id="rBackorder" 
                name="group1"
                value='Inativo' 
                ref={statusInRef}
                />
                Inativo
              </label>
            </div>
            <div className="button-group">
              <ButtonForm text={ <AiOutlinePlus/>}
                type='submit' 
                value='adicionar'
                classButton='form__btn'
                disabledBtn={inputSearch}>
              </ButtonForm>
              <div className='search-bar'>
                <input type="text" 
                className="input"
                placeholder="buscar" 
                aria-label="buscar"
                value={inputSearch}
                onChange={((e) => setInputSearch(e.target.value.toLowerCase()))}/>
                <ButtonForm text ={<AiOutlineSearch/>} 
                type='submit'
                value='buscar'
                classButton='form__btn btn__search'
                emptyInput={inputSearch}>  
                </ButtonForm>
              </div>
            </div>
          </div>
        </form>
      </div>
      <View editData={handleEdit} isPending={isPending} searchData={inputSearch} />
    </div>
  )
}


export default Container;