import styled from 'styled-components';
import NumericTextField from '../fields/NumericTextField';

interface FishRowProp {
  onChange: (value: any) => void;
  fish: { label: string; photo: any; amount: any; preliminaryAmount: any };
}

const FishRow = ({ onChange, fish }: FishRowProp) => {
  const { label, photo, amount, preliminaryAmount } = fish;

  return (
    <Row>
      <Image
        src={
          photo?.url
            ? photo?.url
            : 'https://t0.gstatic.com/licensed-image?q=tbn:ANd9GcSFioPxAhwKJt3zlIkV4Q5Th0gkb5-428cZd0uPEjWoYn9Xkoi_L4C8kWaFu-KtqAvz'
        }
      />
      <Column>
        <TextColumn>
          <Title>{label}</Title>
          {preliminaryAmount && <Caught>{`Sagauta ${preliminaryAmount} kg`}</Caught>}
        </TextColumn>
        <InnerRow>
          <Button type="button" onClick={() => Number(amount) && onChange(Number(amount))}>
            -
          </Button>
          <StyledNumericTextField
            type="number"
            placeholder="0"
            name="personalCode"
            value={amount}
            onChange={(amount) => onChange(amount)}
          />
          <Button type="button" onClick={() => onChange(Number(amount) + 1)}>
            +
          </Button>
        </InnerRow>
      </Column>
    </Row>
  );
};

const StyledNumericTextField = styled(NumericTextField)`
  width: 100%;
`;

const Row = styled.div`
  display: flex;
  gap: 16px;
  height: 119px;
  color: ${({ theme }) => theme.colors.text.primary};
  width: 100%;
`;

const InnerRow = styled.div`
  display: grid;
  grid-template-columns: 56px 1fr 56px;
  gap: 16px;
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  width: 100%;
`;

const TextColumn = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const Title = styled.div`
  font-size: 2.4rem;
  font-weight: 700;
`;

const Caught = styled.div`
  display: flex;
  flex-direction:column
  gap: 12px;
`;

const Button = styled.button`
  background-color: white;
  height: 56px;
  width: 56px;
  border-radius: 4px;
  border: 1px solid ${({ theme }) => theme.colors.border};
  font-size: 2rem;
  font-weight: 600;
`;

const Image = styled.img`
  height: 119px;
  object-fit: cover;
  width: 88px;
`;

export default FishRow;
