import { useState,useEffect } from 'react'
import ReactPaginate from 'react-paginate'
import ReactPagination from 'react-paginate'
function Pagination()
{

  const  [items ,setItems] = useState([])

  const [pageCount, setpageCount] = useState(0)
let limit=8
  useEffect(() => {
   const getUsers = async ()=>
   {
    const res = await fetch(
      `http://localhost:3001/users?_page=1&_limit=${limit}`
    )
    const data = await res.json()

    const total = res.headers.get('x-total-count')
    setpageCount(Math.ceil(total/10))
    console.log(total)
    setItems(data)
   }
   getUsers()
  }, [])
  
console.log(items)

const fetchComments = async (currentPage)=>
{
  const res = await fetch(`http://localhost:3001/users?_page=${currentPage}&_limit=${limit}`)
  const data = await res.json()
  return data
}

  const handlePageClick= async (e)=>
  {

    let currentPage = e.selected + 1
    const commentsFormServer = await fetchComments(currentPage)
    setItems(commentsFormServer)
    // alert("clicked")
    console.log(e)
    console.log(e.selected)
    // console.log(alert("clicked"))
  }
  return (
    <div className="container">
      <div className='row m-2'>
      <h4>pagination</h4>

{items.map((item)=>
{
  return <div className='col-sm-6 col-md-4  v  my-2'>
    <div key={item.id} className='card shadow-sm w-100' style={{minHeight:225}}>
      <div className='card-body'>
        <h5 className='card-title text-center h2'>Id:{item.id}</h5>
        <h6 className='card-subtitle mb-2 text-muted text-center'>email:{item.email}</h6>
        <p className='card-text'>{item.body}</p>
      </div>
    </div>
  </div>
})}
</div>

      <ReactPaginate
      previousLabel ={'previous'} 
      nextLabel={'next'} 
      breakLabel={'...'}
      pageCount={pageCount}
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