import * as React from "react";
import FacilitySelection from "../../components/Dashboard";
import { shallow } from 'enzyme';
import {Link} from "react-router-dom";
import { expect } from 'chai';

test('Renders correct route', () => {
    const dashboard = shallow(<FacilitySelection/>);
});