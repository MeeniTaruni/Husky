//let flights = [

/*
export const flights = [
    {flightId:"6E123",companyName:"Indigo",source:"Hyderabad",destination:"Chennai",departure:"16:00",arrival:"17:00"},
    {flightId:"AI123",companyName:"AirIndia",source:"Bangalore",destination:"Delhi",departure:"06:00",arrival:"08:00"},
    {flightId:"6E321",companyName:"Indigo",source:"Chennai",destination:"Hyderabad",departure:"07:00",arrival:"08:00"},
    {flightId:"AI124",companyName:"Air India",source:"Delhi",destination:"Bangalore",departure:"09:00",arrival:"11:00"}
               
];

*/
//export default flights;

//using json we can do in this way too 
import { Schedule } from "./Schedule.js";
export const flights=[
    new Schedule("6E123","Indigo","Hyderabad","Chennai","16:00","17:00"),
    new Schedule("AI123","Air India","Bangalore","Delhi","06:00","08:00"),
    new Schedule("6E321","Indigo","Chennai","Hyderabad","07:00","08:00"),
    new Schedule("AI124","Air India","Delhi","Bangalore","09:00","11:00"),
    new Schedule("SP786","Spice Jet","Mumbai","Kerala","12:00","13:45"),
    new Schedule("SP787","Spice Jet","Hyderabad","Chennai","19:00","20:00")
];

