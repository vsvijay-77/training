import Home from './home';
import Post from './post';
import About from './about';
import { Link,Routes,Route } from 'react-router-dom';
import Postpage from './postpage';

function App() {
  return (
    <div className="App">
      <ul>
      <li><Link to ="/">HOME</Link></li> 
      <li><Link to ="/post">POST</Link></li>
      <li><Link to ="/about">ABOUT</Link></li>
       </ul>
       <Routes>
      <Route path="/" element={<Home/>}/>
        <Route path="/post" element={<Post/>}/>
          <Route path="/about" element={<About/>}/>
            <Route path="/post/:id" element={<Postpage />}/>
       </Routes>
     
    </div>
  );
}

export default App;
