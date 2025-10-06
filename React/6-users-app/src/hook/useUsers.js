import { useReducer, useState } from "react";
import { userReducer } from "../reducers/usersReducer";
import Swal from "sweetalert2";

const initialUsers = [
    {
        id: 1,
        username: 'pepe',
        password: '12345',
        email: 'pepe@correo.com'
    },

];

const initialUsersFrom = {
    id: 0,
    username: '',
    password: '',
    email: ''
}

export const useUsers = () => {

    const [users, dispatch] = useReducer(userReducer, initialUsers);
    const [userSelected, setUserSelected] = useState(initialUsersFrom);
    const [visibleForm, setVisibleForm] = useState(false);

    const handleAddUser = (user) => {
        //console.log(user);

        dispatch({
            type: (user.id === 0) ? 'addUser' : 'updateUser',
            payload: user,
        })

        Swal.fire({
            title:  (user.id === 0) ? "Usuario creado!" : "Usuario actualizado!",
            text: (user.id === 0) ? "El usuario ha sido creado con exito!" : "El usuario ha sido actualizado con exito!",
            icon: "success",
        });
        handleCloseForm();
    }

    const handleRemoveUser = (id) => {
        //console.log(id);

        Swal.fire({
            title: "Estas seguro que desea eliminar?",
            text: "Cuidado el usuario sera eliminado !",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Si, eliminar"
        }).then((result) => {
            if (result.isConfirmed) {
                dispatch({
                    type: 'removeUser',
                    payload: id,
                })
                Swal.fire({
                    title: "Usuario eliminado!",
                    text: "El usuario ha sido eliminado con exito!",
                    icon: "success"
                });
            }
        });
    }

    const handleUserSelectedForm = (user) => {
        //console.log(user);
        setUserSelected({ ...user });
        setVisibleForm(true);
    }

    const handleOpenForm = () => {
        setVisibleForm(true);

    }

    const handleCloseForm = () => {
        setVisibleForm(false);
        setUserSelected(initialUsersFrom);
        console.log('cerrando formulario');
    }

    return {
        users,
        userSelected,
        initialUsersFrom,
        visibleForm,
        handleAddUser,
        handleRemoveUser,
        handleUserSelectedForm,
        handleOpenForm,
        handleCloseForm,
    }
}