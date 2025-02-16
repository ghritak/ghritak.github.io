import React, { useState } from 'react';
import Input from '../ui/Input';
import TextArea from '../ui/TextArea';
import Header from '../ui/Header';
import { IoMdSend } from 'react-icons/io';
import { RiLoader3Fill } from 'react-icons/ri';
import Toast from '../ui/Toast';
import { collection, addDoc } from 'firebase/firestore';
import { db } from '../../firebaseConfig';

const initData = {
  name: '',
  phone: '',
  email: '',
  message: '',
};

const initToast = { message: '', type: 'none' }

const ContactComponent = () => {
  const [formData, setFormData] = useState(initData);
  const [loading, setLoading] = useState(false);
  const [toast, setToast] = useState(initToast);

  const handleChangeInput = (event) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!formData.name || !formData.phone || !formData.email || !formData.message) {
      console.log('All fields are required');
      showToast('Please fill in all fields', 'error');
      return;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      console.log('Invalid email address');
      showToast('Please enter a valid email', 'error');
      return;
    }
    setLoading(true);
    try {
      const docRef = await addDoc(collection(db, 'contacts'), formData);
      console.log('Document written with ID: ', docRef.id);
      setFormData(initData);
    } catch (error) {
      console.log('Error adding document: ', error);
    } finally {
      setLoading(false);
      showToast('Message sent', 'success');
    }
  };

  const showToast = (message, type) => {
    if (toast.message) return
    setToast({ message, type });
    setTimeout(() => {
      setToast(initToast);
    }, 4000);
  };

  return (
    <section
      id='contact'
      className='xl:mx-56 flex relative min-h-screen px-6 xl:px-20 xl:py-28 text-white'
    >
      <div className='flex flex-col space-y-10 xl:space-y-20 items-center justify-center w-full'>
        <Header title='Contact' />
        <form
          className='flex flex-col max-w-3xl w-full gap-3 xl:gap-6'
          onSubmit={handleSubmit}
        >
          <div className='flex flex-col xl:flex-row gap-3 xl:gap-6'>
            <Input
              placeholder='Name'
              name='name'
              value={formData.name}
              onChange={handleChangeInput}
            />
            <Input
              placeholder='Phone'
              name='phone'
              value={formData.phone}
              onChange={handleChangeInput}
            />
          </div>
          <Input
            placeholder='Email'
            name='email'
            type='email'
            value={formData.email}
            onChange={handleChangeInput}
          />
          <TextArea
            placeholder='Type your message...'
            name='message'
            value={formData.message}
            onChange={handleChangeInput}
          />
          <button
            type='submit'
            className='p-3 rounded-lg bg-white hover:bg-gray-300 text-black transition-all duration-300'
          >
            {!loading ? (
              <span className='flex justify-center items-center gap-1'>
                Send
                <IoMdSend />
              </span>
            ) : (
              <span className='flex justify-center items-center'>
                <RiLoader3Fill className='animate-spin text-2xl' />
              </span>
            )}
          </button>
        </form>
      </div>
      {toast.message && <Toast toast={toast} setToast={setToast} />}
    </section>
  );
};

export default ContactComponent;
