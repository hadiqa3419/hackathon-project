import { defineType, defineField } from "sanity"

export const product = {
    name:"product",
    type:"document",
    title: "product",
    fields: [
       {
            name: "title",
            type: "string",
            title: "title",
        },

        { 
            name: "description",
            type: "string",
            title: "product description",
    },
    {
        name:"price",
        title:"Product Price",
        type:"number",

    },
    {
        name: 'image',
        type: "image",
        title: "product image",
    },
    defineField({
        name:"category",
        title:"Product Category",
        type:"reference",
        to:[
            {
           type: "category",
        }
    ]

    })
    ]
}