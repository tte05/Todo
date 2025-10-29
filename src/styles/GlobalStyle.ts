import { createGlobalStyle } from "styled-components";
import { Theme } from "../models/theme";

export const GlobalStyle = createGlobalStyle<{ theme: Theme }>`
    * {
        box-sizing: border-box;
    }

    body {
        transition: background-color .2s ease;
        background-color: ${({ theme }) => theme.colors.backgroundSecondary};
        padding: 50px 0 0 0;
        font-family: 'Roboto', sans-serif;
        font-size: 16px;
        line-height: 1.429;
        color: black;
    }

    .container {
        margin-top: 10px;
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 20px;
    }
`;
