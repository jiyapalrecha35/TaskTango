import './App.css';
import Navbar from './Mycomponents/Navbar';
import Todos from './Mycomponents/Todos';
import Footer from './Mycomponents/Footer'
import { useState } from 'react';
import AddTodo from './Mycomponents/AddTodo';
import About from './Mycomponents/About';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";




function App() {
  const onDelete = (Todo) => {
    console.log("I am being deleted ", Todo);
    setTodo(todo.filter(element => element !== Todo))
  }
  const addTodo = (title, desc) => {
    let n = todo.length === 0 ? 0 : todo[todo.length - 1].sno + 1;

    let list = [...todo];
    list.push({ sno: n, title: title, description: desc });
    setTodo(list)


  }
  const [todo, setTodo] = useState(
    [{ sno: 1, title: "Explore a New Trail:", description: " Embark on a hiking adventure and explore a new hiking trail in your area." }, { sno: 2, title: "Design a Vision Board:", description: "Create a vision board to map out your goals and aspirations." }, { sno: 3, title: "Plan a Movie Night:", description: "Organize a movie night with friends or family and pick out some classic films to watch." }, { sno: 4, title: "Plant a Mini Garden:", description: "Start a mini indoor garden with a few potted plants or herbs." }, { sno: 5, title: "Learn Data Structures and Algorithms (DSA)", description: "Master essential coding techniques with Data Structures and Algorithms for improved problem-solving." }]
  )

  const [mode, setMode] = useState('light')
  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = 'black';
      document.body.style.color = 'white';
      document.title = "TaskTango -Dark Mode"
    }
    else {
      setMode('light');
      document.body.style.backgroundColor = '#fcfafa';
      document.body.style.color = 'black';
      document.title = "TaskTango -Light Mode"
    }
  }
  return (
    <>
      <Router>
        <Navbar title="TaskTango" landingpage="home" mode={mode} toggleMode={toggleMode} />

        <Switch>
          <Route exact path="/about">
            <About mode={mode} />
            <Footer mode={mode} />
          </Route>

          <Route exact path="/add">
            <AddTodo addTodo={addTodo} mode={mode} />
            <Todos todo={todo} onDelete={onDelete} />
            <Footer mode={mode} />
          </Route>

          <Route exact path="/">
          <Todos todo={todo} onDelete={onDelete} />
          <Footer mode={mode} />
        </Route>


        </Switch>
      </Router>
    </>
  );

}

export default App;
