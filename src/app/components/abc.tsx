'use client'
import React, { createContext, useState, ReactNode, Dispatch, SetStateAction } from 'react';

interface UserContextType {
  user: string;
  setUser: Dispatch<SetStateAction<string>>;
  indexNo: number;
  setIndexNo: Dispatch<SetStateAction<number>>;
}

const defaultValue: UserContextType = {
  user: '',
  setUser: () => {}, // Provide a default function
  indexNo: 2,
  setIndexNo: () => {}, // Provide a default function

};

export const UserContext = createContext<UserContextType>(defaultValue);

const UserContextProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState('');
  const [indexNo, setIndexNo]= useState(Number)

  const contextValue: UserContextType = {
    user,
    setUser,
    indexNo,
    setIndexNo
  };



  return (
    <UserContext.Provider value={contextValue}>
      {children}
    </UserContext.Provider>
  );
};

export default UserContextProvider;
















// interface userState {
//       user: string,
//       setUser: React.Dispatch<React.SetStateAction<undefined>>
// }


//       const UserContextProvider = ({children}:{children: React.ReactNode}) => {
//             const [user, setUser] = useState<userState>(undefined)


//             const userContext = createContext()
//             {/*const userContext = React.createContext<userState>({
//                   user: "",
//                   setUser: function (value: React.SetStateAction<string>): void {
//                         throw new Error("Function not implemented.");
//                   }
//             })*/}

//             return (
//                   <userContext.Provider value={user}>
//                   {children}

//                   </userContext.Provider>
//             )
//       }

     



