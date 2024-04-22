
type InfoPanelProps = {
  title: string,
  metrics?: number
}

const InfoPanel = ({ title, metrics = 0 }: InfoPanelProps) => {
  return (
    <>
      <section className="text-center sm:text-left">
        <p className="text-[0.8rem] text-[#697c9a] dark:text-slate-300">{title}</p>
        <h2 className="text-lg font-semibold text-slate-900 dark:text-[#f5f7ff]">{metrics}</h2>
      </section>
    </>
  );
}

export default InfoPanel;