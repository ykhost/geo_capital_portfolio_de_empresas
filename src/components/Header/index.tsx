import { Container, Content } from './styles';
import { useNavigate } from 'react-router-dom'

import logoImg from '../../assets/logo.png'
import Switch from 'react-switch';

import { useContext } from 'react';
import { ThemeContext } from 'styled-components';
import Search from '../Search';

interface Props {
  toggleTheme(): void;
}

export function Header({ toggleTheme }:Props) {
  const navigate = useNavigate();
  const { title } = useContext(ThemeContext);

  const handlerClick = () => {
    navigate('/home')
  }

  return (
    <Container>
      <Content>
          <img src={logoImg} title="GeoCapital" alt="GeoCapital" onClick={handlerClick} />
          <Search/>
          <Switch
              title={`Tema ${title}`}
              onChange={toggleTheme}
              checked={title === 'dark'}
              checkedIcon={false}
              uncheckedIcon={false}
              height={10}
              handleDiameter={20}
              offHandleColor="#7d7d7d"
              onHandleColor="#d9d9d9"
              offColor="#d9d9d9"
              onColor="#7d7d7d"
            />
      </Content>
    </Container>
  );
};
