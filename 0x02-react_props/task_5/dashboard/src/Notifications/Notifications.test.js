import React from "react";
import { shallow } from "enzyme";
import { getLatestNotification } from "../utils/utils";
import Notifications from "./Notifications";
import NotificationItem from "./NotificationItem";

const listNotifications = [
  { id: 1, type: "default", value: "New course available" },
  { id: 2, type: "urgent", value: "New resume available" },
  { id: 3, type: "urgent", html: getLatestNotification() },
];

describe("Notification tests", () => {
  it("renders Notification component without crashing", () => {
    const wrapper = shallow(<Notifications />);
    expect(wrapper).toBeDefined();
  });

  it("renders correct list items", () => {
    const wrapper = shallow(<Notifications displayDrawer={true} listNotifications={listNotifications} />);
    expect(wrapper.find(NotificationItem)).toHaveLength(listNotifications.length);
    
    const firstItem = wrapper.find(NotificationItem).at(0);
    expect(firstItem.props()).toEqual({
      type: "default",
      value: "New course available",
      html: undefined,
      key: 1
    });
    
    const secondItem = wrapper.find(NotificationItem).at(1);
    expect(secondItem.props()).toEqual({
      type: "urgent",
      value: "New resume available",
      html: undefined,
      key: 2
    });
    
    const thirdItem = wrapper.find(NotificationItem).at(2);
    expect(thirdItem.props()).toEqual({
      type: "urgent",
      html: getLatestNotification(),
      value: undefined,
      key: 3
    });
  });

  it("displays menu item when displayDrawer is false", () => {
    const wrapper = shallow(<Notifications displayDrawer={false} />);
    expect(wrapper.find("div.menuItem").exists()).toBe(true);
    expect(wrapper.find("div.menuItem").html()).toEqual('<div class="menuItem"><p>Your notifications</p></div>');
  });

  it("does not display notifications when displayDrawer is false", () => {
    const wrapper = shallow(<Notifications displayDrawer={false} />);
    expect(wrapper.find("div.Notifications").exists()).toBe(false);
  });

  it("displays menuItem when displayDrawer is true", () => {
    const wrapper = shallow(<Notifications displayDrawer={true} />);
    expect(wrapper.find("div.menuItem").exists()).toBe(true);
  });

  it("displays Notifications when displayDrawer is true", () => {
    const wrapper = shallow(<Notifications displayDrawer={true} />);
    expect(wrapper.find("div.Notifications").exists()).toBe(true);
  });

  it("renders correctly when listNotifications is not passed", () => {
    const wrapper = shallow(<Notifications displayDrawer={true} />);
    expect(wrapper.find(NotificationItem).props().value).toEqual("No new notification for now");
  });

  it("renders correctly when empty array is passed", () => {
    const wrapper = shallow(<Notifications displayDrawer={true} listNotifications={[]} />);
    expect(wrapper.find(NotificationItem).props().value).toEqual("No new notification for now");
  });

  it("calls handleButtonClick when close button is clicked", () => {
    const handleButtonClickMock = jest.fn();
    const wrapper = shallow(
      <Notifications 
        displayDrawer={true} 
        listNotifications={listNotifications} 
        handleButtonClick={handleButtonClickMock}
      />
    );
    
    wrapper.find("button").simulate("click");
    expect(handleButtonClickMock).toHaveBeenCalled();
  });
});