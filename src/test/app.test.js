import { expect } from "chai";
import React from "react";
import LoginPage from "../components/LoginPage";
import SignupPage from "../components/SignupPage";
import ImageDisplay from "../components/ImageDisplay";
import ImageUploader from "../components/ImageUploader";
import { mount, shallow } from "enzyme";
import { store } from "../store";
import { Provider } from "react-redux";

describe("<LoginPage/>", () => {
  it("Login Page Renders", () => {
    const wrapper = shallow(<LoginPage />);
    expect(wrapper).to.have.length(1);
  });
});

describe("<SignupPage/>", () => {
  it("SignupPage Page Renders", () => {
    const wrapper = shallow(<SignupPage />);
    expect(wrapper).to.have.length(1);
  });
});

describe("<ImageUploader/>", () => {
  it("ImageUploader component renders", () => {
    const wrapper = shallow(
      <Provider store={store}>
        <ImageUploader />
      </Provider>
    );
    expect(wrapper).to.have.length(1);
  });
});

describe("<ImageDisplay/>", () => {
  it("ImageDisplay Page Renders", () => {
    const wrapper = shallow(
      <Provider store={store}>
        <ImageDisplay />
      </Provider>
    );
    expect(wrapper).to.have.length(1);
  });
});
