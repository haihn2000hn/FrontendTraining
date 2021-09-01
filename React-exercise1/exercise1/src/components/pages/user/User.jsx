import "./user.css"
import { PermIdentity, CalendarToday, PhoneAndroid, MailOutline, LocationSearching, Publish } from '@material-ui/icons'
import { Link } from 'react-router-dom'

export default function User() {
    return (
        <div className="user">
            <div className="userTitleContainer">
                <h1 className="userTitle">Edit User</h1>
                <Link to="/newUser">
                    <button className="userAddButton">Create</button>
                </Link>
            </div>
            <div className="userContainer">
                <div className="userShow">
                    <div className="userShowTop">
                        <img src="https://images.unsplash.com/photo-1630329800718-82ba6cb50d5d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80" alt="" className="userShowImg"/>
                        <div className="userShowTopTitle">
                            <span className="userShowUserName">Anna Becker</span>
                            <span className="userShowUserTitle">Software Engineer</span>
                        </div>
                    </div>
                    <div className="userShowBottom">
                        <span className="userShowTitle">
                            Account Detail
                            <div className="userShowInfo">
                                <PermIdentity className="userShowIcon"/>
                                <span className="userShowInfoTitle">annabeck99</span>
                            </div>
                        </span>
                        <span className="userShowTitle">
                            <div className="userShowInfo">
                                <CalendarToday className="userShowIcon"/>
                                <span className="userShowInfoTitle">10.12.1999</span>
                                </div>
                        </span>
                        <span className="userShowTitle">
                            Contact Details
                            <div className="userShowInfo">
                                <PhoneAndroid className="userShowIcon"/>
                                <span className="userShowInfoTitle">+1 234 567</span>
                            </div>
                        </span>
                        <span className="userShowTitle">
                            <div className="userShowInfo">
                                <MailOutline className="userShowIcon"/>
                                <span className="userShowInfoTitle">annabeck99@gmail.com</span>
                            </div>
                        </span>
                        <span className="userShowTitle">
                            <div className="userShowInfo">
                                <LocationSearching className="userShowIcon"/>
                                <span className="userShowInfoTitle">New York | USA</span>
                            </div>    
                        </span>
                    </div>
                </div>
                <div className="userUpdate">
                    <span className="userUpdateTitle">Edit</span>
                    <form className="userUpdateForm">
                        <div className="userUpdateLeft">
                            <div className="userUpdateItem">
                                <label>Username</label>
                                <input type="text" placeholder="annabeck99" className="userUpdateInput"/>
                            </div>
                            <div className="userUpdateItem">
                                <label>Full Name</label>
                                <input type="text" placeholder="Anna Becker" className="userUpdateInput"/>
                            </div>
                            <div className="userUpdateItem">
                                <label>Phone Number</label>
                                <input type="text" placeholder="+1 234 567" className="userUpdateInput"/>
                            </div>
                            <div className="userUpdateItem">
                                <label>Email</label>
                                <input type="text" placeholder="annabeck99@gmail.com" className="userUpdateInput"/>
                            </div>
                            <div className="userUpdateItem">
                                <label>Address</label>
                                <input type="text" placeholder="New York | USA" className="userUpdateInput"/>
                            </div>
                        </div>
                        <div className="userUpdateRight">
                            <div className="userUpdateUpload">
                                <img src="https://images.unsplash.com/photo-1630329800718-82ba6cb50d5d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80" alt="" className="userUpdateImg"/>
                                <label htmlFor="file"><Publish className="userUpdateIcon"/></label>
                                <input type="file" id="file" style={{display:"none"}}/>
                            </div>
                            <button className="userUpdateButton">
                                Update
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}
