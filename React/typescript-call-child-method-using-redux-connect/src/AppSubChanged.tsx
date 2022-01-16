import React, {forwardRef, useImperativeHandle, useState} from 'react';
import './App.css';
import {connect} from "react-redux";

interface IAppSubChangedProps extends StateProps, DispatchProps {}

// 컴포넌트에 forwardRef 사용
export const AppSubChanged = forwardRef((props: IAppSubChangedProps, ref) => {

  const [count, setCount] = useState(0);

  const increaseCount = () => {
    setCount(count + 1);
  }

  // 부모 컴포넌트에서 사용할 함수 정의
  useImperativeHandle(ref, () => ({
    increaseCount: () => {
      increaseCount();
    }
  }));

  return (
    <div className="AppSub">
      <p>Sub Component - Changed</p>
      Count: {count}
      <br />
      <button
        style={{width:'100px',height:'40px'}}
        onClick={increaseCount}>Count++</button>
    </div>
  );
});

const mapStateToProps = () => ({
});
const mapDispatchToProps = {
};
type StateProps = ReturnType<typeof mapStateToProps>;
type DispatchProps = typeof mapDispatchToProps;

// connect 에 옵션을 추가로 전달해야 한다.
export default connect(
  mapStateToProps, mapDispatchToProps,
  null,
  {
    getDisplayName: () => 'AppSubChanged',
    forwardRef: true
  })(AppSubChanged);
