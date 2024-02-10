// Define the NAvBAr component

export default function NavBar(){
    return(
      <div>
        <NavLink
        to="/"
        exact
        style={linkStyles}
        activeStyle={{background:"darkblue",}}
        >
          Home
        </NavLink>
        <NavLink to="/about" exact style={linkStyles} activeStyle={{background:"darkblue"}}>
          About
        </NavLink>
        <NavLink to="/login" exact style={linkStyles} activeStyle={{background: "darkblue"}}>
          Login
        </NavLink>
      </div>
    )
  }