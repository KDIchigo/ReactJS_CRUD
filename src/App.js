import { Component } from 'react';
import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
  Link
} from "react-router-dom";
import Home from './components/Home';
import AddStudent from './components/AddStudent';
import StudentList from './components/StudentList';
import './components/Home.css';
import EditStudent from './components/EditStudent';
import Search from './components/Search';

class App extends Component {

  render() {

    return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/studentList" element={<StudentList />}></Route>
          <Route path="/addStudent" element={<AddStudent />}></Route>
          <Route path="/editStudent" element={<EditStudent />}></Route>
          <Route path="/search" element={<Search />}></Route>
        </Routes>
      </BrowserRouter>
    );

  }
}

export default App;
