import NavBar from '../components/NavBar';
import MyGraphQLIDE from '../components/GraphiQL'

const Home = () => {


  return (
    <>
      <NavBar />

      <MyGraphQLIDE
        admin={false}
        />  
    </>

  )
};

export default Home;


