import React from 'react'
import ReactDom from 'react-dom'
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import './index.css'
import Box from './listbirthday'
function Myapp(){
    return(
        <section className='topSec'>
            <Box></Box>
        </section>
    )
}
ReactDom.render(<Myapp></Myapp>,document.getElementById('root'))