import { AuthProvider, useAuth } from "./AuthContext";
import Dashboard from "./Dashboard";
import LandingPage from "./LandingPage";

function App() {
  return (
    <AuthProvider>
      <AppContent />
    </AuthProvider>
  );
}

function AppContent() {
  const { user } = useAuth();
  return user ? <Dashboard /> : <LandingPage />;
}

export default App;
