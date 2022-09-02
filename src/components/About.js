import React from 'react'

export default function About(props) {

    const {mode} = props
    
    const textTheme = `${mode === "dark" ? "text-light" : "text-dark"}`

    return (
        <div className={`container mt-4 ${mode === "dark" ? "bg-dark" : ""}`} >
            <h2 className={textTheme}>Project by <a className={textTheme}  href="/">Namancdr</a></h2>            
            <h3 className={textTheme}><a className={textTheme}  href="https://github.com/namancdr">Github</a> / <a className={textTheme}  href="https://instagram.com/namancdr">Instagram</a></h3>            
        </div>
    )
}
