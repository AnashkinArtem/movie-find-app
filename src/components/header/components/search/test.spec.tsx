import React from "react";
import { render } from "@testing-library/react";

import Search from "./search";

describe('Test Search component', () => {
    it('Should be render component Search', () => {
        const {container} = render(<Search />);
        expect(container).toMatchSnapshot();
    });
})