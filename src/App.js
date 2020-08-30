import React from 'react';
import './App.css';
import Title from './Title'
import Search from './Search'
import Filter from './Filter'
import Page from './Page'



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
