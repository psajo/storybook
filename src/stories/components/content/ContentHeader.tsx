import React from 'react';
import { Col, Row } from 'antd';
import style from './ContentHeader.module.css';

export interface ContentHeaderProps {
  /**
   * 컨텐트 헤더 부분에 들어갈 컴포넌트 입니다.
   */
  component: JSX.Element;
}

/**
 * 컨텐트 부분의 헤더입니다.
 */
function ContentHeader({ component }: ContentHeaderProps): JSX.Element {
  return (
    <Row className={style.contentHeader}>
      <Col xs={0} sm={2} md={4} lg={6} />
      <Col xs={24} sm={20} md={16} lg={12}>
        {component}
      </Col>
      <Col xs={0} sm={2} md={4} lg={6} />
    </Row>
  );
}

export default ContentHeader;
