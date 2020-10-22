import { createGlobalStyle } from 'styled-components'


export const GlobalStyle = createGlobalStyle` 
    body {
        background-color: #111111;
        
    }

    ::-webkit-scrollbar {
    display: none;
    }
.menu-item {
    border-style: none;
    padding: 0 40px;
    margin: 5px 10px;
    user-select: none;
    cursor: pointer;
    border: 1px transparent solid;
    color: #A8A8A8;
    font-family: 'Poppins';
    font-size: 17px;
    font-weight: 700;
    padding: 0px 4px 0px 4px;
    margin: 0px 4px 0px 4px;
}
.menu-item-wrapper {
    border-style: none;
    border: 0px transparent solid;
    background-color: #222222;
    font-family: 'Poppins';
    padding: 3px 18px 3px 18px;
    border-style: none;
    outline: none;
}
.menu-item-wrapper.active {
    background-color: transparent;
    box-shadow: none;
    font-family: 'Poppins';
    font-weight: 700;
}
.menu-item.active {
    border-style: none;
    background-color: #D8A000;
    color: black;
    font-family: 'Poppins';
    font-weight: 800;
    border-radius: 21px;
    border: 1px #FFC05A solid;
    padding: 6px 20px 6px 20px;
}
.scroll-menu-arrow {
    color: #D8A000;
    padding: 20px;
    margin-top: 34px;
    cursor: pointer;
    font-family: 'Poppins';
    font-weight: 700;
    font-size: 32px;
}

.scroll-menu-arrow--disabled {
    visibility: hidden;
    background-color: black;
    font-family: 'Poppins';
    font-weight: 700;
 
}

.menu-wrapper{
    border-style: none;
    background-color: #222222;
    padding-top: 5px;
    padding-bottom: 5px;
    border-radius: 36px;
    margin-top: 34px;
    -webkit-box-shadow: -1px 4px 5px -2px rgba(0,0,0,0.75);
    -moz-box-shadow: -1px 4px 5px -2px rgba(0,0,0,0.75);
    box-shadow: -1px 4px 5px -2px rgba(0,0,0,0.75);
}

.menu-wrapper--inner{
    border-style: none;
    border: none;
    background-color: transparent;
}

.horizontal-menu{
    margin-left: 3%; 
    margin-right: 3%; 
}


`