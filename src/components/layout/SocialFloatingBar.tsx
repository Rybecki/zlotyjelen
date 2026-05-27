import { SITE } from '../../data/site';
import { FacebookIcon, InstagramIcon } from '../ui/SocialIcons';
import './SocialFloatingBar.css';

export function SocialFloatingBar() {
  return (
    <aside className="social-float" aria-label="Media społecznościowe">
      <a
        href={SITE.social.facebook}
        className="social-float__link"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Facebook – Złoty Jeleń"
      >
        <FacebookIcon />
      </a>
      <a
        href={SITE.social.instagram}
        className="social-float__link"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Instagram – Złoty Jeleń"
      >
        <InstagramIcon />
      </a>
    </aside>
  );
}
