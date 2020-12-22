// TODO: 1 start
/*
class MyComponent extends React.Component {
  render() {
    return (
      <div className="my-component">
        這是ReactComponent組件，沒人用了
      </div>
    );
  }
}
// */
// TODO: 1 end

// TODO: 2 start
function FunctionalComponet(){
  return(
    <div className="functional-component">
      測試
      <br/>
      今天日期：
      {
        new Date().toDateString()
      }
    </div>
  )
}
// TODO: 2 end

// TODO:3 start
ReactDOM.render(
  <div>
    <div/>
    <FunctionalComponet />
    <FunctionalComponet />
    <FunctionalComponet />
    <FunctionalComponet />
    <FunctionalComponet />
    <FunctionalComponet />
  </div>,
  document.getElementById('app')
)
// TODO:3 end