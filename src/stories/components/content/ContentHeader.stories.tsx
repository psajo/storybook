import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { Button, Space } from 'antd';
import ContentHeader, { ContentHeaderProps } from './ContentHeader';

export default {
  title: 'QPS/ContentHeader',
  component: ContentHeader
} as Meta;

const Template: Story<ContentHeaderProps> = args => <ContentHeader {...args} />;

export const Default = Template.bind({});
Default.args = {
  component: (
    <Space>
      <Button>A</Button>
      <Button>B</Button>
      <Button>C</Button>
    </Space>
  )
};
