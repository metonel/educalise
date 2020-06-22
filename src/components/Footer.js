import React from 'react'
import InstagramFeed from './InstagramFeed'
import './Footer.css'

export default () => (
  <div>
    <h2 className="taCenter">
      Urmariti-ne pe instagram{' '}
      <a href="https://www.instagram.com/educalise/">@educalise</a>
    </h2>
    <br />
    <InstagramFeed count="8" />
    <footer className="footer">
      <div className="container taCenter">
        <span>
          © Copyright {new Date().getFullYear()} Educalise.ro Toate drapturile rezervate.
        </span>
      </div>
    </footer>
  </div>
)
