export default {
  name: "product",
  type: "document",
  title: "product",
  fields: [
    {
      name: "name",
      type: "string",
      title: "Name of product",
    },

    {
      name: "images",
      type: "array",
      title: "Product Images",
      of: [{ type: "image" }],
    },

    {
      name: "description",
      type: "text",
      title: "Description of product",
    },

    {
      name: "slug",
      type: "slug",
      title: "Product Slug",
      options: {
        source: "name",
      },
    },

    {
      name: "price",
      type: "number",
      title: "Price",
    },

    // create after stripe

    {
      name: "price_id",
      title: "Stripe price ID",
      type: "string",
    },

    {
      name: "category",
      type: "reference",
      title: "Product Category",
      to: [
        {
          type: "category",
        },
      ],
    },
  ],
};
