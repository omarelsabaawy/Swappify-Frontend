import React from "react";
import { Avatar, Dropdown, Navbar, Text } from "@nextui-org/react";
import { useUserContext } from "../../pages/Context/UserContext";

const AvatarComp = () => {
  const { user, clearUserAndToken } = useUserContext();

  const handleSignOut = () => {
    clearUserAndToken();
    // router.push('/login');
  };


    return (
        <Dropdown placement="bottom-right">
            <Navbar.Item>
              <Dropdown.Trigger>
                <Avatar
                  bordered
                  as="button"
                  color={"error"}
                  size="md"
                 text={user ? (user?.avatar ?? "").toUpperCase() : ""}
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
                  {(user?.email)?.split('@')[0]}
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
            <button
              type="button"
              style={{
              width: "100%",
              background: "transparent",
              border: "none",
              textAlign: "left",
              cursor: 'pointer'
              }}
              onClick={handleSignOut}
            >
              Log Out
            </button>
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
    );
}

export default AvatarComp;