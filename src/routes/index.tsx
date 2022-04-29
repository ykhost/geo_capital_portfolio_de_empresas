import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import { Company, Home } from "../pages";
import { Header } from "../components/Header"


interface Props {
  toggleTheme(): void;
}

export function Render ({ toggleTheme }:Props) {
  return (
    <BrowserRouter>
      <Header toggleTheme={toggleTheme}></Header>
      <Routes >
        <Route path="/company/:id" element={<Company />}/>
        <Route path="/home" element={<Home />}/>
        <Route path="*" element={<Navigate to="/home" replace />}/>
      </Routes>
    </BrowserRouter>
  )
}
