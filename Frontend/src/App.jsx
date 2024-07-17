
import Navbar from "./Components/Navbar";
import ListYourProperty from "./Components/pages/ListYourProperty";
import ThankYouPage from './Components/pages/ThankYouPage'
import PreviewPropertyPage from "./Components/pages/PreviewPropertyPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";

export default function App(){

  return(

    <>
      <Navbar />
      <BrowserRouter>
        <Routes>
            <Route path="/" element={<ListYourProperty />} />
            <Route path="/thankyou" element={<ThankYouPage />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}