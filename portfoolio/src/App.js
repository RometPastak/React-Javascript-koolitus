import { Link, Route, Routes } from 'react-router-dom';
import './App.css';
import Work from './pages/Work';
import Hobbies from './pages/Hobbies';
import Courses from './pages/Courses';

function App() {
  return (
    <div>
      <img className="main-picture" src="https://www.salomon.com/sites/default/files/homepage/secondary/01_Home-SecondaryPush_Desktop_11.jpg?fit=cover&orientation=1&optimize=low&bg-color=f5f5f5&format=pjpg&auto=webp&width=885&dpr=1.25" alt="" />
      <div className="rectangle"></div>

      <div className="nav-pictures">
        <Link className="main-link" to="work">
          <img src="https://iso.500px.com/wp-content/uploads/2013/08/11834033-1170.jpeg" alt="" />
          <p>Tööde lehele</p>
        </Link>
        <Link className="main-link" to="hobbies">
          <img src="https://media.cntraveler.com/photos/61eae2a9fe18edcbd885cb01/5:4/w_3790,h_3032,c_limit/Seychelles_GettyImages-1169388113.jpg" alt="" />
          <p>Hobide lehele</p>
        </Link>
        <Link className="main-link" to="courses">
          <img src="https://www.readersdigest.ca/wp-content/uploads/2017/02/american-spring-destinations-michigan.jpg" alt="" />
          <p>Kursuste lehele</p>
        </Link>
      </div>
      <iframe width="560" height="315" src="https://www.youtube.com/embed/74LBCETPjK0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      <Routes>
        <Route path="work" element={ <Work /> } />
        <Route path="hobbies" element={ <Hobbies /> } />
        <Route path="courses" element={ <Courses /> } />
      </Routes>
    </div>
  );
}

export default App;
