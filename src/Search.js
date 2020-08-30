import React from 'react'


class Search extends React.Component{




  render(){

    return (
      <div className = 'searchBar'>
        <label htmlFor='book'>Search:</label>
        <input name='book' id='book'>
        
        </input>

      </div>
    )

  }

}


export default Search