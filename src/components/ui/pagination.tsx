import * as React from "react"
import { ChevronLeft, ChevronRight, MoreHorizontal } from "lucide-react"

import { cn } from "@/lib/utils"
import { ButtonProps, buttonVariants } from "@/components/ui/button"

const Pagination = ({ className, ...props }: React.ComponentProps<"nav">) => (
  <nav
    role="navigation"
    aria-label="pagination"
    className={cn("mx-auto flex w-full justify-center", className)}
    {...props}
  />
)
Pagination.displayName = "Pagination"

interface PaginationContentProps extends React.ComponentProps<"ul"> {
  isArabic?: boolean;
}

const PaginationContent = React.forwardRef<
  HTMLUListElement,
  PaginationContentProps
>(({ className, isArabic, ...props }, ref) => (
  <ul
    ref={ref}
    className={cn("flex flex-row items-center gap-1", isArabic && "flex-row-reverse", className)}
    {...props}
  />
))
PaginationContent.displayName = "PaginationContent"

const PaginationItem = React.forwardRef<
  HTMLLIElement,
  React.ComponentProps<"li">
>(({ className, ...props }, ref) => (
  <li ref={ref} className={cn("", className)} {...props} />
))
PaginationItem.displayName = "PaginationItem"

type PaginationLinkProps = {
  isActive?: boolean;
  isArabic?: boolean;
} & Pick<ButtonProps, "size"> &
  React.ComponentProps<"a">

const PaginationLink = ({
  className,
  isActive,
  isArabic, // Added isArabic here, though not directly used in this component, but passed down
  size = "icon",
  ...props
}: PaginationLinkProps) => (
  <a
    aria-current={isActive ? "page" : undefined}
    className={cn(
      buttonVariants({
        variant: isActive ? "outline" : "ghost",
        size,
      }),
      className
    )}
    {...props}
  />
)
PaginationLink.displayName = "PaginationLink"

const PaginationPrevious = ({
  className,
  isArabic,
  ...props
}: React.ComponentProps<typeof PaginationLink> & { isArabic?: boolean }) => (
  <PaginationLink
    aria-label={isArabic ? "اذهب إلى الصفحة السابقة" : "Go to previous page"}
    size="default"
    className={cn("gap-1", isArabic ? "pr-2.5" : "pl-2.5", className)}
    {...props}
  >
    {isArabic ? <ChevronRight className="h-4 w-4" /> : <ChevronLeft className="h-4 w-4" />}
    <span>{isArabic ? "السابق" : "Previous"}</span>
    {!isArabic && <ChevronLeft className="h-4 w-4 opacity-0" /> /* Spacer for LTR */}
  </PaginationLink>
)
PaginationPrevious.displayName = "PaginationPrevious"

const PaginationNext = ({
  className,
  isArabic,
  ...props
}: React.ComponentProps<typeof PaginationLink> & { isArabic?: boolean }) => (
  <PaginationLink
    aria-label={isArabic ? "اذهب إلى الصفحة التالية" : "Go to next page"}
    size="default"
    className={cn("gap-1", isArabic ? "pl-2.5" : "pr-2.5", className)}
    {...props}
  >
    {!isArabic && <ChevronRight className="h-4 w-4 opacity-0" /> /* Spacer for LTR */}
    <span>{isArabic ? "التالي" : "Next"}</span>
    {isArabic ? <ChevronLeft className="h-4 w-4" /> : <ChevronRight className="h-4 w-4" />}
  </PaginationLink>
)
PaginationNext.displayName = "PaginationNext"

const PaginationEllipsis = ({
  className,
  ...props
}: React.ComponentProps<"span">) => (
  <span
    aria-hidden
    className={cn("flex h-9 w-9 items-center justify-center", className)}
    {...props}
  >
    <MoreHorizontal className="h-4 w-4" />
    <span className="sr-only">More pages</span>
  </span>
)
PaginationEllipsis.displayName = "PaginationEllipsis"

export {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
}
