import React, {Component} from 'react';
import './Search.css';

let wikiUrl="https://en.wikipedia.org/w/api.php?format=json&action=query&prop=extracts&explaintext&redirects=1&titles=";

class Search extends Component
{
    constructor(props) {
        super(props);
        this.state = {
            value: '',
            data: ''
        };
        
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit= this.handleSubmit.bind(this);
      
    }

    handleChange(event) {
        this.setState({value: event.target.value});
      }
    handleSubmit=() => {

        let search = this.state.value;
        let searchUrl=wikiUrl+search;
        console.log(searchUrl);

        fetch(searchUrl)
        .then(res => {
            return res.json()
        }
            )     
        .then(bb =>{
            this.setState({
                data:bb
              
            })
    }) 
       
console.log(this.state.data);
        

 

        
    
    
    }



render()
{
return(
    <div className="search">
        <h1> Search Using Wikipedia API</h1>
  
        <input type="text" value={this.state.value} onChange={this.handleChange} className="searchTxt"/> 
      <input type="submit" name="Submit" value="Submit" onClick={this.handleSubmit}/>
 
    
    </div>
    )
}

}



export default Search;
