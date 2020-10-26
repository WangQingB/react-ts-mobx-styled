import React from 'react';
import { Menu } from 'antd';
import { MailOutlined, AppstoreOutlined, SettingOutlined } from '@ant-design/icons';


const { SubMenu } = Menu;
let current: [string] = ["mail"];
const handleClick = () => {

}
const naviDiv = {
    height: "72px",
    lineHeight: "72px",
    display: "flex",
    // justifyContent: "space-between",// 两端对齐
    justifyContent: "space-around",
    borderBottom: "1px solid #c7c7c7",
}
const logoImg = {
    height: "67px"
}
const txImg = {
    borderRadius: "50%",
    height: "67px",
    border: "1px solid #c7c7c7",
}
class NavigationBar extends React.Component {
    
    render() {
        return (
            <div style={naviDiv}>
                <div>
                    <img src={require("../../images/img_02.jpg")} alt="" style={logoImg} />
                </div>
                 <Menu onClick={handleClick} selectedKeys={current} mode="horizontal" style={{lineHeight:"69px"}}>
                    <Menu.Item key="mail" >
                        一个Menu
                    </Menu.Item>
                    <Menu.Item key="app">
                        二个Menu
                    </Menu.Item>
                    <SubMenu key="SubMenu" title="三个Menu">
                    <Menu.ItemGroup title="Item 1">
                        <Menu.Item key="setting:1">Option 1</Menu.Item>
                        <Menu.Item key="setting:2">Option 2</Menu.Item>
                    </Menu.ItemGroup>
                    <Menu.ItemGroup title="Item 2">
                        <Menu.Item key="setting:3">Option 3</Menu.Item>
                        <Menu.Item key="setting:4">Option 4</Menu.Item>
                    </Menu.ItemGroup>
                    </SubMenu>
                    <Menu.Item key="alipay">
                        四个Menu
                    </Menu.Item>
                </Menu>
                <div style={{lineHeight:"67px"}}>
                    <img src={require("../../images/img_03.jpeg")} alt="" style={txImg}/>
                </div>
            </div>
        );
    }
}
export default NavigationBar;