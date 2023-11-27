import Badge from "react-bootstrap/Badge";
import Button from "react-bootstrap/Button";

function ButtonExample(props) {
  return (
    <Button variant="warning" onClick={props.onShow}>
      🛒 Add To Buy <Badge bg="danger">9</Badge>
    </Button>
  );
}

export default ButtonExample;
