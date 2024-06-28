function Hoc1(Wrap) {
  return function UpdatedComponent(props) {
    const style1 = {
      backgroundColor: 'lightblue',
      color: 'black',
    };
    return (
      <div style={style1}>
        <h1>This is a Enhanced component</h1>
        <Wrap {...props} />
      </div>
    );
  };
}

export default Hoc1;
