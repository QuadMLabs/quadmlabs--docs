import clsx from 'clsx';
import {translate} from '@docusaurus/Translate';
import styles from './styles.module.css';

/**
 * Original illustrations for the home cards. They are inline SVG and use the
 * theme CSS variables, so they follow the light/dark palette automatically.
 */

function Frame({title, children}) {
  return (
    <svg
      className={styles.featureSvg}
      viewBox="0 0 240 160"
      role="img"
      aria-label={title}>
      <circle className={styles.blob} cx="120" cy="80" r="66" />
      {children}
    </svg>
  );
}

/** Consulting & optimization: a process flow with an improving trend. */
export function ConsultingIllustration() {
  return (
    <Frame
      title={translate({
        id: 'home.illustration.consulting',
        message: 'Process flow with a rising trend',
      })}>
      <g className={styles.link}>
        <line x1="56" y1="64" x2="86" y2="64" />
        <line x1="148" y1="64" x2="164" y2="64" />
      </g>
      <polygon className={styles.accent} points="90,64 83,59 83,69" />
      <polygon className={styles.accent} points="168,64 161,59 161,69" />

      <circle className={styles.accent} cx="40" cy="64" r="16" />
      <circle className={styles.onAccentFill} cx="40" cy="64" r="5" />

      <rect className={styles.panel} x="92" y="46" width="56" height="36" rx="9" />
      <rect className={styles.ink} x="102" y="56" width="30" height="5" rx="2.5" />
      <rect className={styles.soft} x="102" y="67" width="20" height="5" rx="2.5" />

      <rect className={styles.panel} x="168" y="46" width="44" height="36" rx="9" />
      <circle className={styles.accent} cx="190" cy="64" r="10" />
      <polyline className={clsx(styles.glyph)} points="185,64 189,68 196,60" />

      <line className={styles.base} x1="58" y1="140" x2="182" y2="140" />
      <rect className={styles.soft} x="68" y="124" width="14" height="16" rx="3" />
      <rect className={styles.soft} x="90" y="116" width="14" height="24" rx="3" />
      <rect className={styles.soft} x="112" y="108" width="14" height="32" rx="3" />
      <rect className={styles.soft} x="134" y="100" width="14" height="40" rx="3" />
      <rect className={styles.accent} x="156" y="92" width="14" height="48" rx="3" />
    </Frame>
  );
}

/** Automation & integrations: a hub connected to other systems. */
export function AutomationIllustration() {
  return (
    <Frame
      title={translate({
        id: 'home.illustration.automation',
        message: 'Central hub connected to other systems',
      })}>
      <g className={styles.link}>
        <line x1="40" y1="36" x2="100" y2="62" />
        <line x1="200" y1="36" x2="140" y2="62" />
        <line x1="40" y1="124" x2="100" y2="98" />
        <line x1="200" y1="124" x2="140" y2="98" />
      </g>

      <circle className={styles.panel} cx="40" cy="36" r="13" />
      <circle className={styles.accent} cx="40" cy="36" r="4.5" />
      <rect className={styles.panel} x="188" y="24" width="24" height="24" rx="7" />
      <rect className={styles.accent} x="196" y="32" width="8" height="8" rx="2.5" />
      <rect className={styles.panel} x="28" y="112" width="24" height="24" rx="7" />
      <rect className={styles.accent} x="36" y="120" width="8" height="8" rx="2.5" />
      <circle className={styles.panel} cx="200" cy="124" r="13" />
      <circle className={styles.accent} cx="200" cy="124" r="4.5" />

      <rect className={styles.accent} x="92" y="52" width="56" height="56" rx="15" />
      <polygon
        className={styles.onAccentFill}
        points="123,63 106,85 118,85 113,99 134,75 122,75"
      />
    </Frame>
  );
}

/** Custom solutions & development: a code window with an extra module. */
export function DevelopmentIllustration() {
  return (
    <Frame
      title={translate({
        id: 'home.illustration.development',
        message: 'Code window with an added module',
      })}>
      <rect className={styles.panel} x="34" y="26" width="156" height="106" rx="12" />
      <line className={styles.base} x1="34" y1="52" x2="190" y2="52" />
      <circle className={styles.accent} cx="50" cy="39" r="3.5" />
      <circle className={styles.soft} cx="62" cy="39" r="3.5" />
      <circle className={styles.soft} cx="74" cy="39" r="3.5" />

      <rect className={styles.accent} x="50" y="64" width="44" height="6" rx="3" />
      <rect className={styles.ink} x="102" y="64" width="52" height="6" rx="3" />
      <rect className={styles.soft} x="64" y="78" width="70" height="6" rx="3" />
      <rect className={styles.accent} x="64" y="92" width="30" height="6" rx="3" />
      <rect className={styles.ink} x="102" y="92" width="34" height="6" rx="3" />
      <rect className={styles.soft} x="50" y="106" width="56" height="6" rx="3" />

      <rect className={styles.tileCut} x="164" y="92" width="52" height="52" rx="13" />
      <rect className={styles.accent} x="168" y="96" width="44" height="44" rx="11" />
      <g className={styles.glyph}>
        <polyline points="184,111 177,118 184,125" />
        <polyline points="196,111 203,118 196,125" />
        <line x1="193" y1="127" x2="199" y2="109" />
      </g>
    </Frame>
  );
}
