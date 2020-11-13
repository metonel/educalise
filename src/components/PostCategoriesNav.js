import React from 'react'
import { Link } from 'gatsby'

import BlogSearch from './BlogSearch'
import './PostCategoriesNav.css'

const PostCategoriesNav = ({ categories, enableSearch }) => (
  <div className="PostCategoriesNav">
    {categories.map((category, index) => (
      <Link
        exact="true"
        className="NavLink"
        key={category.title + index}
        to={category.slug}
      >
        {category.title}
      </Link>
    ))}
    <Link className="NavLink" exact="true" to={`/blog/`}>
      Toate Proiectele
    </Link>

    {enableSearch && <BlogSearch />}
  </div>
)

export default PostCategoriesNav
