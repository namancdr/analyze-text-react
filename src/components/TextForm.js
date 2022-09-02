import {useState} from 'react'

export default function TextForm({heading, mode}) {

    const [text, setText] = useState("")

    const handleUpClick = () => {
        let newText = text.toUpperCase()
        setText(newText)
    }
    
    const handleLoClick = () => {
        let newText = text.toLowerCase()
        setText(newText)
    }

    const handleClearText = () => {
        setText("")
    }
    
    const handleOnChange = (event) => {
        // console.log("onchange")
        setText(event.target.value)
    }

    return (
        <>
        <div className="container my-4" style={{color : mode === 'dark' ? 'white' : '#212529' }} >
            <h1>{heading}</h1>
            <div className="mb-3 my-4">
                <textarea className="form-control" style={{backgroundColor: mode === 'dark' ? '#212529' : 'white', color : mode === 'dark' ? 'white' : '#212529'  }} value={text} onChange={handleOnChange} id="myBox" rows="6"></textarea>
            </div>
            <button className="btn btn-primary" onClick={handleUpClick} >Covert to Uppercase</button> 
            <button className="btn btn-primary m-2" onClick={handleLoClick} >Covert to Lowercase</button> 
            <button className="btn btn-primary m-2" onClick={handleClearText} >Clear Text</button> 
        </div>

        <div className="container my-4" style={{color : mode === 'dark' ? 'white' : '#212529' }}>
            <h1>Your text summary</h1>
            <hr />
            <p>{text.split(" ").length} words and {text.length} characters.</p>
            <p>{0.008 * text.split(" ").length} Minute Read</p>
            <h2>Preview</h2>
            <p>{text}</p>
        </div>

        </>
    )
}
