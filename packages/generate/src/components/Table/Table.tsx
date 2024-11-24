import React from 'react';
import { Table as AntTable } from 'antd';
import { TableProps } from './interface';
import './styles.scss'

const Table: React.FC<TableProps> = ({ data }) => {
  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Age',
      dataIndex: 'age',
      key: 'age',
    },
    {
      title: 'Email',
      dataIndex: 'email',
      key: 'email',
    },
  ];
  
  return <AntTable columns={columns} dataSource={data} />;
};

export default Table;