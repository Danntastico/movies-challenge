import {createGlobalStyle} from 'styled-components'

export const GlobalStyle = createGlobalStyle` 
    body {
        background-color: #111111;
    }

    ::-webkit-scrollbar {
    display: none;
    }
    .menu-item {
        padding: 0 40px;
        margin: 5px 10px;
        user-select: none;
        cursor: pointer;
        border: none;
    }
    .menu-item-wrapper.active {
        border: 1px blue solid;
    }
    .menu-item.active {
        border: 1px green solid;
    }
    .scroll-menu-arrow {
        padding: 20px;
        cursor: pointer;
    }
`