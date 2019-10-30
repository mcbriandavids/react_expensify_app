
// import React from 'react'
// import ReactDOM from 'react-dom'


// // HIGHER ORDER COMPONENT

// const Info = (props) => {
//   return (
//     <div>
//       <h1>Info Page</h1>
//       <p>This info is: {props.info}</p>
//     </div>
//   )
// }

// const withAdminWarning = (WrapperComponent) => {
//   return (props) => (
//     <div>
//   {props.isAdmin &&   <p>This is a private info. Please don't share</p>}
//       <WrapperComponent {...props} />
//       <p>This is working</p>
//       </div>
//   )
// }
// const requireAuthentication = (WrapperComponents) => {
//   return (props) => (
//     <div>
//       {props.isAuth ?<WrapperComponents {...props}/>: <p>Please LogIn to view the info</p> }
      
//     </div>
//   )
// }
// const AuthInfo = requireAuthentication(Info)
// // const AdminInfo = withAdminWarning(Info)
// // ReactDOM.render(< AdminInfo isAdmin={false} info='There are the details'/>, document.getElementById('app'))
// ReactDOM.render(< AuthInfo isAuth={true} info='These are the details'/>, document.getElementById('app'))