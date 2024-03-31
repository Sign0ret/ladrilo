# Schema

organización (colección)
    - nombre (string)
    - descripción (string/null)
    - galeria (array/null)
        - url (string/referencia -> bucket)
    - usuarios (colección)
        - email (string)
        - nombre (string)
        - rol (referencia -> roles)
        - galeria (array)
            - url (string/referencia -> bucket)
    - chats (colección)
        -  participantes (array)
            - (referencia -> usuario)
        - comunicación (referencia -> comunicaciones)
        - mensajes (colección)
            - remitente (referencia -> usuario)
            - tiempo (timestamp)
            - mensaje (string/null)
            - bloque (script -> bloques)
            - respuesta (null/referencia -> mensaje)
    - tareas (colección)
        - asignado (referencia -> usuario)
        - descripcion (string)
        - tiempo (timestamp)
        - progreso (numero [0,25,50,75,100])
        - limite (timestamp)
        - galeria (array)
            - (referencia -> bucket)
        - documentos (array)
            - (referencia -> bucket)
        - productos (array)
            - (referencia -> productos)
        - pagos (array)
            - (referencia -> pagos)
    - media ??? no se si solo en bucket y referencias eso o que
    - documento ??? lo mismo
    - producto (colección)
        - creador (referencia -> usuario)
        - nombre (string)
        - tiempo (timestamp)
        - unidad (script -> unidades)
        - cantidad (number)
        - compra (number)
        - venta (number)
        - pagado (number)
        - estado (script -> estados)
        - espacio (null/referencia -> espacio)
        - chat (null/referencia -> chat)
        - galeria (array)
            - (referencia -> bucket)
        - documentos (array)
            - (referencia -> bucket)
        - pagos (array)
            - (referencia -> pagos)
        - tareas (array)
            - (referencia -> tareas)
    - pagos (colección)
        - creador (referencia -> usuario)
        - cantidad (number)
        - tiempo (timestamp)
        - documentos (array)
            - (referencia -> bucket)
        - galeria (array)
            - (referencia -> bucket)
        

roles (colección)
    - rol (string)
comunicaciones (scripts de estructura)
    [
        personal: 2 personas por contacto, no se pueden agregar más, 
        grupo: personalizado, agregar a quien quiera, 
        proyecto: por default todos los participan
    ]
bloques (scripts de estructura)
    [
        <!-- only noSQL -->
        {
            id: 0,
            tipo: "un mensaje",
        },
        {
            id: 1,
            tipo: "una nota de voz",
            voz: referencia/archivo de voz,
        },
        {
            id: 3,
            tipo: "un link",
            link: url,
        },
        <!-- SQL or more secure -->
        {
            id: 4,
            tipo: "un documento",
            documento: referencia,
        },
        {
            id: 5,
            tipo: "unos documentos",
            documentos: [referencia, referencia],
        },
        {
            id: 6,
            tipo: "un archivo de media",
            media: referencia,
        },
        {
            id: 7,
            tipo: "una galería",
            galeria: [referencia, referencia],
        },
        {
            id: 8,
            tipo: "una tarea",
            tarea: referencia,
        },
        {
            id: 9,
            tipo: "un producto",
            producto: referencia,
        },
        {
            id: 10,
            tipo: "un pago",
            pago: referencia,
        },
    ]

progresos (scripts de estructura)
    [
        {
            progreso: 0,
            descripción: asignada,
        },
        {
            progreso: 25,
            descripción: haciendo,
        },
        {
            progreso: 50,
            descripción: hecha,
        },
        {
            progreso: 75,
            descripción: revisada,
        },
        {
            progreso: 100,
            descripción: archivada,
        },
    ]

## Cuando creas una organización
organización (colección)
    + nombre (string)
    + descripción (string)
    + porcentajeGanancia (number)
    + profundidad (number [1-5])
    - galeria (array)
        - (referencia -> bucket)
    - documentos (array)
        - (referencia -> bucket)
    + usuarios (colección)
        + email (string)
        + nombre (string)
        + rol (referencia -> roles)
        - galeria (array)
            - (referencia -> bucket)
        - documentos (array)
            - (referencia -> bucket)
        - tareas (colección)
        - pagos (colección)
    + chats (colección)
        +  participantes (array)
            + (referencia -> usuario)
        + comunicación (referencia -> comunicaciones)
        + mensajes (colección)
            + remitente (referencia -> usuario)
            + tiempo (timestamp)
            + mensaje (string/null)
            + bloque (script -> bloques)
            + respuesta (null/referencia -> mensaje)
        - galeria (array)
            - (referencia -> bucket)
        - documentos (array)
            - (referencia -> bucket)
        - tareas (colección)
        - pagos (colección)
    + espacios (colección)
        + nombre (string)
        + descripción (string)
        + porcentajeGanancia (number/null) [if null -> toma el de organización]
        + profundidad (number/null) [if null -> toma el de organización]
        + tiempo (timestamp)
        + colaboradores (array)
            + (referencia -> usuario)
        + asignable (boolean === se pueden agregar tareas, galeria, documentos, productos, pagos)
        - galeria (array)
            - (referencia -> bucket)
        - documentos (array)
            - (referencia -> bucket)
        + desglozable (boolean === se pueden agregar espacios hijos o no )
        - pagos (colección)
        - productos (colección)
    + productosCatalogo (colección)
        + creador (referencia -> usuario)
        + nombre (string)
        + tiempo (timestamp)
        + unidad (script -> unidades)
        + costoPorUnidad (number)
        + proveedor (referencia -> proveedores)

## Después, La organización, los usuarios, los chats o los espacios pueden tener las siguientes colecciones cada una:
    - tareas (colección)
        - asignado (referencia -> usuario)
        - descripcion (string)
        - tiempo (timestamp)
        - progreso (numero [0,25,50,75,100])
        - limite (timestamp)
        - galeria (array)
            - (referencia -> bucket)
        - documentos (array)
            - (referencia -> bucket)
        - productos (array)
            - (referencia -> productos)
        - pagos (array)
            - (referencia -> pagos)
        - espacio (null/referencia -> espacio)
        - mensajeContexto (referencia -> mensaje)
    - productos (colección)
        - creador (referencia -> usuario)
        - nombre (string)
        - tiempo (timestamp)
        - unidad (script -> unidades)
        - cantidad (number)
        - compra (number)
        - venta (number)
        - pagado (number)
        - estado (script -> estados)
        - espacio (null/referencia -> espacio)
        - chat (null/referencia -> chat)
        - galeria (array)
            - (referencia -> bucket)
        - documentos (array)
            - (referencia -> bucket)
        - pagos (array)
            - (referencia -> pagos)
        - tareas (array)
            - (referencia -> tareas)
    - pagos (colección)
        - creador (referencia -> usuario)
        - cantidad (number)
        - tiempo (timestamp)
        - documentos (array)
            - (referencia -> bucket)
        - galeria (array)
            - (referencia -> bucket)

## Tengo que hacer
- Colección de organización
    - crear,ver,editar,eliminar organización
    - agregar,ver,eliminar,descargar media
    - agregar,ver,eliminar,descargar documentos
    - agregar,ver,eliminar,descargar productosCatalogo
    - copia de seguridad organización
- Colección de usuarios
    - agregar usuario default de la organización
    - agregar usuarios
    - modificar usuarios
    - eliminar usuarios
    - agregar,ver,eliminar,descargar galeria
    - agregar,ver,eliminar,descargar documentos
    - agregar,ver,editar,eliminar,descargar tareas
    - agregar,ver,editar,eliminar,descargar pagos
    - copia de seguridad usuario
- Colección de chats
    - agregar,ver,editar,eliminar chat
    - agregar,ver,eliminar usuarios del chat
    - agregar,ver mensajes
    - agregar,ver,eliminar,descargar galeria
    - agregar,ver,eliminar,descargar documentos
    - agregar,ver,editar,eliminar,descargar tareas
    - agregar,ver,editar,eliminar,descargar pagos
    - copia de seguridad chat
- Colección de espacios
    - crear,ver,editar,eliminar espacio
    - agregar,ver,eliminar,descargar media
    - agregar,ver,eliminar,descargar documentos
    - agregar,ver,editar,eliminar,descargar productos
    - agregar,ver,editar,eliminar,descargar pagos
    - crear,ver,editar,eliminar espacios hijos
    - copia de seguridad espacio
