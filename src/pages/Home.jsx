import { createGraphiQLFetcher } from '@graphiql/toolkit';
import { GraphiQL } from 'graphiql';
import { useEffect, useState } from "react";
import 'graphiql/graphiql.css';

const Home = () => {
  const [location, setLocation] = useState("http://localhost:28080/graphql")
  const [inputValue, setinputValue] = useState("http://localhost:28080/graphql")


   let fetcher = createGraphiQLFetcher({url:location});
  

  useEffect(() => {
    fetcher = createGraphiQLFetcher({url:location});
    console.log("location: ", location)
  },
  [location])

  function handleLocationChange (e) {
    let newLocation = e.target.innerText
    // setLocation(newLocation)
    setinputValue(newLocation)
  }

  function handleChange(e){
    console.log(e.target.value)
    setinputValue(e.target.value)
  }

  return (
    <>
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary p-0">
    <div className="container-fluid">

      <a className="navbar-brand px-2" href="#">GraphQL</a>

      <div className="input-group m-2">
      <div className="collapse navbar-collapse" id="navbarNavDarkDropdown">
        <ul className="navbar-nav border border-secondary rounded-start w-100">
          <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle px-3" href="#" id="navbarDarkDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Location
            </a>
            <ul className="dropdown-menu dropdown-menu-dark" aria-labelledby="navbarDarkDropdownMenuLink">
              <li><a className="dropdown-item" onClick={handleLocationChange}>http://localhost:28080/graphql</a></li>
              <li><a className="dropdown-item" onClick={handleLocationChange}>http://localhost:28080/admin</a></li>
              <li><a className="dropdown-item" onClick={handleLocationChange}>https://preprod-sunflower.m2tec.nl/cardano-graphql</a></li>
            </ul>
          </li>
        </ul>
      </div>

      <input type="text" className="form-control w-75" onChange={handleChange} value={inputValue} placeholder="http://" aria-label="Username" aria-describedby="basic-addon1" />

      </div>

    </div>
  </nav>



    <GraphiQL fetcher={fetcher} />
    </>

  )
};

export default Home;


