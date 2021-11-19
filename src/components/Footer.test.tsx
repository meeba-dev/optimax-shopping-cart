import renderer from "react-test-renderer";
import Footer from "./Footer";

describe('Footer component', () => {

    it('should check if it rendered correctly', () => {
        const footer = renderer.create(<Footer/>).toJSON();
        expect(footer).toMatchSnapshot();
    });
});