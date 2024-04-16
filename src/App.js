import logo from './logo.svg';
import './App.css';
import React from 'react';
import { ScheduleService } from './Schedule-Service.js';
//import {flights} from './scheduled-flights-list.js';
import {flights} from './scheduled-flights-list.js';
import { useState , useRef } from 'react';
import { Schedule } from './Schedule.js';
//import useState from 'react';
//import React, { useState } from 'react';

function App(props) {

  const source = useRef();
  const destination = useRef();

  const [flist,setFlist] = useState([]);//useState(flights);
  const deleteRow = (index)=>{
    //alert(index);
    var con = window.confirm("Are you sure of Deleting");
    if(con)
      setFlist(flist.toSpliced(index,1));
      //this.setState({flist:this.state.flist.toSpliced(index,1)});
    
  }

  const searchFlights = ()=>{


    ScheduleService.getFlightDetailsBySourceAndDestination(source.current.value,destination.current.value).then((response) => setFlist(response.data));

    /*let tempFlist = [];
    for(var i=0;i<flights.length;i++)
      if(flights[i].source == source.current.value && flights[i].destination == destination.current.value)
        tempFlist.push(flights[i]);
    //alert(source.current.value+" "+destination.current.value);
    setFlist(tempFlist);*/
    //console.log(tempFlist);
  }
//<td><input type="text" ref ={source}></input></td>
//<td><input type="text" ref ={destination}></input></td>
  return(
    <>
    <table align='center' border="2" width="50%" className='tableStyles'>
      <tr>
        <th>Source</th>
        <th>Destination</th>
        <th>Action</th>
      </tr>
      <tr>
      <td>
        <select ref={source}>
          <option value="Hyderabad">Hyderabad</option>
          <option value="Chennai">Chennai</option>
          <option value="Bangalore">Bangalore</option>
          <option value="Delhi">Delhi</option>
          <option value="Mumbai">Mumbai</option>
          <option value="Kerala">Kerala</option>
        </select>
      </td>
      <td>
        <select ref={destination}>
          <option value="Hyderabad">Hyderabad</option>
          <option value="Chennai">Chennai</option>
          <option value="Bangalore">Bangalore</option>
          <option value="Delhi">Delhi</option>
          <option value="Mumbai">Mumbai</option>
          <option value="Kerala">Kerala</option>
        </select>
      </td>
        <td><button onClick={searchFlights}>Search</button></td>
      </tr>
    </table>
    <hr/>
    <table align='center' border="1" width="50%" className='tableStyles'>
      <tr>
        <th>Flight Id</th>
        <th>Flight Name</th>
        <th>Source</th>
        <th>Destination</th>
        <th>Departure</th>
        <th>Arrival</th>
        <th>Book</th>
        <th>Delete</th>
      </tr>
      {
        flist.map((flight,index)=><tr key={index}>
          <td>{flight.flightId}</td>
          <td>{flight.companyName}</td>
          <td>{flight.source}</td>
          <td>{flight.destination}</td>
          <td>{flight.departure}</td>
          <td>{flight.arrival}</td>
          <td><button>Book</button></td>
          <td><button onClick={() => deleteRow(index)}>Delete</button></td>
        </tr>)
      }

    </table>
    </>
  )
  }


/*

export class App extends React.Component
{
constructor(props)
  {
  super(props);
  this.state={flist:flights}
  }
deleteRow = (index)=>{
  //alert(index);
  var con = window.confirm("Are you sure of Deleting");
  if(con)
    this.setState({flist:this.state.flist.toSpliced(index,1)});
  
}
  render()
  {
    return(
      <table align='center' border="1" width="50%">
        <tr>
          <th>Flight Id</th>
          <th>Flight Name</th>
          <th>Source</th>
          <th>Destination</th>
          <th>Departure</th>
          <th>Arrival</th>
          <th>Book</th>
          <th>Delete</th>
        </tr>
        {
          this.state.flist.map((flight,index)=><tr key={index}>
            <td>{flight.flightId}</td>
            <td>{flight.flightName}</td>
            <td>{flight.source}</td>
            <td>{flight.destination}</td>
            <td>{flight.departure}</td>
            <td>{flight.arrival}</td>
            <td><button>Book</button></td>
            <td><button onClick={() => this.deleteRow(index)}>Delete</button></td>
          </tr>)
        }

      </table>
    )
  }
*/


/*function App() {
  return (
    <div>
      <h1 align='center'>List of Flights</h1>
      <table align='center' border={1} width="50%">
        <thead>
          <tr>
            <th>Flight ID</th>
            <th>Flight Name</th>
            <th>Source</th>
            <th>Destination</th>
            <th>Departure</th>
            <th>Arrival</th>
            <th>Book</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {flights.map((flight,index) => (
            <tr key={index}>
              <td>{flight.flightId}</td>
              <td>{flight.flightName}</td>
              <td>{flight.source}</td>
              <td>{flight.destination}</td>
              <td>{flight.departure}</td>
              <td>{flight.arrival}</td>
              <td><button>Book</button></td>
              <td><button onClick={() => this.deleteRow(index)}>Delete</button></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}*/
/*
function App() {
  return (
    <div>
      <h1>List of Flights</h1>
      <ul>
        {flights.map((flight) => (
          <li key={flight.flightId}>
            <strong>Flight ID:</strong> {flight.flightId},
            <strong> Flight Name:</strong> {flight.flightName},
            <strong> Source:</strong> {flight.source},
            <strong> Destination:</strong> {flight.destination},
            <strong> Departure:</strong> {flight.departure},
            <strong> Arrival:</strong> {flight.arrival}
          </li>

          

        ))}
      </ul>
      
    </div>

    

    

  );
}
*/

/*
class App extends React.Component
{
*/
  /*constructor(props)
  {
  super(props);
  this.state={name:"Sapient",location:"HiTech"};
  React.createRef("");
  }*/

  /*constructor(props)
  {
  super(props);
  this.state={fruits:["Apple","Banana","CustardApple","DragonFruit","Fig","Guava"]};
  
  }*/

/*
  constructor(props)
  {
  super(props);
  this.state={orgName:"Sapient",location:"Madhapur"};
  
  }
*/

/*changeName = () => {
  this.setState({name:"New Sapient"});
}*/

/*
changeName = () => {
  this.setState({name:this.refs.txt1.value});
}

changeLocation = () => {
  this.setState({location:this.refs.txt2.value});
}
*/

/*
render()
  {
    return(
      <>
      <ol>{this.state.fruits.map((fruit,index) => {return <li key={index}>{fruit}</li>})}</ol>
      <select>{this.state.fruits.map((fruit,index) => <option key={index}>{fruit}</option>)}</select><br></br>
      <table border="1">{this.state.fruits.map((fruit,index) => {return <tr><th>{index}</th><td>{fruit}</td></tr>})}</table>
      <br></br>
      <table border={1}>
        <thead><tr><th>Fruits</th></tr></thead>
        <tbody>{this.state.fruits.map((fruit,index) => (
          <tr key={index}><td>{fruit}</td></tr>))}
          </tbody>
      </table>

      </>
    )
  }
  */

/*
  static getDerivedStateFromProps(pros,state)
  {
    console.log("From getDerivedStateFromProps()");
  }
 componentDidMount()
 {
  console.log("App Component Mounted");
 }

 shouldComponentUpdate()
 {
  console.log("from scu");//+this.state.orgName
  return true;
  //return false;
 }

 componentDidUpdate()
 {
  console.log("App Component is updated");
 }

 changeOrgName = () => {
  this.setState({orgName:"New Sapient"});
  //console.log(this.state.orgName);
 }

 changeLocation = () => {
  this.setState({location:"HiTech City"});
 }
 
 render()
  {
    return(
      <>
      <h1>{this.state.orgName} Welcomes you at {this.state.location}</h1>
      <br></br>
      <button onClick={this.changeOrgName}>Change Name</button>
      <button onClick={this.changeLocation}>Change Location</button>
      </>
    )
  }*/

 /* 
render()
  {
    return(
      <>
      
      <h1 style={{color:"red",textAlign:"center"}}>Hello {this.state.name+" at "+this.state.location+" "+this.props.pincode}</h1>
      <input type="text" ref="txt1" style={{ display: 'block', margin: 'auto' }}></input><br></br>
      <button onClick= {this.changeName} style={{ display: 'block', margin: 'auto' }}>Change_Name</button><br></br>
      <input type="text" ref="txt2" style={{ display: 'block', margin: 'auto' }}></input><br></br>
      <button onClick= {this.changeLocation} style={{ display: 'block', margin: 'auto' }}>Change_Location</button>
      </>
    )
  }*/

//}
//<h1 style={{color:"red",textAlign:"center"}}>Hello {this.props.name+" at "+this.props.location}</h1>
/*function App(props) {
  return (
    <h1 style={{color:"red",textAlign:"center"}}>Hello {props.name+" "+props.location}</h1>
  );
}*/
//}
export default App;
