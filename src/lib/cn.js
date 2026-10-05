// Joins class names, skipping anything falsy.
export function cn(...classes) {
  return classes.filter(Boolean).join(' ');
}
