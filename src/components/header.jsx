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

const Header = () => {
    return ( 
        <header css={css`
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
                <EnlaceHome to="/">
                    <h1 css={css`
                        color: #f7f7f7;
                        text-align: center;
                    `}>Hotel Gatsby</h1>
                </EnlaceHome>
                <Navegacion />
            </div>
        </header>
    )
}
 
export default Header