import React from 'react';
// import NavLink from 'react-router';
import './Pagination.scss';

const Pagination = ({ charactersPerPage, totalCharacters, paginate, currentPage }) => {
  const pageNumbers = [];

  for(let i = 1; i <= Math.ceil(totalCharacters / charactersPerPage); i++) {
    pageNumbers.push(i);
  }
  return (
    <nav>
      {currentPage === 1 ? <ul className="Pagination">
        {currentPage !== 1 
          ? <button 
              onClick={() => paginate(currentPage - 1)}
              className="pagination-arrow"
            >
              {'←'}
            </button>
          : null}
        {
          pageNumbers.map(num => (
            
            <li key={num} className={num === currentPage ? 'active' : 'default'}>
              <span onClick={() => paginate(num)} >
                {num}
              </span>
              
            </li>
          )).slice(currentPage - 1, currentPage + 3)
        }
        {(currentPage === 26 || currentPage === 27 || currentPage === 28 || currentPage === 29) ? null : '...' }

        {currentPage !== pageNumbers.length 
          ? <>
              <button 
                onClick={() => paginate(currentPage + 1)}
                className="pagination-arrow"
              >
                {'→'}
              </button>
              <button 
                className="end-arrow"
                onClick={() => paginate(pageNumbers.length)}
              >
                {'>>'}
              </button>
            </>
        : null}
      </ul> 
        : 
        <ul className="Pagination">
          {currentPage !== 1 
            ? <>
              <button 
                className="end-arrow"
                onClick={() => paginate(1)}

              >
                {'<<'}
              </button>
            <button 
                onClick={() => paginate(currentPage - 1)}
                className="pagination-arrow"
              >
                {'←'}
              </button>
             
              </>
            : null}
          {
            pageNumbers.map(num => (
              
              <li key={num} className={num === currentPage ? 'active' : 'default'}>
                <span onClick={() => paginate(num)}>
                  {num}
                </span>
                
              </li>
            )).slice(currentPage - 2, currentPage + 3)
          }
          {(currentPage === 26 || currentPage === 27 || currentPage === 28 || currentPage === 29) ? null : '...' }

          {currentPage !== pageNumbers.length 
            ? <>
              <button 
                onClick={() => paginate(currentPage + 1)}
                className="pagination-arrow"
              >
                {'→'}
              </button>
              <button 
                className="end-arrow"
                onClick={() => paginate(pageNumbers.length)}
              >
                {'>>'}
              </button>
            </>
          : null}
        </ul>
        }
    </nav>
  );
}

export default Pagination;
