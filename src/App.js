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
      books: [
        {
          title: '',
          desc: '',
          author: '',
          image: '',
          price: ''
        }
      ]
  
  
    }
  }
  
  
  


  componentDidMount() {
    let url = `https://www.googleapis.com/books/v1/volumes?q=flowers`
    let apiKey = 'key=AIzaSyCZii6WHPmqDLov4E3g0G0qT11L-8a4Zq4'

    fetch(url)
      .then(res => res.json())
      .then(data => {



        console.log(data)
        this.setState({
          books:[
            {
              title: data.items.volumeInfo.title,
              desc: data.items.volumeInfo.subtitle,
              author: data.items.volumeInfo.authors,
              price: data.items.saleInfo.listPrice.amount
            }
          ]})
      })


  }


  handleAdd() {
    console.log('hi')


  }


  render() {

    
    return (
      <div className='App'>

        <Title />
        <form>
          <Search
            searchBar={this.handleAdd}
          />
          <Filter />
        </form>
        <Page
          stateIs={this.state}
        />
      </div>
    )


  }


}

export default App;
