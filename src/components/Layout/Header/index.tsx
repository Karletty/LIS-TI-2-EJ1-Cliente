import { useNavigate } from "react-router-dom";
import { usersServices } from "../../../services/usersServices";


const Header = () => {
      const navigate = useNavigate();

      const handleClick = async () => {
            usersServices.logout();
            localStorage.removeItem('user');
            navigate('/')
      }

      return (
            <header>
                  <nav className="d-flex justify-content-between align-items-center p-3">
                        <div>
                              <img className="logo" src="img/logo.png" alt="La cuponera" />
                        </div>
                        {localStorage.getItem('user') &&
                              <ul className="nav nav-pills justify-content-end">
                                    <li className="nav-item">
                                          <button onClick={handleClick} className="nav-link <?= $activeItem == 'offers' ?  'active' : '' ?>" aria-current="page">Cerrar sesión</button>
                                    </li>
                              </ul>}
                  </nav>
            </header>
      );
}

export { Header };