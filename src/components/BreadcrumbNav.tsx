import {
  Breadcrumb,
  BreadcrumbEllipsis,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

interface BreadcrumbNavProps {
  items: Array<{
    label: string;
    href?: string;
    current?: boolean;
  }>;
}

const BreadcrumbNav = ({ items }: BreadcrumbNavProps) => {
  return (
    <Breadcrumb className="mb-4">
      <BreadcrumbList>
        {items.map((item, index) => (
          <BreadcrumbItem key={index}>
            {item.current ? (
              <BreadcrumbPage>{item.label}</BreadcrumbPage>
            ) : (
              <>
                <BreadcrumbLink href={item.href || "#"}>
                  {item.label}
                </BreadcrumbLink>
                {index < items.length - 1 && <BreadcrumbSeparator />}
              </>
            )}
          </BreadcrumbItem>
        ))}
      </BreadcrumbList>
    </Breadcrumb>
  );
};

export default BreadcrumbNav;