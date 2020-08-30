import React from 'react';
import './App.css';
import Title from './Title'
import Search from './Search'
import Filter from './Filter'
import Page from './Page'

/*
TODO: Set up page to perform a GET promise for Google Book API

APIKEY: key=AIzaSyCZii6WHPmqDLov4E3g0G0qT11L-8a4Zq4

Must also be able to filter results and print type with

printType= and filter=

base link https://www.googleapis.com/books/v1/volumes?q=

Standard call goes: link searchterm (&printType= || &filter=) key=

*/

class App extends React.Component{



  render(){

    return (
      <div className = 'App'>

      <Title />
      <form>
        <Search />
        <Filter/>
      </form>
      <Page />
      </div>
    )


  }


}

export default App;
