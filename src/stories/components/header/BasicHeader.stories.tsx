import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { BrowserRouter } from 'react-router-dom';
import {
  ExperimentFilled,
  EyeFilled,
  HomeFilled,
  QqCircleFilled,
  ThunderboltFilled,
  UserOutlined
} from '@ant-design/icons';
import BasicHeader, { BasicHeaderProps } from './BasicHeader';

export default {
  title: 'QPS/BasicHeader',
  component: BasicHeader
} as Meta;

const Template: Story<BasicHeaderProps> = args => (
  <BrowserRouter>
    <BasicHeader {...args} />
  </BrowserRouter>
);

export const Default = Template.bind({});
Default.args = {};

export const Edit = Template.bind({});
Edit.args = {
  title: 'This is React Logo',
  theme: 'dark',
  menuItems: [
    { icon: <EyeFilled />, linkTo: '/collect-data', text: '이상 감지' },
    { icon: <ExperimentFilled />, linkTo: '/qps-lab', text: 'QPS Lab' }
  ],
  img: <img className="small-logo" src="favicon.ico" alt="react-logo" />,
  user: <UserOutlined />
};
