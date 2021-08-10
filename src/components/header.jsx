import React from 'react';

export default function header({ children, styles }) {
  return <header className={styles}>{children}</header>;
}

// Setting up default props incase if forget to add when passing a component
header.defaultProps = {
  styles: "defaultHero",
};