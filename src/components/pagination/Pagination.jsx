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
      <ul className="Pagination">
      {currentPage !== 1 ? <button 
        onClick={() => paginate(currentPage - 1)}
        className="pagination-arrow"
      >
        {'←'}
      </button>
      : null}
        {
          pageNumbers.map(num => (
            
            <li key={num} className={num === currentPage ? 'active' : 'default'}>
              <a onClick={() => paginate(num)} href="!#">
                {num}
              </a>
              
            </li>
          )).slice(currentPage - 1, currentPage + 3)
        }
        {(currentPage === 26 || currentPage === 27 || currentPage === 28 || currentPage === 29) ? null : '...' }

        {currentPage !== pageNumbers.length ? <button 
          onClick={() => paginate(currentPage + 1)}
          className="pagination-arrow"
        >
        {'→'}
        </button>
        : null}
      </ul>
    </nav>
  );
}

export default Pagination;
