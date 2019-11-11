import React from 'react'
import useForm from 'react-hook-form'

// @connect(state => {}, {})
export default function Register(props) {
  const { register, handleSubmit, errors } = useForm()
  const onSubmit = data => {
    console.log('data', data)
    console.log('errors', errors)

    if (!Object.keys(errors).length) {
      props.onSubmit(data)
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {errors.email && errors.email.message}
      <input
        className={errors.email ? 'inputError' : ''}
        type="text"
        placeholder="Email"
        name="email"
        ref={register({
          required: true,
          min: 3,
          maxLength: 128,
          // pattern: /^\S+@\S+$/i,
          pattern: {
            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
            message: 'invalid email address',
          },
        })}
      />
      {errors.password && errors.password.message}
      <input
        className={errors.password ? 'inputError' : ''}
        type="text"
        placeholder="Password"
        name="password"
        ref={register({
          required: true,
          minLength: 5,
          maxLength: 20,
        })}
      />
      <input
        type="text"
        placeholder="Repeat-Password"
        name="repeat"
        ref={register({ required: true, max: 20, min: 5, maxLength: 20 })}
      />
      <input
        className={errors.firstname ? 'inputError' : ''}
        type="text"
        placeholder="First name"
        name="firstname"
        ref={register({ required: true, min: 1, maxLength: 80 })}
      />
      <input
        className={errors.lastname ? 'inputError' : ''}
        type="text"
        placeholder="Last name"
        name="lastname"
        ref={register({ required: true, min: 1, maxLength: 100 })}
      />
      <input
        className={errors.address ? 'inputError' : ''}
        type="text"
        placeholder="Address"
        name="address"
        ref={register({ required: true, min: 1 })}
      />
      <input
        className={errors.country ? 'inputError' : ''}
        type="text"
        placeholder="Country"
        name="country"
        ref={register({ required: true, min: 1 })}
      />
      <input
        className={errors.region ? 'inputError' : ''}
        type="text"
        placeholder="Region"
        name="region"
        ref={register({ required: true, min: 1, maxLength: 128 })}
      />
      <input type="text" placeholder="website" name="website" ref={register} />
      <input
        type="text"
        placeholder="telegram"
        name="telegram"
        ref={register}
      />
      <input
        type="text"
        placeholder="linkedin"
        name="linkedin"
        ref={register}
      />
      <input type="submit" value="Next" />
    </form>
  )
}
