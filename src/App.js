import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/pages/Home';
import AddNew from './components/student/AddNew';
import List from './components/student/List';
import View from './components/student/View';
import Edit from './components/student/Edit';

function App() {
  return (
    <div className="App">
      <h2>React.js first project CRUD operation</h2>
      <BrowserRouter>
        <Link to="/">Home</Link>&nbsp;&nbsp;
        <Link to="/add-new">Add New Record</Link>&nbsp;&nbsp;
        <Link to="/list">List Details</Link>

        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/add-new' element={<AddNew />} />
          <Route exact path='/list' element={<List />} />
          <Route path='/view/:id' element={<View />} />
          <Route path='/edit/:id' element={<Edit />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
