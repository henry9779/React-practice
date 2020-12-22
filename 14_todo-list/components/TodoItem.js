
function TodoItem(props) {

  const onClick = () => {
    props.onToggleItem(props.id);
  };
  let className = 'todo-item';
  if (props.done) {
    // 如果有變數
    className += ' done';
    // 將 class 名增加 done
  }
  return (
    // 如果沒有
    <section data-name="TodoItem.js" className="style-2">
      <li className={className} onClick={onClick}>
        {props.children}
      </li>
    </section>
  );

}
