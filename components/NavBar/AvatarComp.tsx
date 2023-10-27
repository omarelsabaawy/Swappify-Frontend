import React from "react";
import { Avatar, Dropdown, Navbar, Text } from "@nextui-org/react";
import { useUserContext } from "../../Context/UserContext";
import { useRouter } from "next/router";

const AvatarComp = () => {
  const { user, clearUserAndToken } = useUserContext();
  const router = useRouter();

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
              onAction={(actionKey) => router.push(actionKey as any)}
            >
              <Dropdown.Item key="profile" css={{ height: "$18" }}>
                <Text b color="inherit" css={{ d: "flex" }}>
                  Signed in as
                </Text>
                <Text b color="warning" css={{ d: "flex" }}>
                  {((user?.email)?.split('@')[0])?.toLocaleUpperCase()}
                </Text>
              </Dropdown.Item>
              <Dropdown.Item key="/User/List_New_Item" withDivider css={{ textTransform: 'uppercase', color: '$secondarySolidHover'}}>List new Item</Dropdown.Item>
              <Dropdown.Item key="WishList" withDivider>
                My WishList 
              </Dropdown.Item>
              <Dropdown.Item key="SwapList">
                My SwapList
              </Dropdown.Item>
              <Dropdown.Item key="RecommendedItems" withDivider>
                Recommended Items
              </Dropdown.Item>
              <Dropdown.Item key="/" withDivider color="error">
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