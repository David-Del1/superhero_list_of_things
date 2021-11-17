import React from 'react';
// import NavLink from 'react-router';
import './Pagination.scss';

const Pagination = ({ charactersPerPage, totalCharacters, paginate, currentPage }) => {
  const pageNumbers = [];

  for(let i = 1; i <=Math.ceil(totalCharacters / charactersPerPage); i++) {
    pageNumbers.push(i);
  }
  return (
    <nav>
      <ul className="Pagination">
        {
          pageNumbers.map(num => (
            <li key={num} className={num === currentPage ? 'active' : 'default'}>
              <a onClick={() => paginate(num)} href="!#">
                {num}
              </a>
              
            </li>
          ))
        }
      </ul>

    </nav>
  );
}

export default Pagination;
