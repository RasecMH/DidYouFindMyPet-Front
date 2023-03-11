export default function formatPhone(phoneNumber: string): string {
  const phoneRegex = /^(\+\d{1,3})?(\d{2,3})(\d{4,5})(\d{4})$/;
  const matches = phoneNumber.match(phoneRegex);

  if (!matches) {
    return phoneNumber;
  }

  const [, ddi, ddd, prefix, suffix] = matches;

  return `${ddi ? ddi + ' ' : ''}(${ddd}) ${prefix}-${suffix}`;
}
