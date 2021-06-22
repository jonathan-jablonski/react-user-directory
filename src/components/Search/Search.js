import "./style.css";

function Search(props) {
  return (
    <div className="text-center">
      <form className="col d-flex" onSubmit={props.handleFormSubmit}>
        <input
          className="form-control"
          value={props.value}
          name="search"
          onChange={props.handleInputChange}
          type="search"
          placeholder="Search by first name"
        />
      </form>
    </div>
  );
}

export default Search;
