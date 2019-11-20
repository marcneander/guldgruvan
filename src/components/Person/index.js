import React from 'react';
import PropTypes from 'prop-types';
import ContentfulFluidAsset from '../ContentfulFluidAsset';

const Person = ({ data }) => {
    return (
        <div className="row pt-4">
            <div className="col-12 mb-2 mb-md-0 col-md-4">
                <ContentfulFluidAsset id={data.portrait.sv.sys.id} title={data.portrait.sv.fields.title.sv} />
            </div>
            <div className="col-12 col-md-8 pt-1">
                <h4 className="mb-1">{data.name.sv}</h4>
                <h6>
                    {data.title.sv}, anställd {data.startYear.sv}
                </h6>
                <blockquote className="blockquote">{data.quote.sv}</blockquote>
            </div>
        </div>
    );
};

Person.propTypes = {
    data: PropTypes.shape({
        name: PropTypes.shape({
            sv: PropTypes.string
        }),
        quote: PropTypes.shape({
            sv: PropTypes.string
        }),
        startYear: PropTypes.shape({
            sv: PropTypes.number
        }),
        title: PropTypes.shape({
            sv: PropTypes.string
        }),
        portrait: PropTypes.shape({
            sv: PropTypes.shape({
                fields: PropTypes.shape({
                    title: PropTypes.shape({
                        sv: PropTypes.string
                    })
                }),
                sys: PropTypes.shape({
                    id: PropTypes.string
                })
            })
        })
    }).isRequired
};

export default Person;
