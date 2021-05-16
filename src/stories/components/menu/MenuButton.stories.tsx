import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { BrowserRouter } from 'react-router-dom';
import {
  ExperimentFilled,
  EyeFilled,
  HomeFilled,
  QqCircleFilled,
  ThunderboltFilled
} from '@ant-design/icons';
import MenuButton, { MenuButtonProps } from './MenuButton';

export default {
  title: 'QPS/MenuButton',
  component: MenuButton
} as Meta;

const Template: Story<MenuButtonProps> = args => (
  <BrowserRouter>
    <MenuButton {...args} />
  </BrowserRouter>
);

export const First = Template.bind({});
First.args = {
  theme: 'dark',
  menuItems: [
    { icon: <HomeFilled />, linkTo: '/dashboard', text: 'Dashboard' },
    {
      icon: <ThunderboltFilled />,
      linkTo: '/collect-data',
      text: '데이터 수집'
    },
    { icon: <QqCircleFilled />, linkTo: '/collect-data', text: '품질 예측' }
  ]
};

export const Second = Template.bind({});
Second.args = {
  theme: 'light',
  menuItems: [
    { icon: <EyeFilled />, linkTo: '/collect-data', text: '이상 감지' },
    { icon: <ExperimentFilled />, linkTo: '/qps-lab', text: 'QPS Lab' }
  ]
};
