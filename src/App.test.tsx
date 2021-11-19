import ReactDOM from 'react-dom';
import App from './App';
import { shallow } from 'enzyme';
import Cart from './components/Cart';
import Header from './components/Header';
import Footer from './components/Footer';
import Products from './components/Products';

describe("Checking main components in App", () => {

    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
    ReactDOM.unmountComponentAtNode(div);

    it("renders <Header/> component", () => {
        const wrapper = shallow(<App/>);
        expect(wrapper.find(Header).length).toEqual(1);
    });
    it("renders <Footer/> component", () => {
        const wrapper = shallow(<App/>);
        expect(wrapper.find(Footer).length).toEqual(1);
    });
    it("renders <Products/> component", () => {
        const wrapper = shallow(<App/>);
        expect(wrapper.find(Products).length).toEqual(1);
    });
    it("renders <Cart/> component", () => {
        const wrapper = shallow(<App/>);
        expect(wrapper.find(Cart).length).toEqual(1);
    });
});