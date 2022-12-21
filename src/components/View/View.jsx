import './View.css';
import React, { useState, useEffect } from 'react';
// components
import Loading from '../Loading/Loading';
// icons
import { AiFillEdit, AiFillDelete } from 'react-icons/ai';
// api
import axios from 'axios';
// url
const baseURL = process.env.REACT_APP_API_URL;


const View = ({ editData, isPending, searchData }) => { 
  
  const [ products, setProducts ] = useState([]);
  const [ error, setError ] = useState('');
  const [ loading, setLoading ] = useState(true);
  const [ index, setIndex ] = useState(0);

  const axiosFetch = async (url) => {

    try{
      const resp = await axios.get(url);
      setProducts(resp.data);
      setLoading(false);
    }
    catch(err){
      console.log(err.message);
      setError(err);
      setLoading(false);
    }
  }

  const deleteData = async (id) => {
    await axios.delete(`${baseURL}${id}`);
    setIndex(id);
  }
  

  useEffect(() => {
    axiosFetch(`${baseURL}`);
  }, [index, isPending]);


  useEffect(() => {
    axiosFetch(`${baseURL}?q=${searchData}`);
  }, [ searchData]);
  

  return (
    <section className='container-item'>
      <table>
        <thead>
          <tr>
            <th colSpan={"3"}>Nome</th>
            <th>Fornecedor</th>
            <th>Preco</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>
        {products && products.length > 0 && products.map((item) => { 
          return <tbody key={item.id}>
            <tr>
              <td colSpan={"3"}>{item.name}</td>
              <td>{item.supplier}</td>
              <td>{item.price}</td>
              <td> 
                <button
                  disabled
                  type='button'
                  value={item.status}
                  className={ 
                    item.status === 'Ativo' 
                    ? 'circle-status in-stock' 
                    : 'circle-status back-order'
                  }>
                    {item.status}
                  </button>               
              </td>
              <td>
                <button
                  type="submit" 
                  value="editar"
                  className='btn-form--edit'
                  onClick={(e) => editData(e, item.id, item)}>
                    <span className="rd-only">
                      Editar
                    </span>
                    <AiFillEdit/>
                </button>
                <button 
                  type="submit" 
                  value="deletar"
                  className='btn-form--del'
                  onClick={() => deleteData(item.id)}>
                    <span className="rd-only">
                      Apagar
                    </span>
                    <AiFillDelete/>
                </button>
              </td>
            </tr>
          </tbody>})
        }
      </table>
      {error && <p className='error'>{error.message}</p>}
      {loading && !error && <Loading size ='regular' />}
    </section>
  )
}

export default View;