import dynamic from 'next/dynamic'
import { motion } from 'framer-motion'
import { useForm, SubmitHandler } from 'react-hook-form'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import { ReactNode } from 'react'
import { useTranslation } from 'next-i18next'

import SectionWrapper from '@/hoc/SectionWrapper'
import { fadeIn } from '@/utils/FramerMotion'
import { Direction, Type, Ease } from '@/types'
import { Home } from '@/constants'
const EarthCanvas = dynamic(() => import('@/components/canvas/Earth'), {
  ssr: false,
})

interface FormValues {
  name: string
  email: string
  message: string
}

const schema = yup.object().shape({
  name: yup.string().required(),
  email: yup.string().email().required(),
  message: yup.string().required(),
})

interface FormWrapperProps {
  children: ReactNode
  title: string
  errorMessage: string | undefined
}
const FormWrapper = (props: FormWrapperProps) => {
  const { children, errorMessage, title } = props
  return (
    <label className="flex flex-col relative">
      <span className="text-white font-medium">{title}</span>
      {children}
      {errorMessage && (
        <span className="absolute -bottom-6 left-0 text-rose-600">
          {errorMessage}
        </span>
      )}
    </label>
  )
}

const Form: React.FC = () => {
  const { t } = useTranslation('Home')
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: yupResolver(schema),
  })

  const onSubmit: SubmitHandler<FormValues> = (data) => {
    console.log(data)
  }
  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="mt-12 flex flex-col gap-10"
    >
      <FormWrapper
        title={t(Home.Contact.form.name.title)}
        errorMessage={errors?.name && errors.name.message}
      >
        <input
          type="text"
          {...register('name')}
          placeholder={`${t(Home.Contact.form.name.placeholder)}`}
          className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outlined-none border-none font-medium"
        />
      </FormWrapper>

      <FormWrapper
        title={t(Home.Contact.form.email.title)}
        errorMessage={errors?.email && errors.email.message}
      >
        <input
          type="email"
          {...register('email')}
          placeholder={`${t(Home.Contact.form.email.placeholder)}`}
          className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outlined-none border-none font-medium"
        />
      </FormWrapper>

      <FormWrapper
        title={t(Home.Contact.form.message.title)}
        errorMessage={errors?.message && errors.message.message}
      >
        <textarea
          {...register('message')}
          placeholder={`${t(Home.Contact.form.message.placeholder)}`}
          className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outlined-none border-none font-medium"
        />
      </FormWrapper>

      <button
        type="submit"
        className="bg-tertiary py-3 px-8 outline-none w-fit text-white font-bold shadow-md shadow-primary rounded-xl"
      >
        {t(Home.Contact.form.button[0])}
      </button>
    </form>
  )
}

const Contact = () => {
  const { t } = useTranslation('Home')

  return (
    <div className="xl:mt-12 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden">
      <motion.div
        variants={fadeIn(Direction.Right, Type.Tween, 0.2, 0.75, Ease.EaseOut)}
        className="flex-[0.7] bg-black-100 p-8 rounded-2xl"
      >
        <p className="section-sub-text">{t(Home.Contact.subTitle)}</p>
        <h3 className="section-head-text">{t(Home.Contact.title)}</h3>
        <Form />
      </motion.div>

      <motion.div
        variants={fadeIn(Direction.Left, Type.Tween, 0.2, 0.75, Ease.EaseOut)}
        className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]"
      >
        <EarthCanvas />
      </motion.div>
    </div>
  )
}

export default SectionWrapper(Contact, '')
