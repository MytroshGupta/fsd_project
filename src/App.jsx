import { Link } from "react-router-dom";
import "./styles.css";

function App() {
  return (
    <div className="container">
      <header className="hero">
        <h1>🛡️ Online Crime Reporting System</h1>
        <p>Your safety is our priority. Report crimes anonymously and securely.</p>
        <Link to="/report">
          <button className="report-btn">📢 Add Report</button>
        </Link>
      </header>

      <section className="guidelines">
        <h2>📜 How to Report a Crime?</h2>
        <ul>
          <li>✅ Provide accurate details about the incident.</li>
          <li>✅ Specify the location clearly.</li>
          <li>✅ Attach any relevant evidence if possible.</li>
          <li>✅ Your identity remains confidential.</li>
        </ul>
      </section>

      <footer>
        <p>📞 Emergency Helpline: 100 | 🚔 Report Suspicious Activity</p>
      </footer>
    </div>
  );
}

export default App;
