import "./footer.scss";
import FooterButton from "./FooterButton/FooterButton";

function Footer(props) {
  return (
    <footer className="footer">
      <FooterButton icon="logoff" text="Log Off" btnType="logoff" handleLogOff={props.handleLogOff} />
      <FooterButton icon="turnoff" text="Turn Off Computer" btnType="shutdown" handleShutDown={props.handleShutDown} />
    </footer>
  );
}

export default Footer;
