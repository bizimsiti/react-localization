import * as yup from "yup";

const schema = yup.object().shape({
  name: yup.string().required(),
  email: yup.string().required(),
  phone: yup.number().required().positive().integer(),
  text: yup.string().max(100).required()
});

export default schema;
