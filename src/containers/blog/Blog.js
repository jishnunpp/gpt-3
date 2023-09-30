import React from 'react'
import './blog.css'
import { Article } from '../../components'
import { blog1,blog2,blog3,blog4,blog5 } from './import'

const Blog = () => {
  return (
    <div className='blog section_padding' id='blog'>
      <div className='blog_heading'>
        <h1 className='gradient__text'> A lot is Happening We are blogging about it.</h1>

      </div>
      <div className='blog-container'>
        <div className='blog-container-groupA'>
           <Article imgUrl={blog1} date="Sep 26, 2021" text="GPT-3 and Open  AI is the future. Let us exlore how it is?"/>
        </div>
        <div className='blog-container-groupB'>
         <Article imgUrl={blog2} date="Sep 26, 2021" text="GPT-3 and Open  AI is the future. Let us exlore how it is?"/>
         <Article imgUrl={blog3} date="Sep 26, 2021" text="GPT-3 and Open  AI is the future. Let us exlore how it is?"/>
         <Article imgUrl={blog4} date="Sep 26, 2021" text="GPT-3 and Open  AI is the future. Let us exlore how it is?"/>
         <Article imgUrl={blog5} date="Sep 26, 2021" text="GPT-3 and Open  AI is the future. Let us exlore how it is?"/>
        </div>

      </div>
      
    </div>
  )
}

export default Blog
