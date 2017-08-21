import * as React from "react";
import Dashboard from "../../components/Dashboard";
import { shallow } from 'enzyme';
import {Link} from "react-router-dom";
import { expect } from 'chai';

test('Renders correct route', () => {
    const dashboard = shallow(<Dashboard/>);
    expect(dashboard.find(Link).at(0).props().to).to.equals('forms');
});