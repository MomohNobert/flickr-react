import { Style } from "./modal.styles";
import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import { Transition } from "react-transition-group";
import gsap from "gsap";

interface ModalProps {
  toggle: () => void;
  hideClose?: boolean;
  modal: boolean;
  children: React.ReactNode
}

function enter(node: gsap.TweenTarget) {
  gsap.from(node, {
    duration: 0.5,
    autoAlpha: 0,
  });
}

function exit(node: gsap.TweenTarget) {
  gsap.to(node, {
    duration: 0.5,
    autoAlpha: 0,
  });
}

function Modal({ modal, children, toggle, hideClose }: ModalProps) {
  const [_document, set_document] = useState<Document>();
  const nodeRef = React.useRef(null);

  useEffect(() => {
    set_document(document);
  }, []);

  function turnOffModal() {
    toggle();
  }

  return (
    _document ?
      ReactDOM.createPortal(
        <Transition
          key="modal"
          timeout={500}
          in={modal}
          nodeRef={nodeRef.current}
          onEnter={enter}
          onExit={exit}
          mountOnEnter={true}
          unmountOnExit={true}
        >
          <Style.Container ref={nodeRef.current}>
            <Style.CloseContainer onClick={toggle} />
            <Style.ContentContainer>
              {children}
              {hideClose ? null : (
                <svg
                  onClick={turnOffModal}
                  width="30"
                  height="30"
                  viewBox="0 0 30 30"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className={"close-modal-svg"}
                >
                  <path
                    d="M25.6114 4.38906C19.7586 -1.46245 10.2404 -1.46245 4.38767 4.38906C-1.46256 10.2406 -1.46256 19.7612 4.38767 25.6128C7.31404 28.5379 11.1571 29.9998 15.0002 29.9998C18.8433 29.9998 22.685 28.5378 25.6114 25.6128C31.4629 19.7613 31.4629 10.2406 25.6114 4.38906ZM21.1893 19.4224C21.6782 19.9113 21.6782 20.7017 21.1893 21.1907C20.9454 21.4345 20.6253 21.5571 20.3051 21.5571C19.985 21.5571 19.6648 21.4345 19.4209 21.1907L15.0001 16.7686L10.5805 21.1894C10.3354 21.4332 10.0152 21.5558 9.69635 21.5558C9.37622 21.5558 9.05603 21.4332 8.81216 21.1894C8.3232 20.7004 8.3232 19.9088 8.81216 19.4211L13.2317 15.0003L8.81093 10.5795C8.32197 10.0905 8.32197 9.29888 8.81093 8.81115C9.29866 8.32219 10.0903 8.32219 10.5792 8.81115L15 13.232L19.4208 8.81115C19.9098 8.32219 20.7002 8.32219 21.1892 8.81115C21.6781 9.29888 21.6781 10.0905 21.1892 10.5795L16.7684 15.0003L21.1893 19.4224Z"
                    fill="white"
                  />
                </svg>
              )}
            </Style.ContentContainer>
          </Style.Container>
        </Transition>,
        _document?.body
      ) : null
  );
}

export default Modal;
