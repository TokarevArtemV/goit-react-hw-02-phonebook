export const Filter = ({ filter, onInputFilter }) => {
  return (
    <>
      <label>
        <span>Filter</span>
        <input
          type="text"
          name="filter"
          value={filter}
          onChange={onInputFilter}
        />
      </label>
    </>
  );
};
