Proyecto back en node.js que contiene endpoints para gestionar productos y autenticacion de un usuario, usando JWT
* Cada ruta esta protegida con la autenticacion valida enviando el respectivo token
* Base de datos postgres 
* Validaciones generales 

- Endpoints:
    *gestion productos
      -- get products   (/product)            GET
      -- update product (/product/:productId) PUT
      -- save product   (/product)            POST
      -- delete product (/product/:productId) DELETE
    *auth
        -- auth  (/auth)                      GET
