const Header = () => {
  return (
    <>
      <div>I am a header. Cool.</div>
      <div>{import.meta.env.VITE_API_URL}</div>
    </>
  );
};

export default Header;
