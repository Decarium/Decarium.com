import React from 'react';

import styles from './Navigation.css';

import Logo from '../Logo';

class Navigation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      width: 0,
      height: 0,
      modalOpen: false,
    };
  }


  componentWillMount() {
    this.updateDimensions();
  }

  componentDidMount() {
    window.addEventListener('resize', this.updateDimensions);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateDimensions);
  }

  openModal = () => {
    this.setState({ modalOpen: true });
  }

  closeModal = () => {
    this.setState({ modalOpen: false });
  }

  updateDimensions = () => {
    const w = window;
    const d = document;
    const documentElement = d.documentElement;
    const body = d.getElementsByTagName('body')[0];
    const width = w.innerWidth || documentElement.clientWidth || body.clientWidth;
    const height = w.innerHeight || documentElement.clientHeight || body.clientHeight;

    this.setState({ width, height });
  }

  render() {
    if (this.state.width < 500) {
      return (
        <div>
          <nav className={styles.logo}>
            <Logo
              linked
            />
          </nav>
        </div>

      );
    }
    // Make sure that the modal is always closed if above 500px
    return (
      <nav className={styles.logo}>
        <Logo
          linked
        />
      </nav>
    );
  }
}

export default Navigation;
