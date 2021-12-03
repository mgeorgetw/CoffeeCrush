export const Card = ({ children }: { children: any }) => (
  <li className={`flex-card-listitem`}>
    <div className="flex-card">{children}</div>
  </li>
);
