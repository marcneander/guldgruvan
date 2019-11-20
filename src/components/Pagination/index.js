import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import { ChevronRight, ChevronLeft } from 'react-feather';

const Pagination = ({ total, limit, skip, baseUrl }) => {
    const pageCount = Math.ceil(total / limit);
    const currentPage = skip / limit + 1;

    if (pageCount < 2) {
        return null;
    }

    return (
        <ul className="pagination mt-4 mb-0 justify-content-center">
            {currentPage > 1 && (
                <li className="page-item">
                    <Link
                        className="page-link"
                        to={baseUrl + (currentPage - 1).toString()}
                        aria-label="Föregående sida"
                    >
                        <ChevronLeft size="18" />
                        <span className="sr-only">Föregående sida</span>
                    </Link>
                </li>
            )}
            <li className="page-item disabled">
                <span className="page-link text-body">
                    {currentPage} av {pageCount}
                </span>
            </li>
            {currentPage < pageCount && (
                <li className="page-item">
                    <Link className="page-link" to={baseUrl + (currentPage + 1).toString()} aria-label="Nästa sida">
                        <ChevronRight size="18" />
                        <span className="sr-only">Nästa sida</span>
                    </Link>
                </li>
            )}
        </ul>
    );
};

Pagination.propTypes = {
    total: PropTypes.number.isRequired,
    limit: PropTypes.number.isRequired,
    skip: PropTypes.number.isRequired,
    baseUrl: PropTypes.string.isRequired
};

export default Pagination;
