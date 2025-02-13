import { useState } from "react";
import {
  Plus,
  CreditCard,
  Wallet,
  Lock,
  Eye,
  EyeOff,
  Copy,
  ArrowUpRight,
  ArrowDownRight,
} from "lucide-react";

interface Transaction {
  id: number;
  merchant: string;
  amount: number;
  date: string;
  type: "purchase" | "credit";
}

interface Card {
  id: number;
  type: "Virtual" | "Physical";
  name: string;
  number: string;
  expiry: string;
  limit: number;
  spent: number;
  status: "Active" | "Inactive";
  transactions: Transaction[];
}

const cards: Card[] = [
  {
    id: 1,
    type: "Virtual",
    name: "John Doe",
    number: "4532 •••• •••• 7895",
    expiry: "12/25",
    limit: 10000,
    spent: 2360,
    status: "Active",
    transactions: [
      {
        id: 1,
        merchant: "Amazon",
        amount: 299.99,
        date: "2024-02-20",
        type: "purchase",
      },
      {
        id: 2,
        merchant: "Uber",
        amount: 24.5,
        date: "2024-02-19",
        type: "purchase",
      },
      {
        id: 3,
        merchant: "Limit Increase",
        amount: 5000,
        date: "2024-02-18",
        type: "credit",
      },
    ],
  },
  {
    id: 2,
    type: "Physical",
    name: "Jane Smith",
    number: "4789 •••• •••• 1234",
    expiry: "09/26",
    limit: 5000,
    spent: 1250,
    status: "Active",
    transactions: [
      {
        id: 1,
        merchant: "Starbucks",
        amount: 5.75,
        date: "2024-02-20",
        type: "purchase",
      },
      {
        id: 2,
        merchant: "Office Supplies",
        amount: 125.3,
        date: "2024-02-19",
        type: "purchase",
      },
    ],
  },
];

interface CardDetailsProps {
  card: Card;
  darkMode: boolean;
  showCardNumber: boolean;
  onToggleCardNumber: () => void;
}

const CardDetails = ({
  card,
  darkMode,
  showCardNumber,
  onToggleCardNumber,
}: CardDetailsProps) => {
  const spentPercentage = (card.spent / card.limit) * 100;

  return (
    <div className={`p-6 rounded-lg ${darkMode ? "bg-gray-800" : "bg-white"} shadow-sm`}>
      <div className="flex justify-between items-start mb-6">
        <div>
          <span
            className={`px-2 py-1 text-xs rounded-full ${
              darkMode ? "bg-blue-900 text-blue-200" : "bg-blue-100 text-blue-800"
            }`}
          >
            {card.type}
          </span>
          <h3
            className={`mt-2 text-lg font-medium ${
              darkMode ? "text-white" : "text-gray-900"
            }`}
          >
            {card.name}
          </h3>
        </div>
        <div
          className={`px-2 py-1 text-xs rounded-full ${
            card.status === "Active"
              ? darkMode
                ? "bg-green-900 text-green-200"
                : "bg-green-100 text-green-800"
              : darkMode
              ? "bg-red-900 text-red-200"
              : "bg-red-100 text-red-800"
          }`}
        >
          {card.status}
        </div>
      </div>

      <div
        className={`p-4 rounded-lg ${darkMode ? "bg-gray-700" : "bg-gray-50"} mb-6`}
      >
        <div className="flex justify-between items-center mb-2">
          <span className={darkMode ? "text-gray-400" : "text-gray-600"}>
            Card Number
          </span>
          <button
            onClick={onToggleCardNumber}
            className={`p-1 rounded hover:${
              darkMode ? "bg-gray-600" : "bg-gray-200"
            }`}
          >
            {showCardNumber ? (
              <EyeOff
                size={16}
                className={darkMode ? "text-gray-400" : "text-gray-600"}
              />
            ) : (
              <Eye
                size={16}
                className={darkMode ? "text-gray-400" : "text-gray-600"}
              />
            )}
          </button>
        </div>
        <div className="flex gap-2 items-center">
          <span
            className={`font-mono text-lg ${
              darkMode ? "text-white" : "text-gray-900"
            }`}
          >
            {card.number}
          </span>
          <button
            className={`p-1 rounded hover:${
              darkMode ? "bg-gray-600" : "bg-gray-200"
            }`}
          >
            <Copy
              size={16}
              className={darkMode ? "text-gray-400" : "text-gray-600"}
            />
          </button>
        </div>
        <div className="flex gap-4 mt-2">
          <div>
            <span className={darkMode ? "text-gray-400" : "text-gray-600"}>
              Expiry
            </span>
            <p className={`font-medium ${darkMode ? "text-white" : "text-gray-900"}`}>
              {card.expiry}
            </p>
          </div>
          <div>
            <span className={darkMode ? "text-gray-400" : "text-gray-600"}>CVV</span>
            <p className={`font-medium ${darkMode ? "text-white" : "text-gray-900"}`}>
              •••
            </p>
          </div>
        </div>
      </div>

      <div className="space-y-4">
        <div>
          <div className="flex justify-between mb-2">
            <span className={darkMode ? "text-gray-400" : "text-gray-600"}>
              Spent
            </span>
            <span
              className={`font-medium ${darkMode ? "text-white" : "text-gray-900"}`}
            >
              ${card.spent.toLocaleString()}
            </span>
          </div>
          <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded-full">
            <div
              className="h-full bg-blue-600 rounded-full"
              style={{ width: `${spentPercentage}%` }}
            />
          </div>
          <div className="flex justify-between mt-2">
            <span className={darkMode ? "text-gray-400" : "text-gray-600"}>
              Limit
            </span>
            <span
              className={`font-medium ${darkMode ? "text-white" : "text-gray-900"}`}
            >
              ${card.limit.toLocaleString()}
            </span>
          </div>
        </div>

        <div className={`p-4 rounded-lg ${darkMode ? "bg-gray-700" : "bg-gray-50"}`}>
          <h4
            className={`font-medium mb-3 ${darkMode ? "text-white" : "text-gray-900"}`}
          >
            Recent Transactions
          </h4>
          <div className="space-y-3">
            {card.transactions.map((transaction) => (
              <div
                key={transaction.id}
                className="flex justify-between items-center"
              >
                <div className="flex items-center gap-3">
                  <div
                    className={`p-2 rounded-lg ${
                      transaction.type === "purchase"
                        ? darkMode
                          ? "bg-red-900"
                          : "bg-red-100"
                        : darkMode
                        ? "bg-green-900"
                        : "bg-green-100"
                    }`}
                  >
                    {transaction.type === "purchase" ? (
                      <ArrowUpRight
                        size={16}
                        className={darkMode ? "text-red-200" : "text-red-600"}
                      />
                    ) : (
                      <ArrowDownRight
                        size={16}
                        className={darkMode ? "text-green-200" : "text-green-600"}
                      />
                    )}
                  </div>
                  <div>
                    <p
                      className={`font-medium ${
                        darkMode ? "text-white" : "text-gray-900"
                      }`}
                    >
                      {transaction.merchant}
                    </p>
                    <p
                      className={`text-sm ${
                        darkMode ? "text-gray-400" : "text-gray-500"
                      }`}
                    >
                      {transaction.date}
                    </p>
                  </div>
                </div>
                <span
                  className={`font-medium ${
                    transaction.type === "purchase"
                      ? "text-red-500"
                      : "text-green-500"
                  }`}
                >
                  {transaction.type === "purchase" ? "-" : "+"}$
                  {transaction.amount.toLocaleString()}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

interface CardsPageProps {
  darkMode: boolean;
}

export function CardsPage({ darkMode }: CardsPageProps) {
  const [showCardNumber, setShowCardNumber] = useState(false);

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className={`text-2xl font-semibold ${darkMode ? "text-white" : ""}`}>
          Cards
        </h1>
        <button className="bg-blue-600 text-white px-4 py-2 rounded-lg flex items-center gap-2 hover:bg-blue-700 transition-colors">
          <Plus size={20} />
          New Card
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
              <CreditCard
                size={20}
                className={darkMode ? "text-blue-200" : "text-blue-600"}
              />
            </div>
            <span className={darkMode ? "text-gray-300" : "text-gray-500"}>
              Active Cards
            </span>
          </div>
          <div className={`text-2xl font-semibold ${darkMode ? "text-white" : ""}`}>
            {cards.filter((card) => card.status === "Active").length}
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
              <Wallet
                size={20}
                className={darkMode ? "text-blue-200" : "text-blue-600"}
              />
            </div>
            <span className={darkMode ? "text-gray-300" : "text-gray-500"}>
              Total Spent
            </span>
          </div>
          <div className={`text-2xl font-semibold ${darkMode ? "text-white" : ""}`}>
            ${cards.reduce((acc, card) => acc + card.spent, 0).toLocaleString()}
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
              <Lock
                size={20}
                className={darkMode ? "text-blue-200" : "text-blue-600"}
              />
            </div>
            <span className={darkMode ? "text-gray-300" : "text-gray-500"}>
              Available Credit
            </span>
          </div>
          <div className={`text-2xl font-semibold ${darkMode ? "text-white" : ""}`}>
            $
            {cards
              .reduce((acc, card) => acc + (card.limit - card.spent), 0)
              .toLocaleString()}
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {cards.map((card) => (
          <CardDetails
            key={card.id}
            card={card}
            darkMode={darkMode}
            showCardNumber={showCardNumber}
            onToggleCardNumber={() => setShowCardNumber(!showCardNumber)}
          />
        ))}
      </div>
    </div>
  );
}