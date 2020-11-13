import React from 'react'
// import InstagramFeed from './InstagramFeed'
import './Footer.css'

export default () => (
  <div>
    {/* <h2 className="taCenter">
      Urmariti-ne pe instagram{' '}
      <a href="https://www.instagram.com/educalise/">@educalise</a>
    </h2> */}
    {/* <br />
    <InstagramFeed count="8" /> */}
    <footer className="footer">
      <div className="container taCenter">
        <span>
          © Copyright {new Date().getFullYear()} Educalise.ro Toate drepturile rezervate Asociația Educalise | CIF 40957288 | Cont bancar RO22RNCB0837163283860001 
        </span>
      </div>
    </footer>
  </div>
)
