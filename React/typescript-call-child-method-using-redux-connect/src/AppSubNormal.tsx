import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import {connect} from "react-redux";

interface IAppSubNormalProps extends StateProps, DispatchProps {}

const AppSubNormal = (props: IAppSubNormalProps) => {

  const [count, setCount] = useState(0);

  const increaseCount = () => {
    setCount(count + 1);
  }

  return (
    <div className="AppSub">
      <p>Sub Component - Normal</p>
      Count: {count}
      <br />
      <button
        style={{width:'100px',height:'40px'}}
        onClick={increaseCount}>Count++</button>
    </div>
  );
}

const mapStateToProps = () => ({
});
const mapDispatchToProps = {
};
type StateProps = ReturnType<typeof mapStateToProps>;
type DispatchProps = typeof mapDispatchToProps;

export default connect(mapStateToProps, mapDispatchToProps)(AppSubNormal);
