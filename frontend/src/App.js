import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect } from 'react';
import axios from 'axios';


function App() {

  const [lists, setLists] = useState([]);
  const [value, setValue] = useState("");

  useEffect(() => {
    //DB에 있는 값을 가져온다.
    axios.get('/api/values')
      .then(response => {
        console.log("response", response);
        console.log("response.data", response.data);
        setLists(response.data);
      })
  }, [])

  const changeHandler = (event) => {
    setValue(event.currentTarget.value);
  }

  const submitHandler = (event) => {
    event.preventDefault();

    axios.post('/api/value', {value: value})
      .then(response => {
        if(response.data.success) {
          console.log("response", response);
          console.log("response.data", response.data);
          setLists([...lists, response.data]);
          setValue("");
        } else {
          alert('값을 DB에 넣는 데 실패했습니다.')
        }
      })
  }
  

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

      <div className="container">
        {lists && lists.map((list, index) => {
          <li key={index}>{list.value}</li>
        })}
        <form className="example" onSubmit={submitHandler}>
          <input
            type="text"
            placeholder="입력해주세요."
            onChange={changeHandler}
            value={value}
          />
          <button type="submit">확인</button>
        </form>
      </div>
      </header>
    </div>
  );
}

export default App;
