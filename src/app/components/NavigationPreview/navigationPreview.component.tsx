import ArrowButton from "../../atoms/ArrowButton/arrowButton.atom";
import { Style } from "./navigationPreview.styles";

interface NavigationPreviewProps {
  handleForwardClick: () => void;
}

function NavigationPreview({ handleForwardClick }: NavigationPreviewProps) {
  return (
    <Style.Container>
      <ArrowButton handleClick={handleForwardClick}>
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M14.707 20.707C14.5184 20.8892 14.2658 20.9899 14.0036 20.9877C13.7414 20.9854 13.4906 20.8802 13.3052 20.6948C13.1198 20.5094 13.0146 20.2586 13.0123 19.9964C13.01 19.7342 13.1108 19.4816 13.293 19.293L19.586 13H2C1.73478 13 1.48043 12.8946 1.29289 12.7071C1.10536 12.5196 1 12.2652 1 12C1 11.7348 1.10536 11.4804 1.29289 11.2929C1.48043 11.1054 1.73478 11 2 11H19.586L13.293 4.70699C13.1108 4.51839 13.01 4.26579 13.0123 4.00359C13.0146 3.7414 13.1198 3.49058 13.3052 3.30518C13.4906 3.11977 13.7414 3.0146 14.0036 3.01232C14.2658 3.01004 14.5184 3.11084 14.707 3.293L22.707 11.293C22.7996 11.3861 22.873 11.4965 22.923 11.618C22.9738 11.7389 23 11.8688 23 12C23 12.1312 22.9738 12.2611 22.923 12.382C22.873 12.5035 22.7996 12.6139 22.707 12.707L14.707 20.707Z" fill="black" />
        </svg>
      </ArrowButton>
    </Style.Container>
  )
}

export default NavigationPreview;