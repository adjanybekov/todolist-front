import React, { useEffect, useState } from 'react';
import { Form, Input, Button, Checkbox, Table } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import axios from 'axios';
import './index.css'


const columns = [
  {
    title: 'Title',
    dataIndex: 'title',
    key: 'name',
  },
  {
    title: 'Text',
    dataIndex: 'text',
    key: 'age',
  },
  {
    title: 'Done',
    dataIndex: 'isDone',
    key: 'address',
    render:(text,task)=>{
      return task.isDone?<p>Yes</p>:<p>No</p>
    }
  },
];

  
export const TasksPage=(props)=>{

  const[tasks,setTasks] = useState([]);

  useEffect(()=>{
    getMyTasks();
  },[]); //componentDidMount

  const getMyTasks =()=>{


    const headers = {Authorization:localStorage.getItem('token')};
    const requestParams = {
      method: 'get',
      url: 'http://localhost:8080/api/task/my',
      headers:headers
    };

    console.log(requestParams);
  
    axios(requestParams)
    .then(res=>{
        console.log(res.data);
        setTasks(res.data)
    })
  }


  return(
    <div>
      <Button onClick={()=>{window.location.href='/create'}}>Create task</Button>
      <Button onClick={()=>{localStorage.removeItem('token');window.location.href='/login' }}>Logout</Button>
      <Table dataSource={tasks} columns={columns} />
    </div>
  )
}
