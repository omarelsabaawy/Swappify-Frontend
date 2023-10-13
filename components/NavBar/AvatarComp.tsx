import React from "react";
import { Avatar, Dropdown, Navbar, Text } from "@nextui-org/react";
import { useUserContext } from "../../Context/UserContext";

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
                  size="lg"
                 text={user ? (user?.avatar ?? "").toUpperCase() : ""}
                />
              </Dropdown.Trigger>
            </Navbar.Item>
            <Dropdown.Menu
              aria-label="User menu actions"
              color="default"
              onAction={(actionKey) => console.log({ actionKey })}
            >
              <Dropdown.Item key="profile" css={{ height: "$18" }}>
                <Text b color="inherit" css={{ d: "flex" }}>
                  Signed in as
                </Text>
                <Text b color="warning" css={{ d: "flex" }}>
                  {((user?.email)?.split('@')[0])?.toLocaleUpperCase()}
                </Text>
              </Dropdown.Item>
              <Dropdown.Item key="WishList" withDivider>
                My WishList 
              </Dropdown.Item>
              <Dropdown.Item key="AddToWishList">Add to WishList</Dropdown.Item>
              <Dropdown.Item key="SwapList" withDivider>
                My SwapList
              </Dropdown.Item>
              <Dropdown.Item key="AddToSwapList">Add to SwapList</Dropdown.Item>
              <Dropdown.Item key="RecommendedItems" withDivider>
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