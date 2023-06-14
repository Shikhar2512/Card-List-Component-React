// import { Component } from "react";
import Card from "../card/card.component";
import './card-list.styles.css';
const CardList = ({ products, className }) => 
    <div className={`card-list ${className}`}>
        {
            products.map((product) => {
                return (
                    <Card key = {product.id} className='product-card-container' product={product} />
                )
            })
        }
    </div>
export default CardList;

// class CardList extends Component{
//     render(){
//         console.log("render");
//         const{ products , className } = this.props;
//         return (
//             <div className={`card-list ${className}`}>
//                 {
//                     products.map((product)=>{
//                         return(
//                             <Card className = 'product-card-container' product = {product}/>
//                         ) 
//                     })
//                 }
//             </div>
//         )

//     }
// } 
