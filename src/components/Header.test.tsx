import renderer from "react-test-renderer";
import Header from "./Header";

describe('Header component', () => {
 
    it('should check if it rendered correctly', () => {
         const header = renderer.create(<Header/>).toJSON();
         expect(header).toMatchSnapshot();
    });
});