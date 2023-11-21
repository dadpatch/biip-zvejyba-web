import styled from 'styled-components';
import { FishingToolsType } from '../../utils';
interface SwitchButtonProps {
  options: any[];
  onChange: (value: any) => void;
  value: any;
  className?: string;
}
const SwitchButton = ({ options, onChange, value, className = '' }: SwitchButtonProps) => {
  return (
    <Container className={className}>
      <Content $numberOfColumns={options.length}>
        {options.map((option: any, index: number) => (
          <Button
            key={`switch_btn_${index}`}
            onClick={() => onChange(option.value)}
            $selected={option.value === value}
          >
            {option.label}
          </Button>
        ))}
      </Content>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  padding: 32px 0;
`;

const Content = styled.div<{ $numberOfColumns?: number }>`
  display: grid;
  grid-template-columns: ${({ $numberOfColumns }) =>
    Array($numberOfColumns || 2)
      .fill('1fr')
      .join(' ')};
  background-color: ${({ theme }) => theme.colors.cardBackground.primary};
  padding: 4px;
  border-radius: 99px;
`;

const Button = styled.div<{ $selected: boolean }>`
  display: flex;
  background-color: ${({ $selected, theme }) => ($selected ? theme.colors.primary : 'transparent')};
  color: ${({ $selected, theme }) => ($selected ? 'white' : theme.colors.text.primary)};
  align-items: center;
  justify-content: center;
  height: 48px;
  width: 100%;
  font-size: 18px;
  font-weight: 500;
  border-radius: 99px;
  cursor: pointer;
`;

export default SwitchButton;
