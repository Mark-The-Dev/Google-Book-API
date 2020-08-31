import React from 'react'



class Page extends React.Component{




  render(){
    
     const list = this.props.stateIs.map((item) => {
     
      


      if (item.saleInfo.saleability === "NOT_FOR_SALE" ||item.saleInfo.saleability === "FREE"){

      return <li key ={item.id}>
      <h2>{item.volumeInfo.title}</h2>
      <img src={item.volumeInfo.imageLinks.smallThumbnail} />
      <h3>{item.volumeInfo.authors}</h3>
      <p>This item is: {item.saleInfo.saleability}</p>
      {item.volumeInfo.description}   
      </li>


     } else if (item.saleInfo.saleability === "FOR_SALE") {
      return <li key ={item.id}>
      <h2>{item.volumeInfo.title}</h2>
      <img src={item.volumeInfo.imageLinks.smallThumbnail} />
      <h3>{item.volumeInfo.authors}</h3>
      <p>{item.saleInfo.listPrice.amount}</p>
      {item.volumeInfo.description}   
      </li>


     }
     
     

         
     })    
    
    return (
      <div className= 'thePage'>
        <ul>
        {list}
        </ul>

      </div>
    )

  }



}


export default Page