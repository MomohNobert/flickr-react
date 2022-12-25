import { Style } from "./arrowButton.styles";

interface ArrowButtonProps {
  children: React.ReactNode,
  handleClick?: () => void;
}

function ArrowButton({ children, handleClick }: ArrowButtonProps) {
  return (
    <Style.Container onClick={handleClick}>
      {children}
    </Style.Container>
  )
}

export default ArrowButton