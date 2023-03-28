import './style.css';

const Sidebar = () => (
    <aside className="content__sidebar">
          <div>
            <nav className="content__navigation">
              <ol>
                <li><a className="content__navigation--title" href="#"><strong>Zmień Kraj</strong></a>
                  <ul>
                    <li><a href="#" data-country="at">
                      <img className="content__navigation--image"
                        src="https://i.postimg.cc/RCfcJ8dy/Flaga-Austria.png" />
                      Austria</a></li>
                    <li><a href="#" data-country="bel">
                      <img className="content__navigation--image"
                        src="https://i.postimg.cc/14hBw1V5/Flaga-Belgia.png" />
                      Belgia</a></li>
                    <li><a href="#" data-country="fi">
                      <img className="content__navigation--image"
                        src="https://i.postimg.cc/nzf1hw5J/Flaga-Finlandia.png" />
                      Finlandia</a></li>
                    <li><a href="#" data-country="Francja">
                      <img className="content__navigation--image"
                        src="https://i.postimg.cc/XNmqWCw5/Flaga-Francja.png" />
                      Francja</a></li>
                    <li><a href="#" data-country="de">
                      <img className="content__navigation--image"
                        src="https://i.postimg.cc/9FQY09xr/Flaga-Niemcy.png" />
                      Niemcy</a></li>
                    <li><a href="#" data-country="no">
                      <img className="content__navigation--image"
                        src="https://i.postimg.cc/sXzprGQf/Flaga-Norwegia.png" />
                      Norwegia</a></li>
                    <li><a href="#" data-country="pl">
                      <img className="content__navigation--image"
                        src="https://i.postimg.cc/bNr1phJn/Flaga-Polska.png" />
                      Polska</a></li>
                    <li><a href="#" data-country="se">
                      <img className="content__navigation--image"
                        src="https://i.postimg.cc/GpwDFTjP/Flaga-Szwecja.png" />
                      Szwecja</a></li>
                    <li><a href="#" data-country="us">
                      <img className="content__navigation--image"
                        src="https://i.postimg.cc/6qm2y83v/FlagaUSA.png" />
                      USA</a></li>
                  </ul>
                </li>
              </ol>
            </nav>
          </div>
        </aside>
);

export default Sidebar