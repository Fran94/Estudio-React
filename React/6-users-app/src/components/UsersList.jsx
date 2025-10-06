import { UserRow } from "./UserRow";

export const UsersList = ({ users = [], handleRemoveUser, handleUserSelectedForm }) => {
    return (
        <table className="table table-hover table-striped">
            <thead>
                <tr>
                    <th>#</th>
                    <th>Username</th>
                    <th>Email</th>
                    <th>Update</th>
                    <th>Remove</th>
                </tr>
            </thead>
            <tbody>
                {users.map(({id, username, email}) => (
                    <UserRow key={id}
                        id={id}
                        username={username}
                        email={email} 
                        handleRemoveUser={handleRemoveUser}
                        handleUserSelectedForm={handleUserSelectedForm}/>
                ))}
            </tbody>
        </table>
    );
}