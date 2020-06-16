import { graphql, useStaticQuery } from 'gatsby'

const useHabitaciones = () => {

    const data = useStaticQuery(graphql`
        query {
            allDatoCmsHabitacion{
                nodes {
                    id
                    titulo
                    contenido
                    slug
                    imagen {
                        fluid (maxWidth: 1200) {
                            ...GatsbyDatoCmsFluid
                        }
                    }
                }
            }
        }
    `)

    // Retornar un objeto con los datos
    return data.allDatoCmsHabitacion.nodes.map(habitacion =>  ({
        id: habitacion.id,
        titulo: habitacion.titulo,
        contenido: habitacion.contenido,
        slug: habitacion.slug,
        imagen: habitacion.imagen
    }))
}
 
export default useHabitaciones