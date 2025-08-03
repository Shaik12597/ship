export default function VideoPage() {
  return (
    <div style={styles.page}>
      <h1>🎥 Here's a Surprise Video!</h1>
      <iframe
        width="320"
        height="180"
        src=""
        title="Friendship Day Video"
        frameBorder="0"
        allowFullScreen
      />
    </div>
  );
}

const styles = {
  page: {
    height: '100vh',
    backgroundColor: '#e0f7fa',
    fontFamily: 'Georgia, serif',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    gap: '20px',
  },
};
