function classnames(...classes: string[]): string {
  return classes.filter(Boolean).join(' ');
}

export default classnames;
