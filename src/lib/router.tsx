import { useEffect, useState, type AnchorHTMLAttributes, type MouseEvent } from 'react';

export function navigate(to: string) {
  const hash = to.split('#')[1] ?? '';
  window.history.pushState({}, '', to);
  window.dispatchEvent(new PopStateEvent('popstate'));
  if (hash) {
    requestAnimationFrame(() => document.getElementById(hash)?.scrollIntoView({ behavior: 'smooth' }));
  } else {
    window.scrollTo({ top: 0 });
  }
}

export function useCurrentPath() {
  const [pathname, setPathname] = useState(window.location.pathname);

  useEffect(() => {
    const sync = () => setPathname(window.location.pathname);
    window.addEventListener('popstate', sync);
    return () => window.removeEventListener('popstate', sync);
  }, []);

  return pathname;
}

interface LinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  to: string;
}

export function Link({ to, onClick, ...rest }: LinkProps) {
  function handleClick(event: MouseEvent<HTMLAnchorElement>) {
    onClick?.(event);
    const modified = event.metaKey || event.ctrlKey || event.shiftKey || event.altKey || event.button !== 0;
    if (!to.startsWith('/') || event.defaultPrevented || modified) return;
    event.preventDefault();
    navigate(to);
  }

  return <a href={to} onClick={handleClick} {...rest} />;
}
