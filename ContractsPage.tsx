import { Plus, MoreVertical } from "lucide-react";

interface ContractType {
  id: number;
  client: string;
  total: number;
  paid: number;
  status: string;
  progress: number;
}

const contracts: ContractType[] = [
  {
    id: 1,
    client: "ABC Corp",
    total: 1544,
    paid: 640,
    status: "In Progress",
    progress: 41,
  },
  {
    id: 2,
    client: "MGM Agency",
    total: 10000,
    paid: 10000,
    status: "Completed",
    progress: 100,
  },
  {
    id: 3,
    client: "MGM Agency",
    total: 2000,
    paid: 2000,
    status: "Completed",
    progress: 100,
  },
  {
    id: 4,
    client: "MGM Agency",
    total: 4350,
    paid: 4350,
    status: "Completed",
    progress: 100,
  },
];

interface ContractCardProps {
  contract: ContractType;
  darkMode: boolean;
}

const ContractCard = ({ contract, darkMode }: ContractCardProps) => (
  <div
    className={`p-4 rounded-lg ${
      darkMode ? "bg-gray-800" : "bg-white"
    } shadow-sm`}
  >
    <div className="flex justify-between items-start mb-4">
      <div>
        <h3
          className={`font-semibold ${
            darkMode ? "text-white" : "text-gray-900"
          }`}
        >
          {contract.client}
        </h3>
        <p
          className={`text-sm ${
            darkMode ? "text-gray-400" : "text-gray-500"
          }`}
        >
          Contract #{contract.id}
        </p>
      </div>
      <button
        className={`p-1 rounded-full hover:${
          darkMode ? "bg-gray-700" : "bg-gray-100"
        }`}
      >
        <MoreVertical
          size={20}
          className={darkMode ? "text-gray-400" : "text-gray-500"}
        />
      </button>
    </div>

    <div className="space-y-3">
      <div className="flex justify-between">
        <span className={darkMode ? "text-gray-400" : "text-gray-500"}>
          Amount
        </span>
        <span
          className={`font-medium ${
            darkMode ? "text-white" : "text-gray-900"
          }`}
        >
          ${contract.total.toLocaleString()}
        </span>
      </div>

      <div className="flex justify-between">
        <span className={darkMode ? "text-gray-400" : "text-gray-500"}>
          Paid
        </span>
        <span
          className={`font-medium ${
            darkMode ? "text-white" : "text-gray-900"
          }`}
        >
          ${contract.paid.toLocaleString()}
        </span>
      </div>

      <div>
        <div className="flex justify-between mb-1">
          <span className={darkMode ? "text-gray-400" : "text-gray-500"}>
            Progress
          </span>
          <span
            className={`text-sm ${
              darkMode ? "text-gray-400" : "text-gray-500"
            }`}
          >
            {contract.progress}%
          </span>
        </div>
        <div
          className={`h-2 rounded-full ${
            darkMode ? "bg-gray-700" : "bg-gray-200"
          }`}
        >
          <div
            className="h-full rounded-full bg-blue-600"
            style={{ width: `${contract.progress}%` }}
          />
        </div>
      </div>

      <div className="flex justify-between items-center">
        <span
          className={`px-2 py-1 text-sm rounded-full ${
            contract.status === "Completed"
              ? darkMode
                ? "bg-green-900 text-green-200"
                : "bg-green-100 text-green-800"
              : darkMode
              ? "bg-blue-900 text-blue-200"
              : "bg-blue-100 text-blue-800"
          }`}
        >
          {contract.status}
        </span>
      </div>
    </div>
  </div>
);

interface ContractsPageProps {
  darkMode: boolean;
}

export function ContractsPage({ darkMode }: ContractsPageProps) {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1
          className={`text-2xl font-semibold ${darkMode ? "text-white" : ""}`}
        >
          Contracts
        </h1>
        <button className="bg-blue-600 text-white px-4 py-2 rounded-lg flex items-center gap-2">
          <Plus size={20} />
          New Contract
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {contracts.map((contract) => (
          <ContractCard key={contract.id} contract={contract} darkMode={darkMode} />
        ))}
      </div>
    </div>
  );
}