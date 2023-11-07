import * as yup from "yup";

const ProductSchema = yup.object().shape({
  title: yup.string().required("title is required"),
  desc: yup.string().required("description is required"),
  price: yup.number().required("price is required"),
  category: yup.string().required("category is required"),
  file: yup.mixed().required("Image is required"),
});

export default ProductSchema;
