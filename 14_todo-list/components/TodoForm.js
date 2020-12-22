function TodoForm(props) {
  const inputRef = React.useRef();

  const atSubmit = (e) => {
    e.preventDefault();
    const text = inputRef.current.value;
    if (text === '') {
      return;
    }
    inputRef.current.value = '';
    props.onAddItem(text);
    // 透過 props 呼叫 onAddItem Function 取得資料
  };

  return (
    <section className="style-1" data-name="TodoForm.js">
      <form className="todo-form" onSubmit={atSubmit}>
       {/* 原生form 會觸發 submit 事件  */}
        <input type="text" ref={inputRef} />
      </form>
    </section>
  );

}
