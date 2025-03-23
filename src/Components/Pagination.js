import { useState } from 'react'
import ReactPaginate from 'react-paginate'
import ReactPagination from 'react-paginate'
function Pagination()
{

  const  [items ,setItems] = useState([])

  
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