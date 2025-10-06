import { useEffect, useState } from "react";
import Swal from "sweetalert2";

export const UserForm = ({ handleAddUser, handleCloseForm, initialUsersFrom, userSelected }) => {

    const [userForm, setUserForm] = useState(initialUsersFrom);

    const { id, username, password, email } = userForm;

    useEffect(() => {
        setUserForm({
            ...userSelected,
            password: '',
        });
    }, [userSelected])

    const onInputChange = ({ target }) => {
        const { name, value } = target;
        //console.log({name, value});
        setUserForm({
            ...userForm,
            [name]: value,
        })
    }

    const onSubmit = (event) => {
        event.preventDefault();
        if (!username || (!password && id === 0) || !email) {
            Swal.fire({
                title: "Error de validación",
                text: "Debes completar todos los campos",
                icon: "error"
            });

            return;
        }

        handleAddUser(userForm);
        //Guardar el userForm en el listado de usuarios
        setUserForm(initialUsersFrom);
    }

    const onCloseForm = () => {
        console.log('cerrar form');
        handleCloseForm();
        setUserForm(initialUsersFrom);
    }

    return (
        <form onSubmit={onSubmit}>
            <input
                className="form-control my-3 w-75"
                placeholder="Username"
                name="username"
                value={username}
                onChange={onInputChange} />
            {id > 0 || <input
                className="form-control my-3 w-75"
                placeholder="Password"
                type="password"
                name="password"
                value={password}
                onChange={onInputChange} />}

            <input
                className="form-control my-3 w-75"
                placeholder="Email"
                name="email"
                value={email}
                onChange={onInputChange} />
            <input type="hidden"
                name="id"
                value={id} />
            <button
                className="btn btn-primary"
                type="submit">
                {id > 0 ? 'Editar' : 'Crear'}
            </button>
            <button
                className="btn btn-primary mx-2"
                type="button"
                onClick={onCloseForm}>
                Cerrar
            </button>
        </form>
    );
}