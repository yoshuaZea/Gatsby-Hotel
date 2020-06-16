/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it

// Consultar cuantas paginas va a crear y contenidos estáticos a través de gatsby-node

exports.createPages = async ({actions, graphql, reporter}) => {
    const resultado = await graphql(`
        query {
            allDatoCmsHabitacion{
                nodes {
                    slug
                }
            }
        }
    `)

    // console.log(resultado.data.allDatoCmsHabitacion.nodes)


    // Si hubo algún error, para debuggear
    if(resultado.errors){
        reporter.panic('No hubo resultados', resultado.errors)
    }

    // Si hay páginas
    const habitaciones = resultado.data.allDatoCmsHabitacion.nodes

    habitaciones.forEach(habitacion => {
        // Toma ciertas propiedades
        actions.createPage({
            path: habitacion.slug, // Ruta de la página
            component: require.resolve('./src/components/habitaciones.jsx'), // Donde está el componente
            context: { // La variables que se pasan al componente
                slug: habitacion.slug
            }
        })
    })
}