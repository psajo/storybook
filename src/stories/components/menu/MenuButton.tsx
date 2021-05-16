import React, { useState } from 'react';
import { Menu, Dropdown, Button, MenuTheme } from 'antd';
import { MenuUnfoldOutlined, MenuFoldOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';

export interface MenuButtonProps {
  /**
   * 메뉴의 색 테마
   */
  theme?: MenuTheme;
  /**
   * 메뉴아이템
   */
  menuItems?: Menuitem[];
}
export interface Menuitem {
  /**
   * 메뉴아이템의 아이콘
   */
  icon: React.ReactNode;
  /**
   * 링크 주소
   */
  linkTo: string;
  /**
   * 메뉴아이템의 보여질 텍스트
   */
  text: string;
}

/**
 * 메뉴 버튼 입니다. 드롭 다운으로 메뉴가 보입니다.
 * 버튼을 클릭하면 열기/닫기 전환됩니다.
 * 기본으로 열기 상태입니다.
 */
function MenuButton({
  theme = 'light',
  menuItems
}: MenuButtonProps): JSX.Element {
  const [collapsed, setCollapsed] = useState(false);
  const toggleCollapsed = () => {
    setCollapsed(!collapsed);
  };
  const menu = (
    <Menu theme={theme}>
      {menuItems?.map(item => (
        <Menu.Item key={item.linkTo} icon={item.icon}>
          <Link to={item.linkTo}>{item.text}</Link>
        </Menu.Item>
      ))}
    </Menu>
  );

  return (
    <Dropdown
      overlay={menu}
      placement="bottomLeft"
      trigger={['click']}
      visible={!collapsed}
    >
      <Button type="default" onClick={toggleCollapsed}>
        {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined)}
      </Button>
    </Dropdown>
  );
}

export default MenuButton;
