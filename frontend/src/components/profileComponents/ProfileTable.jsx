import React from "react";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { updateUserProfile } from "../../Redux/Action/ProductAction";
import Message from "../LoadingError/Error"
import Loading from "../LoadingError/Loading"
import Toast from "../LoadingError/Toast";

const ProfileTable = () => {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("")
    const [confirmpassword, setConfirmpassword] = useState("")
    const toastId = React.useRef(null)


    const Toastobjects = {
        pauseOnFocusLoss: false,
        draggable: false,
        pauseOnHover: false,
        autoClose: 2000
    }

    const dispatch = useDispatch()

    const userDetails = useSelector((state) => state.userDetails);
    const { loading, error, user } = userDetails

    const userUpdateProfile = useSelector((state) => state.userUpdateProfile);
    const { loading: updateLoading } = userUpdateProfile

    useEffect(() => {
        if (user) {
            setName(user.name)
            setEmail(user.email)
        }
    }, [dispatch, user])

    const submitHandler = (e) => {
        e.preventDefault()
        if (password !== confirmpassword) {
            if (!toast.isActive(toastId.current)) {

                toastId.current = toast.error("Password does not Match", Toastobjects)
            }
        }
        else {
            dispatch(updateUserProfile({ id: user._id, name, email, password }))
            if (!toast.isActive(toastId.current)) {

                toastId.current = toast.success("Profile Updated", Toastobjects)
            }

        }
    }

    return (
        <>
            <Toast />
            {
                error && <Message variant="alert-danger">{error}</Message>
            }
            {
                loading && <Loading />
            }
            {
                updateLoading && <Loading />
            }
            <form action="" className="row form-container" onSubmit={submitHandler}>
                <div className="col-md-6">
                    <div className="form">
                        <label htmlFor="accout-fn">Username</label>
                        <input type="text" className="form-control" value={name} onChange={(e) => setName(e.target.value)} />
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="form">
                        <label htmlFor="accout-fn">E-mail Address</label>
                        <input type="email" className="form-control" required value={email} onChange={(e) => setEmail(e.target.value)} />
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="form">
                        <label htmlFor="accout-fn">New Password</label>
                        <input type="password" className="form-control" required value={password} onChange={(e) => setPassword(e.target.value)} />
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="form">
                        <label htmlFor="accout-fn">Confirm Password</label>
                        <input type="password" className="form-control" required value={confirmpassword} onChange={(e) => setConfirmpassword(e.target.value)} />
                    </div>
                </div>
                <button type="submit">Update Profile</button>
            </form>
        </>
    )
}

export default ProfileTable;