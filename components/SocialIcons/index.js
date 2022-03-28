import NextLink from "next/link";
import Tooltip from "../Tooltip";
import styles from "./index.module.scss";

export default function SocialIcons() {
  return (
    <div className={styles.socialIcons}>
      <Link
        link="https://www.youtube.com/3blue1brown"
        icon="fab fa-youtube"
        tooltip="Maybe you're not the kind of person who 
        subscribes to YouTube channels, I get that. If you
        enjoy the videos, though, consider subscribing as
        a way of signaling you want more like this in your
        recommendations."
      />
      <Link
        link="https://twitter.com/3blue1brown"
        icon="fab fa-twitter"
        tooltip="Honestly, we should all probably spend 
        less time on Twitter. But when you are there, 
        wouldn't you like a little more math in your 
        feed?"
      />
      {/* <Link
        link="https://3blue1brown.substack.com/"
        icon="fas fa-envelope-open-text"
        tooltip="Join the mailing list! I know, I know, we
        all try to keep our inbox clean. But what is that
        cleanliness for if not to make room for edifying
        math lessons?"
      /> */}
      <Link
        link="http://www.facebook.com/3blue1brown"
        icon="fab fa-facebook"
        tooltip="I'll level with you, this is a very 
        scantily managed Facebook page. It's pretty much 
        just a place to throw up new videos."
      />
      <Link
        link="https://www.instagram.com/randy_the_pi/"
        icon="fab fa-instagram"
        tooltip="The adventures of Randy the pi"
      />
    </div>
  );
}

// social link
function Link({ link, icon, tooltip, label = "" }) {
  return (
    <NextLink href={link} passHref>
      <Tooltip content={tooltip}>
        <a>
          <i className={icon} />
        </a>
      </Tooltip>
    </NextLink>
  );
}
