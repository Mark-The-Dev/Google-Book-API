import React from 'react'


class Search extends React.Component{




  render(){

    return (
      <div className = 'searchBar'>
        <label htmlFor='book'>Search:</label>
        <input 
        name='book' 
        id='book'
        >
        </input>
        <button
          type='button'
          className='search-button'
          onClick={() => this.props.searchBar()}
        >
          Search Now
        </button>

      </div>
    )

  }

}


export default Search