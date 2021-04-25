const App = () => {
    const [list, setList] = React.useState(initialList);
    const [name, setName] = React.useState('');
   
    function handleChange(event) {
      setName(event.target.value);
    }
   
    function handleAdd() {
      const newList = list.concat({ name, id: uuidv4() });
   
      setList(newList);
   
      setName('');
    }
   
    return (
      <div>
        <AddItem
          name={name}
          onChange={handleChange}
          onAdd={handleAdd}
        />
   
        <List list={list} />
      </div>
    );
  };
   
  const AddItem = ({ name, onChange, onAdd }) => (
    <div>
      <input type="text" value={name} onChange={onChange} />
      <button type="button" onClick={onAdd}>
        Add
      </button>
    </div>
  );
   
  const List = ({ list }) => (
    <ul>
      {list.map((item) => (
        <li key={item.id}>{item.name}</li>
      ))}
    </ul>
  );