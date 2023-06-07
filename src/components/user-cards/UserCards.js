const UserCards = (props) => {
    const { userData } = props;
    console.log('userData',userData)
    const allUserData = userData.map((userObj) => {
       return ( 
        <ul>
            <li> Name : {userObj.name} </li>
            <li> age : {userObj.age} </li>
            <li> college : {userObj.college}  </li>
            <li> gender : {userObj.gender}  </li>
            <li> dob : {userObj.dob}  </li>
        </ul>
       )
    })
    return (
       <div>
          <span>User table</span>
         {allUserData}
       </div>
    )
};  

export default UserCards;