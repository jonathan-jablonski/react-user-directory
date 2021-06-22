import "../UserDataset/style.css";

function DataTable(props) {
  return (
    <table className="table table-striped">
      <thead>
        <tr>
          <th scope="col">Employee ID</th>
          <th scope="col">First</th>
          <th scope="col">Last</th>
          <th scope="col">Email</th>
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

export default DataTable;
