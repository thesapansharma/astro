import Navbar from "./components/Navbar/Navbar";
import Intro from "./components/Intro/Intro";
import Services from "./components/Services/Services";
import "./App.css";
import Experience from "./components/Experience/Experience";
import Works from "./components/Works/Works";
import Portfolio from "./components/Portfolio/Portfolio";
import Testimonial from "./components/Testimonials/Testimonial";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import { useContext } from "react";
import { themeContext } from "./Context";
import Refund from "./components/RefundPolicy/RefundPolicy";
import Privacy from "./components/privacy/Privacy";
import Teamandcondition from "./components/teamandcondition/Teamandcondition";
import Checkout from "./Checkout/Checkout";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
} from "react-router-dom";
function App() {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div
      className="App"
      style={{
        background: darkMode ? "black" : "",
        color: darkMode ? "white" : "",
      }}
    >
     
      <Router>
      <Navbar />
                    <Routes>
                        <Route
                            exact
                            path="/"
                            element={<><Intro />
                            <Services />
                            <Works />
                            <Testimonial />
                            <Contact />
                            </>}
                        ></Route>
                        <Route
                            exact
                            path="/refund-policy"
                            element={<><Refund />
                            </>}
                        ></Route>
                        <Route
                            exact
                            path="/privacy-policy"
                            element={<><Privacy />
                            </>}
                        ></Route>
                        <Route
                            exact
                            path="/terms-and-conditions"
                            element={<><Teamandcondition />
                            </>}
                        ></Route>
                        <Route
                            exact
                            path="/Checkout"
                            element={<><Checkout />
                            </>}
                        ></Route>
                    </Routes>
                
            </Router>
            <Footer />
    </div>
  );
}

export default App;
