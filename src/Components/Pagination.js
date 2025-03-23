import { useState, useEffect } from 'react';
import ReactPaginate from 'react-paginate';
import 'bootstrap/dist/css/bootstrap.min.css'; // ✅ Bootstrap CSS

function Pagination() {
  const [items, setItems] = useState([]); // ✅ Store data
  const [pageCount, setPageCount] = useState(0); // ✅ Total pages
  let limit = 8; // ✅ Limit per page

  // Fetch initial data
  useEffect(() => {
    const getUsers = async () => {
      const res = await fetch(
        `http://localhost:3001/users?_page=1&_limit=${limit}`
      );
      const data = await res.json();

      const total = res.headers.get('x-total-count');
      console.log('Total Items:', total); // ✅ Check if total is retrieved
      setPageCount(Math.ceil(total / limit)); // ✅ Correct page count
      setItems(data);
    };
    getUsers();
  }, []);

  // Fetch paginated data
  const fetchComments = async (currentPage) => {
    const res = await fetch(
      `http://localhost:3001/users?_page=${currentPage}&_limit=${limit}`
    );
    const data = await res.json();
    return data;
  };

  // Handle pagination click
  const handlePageClick = async (e) => {
    console.log('Selected Page:', e.selected + 1); // ✅ Log selected page

    let currentPage = e.selected + 1; // ✅ Correct page calculation
    const commentsFromServer = await fetchComments(currentPage);
    console.log('Comments from API:', commentsFromServer); // ✅ Verify data
    setItems(commentsFromServer);
  };

  return (
    <div className="container">
      <div className="row m-2">
        <h4 className="text-center mb-4">Pagination Example</h4>

        {/* Displaying items */}
        {items.map((item) => (
          <div className="col-sm-6 col-md-4 v my-2" key={item.id}>
            <div
              className="card shadow-sm w-100"
              style={{ minHeight: 225 }}
            >
              <div className="card-body">
                <h5 className="card-title text-center h2">
                  Id: {item.id}
                </h5>
                <h6 className="card-subtitle mb-2 text-muted text-center">
                  Email: {item.email}
                </h6>
                <p className="card-text">{item.body}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination Component */}
      <ReactPaginate
        key={pageCount} // ✅ Force re-render when pageCount changes
        previousLabel={'Previous'}
        nextLabel={'Next'}
        breakLabel={'...'}
        pageCount={pageCount}
        marginPagesDisplayed={2}
        pageRangeDisplayed={5}
        onPageChange={handlePageClick}
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
  );
}

export default Pagination;
