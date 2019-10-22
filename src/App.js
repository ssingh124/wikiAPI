import React, {Component} from 'react';
import './App.css';
import Character from './components/Character';
import Search from './components/Search';

const charArray =[
  {name: 'Mark', race: 'Human', status:'Full-Health', comment:''},
  {name: 'Goerge', race: 'Demon', status:'Rage', comment:'I am so angry'},
  {name: 'Mark', race: 'Human', status:'Full-Health', comment:''}
]



class App extends Component {
  listComp =() =>{
    return charArray.map((item,index)=> ( <Character 
      key={index}
    name= {item.name}
    race={item.race}
    status={item.status}
    comment={item.comment}
    />
    ));
     
  };
  render(){
  return (
    <div className="App">
 <main>
      <Search/>
      </main>

      <header className="App-header">
        <h1> This is our first Webpack App</h1>
        {this.listComp()}
      </header>

     


    </div>
  );
  }
}


export default App;



