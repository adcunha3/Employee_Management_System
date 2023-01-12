import './App.css';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import ListEmployee from './components/ListEmployee';
import Header from './components/Header';
import Footer from './components/Footer';
import CreateEmployee from './components/CreateEmployee';
import UpdateEmployee from './components/UpdateEmployee';

function App() {
  return (
    <Router>
      <div>


          <div className='container'>
            <Header/>
            <div className="container">
              <Routes>

                  <Route path='/' element={<ListEmployee/>}></Route>
                  <Route path='/employees' element={<ListEmployee/>}></Route>
                  <Route path='/add-employee' element={<CreateEmployee/>}></Route>
                  <Route path='/update-employee/:id' element={<UpdateEmployee/>}></Route>

              </Routes>
              </div>
            <Footer/>
          </div>


      </div>
    </Router>
  );
}

export default App;

// function App() {
//   return (
//     <Router>
//       <div>

//         <Routes>
//           <div className='container'>
//             <Header/>
//               <div className="container">
//                   <Route path='/' element={<ListEmployee/>}></Route>
//                   <Route path='/employees' element={<ListEmployee/>}></Route>
//               </div>
//             <Footer/>
//           </div>
//         </Routes>

//       </div>
//     </Router>
//   );
// }