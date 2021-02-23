import { useContext, useMemo } from 'react';
import AuthTokenContext from './Auth.context'

function MyComponent() {
  const token = useContext(AuthTokenContext)

  return (
    <div>
      <h1>Token</h1>
      <div>{token}</div>

      <ChildComponent></ChildComponent>
      <MemoChildComponent></MemoChildComponent>
    </div>
  )
}

function ChildComponent() {
  return (
    <div>
      <h4>Child Component</h4>
      {`${Date.now()}`}
    </div>
  );
}

function MemoChildComponent() {
  return useMemo(() =>
    <div>
      <h4>Memo Child Component</h4>
      {`${Date.now()}`}
    </div>
  , []);
}

export default MyComponent;
