import { Avatar, Link, Text } from "@nextui-org/react";
import categoriesData from './Categories.json'
function Categories() {
  const categories = categoriesData.categories;

  return (   
    <div style={{ backgroundColor: "white", marginLeft: '0', padding: '0', height: "350px" }} >
      <Text h3 weight={"medium"} size={"26px"} css={{color: "black", padding: "$12", paddingLeft: "$16"}}>
        Categories
      </Text>
      <div className="scrolling-wrapper" style={{}}>
        {categories.map((category) => (
        <div className="card" key={category.name}>
          <Link href="/" css={{ display: 'block', marginLeft: '$8', marginRight: "$8", "@smMax": {marginLeft: "$12", marginRight: "$4", marginBottom: "$0"} }}>
            <Avatar
              src={category.image_url}
              css={{ size: '$40', "@smMax": {size: "$32"} }}
              zoomed
              pointer
              bordered
              borderWeight={"light"}
            />
            <Text weight={'medium'} css={{ textAlign: 'center', color: 'black' }}>
              {category.name}
            </Text>
          </Link>
        </div>
      ))}
      </div>
    
    </div>
  )
}

export default Categories