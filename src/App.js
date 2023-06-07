import UserForm from "./components/user-form/UserForm";

import "./App.css";
import Header from "./components/Header/Header";
import { useState } from "react";
import UserTable from "./components/user-table/UserTable";
import UserCards from "./components/user-cards/UserCards";

function App() {
  const pages = ["User Form", "User Table", "User Cards"];
  const [currentTab, setCurrentTab] = useState("user-form");
  const [userData,setUserData] = useState([]);

  const addUserData = (userObj) => {
    console.log('userObj', userObj);
     const newuserData = [...userData, userObj];
     setUserData(newuserData)

  }
  // const currentPage = currentTab === pages[0] ? <UserForm /> : <UserTable />;

  let currentPage = <span>Selecte CUrrent Tab</span>;

  if (currentTab === pages[0]) {

    currentPage = <UserForm  addUserData={addUserData} />;

  } else if (currentTab === pages[1]) {

    currentPage = <UserTable userData={userData} />;

  } else if (currentTab === pages[2]) {

    currentPage = <UserCards   userData={userData}/>;
  }else {
    currentPage = <span>Selecte CUrrent Tab</span>
  }

  return (
    <div className="App">
      <Header setCurrentTab={setCurrentTab} pages={pages} />
      <span className="fontSi">currentTab===={currentTab}</span>
      <br></br>
      {currentPage}
    </div>
  );
}

export default App;
