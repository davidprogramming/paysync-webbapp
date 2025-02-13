import { useState } from "react";
import { useAuth } from "../AuthContext";
import {
  LayoutGrid,
  FileText,
  Briefcase as BriefcaseBusiness,
  CreditCard,
  Settings,
  LogOut,
  Sun,
  Moon,
} from "lucide-react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { SidebarItem, StatCard, ExpenseItem, mockChartData } from "../components/DashboardComponents";
import { ContractsPage } from "./ContractsPage";
import { PayrollPage } from "./PayrollPage";
import { CardsPage } from "./CardsPage";
import { SettingsPage } from "./SettingsPage";

function Dashboard() {
  const [activeTab, setActiveTab] = useState("dashboard");
  const [darkMode, setDarkMode] = useState(false);
  const { user, logout } = useAuth();

  const renderContent = () => {
    switch (activeTab) {
      case "contracts":
        return <ContractsPage darkMode={darkMode} />;
      case "payroll":
        return <PayrollPage darkMode={darkMode} />;
      case "cards":
        return <CardsPage darkMode={darkMode} />;
      case "settings":
        return <SettingsPage darkMode={darkMode} />;
      case "dashboard":
      default:
        return (
          <>
            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
              <StatCard
                icon={CreditCard}
                label="Total Volume"
                value="$0"
                darkMode={darkMode}
              />
              <StatCard
                icon={BriefcaseBusiness}
                label="Active Users"
                value="0"
                darkMode={darkMode}
              />
              <StatCard
                icon={FileText}
                label="Contracts"
                value="0"
                darkMode={darkMode}
              />
              <StatCard
                icon={CreditCard}
                label="Escrow Balance"
                value="$0"
                darkMode={darkMode}
              />
            </div>

            {/* Balance Chart */}
            <div
              className={`p-6 rounded-lg shadow-sm mb-8 ${
                darkMode ? "bg-gray-800" : "bg-white"
              }`}
            >
              <div className="flex justify-between items-center mb-4">
                <h2
                  className={`text-lg font-semibold ${
                    darkMode ? "text-white" : ""
                  }`}
                >
                  Total Balance
                </h2>
                <div
                  className={`text-2xl font-bold ${
                    darkMode ? "text-white" : ""
                  }`}
                >
                  $36,820
                </div>
              </div>
              <div className="h-64">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={mockChartData}>
                    <XAxis
                      dataKey="month"
                      stroke={darkMode ? "#9CA3AF" : "#6B7280"}
                    />
                    <YAxis stroke={darkMode ? "#9CA3AF" : "#6B7280"} />
                    <Tooltip
                      contentStyle={{
                        backgroundColor: darkMode ? "#1F2937" : "white",
                        border: "none",
                        borderRadius: "8px",
                        color: darkMode ? "white" : "black",
                      }}
                    />
                    <Line
                      type="monotone"
                      dataKey="value"
                      stroke="#2563eb"
                      strokeWidth={2}
                    />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </div>

            {/* Recent Transactions */}
            <div
              className={`rounded-lg shadow-sm ${
                darkMode ? "bg-gray-800" : "bg-white"
              }`}
            >
              <div
                className={`p-4 border-b ${darkMode ? "border-gray-700" : ""}`}
              >
                <h2
                  className={`text-lg font-semibold ${
                    darkMode ? "text-white" : ""
                  }`}
                >
                  Recent Transactions
                </h2>
              </div>
              <div>
                <ExpenseItem
                  icon={CreditCard}
                  label="Apollo"
                  date="Jun 2, 2023"
                  amount={-700}
                  type="expense"
                  darkMode={darkMode}
                />
                <ExpenseItem
                  icon={FileText}
                  label="Tax"
                  date="May 9, 2023"
                  amount={-500}
                  type="expense"
                  darkMode={darkMode}
                />
                <ExpenseItem
                  icon={BriefcaseBusiness}
                  label="Payment from MGM Corp"
                  date="May 8, 2023"
                  amount={5000}
                  type="income"
                  darkMode={darkMode}
                />
                <ExpenseItem
                  icon={FileText}
                  label="AP Project"
                  date="May 8, 2023"
                  amount={7500}
                  type="income"
                  darkMode={darkMode}
                />
              </div>
            </div>
          </>
        );
    }
  };

  const renderNavigation = () => (
    <nav className="space-y-2">
      <SidebarItem
        icon={LayoutGrid}
        label="Dashboard"
        active={activeTab === "dashboard"}
        onClick={() => setActiveTab("dashboard")}
        darkMode={darkMode}
      />
      <SidebarItem
        icon={FileText}
        label="Contracts"
        active={activeTab === "contracts"}
        onClick={() => setActiveTab("contracts")}
        darkMode={darkMode}
      />
      <SidebarItem
        icon={BriefcaseBusiness}
        label="Payroll"
        active={activeTab === "payroll"}
        onClick={() => setActiveTab("payroll")}
        darkMode={darkMode}
      />
      <SidebarItem
        icon={CreditCard}
        label="Cards"
        active={activeTab === "cards"}
        onClick={() => setActiveTab("cards")}
        darkMode={darkMode}
      />
      <SidebarItem
        icon={Settings}
        label="Settings"
        active={activeTab === "settings"}
        onClick={() => setActiveTab("settings")}
        darkMode={darkMode}
      />
      <div className="pt-4 md:block hidden">
        <SidebarItem
          icon={LogOut}
          label="Log out"
          active={false}
          onClick={logout}
          darkMode={darkMode}
        />
      </div>
    </nav>
  );

  return (
    <div className={`flex flex-col md:flex-row h-screen ${darkMode ? "bg-gray-900" : "bg-gray-50"}`}>
      {/* Sidebar - Hidden on mobile */}
      <div
        className={`hidden md:block w-64 p-4 border-r ${
          darkMode ? "bg-gray-800 border-gray-700" : "bg-white"
        }`}
      >
        <div className="flex items-center gap-2 mb-8">
          <div className="bg-blue-600 text-white p-2 rounded">P</div>
          <span className={`font-semibold ${darkMode ? "text-white" : ""}`}>
            PaySync
          </span>
        </div>
        {renderNavigation()}
      </div>

      {/* Main Content */}
      <div className="flex-1 p-4 md:p-8 overflow-auto pb-20 md:pb-8">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="flex justify-between items-center mb-8">
            <div className="flex items-center gap-4">
              <div className="md:hidden flex items-center gap-2">
                <div className="bg-blue-600 text-white p-2 rounded">P</div>
                <span className={`font-semibold ${darkMode ? "text-white" : ""}`}>
                  PaySync
                </span>
              </div>
              <h1
                className={`text-xl md:text-2xl font-semibold ${
                  darkMode ? "text-white" : ""
                }`}
              >
                Good afternoon, {user?.name}!
              </h1>
            </div>
            <button
              onClick={() => setDarkMode(!darkMode)}
              className={`p-2 rounded-lg ${
                darkMode ? "bg-gray-700 text-white" : "bg-gray-100"
              }`}
            >
              {darkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>
          </div>

          {renderContent()}
        </div>
      </div>

      {/* Mobile Bottom Navigation */}
      <div
        className={`md:hidden fixed bottom-0 left-0 right-0 ${
          darkMode ? "bg-gray-800 border-gray-700" : "bg-white border-gray-200"
        } border-t`}
      >
        <div className="flex justify-around items-center p-2">
          <button
            onClick={() => setActiveTab("dashboard")}
            className={`p-2 rounded-lg flex flex-col items-center ${
              activeTab === "dashboard"
                ? darkMode
                  ? "text-blue-400"
                  : "text-blue-600"
                : darkMode
                ? "text-gray-400"
                : "text-gray-600"
            }`}
          >
            <LayoutGrid size={20} />
            <span className="text-xs mt-1">Dashboard</span>
          </button>
          <button
            onClick={() => setActiveTab("contracts")}
            className={`p-2 rounded-lg flex flex-col items-center ${
              activeTab === "contracts"
                ? darkMode
                  ? "text-blue-400"
                  : "text-blue-600"
                : darkMode
                ? "text-gray-400"
                : "text-gray-600"
            }`}
          >
            <FileText size={20} />
            <span className="text-xs mt-1">Contracts</span>
          </button>
          <button
            onClick={() => setActiveTab("payroll")}
            className={`p-2 rounded-lg flex flex-col items-center ${
              activeTab === "payroll"
                ? darkMode
                  ? "text-blue-400"
                  : "text-blue-600"
                : darkMode
                ? "text-gray-400"
                : "text-gray-600"
            }`}
          >
            <BriefcaseBusiness size={20} />
            <span className="text-xs mt-1">Payroll</span>
          </button>
          <button
            onClick={() => setActiveTab("cards")}
            className={`p-2 rounded-lg flex flex-col items-center ${
              activeTab === "cards"
                ? darkMode
                  ? "text-blue-400"
                  : "text-blue-600"
                : darkMode
                ? "text-gray-400"
                : "text-gray-600"
            }`}
          >
            <CreditCard size={20} />
            <span className="text-xs mt-1">Cards</span>
          </button>
          <button
            onClick={logout}
            className={`p-2 rounded-lg flex flex-col items-center ${
              darkMode ? "text-gray-400" : "text-gray-600"
            }`}
          >
            <LogOut size={20} />
            <span className="text-xs mt-1">Logout</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;