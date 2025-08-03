import { useNavigate } from 'react-router-dom';

export default function WishPage() {
  const navigate = useNavigate();

  return (
    <div style={styles.page}>
      
      <button onClick={() => navigate('/video')} style={styles.button}>
        🎬 Watch a Video
      </button>
    </div>
  );
}
