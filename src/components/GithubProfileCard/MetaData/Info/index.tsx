import React from "react";

type InfoProps = {
  detail?: string,
  children: React.ReactNode
}

const Info = ({ detail, children }: InfoProps) => {
  return (
    <>
      <section className="flex items-center gap-4">
        {children}
        <span className="text-gray-400 dark:text-gray-300 text-[0.8rem]">{detail ?? 'Not Available'}</span>
      </section>
    </>
  );
}

export default Info;