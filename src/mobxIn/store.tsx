import { observable, action } from "mobx";

class Yodo {
    id = Math.random();
    @observable title = "周一";
    @observable finished = false;
    @action 
    cTitle = () => {
        this.title = "是周一啊"
        console.log(this.title);
    }
}

export default new Yodo();