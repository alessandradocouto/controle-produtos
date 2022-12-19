import './App.css';
import Container from './components/Container/Container';
import Nav from './components/Nav/Nav';
import React from 'react';

const App = () => {
  return (
    <>
    <Nav/>
    <Container/>
    </>
  )
}

export default App;

  // // state de todos produtos
  // const [allProduct, setAllProduct] = useState([])  
  // // states de cada detalhe
  // const [name, setName] = useState("");
  // const [price, setPrice] = useState("");
  // console.log( allProduct );
  
  // // destructurando o retorno da função useFetch
  // const { data: items, configHttp } = useFetch(urlApi);
  // console.log( items );


  // // submit do form
  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   // como a funcao onChange do input passa pro state name/price valores
  //   // por setName/setPrice
  //   // então, eu coloco  uma variavel como objeto pra pegar esses valores
  //   const inputProduct = {name: name, price: price};
  //   console.log( inputProduct );

  //   configHttp(inputProduct, "POST");

  //   setName("");
  //   setPrice("");
  // }