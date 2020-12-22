
function Clock() {
  
  React.useEffect(() =>{
    console.log('componentDidMount')
    return () =>{
      console.log('componetWillUnmount')
    }
  }, []);

  return (
    <div className="my-component">
      <h2>react useEffect</h2>
    </div>
  )
}
