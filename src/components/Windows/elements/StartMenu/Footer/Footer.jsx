import "./footer.scss";
import FooterButton from "./FooterButton/FooterButton";

function Footer(props) {
  return (
    <footer className="footer">
      <FooterButton icon="logoff" text="Log Off" btnType="logoff" />
      <FooterButton icon="turnoff" text="Turn Off Computer" btnType="shutdown" />
    </footer>
  );
}

export default Footer;
