import {useForm} from 'react-hook-form'
import * as yup from 'yup'
import {yupResolver} from '@hookform/resolvers/yup'

const SubmitForm = () => {

    const schema = yup.object().shape({
      name: yup.string().required("نام را وارد کنید"),
      email: yup.string().email("ایمیل نامعتبر است").required("ایمیل اجباری است"),
      age: yup.number().positive().min(18).max(100).required(),
      // password: yup.string().min(4).max(15).required(), //Regex
      password: yup.string().min(4).max(15).matches(/[a-z]+/).matches(/[A-Z]+/).matches(/\d+/), //Regex
      confirmPassword: yup.string().oneOf([yup.ref("password")], "پسورد یکسان نیست").required()
    })

    const {register, handleSubmit, formState: {errors}} = useForm({resolver: yupResolver(schema)})

    const onFormSubmit = (data)=>{
      console.log(data)
    }

  return (
    <form onSubmit={handleSubmit(onFormSubmit)}>
      <input type="text" placeholder='Name...' {...register("name")} />
      {errors.name && <p>{errors.name.message}</p>}
      <input type="text" placeholder='Email...' {...register("email")} />
      <p>{errors.email?.message}</p>
      <input type="number" placeholder='Age...' {...register("age")} />
      <p>{errors.age?.message}</p>
      <input type="password" placeholder='Password...' {...register("password")} />
      <p>{errors.password?.message}</p>
      <input type="password" placeholder='Confirm Password...' {...register("confirmPassword")} />
      <p>{errors.confirmPassword?.message}</p>
      <input type="submit" />
    </form>
  );
};
export default SubmitForm;