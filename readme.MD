# Introducción

Aquí tienes el enunciado del modulo 2, creat un repo en Github, y añade un readme.md
incluyendo enunciado y consulya (lo que pone aquí _Pega aquí tu consulta_)

# Basico

## CRUD

Crear una BBDD y hacer CRUD

## Restaurar backup

Vamos a restaurar el set de datos de mongo atlas _airbnb_.

Lo puedes encontrar en este enlace: https://drive.google.com/drive/folders/1gAtZZdrBKiKioJSZwnShXskaKk6H_gCJ?usp=sharing

Para restaurarlo puede seguir las instrucciones de este videopost:
https://www.lemoncode.tv/curso/docker-y-mongodb/leccion/restaurando-backup-mongodb

> Acuerdate de mirar si en opt/app hay contenido de backups previos que tengas
> que borrar

## General

En este base de datos puedes encontrar un montón de apartementos y sus
reviews, esto está sacado de hacer webscrapping.

**Pregunta** Si montarás un sitio real, ¿Qué posible problemas pontenciales
les ves a como está almacenada la información?

```md
Indica aquí que problemas ves
```

## Consultas

### Basico

- Saca en una consulta cuantos apartamentos hay en España.

```js
use("airbnb")
db.listingsAndReviews.count({
  "address.country": "Spain",
})
```

- Lista los 10 primeros:

  - Sólo muestra: nombre, camas, precio, government_area
  - Ordenados por precio.

```js
use("airbnb")
db.listingsAndReviews
  .find(
    { "address.country": "Spain" },
    {
      _id: 0,
      name: 1,
      beds: 1,
      price: 1,
      "address.government_area": 1,
    }
  )
  .sort({ price: -1 })
  .limit(10)
```

### Filtrando

- Queremos viajar comodos, somos 4 personas y queremos:
  - 4 camas.
  - Dos cuartos de baño.

```js
use("airbnb")
db.listingsAndReviews
  .find(
    { "address.country": "Spain", beds: { $eq: 4 } },
    { _id: 0, name: 1, beds: 1, price: 1, "address.government_area": 1 }
  )
  .sort({ price: -1 })
  .limit(10)
```

- Al requisito anterior,hay que añadir que nos gusta la tecnología
  queremos que el apartamento tenga wifi.

```js
use("airbnb")
db.listingsAndReviews
  .find(
    {
      $and: [
        { "address.country": "Spain" },
        { beds: { $eq: 4 } },
        { amenities: { $eq: "Wifi" } },
      ],
    },
    { _id: 0, name: 1, beds: 1, price: 1, "address.government_area": 1 }
  )
  .sort({ price: -1 })
  .limit(10)
```

- Y bueno, un amigo se ha unido que trae un perro, así que a la query anterior tenemos que
  buscar que permitan mascota _Pets Allowed_

```js
use("airbnb")
db.listingsAndReviews
  .find(
    {
      $and: [
        { "address.country": "Spain" },
        { beds: { $eq: 4 } },
        { amenities: { $all: ["Wifi", "Pets allowed"] } },
      ],
    },
    {
      _id: 0,
      name: 1,
      beds: 1,
      price: 1,
      "address.government_area": 1,
      house_rules: 1,
    }
  )
  .sort({ price: -1 })
  .limit(10)
```

### Operadores lógicos

- Estamos entre ir a Barcelona o a Portugal, los dos destinos nos valen, peeero... queremos que
  el precio nos salga baratito (50 $), y que tenga buen rating de reviews

```js
use("airbnb")
db.listingsAndReviews
  .find({ 
    $or: [ 
      { "address.country": "Spain"}, 
      {"address.country": "Portugal"} 
    ], 
    $and: [ 
      {price: {$lte: 50} }, 
      {"review_scores.review_scores_rating": {$gte: 90}},
      { beds: { $eq: 4 } },
      { amenities: { $all: ["Wifi", "Pets allowed"] } },
    ]
  }, 
  {
    _id:0,
    name: 1,
    beds: 1,
    "address.country": 1,
    price: 1,
    "review_scores.review_scores_rating":1, 
  },
  )
  .sort({price:-1})
  .limit(10)
```

## Agregaciones

# Basico

- Queremos mostrar los pisos que hay en España, y los siguiente campos:
  - Nombre.
  - De que ciudad (no queremos mostrar un objeto, sólo el string con la ciudad)
  - El precio (no queremos mostrar un objeto, sólo el campo de precio)

```js
use("airbnb")
db.listingsAndReviews.aggregate(
[
    {
        $match: {
            'address.country': 'Spain'
        }
    },{
        $addFields: {
            convertedPrice: { $toInt: "$price" }
        }
    },{
        $project: {
            _id: 0, 
            name: 1, 
            ciudad: '$address.market', 
            precio: '$convertedPrice'
        }
    },{
        $sort: {
            precio: -1
       }
    }  
])
```

- Queremos saber cuantos alojamientos hay disponibles por pais.

```js
use("airbnb")
db.listingsAndReviews.aggregate(
[
  {
    $group: {
      _id: "$address.country",
      alojamientos: {
        $sum: 1
      }
    }
  },
  {
    $sort: {
      alojamientos: -1
    }
  },
  {
    $project: {
      _id: 0,
      alojamientos: 1,
      pais: "$_id"
    }
  }
])
```

# Opcional

- Queremos saber el precio medio de alquiler de airbnb en España.

```js
// Pega aquí tu consulta
```

- ¿Y si quisieramos hacer como el anterior, pero sacarlo por paises?

```js
// Pega aquí tu consulta
```

- Repite los mismos pasos pero agrupando también por numero de habitaciones.

# Desafio

Queremos mostrar el top 5 de apartamentos más caros en España, y sacar
los siguentes campos:

- Nombre.
- Ciudad.
- Amenities, pero en vez de un array, un string con todos los ammenities.

```js
// Pega aquí tu consulta
```
