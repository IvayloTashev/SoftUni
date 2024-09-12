import Search from "../search/Search";
import Pagination from "../pagination/Pagination";
import UserList from "./user-list/UserList";
import { useEffect, useState } from "react";
import UserAdd from "./user-add/UserAdd";
import UserDetails from "./user-details/UserDetails";
import UserDelete from "./user-delete/UserDelete";

const baseUrl = 'http://localhost:3030/jsonstore';

export default function UserSection() {
    const [users, setUsers] = useState([]);
    const [showAddUser, setShowAddUser] = useState(false);
    const [showUserDetailsById, setShowUserDetailsById] = useState(null);
    const [showUserDeleteById, setShowUserDeleteById] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        async function getUSers() {
            try {
                const response = await fetch(`${baseUrl}/users`);
                const result = await response.json();
                const users = Object.values(result);
                setUsers(users);

            } catch (error) {
                alert(error.message);

            } finally {
                setIsLoading(false)
            }
        }

        getUSers();
    }, []);

    const addUserClickHandler = () => {
        setShowAddUser(true);
    }

    const addUserCloseHandler = () => {
        setShowAddUser(false);
    }

    const showUserDetailsClickHandler = (userId) => {
        setShowUserDetailsById(userId);
    }

    const userDeleteClickHandler = (userId) => {
        setShowUserDeleteById(userId);
    }

    const userDeleteHandler = async (userId) => {
        await fetch(`${baseUrl}/users/${userId}`, {
            method: 'DELETE'
        });

        setUsers(oldUsers => oldUsers.filter(user => user._id != userId));

        setShowUserDeleteById(null);
    }

    const addUserSaveHandler = async (event) => {
        event.preventDefault();

        const formData = new FormData(event.currentTarget);
        const userData = {
            firstName: formData.get('firstName'),
            lastName: formData.get('lastName'),
            email: formData.get('email'),
            phoneNumber: formData.get('phoneNumber'),
            imageUrl: formData.get('imageUrl'),
            address: {
                country: formData.get('country'),
                city: formData.get('city'),
                street: formData.get('street'),
                streetNumber: formData.get('streetNumber'),
            },
            createdAt: new Date().toISOString(),
            updatedAt: new Date().toISOString(),
        }

        const response = await fetch(`${baseUrl}/users`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(userData)
        });

        const createdUser = await response.json();

        setUsers(oldUsers => [...oldUsers, createdUser]);

        setShowAddUser(false);

    }

    return (
        <section className="card users-container">

            <Search />

            <UserList
                users={users}
                onUserDetailsClick={showUserDetailsClickHandler}
                onDelete={userDeleteClickHandler}
                isLoading={isLoading}
            />

            {showAddUser && (
                <UserAdd
                    onClose={addUserCloseHandler}
                    onSave={addUserSaveHandler}
                />
            )}

            {showUserDetailsById && (
                <UserDetails
                    user={users.find(user => user._id == showUserDetailsById)}
                    onclose={() => showUserDetailsClickHandler(null)}
                />
            )}

            {showUserDeleteById && (
                <UserDelete
                onClose={() => userDeleteClickHandler(null)}
                onUserDelete={() => userDeleteHandler(showUserDeleteById)}
                />
            )}

            <button className="btn-add btn" onClick={addUserClickHandler}>Add new user</button>

            <Pagination />

        </section>
    );
}