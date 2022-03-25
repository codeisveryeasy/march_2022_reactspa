import React from 'react';
import { Routes, Route } from 'react-router-dom';
import About from './pages/about';
import Contact from './pages/contact';
import Friends from './pages/friends';
import Home from './pages/home';
import Welcome from './pages/welcome';


class Content extends React.Component {
    state = {  } 
    render() { 
        return (
            <div>
                <Routes>
                    <Route path="/" element={<Home></Home>}></Route>
                    <Route path="/about" element={<About></About>} ></Route>
                    <Route path="/friends" element={<Friends></Friends>} ></Route>
                    <Route path="/contact" element={<Contact></Contact>} ></Route>
                    <Route path="/welcome" element={<Welcome></Welcome>} ></Route>

                </Routes>
                
            </div>
        );
    }
}
 
export default Content