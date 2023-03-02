import { useEffect, useRef, useState } from "react";
import { ReactSortable } from "react-sortablejs";
import Sortable from "sortablejs";

function App() {
  const [item, setItem] = useState([
    { id: 1, name: "binod" },
    {
      id: 2,
      name: "peter",
    },
    {
      id: 3,
      name: "john",
    },
    {
      id: 4,
      name: "Mike",
    },
    {
      id: 5,
      name: "Tom",
    },
  ]);

  const list1Ref = useRef(null);
  const list2Ref = useRef(null);

  useEffect(() => {
    const list1 = list1Ref.current;
    const list2 = list2Ref.current;

    const options = {
      group: "shared",
      animation: 150,
    };

    Sortable.create(list1, options);
    Sortable.create(list2, options);
  }, []);

  return (
    <div className="container">
      <div className="list-container">
        <ReactSortable list={item} setList={setItem}>
          {item.map((items) => (
            <div className="list-item" key={items.id}>
              {items.name}
            </div>
          ))}
        </ReactSortable>
      </div>

      <div className="list-container">
        {/* Shared list  */}
        <h1 className="title">shared list</h1>
        <div className="shared-lists">
          <ul ref={list1Ref} className="first-list">
            <li data-id="1">Item 1</li>
            <li data-id="2">Item 2</li>
            <li data-id="3">Item 3</li>
            <li data-id="4">Item 4</li>
          </ul>
          <ul ref={list2Ref} className="second-list">
            <li data-id="5">Item 5</li>
            <li data-id="6">Item 6</li>
            <li data-id="7">Item 7</li>
            <li data-id="8">Item 8</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default App;
