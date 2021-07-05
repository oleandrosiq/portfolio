import { useState } from 'react';

import Switch from 'react-switch';
import { shade } from 'polished';

import { Link } from 'react-router-dom';
import { Container, Nav, Wrapper, WrapperMobile, NavMobile, ContainerMobile } from './styles';

import { useContext } from 'react';
import { ThemeContext } from 'styled-components';
import { MyThemeContext } from '../../contexts/MyThemeContext';

export function Header({ home, about, portfolio }) {
  const { title, colors } = useContext(ThemeContext);
  const { toggleTheme } = useContext(MyThemeContext);
  const [navMobile, setNavMobile] = useState(false);

  function handleNavMobile() {
    setNavMobile(!navMobile);
  }

  return (
    <Container>
      <Wrapper>
        <a href="/">Leandrosiq1</a>

        <Nav>
        <ul>
          <li>
            { 
              home ? <Link to="/" className="active" >Início</Link> : <Link to="/">Início</Link>
            }
          </li>
          <li>
            { 
              about ? <Link to="/about" className="active" >Sobre</Link> : <Link to="/about">Sobre</Link>
            }
          </li>
          <li>
            { 
              portfolio ? <Link to="/portfolio" className="active">Portfólio</Link> : <Link to="/portfolio">Portfólio</Link>
            }
          </li>
          <Switch 
            onChange={toggleTheme}
            checked={title === 'light'}
            checkedIcon={false}
            uncheckedIcon={false}
            width={40}
            height={15}
            handleDiameter={20}
            offColor={shade(0.15, colors.primary)}
            onColor={colors.shape}
          />
        </ul>
      </Nav>
      </Wrapper>

      <WrapperMobile>
        <ContainerMobile>
          <a href="/">Leandrosiq1</a>
        
          <div onClick={handleNavMobile} className={`menu-mobile ${ navMobile && 'active' }`}>
            <div></div>
            <div></div>
            <div></div>
          </div>
        </ContainerMobile>

        { navMobile && 
          <NavMobile>
            <ul>
              <li>
                { 
                  home ? <Link to="/" className="active" >Início</Link> : <Link to="/">Início</Link>
                }
              </li>
              <li>
                { 
                  about ? <Link to="/about" className="active" >Sobre</Link> : <Link to="/about">Sobre</Link>
                }
              </li>
              <li>
                { 
                  portfolio ? <Link to="/portfolio" className="active">Portfólio</Link> : <Link to="/portfolio">Portfólio</Link>
                }
              </li>
              <Switch 
                onChange={toggleTheme}
                checked={title === 'light'}
                checkedIcon={false}
                uncheckedIcon={false}
                width={40}
                height={15}
                handleDiameter={20}
                offColor={shade(0.15, colors.primary)}
                onColor={colors.shape}
              />
            </ul>
          </NavMobile>
        }
      </WrapperMobile>
    </Container>
  );
}