import { PhoneNumberUtil, PhoneNumberFormat } from 'google-libphonenumber';

const phoneUtil = PhoneNumberUtil.getInstance();

export default function formatPhone(phoneNumber: string): string {
  try {
    const parsedNumber = phoneUtil.parseAndKeepRawInput(phoneNumber);
    const formattedNumber = phoneUtil.format(parsedNumber, PhoneNumberFormat.NATIONAL);
    return formattedNumber;
  } catch (error) {
    console.error(error);
    return phoneNumber;
  }
}
