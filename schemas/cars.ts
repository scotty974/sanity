export default{
    name: 'Cars',
    type: 'document',
    title: 'Cars',
    fields: [
      {
        name: 'cars_name',
        type: 'string',
        title: 'Cars Name'
      },
      {
        name: 'cars_price',
        type: 'number',
        title: 'Cars Price'
      },
      {
        name: 'cars_description',
        type: 'string',
        title: 'Cars Description'
      },
      {
        name: 'cars_picture',
        type: 'image',
        title: 'Cars Picture'
      },
    ]
}