import React from 'react';
import { Form, Input, Button, Checkbox } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import axios from 'axios';
import './index.css'
// import { authenticationService } from '../../_services/authentication.service';
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
  
export const LoginPage=(props)=>{
  

 

    const onFinish = values => {
        console.log('Received values of form: ', values);

        const data = {          
          login:values.login,
          password:values.password
      }
  
      const requestParams = {
          method: 'post',
          url: 'http://localhost:8080/api/user/auth',
          data: data
        };
  
        console.log(requestParams);
      
        axios(requestParams)
        .then(res=>{
            console.log(res.data);
            localStorage.setItem('token', res.data);   
            window.location.href = 'tasks';
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
            name="login"
            rules={[
              {
                required: true,
                message: 'Please input your Username!',
              },
            ]}
          >
            <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
          </Form.Item>
          <Form.Item
            name="password"
            rules={[
              {
                required: true,
                message: 'Please input your Password!',
              },
            ]}
          >
            <Input
              prefix={<LockOutlined className="site-form-item-icon" />}
              type="password"
              placeholder="Password"
            />
          </Form.Item>
    
    
          <Form.Item>
            <Button type="primary" htmlType="submit" className="login-form-button">
              Log in
            </Button>
            Or <a href="/signup">register now!</a>
          </Form.Item>
        </Form>
        </div>
      );
}


export default LoginPage;
