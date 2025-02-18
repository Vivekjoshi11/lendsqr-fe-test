// import React, { useEffect, useState } from "react";
// import "../../styles/usertable.scss";

// interface User {
//   id: number;
//   organization: string;
//   username: string;
//   email: string;
//   phoneNumber: string;
//   dateJoined: string;
//   status: string;
// }

// const UserTable: React.FC = () => {
//   const [users, setUsers] = useState<User[]>([]);
//   const [loading, setLoading] = useState<boolean>(true);
//   const [error, setError] = useState<string | null>(null);

//   useEffect(() => {
//     const fetchUsers = async () => {
//       try {
//         const response = await fetch("https://run.mocky.io/v3/a910bfb3-2a90-4286-ad8d-d4ff228274a9");
//         if (!response.ok) {
//           throw new Error("Failed to fetch users");
//         }
//         const data = await response.json();
//         setUsers(data);
//       } catch (err: any) {
//         setError(err.message);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchUsers();
//   }, []);

//   return (
//     <div className="user-table-container">
//       {loading ? (
//         <p>Loading users...</p>
//       ) : error ? (
//         <p className="error">{error}</p>
//       ) : (
//         <table className="user-table">
//           <thead>
//             <tr>
//               <th>Organization
//               <span> <svg
//                   width="16"
//                   height="16"
//                   viewBox="0 0 16 16"
//                   fill="none"
//                   xmlns="http://www.w3.org/2000/svg"
//                 >
//                   <path
//                     d="M6.22222 13.3333H9.77778V11.5555H6.22222V13.3333ZM0 2.66666V4.44443H16V2.66666H0ZM2.66667 8.88888H13.3333V7.1111H2.66667V8.88888Z"
//                     fill="#545F7D"
//                   />
//                 </svg> </span>
//               </th>
//               <th>Username
//               <span> <svg
//                   width="16"
//                   height="16"
//                   viewBox="0 0 16 16"
//                   fill="none"
//                   xmlns="http://www.w3.org/2000/svg"
//                 >
//                   <path
//                     d="M6.22222 13.3333H9.77778V11.5555H6.22222V13.3333ZM0 2.66666V4.44443H16V2.66666H0ZM2.66667 8.88888H13.3333V7.1111H2.66667V8.88888Z"
//                     fill="#545F7D"
//                   />
//                 </svg> </span>
//               </th>
//               <th>Email
//               <span> <svg
//                   width="16"
//                   height="16"
//                   viewBox="0 0 16 16"
//                   fill="none"
//                   xmlns="http://www.w3.org/2000/svg"
//                 >
//                   <path
//                     d="M6.22222 13.3333H9.77778V11.5555H6.22222V13.3333ZM0 2.66666V4.44443H16V2.66666H0ZM2.66667 8.88888H13.3333V7.1111H2.66667V8.88888Z"
//                     fill="#545F7D"
//                   />
//                 </svg> </span>
//               </th>
//               <th>Phone Number
//               <span> <svg
//                   width="16"
//                   height="16"
//                   viewBox="0 0 16 16"
//                   fill="none"
//                   xmlns="http://www.w3.org/2000/svg"
//                 >
//                   <path
//                     d="M6.22222 13.3333H9.77778V11.5555H6.22222V13.3333ZM0 2.66666V4.44443H16V2.66666H0ZM2.66667 8.88888H13.3333V7.1111H2.66667V8.88888Z"
//                     fill="#545F7D"
//                   />
//                 </svg> </span>
//               </th>
//               <th>Date Joined
//               <span> <svg
//                   width="16"
//                   height="16"
//                   viewBox="0 0 16 16"
//                   fill="none"
//                   xmlns="http://www.w3.org/2000/svg"
//                 >
//                   <path
//                     d="M6.22222 13.3333H9.77778V11.5555H6.22222V13.3333ZM0 2.66666V4.44443H16V2.66666H0ZM2.66667 8.88888H13.3333V7.1111H2.66667V8.88888Z"
//                     fill="#545F7D"
//                   />
//                 </svg> </span>
//               </th>
//               <th>Status
//               <span> <svg
//                   width="16"
//                   height="16"
//                   viewBox="0 0 16 16"
//                   fill="none"
//                   xmlns="http://www.w3.org/2000/svg"
//                 >
//                   <path
//                     d="M6.22222 13.3333H9.77778V11.5555H6.22222V13.3333ZM0 2.66666V4.44443H16V2.66666H0ZM2.66667 8.88888H13.3333V7.1111H2.66667V8.88888Z"
//                     fill="#545F7D"
//                   />
//                 </svg> </span>
//               </th>
//             </tr>
//           </thead>
//           <tbody>
//             {users.map((user) => (
//               <tr key={user.id}>
//                 <td>{user.organization}</td>
//                 <td>{user.username}</td>
//                 <td>{user.email}</td>
//                 <td>{user.phoneNumber}</td>
//                 <td>{new Date(user.dateJoined).toLocaleDateString()}</td>
//                 <td className={`status ${user.status.toLowerCase()}`}>{user.status}</td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       )
//       }
//     </div>
//   );
// };

// export default UserTable;

import React, { useEffect, useState } from "react";
import "../../styles/usertable.scss";

// User interface
interface User {
  id: number;
  organization: string;
  username: string;
  email: string;
  phoneNumber: string;
  dateJoined: string;
  status: string;
}

// Pagination Hook (Custom pagination logic)
const usePagination = (totalItems: number, itemsPerPage: number) => {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  const nextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const currentItems = (items: User[]) => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    return items.slice(startIndex, startIndex + itemsPerPage);
  };

  return { currentPage, totalPages, currentItems, nextPage, prevPage };
};

const UserTable: React.FC = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  // Pagination setup
  const itemsPerPage = 25; // Set number of items per page
  const { currentPage, totalPages, currentItems, nextPage, prevPage } = usePagination(users.length, itemsPerPage);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch("https://run.mocky.io/v3/a910bfb3-2a90-4286-ad8d-d4ff228274a9");
        if (!response.ok) {
          throw new Error("Failed to fetch users");
        }
        const data = await response.json();
        setUsers(data);
      } catch (err: any) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  return (
    <div className="user-table-container">
      {loading ? (
        <p>Loading users...</p>
      ) : error ? (
        <p className="error">{error}</p>
      ) : (
        <>
          <table className="user-table">
            <thead>
              <tr>
                <th>Organization
                             <span> <svg
                  width="16"
                   height="16"
                   viewBox="0 0 16 16"
                   fill="none"
                   xmlns="http://www.w3.org/2000/svg"
                 >
                   <path
                     d="M6.22222 13.3333H9.77778V11.5555H6.22222V13.3333ZM0 2.66666V4.44443H16V2.66666H0ZM2.66667 8.88888H13.3333V7.1111H2.66667V8.88888Z"
                     fill="#545F7D"
                   />
                 </svg> </span>
                </th>
                <th>Username
                <span> <svg
                  width="16"
                   height="16"
                   viewBox="0 0 16 16"
                   fill="none"
                   xmlns="http://www.w3.org/2000/svg"
                 >
                   <path
                     d="M6.22222 13.3333H9.77778V11.5555H6.22222V13.3333ZM0 2.66666V4.44443H16V2.66666H0ZM2.66667 8.88888H13.3333V7.1111H2.66667V8.88888Z"
                     fill="#545F7D"
                   />
                 </svg> </span>
                </th>
                <th>Email
                <span> <svg
                  width="16"
                   height="16"
                   viewBox="0 0 16 16"
                   fill="none"
                   xmlns="http://www.w3.org/2000/svg"
                 >
                   <path
                     d="M6.22222 13.3333H9.77778V11.5555H6.22222V13.3333ZM0 2.66666V4.44443H16V2.66666H0ZM2.66667 8.88888H13.3333V7.1111H2.66667V8.88888Z"
                     fill="#545F7D"
                   />
                 </svg> </span>
                </th>
                <th>Phone Number
                <span> <svg
                  width="16"
                   height="16"
                   viewBox="0 0 16 16"
                   fill="none"
                   xmlns="http://www.w3.org/2000/svg"
                 >
                   <path
                     d="M6.22222 13.3333H9.77778V11.5555H6.22222V13.3333ZM0 2.66666V4.44443H16V2.66666H0ZM2.66667 8.88888H13.3333V7.1111H2.66667V8.88888Z"
                     fill="#545F7D"
                   />
                 </svg> </span>
                </th>
                <th>Date Joined
                <span> <svg
                  width="16"
                   height="16"
                   viewBox="0 0 16 16"
                   fill="none"
                   xmlns="http://www.w3.org/2000/svg"
                 >
                   <path
                     d="M6.22222 13.3333H9.77778V11.5555H6.22222V13.3333ZM0 2.66666V4.44443H16V2.66666H0ZM2.66667 8.88888H13.3333V7.1111H2.66667V8.88888Z"
                     fill="#545F7D"
                   />
                 </svg> </span>
                </th>
                <th>Status
                <span> <svg
                  width="16"
                   height="16"
                   viewBox="0 0 16 16"
                   fill="none"
                   xmlns="http://www.w3.org/2000/svg"
                 >
                   <path
                     d="M6.22222 13.3333H9.77778V11.5555H6.22222V13.3333ZM0 2.66666V4.44443H16V2.66666H0ZM2.66667 8.88888H13.3333V7.1111H2.66667V8.88888Z"
                     fill="#545F7D"
                   />
                 </svg> </span>
                </th>
              </tr>
            </thead>
            <tbody>
              {currentItems(users).map((user) => (
                <tr key={user.id}>
                  <td>{user.organization}</td>
                  <td>{user.username}</td>
                  <td>{user.email}</td>
                  <td>{user.phoneNumber}</td>
                  <td>{new Date(user.dateJoined).toLocaleDateString()}</td>
                  <td className={`status ${user.status.toLowerCase()}`}>{user.status}</td>
                  <td><svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_5530_2613)">
<path d="M9.99992 6.1111C10.9221 6.1111 11.6666 5.36666 11.6666 4.44444C11.6666 3.52222 10.9221 2.77777 9.99992 2.77777C9.0777 2.77777 8.33325 3.52222 8.33325 4.44444C8.33325 5.36666 9.0777 6.1111 9.99992 6.1111ZM9.99992 8.33333C9.0777 8.33333 8.33325 9.07777 8.33325 9.99999C8.33325 10.9222 9.0777 11.6667 9.99992 11.6667C10.9221 11.6667 11.6666 10.9222 11.6666 9.99999C11.6666 9.07777 10.9221 8.33333 9.99992 8.33333ZM9.99992 13.8889C9.0777 13.8889 8.33325 14.6333 8.33325 15.5555C8.33325 16.4778 9.0777 17.2222 9.99992 17.2222C10.9221 17.2222 11.6666 16.4778 11.6666 15.5555C11.6666 14.6333 10.9221 13.8889 9.99992 13.8889Z" fill="#545F7D"/>
</g>
<defs>
<clipPath id="clip0_5530_2613">
<rect width="20" height="20" fill="white"/>
</clipPath>
</defs>
</svg>
</td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="pagination">
            <button onClick={prevPage} disabled={currentPage === 1}>
              Prev
            </button>
            <span>
              Page {currentPage} of {totalPages}
            </span>
            <button onClick={nextPage} disabled={currentPage === totalPages}>
              Next
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default UserTable;



// import React, { useEffect, useState } from "react";
// import usePagination from "../users/Pagination"; // Import the hook

// interface User {
//   id: number;
//   organization: string;
//   username: string;
//   email: string;
//   phoneNumber: string;
//   dateJoined: string;
//   status: string;
// }

// const UserTable: React.FC = () => {
//   const [users, setUsers] = useState<User[]>([]);
//   const [loading, setLoading] = useState<boolean>(true);
//   const [error, setError] = useState<string | null>(null);
  
//   // Pagination Hook
//   const itemsPerPage = 50;
//   const { currentPage, totalPages, currentItems, nextPage, prevPage } = usePagination(users.length, itemsPerPage);

//   useEffect(() => {
//     const fetchUsers = async () => {
//       try {
//         const response = await fetch("https://run.mocky.io/v3/a910bfb3-2a90-4286-ad8d-d4ff228274a9");
//         if (!response.ok) {
//           throw new Error("Failed to fetch users");
//         }
//         const data = await response.json();
//         setUsers(data);
//       } catch (err: any) {
//         setError(err.message);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchUsers();
//   }, []);

//   return (
//     <div className="user-table-container">
//       {loading ? (
//         <p>Loading users...</p>
//       ) : error ? (
//         <p className="error">{error}</p>
//       ) : (
//         <>
//           <table className="user-table">
//             <thead>
//               <tr>
//                 <th>Organization <span> <svg
//                   width="16"
//                   height="16"
//                   viewBox="0 0 16 16"
//                   fill="none"
//                   xmlns="http://www.w3.org/2000/svg"
//                 >
//                   <path
//                     d="M6.22222 13.3333H9.77778V11.5555H6.22222V13.3333ZM0 2.66666V4.44443H16V2.66666H0ZM2.66667 8.88888H13.3333V7.1111H2.66667V8.88888Z"
//                     fill="#545F7D"
//                   />
//                 </svg> </span></th>
//                 <th>Username <span> <svg
//                   width="16"
//                   height="16"
//                   viewBox="0 0 16 16"
//                   fill="none"
//                   xmlns="http://www.w3.org/2000/svg"
//                 >
//                   <path
//                     d="M6.22222 13.3333H9.77778V11.5555H6.22222V13.3333ZM0 2.66666V4.44443H16V2.66666H0ZM2.66667 8.88888H13.3333V7.1111H2.66667V8.88888Z"
//                     fill="#545F7D"
//                   />
//                 </svg> </span></th>
//                 <th>Email  <span> <svg
//                   width="16"
//                   height="16"
//                   viewBox="0 0 16 16"
//                   fill="none"
//                   xmlns="http://www.w3.org/2000/svg"
//                 >
//                   <path
//                     d="M6.22222 13.3333H9.77778V11.5555H6.22222V13.3333ZM0 2.66666V4.44443H16V2.66666H0ZM2.66667 8.88888H13.3333V7.1111H2.66667V8.88888Z"
//                     fill="#545F7D"
//                   />
//                 </svg> </span></th>
//                 <th>Phone Number <span> <svg
//                   width="16"
//                   height="16"
//                   viewBox="0 0 16 16"
//                   fill="none"
//                   xmlns="http://www.w3.org/2000/svg"
//                 >
//                   <path
//                     d="M6.22222 13.3333H9.77778V11.5555H6.22222V13.3333ZM0 2.66666V4.44443H16V2.66666H0ZM2.66667 8.88888H13.3333V7.1111H2.66667V8.88888Z"
//                     fill="#545F7D"
//                   />
//                 </svg> </span></th>
//                 <th>Date Joined <span> <svg
//                   width="16"
//                   height="16"
//                   viewBox="0 0 16 16"
//                   fill="none"
//                   xmlns="http://www.w3.org/2000/svg"
//                 >
//                   <path
//                     d="M6.22222 13.3333H9.77778V11.5555H6.22222V13.3333ZM0 2.66666V4.44443H16V2.66666H0ZM2.66667 8.88888H13.3333V7.1111H2.66667V8.88888Z"
//                     fill="#545F7D"
//                   />
//                 </svg> </span></th>
//                 <th>Status <span> <svg
//                   width="16"
//                   height="16"
//                   viewBox="0 0 16 16"
//                   fill="none"
//                   xmlns="http://www.w3.org/2000/svg"
//                 >
//                   <path
//                     d="M6.22222 13.3333H9.77778V11.5555H6.22222V13.3333ZM0 2.66666V4.44443H16V2.66666H0ZM2.66667 8.88888H13.3333V7.1111H2.66667V8.88888Z"
//                     fill="#545F7D"
//                   />
//                 </svg> </span></th>
//               </tr>
//             </thead>
//             <tbody>
//               {currentItems(users).map((user) => (
//                 <tr key={user.id}>
//                   <td>{user.organization}</td>
//                   <td>{user.username}</td>
//                   <td>{user.email}</td>
//                   <td>{user.phoneNumber}</td>
//                   <td>{new Date(user.dateJoined).toLocaleDateString()}</td>
//                   <td className={`status ${user.status.toLowerCase()}`}>{user.status}</td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>

//           {/* Pagination Controls */}
//           <div className="pagination">
//             <button onClick={prevPage} disabled={currentPage === 1}>
//               Previous
//             </button>
//             <span> Page {currentPage} of {totalPages} </span>
//             <button onClick={nextPage} disabled={currentPage === totalPages}>
//               Next
//             </button>
//           </div>
//         </>
//       )}
//     </div>
//   );
// };

// export default UserTable;
