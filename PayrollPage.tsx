import { useState } from "react";
import { Plus, Search, Calendar, Users, DollarSign } from "lucide-react";

interface Employee {
  id: number;
  name: string;
  role: string;
  department: string;
  salary: number;
  lastPaid: string;
  paymentHistory: {
    date: string;
    amount: number;
  }[];
}

const employees: Employee[] = [
  {
    id: 1,
    name: "John Doe",
    role: "Software Engineer",
    department: "Engineering",
    salary: 85000,
    lastPaid: "2024-02-15",
    paymentHistory: [
      { date: "2024-02-15", amount: 7083.33 },
      { date: "2024-01-15", amount: 7083.33 },
      { date: "2023-12-15", amount: 7083.33 },
    ],
  },
  {
    id: 2,
    name: "Jane Smith",
    role: "Product Designer",
    department: "Design",
    salary: 75000,
    lastPaid: "2024-02-15",
    paymentHistory: [
      { date: "2024-02-15", amount: 6250.0 },
      { date: "2024-01-15", amount: 6250.0 },
      { date: "2023-12-15", amount: 6250.0 },
    ],
  },
  {
    id: 3,
    name: "Mike Johnson",
    role: "Marketing Manager",
    department: "Marketing",
    salary: 70000,
    lastPaid: "2024-02-15",
    paymentHistory: [
      { date: "2024-02-15", amount: 5833.33 },
      { date: "2024-01-15", amount: 5833.33 },
      { date: "2023-12-15", amount: 5833.33 },
    ],
  },
  {
    id: 4,
    name: "Sarah Wilson",
    role: "Content Writer",
    department: "Marketing",
    salary: 60000,
    lastPaid: "2024-02-15",
    paymentHistory: [
      { date: "2024-02-15", amount: 5000.0 },
      { date: "2024-01-15", amount: 5000.0 },
      { date: "2023-12-15", amount: 5000.0 },
    ],
  },
];

interface PayrollPageProps {
  darkMode: boolean;
}

export function PayrollPage({ darkMode }: PayrollPageProps) {
  const [showAddEmployee, setShowAddEmployee] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedDepartment, setSelectedDepartment] = useState("All");

  const departments = ["All", "Engineering", "Design", "Marketing"];

  const filteredEmployees = employees.filter((employee) => {
    const matchesSearch =
      employee.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      employee.role.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesDepartment =
      selectedDepartment === "All" || employee.department === selectedDepartment;
    return matchesSearch && matchesDepartment;
  });

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className={`text-2xl font-semibold ${darkMode ? "text-white" : ""}`}>
          Payroll Management
        </h1>
        <button
          onClick={() => setShowAddEmployee(true)}
          className="bg-blue-600 text-white px-4 py-2 rounded-lg flex items-center gap-2 hover:bg-blue-700 transition-colors"
        >
          <Plus size={20} />
          Add Employee
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        <div
          className={`p-4 rounded-lg ${
            darkMode ? "bg-gray-800" : "bg-white"
          } shadow-sm`}
        >
          <div className="flex items-center gap-3 mb-2">
            <div
              className={`p-2 rounded-lg ${
                darkMode ? "bg-blue-900" : "bg-blue-50"
              }`}
            >
              <Calendar
                size={20}
                className={darkMode ? "text-blue-200" : "text-blue-600"}
              />
            </div>
            <span className={darkMode ? "text-gray-300" : "text-gray-500"}>
              Next Payroll
            </span>
          </div>
          <div className={`text-2xl font-semibold ${darkMode ? "text-white" : ""}`}>
            Feb 28, 2024
          </div>
        </div>
        <div
          className={`p-4 rounded-lg ${
            darkMode ? "bg-gray-800" : "bg-white"
          } shadow-sm`}
        >
          <div className="flex items-center gap-3 mb-2">
            <div
              className={`p-2 rounded-lg ${
                darkMode ? "bg-blue-900" : "bg-blue-50"
              }`}
            >
              <Users
                size={20}
                className={darkMode ? "text-blue-200" : "text-blue-600"}
              />
            </div>
            <span className={darkMode ? "text-gray-300" : "text-gray-500"}>
              Total Employees
            </span>
          </div>
          <div className={`text-2xl font-semibold ${darkMode ? "text-white" : ""}`}>
            {employees.length}
          </div>
        </div>
        <div
          className={`p-4 rounded-lg ${
            darkMode ? "bg-gray-800" : "bg-white"
          } shadow-sm`}
        >
          <div className="flex items-center gap-3 mb-2">
            <div
              className={`p-2 rounded-lg ${
                darkMode ? "bg-blue-900" : "bg-blue-50"
              }`}
            >
              <DollarSign
                size={20}
                className={darkMode ? "text-blue-200" : "text-blue-600"}
              />
            </div>
            <span className={darkMode ? "text-gray-300" : "text-gray-500"}>
              Monthly Payroll
            </span>
          </div>
          <div className={`text-2xl font-semibold ${darkMode ? "text-white" : ""}`}>
            $
            {employees
              .reduce((acc, emp) => acc + emp.salary / 12, 0)
              .toLocaleString(undefined, { maximumFractionDigits: 0 })}
          </div>
        </div>
      </div>

      <div
        className={`rounded-lg shadow-sm ${
          darkMode ? "bg-gray-800" : "bg-white"
        }`}
      >
        <div className={`p-4 border-b ${darkMode ? "border-gray-700" : ""}`}>
          <div className="flex flex-col md:flex-row gap-4 items-start md:items-center justify-between">
            <h2 className={`text-lg font-semibold ${darkMode ? "text-white" : ""}`}>
              Employee List
            </h2>
            <div className="flex flex-col md:flex-row gap-4 w-full md:w-auto">
              <div className="relative flex-1 md:flex-initial">
                <Search
                  className={`absolute left-3 top-1/2 -translate-y-1/2 ${
                    darkMode ? "text-gray-400" : "text-gray-500"
                  }`}
                  size={20}
                />
                <input
                  type="text"
                  placeholder="Search employees..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className={`pl-10 pr-4 py-2 rounded-lg w-full ${
                    darkMode
                      ? "bg-gray-700 text-white placeholder-gray-400 border-gray-600"
                      : "bg-gray-50 text-gray-900 placeholder-gray-500 border-gray-200"
                  } border focus:outline-none focus:ring-2 focus:ring-blue-500`}
                />
              </div>
              <select
                value={selectedDepartment}
                onChange={(e) => setSelectedDepartment(e.target.value)}
                className={`px-4 py-2 rounded-lg ${
                  darkMode
                    ? "bg-gray-700 text-white border-gray-600"
                    : "bg-gray-50 text-gray-900 border-gray-200"
                } border focus:outline-none focus:ring-2 focus:ring-blue-500`}
              >
                {departments.map((dept) => (
                  <option key={dept} value={dept}>
                    {dept}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>
        <div className="divide-y divide-gray-200 dark:divide-gray-700">
          {filteredEmployees.map((employee) => (
            <div
              key={employee.id}
              className="p-4 flex items-center justify-between hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors"
            >
              <div className="flex items-center gap-4">
                <div
                  className={`w-10 h-10 rounded-full flex items-center justify-center ${
                    darkMode ? "bg-gray-700" : "bg-gray-100"
                  }`}
                >
                  <span
                    className={`text-lg font-medium ${
                      darkMode ? "text-white" : "text-gray-700"
                    }`}
                  >
                    {employee.name.charAt(0)}
                  </span>
                </div>
                <div>
                  <h3
                    className={`font-medium ${
                      darkMode ? "text-white" : "text-gray-900"
                    }`}
                  >
                    {employee.name}
                  </h3>
                  <div className="flex items-center gap-2">
                    <p className={darkMode ? "text-gray-400" : "text-gray-500"}>
                      {employee.role}
                    </p>
                    <span
                      className={`px-2 py-0.5 text-xs rounded-full ${
                        darkMode
                          ? "bg-gray-700 text-gray-300"
                          : "bg-gray-100 text-gray-600"
                      }`}
                    >
                      {employee.department}
                    </span>
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-6">
                <div className="text-right">
                  <div
                    className={`font-medium ${
                      darkMode ? "text-white" : "text-gray-900"
                    }`}
                  >
                    ${employee.salary.toLocaleString()}
                  </div>
                  <div
                    className={`text-sm ${
                      darkMode ? "text-gray-400" : "text-gray-500"
                    }`}
                  >
                    Last paid: {employee.lastPaid}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}