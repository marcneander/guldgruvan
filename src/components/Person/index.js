import React from 'react';
import PropTypes from 'prop-types';
import ContentfulFluidAsset from '../ContentfulFluidAsset';

import styles from './Person.module.scss';

const Person = ({ data }) => {
    return (
        <div className={styles.person}>
            <div className={styles.image}>
                <ContentfulFluidAsset id={data.portrait.sv.sys.id} title={data.portrait.sv.fields.title.sv} />
            </div>
            <div className={styles.infoWrap}>
                <h4 className={styles.title}>{data.name.sv}</h4>
                <h6>
                    {data.title.sv}, anställd {data.startYear.sv}
                </h6>
                <blockquote className={styles.quote}>{data.quote.sv}</blockquote>
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
