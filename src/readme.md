# MyDoctor-proyecto final Curo React JS Coderhouse

MyDoctor es una tienda online que provee Equipos, Uniformes y materiales para los profesionales de la salud. El proyecto se desarrollo con React bajo las lineas de los desafios inviudales de cada clase.

### Styles

Se decidio utilzar react [React boostrap](https://react-bootstrap.github.io/) para los estilos del proyecto, ya que el principal objetivo es enteder el funcionamiento de react.

### Diseño del Sitio:

<App>
<Navbar>
<Switch> 
<Route ItemListContainer/:id >
<Route ItemDetailContainer/:id >
<Route Cart >
<Route Chekout >
</Swicth>
</App>

### Componentes

| ItemListContainer ->                                     | ItemList - >             | Item                                   |
| -------------------------------------------------------- | ------------------------ | -------------------------------------- |
| Obtiene los items por Firestore dependiendo del Idparams | Recibe la lista de items | Renderiza item de la lista en una card |

| ItemDeatilContainer ->             | ItemDetail ->     | ItemCount                                           |
| ---------------------------------- | ----------------- | --------------------------------------------------- |
| Obtiene un documento por Firestore | Renderiza el item | Ofrece controles para modificar cantidades del item |

| Cart->                     | CartDetail              |
| -------------------------- | ----------------------- |
| Recibe items de CartContex | Rederiza items del Cart |

| CheckOut ->                               | Form                 | Order                |
| ----------------------------------------- | -------------------- | -------------------- |
| Logica para alamcenar datos del comprador | Renderiza formulario | Renderiza Formulario |

### Firestore

Como backend se utilizara el servicio de Firestore de Firebase. Este servicio alamacena una coleccion de items con varios documentos que reprenstan un producto:

- categoryId
- description
- imageId
- stock
- title

Tambien almacena una coleccion de ordenes de comrpa:

- buyer{email,name,phone}
- cart[{item}]
- date
- totalPrice

### Funcionalidad

La panatalla de bienvenidad, mostrara los productos top de la colleccion items Firestore. Esta collecion se puede clasificar en categorias por el campo categoryId (Uniformess,Materiales y Equipo). El usuario puede desplegar items de cierta ctegoria desde las opciones del del NavBar con la ruta /category/category:id. Tanto la pantalla de bienvenida y de categorias, utilizan el componente ItemListContainer que encapsula la logica para llamar los items de Firestore. Los cuales pasan al componente ItemList el cual utiliza le metodo map para llamar al Item y renderiza los items, los cuales tienen un link a ItemDetailContainer.En ItemDetailContainer se encapsula la logica para llamar cierto documento de firertore por su id y permitir la compra del producto bajo las reglas de negocio. El CartContex contiene la logica para agregar,modificar y remover productos al Cart. El Cart desplegara la el componente CartDetail, si es que hay productos, y contiene un button para finalizar compra que enlaza el componente CheckOrder.CheckOrder cuenta renderiza condicionamenlte 2 componenets, Form y Order, se debe cumplir con los inputs de Form adecuadamente para rendedizar el component Form el cual almacena la orden en firestore y finaliza la compra.

# Comentarios

Agradezco al equipo de [CODERHOUSE](https://www.coderhouse.com), la oportunidad de aprender y desarrollar mis habilidades en el mundo de del desarrollo web. En especial al Prof. Francisco Rodriguez por su desempeño para transmitir el conocimiento.
