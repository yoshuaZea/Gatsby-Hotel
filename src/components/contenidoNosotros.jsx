import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import Image from 'gatsby-image';
import styled from '@emotion/styled';
import { css } from '@emotion/core';

const Contenido = styled.main`
    padding: 4rem 0rem;
    max-width: 1200px;
    width: 95%;
    margin: 0 auto;

    @media (min-width: 768px) {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        column-gap: 3rem;
    }

    p {
        display: flex;
        align-items: center;
        line-height: 2;
        margin-top: 2rem;
    }
`;

const ImgNosotros = styled(Image)`
    border-radius: 5px;
    box-shadow: 5px 5px 10px 2px #707070;
`

const ContenidoNosotros = () => {
    // Consultar graphQL
    const resultado = useStaticQuery(graphql`
        query {
            allDatoCmsPagina(filter: {slug: {eq: "nosotros"}}) {
                nodes {
                    titulo
                    contenido
                    imagen {
                        fluid (maxWidth: 1200) {
                            ...GatsbyDatoCmsFluid
                        }
                    }
                }
            }
        }
    `)

    // Destructuring al objeto de la consulta
    const { titulo, contenido, imagen } = resultado.allDatoCmsPagina.nodes[0]

    return (  
        <>
            <h2 css={css`
                text-align: center;
                font-size: 4rem;
                margin-top: 4rem;
            `}>{titulo}</h2>

            <Contenido>
                <p>{contenido}</p>
                <ImgNosotros fluid={imagen.fluid} />
            </Contenido>
        </>
    )
}
 
export default ContenidoNosotros