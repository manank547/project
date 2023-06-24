import React from 'react'

function item(props) {
  return (
    <div>
    <div className='container'>
    <div className="card my-1 mx-0" style={{width: "15rem"}}>
         <img src={props.url} className="card-img-top" alt="..."/>
        <div className="card-body">
           <h5 className="card-title">{props.title}</h5>
           <p className="card-text">{props.description}</p>
           <a href={props.newsUrl} target="_blank" className="btn btn-primary">Read more</a>
        </div>
    </div>
</div>
 </div>
  )
}
export default item;