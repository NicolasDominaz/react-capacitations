import { Link } from "react-router-dom";

function Home() {

    return (
      
      <div class="card"  className="app">
          <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <div class="container-fluid">
                <div class="card-body" >
                          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                        </button>
                        <div class="collapse navbar-collapse" id="navbarNav">
                              
                              <ul class="navbar-nav">
                                  <li class="nav-item">
                                    <a class="nav-link" aria-current="page" href="#">
                                        <Link to="/render-tools">
                                          Render tools
                                        </Link>
                                    </a>
                                </li>
                                <li class="nav-item">
                                  <a class="nav-link" href="#">
                                      <Link to="/events">
                                        Events
                                    </Link>
                                  </a>
                                </li>
                                <li class="nav-item">
                                  <a class="nav-link" >
                                    <Link to="/soccer-field">
                                      Soccer Field
                                    </Link>
                                  </a>
                                </li>
                                <li class="nav-item">
                                  <a class="nav-link" href="#">
                                      <Link to="/bootstrap">
                                          Entradas
                                      </Link>
                                    
                                    </a>
                                </li>
                                  <li class="nav-item">
                                      <a class="nav-link" >
                                        <Link to="/platosprincipales">
                                          Platos principales
                                        </Link>
                                      </a>
                                  </li>
                            </ul>
                          </div>
                    </div>
             </div>
        </nav>
    </div>
      
        


  );
}
  
export default Home;
  