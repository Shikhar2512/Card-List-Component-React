// import { Component } from "react";
import './card.styles.css';
const Card = ({ product, className }) => {
    const { name, email, id } = product;
    return (

        <div key={id} className={`card-container ${className}`}>
            <img alt="Image-Space" src="" />
            <h2>{name}</h2>
            <p>{email}</p>
        </div>
    )
}




export default Card;


// class Card extends Component {
//     render() {
//         const{product,className} = this.props;
//         const{name , email , id} = product;
//         return(

//             <div key = {id} className={`card-container ${className}`}>
//                 <img alt="Image-Space" src=""/>
//                 <h2>{name}</h2>
//                 <p>{email}</p>
//             </div>
//         )

//     }
// }
