import React, { useEffect, useState } from 'react';
import { Form, Input, Button, Checkbox, Table } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import axios from 'axios';
import './index.css'



  
const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 16,
  },
};
const tailLayout = {
  wrapperCol: {
    offset: 8,
    span: 16,
  },
};

export const TaskCreatePage=(props)=>{




  const onFinish = values => {
      console.log('Received values of form: ', values);

    const headers = {Authorization:localStorage.getItem('token')};
   const data = {
    isDone: false,
    text: values.text,
    title: values.title
  }
    const requestParams = {
      method: 'post',
      url: 'http://localhost:8080/api/task',
      data:data,
      headers:headers
    };

    console.log(requestParams);
  
    axios(requestParams)
    .then(res=>{
      window.location.href = '/tasks';
    })

    };
  
    return (
      <div className="background">

      
      <Form
        name="normal_login"
        className="login-form"
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
      >
        <Form.Item
          name="title"
          label="Title"
          
        >
          <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
        </Form.Item>
        <Form.Item
          name="text"
        label="Text"
        >
          <Input
            prefix={<LockOutlined className="site-form-item-icon" />}
            type="password"
            placeholder="Password"
          />
        </Form.Item>
  
  
        <Form.Item>
          <Button type="primary" htmlType="submit" className="login-form-button">
            Create Task
          </Button>
       
        </Form.Item>
      </Form>
      </div>
    );
}

