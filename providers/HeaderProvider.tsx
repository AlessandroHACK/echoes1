"use client"

import Header from "@/components/Header"

interface UserProviderProps{
    children: React.ReactNode;
};

const HeaderProvider: React.FC<UserProviderProps> = ({
    children
})=> {
    return(
        <Header>
            {children}
        </Header>
    )
}

export default HeaderProvider;