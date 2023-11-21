export default function MobileRedirectScreen() {
  return (
    <div className="mobile-redirect-screen">
      <h1 className="mobile-redirect-screen__heading">Attention</h1>
      <section className="mobile-redirect-screen__text">
        <p>
          This site was developed with a desktop first approach. It is not currently optimized for mobile devices.
          Please view this site on a desktop or laptop computer.
          Otherwise, please check out my original mobile responsive portfolio site at <a href="https://jimmyvu.co" target="_blank">jimmyvu.co</a>.
        </p>
      </section>
      <a href="https://jimmyvu.co" target="_blank" className="mobile-redirect-screen__button">Proceed to the mobile site</a>
    </div>
  );
}
