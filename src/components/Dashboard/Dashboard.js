import React, { useState, useMemo } from "react";
import UserData from "../userData";
import Pagination from "./pagination";
let PageSize = 10;

function Dashboard() {
  const [users, setUsers] = useState(UserData);
  const [currentPage, setCurrentPage] = useState(1);
  const [search, setNewSearch] = useState("");

  const currentTableData = useMemo(() => {
    const firstPageIndex = (currentPage - 1) * PageSize;
    const lastPageIndex = firstPageIndex + PageSize;
    return users.slice(firstPageIndex, lastPageIndex);
  }, [currentPage]);

  const handleSearchChange = (e) => {
    setNewSearch(e.target.value);
  };

  const filtered = !search
    ? currentTableData
    : currentTableData.filter((user) =>
        user.name.toLowerCase().includes(search.toLowerCase())
      );

  return (
    <div className="container">
      <input type="text" value={search} onChange={handleSearchChange} />
      <h3 className="p-3 text-center">React - Display a list of items</h3>
      <table className="table table-striped table-bordered">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Role</th>
          </tr>
        </thead>
        <tbody>
          {filtered.map((user) => (
            <tr key={user.id}>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.role}</td>
            </tr>
          ))}
        </tbody>
        <Pagination
          className="pagination-bar"
          currentPage={currentPage}
          totalCount={users.length}
          pageSize={PageSize}
          onPageChange={(page) => setCurrentPage(page)}
        />
      </table>
    </div>
  );
}

export default Dashboard;

// export default function Dashboard() {
//   const Users = UserDetail(UserList, UserData);
//   return (
//     <div>
//       <Users></Users>
//       <div className="grid-container">
//         <CustomeHook></CustomeHook>
//       </div>
//       CountApp
//     </div>
//   );
// }
