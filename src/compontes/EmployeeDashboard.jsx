import React, { useEffect, useState } from "react";
import Footer from "./Footer";
import WelcomeMenu from "./WelcomeMenu";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function EmployeeDashboard() {
  const [data, setData] = useState([]);
  const [editId, setEditId] = useState(null);
  const [editedEmployee, setEditedEmployee] = useState({ id:0,name: "", email: "" });

  const navigate=useNavigate();
  // ✅ Fetch all employees
  const fetchEmployees = () => {
    axios
      .get("https://employee-crud-zgma.onrender.com/getAll")
      .then((response) => setData(response.data))
      .catch((error) => console.error("Failed to fetch employees:", error));
  };

  useEffect(() => {
    fetchEmployees();
  }, []);

  // ✅ Delete employee
  const deleteEmployee = (id) => {
    axios
      .delete(`https://employee-crud-zgma.onrender.com/delete/${id}`)
      .then(() => {
        setData(data.filter((emp) => emp.id !== id));
        alert("Employee deleted successfully!");
      })
      .catch((error) => console.error("Delete failed:", error));
  };

  // ✅ Start editing
  const startEdit = (emp) => {
    setEditId(emp.id);
    setEditedEmployee({ id:emp.id, name: emp.name, email: emp.email });
  };

  // ✅ Cancel editing
  const cancelEdit = () => {
    setEditId(null);
    setEditedEmployee({ name: "", email: "" });
  };

  // ✅ Handle field change
  const handleChange = (e) => {
    setEditedEmployee({ ...editedEmployee, [e.target.name]: e.target.value });
  };

  // ✅ Save edited data with PUT API
  const saveEdit = (id) => {
    axios
      .put(`https://employee-crud-zgma.onrender.com/update`, editedEmployee)
      .then((response) => {
        // const updatedList = data.map((emp) =>
        //   emp.id === id ? response.data : emp
        // );
       // setData(updatedList);
        setEditId(null);
        alert("Employee updated successfully!");
    navigate('/allemp');
      })
      .catch((error) => {
        console.error("Update failed:", error);
        alert("Failed to update employee");
      });
  };

  return (
    <div
      className="min-h-screen bg-cover bg-center flex flex-col"
      style={{ backgroundImage: "url('/Emp.jpg')" }}
    >
      <header className="w-full">
        <WelcomeMenu />
      </header>

      <main className="flex-1 flex items-start justify-center px-4 py-8">
        <div className="w-full max-w-6xl mx-auto bg-black/80 rounded-lg shadow-md backdrop-blur-sm">
          <div className="px-6 py-4 border-b">
            <p className="text-4xl text-center font-bold text-orange-600">
              Employee Dashboard
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200 border-3">
              <thead className="bg-purple-400">
                <tr>
                  <th className="px-6 py-3 text-left text-2xl font-medium text-black uppercase border-2">
                    Id
                  </th>
                  <th className="px-6 py-3 text-left text-2xl font-medium text-black uppercase border-2">
                    Name
                  </th>
                  <th className="px-6 py-3 text-left text-2xl font-medium text-black uppercase border-2">
                    Email
                  </th>
                  <th className="px-6 py-3 text-left text-2xl font-medium text-black uppercase border-2">
                    Action
                  </th>
                </tr>
              </thead>

              <tbody className="bg-white divide-y divide-gray-200">
                {data.length === 0 ? (
                  <tr>
                    <td
                      colSpan="4"
                      className="px-6 py-4 text-center text-2xl text-gray-500"
                    >
                      No employees found.
                    </td>
                  </tr>
                ) : (
                  data.map((emp) => (
                    <tr key={emp.id} className="hover:bg-blue-100 border-2">
                      <td className="px-6 py-4 text-xl border-2">{emp.id}</td>

                      <td className="px-6 py-4 text-xl border-2">
                        {editId === emp.id ? (
                          <input
                            type="text"
                            name="name"
                            value={editedEmployee.name}
                            onChange={handleChange}
                            className="w-full border rounded-md px-2 py-1 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                          />
                        ) : (
                          emp.name
                        )}
                      </td>

                      <td className="px-6 py-4 text-xl border-2">
                        {editId === emp.id ? (
                          <input
                            type="text"
                            name="email"
                            value={editedEmployee.email}
                            onChange={handleChange}
                            className="w-full border rounded-md px-2 py-1 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                          />
                        ) : (
                          emp.email
                        )}
                      </td>

                      <td className="px-6 py-4 border-2">
                        {editId === emp.id ? (
                          <div className="flex gap-3">
                            <button
                              onClick={() => saveEdit(emp.id)}
                              className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700"
                            >
                              Save
                            </button>
                            <button
                              onClick={cancelEdit}
                              className="px-4 py-2 bg-gray-600 text-white rounded hover:bg-gray-700"
                            >
                              Cancel
                            </button>
                          </div>
                        ) : (
                          <div className="flex gap-3">
                            <button
                              onClick={() => startEdit(emp)}
                              className="px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700"
                            >
                              Update
                            </button>
                            <button
                              onClick={() => deleteEmployee(emp.id)}
                              className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700"
                            >
                              Delete
                            </button>
                          </div>
                        )}
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>
      </main>

      <footer className="w-full">
        <Footer />
      </footer>
    </div>
  );
}

export default EmployeeDashboard;