import { Outlet } from 'react-router';

export const Layout = () => {
  return (
    <div className="relative min-h-screen bg-neutral-900">
      <img
        src="/img/background_pokeball.png"
        alt=""
        className="size-96 fixed -top-24 -left-24 -rotate-12 opacity-70 z-0 pointer-events-none"
      />
      <div className="relative z-10">
        <Outlet />
      </div>
    </div>
  );
};
