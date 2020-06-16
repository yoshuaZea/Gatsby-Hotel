import React from 'react'
import { css } from '@emotion/core'
import styled from '@emotion/styled'
import { Link } from 'gatsby'
import Navegacion from './nav'

const EnlaceHome = styled(Link)`
    color: #f7f7f7;
    text-align: center;
    text-decoration: none;
`

const Footer = ({title}) => {
    const year = new Date().getFullYear()
    return ( 
        <>
            <footer css={css`
                background-color: #333;
                padding: 1rem;
            `}>
                <div css={css`
                    max-width: 1200px;
                    margin: 0 auto;

                    @media (min-width: 768px) {
                        display: flex;
                        align-items: center;
                        justify-content: space-between;
                    }
                `}>
                    <Navegacion />

                    <EnlaceHome to="/">
                        <h1 css={css`
                            color: #f7f7f7;
                            text-align: center;
                        `}>Hotel Gatsby</h1>
                    </EnlaceHome>
                </div>
            </footer>
            <p
                css={css`
                        text-align: center;
                        color: #fff;
                        background-color: rgb(51, 51, 51);
                        margin: 0;
                        padding: 1rem;
                    `
                }
            >{title} - Todos los derechos reservado {year} &copy;</p>
        </>
    )
}
 
export default Footer