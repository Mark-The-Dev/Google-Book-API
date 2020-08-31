import React from 'react'


class Filter extends React.Component {




  render(){

    return (
      <div className='filterSection'>
        <label htmlFor='bType'>Book Type:</label>
        <select
         id ='bType' 
         name='bType'
         onChange={(e) => this.props.bType(e.currentTarget)}
         >
        <option value='all'>All</option>
        <option value='books'>Books</option>
        <option value='magazines'>Magazines</option>

        </select>
       
       
       
        <label htmlFor='pType'>Print Type:</label>
        <select id ='pType' name='pType'
        onChange={(e) => this.props.pType(e.currentTarget)}
        >
        <option value='none'>No Filter</option>
        <option value='partial'>Partial</option>
        <option value='full'>Full</option>
        <option value='free-ebooks'>Free E-books</option>
        <option value='paid-ebooks'>Paid E-books</option>
        <option value='ebooks'>E-books</option>

        </select>
 
      </div>
    )

  }




}



export default Filter