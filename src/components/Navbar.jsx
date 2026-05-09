import logo from "../assets/logo.png";

function Navbar({ searchKeyword, setSearchKeyword }) {
  return (
    <section className="topbar">
      <div className="brand">
        <img className="brand-logo" src={logo} alt="KhasNews Logo" />

        <div>
          <p className="eyebrow">Fresh Indonesian News</p>
          <h1>KhasNews</h1>
        </div>
      </div>

      <input
        className="search-input"
        type="text"
        placeholder="Cari berita..."
        value={searchKeyword}
        onChange={(event) => setSearchKeyword(event.target.value)}
      />
    </section>
  );
}

export default Navbar;