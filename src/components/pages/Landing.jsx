import React from 'react';
import { useLocation } from 'react-router-dom';
import Header from '../Header.jsx'; 
import Card from '../card.jsx'; 
import TodoContainer from '../todoContainer.jsx'; 
var showdate = new Date();
var monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
var displaydate = showdate.getDate() + ' ' + monthNames[showdate.getMonth()] + ' ' + showdate.getFullYear();
let dt = showdate.toDateString()
let displaytime=showdate.getHours()+'.'+showdate.getMinutes()

function Landing()
{
    const data = useLocation()
    console.log(data)

    return(
        <div className="bg-black p-16 h">
        <div className="bg-[#EFEFEF] p-10 border rounded-md">
          
          {/* Header */}
          <Header name={data.state.user} />
          
  
          {/* Card */}
          <div className="flex justify-between flex-wrap gap-7 my-5 ">
            <Card bg={'#8272DA'} title={'30°'} subtitle={'Tirupati'} />
            <Card bg={'#FD6663'} title={displaydate} subtitle={displaytime} />
            <Card bg={'#FCA201'} title={'Built using'} subtitle={'React'} />
          </div>
  
  {/* Todo container */}
         <TodoContainer/>
        </div>
      </div>
    )
}

export default Landing