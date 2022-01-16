import React, {useRef} from 'react';
import logo from './logo.svg';
import './App.css';
import {connect} from "react-redux";
import AppSubChanged from "./AppSubChanged";
import AppSubNormal from "./AppSubNormal";

interface IAppProps extends StateProps, DispatchProps {}

const App = (props: IAppProps) => {

  // 자식 컴포넌트 함수 사용할 컴포넌트 useRef 생성
  const appSubChangedRef = useRef(null);

  // AppSubChanged 컴포넌트의 increaseCount 함수 호출
  const increaseAppSubChangedCount = () => {
    appSubChangedRef.current?.increaseCount();
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo"/>
        <p>Main Component</p>
        <button
          style={{width:'150px',height:'40px'}}
          onClick={increaseAppSubChangedCount}>AppSubChanged Count++</button>
        <br />

        <AppSubChanged ref={appSubChangedRef} />

        <AppSubNormal />

      </header>
    </div>
  );
}

const mapStateToProps = () => ({
});
const mapDispatchToProps = {
};
type StateProps = ReturnType<typeof mapStateToProps>;
type DispatchProps = typeof mapDispatchToProps;

export default connect(mapStateToProps, mapDispatchToProps)(App);
