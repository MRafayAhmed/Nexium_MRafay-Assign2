const dict: Record<string, string> = {
  The: 'دی',
  quick: 'تیز',
  brown: 'بھورا',
  fox: 'لومڑی',
  jumps: 'چھلانگ لگاتا ہے',
  over: 'پر',
  lazy: 'سست',
  dog: 'کتا',
};

export function translateToUrdu(text: string): string {
  return text
    .split(' ')
    .map(w => dict[w] || w)
    .join(' ');
}