import Badge from "react-bootstrap/Badge";
import Button from "react-bootstrap/Button";
import cartContext from "../../Store/cart-context";
import React, { useContext } from "react";

const ButtonExample = (props) => {
  const context = useContext(cartContext);

  const numberOfItems = context.products.length;
  return (
    <Button variant="warning" onClick={props.onShow} className="rounded-pill">
      🛒 Add To Buy{" "}
      <Badge className="rounded-pill" bg="danger">
        {numberOfItems}
      </Badge>
    </Button>
  );
};

export default ButtonExample;
