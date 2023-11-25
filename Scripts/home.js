document.body.innerHTML = `
      <nav class="navbar bg-body-tertiary fixed-top">
        <div class="container-fluid">
          <a class="navbar-brand" href="#" class="logo" style="font-size:40px; font-family: codec; padding:0; margin:0 0 0 1rem">AEsth</a>
          <button style="border: none; background: transparent;" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
            <span class="material-symbols-outlined">Menu</span>
          </button>
          <div class="offcanvas offcanvas-end" style="font-family: codec;" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
            <div class="offcanvas-header">
              <h5 class="offcanvas-title" id="offcanvasNavbarLabel">Portfolio</h5>
              <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>
            <div class="offcanvas-body">
              <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
                <li class="nav-item">
                  <a class="nav-link active" href="#" id="homeButton">Home</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" 
                  href="#" id="examplesButton">Examples</a>
                </li>
                <li class="nav-item dropdown">
                  <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    More
                  </a>
                  <ul class="dropdown-menu">
                    <li><a class="dropdown-item" href="#">experiments</a></li>
                    <li><a class="dropdown-item" href="#">About</a></li>
                    <li>
                      <hr class="dropdown-divider">
                    </li>
                    <li><a class="dropdown-item" href="#">Contacts</a></li>
                  </ul>
                </li>
              </ul>
              <form class="d-flex mt-3" role="search" id="form">
                <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
                <button class="btn btn-outline-success" type="submit">Search</button>
              </form>
            </div>
          </div>
        </div>
      </nav>

      <div class="content" id="contentDiv">
        <li id="homeButton2"><a href="#">Home</a></li>
        <li><a href="">Examples</a></li>
        <li><a href="">Services</a></li>
        <li><a href="">Contacts</a></li>
      </div>
`;