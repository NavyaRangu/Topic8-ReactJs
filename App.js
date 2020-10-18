import React, { Component } from 'react';
class App extends Component{
   constructor() {
      super();
		
      this.state = {
         formtable: []
      }
	
      this.setStateHandler = this.setStateHandler.bind(this);
   };
   setStateHandler() {

      var myArray=this.state.formtable;
      var index=this.state.formtable?this.state.formtable.length+1:1;
      
         myArray.push(<tr><td>5</td><td>*</td><td>{index}</td><td>=</td><td> {5*index}</td></tr>)
     
      this.setState({formtable: myArray})
   };
   render() {
      return (
         <div>
            <button onClick = {this.setStateHandler}>SET STATE</button>
            <FiveTable fivetable={this.state.formtable} />
         </div>
      );
   }
   
}
class FiveTable extends React.Component {
    render() {

            return (
          <div>
             <table>
                {this.props.fivetable}
             </table>
          </div>
       );
    }
 }
export default App;