import { useState } from "react";
import {
  User,
  Building2,
  Shield,
  Bell,
  CreditCard,
  Languages,
  HelpCircle,
  ChevronRight,
  AtSign,
  Phone,
  MapPin,
  Globe,
  Lock,
  BellRing,
  Smartphone,
  Mail,
  AlertCircle,
  CheckCircle2,
} from "lucide-react";
import { useAuth } from "../AuthContext";

interface SettingsSection {
  id: string;
  title: string;
  icon: any;
  description: string;
}

const sections: SettingsSection[] = [
  {
    id: "profile",
    title: "Profile Information",
    icon: User,
    description: "Manage your personal information and preferences"
  },
  {
    id: "company",
    title: "Company Details",
    icon: Building2,
    description: "Update your company information and business details"
  },
  {
    id: "security",
    title: "Security Settings",
    icon: Shield,
    description: "Control your account security and authentication methods"
  },
  {
    id: "notifications",
    title: "Notifications",
    icon: Bell,
    description: "Configure how and when you receive notifications"
  },
  {
    id: "billing",
    title: "Billing & Payments",
    icon: CreditCard,
    description: "Manage your payment methods and billing preferences"
  },
  {
    id: "language",
    title: "Language & Region",
    icon: Languages,
    description: "Set your preferred language and regional settings"
  },
  {
    id: "help",
    title: "Help & Support",
    icon: HelpCircle,
    description: "Get help and access support resources"
  }
];

interface ProfileFormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  address: string;
  website: string;
}

interface NotificationSetting {
  id: string;
  title: string;
  description: string;
  email: boolean;
  push: boolean;
  sms: boolean;
}

const defaultNotificationSettings: NotificationSetting[] = [
  {
    id: "payments",
    title: "Payment Updates",
    description: "Get notified when you receive payments or refunds",
    email: true,
    push: true,
    sms: false
  },
  {
    id: "security",
    title: "Security Alerts",
    description: "Receive alerts about security issues and unusual activity",
    email: true,
    push: true,
    sms: true
  },
  {
    id: "reminders",
    title: "Reminders",
    description: "Get reminded about upcoming payments and deadlines",
    email: true,
    push: false,
    sms: false
  }
];

interface SettingsPageProps {
  darkMode: boolean;
}

export function SettingsPage({ darkMode }: SettingsPageProps) {
  const { user } = useAuth();
  const [activeSection, setActiveSection] = useState("profile");
  const [profileData, setProfileData] = useState<ProfileFormData>({
    firstName: user?.name.split(" ")[0] || "",
    lastName: user?.name.split(" ")[1] || "",
    email: user?.email || "",
    phone: "",
    address: "",
    website: ""
  });
  const [notificationSettings, setNotificationSettings] = useState<NotificationSetting[]>(defaultNotificationSettings);

  const handleProfileUpdate = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle profile update logic here
    console.log("Profile updated:", profileData);
  };

  const toggleNotification = (settingId: string, channel: "email" | "push" | "sms") => {
    setNotificationSettings(settings =>
      settings.map(setting =>
        setting.id === settingId
          ? { ...setting, [channel]: !setting[channel] }
          : setting
      )
    );
  };

  const renderProfileSection = () => (
    <form onSubmit={handleProfileUpdate} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className={`block text-sm font-medium ${darkMode ? "text-gray-300" : "text-gray-700"}`}>
            First Name
          </label>
          <input
            type="text"
            value={profileData.firstName}
            onChange={(e) => setProfileData({ ...profileData, firstName: e.target.value })}
            className={`mt-1 block w-full rounded-md ${
              darkMode
                ? "bg-gray-700 border-gray-600 text-white"
                : "bg-white border-gray-300"
            } shadow-sm focus:border-blue-500 focus:ring-blue-500`}
          />
        </div>
        <div>
          <label className={`block text-sm font-medium ${darkMode ? "text-gray-300" : "text-gray-700"}`}>
            Last Name
          </label>
          <input
            type="text"
            value={profileData.lastName}
            onChange={(e) => setProfileData({ ...profileData, lastName: e.target.value })}
            className={`mt-1 block w-full rounded-md ${
              darkMode
                ? "bg-gray-700 border-gray-600 text-white"
                : "bg-white border-gray-300"
            } shadow-sm focus:border-blue-500 focus:ring-blue-500`}
          />
        </div>
        <div>
          <label className={`block text-sm font-medium ${darkMode ? "text-gray-300" : "text-gray-700"}`}>
            Email
          </label>
          <div className="mt-1 flex rounded-md shadow-sm">
            <span className={`inline-flex items-center px-3 rounded-l-md border border-r-0 ${
              darkMode
                ? "bg-gray-700 border-gray-600 text-gray-300"
                : "bg-gray-50 border-gray-300 text-gray-500"
            }`}>
              <AtSign size={16} />
            </span>
            <input
              type="email"
              value={profileData.email}
              onChange={(e) => setProfileData({ ...profileData, email: e.target.value })}
              className={`flex-1 block w-full rounded-none rounded-r-md ${
                darkMode
                  ? "bg-gray-700 border-gray-600 text-white"
                  : "bg-white border-gray-300"
              } focus:border-blue-500 focus:ring-blue-500`}
            />
          </div>
        </div>
        <div>
          <label className={`block text-sm font-medium ${darkMode ? "text-gray-300" : "text-gray-700"}`}>
            Phone Number
          </label>
          <div className="mt-1 flex rounded-md shadow-sm">
            <span className={`inline-flex items-center px-3 rounded-l-md border border-r-0 ${
              darkMode
                ? "bg-gray-700 border-gray-600 text-gray-300"
                : "bg-gray-50 border-gray-300 text-gray-500"
            }`}>
              <Phone size={16} />
            </span>
            <input
              type="tel"
              value={profileData.phone}
              onChange={(e) => setProfileData({ ...profileData, phone: e.target.value })}
              className={`flex-1 block w-full rounded-none rounded-r-md ${
                darkMode
                  ? "bg-gray-700 border-gray-600 text-white"
                  : "bg-white border-gray-300"
              } focus:border-blue-500 focus:ring-blue-500`}
            />
          </div>
        </div>
        <div className="md:col-span-2">
          <label className={`block text-sm font-medium ${darkMode ? "text-gray-300" : "text-gray-700"}`}>
            Address
          </label>
          <div className="mt-1 flex rounded-md shadow-sm">
            <span className={`inline-flex items-center px-3 rounded-l-md border border-r-0 ${
              darkMode
                ? "bg-gray-700 border-gray-600 text-gray-300"
                : "bg-gray-50 border-gray-300 text-gray-500"
            }`}>
              <MapPin size={16} />
            </span>
            <input
              type="text"
              value={profileData.address}
              onChange={(e) => setProfileData({ ...profileData, address: e.target.value })}
              className={`flex-1 block w-full rounded-none rounded-r-md ${
                darkMode
                  ? "bg-gray-700 border-gray-600 text-white"
                  : "bg-white border-gray-300"
              } focus:border-blue-500 focus:ring-blue-500`}
            />
          </div>
        </div>
        <div className="md:col-span-2">
          <label className={`block text-sm font-medium ${darkMode ? "text-gray-300" : "text-gray-700"}`}>
            Website
          </label>
          <div className="mt-1 flex rounded-md shadow-sm">
            <span className={`inline-flex items-center px-3 rounded-l-md border border-r-0 ${
              darkMode
                ? "bg-gray-700 border-gray-600 text-gray-300"
                : "bg-gray-50 border-gray-300 text-gray-500"
            }`}>
              <Globe size={16} />
            </span>
            <input
              type="url"
              value={profileData.website}
              onChange={(e) => setProfileData({ ...profileData, website: e.target.value })}
              className={`flex-1 block w-full rounded-none rounded-r-md ${
                darkMode
                  ? "bg-gray-700 border-gray-600 text-white"
                  : "bg-white border-gray-300"
              } focus:border-blue-500 focus:ring-blue-500`}
            />
          </div>
        </div>
      </div>
      <div className="flex justify-end">
        <button
          type="submit"
          className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
        >
          Save Changes
        </button>
      </div>
    </form>
  );

  const renderSecuritySection = () => (
    <div className="space-y-6">
      <div className={`p-4 rounded-lg ${darkMode ? "bg-gray-800" : "bg-white"} shadow-sm`}>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className={`p-2 rounded-lg ${darkMode ? "bg-gray-700" : "bg-gray-100"}`}>
              <Lock size={20} className={darkMode ? "text-gray-300" : "text-gray-600"} />
            </div>
            <div>
              <h3 className={`font-medium ${darkMode ? "text-white" : "text-gray-900"}`}>
                Password
              </h3>
              <p className={`text-sm ${darkMode ? "text-gray-400" : "text-gray-500"}`}>
                Last changed 3 months ago
              </p>
            </div>
          </div>
          <button className="text-blue-600 hover:text-blue-500">
            Change
          </button>
        </div>
      </div>

      <div className={`p-4 rounded-lg ${darkMode ? "bg-gray-800" : "bg-white"} shadow-sm`}>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className={`p-2 rounded-lg ${darkMode ? "bg-gray-700" : "bg-gray-100"}`}>
              <Smartphone size={20} className={darkMode ? "text-gray-300" : "text-gray-600"} />
            </div>
            <div>
              <h3 className={`font-medium ${darkMode ? "text-white" : "text-gray-900"}`}>
                Two-Factor Authentication
              </h3>
              <p className={`text-sm ${darkMode ? "text-gray-400" : "text-gray-500"}`}>
                Add an extra layer of security to your account
              </p>
            </div>
          </div>
          <button className="text-blue-600 hover:text-blue-500">
            Enable
          </button>
        </div>
      </div>
    </div>
  );

  const renderNotificationsSection = () => (
    <div className="space-y-6">
      {notificationSettings.map((setting) => (
        <div
          key={setting.id}
          className={`p-4 rounded-lg ${darkMode ? "bg-gray-800" : "bg-white"} shadow-sm`}
        >
          <div className="mb-4">
            <h3 className={`font-medium ${darkMode ? "text-white" : "text-gray-900"}`}>
              {setting.title}
            </h3>
            <p className={`text-sm ${darkMode ? "text-gray-400" : "text-gray-500"}`}>
              {setting.description}
            </p>
          </div>
          <div className="flex flex-wrap gap-4">
            <button
              onClick={() => toggleNotification(setting.id, "email")}
              className={`flex items-center gap-2 px-3 py-2 rounded-lg ${
                setting.email
                  ? "bg-blue-600 text-white"
                  : darkMode
                  ? "bg-gray-700 text-gray-300"
                  : "bg-gray-100 text-gray-600"
              }`}
            >
              <Mail size={16} />
              Email
            </button>
            <button
              onClick={() => toggleNotification(setting.id, "push")}
              className={`flex items-center gap-2 px-3 py-2 rounded-lg ${
                setting.push
                  ? "bg-blue-600 text-white"
                  : darkMode
                  ? "bg-gray-700 text-gray-300"
                  : "bg-gray-100 text-gray-600"
              }`}
            >
              <BellRing size={16} />
              Push
            </button>
            <button
              onClick={() => toggleNotification(setting.id, "sms")}
              className={`flex items-center gap-2 px-3 py-2 rounded-lg ${
                setting.sms
                  ? "bg-blue-600 text-white"
                  : darkMode
                  ? "bg-gray-700 text-gray-300"
                  : "bg-gray-100 text-gray-600"
              }`}
            >
              <Smartphone size={16} />
              SMS
            </button>
          </div>
        </div>
      ))}
    </div>
  );

  const renderContent = () => {
    switch (activeSection) {
      case "profile":
        return renderProfileSection();
      case "security":
        return renderSecuritySection();
      case "notifications":
        return renderNotificationsSection();
      default:
        return (
          <div className={`text-center py-12 ${darkMode ? "text-gray-400" : "text-gray-500"}`}>
            This section is under development
          </div>
        );
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className={`text-2xl font-semibold ${darkMode ? "text-white" : ""}`}>
          Settings
        </h1>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        {/* Settings Navigation */}
        <div className="lg:col-span-1 space-y-2">
          {sections.map((section) => (
            <button
              key={section.id}
              onClick={() => setActiveSection(section.id)}
              className={`w-full flex items-center justify-between p-3 rounded-lg transition-colors ${
                activeSection === section.id
                  ? darkMode
                    ? "bg-gray-800 text-white"
                    : "bg-white text-blue-600"
                  : darkMode
                  ? "text-gray-300 hover:bg-gray-800"
                  : "text-gray-600 hover:bg-white"
              }`}
            >
              <div className="flex items-center gap-3">
                <section.icon size={20} />
                <span>{section.title}</span>
              </div>
              <ChevronRight size={16} />
            </button>
          ))}
        </div>

        {/* Settings Content */}
        <div className="lg:col-span-3">
          <div className={`p-6 rounded-lg ${darkMode ? "bg-gray-800" : "bg-white"} shadow-sm`}>
            {renderContent()}
          </div>
        </div>
      </div>
    </div>
  );
}