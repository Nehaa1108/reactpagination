import { useState,useEffect } from 'react'
import ReactPaginate from 'react-paginate'
import ReactPagination from 'react-paginate'
function Pagination()
{

  const  [items ,setItems] = useState([])

  useEffect(() => {
   const getUsers = async ()=>
   {
    const res = await fetch(
      `http://localhost:3001/users`
    )
    const data = await res.json()
    setItems(data)
   }
   getUsers()
  }, [])
  
console.log(items)

  const handlePageClick=(e)=>
  {
    // alert("clicked")
    console.log(e)
    console.log(e.selected)
    // console.log(alert("clicked"))
  }
  return (
    <div className="container">
      <h4>pagination</h4>

{items.map((item)=>
{
  return <div className='col-sm-6 col-md-4  v  my-2'>
    <div className='card shadow-sm w-100' style={{minHeight:225}}>
      <div className='card-body'>
        <h5 className='card-title text-center h2'>Id:</h5>
        <h6 className='card-subtitle mb-2 text-muted text-center'>email</h6>
        <p className='card-text'>comment</p>
      </div>
    </div>
  </div>
})}


      <ReactPaginate
      previousLabel ={'previous'} 
      nextLabel={'next'} 
      breakLabel={'...'}
      pageCount={22}
      marginPagesDisplayed={2}
      pageRangeDisplayed={5}
      onPageChange={handlePageClick}
      //css paginate
      containerClassName={'pagination justify-content-center'}
      pageClassName={'page-item'}
      pageLinkClassName={'page-link'}
      previousClassName={'page-item'}
      previousLinkClassName={'page-link'}
      nextClassName={'page-item'}
      nextLinkClassName={'page-link'}
      breakClassName={'page-item'}
      breakLinkClassName={'page-link'}
      activeClassName={'active'}
      />
    </div>
  )
}

export default Pagination