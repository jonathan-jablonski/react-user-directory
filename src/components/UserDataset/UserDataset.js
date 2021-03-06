import "../UserDataset/style.css";

function UserDataset(props) {
  return (
    <table className="table table-striped">
      <thead>
        <tr>
          <th scope="col">Employee ID</th>
          <th
            scope="col"
            onClick={(e) => {
              props.sort("First");
            }}
            onDoubleClick={(e) => {
              props.sort("First");
            }}
          >
            First Name
          </th>
          <th scope="col">Last Name</th>
          <th scope="col">Email Address</th>
          <th scope="col">City</th>
          <th scope="col">Country</th>
        </tr>
      </thead>
      <tbody>
        {props.results.map((result, index) => (
          <tr key={index + 1}>
            <th scope="row">{index + 1}</th>
            <td>{result.name.first}</td>
            <td>{result.name.last}</td>
            <td>{result.email}</td>
            <td>{result.location.city}</td>
            <td>{result.location.country}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default UserDataset;
