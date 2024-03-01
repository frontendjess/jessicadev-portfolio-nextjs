import styled from 'styled-components'

const TooltipContainer = styled.span`
    visibility: hidden;
    width: auto;
    max-width: 22vw;
    background-color: var(--color-black);
    color: var(--color-white);
    text-align: center;
    padding: 5px 10px;
    border-radius: 6px;
    position: absolute;
    font-family: var(--font-body);
    font-size: ${props => props.fontSize === 'small' ? '0.8rem' : (props.fontSize || 'var(--font-size)')};
    z-index: 1;

    ${props => {
        switch (props.tooltipAlign) {
          case 'right':
            return `
              right: 0%;
              top: 50%;
              transform: translateY(-50%);
              margin-right: 8px;
            `;
          case 'below':
            return `
              top: 100%;
              left: 50%;
              transform: translateX(-50%);
              margin-top: 8px;
            `;
          default:
            return `
                bottom: 90%;
                left: 50%;
                transform: translateX(-50%);
            `; 
        }
      }}

    margin-left: ${props => props.marginLeft === 'filter' ? '-60px' : (props.marginLeft || '0')};
`

const TooltipWrapper = styled.div`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;

    &:hover ${TooltipContainer} {
        visibility: visible;
    }
`

const Tooltip = ({ children, text, fontSize, marginLeft, tooltipAlign }) => {
    return (
        <TooltipWrapper>
            {children}
            <TooltipContainer fontSize={fontSize} marginLeft={marginLeft} tooltipAlign={tooltipAlign}>{text}</TooltipContainer>
        </TooltipWrapper>
    )
}

export default Tooltip
