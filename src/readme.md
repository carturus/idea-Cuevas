Primer entrega Proyecto Final

MyDoctor es una tienda online que provee Equipos, Uniformes y materiales para los profesionales de la salud.

El proyecto se desarrollo con React bajo las lineas de los desafios inviudales des clases de CODER.

Diseño del Sitio:

<App>
<Navbar>
<Switch> 
<Route ItemListContainer/:id >
<Route ItemDetailContainer/:id >
</Swicth>
</App>

| ItemListContainer-> | ItemList - >               | Item                     |
| ------------------- | -------------------------- | ------------------------ |
| Obtiene los items   | Recibe la lista de items   | Se encarga de renderizar |
| apartir de un async | como props y la utliza con | cada Item enviado por    |
| mock,               | map para genear un Item    | ItemList.                |
| de cada elemento.   |

| ItemDeatilContainer ->       | ItemDetail ->                 | ItemCount                        |
| ---------------------------- | ----------------------------- | -------------------------------- |
| Obtiene el item apartirde un | Recibe item como props y      | Recibe stock e inital como props |
| async mock,                  | renderiza el detalle del item | para modificar el state count    |
|                              |
