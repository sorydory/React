import React,{Component} from 'react';
class ClassComponent2 extends Component{
    render(){
        const {name,children}= this.props;
        return(
            <div>나는 클래스 컴포넌트{name}{children}</div>
        )
    }
}
export default ClassComponent2;