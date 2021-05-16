import React from 'react';
import { Col, Row } from 'antd';

export interface ContentBodyProps {
  /**
   * 컨텐트의 바디에 보여질 컴포넌트입니다.
   */
  component: JSX.Element;
}

/**
 * 기본 레이아웃의 컨텐트의 바디 부분입니다.
 */
function ContentBody({ component }: ContentBodyProps): JSX.Element {
  return (
    <Row>
      <Col xs={0} sm={2} md={4} lg={6} />
      <Col xs={24} sm={20} md={16} lg={12}>
        {component}
      </Col>
      <Col xs={0} sm={2} md={4} lg={6} />
    </Row>
  );
}

export default ContentBody;
