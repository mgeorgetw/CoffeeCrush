export const Card = ({
  children,
  className,
}: {
  children: any;
  className?: string;
}) => (
  <li className={`flex-card-listitem ${className}`}>
    <div className="flex-card">{children}</div>
  </li>
);
