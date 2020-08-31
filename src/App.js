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



class App extends React.Component {

  constructor(props){
    super(props)
    this.state = {
      books: [],
      text:'',
      type: 'all',
      filter:'none'
    }
  }
  
  
  


  // componentDidMount() {

  


  // }


  getText = (e) => {
    //console.log(e.value)
    this.setState({
      text: e.value
    })
  }

  getType = (e) => {
    this.setState({
      type: e.value
    })
  }

  getFilter = (e) => {
    this.setState({
      filter: e.value
    })
  }

  handleAdd = () => {
    let url = `https://www.googleapis.com/books/v1/volumes?q=`
    let apiKey = 'key=AIzaSyCZii6WHPmqDLov4E3g0G0qT11L-8a4Zq4'
    let value = this.state.text
    let type = this.state.type
    let filter = this.state.filter

    if(!this.state.text || !this.state.books){
      alert('There are no matches')

    } else if (type === 'magazines' && filter.includes('ebooks')){
        alert('There are no Magazine and E-books that are the same!')
  
    } else if (filter === 'none'){

      fetch(`${url}${value}&printType=${type}`)
      .then(res => res.json())
      .then(data => {
        console.log(data)
        this.setState({
          books:data.items
        })
      })

    } else if (filter !== 'none') {
      fetch(`${url}${value}&printType=${type}&filter=${filter}`)
      .then(res => {
        if(res.ok){
          return res.json()
        } else {
          alert('Nice try!')
        }
      })
      
      .then(data => {
        console.log(data)
        this.setState({
          books:data.items
        })
      })

    } 




    }






  render() {

    console.log(this.state.filter)
    return (
      <div className='App'>

        <Title />
        <form>
          <Search
            searchBar={this.handleAdd}
            stateIs={this.state.books}
            stateText={this.state.text}
            getsText={this.getText}
          />
          <Filter 
            pType={this.getFilter}
            bType={this.getType}
          />
        </form>
        <Page
          stateIs={this.state.books}
        />
      </div>
    )


  }


}

export default App;
