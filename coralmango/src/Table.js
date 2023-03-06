import React from "react";

const Table = ({
  data,
  searchTerm,
  sortKey,
  sortDirection,
  handleSearch,
  handleSort,
}) => {
  const filteredData = data.filter((item) =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const sortedData = sortKey
    ? filteredData.sort((a, b) => {
        if (a[sortKey] < b[sortKey]) {
          return sortDirection === "asc" ? -1 : 1;
        }
        if (a[sortKey] > b[sortKey]) {
          return sortDirection === "asc" ? 1 : -1;
        }
        return 0;
      })
    : filteredData;

  return (
    <div>
      <input type="text" placeholder="Search by name" onChange={handleSearch} />
      <table>
        <thead>
          <tr>
            <th>
              <button onClick={() => handleSort("name")}>
                Name {sortKey === "name" && sortDirection === "asc" && "▲"}
                {sortKey === "name" && sortDirection === "desc" && "▼"}
              </button>
            </th>
            <th>
              <button onClick={() => handleSort("age")}>
                Age {sortKey === "age" && sortDirection === "asc" && "▲"}
                {sortKey === "age" && sortDirection === "desc" && "▼"}
              </button>
            </th>
            <th>Occupation</th>
          </tr>
        </thead>
        <tbody>
          {sortedData.map((item) => (
            <tr key={item.name}>
              <td>{item.name}</td>
              <td>{item.age}</td>
              <td>{item.occupation}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
export default Table;
