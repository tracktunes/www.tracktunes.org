import { validateEmail } from './email';

const CORRECT_EMAIL_ADDRESSES = [
    'test@example.org',
    'firstname.lastname@example.com',
    'email@subdomain.example.com',
    'firstname+lastname@example.com',
    '"email"@example.com',
    '1234567890@example.com',
    'email@example-one.com',
    '_______@example.com',
    'email@example.name',
    'email@example.museum',
    'email@example.co.jp',
    'firstname-lastname@example.com',
    /*
      NB: we do not allow these correct ones:
      'email@123.123.123.123',
      'email@[123.123.123.123]',
      'much.”more\ unusual”@example.com',
      'very.unusual.”@”.unusual.com@example.com',
      'very.”(),:;<>[]”.VERY.”very@\\ "very”.unusual@strange.example.com'
    */
];

const INCORRECT_EMAIL_ADDRESSES = [
    'label1@label2@example.org',
    '©®©®©®©®©®@gmail.com',
    'あいうえお@example.org',
    'test@gm®il.com',
    'plainaddress',
    '#@%^%#$@#$@#.com',
    '@example.com',
    'Joe Smith <email@example.com>',
    'email.example.com',
    'email@example@example.com',
    '.email@example.com',
    'email.@example.com',
    'email..email@example.com',
    'email@example.com (Joe Smith)',
    'email@example',
    'email@example..com',
    'Abc..123@example.com',
    '”(),:;<>[\]@example.com',
    'just”not”right@example.com',
    'email@111.222.333.44444',
    'this\ is"really"not\allowed@example.com',
    'email@-example.com',
];

describe('Email', () => {
    it('can validate correct emails', () => {
        CORRECT_EMAIL_ADDRESSES.forEach(email => {
            expect(validateEmail(email, false)).toBeTruthy();
        });
    });

    it('can invalidate various incorrect emails', () => {
        INCORRECT_EMAIL_ADDRESSES.forEach(email => {
            expect(validateEmail(email, false)).toBeFalsy();
        });
    });

    it('can invalidate emails with a non-existing domain', () => {
        INCORRECT_EMAIL_ADDRESSES.forEach(email => {
            expect(validateEmail('test@domain.web', true)).toBeFalsy();
        });
    });

    it('can invalidate emails with a non-existing tld', () => {
        INCORRECT_EMAIL_ADDRESSES.forEach(email => {
            expect(validateEmail('test@domain.web', false)).toBeFalsy();
        });
    });
});
