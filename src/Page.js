import React from 'react'



class Page extends React.Component{




  render(){
    
    const bookFind = this.props.stateIs.books.map((item, idx) => {
      return ( 
        
        item = 
        <div 
        className= 'thePage'
        key={idx}
        >
        {this.props.stateIs.title}
        {this.props.stateIs.author}
        {this.props.stateIs.desc}
        {this.props.stateIs.price}

      </div>
      )
    })

    
    
    return (
      <div className= 'thePage'>
        {this.props.stateIs.title}
        {this.props.stateIs.author}
        {this.props.stateIs.desc}
        {this.props.stateIs.price}

      </div>
    )

  }



}


export default Page