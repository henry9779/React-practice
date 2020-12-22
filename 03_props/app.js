
function FunctionalCard(props){
  // TODO: 2 start

  return(
    <div className="card">
      <img className="img" src={props.img} />
      <div className="name">{props.name}</div>
      <div className="quote">{props.children}</div>
    </div>
  )

  // TODO: 2 end
}



ReactDOM.render(
  // TODO:3 start

  <div>
    <FunctionalCard 
      img="http://fakeimg.pl/200x80/?text=milkmidi"
      FunctionalCard="Component" />
    <FunctionalCard 
      img="http://fakeimg.pl/200x80/ff0000/?text=pipi"
      name="Component">
      <h1>這裡可以放 children </h1>
    </FunctionalCard>
  </div>
  // TODO: 3 end
  ,
  document.getElementById('app')
);