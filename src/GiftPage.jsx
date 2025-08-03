import { useNavigate } from 'react-router-dom';
import giftGif from './assets/gift.gif';

export default function GiftPage() {
  const navigate = useNavigate();

  const handleClick = () => {
    setTimeout(() => navigate('/wish'), 1000); // Navigate after animation
  };

  return (
    <div style={styles.page}>
      <h1>🎁 Click the Gift!</h1>
      <img
        src={giftGif}
        alt="Gift"
        onClick={handleClick}
        style={{ width: '200px', cursor: 'pointer' }}
      />
    </div>
  );
}

const styles = {
  page: {
    height: '100vh',
    backgroundColor: '#fffbe6',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    fontFamily: 'cursive',
  },
};
