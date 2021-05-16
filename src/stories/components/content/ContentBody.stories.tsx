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
import ContentBody, { ContentBodyProps } from './ContentBody';

export default {
  title: 'QPS/ContentBody',
  component: ContentBody
} as Meta;

const Template: Story<ContentBodyProps> = args => <ContentBody {...args} />;

export const Default = Template.bind({});
Default.args = { component: <div>Content Body!</div> };
