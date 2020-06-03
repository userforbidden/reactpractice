import React from 'react'
import Footer from "./components/Footer"
import Header from "./components/Header"
import MainContent from "./components/MainContent"

function App(){
    return (
        <div>
            <Header />
            <MainContent />
            <Footer />
        </div>
    )
}

export default App

/* 
Setup the react app from Scratch
Render an App component (defined in a separate file)
Inside App, render:
    1. A navbar Component
    2. A MainContent Component
    3. A footer component 
*/