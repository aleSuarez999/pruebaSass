import React from 'react'
import Text from '../components/Text'
import Box from '../components/Box'

export default function Nosotros() {
  return (
    <Box className=''>
      <Text as="h2" >Nosotros</Text>
       <Text className="">
          En <strong>Juguetería Mundo Mágico</strong> nos dedicamos, desde hace más de 25 años, a hacer realidad los sueños de los más chicos.
          Nuestro local nació como un pequeño emprendimiento familiar en el corazón de Córdoba, y hoy seguimos manteniendo ese espíritu cercano,
          cálido y lleno de imaginación.
        </Text>

        <Text className="">
          Seleccionamos cuidadosamente cada juguete con el objetivo de fomentar la creatividad, el juego libre y el desarrollo emocional de niñas y niños.
          Desde juegos didácticos hasta muñecos, bloques, disfraces y mucho más, siempre buscamos ofrecer productos seguros, divertidos y con valores.
        </Text>

        <Text className="">
          Nos apasiona acompañar a las familias en cada etapa de la infancia, y creemos que jugar es una forma de aprender, compartir y crecer juntos.
        </Text>

        <Text className="">
          ¡Gracias por dejarnos ser parte de su mundo!
        </Text>
    </Box>
  )
}
