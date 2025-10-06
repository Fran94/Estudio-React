import { UserModalForm } from "../components/UserModalForm";
import { UsersList } from "../components/UsersList";
import { useUsers } from "../hook/useUsers";

export const UsersPage = () => {

    const {
        users,
        userSelected,
        initialUsersFrom,
        visibleForm,
        handleAddUser,
        handleRemoveUser,
        handleUserSelectedForm,
        handleOpenForm,
        handleCloseForm,
    } = useUsers();

    return (
        <>
            {!visibleForm ||
                <UserModalForm
                    handleAddUser={handleAddUser}
                    handleCloseForm={handleCloseForm}
                    initialUsersFrom={initialUsersFrom}
                    userSelected={userSelected}
                />
            }
            <div className="container my-4">
                <h2>Users App</h2>
                <div className="row">
                    <div className="col">
                        {visibleForm || <button
                            className="btn btn-primary my-2"
                            onClick={handleOpenForm}>
                            Nuevo usuario
                        </button>}
                        {
                            users.length === 0
                                ? <div className="alert alert-warning">No hay usuarios en el sistema!</div>
                                : <UsersList
                                    users={users}
                                    handleRemoveUser={handleRemoveUser}
                                    handleUserSelectedForm={handleUserSelectedForm}
                                />
                        }

                    </div>
                </div>
            </div>
        </>
    );
}