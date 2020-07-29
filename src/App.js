import React, { useState, useEffect } from 'react';
import MonthsList from './components/MonthsList';
import api from './services/api';
import './App.css';

function App() {
  const [months, setMonths] = useState([]);

  useEffect(() => {
    api.get('').then(resp => {
      return resp.data
    })
    .then(users => {
      const months = users.reduce((acc, user) => {
        const date = new Date(user.dob);
        const month = date.toLocaleString('en', {month: 'long'});
        
        const tt = acc.find(item => item.month === month);

        tt ? tt.users.push(user) : acc=[ ...acc, {id: date.getMonth(), month: month, users: [user], showUsers: false}] 

        return acc
      }, []);
      months.sort((a,b)=> a.id-b.id);
      setMonths(months);
    });
  }, []);

  function onMonthHover (id) {
    const month = months.find(item => item.id === id);
    month.showUsers = true;
    setMonths(months.map((item) => (item.id === month.id ? month : item)));
  }

  function onMonthUnhover (id) {
    const month = months.find(item => item.id === id);
    month.showUsers = false;
    setMonths(months.map((item) => (item.id === month.id ? month : item)));
  }

  function getMonthColor(count){
    if ( count>= 0 && count <= 2) {
      return 'gray';
    } else if (count >= 3 && count <= 6) {
        return 'blue';
    } else if (count >= 7 && count <= 10) {
        return 'green';
    } else if (count > 11) {
        return 'red';
    }
  }

  return <>
    <header className="app-header">Months List</header>
    <MonthsList 
      months={months}
      onHover = {onMonthHover} 
      unHover = {onMonthUnhover}
      getColor = {getMonthColor}
      />
    </>  
}

export default App;
