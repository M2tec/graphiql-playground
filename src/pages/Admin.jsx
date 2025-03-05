import NavBar from '../components/NavBar';
import MyGraphQLIDE from '../components/GraphiQL'

const Admin = () => {

  return (
    <>
      <NavBar />

      <MyGraphQLIDE
        admin={true}
        />  
    </>

  )
};

export default Admin;




