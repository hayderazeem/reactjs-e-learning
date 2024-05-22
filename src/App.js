
import Layout from "./layout";
import HomePage from "./pages/homepage";

import ContactUs from "./pages/contactUsPage";
import { Routes, Route } from 'react-router-dom'
function App() {
  return (
    <div className="App">
<Layout>
<Routes>
          <Route path="/" exact element={<HomePage />} />
          {/* <Route path="/about_us" exact element={<AboutUs />} /> */}
          <Route path="/contactus" exact element={<ContactUs />} />
          {/* <Route path="/sign_up" exact element={<SignUp />} /> */}
        </Routes>
{/* <HomePage/> */}
{/* <Contact/> */}
</Layout>
    </div>
  );
}

export default App;
