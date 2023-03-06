import React, { useState } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Table from "./Table";
import LoginPage from "./LoginPage";

const App = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [sortKey, setSortKey] = useState(null);
  const [sortDirection, setSortDirection] = useState("asc");

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSort = (key) => {
    if (sortKey === key) {
      setSortDirection(sortDirection === "asc" ? "desc" : "asc");
    } else {
      setSortKey(key);
      setSortDirection("asc");
    }
  };

  return (
    <Router>
      <div>
        <Route exact path="/" component={() => <LoginPage />} />
        <Route
          exact
          path="/table"
          component={() => (
            <Table
              data={[
                {
                  name: "John Doe",
                  age: 25,
                  occupation: "Engineer",
                },
                {
                  name: "Jane Smith",
                  age: 30,
                  occupation: "Designer",
                },
                {
                  name: "Bob Johnson",
                  age: 40,
                  occupation: "Developer",
                },
              ]}
              searchTerm={searchTerm}
              sortKey={sortKey}
              sortDirection={sortDirection}
              handleSearch={handleSearch}
              handleSort={handleSort}
            />
          )}
        />
      </div>
    </Router>
  );
};

export default App;
