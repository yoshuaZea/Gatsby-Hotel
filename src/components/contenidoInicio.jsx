import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import Image from 'gatsby-image';
import styled from '@emotion/styled';
import { css } from '@emotion/core';

const TextoInicio = styled.div`
    padding-top: 4rem;
    max-width: 1200px;
    width: 95%;
    margin: 0 auto;

    @media (min-width: 768px) {
        display: grid;
        grid-template-columns: 2fr 1fr ;
        column-gap: 2rem;
    }

    p {
        display: flex;
        align-items: center;
        line-height: 2;
    }
`

const ImgNosotros = styled(Image)`
    border-radius: 5px;
    box-shadow: 5px 5px 10px 2px #707070;
`

const ContenidoInicio = () => {

    // Consultar datos a GraphQL
    const informacion = useStaticQuery(graphql`
        query {
            allDatoCmsPagina(filter: {slug: {eq: "inicio"}}) {
                nodes {
                    titulo
                    contenido
                    imagen {
                        fluid {
                            ...GatsbyDatoCmsFluid
                        }
                    }
                }
            }
        }
    `)
    
    // Destructuring al objeto de la consulta
    const { titulo, contenido, imagen } = informacion.allDatoCmsPagina.nodes[0]

    return ( 
        <>
            <h2 css={css`
                text-align: center;
                font-size: 4rem;
                margin-top: 4rem;
            `}>{titulo}</h2>

            <TextoInicio>
                <p>{contenido}</p>
                <ImgNosotros fluid={imagen.fluid} />
            </TextoInicio>
        </>
    )
}
 
export default ContenidoInicio;