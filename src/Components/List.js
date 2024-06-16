import { data } from "../helper";
function List() {
  return (
    <>
      <ul className="list-group">
        {data.map(function (item, index) {
          return (
            <li className="list-group-item" key={index}>
              <span>{item.name}</span>
              <button type="button" className="btn btn-primary">
                Edit
              </button>
              <button type="button" className="btn btn-primary">
                Delete
              </button>
            </li>
          );
        })}
      </ul>
    </>
  );
}
export default List;
