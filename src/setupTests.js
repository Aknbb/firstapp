/* eslint-disable import/newline-after-import,import/no-extraneous-dependencies,
eol-last,prettier/prettier */
// eslint-disable-next-line import/no-extraneous-dependencies
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });
