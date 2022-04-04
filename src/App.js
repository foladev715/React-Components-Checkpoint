import "./App.css";
import Address from "./Components/Profile/Address";
import FullName from "./Components/Profile/FullName";
import ProfilePhoto from "./Components/Profile/ProfilePhoto";
import Footer from "./Components/Profile/Footer";

function App() {
  return (
    <div className="App">
      <h1>Personal Profile</h1>
      <hr className="hr_top" />
      <div className="profile">
        <ProfilePhoto />
        <div className="profile_info">
          <FullName />
          <Address />
        </div>
      </div>
      <hr className="hr_bottom" />

      <Footer />
    </div>
  );
}

export default App;
