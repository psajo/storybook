import React from 'react';
import { Col, Row, Space } from 'antd';
import {
  ExperimentFilled,
  EyeFilled,
  HomeFilled,
  QqCircleFilled,
  ThunderboltFilled,
  UserOutlined
} from '@ant-design/icons';
import Text from 'antd/lib/typography/Text';
import MenuButton, { Menuitem } from '../menu/MenuButton';

export type BasicHeaderProps = {
  /**
   * 헤더의 제목입니다.
   */
  title?: string;
  /**
   * 헤더가 가지는 메뉴의 색 테마입니다.
   */
  theme?: 'light' | 'dark';
  /**
   * 헤더가 가지는 메뉴의 아이템들 입니다.
   */
  menuItems?: Menuitem[];
  /**
   * 헤더의 메뉴 버튼 다음에 보이는 이미지(로고)입니다.
   */
  img?: JSX.Element;
  /**
   * 헤더의 오른쪽 끝에 보이는 로그인 아이콘 입니다.
   */
  user?: JSX.Element;
} & typeof defaultProps;

const defaultProps = {
  title: 'This is QPS Header',
  theme: 'light',
  menuItems: [
    { icon: <HomeFilled />, linkTo: '/dashboard', text: 'Dashboard' },
    {
      icon: <ThunderboltFilled />,
      linkTo: '/collect-data',
      text: '데이터 수집'
    },
    { icon: <QqCircleFilled />, linkTo: '/collect-data', text: '품질 예측' },
    { icon: <EyeFilled />, linkTo: '/collect-data', text: '이상 감지' },
    { icon: <ExperimentFilled />, linkTo: '/qps-lab', text: 'QPS Lab' }
  ],
  img: (
    <img className="small-logo" src="./img/brique-logo.jpg" alt="brique-logo" />
  ),
  user: <UserOutlined />
};

/**
 * 기본 레이아웃의 헤더 입니다.
 */
function BasicHeader({
  title,
  theme,
  menuItems,
  img,
  user
}: BasicHeaderProps): JSX.Element {
  return (
    <Row>
      <Col xs={23} sm={23} md={23} lg={23}>
        <Space>
          <MenuButton theme={theme} menuItems={menuItems} />
          {img}
          <Text>{title}</Text>
        </Space>
      </Col>
      <Col xs={1} sm={1} md={1} lg={1}>
        {user}
      </Col>
    </Row>
  );
}
BasicHeader.defaultProps = defaultProps;

export default BasicHeader;
