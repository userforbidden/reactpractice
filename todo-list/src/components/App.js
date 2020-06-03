import React from 'react'
import Footer from "./Footer"
import Header from "./Header"
import MainContent from "./MainContent"

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