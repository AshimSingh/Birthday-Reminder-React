import React from 'react'
import Card from 'react-bootstrap/Card';
import {birthday_info} from './data'
import {useState} from 'react'

const WithHeaderStyledExample=()=> {
  const [data,setData]= useState(birthday_info)
  const remove=(id)=>{
    // setData((info)=>{
    //   return info.filter((i)=>i.id!==2)
    // })
    setData([])
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
      <button type="button" onClick={()=>{remove()}} class="btn btn-primary" style={{width:'100%'}}>Clear Birthday</button>
      </Card.Body>
    </Card>
    </>
  );
}
export default WithHeaderStyledExample;
