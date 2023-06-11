import { useState } from 'react'
import './App.css'

function App() {
    const [value, setvalue] = useState('')
    return (
        <div className="container">
            <div className="calculator">
                <form action="">
                    <div className="display">
                        <input type="text" value={value}/>
                    </div>
                    <div>
                        <input type="button" value= "AC" on onClick={e => setvalue("")}/>
                        <input type="button" value= "DEL" on onClick={e => setvalue(value.slice(0, -1))}/>
                        <input type="button" value= "." onClick={e => setvalue(value + e.target.value)}/>
                        <input type="button" value= "/" onClick={e => setvalue(value + e.target.value)}/>
                    </div>
                    <div>
                        <input type="button" value= "7" onClick={e => setvalue(value + e.target.value)}/>
                        <input type="button" value= "8" onClick={e => setvalue(value + e.target.value)}/>
                        <input type="button" value= "9" onClick={e => setvalue(value + e.target.value)}/>
                        <input type="button" value= "*" onClick={e => setvalue(value + e.target.value)}/>
                    </div>
                    <div>
                        <input type="button" value= "4" onClick={e => setvalue(value + e.target.value)}/>
                        <input type="button" value= "5" onClick={e => setvalue(value + e.target.value)}/>
                        <input type="button" value= "6" onClick={e => setvalue(value + e.target.value)}/>
                        <input type="button" value= "+" onClick={e => setvalue(value + e.target.value)}/>
                    </div>
                    <div>
                        <input type="button" value= "1" onClick={e => setvalue(value + e.target.value)}/>
                        <input type="button" value= "2" onClick={e => setvalue(value + e.target.value)}/>
                        <input type="button" value= "3" onClick={e => setvalue(value + e.target.value)}/>
                        <input type="button" value= "-" onClick={e => setvalue(value + e.target.value)}/>
                    </div>
                    <div>
                        <input type="button" value= "00" onClick={e => setvalue(value + e.target.value)}/>
                        <input type="button" value= "0" onClick={e => setvalue(value + e.target.value)}/>
                        <input type="button" value= "=" className="equal" onClick={e => setvalue (eval(value))}/>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default App