import '@testing-library/jest-dom/extend-expect';

import { configure } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';

import * as matchers from 'jest-extended';

configure({ adapter: new Adapter() });

expect.extend(matchers);


const configJest = {
    "jest": {
        "setupFilesAfterEnv": ["jest-extended/all"]
      }
};

export default configJest;