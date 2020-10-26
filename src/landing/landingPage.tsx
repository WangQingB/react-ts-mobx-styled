import React from 'react';
import { Form, Input, Button, Checkbox } from 'antd';
import history from '../history/history';
import img_01 from '../images/img_01.jpg';

const layout = {
    labelCol: { span: 9 },
    wrapperCol: { span: 5 },
};
const tailLayout = {
    wrapperCol: { offset: 9, span: 5 },
};
const landDiv = { 
    width: '100%',
    height: '100%',
    backgroundImage: `url(${img_01})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: '100% 100%',
};
const lanFrom = {
    paddingTop : '300px',
}
let loading: boolean = false;
class LandingPage extends React.Component {
    render() { 
        const onFinish = (value: any) => {
            history.push({pathname:"/home",state:{}})
        }
        const onFinishFailed = (value: any) => {
            console.log(value)
        }
        return ( 
            <div style={landDiv}>
                <div style={lanFrom}>
                    <Form
                        {...layout}
                            name="basic"
                            initialValues={{ remember: true }}
                            onFinish={onFinish}
                            onFinishFailed={onFinishFailed}
                        >
                            <Form.Item
                                label="Username"
                                name="username"
                                rules={[{ required: true, message: '请输入' }]}
                            >
                                <Input />
                            </Form.Item>

                            <Form.Item
                                label="Password"
                                name="password"
                                rules={[{ required: true, message: '请输入' }]}
                            >
                                <Input.Password />
                            </Form.Item>

                            <Form.Item {...tailLayout} name="remember" valuePropName="checked">
                                <Checkbox>Remember me</Checkbox>
                            </Form.Item>
                            <Form.Item {...tailLayout}>
                                <Button type="primary" htmlType="submit" loading={loading}>
                                    登录
                                </Button>
                            </Form.Item>
                        </Form>
                </div>
            </div>
        );
    }
}
 
export default LandingPage;