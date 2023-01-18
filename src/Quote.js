import {Dna} from 'react-loader-spinner';
import Axios from 'axios';
const { useState } = require("react")
const Quote=()=>{
const [Quote,setQuote]=useState('')
const [loading,setLoading]=useState(false)
   function getQuote(){ 
    setLoading(true)
    Axios.get("https://animechan.vercel.app/api/random")
      .then(function (response) {
        //handle success
        setQuote(response.data.quote)
        setLoading(false) 
        console.log(response)
      })
      .catch(function (response) {
        //handle error
        console.log(response);
      });
  }
 function on_click(){
    getQuote()
}
return (
  <div>
    <button onClick={on_click} style={{fontSize:'20px'}}>Get Quote</button>
    <div >
    <Dna
    visible={loading}
       height="300"
       width="300"
       ariaLabel="dna-loading"
       wrapperStyle={{marginTop:'-10px',left:'300px'}}
       wrapperClass="dna-wrapper"
       />
       </div>
    <h1 style={{visibility:!loading?'visible':'hidden'}}>{Quote}</h1>
  </div>
)
}
export default Quote;