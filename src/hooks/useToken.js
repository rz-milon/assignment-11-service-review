import { toast } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

const useToken = () => {
    const navigate = useNavigate()
    // get jwt token
    const token = (currentUser) => {
        fetch("https://assignment-11-server-two-theta.vercel.app/jwt", {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(currentUser)
        })
            .then((res) => res.json())
            .then((data) => {
                localStorage.setItem("access-token", data.token);
                toast.success("Good job!", "Login successfully");
                navigate("/")
            })
            .catch((err) => console.log(err))
    }

    return token
};

export default useToken;