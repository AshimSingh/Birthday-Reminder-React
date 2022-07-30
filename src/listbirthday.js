import React from 'react'
import Card from 'react-bootstrap/Card';
import {birthday_info} from './data'
import {useState} from 'react'

const WithHeaderStyledExample=()=> {
  var clear =1
  const [data,setData]= useState(birthday_info)
  const remove=(id)=>{
    // setData((info)=>{
    //   return info.filter((i)=>i.id!==2)
    // })
    setData([])
  }
  const addClear=()=>{
    alert(clear)
    if(clear===1){
      setData([])
      clear=0    
    }
    else if(clear===0){
      alert(clear)
      setData(birthday_info)
      clear=1
    }
    alert(clear)
  }
  return (
    <>
    <Card className='card'>
      <Card.Header as="h2" className='d-flex justify-content-center'>Up Comming Birthdays</Card.Header>
      <Card.Body>
        <div className='List mb-3'>
      {
        data.map((info)=>{
          const {id,name,date,url}=info
          return(
            <div className='tiles d-flex' key={id}>
              <img className='bImg' src={url}></img>
              <div className='title'>
                <div className='suffix'>
                  {name}
                </div>
                <div className='prefix'>
                  {date}
                </div>
              </div>
            </div>
            
          )
        })
      }
      </div>
      <button type="button" onClick={()=>{addClear()}} class="btn btn-primary" style={{width:'100%'}}>Clear Birthday</button>
      </Card.Body>
    </Card>
    </>
  );
}
export default WithHeaderStyledExample;
