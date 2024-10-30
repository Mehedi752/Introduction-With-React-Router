import {useLoaderData } from "react-router-dom";
import User from "./User";

const Users = () => {
    const users = useLoaderData();
    return (
        <div>
            <h2 className="">Our Users</h2>
            <h2 className="mb-6">Users Length: {users.length}</h2>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {
                    users.map(user => (
                        <User key={user.id} user={user}></User>
                    ))
                }
            </div>
        </div>
    );
};

export default Users;