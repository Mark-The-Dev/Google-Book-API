import React from 'react'


class Search extends React.Component{




  render(){

    return (
      <div className = 'searchBar'>
        <label htmlFor='book'>Search:</label>
        <input 
        name='book' 
        id='book'
        value={this.props.stateText}
        onChange={e => this.props.getsText(e.currentTarget)}
        >
        </input>
        <button
          htmlFor='book'
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