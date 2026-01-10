import phone from '../assets/Phone1.png';

export function Showcase() {
  return (
    <section
      style={{
        width: '100%',
        padding: '6rem 0',
        display: 'flex',
        justifyContent: 'center',
        background: 'var(--background)',
      }}
    >
      <img
        src={phone}
        alt="Zuple App Preview"
        style={{
          height: '640px',
          maxWidth: '100%',
          objectFit: 'contain',
          filter: 'drop-shadow(0 40px 80px rgba(0,0,0,0.25))',
        }}
      />
    </section>
  );
}
