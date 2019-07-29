import { observable, computed, action, runInAction } from "mobx";

class Store {
    // 基本设置
    @observable state = {
        tag:'sswerwrewsadsadarwr',
        List:[]
    }
    @action.bound getList = () =>{
        console.info('34343333333')
        return new Promise ((resolve,reject)=>{
            setTimeout(()=>{
        console.info('3434333333eeeeee3')

            this.state.List=[1,2,3,4,5,6,7,9]
                resolve()
            },3000)
        })
    }

}

export default Store

