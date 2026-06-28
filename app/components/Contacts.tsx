type Props = {
  opening_hours: string;
  phone: string;
};

export default function Contacts({ opening_hours, phone }: Props) {
  const spaceIdx = opening_hours.indexOf(" ");
  const dayLabel = spaceIdx !== -1 ? opening_hours.slice(0, spaceIdx) : opening_hours;
  const hours = spaceIdx !== -1 ? opening_hours.slice(spaceIdx + 1) : "";

  return (
    <div className="px-2  pb-2">
      <h3 className="text-[15px] font-bold mb-4 text-[#111111]">Contacts</h3>
      <div className="flex gap-14">
        <div>
          <p className="text-[14px] font-medium text-contact-label mb-1">{dayLabel}</p>
          <p className="text-[14px] font-medium text-contact-info">{hours}</p>
        </div>
        <div className="-ml-3">
          <p className="text-[14px] font-medium text-contact-label mb-1">Phone</p>
          <p className="text-[14px] font-medium text-contact-info">{phone}</p>
        </div>
      </div>
    </div>
  );
}
