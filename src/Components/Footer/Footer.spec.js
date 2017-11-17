import React from 'react';
import { Link, MemoryRouter } from 'react-router';
import { expect } from 'chai';
import { shallow, mount } from 'enzyme';
import renderer from 'react-test-renderer';
import Footer from './Footer';

// Snapshot testing for Footer

it('renders correctly', () => {
  const tree = renderer.create(
    <Footer />,
  ).toJSON();
  expect(tree).toMatchSnapshot();
});

// describe('Footer', () => {
//   it('Should have a link to Copyright', () => {
//     const footer = shallow(<Footer />);
//     expect(footer.find(Link)).to.have.length(1);
//   });
//
//   it('Should render a footer element', () => {
//     const footer = shallow(<Footer />);
//     expect(footer.find('footer')).to.have.length(1);
//   });
//
//   it('Should contain my name in the text', () => {
//     const footer = mount(
//       <MemoryRouter location="/">
//         <Footer />
//       </MemoryRouter>);
//     expect(footer.text()).to.contain('Sean Kilgarriff');
//   });
//
//   it('Should contain a link to the copyright page', () => {
//     const footer = mount(
//       <MemoryRouter location="/">
//         <Footer />
//       </MemoryRouter>);
//     expect(footer.find('a').prop('href')).to.equal('/Copyright');
//   });
// });
