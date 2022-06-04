// import {useNavigate} from "react-router-dom";

function LogOut() {
    // const navigate = useNavigate();
    // navigate("/");
    sessionStorage.setItem("id", "");
      console.log("call ")
}

export default LogOut;
