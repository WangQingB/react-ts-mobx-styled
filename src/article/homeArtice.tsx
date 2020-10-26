import React from "react";
import { Button } from "antd";
import styled from "styled-components";
import { observer } from "mobx-react";
import { observable, action } from "mobx";


@observer
export class HomeArtice extends React.Component {
    @observable id = Math.random();
    @observable title = "";
    @action.bound
    cTitle = () => {
        this.title = "是周一啊"
        console.log(this.title);
    }
    render() { 
        console.log(this.props)
        return (
            <div>
                <DivTitle>
                    <p>{this.title}</p>
                    <p>{this.id}</p>
                    <Button onClick={this.cTitle}>点我</Button>
                </DivTitle>
            </div>
        )
    }
}
 
export default HomeArtice;
const DivTitle = styled.div`
  & {
    font-size: 14px;
  }
`;