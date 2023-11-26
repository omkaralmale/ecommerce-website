import Badge from "react-bootstrap/Badge";
import Button from "react-bootstrap/Button";

function ButtonExample() {
  return (
    <Button variant="warning">
      🛒 Add To Buy <Badge bg="danger">9</Badge>
    </Button>
  );
}

export default ButtonExample;
