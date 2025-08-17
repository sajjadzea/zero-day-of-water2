export default function Footer() {
  if (typeof document !== 'undefined') {
    document.body.style.marginBottom = '60px';
  }
  return (
    <footer
      dir="rtl"
      style={{
        position: 'fixed',
        bottom: 0,
        left: 0,
        right: 0,
        fontSize: '13px',
        color: '#555',
        textAlign: 'center',
        paddingTop: '12px',
        paddingBottom: '12px',
      }}
    >
      <img
        src="/assets/IRAN-FLAG.png"
        alt="Iran flag"
        style={{ height: '16px', verticalAlign: 'middle', marginLeft: '6px' }}
      />
      کلیه حقوق مادی و معنوی این سایت متعلق به خانه هم‌افزایی انرژی و آب استان خراسان رضوی است.
      <br />
      طراحی و تولید: خانه هم‌افزایی انرژی و آب خراسان رضوی
    </footer>
  );
}
