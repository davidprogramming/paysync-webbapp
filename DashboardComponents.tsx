import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";
import {
  CreditCard,
  FileText,
  Briefcase as BriefcaseBusiness,
} from "lucide-react";

export const SidebarItem = ({ icon: Icon, label, active, onClick, darkMode }) => (
  <button
    onClick={onClick}
    className={`flex items-center gap-3 w-full p-3 rounded-lg ${
      active
        ? darkMode
          ? "bg-blue-900 text-blue-200"
          : "bg-blue-50 text-blue-600"
        : darkMode
        ? "text-gray-300 hover:bg-gray-800"
        : "text-gray-600 hover:bg-gray-50"
    }`}
  >
    <Icon size={20} />
    <span>{label}</span>
  </button>
);

export const StatCard = ({ icon: Icon, label, value, darkMode }) => (
  <div
    className={`p-4 rounded-lg shadow-sm ${
      darkMode ? "bg-gray-800" : "bg-white"
    }`}
  >
    <div className="flex items-center gap-3 mb-2">
      <div
        className={`p-2 rounded-lg ${darkMode ? "bg-blue-900" : "bg-blue-50"}`}
      >
        <Icon
          size={20}
          className={darkMode ? "text-blue-200" : "text-blue-600"}
        />
      </div>
      <span className={darkMode ? "text-gray-300" : "text-gray-500"}>
        {label}
      </span>
    </div>
    <div className={`text-2xl font-semibold ${darkMode ? "text-white" : ""}`}>
      {value}
    </div>
  </div>
);

export const ExpenseItem = ({ icon: Icon, label, date, amount, type, darkMode }) => (
  <div
    className={`flex items-center justify-between p-3 border-b ${
      darkMode ? "border-gray-700" : ""
    }`}
  >
    <div className="flex items-center gap-3">
      <Icon
        size={20}
        className={darkMode ? "text-gray-300" : "text-gray-600"}
      />
      <div>
        <div className={`font-medium ${darkMode ? "text-white" : ""}`}>
          {label}
        </div>
        <div className={darkMode ? "text-gray-400" : "text-sm text-gray-500"}>
          {date}
        </div>
      </div>
    </div>
    <div
      className={`font-medium ${
        type === "expense" ? "text-red-500" : "text-green-500"
      }`}
    >
      {type === "expense" ? "- " : "+ "}${Math.abs(amount).toLocaleString()}
    </div>
  </div>
);

export const mockChartData = [
  { month: "Jan", value: 30000 },
  { month: "Feb", value: 32000 },
  { month: "Mar", value: 36820 },
];