import React from 'react';
import PropTypes from 'prop-types';

const Tree = ({ width, height, className }) => {
    return (
        <svg viewBox="0 0 122.98 175.55" width={width} height={height} className={className}>
            <g>
                <ellipse
                    transform="matrix(1 -4.187923e-03 4.187923e-03 1 -0.7114 0.259)"
                    cx="61.49"
                    cy="170"
                    rx="42"
                    ry="5.55"
                    opacity="0.25"
                    fill="#384B4F"
                />
                <g transform="translate(-357.512 -826)">
                    <rect x="408" y="964" fill="#736357" width="24" height="32" stroke="#384B4F" strokeWidth="3" />
                    <path fill="#534741" stroke="#384B4F" strokeWidth="3" d="M408,983l24,3v-22h-24V983z" />
                    <path
                        fill="#467346"
                        stroke="#384B4F"
                        strokeWidth="3"
                        className="st43"
                        d="M477.89,980l-24.61-42.63l-65.92-4.57L360.11,980H477.89z"
                    />
                    <path
                        fill="#467346"
                        stroke="#384B4F"
                        strokeWidth="3"
                        className="st43"
                        d="M419,878l-31.64,54.81l65.92,4.57L419,878z"
                    />
                    <path
                        opacity="0.5"
                        fill="#384B4F"
                        stroke="#384B4F"
                        strokeWidth="3"
                        className="st44"
                        d="M419,878l-31.64,54.81l65.92,4.57L419,878z"
                    />
                    <path
                        fill="#638A52"
                        stroke="#384B4F"
                        strokeWidth="3"
                        className="st45"
                        d="M462.3,924l-19.35-33.51l-45.2-4.7L375.7,924H462.3z"
                    />
                    <path
                        fill="#467346"
                        stroke="#384B4F"
                        strokeWidth="3"
                        className="st43"
                        d="M419,849l-21.24,36.79l45.2,4.7L419,849z"
                    />
                    <path
                        fill="#384B4F"
                        opacity="0.5"
                        stroke="#384B4F"
                        strokeWidth="3"
                        className="st44"
                        d="M419,849l-21.24,36.79l45.2,4.7L419,849z"
                    />
                    <path
                        fill="#7DA75C"
                        stroke="#384B4F"
                        strokeWidth="3"
                        className="st46"
                        d="M419,829l-28.87,50h57.74L419,829z"
                    />
                </g>
            </g>
        </svg>
    );
};

Tree.propTypes = {
    width: PropTypes.number.isRequired,
    height: PropTypes.number.isRequired,
    className: PropTypes.string
};

Tree.defaultProps = {
    className: undefined
};

export default Tree;
