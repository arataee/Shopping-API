/* eslint-disable @typescript-eslint/ban-types */
import { registerDecorator } from 'class-validator';

export function IsPassword(object: Object, propertyName: string) {
	registerDecorator({
		name: 'isLongerThan',
		target: object.constructor,
		propertyName: propertyName,
		options: { message: 'Password is not ok' },
		validator: {
			validate(value: string) {
				const patterns: RegExp[] = [/[A-Z]/, /[a-z]/, /\d/, /[^\s\n]/];
				const test =
					patterns.every((pattern) => pattern.test(value)) &&
					!/[\s\n]/.test(value) &&
					value.length >= 8;
				return test;
			},
		},
	});
}
