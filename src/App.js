// import { Component } from 'react';
import { useState, useEffect } from 'react';
import './App.css';
import CardList from './component/card-list/card-list.component'
import SearchBox from './component/search-box/search-box.component';
const App = () => {

  /*state variables*/
  const [searchField, setSearchField] = useState(''); //[value.setvalue]
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState(products);

  /*side effect*/
    
  /*useEffect((props) => {
    functionality to trigger
  }[dependencies])*/

  useEffect(() => {
    fetch(/*API to fetch Data Stream*/)
      .then((response) => {
        if (!response.ok) {
          throw Error(response.statusText)
        }
        else {
          return response.json();
        }
      })
      .then((users) => {
        setProducts(users);
      })
      .catch(function (error) {
        console.log(error);
      })
  }, [])
  useEffect(() => {
    const newFilteredProducts = products.filter(product => product.name.toLowerCase().includes(searchField));
    setFilteredProducts(newFilteredProducts);
  }, [products, searchField]);
  /*side effect*/

  const onChangeSearchField = (event) => {
    let searchFieldString = event.target.value.toLowerCase().trim();
    setSearchField(searchFieldString);
  }


  return (
    <>
      <div className="App">
        <SearchBox onChangeHandler={onChangeSearchField} placeHolder='Search...' className='product-search-box' />
        <CardList products={filteredProducts} className='product-list' />
      </div>
    </>
  )
}









// class App extends Component {
//   constructor() {
//     super(); // calling constructior mwehtod of component
//     this.state = {
//       //always a json object key value pair
//       products: [],
//       searchField: ""
//     }

//   }
//   componentDidMount() {
//     fetch('https://jsonplaceholder.typicode.com/users')
//       .then(function (response) {
//         if (!response.ok) {
//           throw Error(response.statusText)
//         }
//         else {
//           return response.json();
//         }
//       })
//       .then((users) => {
//         this.setState(() => {
//           return { products: users };
//         })
//       })
//       .catch(function (error) {
//         console.log(error);
//       })
//   }
//   onChangeSearchField = (event) => {
//     let searchField = event.target.value.toLowerCase().trim();
//     this.setState(() => {
//       return {
//         searchField
//       };
//     });

//   }
//   render() {  //explicitly telling what to render
//     //for readblity
//     const{products,searchField} = this.state;
//     const{onChangeSearchField} = this;
//     let filtered_products = products.filter(product => product.name.toLowerCase().includes(searchField));
//     return (
//       <>
//         <div className="App">
//           <SearchBox onChangeHandler={onChangeSearchField} placeHolder = 'Search...' className = 'product-search-box'/>
//           <CardList products = {filtered_products} className = 'product-list'/>
//         </div>
//       </>
//     );
//   }
// }
export default App;
