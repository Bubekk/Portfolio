import "./MobileScreen.scss";
function MobileScreen(props) {
  return (
    <div className="mobilescreen">
      <p>Uh-oh! We've hit a snag, and the page won't look right due to some not-so-great visuals with responsiveness.</p>
      <h2>NOT_PC_DEVICE</h2>
      <p>
        Seems like you're trying to load this page on a mobile device or test my RWD skills. Don't do that, please. Give it another go on a good old
        PC or laptop.
      </p>
      <p>
        If this is your first encounter with this message, as mentioned earlier, give it a shot on a PC or laptop, or hop over to this link for my
        'professional' portfolio.
      </p>
      <p>Not that it's unprofessional—it's just made with a dash of humor and mostly for kicks...</p>
      <p>
        Here's where some quirky technical info usually appears, nobody really understands, even the XP creators, I suspect. I'll throw it in for the
        sake of it, and I emphasize, it's pretty much mumbo jumbo.
      </p>
      <p>ERROR_MOBILE_DEVICE: 0x000000000 0xwhatever 1xtotal_nonsense 2xthings_that_look_horrible_to_the_average_user</p>
    </div>
  );
}

export default MobileScreen;
