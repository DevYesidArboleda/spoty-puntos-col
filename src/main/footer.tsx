import React from 'react'
import './footer.css'

const Footer = () => {
  return (
    <div className='footer-dark'>
      <div className="container">
                <div className="row">
                    <div className="col-sm-6 col-md-3 item">
                        <h3>Puntos Colombia</h3>
                        <ul>
                            <li><a href="#">Dev VTEX</a></li>
                            <li><a href="#">React</a></li>
                            <li><a href="#">Hook</a></li>
                            <li><a href="#">typescript</a></li>
                        </ul>
                    </div>                    
                    <div className="col item social"><a href="https://github.com/DevYesidArboleda"><i className="icon ion-social-github"></i></a><a href="https://www.linkedin.com/in/yesid-banguera-arboleda-042280167/"><i className="icon ion-social-linkedin"></i></a></div>
                </div>
                <p className="copyright">Yesid Banguera Arboleda © 2022</p>
            </div>
            <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
            <script src="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.1.3/js/bootstrap.bundle.min.js"></script>
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/ionicons/2.0.1/css/ionicons.min.css"></link>
    </div>
  )
}

export default Footer