import React from "react";
import { Avatar, Dropdown, Navbar, Text } from "@nextui-org/react";

const AvatarComp = () => {
    return (
        <Dropdown placement="bottom-right">
            <Navbar.Item>
              <Dropdown.Trigger>
                <Avatar
                  bordered
                  as="button"
                  color="primary"
                  size="md"
                  src="https://i.pravatar.cc/150?u=a042581f4e29026704d"
                />
              </Dropdown.Trigger>
            </Navbar.Item>
            <Dropdown.Menu
              aria-label="User menu actions"
              color="secondary"
              onAction={(actionKey) => console.log({ actionKey })}
            >
              <Dropdown.Item key="profile" css={{ height: "$18" }}>
                <Text b color="inherit" css={{ d: "flex" }}>
                  Signed in as
                </Text>
                <Text b color="inherit" css={{ d: "flex" }}>
                  zoey@example.com
                </Text>
              </Dropdown.Item>
              <Dropdown.Item key="WishList" withDivider>
                My WishList
              </Dropdown.Item>
              <Dropdown.Item key="team_settings">Add to WishList</Dropdown.Item>
              <Dropdown.Item key="SwapList" withDivider>
                My SwapList
              </Dropdown.Item>
              <Dropdown.Item key="system">Add to SwapList</Dropdown.Item>
              <Dropdown.Item key="help_and_feedback" withDivider>
                Recommended Items
              </Dropdown.Item>
              <Dropdown.Item key="logout" withDivider color="error">
                Log Out
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
    );
}

export default AvatarComp;