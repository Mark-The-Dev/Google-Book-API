import React from 'react'


class Filter extends React.Component {




  render(){

    return (
      <div className='filterSection'>
        <label htmlFor='bType'>Book Type:</label>
        <select id ='bType' name='bType'>
        <option value='all'>All</option>
        <option value='books'>Books</option>
        <option value='magazines'>Magazines</option>

        </select>
       
       
       
        <label htmlFor='pType'>Print Type:</label>
        <select id ='pType' name='pType'>
        <option>No Filter</option>
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