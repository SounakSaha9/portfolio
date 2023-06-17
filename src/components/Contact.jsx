import {useState,useRef} from 'react'
import emailjs from '@emailjs/browser'
import { motion } from 'framer-motion'
import { styles } from '../styles'
import { EarthCanvas } from './canvas'
import { slideIn } from '../utils/motion'
import { SectionWrapper } from '../hoc'




const Contact = () => {

  const formRef=useRef();
  const [form,setForm]=useState({
    name:'',
    email:'',
    message:'',
  })

  const [loading,setLoading]=useState(false);

  const handleChange =(e)=>{
    const {name,value}=e.target

    setForm({...form,[name]:value})
  }
  const handleSubmit =(e)=>{
//template_iwr7tjk
//service_cxfi5r9
//TPhpDIzJ6tIHzGZW7
    e.preventDefault();
    setLoading(true);

    emailjs.send(
      'service_cxfi5r9',
      'template_iwr7tjk',
      {
        from_name : form.name,
        to_name : 'Sounak',
        from_email:form.email,
        to_email: 'sounaksaha.eork@gmail.com',
        message: form.message
      },
      'TPhpDIzJ6tIHzGZW7'
      )
      .then(()=>{
        setLoading(false);
        alert("Thank you! I will get back to you soon!");
        setForm({
          name:'',
          email:'',
          message:''
        })

      },
        (error)=>{
          setLoading(false)
          console.log(error)
          alert("Something went wrong!")
        }
      )
  }
  return (
    <div className='xl:mt-12 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden'>
      <motion.div
        variants={slideIn('left',"tween",0.45,1)}
        className='flex-[0.75] bg-black-100 p-8 rounded-2xl'
      >
        <p className={styles.sectionSubText}>Get in Touch</p>
        <h3 className={styles.sectionHeadText}>Contact.</h3>

        <form 
          ref={formRef}
          onSubmit={handleSubmit}
          className='mt-12 flex flex-col gap-8'
        >
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Your Name</span>
            <input type="text"
              name='name'
              value={form.name}
              onChange={handleChange}
              placeholder="What's Your Name?"
              className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
            />
          </label>
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Your Email</span>
            <input type="email"
              name='email'
              value={form.email}
              onChange={handleChange}
              placeholder="What's Your E-mail?"
              className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
            />
          </label>
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Message</span>
            <textarea
              rows={7}
              name='message'
              value={form.message}
              onChange={handleChange}
              placeholder="What do you want to say?"
              className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
            />
          </label>
          <button type='submit'
          className='bg-tertiary py-3 px-8 outline-none w-fit text-white font-bold shadow-md shadow-primary rounded-xl'
          >
            {loading ? 'Sending...' : 'Send'}
            
          </button>
        </form>
      </motion.div>
      <motion.div 
       variants={slideIn('right',"tween",0.45,1)}
       className='xl:flex-1 xl:h-auto md:h-[550px] h-[360px]'
      >
        <EarthCanvas />
      </motion.div>
    </div>
  )
}

export default SectionWrapper(Contact,"contact")