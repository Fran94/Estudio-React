
export const UserRow = ({ id, username, email,  handleRemoveUser, handleUserSelectedForm }) => {

    return(
        <>
            <tr>
                <td>{id}</td>
                <td>{username}</td>
                <td>{email}</td>
                <td><button type="button"
                    className="btn btn-secondary btn-sm" onClick={() => handleUserSelectedForm({id, username, email})}>Update</button>
                </td>
                <td><button type="button"
                    className="btn btn-danger btn-sm" onClick={() => handleRemoveUser(id)}>Eliminar</button>
                </td>

            </tr>
        </>
    );
}