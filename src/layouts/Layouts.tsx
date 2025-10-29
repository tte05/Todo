import { Outlet } from "react-router-dom"
import { Header } from "../components/Header/Header"
import { GlobalStyle } from "../styles/GlobalStyle"
import { ThemeProvider } from "styled-components"
import { themes } from "../styles/themes"
import { useSelector } from "react-redux"
import { RootState } from "../store"

export const Layouts = () => {
    const themeList = useSelector((state: RootState) => state.themeList.theme);


    return (
        <>
            <ThemeProvider theme={themeList}>
                <GlobalStyle theme={themeList} />
                <Header />
                <Outlet />
            </ThemeProvider>
        </>
    )
}