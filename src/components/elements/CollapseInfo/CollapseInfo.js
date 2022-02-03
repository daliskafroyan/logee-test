import React from 'react';
import styles from './styles.scoped.css';
import PropTypes from 'prop-types';
import { Col, CollapseCard, Row, Typography } from 'logeeport-ui';
import HeaderCollaps from './HeaderCollaps';



const CollapseInfo = ({ children, header }) => {
  return (
    <div className={styles.root}>
      <CollapseCard
        className={styles.heading}
        collapsable
        collapseDefault={true}
        title={<HeaderCollaps data={header}/>}
      >
        {children}
      </CollapseCard>
      <Row className={styles.footer} justify="space-between">
        <Col xs="4">
          <Typography className={styles.subCaption}>
            Total
          </Typography>
        </Col>
        <Col className={styles.totalHarga} xs="4">{header.total}</Col>
      </Row>
    </div>
  );
};

CollapseInfo.defaultProps = {
  children: null,
  className: '',
  header:{},
};

CollapseInfo.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  header:PropTypes.object,
};

export default CollapseInfo;



